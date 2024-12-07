// Theme Switcher
function initThemeSwitch() {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Set initial theme based on user's system preference
    if (localStorage.getItem('theme') === null) {
        document.documentElement.setAttribute('data-theme', 
            prefersDarkScheme.matches ? 'dark' : 'light'
        );
    } else {
        document.documentElement.setAttribute('data-theme', 
            localStorage.getItem('theme')
        );
    }

    // Toggle theme function
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Trigger animation
        animateThemeTransition();
    }

    // Add click event listener to theme toggle button
    themeToggle.addEventListener('click', toggleTheme);
    
    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', (e) => {
        if (localStorage.getItem('theme') === null) {
            document.documentElement.setAttribute('data-theme',
                e.matches ? 'dark' : 'light'
            );
        }
    });
}

// Theme transition animation
