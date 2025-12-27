// DOM Elements
const locationInfo = document.getElementById('locationInfo');
const locationError = document.getElementById('locationError');
const weatherInfo = document.getElementById('weatherInfo');
const weatherError = document.getElementById('weatherError');
const marketInfo = document.getElementById('marketInfo');
const marketError = document.getElementById('marketError');
const installBtn = document.getElementById('installBtn');
const installContainer = document.getElementById('installContainer');
const connectionIcon = document.getElementById('connectionIcon');
const connectionStatus = document.getElementById('connectionStatus');

// API Configuration
const WEATHER_API_KEY = '44a55de0f2e0674cb9160f50459d51d4'; // Get from https://openweathermap.org/api
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// For production, use a proxy server for market data API
const MARKET_API_URL = 'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070';

// PWA Installation
let deferredPrompt;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupServiceWorker();
    setupNetworkDetection();
});

function initializeApp() {
    getLocation();
    setupPWAInstall();
}

// Geolocation Functions
function getLocation() {
    locationInfo.innerHTML = '<div class="location-loading"><i class="fas fa-spinner fa-spin"></i> Getting your location...</div>';
    locationError.style.display = 'none';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                await updateLocationInfo(latitude, longitude);
                await fetchWeatherData(latitude, longitude);
            },
            (error) => {
                handleLocationError(error);
                // Fallback to IP-based location
                fetchIPLocation();
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    } else {
        locationError.textContent = 'Geolocation is not supported by your browser';
        locationError.style.display = 'block';
        fetchIPLocation();
    }
}

async function updateLocationInfo(lat, lon) {
    try {
        // Use OpenStreetMap Nominatim for reverse geocoding
        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
        );
        const data = await response.json();
        
        if (data.address) {
            const city = data.address.city || data.address.town || data.address.village || 'Unknown';
            const state = data.address.state || 'Unknown';
            const country = data.address.country || 'Unknown';
            
            locationInfo.innerHTML = `
                <div class="location-details">
                    <p><i class="fas fa-map-marker-alt"></i> <strong>Location:</strong> ${city}, ${state}, ${country}</p>
                    <p><i class="fas fa-globe"></i> <strong>Coordinates:</strong> ${lat.toFixed(4)}°, ${lon.toFixed(4)}°</p>
                    <p><i class="fas fa-clock"></i> <strong>Last Updated:</strong> ${new Date().toLocaleTimeString()}</p>
                </div>
            `;
        }
    } catch (error) {
        locationInfo.innerHTML = `
            <div class="location-details">
                <p><i class="fas fa-map-marker-alt"></i> <strong>Coordinates:</strong> ${lat.toFixed(4)}°, ${lon.toFixed(4)}°</p>
                <p><i class="fas fa-info-circle"></i> Could not fetch location details</p>
            </div>
        `;
    }
}

async function fetchIPLocation() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        locationInfo.innerHTML = `
            <div class="location-details">
                <p><i class="fas fa-map-marker-alt"></i> <strong>Location:</strong> ${data.city}, ${data.region}, ${data.country_name}</p>
                <p><i class="fas fa-globe"></i> <strong>IP Location:</strong> Based on your network</p>
                <p><i class="fas fa-exclamation-triangle"></i> <small>Enable location services for more accuracy</small></p>
            </div>
        `;
        
        // Fetch weather based on IP location
        await fetchWeatherData(data.latitude, data.longitude);
    } catch (error) {
        locationError.textContent = 'Could not determine your location';
        locationError.style.display = 'block';
    }
}

function handleLocationError(error) {
    let message = '';
    switch(error.code) {
        case error.PERMISSION_DENIED:
            message = 'Location permission denied. Please enable location services.';
            break;
        case error.POSITION_UNAVAILABLE:
            message = 'Location information unavailable.';
            break;
        case error.TIMEOUT:
            message = 'Location request timed out.';
            break;
        default:
            message = 'An unknown error occurred.';
            break;
    }
    locationError.textContent = message;
    locationError.style.display = 'block';
}

