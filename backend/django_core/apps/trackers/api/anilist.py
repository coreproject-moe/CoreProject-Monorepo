from ninja import Router

from django.http import HttpRequest
from django.shortcuts import get_object_or_404
from django.utils import timezone
from django.contrib.auth.decorators import login_required


from ..models import AnilistModel
from ..schemas import AnilistGETSchema, AnilistPOSTSchema

router = Router()


@router.get("/anilist", response=AnilistGETSchema)
def get_anilist_info(request: HttpRequest):
    response = get_object_or_404(AnilistModel, user=request.user)
    return response


@router.post("/anilist", response=AnilistGETSchema)
@login_required
def post_anilist_info(request: HttpRequest, payload: AnilistPOSTSchema):
    instance, created = AnilistModel.objects.update_or_create(
        user=request.user,
        defaults={
            **payload.dict(),
            "created_at": timezone.now(),
        },
    )
    return instance
