from django.contrib import admin
from django.urls import path
from sasa import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("",views.defaultpage,name="login"),
    path("report",views.reportpage,name="report"),
    path("login",views.loginpage,name='login'),
    path("logout",views.logoutpage,name='logout'),
    path("extension",views.extensionpage,name='extension'),
    path("explore",views.explorepage,name='explore'),
    path("signup",views.signuppage,name='signup'),
    path("home",views.homepage,name='home'),
]