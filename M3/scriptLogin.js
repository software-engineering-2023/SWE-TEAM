document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Perform login process here
    console.log(username);

    if (username === "admin" && password === "password") {
      console.log(True);
      alert("Login successful!");
      window.location.href="Home_Page.html";
      // Redirect to another page or perform other actions
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });