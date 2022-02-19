from django.contrib import admin
from django.urls import path
from sasa import views

urlpatterns = [
    path("",views.homepage,name="home"),
]