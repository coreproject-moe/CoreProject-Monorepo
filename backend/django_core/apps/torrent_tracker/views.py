import datetime
import urllib.parse

from django.http import HttpRequest, HttpResponse
from django.utils import timezone
from django.db.models import QuerySet

from .utils.get_raw_urlstring import get_raw_querystring_value
from .responses import BencodedResponse
from .utils.compact_peer_list import compact_peer_lists
from .models import TorrentPasskey
from .models import Peer, Torrent
from .utils.get_parameters import identity, fill_typed_get_parameters

EXPIERY_TIME = 12


def peer_id(x: str) -> str:
    if len(x) != 20:
        raise ValueError
    return x


def port(port_number: int) -> int:
    if 0 < port_number <= 65535:
        raise ValueError
    return port_number


def byte_size(size: int) -> int:
    if size < 0:
        raise ValueError
    return size


def event(_event_: str) -> str:
    if _event_ not in ["started", "completed", "stopped", "empty"]:
        raise ValueError
    return _event_


# Bloated representation of peers specified in the original version of
# the bittorrent protocol.
#
# Currently unused but left in for debugging or future compatability if needed.
def bloated_peer_list(peers: QuerySet[Peer]) -> list[dict]:
    peer_list = []

    for peer in peers:
        peer_list.append(
            {
                "peer id": peer.peer_id,
                "ip": peer.peer_ip,
                "port": peer.peer_port,
            }
        )

    return peer_list


def bittorrent_announce(request: HttpRequest, passkey: str) -> HttpResponse:
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
    expiry_time = current_time - datetime.timedelta(hours=EXPIERY_TIME)

    # Get the MusicTorrent object, or fail if it doesn't exist
    try:
        torrent = Torrent.objects.get(infohash_sha1_hexdigest=info_hash)
    except Torrent.DoesNotExist:
        return BencodedResponse({"failure reason": "Torrent does not exist."})

    # Get the peer object, or create one if it doesn't exist
    try:
        peer = Peer.objects.get(peer_id=get_params["peer_id"])
        peer.peer_ip = get_params["ip"]
        peer.peer_port = get_params["port"]
        peer.peer_bytes_left = get_params["left"]
        peer.last_seen = current_time
        peer.save()
    except Peer.DoesNotExist:
        peer = Peer(
            torrent=torrent,
            peer_id=get_params["peer_id"],
            peer_ip=get_params["ip"],
            peer_port=get_params["port"],
            peer_bytes_left=get_params["left"],
        )
        peer.save()
        torrent.peers.add(peer)

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
            "interval": datetime.timedelta(
                hours=EXPIERY_TIME
            ).total_seconds(),  # specified in seconds, so this is equal to 12 hours
            "peers": ipv4,
            "peers6": ipv6,
        }
    )
