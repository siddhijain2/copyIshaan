from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpRequest
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view
from django.http import JsonResponse


from kalamkaari.getWord import *
from kalamkaari.prepareResult import *
  
#post api
@csrf_exempt
@api_view(['POST'])
def GetResult(request):
    print('++++++++++')
    res=prepareResult(request)
    return HttpResponse(JsonResponse(res),status=status.HTTP_200_OK)



#get api

@api_view(['GET'])
def GetWordBeginner(request):
    print('+++++++')
    res=Beginner(request)
    print('---------')
    print(res)
    return HttpResponse(JsonResponse(res), status=status.HTTP_200_OK)


#get api
@csrf_exempt
@api_view(['GET'])
def GetWordAdvance(request):

    res=Advance(request)
    return HttpResponse(JsonResponse(res), status=status.HTTP_200_OK)
