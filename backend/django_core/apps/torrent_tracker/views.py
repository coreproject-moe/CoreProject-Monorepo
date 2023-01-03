import datetime
import ipaddress
import urllib.parse
from typing import Any

from django.http import HttpRequest, HttpResponse
from django.utils import timezone
from django.db.models import QuerySet

from bencode import bdecode, bencode

from .models import TorrentPasskey
from .models import Peer
from .utils.get_parameters import identity, fill_typed_get_parameters


def peer_id(x: str) -> str:
    if len(x) != 20:
        raise ValueError
    return x


def port(x: int) -> int:
    y = int(x)
    if y < 0 or y > 65535:
        raise ValueError
    return y


def byte_size(x: int) -> int:
    y = int(x)
    if y < 0:
        raise ValueError
    return y


def event(x: str) -> str:
    if x not in ["started", "completed", "stopped", "empty"]:
        raise ValueError
    return x


def BencodedResponse(x: dict) -> HttpResponse:
    return HttpResponse(bencode(x), content_type="text/plain")


# Django mangles raw bytes encoded with URL encoding in the query string by
# first decoding them into bytes, and then attempting to decode
# that into UTF-8.
#
# This means that whenever any of the raw bytes don't line up with a
# unicode codepoint, they get replaced with the � character (unicode name
# 'REPLACEMENT CHARACTER', with a hex of `0xEF 0xBF 0xBD`).
#
# This is the fault of the django `QueryDict` object.
#
# As specified in the bittorrent protocol, the `info_hash` key in the
# query string comes to us with its value set to a raw sha1 digest
# (a series of bytes). Thus, we have to use this function instead
# of the `QueryDict` object from the `HttpRequest` object for this key.
def get_raw_querystring_value(request: HttpRequest, key: str) -> Any:
    qs = request.META["QUERY_STRING"]
    qs_key = key + "="

    start = qs.find(qs_key) + len(qs_key)

    if start == -1:
        return None

    end = qs.find("&", start)

    if end == -1:
        return qs[start:]
    else:
        return qs[start:end]


# Bloated representation of peers specified in the original version of
# the bittorrent protocol.
#
# Currently unused but left in for debugging or future compatability if needed.
def bloated_peer_list(peers: QuerySet[Peer]) -> list[dict]:
    peer_list = []

    for i in peers:
        peer_list.append({"peer id": i.peer_id, "ip": i.peer_ip, "port": i.peer_port})

    return peer_list


# Compact representation of peers.
#
# Initial BEP: https://www.bittorrent.org/beps/bep_0023.html
# IPv6 extension: https://www.bittorrent.org/beps/bep_0007.html
def compact_peer_lists(peers: QuerySet[Peer]) -> tuple[bytes, bytes]:
    ipv4 = b""
    ipv6 = b""

    for i in peers:
        ip = ipaddress.ip_address(i.peer_ip)

        if ip.version == 4:
            ipv4 += ip.packed + i.peer_port.to_bytes(2, byteorder="big")
        elif ip.version == 6:
            ipv6 += ip.packed + i.peer_port.to_bytes(2, byteorder="big")
        else:
            raise ValueError("Unknown IP version.")

    return (ipv4, ipv6)


def bittorrent_announce(
    request: HttpRequest, passkey: str, torrent_type: str
) -> HttpResponse:
    try:
        passkey_db = TorrentPasskey.objects.get(key=passkey)
        user = passkey_db.user
    except TorrentPasskey.DoesNotExist:
        return BencodedResponse({"failure reason": "invalid passkey"})

    try:
        get_params = fill_typed_get_parameters(
            request,
            {
                # `info_hash` key is missing here as we have to get it manually.
                "peer_id": (True, peer_id, "must be 20 characters long"),
                "ip": (False, identity, ""),
                "port": (True, port, "must be a integer between 0 and 65535 in base-10"),
                "uploaded": (True, byte_size, "must be a positive integer in base-10"),
                "downloaded": (True, byte_size, "must be a positive integer in base-10"),
                "left": (True, byte_size, "must be a positive integer in base-10"),
                "event": (
                    False,
                    event,
                    "must be a string equal to either 'started', 'completed', 'stopped', or 'empty'",
                ),
            },
        )
    except ValueError as e:
        return BencodedResponse({"failure reason": str(e)})

    # If `ip` isn't specified in the GET parameters, default the value to the
    # IP of the client making the request
    get_params.setdefault("ip", request.META["REMOTE_ADDR"])

    # If `event` isn't specified in the GET parameters,
    # default the value to 'empty'
    get_params.setdefault("event", "empty")

    # Manually get the value of the `info_hash` key from the GET parameters
    # as django mangles it.
    #
    # See the comment for the `get_raw_querystring_value` function
    # for an explanation.
    info_hash_url_encoded = get_raw_querystring_value(request, "info_hash")

    if info_hash_url_encoded is None:
        return BencodedResponse(
            {"failure reason": "'info_hash' is a required GET parameter."}
        )

    # Convert URL-quoted bytes into bytes, then get the hex representation of said bytes.
    info_hash = urllib.parse.unquote_to_bytes(info_hash_url_encoded).hex()

    current_time = timezone.now()
    expiry_time = current_time - datetime.timedelta(hours=12)

    if torrent_type == "music":
        # Get the MusicTorrent object, or fail if it doesn't exist
        try:
            torrent = MusicTorrent.objects.get(infohash_sha1_hexdigest=info_hash)
        except MusicTorrent.DoesNotExist:
            return BencodedResponse({"failure reason": "Torrent does not exist."})

        # Get the peer object, or create one if it doesn't exist
        try:
            peer = MusicTorrentPeer.objects.get(peer_id=get_params["peer_id"])
            peer.peer_ip = get_params["ip"]
            peer.peer_port = get_params["port"]
            peer.peer_bytes_left = get_params["left"]
            peer.last_seen = current_time
            peer.save()
        except MusicTorrentPeer.DoesNotExist:
            peer = MusicTorrentPeer(
                torrent=torrent,
                peer_id=get_params["peer_id"],
                peer_ip=get_params["ip"],
                peer_port=get_params["port"],
                peer_bytes_left=get_params["left"],
            )
            peer.save()
    else:
        return BencodedResponse(
            {"failure reason": "Unrecognised URL (invalid torrent type)."}
        )

    # Update upload and download totals for the user
    if get_params["uploaded"] > 0 or get_params["downloaded"] > 0:
        user.uploaded += get_params["uploaded"]
        user.downloaded += get_params["downloaded"]
        user.save()

    # Remove old peers we haven't seen in a while
    torrent.peers.filter(last_seen__lte=expiry_time).delete()

    # Return 25 random peers from the remaining peers
    (ipv4, ipv6) = compact_peer_lists(torrent.peers.all()[:25])

    return BencodedResponse(
        {
            "interval": 60 * 60 * 12,  # specified in seconds, so this is equal to 12 hours
            "peers": ipv4,
            "peers6": ipv6,
        }
    )
