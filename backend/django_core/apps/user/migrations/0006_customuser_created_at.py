# Generated by Django 4.2 on 2023-04-13 14:18

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("user", "0005_remove_customuser_ip"),
    ]

    operations = [
        migrations.AddField(
            model_name="customuser",
            name="created_at",
            field=models.DateTimeField(
                auto_now_add=True, default=django.utils.timezone.now
            ),
            preserve_default=False,
        ),
    ]
