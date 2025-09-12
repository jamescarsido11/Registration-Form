document.getElementById("registrationForm").addEventListener("submit", function (e) { e.preventDefault();
    
  
    const firstname = document.getElementById("firstname").value.trim();
    const middleinitial = document.getElementById("middleinitial").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const suffix = document.getElementById("suffix").value.trim(); // optional
    const contact = document.getElementById("contact").value.trim();
    const idnumber = document.getElementById("idnumber").value.trim();
    const department = document.getElementById("department").value;
    const batch = document.getElementById("batch").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "";
  
    if (
      firstname === "" || lastname === "" || contact === "" || idnumber === "" ||
      department === "" || batch === "" || email === "" || password === ""
    ) {
      errorMessage.textContent = "Please fill in all required fields.";
      return;
    }
  
    if (middleinitial && middleinitial.length !== 1) {
      errorMessage.textContent = "Middle initial must be a single letter.";
      return;
    }
  
    if (!/^\d{10,11}$/.test(contact)) {
      errorMessage.textContent = "Enter a valid contact number (10-11 digits).";
      return;
    }
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      errorMessage.textContent = "Enter a valid email address.";
      return;
    }
  
    if (password.length < 6) {
      errorMessage.textContent = "Password must be at least 6 characters.";
      return;
    }
  
    alert("Registration successful!");
    
  });