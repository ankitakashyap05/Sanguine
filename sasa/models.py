from django.db import models
from datetime import datetime

# Create your models here.
class UserCompleteInfo(models.Model):
    username=models.CharField(max_length=100)
    email=models.EmailField()
    password=models.CharField(max_length=200)
    cpassword=models.CharField(max_length=200)
    age=models.PositiveIntegerField()
    occupation=models.CharField(max_length=200)
    mobile=models.CharField(max_length=10)
    gender=models.CharField(max_length=20)

    def __str__(self):
        return self.username[:50]

class Report(models.Model):
    username=models.CharField(max_length=100)
    name=models.CharField(max_length=100)
    date=models.DateField()
    time=models.TimeField()
    about=models.CharField(max_length=1000)
    police_report=models.CharField(max_length=100)
    link=models.CharField(max_length=300)
    dor=models.DateTimeField(default=datetime.now)
    help=models.CharField(max_length=150)