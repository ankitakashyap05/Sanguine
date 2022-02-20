
function VALIDATORS1(){
    var username=document.forms["userform"]["name"]
    var usernameregex=/^[a-zA-Z0-9]+$/;
    var mobile=document.forms["userform"]["mobile"];
    var password=document.forms["userform"]["password1"];
    var cpassword=document.forms["userform"]["password2"];
    var phoneno=/^\d{10}$/;
    var valpass1=password.value;
    var valpass2=cpassword.value;
    if(!(username.value.match(usernameregex))){
        window.alert("Username should be alpha-numeric.");
        username.focus();
        return false;
    }
    if(valpass1.length<8||valpass1.length<8){
        window.alert("Password should be 8 characters long.");
        password.focus();
        return false;
    }
    
    
    if(password.value!=cpassword.value){
        window.alert("Passwords don't match.")
        cpassword.focus();
        return false; 
    }
    if(mobile.value.match(phoneno)){
        return true;
    }
    else{
        window.alert("Mobile Number is Invalid.");
        mobile.focus();
        return false;
    }
    

}
