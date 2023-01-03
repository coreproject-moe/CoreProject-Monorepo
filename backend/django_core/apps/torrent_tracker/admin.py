from django.contrib import admin
from .models import Torrent, Peer, TorrentPasskey

# Register your models here.


@admin.register(Torrent)
class TorrentAdmin(admin.ModelAdmin):
    pass


@admin.register(Peer)
class PeerAdmin(admin.ModelAdmin):
    pass


@admin.register(TorrentPasskey)
class TorrentPasskeyAdmin(admin.ModelAdmin):
    pass
