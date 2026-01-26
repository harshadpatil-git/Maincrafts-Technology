document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Name Validation
  if (name === "") {
    alert("Please enter your name");
    return;
  }

  // Email Validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  // Message Validation
  if (message.length < 10) {
    alert("Message should be at least 10 characters");
    return;
  }

  // Success Alert
  alert("Our team will get in touch with you soon!");
  
  // Clear Inputs After Submit
  document.getElementById("contactForm").reset();
});
