from ninja import Router

from django.http import HttpRequest

from ...schemas.user_stat_trackers import TrackerDeleteSchema, TrackerSchema

router = Router()


@router.post("", response=TrackerSchema)
def update_user_tracker_info(
    request: HttpRequest,
    payload: TrackerSchema,
) -> None:
    pass


@router.delete("", response=TrackerDeleteSchema)
def delete_user_tracker_info(
    request: HttpRequest,
    payload: TrackerDeleteSchema,
) -> None:
    pass
