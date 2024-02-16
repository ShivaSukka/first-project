let image=document.getElementById("image").addEventListener('change', function(event){
    var file=event.target.files[0];
    var reader= new FileReader();
  
    reader.onload=function(e){
      var previewImage=document.getElementById("previewImage");
      previewImage.src= e.target.result;
      previewImage.style.display='block'
    };
    reader.readAsDataURL(file)
  })
  
  function onSubmit(){
    let fname= document.getElementById("fname").value;
    let phone= document.getElementById("mobile").value;
    let lname= document.getElementById("lname").value;
    let valid=document.getElementById("demo");
    let validln=document.getElementById("remo");
    let validmn=document.getElementById("bemo");
    let validsu=document.getElementById("memo");
   
    if (fname.length<4){
      valid.innerHTML="Please Enter First Name";
      valid.style.backgroundColor="brown";
  
    } else if (fname.length>=4){
      valid.style.display="none";
    };
  
     if(lname.length<1) {
      validln.innerHTML="Please Enter Last Name";
      validln.style.backgroundColor="brown";
    }else if(lname.length>=1){
      validln.style.display="none";
    };
     if(phone.length!=10){
      validmn.innerHTML="Please Enter Valid Mobile Number";
      validmn.style.backgroundColor="brown"
    } else if(phone.length==10){
      validmn.style.display="none";
  
    };
    if (fname.length>=4 && lname.length>=1 && phone.length==10){
      validsu.innerHTML="form is submitted";
      validsu.style.backgroundColor="green";
      window.location.href = "./login.html";
    

    };
    


    

  }
  
    