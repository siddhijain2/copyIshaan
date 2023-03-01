from django.db import models

# Create your models here.

class WordStoreBeginner(models.Model):
    word = models.CharField(max_length=30)
    definition = models.TextField(max_length=250)
    audio_file =  models.FileField(upload_to='kalamkaari/audio/beginner')

    def __init__(self,word,definition,audio_file):
        self.word=word
        self.definition=definition
        self.audio_file=audio_file
    


class WordStoreAdvance(models.Model):
    word = models.CharField(max_length=30)
    definition = models.TextField(max_length=250)
    audio_file =  models.FileField(upload_to='kalamkaari/audio/advance')

    def __init__(self):
        self.word=word
        self.definition=definition
        self.audio_file=audio_file

