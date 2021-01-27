

var user=document.getElementById('username');
var pass=document.getElementById("password");
var check=document.getElementById("check-box");
var submit=document.getElementById('login-btn');
var count=0;
var match=0;
// form.addEventListener("keyup", fun=>{
//      count=0;
//     validateUser();
//     validatePass();
//     console.log("after executed"+count);
// });
form.addEventListener(("submit"),funct=>{
    funct.preventDefault();
    
    validateUser();
    validatePass();
    checkhardcode();
    validateUser();
    validatePass();

   console.log("match value "+match);
    if( match === 2){
        console.log("match value "+match);
    //   alert("Login was success!!");
      window.location.href="../success login/success-login.html";

    }

    match =0;

});
function checkhardcode(){
    var Huser="thamizh";
    var Hpass="123Pass!";
    console.log("user"+user.value+" "+"Huser"+Huser);
    if(pass.value == "123Pass!"){
        match++;

    }
    if(pass.value ==""){
        setErrorFor(pass,'you cant leave empty!');

    }
    else{
        setErrorFor(pass,'Enter the correct password!');
    }

    if(user.value == Huser){
        match++;
    }
    else
    {
        setErrorFor(user,'Enter the correct username!');
    }
    
    if(user.value == ""){
        setErrorFor(user,'please dont leave empty!');

    }

}

function validateUser(){
    if(user.value==''){
        setErrorFor(user, 'Username cannot be blank');  // calling function by parameter

    }else if(user.value.length >20){
        setErrorFor(user, 'Username must not be greater than 20 char');  // calling function by parameter
    }   
    else     if(user.value.length<5){
        setErrorFor(user,"Username must not be lesser than 5 char");
    } else{
        setErrorFor(user,"");
        setSuccessFor(user); 
        count++;
       // return true;
    }
}   

function validatePass(){
    const passValue=pass.value;
  //  console.log(passValue);
    if(passValue==''){
        setErrorFor(pass,'Password cannot be empty');
    }
    else if(!passValue.match(/[a-z]/g)){
        setErrorFor(pass,'Enter atleast 1 small letter');
    }else if(!passValue.match(/[A-Z]/g)){
        setErrorFor(pass,'Enter atleast 1 capital letter');
    }
    else if(!passValue.match(/[0-9]/g)){
        setErrorFor(pass,'Enter atleast 1 Number ');
    }
     else if(!passValue.match(/[#?!@$%^&*-]/g)){
         setErrorFor(pass,'Enter atleast 1 Special character');
     }
    else if(!passValue.length>=8){
        setErrorFor(pass,'password should be greater than 8 character');
    }
     else{
        setSuccessFor(pass,"");
        count++;
        return true;
    }
    console.log(count);
}
function setErrorFor(input,message){                         // input=firstname, message=username canntt be black
    const formControl = input.parentElement;                 // targetting div  element
  //  console.log(input.value+input.parentElement.nodeName);
    formControl.className='errorMsg ';

    const small = formControl.querySelector('small');
    small.innerText=message;
}
function setSuccessFor(input){
    const formControl = input.parentElement;
   // console.log(input.parentElement);
    formControl.className='form-contro ';
}



  