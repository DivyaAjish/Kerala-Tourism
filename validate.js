 function validation(){
     var name =document.getElementById('name').value;
     var email =document.getElementById('emailid').value;
     var phone =document.getElementById('phone').value;
     var message =document.getElementById('message').value;
     var regexp= /^([a-zA-Z0-9\.\-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
     var phreg=/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    //  Name validation-------------
     if(name ==""){
        document.getElementById('nameerror').innerHTML="**please enter your name";
        return false;
     }
     if(!isNaN(name)){
        document.getElementById('nameerror').innerHTML="**The name cannot be a number";
        return false;
     }
     
    //  email validation---------------
    if(regexp.test(email)){
      document.getElementById('emailerror').innerHTML="**valid email";
    
    }
     else{
      document.getElementById('emailerror').innerHTML="**Invalid email";
    return false;
   }
    // phonenumber validation----------------
     if(phone ==""){
         document.getElementById('phoneerror').innerHTML="**please enter your phone number";
         return false;
    }
   //  if(isNaN(phone)){
   //      document.getElementById('phoneerror').innerHTML="**Please enter a valid phone number";

   //      return false;
   //   }
   // if(phone.length !=10){
   //      document.getElementById('phoneerror').innerHTML="**Please enter a valid phone number with 10 numbers";
   //      return false;
   //  }
    if(phreg.test(phone)){
      document.getElementById('phoneerror').innerHTML="**valid";
    
    }
     else{
      document.getElementById('phoneerror').innerHTML="**Invalid";
    return false;
   }

    // message validation--------------
    if(message ==""){
        document.getElementById('messageerror').innerHTML="**please ask your querries";
         return false;
   }
   // if(email ==""){
   //    document.getElementById('emailerror').innerHTML="**please enter your email";
   //    return false;
   // }
 
 }
 function pwdvalidation(){
   var uname =document.getElementById('uname').value;
   var password =document.getElementById('pass').value;
   var pwdregex1=/^(?:([A-Z])*){8,12}$/;
   var pwdregex2=/^(?:([A-Z])*([a-z])*){8,12}$/;
   var pwdregex3=/^(?:([A-Z])*([a-z])*(\d)*(\W)*){8,12}$/;
   if(uname ==""){
      document.getElementById('unameerror').innerHTML="**username cannot be blank";
      return false;
   }
   if(password ==""){
      document.getElementById('passerror').innerHTML="**password cannot be blank";
      return false;
 }
 if(pwdregex1.test(password)){
 document.getElementById('passerror').innerHTML="weak";
 document.getElementById('passerror').style.color="red";
 }
 else if(pwdregex2.test(password)){
   document.getElementById('passerror').innerHTML="Medium";
 document.getElementById('passerror').style.color="orange";
 }
  else if(pwdregex3.test(password)){
   document.getElementById('passerror').innerHTML="Strong";
 document.getElementById('passerror').style.color="green";
   
 }
 else{
   return false;
}
 


 }