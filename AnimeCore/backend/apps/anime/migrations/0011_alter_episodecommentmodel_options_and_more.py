# Generated by Django 4.0.3 on 2022-03-27 18:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("anime", "0010_alter_animegenremodel_name"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="episodecommentmodel",
            options={
                "ordering": ("-comment_added",),
                "verbose_name": "Episode Comment",
            },
        ),
        migrations.AlterModelOptions(
            name="episodetimestampmodel",
            options={"verbose_name": "Episode Timestamp"},
        ),
    ]
