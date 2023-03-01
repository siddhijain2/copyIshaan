from rest_framework import serializers
from kalamkaari.models import WordStoreBeginner,WordStoreAdvance
# from django.utils.encoding import smart_str, force_bytes, DjangoUnicodeDecodeError
# from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
# from django.contrib.auth.tokens import PasswordResetTokenGenerator
# from account.utils import Util


class WordStoreBeginnerSerializer(serializers.ModelSerializer):
  class Meta:
    model = WordStoreBeginner
    fields = ['id','word','definition','audio_file']

class WordStoreAdvanceSerializer(serializers.ModelSerializer):
  class Meta:
    model = WordStoreAdvance
    fields = ['id','word','definition','audio_file']