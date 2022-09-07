from django.http import HttpRequest
from django.shortcuts import get_list_or_404, get_object_or_404
from ninja import Router

from ...studios.models import StudioModel
from ...studios.schemas import StudioSchema
from ..models import AnimeModel

router = Router()


@router.get("/{int:anime_id}/studios", response=list[StudioSchema])
def get_individual_anime_studio_info(
    request: HttpRequest,
    anime_id: int,
):
    query = get_list_or_404(
        get_object_or_404(AnimeModel, id=anime_id).anime_studios,
    )

    return query


@router.post("/{int:anime_id}/studios", response=StudioSchema)
def post_individual_anime_studio_info(
    request: HttpRequest,
    anime_id: int,
    payload: StudioSchema,
):
    # Set this at top
    # Because if there is no anime_info_model with corresponding query
    # theres no point in continuing
    anime_info_model = get_object_or_404(AnimeModel, pk=anime_id)

    instance, created = StudioModel.objects.get_or_create(
        **payload.dict(),
    )
    anime_info_model.anime_studios.add(instance)

    return instance
