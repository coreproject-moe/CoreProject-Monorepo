# Generated by Django 4.0.2 on 2022-02-28 05:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("upload", "0005_alter_episodemodel_anime_name"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="AnimeNameModel",
            new_name="AnimeInfoModel",
        ),
    ]
