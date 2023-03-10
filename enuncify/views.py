from django.http import HttpResponse, HttpResponseBadRequest, HttpRequest, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
import librosa
import numpy as np
import tensorflow as tf
from pydub import AudioSegment
from .models import SentenceStoreThemeOne
import random

model = tf.keras.models.load_model("./enuncify/utils/models/Model.h5")

@csrf_exempt
@api_view(['POST'])
def emotion_recognition(request):
    audio_file = request.FILES.get("audio_file")
    if not audio_file:
        return HttpResponseBadRequest("No audio file provided")
    file_name = audio_file.name
    with open("./enuncify/utils/models/"+file_name, 'wb+') as destination:
        for chunk in audio_file.chunks():
            destination.write(chunk)
    path = "./enuncify/utils/models/"+file_name
    audio = AudioSegment.from_file(path,format='webm')
    audio.export("./enuncify/utils/models/audio.wav",format='wav')
    data,sampling_rate = librosa.load("./enuncify/utils/models/audio.wav")
    mfccs = np.mean(librosa.feature.mfcc(y=data, sr=sampling_rate, n_mfcc=40).T, axis=0)
    x = np.expand_dims(mfccs, axis=-1)
    x = np.expand_dims(x, axis=0)
    predictions = model.predict(x)
    prediction = np.argmax(predictions, axis=-1)
    emotions = ["neutral", "calm", "happy", "sad","angry", "fearful", "disgust", "surprised"]
    result = emotions[int(prediction)]
    return HttpResponse(result)

@csrf_exempt
@api_view(['GET'])
def GetSentCollectiveNoun():
    sentences = SentenceStoreThemeOne.objects.all()
    random_sentence = random.choice(sentences)
    data = {
        'sentence': random_sentence.sentence,
        'keyword': random_sentence.keyword,
        'keyword_meaning': random_sentence.keyword_meaning,
        'audio_file': random_sentence.audio_file.url,
        'emotion': random_sentence.emotion
    }
    return JsonResponse(data)