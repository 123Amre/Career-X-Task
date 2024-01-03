function login() {
    var loginUsername = document.getElementById("loginUsername").value;
    var loginPassword = document.getElementById("loginPassword").value;

    var registeredUsername = localStorage.getItem("registeredUsername");
    var registeredPassword = localStorage.getItem("registeredPassword");

    if (loginUsername === registeredUsername && loginPassword === registeredPassword) {
        window.location.href = "contact.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}








