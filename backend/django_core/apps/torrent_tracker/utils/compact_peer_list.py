import ipaddress

from ..models import Peer
from django.db.models import QuerySet

# Compact representation of peers.


#
# Initial BEP: https://www.bittorrent.org/beps/bep_0023.html
# IPv6 extension: https://www.bittorrent.org/beps/bep_0007.html
def compact_peer_lists(peers: QuerySet[Peer]) -> tuple[bytes, bytes]:
    ipv4 = b""
    ipv6 = b""

    for peer in peers:
        ip = ipaddress.ip_address(peer.peer_ip)

        if ip.version == 4:
            ipv4 += ip.packed + peer.peer_port.to_bytes(2, byteorder="big")
        elif ip.version == 6:
            ipv6 += ip.packed + peer.peer_port.to_bytes(2, byteorder="big")
        else:
            raise ValueError("Unknown IP version.")

    return (ipv4, ipv6)
