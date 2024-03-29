# Generated by Django 5.0b1 on 2023-10-29 09:54

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("anime", "0022_alter_animegenremodel_created_at_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="animegenremodel",
            name="is_locked",
            field=models.BooleanField(db_default=models.Value(False)),
        ),
        migrations.AlterField(
            model_name="animemodel",
            name="is_locked",
            field=models.BooleanField(db_default=models.Value(False)),
        ),
        migrations.AlterField(
            model_name="animethememodel",
            name="is_locked",
            field=models.BooleanField(db_default=models.Value(False)),
        ),
    ]
