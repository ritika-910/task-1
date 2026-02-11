
document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault(); // stop form submit

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let emailError = document.getElementById("emailError");
    let passError = document.getElementById("passError");

    emailError.innerHTML = "";
    passError.innerHTML = "";

    let valid = true;

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email === ""){
        emailError.innerHTML = "Email is required";
        valid = false;
    }
    else if(!email.match(emailPattern)){
        emailError.innerHTML = "Enter valid email";
        valid = false;
    }

    // Password validation
    if(password === ""){
        passError.innerHTML = "Password is required";
        valid = false;
    }
    else if(password.length < 6){
        passError.innerHTML = "Minimum 6 characters";
        valid = false;
    }

    if(valid){
        alert("Login Successful (Demo)");
        // here you will connect PHP later
    }

});
