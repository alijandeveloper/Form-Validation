const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const successMessage = document.getElementById('successMessage');
const togglePassword = document.getElementById('togglePassword');
const themeToggle = document.getElementById('themeToggle');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    
    if (nameInput.value.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }
    
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneInput.value.trim())) {
        document.getElementById('phoneError').textContent = 'Enter a valid 10-digit number';
        isValid = false;
    } else {
        document.getElementById('phoneError').textContent = '';
    }
    
    if (passwordInput.value.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        isValid = false;
    } else {
        document.getElementById('passwordError').textContent = '';
    }
    
    if (confirmPasswordInput.value !== passwordInput.value) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    } else {
        document.getElementById('confirmPasswordError').textContent = '';
    }
    
    if (isValid) {
        successMessage.textContent = '🎉 Registration Successful!';
        form.reset();
    } else {
        successMessage.textContent = '';
    }
});

// 👁 Show/Hide Password
togglePassword.addEventListener('click', () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.classList.replace("fa-eye-slash", "fa-eye");
    } else {
        passwordInput.type = "password";
        togglePassword.classList.replace("fa-eye", "fa-eye-slash");
    }
});

// 🌙 Dark Mode Toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
