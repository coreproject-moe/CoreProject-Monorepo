# Generated by Django 5.0.2 on 2024-02-21 03:40

import apps.comments.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("comments", "0005_remove_commentmodel_dislikes_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="commentmodel",
            name="path",
            field=apps.comments.models.FixedPathField(),
        ),
    ]