function toggleForms() {
  var login = document.getElementById("loginForm");
  var register = document.getElementById("registerForm");
  if (login.style.display === "none") {
    login.style.display = "block";
    register.style.display = "none";
  } else {
    login.style.display = "none";
    register.style.display = "block";
  }
}
