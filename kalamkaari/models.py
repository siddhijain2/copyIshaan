from django.db import models
from django.conf import settings
# Create your models here.

class WordStoreBeginner(models.Model):
    word = models.CharField(max_length=30)
    definition = models.TextField(max_length=250)
    audio_file =  models.FileField(upload_to='kalamkaari/audio/beginner')

    


class WordStoreAdvance(models.Model):
    word = models.CharField(max_length=30)
    definition = models.TextField(max_length=250)
    audio_file =  models.FileField(upload_to='kalamkaari/audio/advance')



class kalamkaariProfile(models.Model):
    user=models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    beginner_count=models.IntegerField(default=0)
    advance_count=models.IntegerField(default=0)
    beginner_best_time=models.IntegerField(default=1000)
    advance_best_time=models.IntegerField(default=1000)
    current_streak=models.IntegerField(default=0)
