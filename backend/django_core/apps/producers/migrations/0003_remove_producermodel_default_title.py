# Generated by Django 4.2 on 2023-04-19 09:43

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("producers", "0002_producermodel_created_at_producermodel_updated_at"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="producermodel",
            name="default_title",
        ),
    ]
