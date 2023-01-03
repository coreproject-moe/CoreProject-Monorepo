from apps.user_stat_trackers.models import MalModel
from ninja import Router

from django.contrib.auth.decorators import login_required
from django.http import HttpRequest
from django.shortcuts import get_object_or_404
from django.utils import timezone

from ...schemas.user_stat_trackers.mal import MALGETSchema, MALPOSTSchema

router = Router()


@router.get("/mal", response=MALGETSchema)
def get_mal_info(request: HttpRequest):
    response = get_object_or_404(MalModel, user=request.auth)
    return response


@router.post("/mal", response=MALGETSchema)
@login_required
def post_mal_info(request: HttpRequest, payload: MALPOSTSchema):
    instance, created = MalModel.objects.update_or_create(
        user=request.auth,
        defaults={
            **payload.dict(),
            "created_at": timezone.now(),
        },
    )
    return instance
