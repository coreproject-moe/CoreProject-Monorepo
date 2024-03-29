# Generated by Django 4.1.7 on 2023-03-08 10:21

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="ProducerModel",
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
                ("mal_id", models.IntegerField(blank=True, null=True, unique=True)),
                ("kitsu_id", models.IntegerField(blank=True, null=True, unique=True)),
                ("name", models.CharField(default="", max_length=128)),
                (
                    "default_title",
                    models.CharField(blank=True, default="", max_length=128, null=True),
                ),
                (
                    "japanese_title",
                    models.CharField(blank=True, default="", max_length=128, null=True),
                ),
                ("established", models.DateTimeField(blank=True, null=True)),
                ("about", models.TextField(blank=True, null=True)),
            ],
            options={
                "verbose_name": "Producer",
                "verbose_name_plural": "Producers",
            },
        ),
    ]
