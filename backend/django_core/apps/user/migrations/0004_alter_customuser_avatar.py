# Generated by Django 4.1.7 on 2023-03-21 08:52

import dynamic_filenames
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("user", "0003_delete_token"),
    ]

    operations = [
        migrations.AlterField(
            model_name="customuser",
            name="avatar",
            field=models.ImageField(
                blank=True,
                default=None,
                null=True,
                upload_to=dynamic_filenames.FilePattern(
                    filename_pattern="avatar/{uuid:s}{ext}"
                ),
            ),
        ),
    ]
