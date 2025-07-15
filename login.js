document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  const user = JSON.parse(localStorage.getItem(email));

  if (!user) {
    document.getElementById('error').innerText = "User not found!";
    return;
  }

  if (user.password !== password) {
    document.getElementById('error').innerText = "Incorrect password!";
    return;
  }

  // Store current user session
  localStorage.setItem("currentUser", email);
  window.location.href = "dashboard.html";
});
