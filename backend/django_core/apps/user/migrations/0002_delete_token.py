# Generated by Django 4.2a1 on 2023-01-22 09:42

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("user", "0001_initial"),
    ]

    operations = [
        migrations.DeleteModel(
            name="Token",
        ),
    ]
