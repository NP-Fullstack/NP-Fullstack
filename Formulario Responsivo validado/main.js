// sj
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');


document.querySelector('form').addEventListener('submit', function(event){
    let email = document.getElementById('email').value;
    let password =document.getElementById('password').value;

    if(email === ""){
        alert('The name is required');
        event.preventDefault();
        emailInput.style.borderColor =' red';
        return false;
    }
    else{
        emailInput.style.borderColor='green';
    }
    if(password === ""){
        alert('The password is  required');
        event.preventDefault();
        passwordInput.style.borderColor = 'red';
        return false;
    }else {
        passwordInput.style.borderColor= 'green';
        
    }
    
    
    

    
})

