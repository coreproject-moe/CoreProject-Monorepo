from apps.episodes.models.episode_comment import EpisodeCommentModel
from rest_framework import serializers


class EpisodeCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = EpisodeCommentModel
        fields = [
            "user",
            "text",
            "path",
        ]
        extra_kwargs = {
            "path": {
                "required": False,
            }
        }
