from apps.anime.models import AnimeModel, AnimeNameSynonymModel
from apps.anime.models.anime_genre import AnimeGenreModel
from apps.anime.models.anime_theme import AnimeThemeModel
from apps.characters.models import CharacterModel
from apps.producers.models import ProducerModel
from apps.staffs.models import StaffModel
from rest_framework import serializers

from ...bases.serializer import GetOrCreateSlugRelatedField
from ..character import CharacterSerializer
from ..producers import ProducerSerializer
from ..staffs import StaffSerializer
from .genre import AnimeGenreSerializer
from .theme import AnimeThemeSerializer

# Dumbed Down serializers


class DumbedDownEpisodeSerializer(serializers.Serializer):
    episode_number = serializers.IntegerField()
    episode_name = serializers.CharField()
    episode_thumbnail = serializers.CharField()

    episode_summary = serializers.CharField()
    episode_length = serializers.IntegerField()
    # Sub or Dub
    episode_type = serializers.CharField()


# Actual serializers


class AbstractBaseAnimeSerializer(serializers.ModelSerializer):
    name_synonyms = GetOrCreateSlugRelatedField(
        many=True,
        slug_field="name",
        required=False,
        queryset=AnimeNameSynonymModel.objects.all(),
    )

    class Meta:
        model = AnimeModel
        fields = [
            # ID's
            "mal_id",
            "anilist_id",
            "kitsu_id",
            # Characters
            "name",
            "name_japanese",
            "name_synonyms",
            # Date fields
            "aired_from",
            "aired_to",
            # Image Fields
            "banner",
            "cover",
            # Color Fields
            "banner_background_color",
            "cover_background_color",
            # Extra info fields
            "synopsis",
            "background",
            "source",
            # Rating fields
            "rating",
            # Some M2M fields
            "genres",
            "themes",
            "characters",
            "studios",
            "producers",
            "staffs",
            "episodes",
            "openings",
            "endings",
        ]
        read_only_fields = ["is_locked"]


class AnimeGETSerializer(AbstractBaseAnimeSerializer):
    genres = AnimeGenreSerializer(many=True, read_only=True)
    themes = AnimeThemeSerializer(many=True, read_only=True)
    characters = CharacterSerializer(many=True, read_only=True)

    # Studios == producers
    studios = ProducerSerializer(many=True, read_only=True)
    producers = ProducerSerializer(many=True, read_only=True)

    staffs = StaffSerializer(many=True, read_only=True)

    episodes = DumbedDownEpisodeSerializer(many=True, read_only=True)


class AnimePOSTSerializer(AbstractBaseAnimeSerializer):
    genres = serializers.SlugRelatedField(
        many=True,
        required=False,
        slug_field="mal_id",
        queryset=AnimeGenreModel.objects.all(),
    )
    themes = serializers.SlugRelatedField(
        many=True,
        required=False,
        slug_field="mal_id",
        queryset=AnimeThemeModel.objects.all(),
    )

    characters = serializers.SlugRelatedField(
        many=True,
        required=False,
        slug_field="mal_id",
        queryset=CharacterModel.objects.all(),
    )

    # Studios == producers
    studios = serializers.SlugRelatedField(
        many=True,
        required=False,
        slug_field="mal_id",
        queryset=ProducerModel.objects.all(),
    )
    producers = serializers.SlugRelatedField(
        many=True,
        required=False,
        slug_field="mal_id",
        queryset=ProducerModel.objects.all(),
    )

    staffs = serializers.SlugRelatedField(
        many=True,
        required=False,
        slug_field="mal_id",
        queryset=StaffModel.objects.all(),
    )
