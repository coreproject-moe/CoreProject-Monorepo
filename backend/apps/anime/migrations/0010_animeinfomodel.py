# Generated by Django 4.0.4 on 2022-04-24 02:54

import apps.anime.models.anime_info
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('anime', '0009_episodemodel'),
    ]

    operations = [
        migrations.CreateModel(
            name='AnimeInfoModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mal_id', models.IntegerField(unique=True)),
                ('anime_name', models.CharField(db_index=True, max_length=1024)),
                ('anime_name_japanese', models.CharField(db_index=True, max_length=1024, null=True)),
                ('anime_source', models.CharField(blank=True, max_length=128, null=True)),
                ('anime_aired_from', models.DateTimeField(blank=True, null=True)),
                ('anime_aired_to', models.DateTimeField(blank=True, null=True)),
                ('anime_banner', models.ImageField(blank=True, default=None, null=True, upload_to=apps.anime.models.anime_info.FileField.anime_banner)),
                ('anime_cover', models.ImageField(blank=True, default=None, null=True, upload_to=apps.anime.models.anime_info.FileField.anime_cover)),
                ('anime_synopsis', models.TextField(blank=True, null=True)),
                ('anime_background', models.TextField(blank=True, null=True)),
                ('anime_rating', models.CharField(blank=True, max_length=50, null=True)),
                ('updated', models.DateTimeField(auto_now_add=True)),
                ('anime_episodes', models.ManyToManyField(blank=True, to='anime.episodemodel')),
                ('anime_genres', models.ManyToManyField(blank=True, to='anime.animegenremodel')),
                ('anime_name_synonyms', models.ManyToManyField(blank=True, to='anime.animesynonymmodel')),
                ('anime_producers', models.ManyToManyField(blank=True, to='anime.animeproducermodel')),
                ('anime_studios', models.ManyToManyField(blank=True, to='anime.animestudiomodel')),
                ('anime_themes', models.ManyToManyField(blank=True, to='anime.animethememodel')),
            ],
            options={
                'verbose_name': 'Anime',
            },
        ),
    ]
