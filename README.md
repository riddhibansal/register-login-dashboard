# register-login-dashboard
A modern, responsive web application built with HTML, CSS, and JavaScript. It features registration, login, and dashboard pages with full client-side validation and localStorage-based authentication. No backend or frameworks required.
# Features:
- Registration: 10+ fields, profile picture upload, strong validations
- Login: Email/password authentication, error feedback
- Dashboard: Displays user info, profile picture, logout, session restriction
- Modern UI: Responsive, animated, clean design
- localStorage: All data stored in browser
- Session-based access: Dashboard restricted to logged-in users
- Show/hide password: Eye icon toggle
- Error animations: Shake effect for invalid input
# Tech Stack:
-HTML5
-CSS3 (Flexbox, gradients, responsive design)
-JavaScript (ES6+)
-localStorage API
-Google Fonts (Roboto)
-Font Awesome (icons)
# Validations:
-Full Name: Required, min 3 chars, no same char 3 times, no digits
-Email: Required, valid format (Regex)
-Password: Required, min 8 chars, upper, lower, number, special char
-Confirm Password: Must match password
-Phone Number: Required, exactly 10 digits
-Gender: Required
-Date of Birth: Must be 18+ years
-Address: Required, min 10 chars
-City: Required
-Skills Known: At least one selected
-Accept Terms: Must be checked
