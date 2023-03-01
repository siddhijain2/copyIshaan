
from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpRequest
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view

import librosa
import numpy as np
import tensorflow as tf

model = tf.keras.models.load_model("enuncify/utils/models/Model.h5")


@api_view(['POST'])
def emotion_recognition(request):
    audio_file = request.FILES.get('audio_file')
    data, sampling_rate = librosa.load(audio_file)
    mfccs = np.mean(librosa.feature.mfcc(
        y=data, sr=sampling_rate, n_mfcc=40).T, axis=0)
    x = np.expand_dims(mfccs, axis=-1)
    x = np.expand_dims(x, axis=0)
    predictions = model.predict(x)
    prediction = np.argmax(predictions, axis=-1)
    emotions = ['neutral', 'calm', 'happy', 'sad',
                'angry', 'fearful', 'disgust', 'surprised']
    result = convert_class_to_emotion(prediction)
    return JsonResponse(result)


@staticmethod
def convert_class_to_emotion(pred):
    """
    Method to convert the predictions (int) into human readable strings.
    """

    label_conversion = {'0': 'neutral',
                        '1': 'calm',
                        '2': 'happy',
                        '3': 'sad',
                        '4': 'angry',
                        '5': 'fearful',
                        '6': 'disgust',
                        '7': 'surprised'}

    for key, value in label_conversion.items():
        if int(key) == pred:
            label = value
    return label
