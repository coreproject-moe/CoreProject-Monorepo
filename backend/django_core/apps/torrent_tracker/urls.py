from django.urls import path

from .views import bittorrent_announce

urlpatterns = [
    path(
        "<str:passkey>/",
        bittorrent_announce,
        name="bittorrent_announce",
    ),
]
