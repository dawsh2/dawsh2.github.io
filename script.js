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

// Weather functionality with detailed error handling
async function initWeather() {
    const weatherDisplay = document.getElementById('weather-display');
    if (!weatherDisplay) {
        console.error('Weather display element not found');
        return;
    }

    const weatherContent = weatherDisplay.querySelector('.weather-content');
    const weatherLoading = weatherDisplay.querySelector('.weather-loading');
    const weatherError = weatherDisplay.querySelector('.weather-error');

    try {
        console.log('Requesting location permission...');
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        console.log('Location received:', {
            lat: position.coords.latitude,
            lon: position.coords.longitude
        });

        console.log('Fetching weather data...');
        const weatherData = await getWeatherData(
            position.coords.latitude,
            position.coords.longitude
        );

        console.log('Weather data received:', weatherData);

        weatherLoading.style.display = 'none';
        weatherContent.style.display = 'flex';
        displayWeather(weatherData);
    } catch (error) {
        console.error('Detailed weather error:', error);
        weatherLoading.style.display = 'none';
        weatherError.style.display = 'block';
        weatherError.textContent = 'Error: ' + error.message;
    }
}

async function getWeatherData(lat, lon) {
    // Replace this with your actual OpenWeatherMap API key
    const apiKey = 'YOUR_API_KEY_HERE';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
    
    console.log('Fetching from URL:', url);
    
    const response = await fetch(url);
    
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error (${response.status}): ${errorText}`);
    }
    
    return response.json();
}

function displayWeather(data) {
    const weatherContent = document.querySelector('.weather-content');
    if (!weatherContent) {
        console.error('Weather content element not found');
        return;
    }

    try {
        const iconElement = weatherContent.querySelector('.weather-icon');
        const temperatureElement = weatherContent.querySelector('.temperature');
        const descriptionElement = weatherContent.querySelector('.description');
        const locationElement = weatherContent.querySelector('.location');

        const iconCode = data.weather[0].icon;
        iconElement.style.backgroundImage = `url(https://openweathermap.org/img/wn/${iconCode}@2x.png)`;
        temperatureElement.textContent = `${Math.round(data.main.temp)}°F`;
        descriptionElement.textContent = data.weather[0].description;
        locationElement.textContent = data.name;

        console.log('Weather display updated successfully');
    } catch (error) {
        console.error('Error displaying weather:', error);
        throw new Error('Failed to display weather data: ' + error.message);
    }
}

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
        
        // In a real application, you would send this data to a server
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
