// Wait for the DOM to load completely
document.addEventListener('DOMContentLoaded', function() {
    // Get the theme toggle button
    const themeToggleBtn = document.getElementById('theme-toggle');

    // Function to handle theme toggle
    function toggleTheme() {
        // Get the root html element
        const root = document.documentElement;
        // Get current theme
        const currentTheme = root.getAttribute('data-theme') || 'light';
        // Switch theme
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        // Set new theme
        root.setAttribute('data-theme', newTheme);
    }

    // Add click event listener to the button
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
        console.log('Theme toggle button listener added'); // Debug log
    } else {
        console.log('Theme toggle button not found'); // Debug log
    }
});

// Form handling
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Validate form
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        console.log('Form submitted:', { name, email, message });
        alert('Thank you for your message! I will get back to you soon.');
        
        // Clear form
        this.reset();
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
