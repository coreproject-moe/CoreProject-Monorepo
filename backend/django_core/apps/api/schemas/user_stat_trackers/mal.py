from apps.user_stat_trackers.models import MalModel
from ninja import ModelSchema


class MALGETSchema(ModelSchema):
    class Config:
        model = MalModel
        model_fields = "__all__"


class MALPOSTSchema(ModelSchema):
    class Config:
        model = MalModel
        model_exclude = ["user", "id", "created_at"]
