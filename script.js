// Theme toggle (keeping the working theme code)
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

    // Initialize weather widget
    initWeather();
});

// Weather functionality with better error handling
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
    // Using a sample API key for demonstration - replace with your own
    const apiKey = '1234567890abcdef1234567890abcdef';
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

// Keeping the existing form and smooth scrolling code
[... rest of the code remains the same ...]
