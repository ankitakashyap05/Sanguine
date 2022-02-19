from sanguine import settings
from django.shortcuts import redirect,render
from django.contrib.auth.models import User
from django.contrib import messages
# Create your views here.
def homepage(request):
    return render(request,"index.html")