// Weather Functions
async function fetchWeatherData(lat, lon) {
    try {
        weatherError.style.display = 'none';
        
        const response = await fetch(
            `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );
        
        if (!response.ok) throw new Error('Weather data unavailable');
        
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        weatherError.textContent = 'Could not fetch weather data. Please try again later.';
        weatherError.style.display = 'block';
        console.error('Weather error:', error);
    }
}

function displayWeatherData(data) {
    const temp = data.main.temp;
    const feelsLike = data.main.feels_like;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const weatherDesc = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    
    weatherInfo.innerHTML = `
        <div class="weather-details">
            <div class="weather-item">
                <i class="fas fa-thermometer-half"></i>
                <div>
                    <strong>Temperature:</strong>
                    <div class="temp">${temp.toFixed(1)}°C</div>
                </div>
            </div>
            <div class="weather-item">
                <i class="fas fa-wind"></i>
                <div>
                    <strong>Feels Like:</strong>
                    <div>${feelsLike.toFixed(1)}°C</div>
                </div>
            </div>
            <div class="weather-item">
                <i class="fas fa-tint"></i>
                <div>
                    <strong>Humidity:</strong>
                    <div>${humidity}%</div>
                </div>
            </div>
            <div class="weather-item">
                <i class="fas fa-wind"></i>
                <div>
                    <strong>Wind Speed:</strong>
                    <div>${windSpeed} m/s</div>
                </div>
            </div>
            <div class="weather-item">
                <i class="fas fa-cloud"></i>
                <div>
                    <strong>Condition:</strong>
                    <div>${weatherDesc}</div>
                </div>
            </div>
            <div class="weather-item">
                <i class="fas fa-location-arrow"></i>
                <div>
                    <strong>Location:</strong>
                    <div>${data.name}, ${data.sys.country}</div>
                </div>
            </div>
        </div>
    `;
}

// Market Price Functions
async function fetchMarketPrices() {
    const state = document.getElementById('stateSelect').value;
    const commodity = document.getElementById('commoditySelect').value;
    
    if (!state || !commodity) {
        marketError.textContent = 'Please select both state and commodity';
        marketError.style.display = 'block';
        return;
    }
    
    marketError.style.display = 'none';
    marketInfo.innerHTML = '<div class="weather-loading"><i class="fas fa-spinner fa-spin"></i> Fetching market prices...</div>';
    
    try {
        // Note: data.gov.in requires API key and has CORS restrictions
        // In production, you'll need a proxy server or backend API
        const mockPrices = getMockPrices(state, commodity);
        displayMarketPrices(mockPrices);
        
        // For actual API call (requires backend proxy due to CORS):
        /*
        const response = await fetch(`/api/market-prices?state=${encodeURIComponent(state)}&commodity=${encodeURIComponent(commodity)}`);
        const data = await response.json();
        displayMarketPrices(data);
        */
        
    } catch (error) {
        marketError.textContent = 'Failed to fetch market prices. Please try again later.';
        marketError.style.display = 'block';
        console.error('Market price error:', error);
    }
}

function getMockPrices(state, commodity) {
    // Mock data - replace with actual API call
    const prices = {
        'Rice': { min: 25, max: 35, unit: 'kg' },
        'Wheat': { min: 20, max: 28, unit: 'kg' },
        'Tomato': { min: 15, max: 40, unit: 'kg' },
        'Potato': { min: 12, max: 25, unit: 'kg' }
    };
    
    const price = prices[commodity] || { min: 20, max: 30, unit: 'kg' };
    
    return [
        {
            market: `${state} Main Market`,
            commodity: commodity,
            minPrice: price.min,
            maxPrice: price.max,
            unit: price.unit,
            date: new Date().toLocaleDateString()
        },
        {
            market: `${state} Wholesale Market`,
            commodity: commodity,
            minPrice: price.min - 2,
            maxPrice: price.max - 3,
            unit: price.unit,
            date: new Date().toLocaleDateString()
        }
    ];
}

function displayMarketPrices(prices) {
    if (!prices || prices.length === 0) {
        marketInfo.innerHTML = '<p>No price data available for selected filters</p>';
        return;
    }
    
    marketInfo.innerHTML = prices.map(price => `
        <div class="price-item">
            <div>
                <strong>${price.market}</strong>
                <div class="commodity">${price.commodity}</div>
                <div class="date">${price.date}</div>
            </div>
            <div class="price-details">
                <div class="price">₹${price.minPrice} - ₹${price.maxPrice}/${price.unit}</div>
                <div class="price-range">
                    <small>Min: ₹${price.minPrice}/${price.unit}</small><br>
                    <small>Max: ₹${price.maxPrice}/${price.unit}</small>
                </div>
            </div>
        </div>
    `).join('');
}

// PWA Installation Functions
function setupPWAInstall() {
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installContainer.style.display = 'block';
    });

    installBtn.addEventListener('click', async () => {
        if (!deferredPrompt) return;
        
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        
        if (outcome === 'accepted') {
            console.log('PWA installed');
        }
        
        deferredPrompt = null;
        installContainer.style.display = 'none';
    });

    window.addEventListener('appinstalled', () => {
        installContainer.style.display = 'none';
        deferredPrompt = null;
    });
}

// Service Worker Registration
function setupServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .then(registration => {
                    console.log('ServiceWorker registered:', registration);
                })
                .catch(error => {
                    console.log('ServiceWorker registration failed:', error);
                });
        });
    }
}

// Network Detection
function setupNetworkDetection() {
    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);
    updateNetworkStatus();
}

function updateNetworkStatus() {
    if (navigator.onLine) {
        connectionIcon.className = 'fas fa-wifi';
        connectionStatus.textContent = 'Online';
        connectionStatus.style.color = 'var(--success-color)';
    } else {
        connectionIcon.className = 'fas fa-wifi-slash';
        connectionStatus.textContent = 'Offline';
        connectionStatus.style.color = 'var(--error-color)';
    }
}

// Background Sync for offline capability
if ('sync' in registration) {
    registration.sync.register('weather-sync');
}

// Periodic sync (if supported)
if ('periodicSync' in registration) {
    try {
        await registration.periodicSync.register('weather-update', {
            minInterval: 6 * 60 * 60 * 1000 // 6 hours
        });
    } catch (error) {
        console.log('Periodic sync could not be registered:', error);
    }
}
