


document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
    } else {
      // Perform signup process here
      alert("Sign up successful!");
      window.location.href="Login.html";
      // Redirect to another page or perform other actions
    }

  });
  