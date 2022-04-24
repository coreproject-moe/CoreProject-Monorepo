# Generated by Django 4.0.4 on 2022-04-24 02:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("anime", "0002_animegenremodel"),
    ]

    operations = [
        migrations.CreateModel(
            name="AnimeSynonymModel",
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
                ("name", models.CharField(db_index=True, max_length=100, unique=True)),
            ],
            options={
                "verbose_name": "Anime Synonym",
            },
        ),
    ]
