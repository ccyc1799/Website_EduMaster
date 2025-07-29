// Form Validations
function login() {
    // For Testing
    const correctUsername = 'admin123';
    const correctPassword = 'sunway';

    // Get Input Values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Reset Error Messages
    document.getElementById('username-error').textContent = '';
    document.getElementById('password-error').textContent = '';

    let isValid = true;

    // Validate Form Values
    if (!username) {
        document.getElementById('username-error').textContent = 'Please enter your username';
        isValid = false;
    }
    if (!password) {
        document.getElementById('password-error').textContent = 'Please enter your password';
        isValid = false;
    }

    // Check If Admin
    if (isValid) {
        if (username != correctUsername) {
            document.getElementById('username-error').textContent = 'Invalid username. Please try again.';
            isValid = false;
        }
        else if (password != correctPassword) {
            document.getElementById('password-error').textContent = 'Invalid password. Please try again.';
            isValid = false;
        }
    }

    // Log In
    if (isValid) {
        localStorage.setItem('loggedIn', 'true');
        alert(`Logged in as ${username}`);
    }
    
    return isValid;
}

function signup() {
    // Get Input Values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    // Reset Error Messages
    document.getElementById('username-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    document.getElementById('confirm-password-error').textContent = '';
    
    let isValid = true;
    
    // Validate Username
    if (!username) {
        document.getElementById('username-error').textContent = 'Username is required';
        isValid = false;
    } else if (username.length < 3) {
        document.getElementById('username-error').textContent = 'Username must be at least 3 characters long';
        isValid = false;
    }
    
    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('email-error').textContent = 'Email is required';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email';
        isValid = false;
    }
    
    // Validate Password
    if (!password) {
        document.getElementById('password-error').textContent = 'Password is required';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('password-error').textContent = 'Password must be at least 6 characters long';
        isValid = false;
    }
    
    // Validate Confirm Password
    if (!confirmPassword) {
        document.getElementById('confirm-password-error').textContent = 'Please confirm your password';
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = 'Passwords do not match';
        isValid = false;
    }

    // Success
    if (isValid) {
        alert('Account successfully registered!');
    }
    
    return isValid;
}

function validateContactForm() {
    // Get Input Values
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();
    
    // Reset Error Messages
    document.getElementById('first-name-error').textContent = '';
    document.getElementById('last-name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('subject-error').textContent = '';
    document.getElementById('message-error').textContent = '';
    
    let isValid = true;
    
    // Validate First Name
    if (!firstName) {
        document.getElementById('first-name-error').textContent = 'First name is required';
        isValid = false;
    }
    
    // Validate Last Name
    if (!lastName) {
        document.getElementById('last-name-error').textContent = 'Last name is required';
        isValid = false;
    }
    
    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('email-error').textContent = 'Email is required';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email';
        isValid = false;
    }
    
    // Validate Subject
    if (!subject) {
        document.getElementById('subject-error').textContent = 'Please select a subject';
        isValid = false;
    }
    
    // Validate Message
    if (!message || message.length < 10) {
        document.getElementById('message-error').textContent = 'Message should be at least 10 characters';
        isValid = false;
    }

    // Success
    if (isValid) {
        alert('Your message has been sent successfully!');
    }
    
    return isValid;
}
