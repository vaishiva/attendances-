document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Get the username and password input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user="vaishivaofficial"
    var pass="1234"
    if (username === user && password === pass) {
        window.location.href = "attendance.html";
        alert("Login successfully")
    } 
    else {
        alert("Invalid username or password");
    }
});
