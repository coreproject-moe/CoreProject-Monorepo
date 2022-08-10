# Generated by Django 4.1 on 2022-08-10 13:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("__user__", "0008_alter_user_username_discriminator"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="email",
            field=models.EmailField(
                blank=True, max_length=254, verbose_name="email address"
            ),
        ),
    ]
