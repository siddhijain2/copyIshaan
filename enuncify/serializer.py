from rest_framework import serializers
from enuncify.models import SentenceStoreThemeOne,SentenceStoreThemeTwo


class SentenceStoreThemeOneSerializer(serializers.ModelSerializer):
  class Meta:
    model = SentenceStoreThemeOne
    fields = ['id','sentence','keyword','keyword_meaning','audio_file','emotion']

class SentenceStoreThemeTwoSerializer(serializers.ModelSerializer):
  class Meta:
    model = SentenceStoreThemeTwo
    fields = ['id','sentence','keyword','keyword_meaning','audio_file','emotion']