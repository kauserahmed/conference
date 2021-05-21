function formValidation()
{
var username = document.registration.name;
var useremail = document.registration.email;
var psw = document.registration.psw;
var rpsw = document.registration.pswrepeat;
var ucountry = document.registration.country;
var unumber = document.registration.phone;
var uorganization = document.registration.organization;


if(passid_validation(psw,7,12)){
if(re_passid_validation(rpsw,7, 12))
if(allLetter(username)){ 
if(countryselect(ucountry)){
if(ValidateEmail(useremail)){
if(allnumeric(unumber)){
if(orgname(uorganization)){
} }} }}
return false;


function allLetter(username)
{ 
var letters = /^[A-Za-z]+$/;
if(username.value.match(letters))
{
return true;
}
else
{
alert('name must have alphabet characters only');
username.focus();
return false;
}
}

function ValidateEmail(useremail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(useremail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
useremail.focus();
return false;
}
}


function passid_validation(psw,mx,my)
{
var passid_len = psw.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
psw.focus();
return false;
}
return true;
}

function re_passid_validation(rpsw){
  var re_passid_validation = rpsw.value.length;
  if(psw.value != rpsw.value)
  return false;{
    alert("Password desn't match")
    re_passid_validation.focus();
  }
}

function allnumeric(unumber)
{ 
var numbers = /^[0-9]+$/;
if(unumber.value.match(numbers))
{
return true;
}
else
{
alert("Phone number is't valid");
unumber.focus();
return false;
}
}

function orgname(uorganization)
{ 
var letters = /^[A-Za-z]+$/;
if(uorganization.value.match(letters))
{
return true;
}
else
{
alert('Organization name must have alphabet characters only');
uorganization.focus();
return false;
}
}

function countryselect(ucountry)
{
if(ucountry.value == "Default")
{
alert('Select your country from the list');
ucountry.focus();
return false;
}
else
{
return true;
}
}
}
}

