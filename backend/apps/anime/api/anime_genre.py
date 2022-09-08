from django.http import HttpRequest
from django.shortcuts import get_list_or_404, get_object_or_404
from ninja import Router

from ..models import AnimeModel
from ..models.anime_genre import AnimeGenreModel
from ..schemas.anime_genre import AnimeGenreSchema

router = Router()


@router.get("/{int:anime_id}/genres", response=list[AnimeGenreSchema])
def get_individual_anime_genre_info(
    request: HttpRequest,
    anime_id: int,
) -> list[AnimeGenreModel]:
    query = get_list_or_404(
        get_object_or_404(AnimeModel, id=anime_id).anime_genres,
    )
    return query


@router.post("/{int:anime_id}/genres", response=AnimeGenreSchema)
def post_individual_anime_genre_info(
    request: HttpRequest,
    anime_id: int,
    payload: AnimeGenreSchema,
) -> AnimeGenreModel:
    # Set this at top
    # Because if there is no anime_info_model with corresponding query
    # theres no point in continuing
    anime_info_model = get_object_or_404(AnimeModel, pk=anime_id)

    instance, created = AnimeGenreModel.objects.get_or_create(
        **payload.dict(),
    )
    anime_info_model.anime_genres.add(instance)

    return instance
