const currentUserEmail = localStorage.getItem("currentUser");
if (!currentUserEmail) {
  alert("Please login first");
  window.location.href = "login.html";
}

const user = JSON.parse(localStorage.getItem(currentUserEmail));

document.getElementById("userName").innerText = user.fullName;
document.getElementById("userEmail").innerText = user.email;
document.getElementById("userSkills").innerText = user.skills.join(', ');

document.getElementById("logoutBtn").addEventListener("click", function () {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
});
