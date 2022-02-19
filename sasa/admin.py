from django.contrib import admin
from .models import UserCompleteInfo,Report

# Register your models here.

@admin.register(UserCompleteInfo)
class UserCompleteInfoAdmin(admin.ModelAdmin):
    list_display=["username","email","age","occupation"]
    list_filter=["age","occupation","gender"]
    search_fields=["username","email","mobile"]
@admin.register(Report)
class ReportAdmin(admin.ModelAdmin):
    list_display=["name","date","time","dor"]
    list_filter=["help"]
    search_fields=["username","date","time"]