// Mobile Navbar
function setupHamburger() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');

        // Change Hamburger Icon
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu after click link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');

                // Change Hamburger Icon
                const icon = hamburger.querySelector('i');
                icon.classList.toggle('fa-times', isActive);
            }
        });
    });
}

// Back to Top Functionality
function setupBackToTop() {
    // Create back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        // Show / Hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        // Scroll to top when clicked
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Log Out Functionality
function setupLogout() {
    const loginBtn = document.querySelector('.login');
    const logoutBtn = document.querySelector('.logout');
    const signupBtns = document.querySelectorAll('.signup');

    const isLoggedIn = localStorage.getItem('loggedIn');

    // Hide Login Signup Buttons, Show Logout Button
    if (isLoggedIn) {
        loginBtn.classList.add('hidden');
        logoutBtn.classList.remove('hidden');

        signupBtns.forEach(signupBtn => {
            signupBtn.classList.add('hidden');
        });
    } else {
        loginBtn.classList.remove('hidden');
        logoutBtn.classList.add('hidden');

        signupBtns.forEach(signupBtn => {
            signupBtn.classList.remove('hidden');
        });
    }

    // Handle Logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            const confirmed = confirm('Are you sure you want to log out?');
            if (confirmed) {
                e.preventDefault();
                localStorage.removeItem('loggedIn');
                alert('Logged out successfully.');
                window.location.href = 'index.html';
            }
        });
    }
}

// Main
document.addEventListener('DOMContentLoaded', function() {
    setupHamburger();
    setupBackToTop();
    setupLogout();
});
