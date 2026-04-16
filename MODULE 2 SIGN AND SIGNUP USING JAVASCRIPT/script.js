// Toggle Password
function togglePassword(id) {
    const field = document.getElementById(id);
    field.type = field.type === "password" ? "text" : "password";
}

// Signup Validation
const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let phone = document.getElementById("phone");
        let city = document.getElementById("city");
        let password = document.getElementById("password");
        let confirmPassword = document.getElementById("confirmPassword");

        let valid = true;

        // Name
        if (name.value === "") {
            setError(name, "Name required");
            valid = false;
        } else setSuccess(name);

        // Email
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.value.match(emailPattern)) {
            setError(email, "Invalid email");
            valid = false;
        } else setSuccess(email);

        // Phone
        if (!/^\d{10}$/.test(phone.value)) {
            setError(phone, "Phone must be 10 digits");
            valid = false;
        } else setSuccess(phone);

        // City
        if (!/^[A-Za-z]+$/.test(city.value)) {
            setError(city, "Only alphabets allowed");
            valid = false;
        } else setSuccess(city);

        // Password
        if (password.value.length < 8) {
            setError(password, "Min 8 characters");
            valid = false;
        } else setSuccess(password);

        // Confirm Password
        if (confirmPassword.value !== password.value) {
            setError(confirmPassword, "Passwords do not match");
            valid = false;
        } else setSuccess(confirmPassword);

        // Save to localStorage
        if (valid) {
            localStorage.setItem("email", email.value);
            localStorage.setItem("password", password.value);
            alert("Signup Successful!");
            window.location.href = "SignIn.html";
        }
    });
}

// Signin Validation
const signinForm = document.getElementById("signinForm");

if (signinForm) {
    signinForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("loginEmail");
        let password = document.getElementById("loginPassword");

        let storedEmail = localStorage.getItem("email");
        let storedPassword = localStorage.getItem("password");

        if (email.value === storedEmail && password.value === storedPassword) {
            alert("Login Successful!");
            window.location.href = "travelapp.html";
        } else {
            alert("Invalid Credentials");
        }
    });
}

// Error Functions
function setError(input, message) {
    let small = input.nextElementSibling;
    small.innerText = message;
}

function setSuccess(input) {
    let small = input.nextElementSibling;
    small.innerText = "";
}