function validate(event){
    event.preventDefault();
    
    let fullname=document.getElementById('fullname');
    let email=document.getElementById('email');
    let password=document.getElementById('password');
    let cpassword=document.getElementById('cpassword')




    if(fullname.value.trim()==" "){
        alert('Enter Your Full Name')
        fullname.focus()
        return false;
    }
     
    if(email.value.trim()==" "){
        alert(" Email kodkeda Kutta ")
        email.focus();
        return false;
    }
    else{
        let emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailRegex.test(email.value)){
            alert("Email Sheriyait Kodknm ketto!!")
            email.focus();
            return false;
        }

    }
    

    if(password.value.trim()==" "){
        alert("Password illathe Eghoteka")
        password.focus();
        return false;

    }
    else{
        let passworStrenghth=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ ;

     

        if(!passworStrenghth.test(password.value)){
            alert("Sheriyay password Iduu!!! ,with a minimum length of 8 characters. ")
            password.focus();
            return false;
    
        }
    }


    if(cpassword.value.trim() ==" " || cpassword.value!=password.value)
        {
        alert("Same Password Adiku Kootukara")
        cpassword.focus()
        return false;

    }


    document.firstform.login();

}