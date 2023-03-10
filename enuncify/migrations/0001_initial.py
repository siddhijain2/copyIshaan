# Generated by Django 3.2.5 on 2023-03-06 21:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SentenceStoreThemeOne',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sentence', models.TextField()),
                ('keyword', models.CharField(max_length=100)),
                ('keyword_meaning', models.TextField()),
                ('audio_file', models.FileField(upload_to='enuncify/audio/collective_noun')),
                ('emotion', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='SentenceStoreThemeTwo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sentence', models.TextField()),
                ('keyword', models.CharField(max_length=100)),
                ('keyword_meaning', models.TextField()),
                ('audio_file', models.FileField(upload_to='enuncify/audio/idioms')),
                ('emotion', models.CharField(max_length=100)),
            ],
        ),
    ]
