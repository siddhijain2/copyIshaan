from django.db import models

# Create your models here.

class SentenceStoreThemeOne(models.Model):
    sentence = models.TextField()
    keyword = models.CharField(max_length=100)
    keyword_meaning = models.TextField()
    audio_file = models.FileField(upload_to='./enuncify/audio/collective_noun')
    emotion = models.CharField(max_length=100)

class SentenceStoreThemeTwo(models.Model):
    sentence = models.TextField()
    keyword = models.CharField(max_length=100)
    keyword_meaning = models.TextField()
    audio_file = models.FileField(upload_to='./enuncify/audio/idioms')
    emotion = models.CharField(max_length=100)