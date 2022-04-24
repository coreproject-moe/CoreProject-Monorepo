# Generated by Django 4.0.4 on 2022-04-24 02:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("anime", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="AnimeGenreModel",
            fields=[
                (
                    "mal_id",
                    models.IntegerField(
                        db_index=True, primary_key=True, serialize=False, unique=True
                    ),
                ),
                (
                    "name",
                    models.CharField(
                        db_index=True, default="", max_length=50, unique=True
                    ),
                ),
                ("type", models.CharField(db_index=True, default="", max_length=50)),
            ],
            options={
                "verbose_name": "Anime Genre",
            },
        ),
    ]
