document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const phone = document.getElementById('phone').value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const dob = new Date(document.getElementById('dob').value);
  const address = document.getElementById('address').value.trim();
  const city = document.getElementById('city').value;
  const skills = [...document.querySelectorAll('input[name="skills"]:checked')].map(el => el.value);
  const termsAccepted = document.getElementById('terms').checked;

  const age = new Date().getFullYear() - dob.getFullYear();

  // Validation Examples
  if (fullName.length < 3 || /\d/.test(fullName) || /(.)\1{2,}/.test(fullName)) {
    alert("Invalid full name");
    return;
  }

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email format");
    return;
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  if (!passwordRegex.test(password)) {
    alert("Password must be strong");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  if (phone.length !== 10 || isNaN(phone)) {
    alert("Invalid phone number");
    return;
  }

  if (age < 18) {
    alert("You must be 18+");
    return;
  }

  if (address.length < 10) {
    alert("Address too short");
    return;
  }

  if (!skills.length) {
    alert("Please select at least one skill");
    return;
  }

  if (!termsAccepted) {
    alert("Please accept terms");
    return;
  }

  const userData = {
    fullName, email, password, phone, gender, dob: dob.toISOString(), address, city, skills
  };

  localStorage.setItem(email, JSON.stringify(userData));
  alert("Registration successful!");
  window.location.href = "login.html";
});
