function register(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
   var passEntered = document.getElementById("pass").value;
   window.alert(passEntered);
     window.alert(userEntered);
var txt = userEntered.length;}
function validateUsername()
{
if(txt < 6 || userEntered.indexOf(" ")>=0)
{
  document.getElementById("usernameError").innerHTML
    = "username must have more than 6 charecters and not contain spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
     document.getElementById("usernameError").classList.add("shown-message");
      document.getElementById("usernameGroup").classList.remove("has-error");
     window.alert(userEntered);
       
}
}
function validatePassword()
{
var password = "password";
var lowercasePassword = passEntered.toLowerCase();
if(lowercasePassword == password){

  document.getElementById("passwordError").innerHTML="password cannot be password.";
   document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");

     document.getElementById("passwordGroup").classList.remove("has-error");
  }

else if(passEntered.length < 6 || passEntered.length > 20) {
  document.getElementById("passwordError").innerHTML
  = "password must have 6-20  charecters.";
   document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
}
}
