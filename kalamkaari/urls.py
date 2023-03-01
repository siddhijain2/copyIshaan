from django.urls import path, include, re_path
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    path('', views.data_return),
    path('dict/beginner/', views.GetWordBeginner),
    path('dict/advance/<int:id>', views.GetWordAdvance),
    path('trace/advance/<int:id>', views.GetWordAdvance),
    path('trace/beginner/<int:id>', views.GetWordBeginner),
]