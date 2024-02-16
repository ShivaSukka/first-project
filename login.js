function onSubmit(){
    let userName= document.getElementById("userName").value;
    let password= document.getElementById("password").value;
    let validusername=document.getElementById("demo");
    let validpassword=document.getElementById("remo");
    let validsu=document.getElementById("memo");
    
    if (userName.length<4){
      validusername.innerHTML="Please Enter Valid UserName";
      validusername.style.color="white";
      validusername.style.backgroundColor="red";
  
    } else if (userName.length>=4){
      validusername.style.display="none";
    };
  
     if(password.length<8) {
      validpassword.innerHTML="Please Enter Valid Password";
      validpassword.style.color="white"
      validpassword.style.backgroundColor="red";
     } else if (password.length>=8){
      validpassword.style.display="none";
    };

  
     
    if (userName.length>=4 && password.length>=8 && password.match(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])/)
    ){
      validsu.innerHTML="form is submitted";
      validsu.style.backgroundColor="green";
      window.location.href = "./home.html";
    } else{
      validsu.innerHTML="must contain one caps,small,special char and a number";
      validsu.style.backgroundColor="red";
    };
}