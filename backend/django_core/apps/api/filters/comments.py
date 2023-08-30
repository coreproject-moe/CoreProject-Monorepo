from django.contrib.postgres.search import TrigramSimilarity
from django.db.models.functions import Greatest
from django.db.models.query import QuerySet
from django_filters import rest_framework as filters
from apps.episodes.models.episode_comment import EpisodeCommentModel


class EpisodeCommentFilter(filters.FilterSet):
    path = filters.CharFilter(method="path_filter", label="Path Filter")

    def path_filter(
        self, queryset: QuerySet[EpisodeCommentModel], name, value: str
    ) -> QuerySet[EpisodeCommentModel]:
        queryset = queryset.filter(path__descendants=value)
        print(queryset.query)
        return queryset
