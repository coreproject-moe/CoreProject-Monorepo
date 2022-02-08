# Generated by Django 4.0 on 2021-12-21 07:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("user", "0006_customuser_language_choice"),
    ]

    operations = [
        migrations.AlterField(
            model_name="customuser",
            name="language_choice",
            field=models.CharField(
                choices=[("bn", "Bangla"), ("en", "English"), ("jp", "Japanese")],
                default="en",
                max_length=20,
            ),
        ),
    ]
