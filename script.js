// Theme toggle
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
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

    // Initialize weather widget
    initWeather();
});

// Weather functionality
async function initWeather() {
    const weatherDisplay = document.getElementById('weather-display');
    if (!weatherDisplay) return;

    const weatherContent = weatherDisplay.querySelector('.weather-content');
    const weatherLoading = weatherDisplay.querySelector('.weather-loading');
    const weatherError = weatherDisplay.querySelector('.weather-error');

    try {
        // Get user's location
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        // Get weather data
        const weatherData = await getWeatherData(
            position.coords.latitude,
            position.coords.longitude
        );

        // Display weather data
        weatherLoading.style.display = 'none';
        weatherContent.style.display = 'flex';
        displayWeather(weatherData);
    } catch (error) {
        console.error('Weather error:', error);
        weatherLoading.style.display = 'none';
        weatherError.style.display = 'block';
    }
}

async function getWeatherData(lat, lon) {
    // Replace this with your actual API key from OpenWeatherMap
    const apiKey = 'c62b570716fa572f0dec2aa4405df17e';
            
    
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
    );
    
    if (!response.ok) {
        throw new Error('Weather API request failed');
    }
    
    return response.json();
}

function displayWeather(data) {
    const weatherContent = document.querySelector('.weather-content');
    if (!weatherContent) return;

    const iconElement = weatherContent.querySelector('.weather-icon');
    const temperatureElement = weatherContent.querySelector('.temperature');
    const descriptionElement = weatherContent.querySelector('.description');
    const locationElement = weatherContent.querySelector('.location');

    // Display weather icon
    const iconCode = data.weather[0].icon;
    iconElement.style.backgroundImage = `url(https://openweathermap.org/img/wn/${iconCode}@2x.png)`;

    // Display temperature (already in Fahrenheit due to units=imperial in API call)
    temperatureElement.textContent = `${Math.round(data.main.temp)}°F`;

    // Display weather description and location
    descriptionElement.textContent = data.weather[0].description;
    locationElement.textContent = data.name;
}

// Form handling
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        console.log('Form submitted:', { name, email, message });
        alert('Thank you for your message! I will get back to you soon.');
        
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
