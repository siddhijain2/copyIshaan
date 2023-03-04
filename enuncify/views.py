
from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpRequest
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from io import BytesIO
import librosa
import numpy as np
import tensorflow as tf

model = tf.keras.models.load_model("enuncify/utils/models/Model.h5")

@csrf_exempt
@api_view(['POST'])
def emotion_recognition(request):
    audio_file = request.FILES.get("audio_file")
    file_name = audio_file.name
    with open("enuncify/utils/models/"+file_name, 'wb+') as destination:
        for chunk in audio_file.chunks():
            destination.write(chunk)
    path = "enuncify/utils/models/"+file_name
    data,sampling_rate = librosa.load(path)
    mfccs = np.mean(librosa.feature.mfcc(y=data, sr=sampling_rate, n_mfcc=40).T, axis=0)
    x = np.expand_dims(mfccs, axis=-1)
    x = np.expand_dims(x, axis=0)
    predictions = model.predict(x)
    prediction = np.argmax(predictions, axis=-1)
    emotions = ["neutral", "calm", "happy", "sad","angry", "fearful", "disgust", "surprised"]
    result = emotions[int(prediction)]
    return HttpResponse(result)