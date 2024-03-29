# Generated by Django 5.0rc1 on 2023-12-05 13:05

import django.contrib.postgres.indexes
import django.db.models.deletion
import django.db.models.functions.datetime
import django_ltree.fields
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("django_ltree", "__latest__"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="CommentModel",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("path", django_ltree.fields.PathField(unique=True)),
                (
                    "created_at",
                    models.DateTimeField(
                        db_default=django.db.models.functions.datetime.Now()
                    ),
                ),
                ("text", models.TextField()),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "verbose_name": "Anime Comment",
                "verbose_name_plural": "Anime Comments",
                "indexes": [
                    django.contrib.postgres.indexes.GistIndex(
                        fields=["path"], name="comments_co_path_d76c72_gist"
                    )
                ],
            },
        ),
    ]
