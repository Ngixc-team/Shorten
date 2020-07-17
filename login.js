var attempt = 2; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var password = document.getElementById("password").value;
if ( password == "coy"){
alert ("Login successfully");
window.location = "suc.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("Password Access salah MIN ,,TO "+attempt+" KALI;");
// Disabling fields after 2 attempts.
if( attempt == 0){
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
