# Generated by Django 4.1.7 on 2023-03-10 10:32

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("anime", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="animemodel",
            name="rating",
            field=models.CharField(blank=True, default="", max_length=50),
        ),
    ]
