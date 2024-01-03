function register() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    localStorage.setItem("registeredUsername", username);
    localStorage.setItem("registeredEmail", email);
    localStorage.setItem("registeredPassword", password);

    alert("Registration successful!\n\nUsername: " + username + "\nEmail: " + email);
    
    window.location.href = "login.html";
}

