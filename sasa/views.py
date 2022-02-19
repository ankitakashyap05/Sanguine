from sanguine import settings
from django.shortcuts import redirect,render
from django.contrib.auth.models import User
from django.contrib import messages
from .models import UserCompleteInfo,Report
from django.contrib.auth import authenticate,login,logout
from django.core.mail import send_mail,EmailMessage
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode,urlsafe_base64_decode
from django.utils.encoding import force_bytes,force_str
# from .token import generate_token

# Create your views here.
def homepage(request):
    return render(request,"index.html")


def signuppage(request):
    if request.method=="POST":
        username=request.POST.get("name")
        email=request.POST.get("email")
        password=request.POST.get("password1")
        cpassword=request.POST.get("password2")
        age=request.POST.get("age")
        gender=request.POST.get("gender")
        mobile=request.POST.get("mobile")
        occupation=request.POST.get("occupation")
      
        if User.objects.filter(username=username):
            messages.error(request,"Username already exists.")
         
            return redirect("signup")
        if User.objects.filter(email=email):
            messages.error(request,"Email already exists.")
            return redirect("signup")
     

        
    


        newuser=User.objects.create_user(username,email,password)
        newuser.is_active=False
        newuser.save()
        userinfo=UserCompleteInfo(username=newuser.username,email=newuser.email,password=newuser.password,age=age,occupation=occupation,mobile=mobile,gender=gender)
        userinfo.save()
        messages.success(request,"Your account has been successfully created.")

        return redirect("login")

        

    return render(request,"authentication/signup.html")
def loginpage(request):
    if request.method=="POST":
        username=request.POST.get("name")
        password1=request.POST.get("password1")
        user=authenticate(username=username,password=password1)
        if user is not None:
            login(request,user)
            return render(request,"index.html")
        else:
            messages.error(request,"Entered login credentials are not correct.")

    
        

    return render(request,"authentication/login.html")

def reportpage(request):
    if request.method=="POST":
        name=request.POST.get("name")
        date=request.POST.get("date")
        time=request.POST.get("time")
        about=request.POST.get("about")
        link=request.POST.get("link")
        police_report=request.POST.get("police_report")
        help=request.POST.get("help")
        report_info=Report(name=name,date=date,time=time,about=about,link=link,police_report=police_report,help=help)
        report_info.save()
        messages.success(request,"Your Report has been uploaded successfully.")
    return render(request,"report.html")

def defaultpage(request):
    return render(request,"authentication/login.html")

def logoutpage(request):
    logout(request)
    messages.success(request, "Logged Out Successfully!!")
    return redirect('login')
def extensionpage(request):
    return render(request,"extension.html")
def explorepage(request):
    return render(request,"recoil_recommendations.html")