from django.db import models
from django.conf import settings
# Create your models here.

class WordStoreBeginner(models.Model):
    word = models.CharField(max_length=30)
    definition = models.TextField(max_length=250)
    audio_file =  models.FileField(upload_to='kalamkaari/audio/beginner')

    # def __init__(self,word,definition,audio_file):
    #     self.word=word
    #     self.definition=definition
    #     self.audio_file=audio_file
    #     print(self.word)
    


class WordStoreAdvance(models.Model):
    word = models.CharField(max_length=30)
    definition = models.TextField(max_length=250)
    audio_file =  models.FileField(upload_to='kalamkaari/audio/advance')

    def __init__(self):
        self.word=word
        self.definition=definition
        self.audio_file=audio_file


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

    def __init__(self):
        self.beginner_count=beginner_count
        self.advance_count=advance_count
        self.beginner_best_time=beginner_best_time
        self.advance_best_time=advance_best_time
        self.current_streak=current_streak