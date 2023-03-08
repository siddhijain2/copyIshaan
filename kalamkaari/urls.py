from django.urls import path, include, re_path
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    path('predict/beginner/', views.GetBeginnerResult),
    path('predict/advance/', views.GetAdvanceResult),
    path('word/dictation/beginner/', views.GetWordBeginner),
    path('word/dictation/advance/', views.GetWordAdvance),
    path('word/trace/advance/', views.GetWordAdvance),
    path('word/trace/beginner/', views.GetWordBeginner),
]