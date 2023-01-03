import os
from hashlib import sha1
from functools import partial

from django.db import models
from django.utils import timezone
from django.core.files import File
from picklefield.fields import PickledObjectField

from apps.user.models import CustomUser
from django.utils.crypto import get_random_string

# Create your models here.


# Given a FileField, returns the sha1 digest of that file.
def file_sha1_hexdigest(file: File) -> str:
    hasher = sha1()

    # The file will be already open once this is called by django,
    # but we use `open()` to change the mode to make sure that it is set to `rb`.
    #
    # We don't need to close the file at the end of this function
    # as we're only changing the mode, not actually opening it.
    file.open(mode="rb")

    # 32768 chunk size is untested for performance
    for chunk in iter(partial(file.read, 32768), b""):
        hasher.update(chunk)

    return hasher.hexdigest()


# Returns the path that the uploaded `.torrent` file should be saved to,
# relative to MEDIA_ROOT (which is set in `acorn/settings.py`).
#
# `MEDIA_ROOT/torrents/<sha1 hash of the uploaded file>.torrent`
def upload_to(instance: "Torrent", filename: str) -> str:
    return os.path.join(
        "torrents", file_sha1_hexdigest(instance.metainfo_file) + ".torrent"
    )


# Abstract model that can be extended by models for specific types of torrent,
# like music torrents, or book torrents.
#
# The reason that this model doesn't specify a mechanism to refer to the
# uploader and downloader is because it would require the addition of a
# ManyToManyField with an intermediary model. That intermediary model
# would require a foreign key that refers this model, but foreign
# keys cannot refer to abstract models.
class Torrent(models.Model):
    metainfo_file = models.FileField(upload_to=upload_to)

    # `unique=True` does two things here:
    #
    # 1. Makes it so we can't upload duplicate torrents.
    # 2. Creates a database index on the field, which makes accessing a torrent
    #    by infohash just as fast as accessing a torrent by primary key,
    #    which we will be doing a lot.
    infohash_sha1_hexdigest = models.CharField(max_length=40, unique=True)

    torrent_size = models.IntegerField()
    torrent_files = PickledObjectField()

    upload_datetime = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class Peer(models.Model):
    peer_id = models.CharField(max_length=20, unique=True)
    peer_ip = models.GenericIPAddressField()
    peer_port = models.IntegerField()
    peer_bytes_left = models.IntegerField()
    last_seen = models.DateTimeField(default=timezone.now)

    def __str__(self) -> str:
        return f"{self.peer_id} {self.peer_ip} {str(self.peer_port)} {str(self.last_seen)}"

    class Meta:
        abstract = True


class TorrentPasskey(models.Model):
    user = models.OneToOneField(
        CustomUser, on_delete=models.CASCADE, related_name="passkey"
    )
    key = models.CharField(
        max_length=40, unique=True, default=partial(get_random_string, 40)
    )

    def __str__(self) -> str:
        return self.key
