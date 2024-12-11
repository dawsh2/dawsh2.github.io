# Building a Portfolio Website: A Code Walkthrough

Let's walk through how this portfolio website is built, examining the key decisions and implementation details along the way. We'll look at the HTML structure, CSS styling, and JavaScript functionality as a cohesive whole, rather than separate pieces.

## Starting with HTML: The Foundation

The foundation of our portfolio starts with clean, semantic HTML. Here's our basic structure:

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dawson Shay - Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="navbar">
        <!-- Navigation content -->
    </nav>
    
    <main>
        <!-- Main content sections -->
    </main>
</body>
</html>
```

Notice the `data-theme="light"` attribute on the HTML element. This is our hook for theme switching - a small detail that makes a big difference in how we handle dark and light modes. The main content sections are kept pretty straightforward.

The navigation is kept simple but effective:

```html
<nav class="navbar">
    <ul class="nav-list">
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    <button id="theme-toggle" class="theme-toggle" aria-label="Toggle theme">
        <!-- SVG icons here -->
    </button>
</nav>
```

The nav includes our theme toggle button - a small but important UI element that lets users switch between light and dark modes. The `aria-label` ensures screen readers can properly announce this functionality.

## Styling with CSS: Making It Look Good

Our CSS approach uses custom properties (variables) for theming. This makes it incredibly easy to switch between light and dark modes. Here's how we set that up:

```css
:root[data-theme="light"] {
    --bg-primary: #ffffff;
    --bg-secondary: #f9f9f9;
    --text-primary: #333333;
    --text-secondary: #666666;
    /* other light theme colors */
}

:root[data-theme="dark"] {
    --bg-primary: #1a1a1a;
    --bg-secondary: #2d2d2d;
    --text-primary: #ffffff;
    --text-secondary: #cccccc;
    /* other dark theme colors */
}
```

When we use these variables throughout our CSS, the theme switching becomes almost magical. Every color in our site is tied to these theme variables, making the switch between light and dark modes seamless.

Let's look at how we style some of our main components. The navigation bar, for example:

```css
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: var(--nav-bg);
    padding: 1rem;
    z-index: 1000;
}
```

We're using `position: fixed` to keep the navigation always visible, and our theme variables ensure it looks right in both light and dark modes.

## Weather Widget: Adding Dynamic Content

The weather widget is where things get interesting. Here's the HTML structure:

```html
<div class="weather-widget">
    <h3>Current Weather</h3>
    <div id="weather-display">
        <div class="weather-loading">Loading weather data...</div>
        <div class="weather-content" style="display: none;">
            <div class="weather-icon"></div>
            <div class="weather-info">
                <div class="temperature"></div>
                <div class="description"></div>
                <div class="location"></div>
            </div>
        </div>
        <div class="weather-error" style="display: none;">
            Unable to load weather data
        </div>
    </div>
</div>
```

We've set up three states: loading, content, and error. This gives users clear feedback about what's happening with their weather data.

## JavaScript: Bringing It All Together

Our JavaScript ties everything together. Let's look at the theme switching first:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    function toggleTheme() {
        const root = document.documentElement;
        const currentTheme = root.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', newTheme);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
});
```

The theme switching code is straightforward - we just toggle the data-theme attribute between 'light' and 'dark', and our CSS variables do the rest.

The weather functionality is more complex, handling asynchronous operations and potential errors:

```javascript
async function getWeatherData(lat, lon) {
    const apiKey = 'c62b570716fa572f0dec2aa4405df17e';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
    
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`API Error (${response.status})`);
    }
    
    return response.json();
}
```

We're using async/await for cleaner handling of our API calls, with proper error handling to ensure a good user experience even when things go wrong.

## Making It All Work Together

The magic happens when all these pieces work together. The theme switch affects both the main site and the weather widget. The weather data updates independently of theme changes. The navigation smoothly scrolls to different sections.

Here's how the smooth scrolling is implemented:

```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
```

Simple but effective - it makes the whole site feel more polished and professional.

## Looking Forward

There's always room for improvement. We could add transitions for the theme switch, cache the weather data to reduce API calls, or add more interactive features. The foundation we've built makes it easy to add these enhancements without having to restructure our code.

The key to this implementation is its simplicity and modularity. Each piece - HTML, CSS, and JavaScript - handles its own concerns while working seamlessly with the others. This makes the code easy to understand, maintain, and extend.
