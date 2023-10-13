from django.urls import path

from .views.anime import anime_home_view, partial_anime_view
from .views.stack import stack_view

urlpatterns = [
    path("anime/", anime_home_view, name="anime_home_view"),
    path("anime/_partial", partial_anime_view, name="_paritial_anime_home_view"),
    path("anime/explore/", anime_home_view, name="anime_home_view"),
    path("stack/", stack_view, name="stack_view"),
]
