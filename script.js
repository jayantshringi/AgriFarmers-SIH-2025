// Configuration
const CONFIG = {
    WEATHER_API_KEY: '44a55de0f2e0674cb9160f50459d51d4',
    GITHUB_PAGES: true,
    REPO_NAME: 'AgriFarmers-SIH-2025'
};

// App State
let deferredPrompt = null;
let userLocation = null;

// DOM Elements
const elements = {
    loadingScreen: document.getElementById('loadingScreen'),
    app: document.getElementById('app'),
    offlinePage: document.getElementById('offlinePage'),
    pwaInstallButton: document.getElementById('pwa-install-button'),
    toastContainer: document.getElementById('toastContainer'),
    farmerLocation: document.getElementById('farmerLocation'),
    weatherCardContent: document.getElementById('weatherCardContent'),
    weatherDetails: document.getElementById('weatherDetails'),
    marketPricesCard: document.getElementById('marketPricesCard'),
    currentDate: document.getElementById('currentDate')
};

// Initialize App
function initApp() {
    console.log('Initializing AgriFarmers App...');
    
    // Set current date
    updateCurrentDate();
    
    // Check connectivity
    checkConnectivity();
    
    // Initialize PWA features
    initPWA();
    
    // Show app after loading
    setTimeout(() => {
        elements.loadingScreen.style.display = 'none';
        elements.app.style.display = 'block';
        
        // Show welcome page
        showPage('welcomePage');
        
        // Show location prompt after delay
        setTimeout(() => {
            showLocationPrompt();
        }, 1000);
    }, 1500);
}

// Check Connectivity
function checkConnectivity() {
    const connectivityStatus = document.getElementById('connectivity-status');
    
    if (navigator.onLine) {
        connectivityStatus.textContent = 'Connected ✓';
        connectivityStatus.style.color = '#138808';
        elements.offlinePage.classList.add('hidden');
    } else {
        connectivityStatus.textContent = 'Offline - Using cached data';
        connectivityStatus.style.color = '#e74c3c';
        elements.offlinePage.classList.remove('hidden');
    }
}

// Update Current Date
function updateCurrentDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    elements.currentDate.textContent = now.toLocaleDateString('en-IN', options);
}

// Show Page
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const page = document.getElementById(pageId);
    if (page) {
        page.classList.add('active');
        
        // If home page, fetch data
        if (pageId === 'homePage') {
            getUserLocation();
        }
    }
}

// Location Functions
function showLocationPrompt() {
    showToast('Enable location for accurate weather and farming advice', 'info');
}

function getUserLocation() {
    elements.farmerLocation.textContent = 'Getting your location...';
    
    if (!navigator.geolocation) {
        showToast('Geolocation not supported by browser', 'error');
        fetchIPLocation();
        return;
    }
    
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const { latitude, longitude } = position.coords;
            userLocation = { lat: latitude, lon: longitude };
            
            // Get location name
            const locationName = await getLocationName(latitude, longitude);
            elements.farmerLocation.textContent = locationName;
            
            // Fetch weather data
            fetchWeatherData(latitude, longitude);
            
            // Fetch market prices
            fetchMarketPrices();
            
            showToast('Location updated successfully!', 'success');
        },
        (error) => {
            console.error('Geolocation error:', error);
            showToast('Using approximate location', 'info');
            fetchIPLocation();
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}

async function getLocationName(lat, lon) {
    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
        );
        const data = await response.json();
        
        if (data.address) {
            const city = data.address.city || data.address.town || data.address.village || '';
            const state = data.address.state || '';
            return city ? `${city}, ${state}` : 'Location detected';
        }
    } catch (error) {
        console.error('Location name error:', error);
    }
    
    return `Location: ${lat.toFixed(2)}°, ${lon.toFixed(2)}°`;
}

async function fetchIPLocation() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        elements.farmerLocation.textContent = `${data.city}, ${data.region}`;
        userLocation = { lat: data.latitude, lon: data.longitude };
        
        fetchWeatherData(data.latitude, data.longitude);
        fetchMarketPrices();
    } catch (error) {
        elements.farmerLocation.textContent = 'Location not available';
        showMockData();
    }
}

// Weather API Functions
async function fetchWeatherData(lat, lon) {
    try {
        // Using free OpenWeatherMap API (demo key - replace with your own)
        const apiKey = CONFIG.WEATHER_API_KEY || '44a55de0f2e0674cb9160f50459d51d4';
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );
        
        if (!response.ok) {
            throw new Error('Weather API failed');
        }
        
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error('Weather fetch error:', error);
        displayMockWeatherData();
    }
}

function displayWeatherData(data) {
    const temp = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    
    elements.weatherCardContent.innerHTML = `
        <div class="flex items-center">
            <span class="text-3xl font-bold text-gray-800">${temp}°C</span>
            <span class="ml-3 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                ${description}
            </span>
        </div>
        <div class="mt-3 text-sm text-gray-600">
            <div class="flex items-center">
                <i class="fas fa-temperature-low mr-2"></i>
                <span>Feels like ${feelsLike}°C</span>
            </div>
            <div class="flex items-center mt-1">
                <i class="fas fa-tint mr-2"></i>
                <span>Humidity: ${humidity}%</span>
            </div>
        </div>
    `;
    
    // Update weather details
    updateWeatherDetails(data);
}

function displayMockWeatherData() {
    elements.weatherCardContent.innerHTML = `
        <div class="flex items-center">
            <span class="text-3xl font-bold text-gray-800">28°C</span>
            <span class="ml-3 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                Partly Cloudy
            </span>
        </div>
        <div class="mt-3 text-sm text-gray-600">
            <div class="flex items-center">
                <i class="fas fa-temperature-low mr-2"></i>
                <span>Feels like 30°C</span>
            </div>
            <div class="flex items-center mt-1">
                <i class="fas fa-tint mr-2"></i>
                <span>Humidity: 65%</span>
            </div>
        </div>
    `;
    
    // Mock weather details
    elements.weatherDetails.innerHTML = `
        <div class="text-center p-3 bg-blue-50 rounded-lg">
            <i class="fas fa-wind text-blue-500 text-xl mb-2"></i>
            <p class="font-bold text-gray-800">3.5 m/s</p>
            <p class="text-xs text-gray-600">Wind Speed</p>
        </div>
        <div class="text-center p-3 bg-blue-50 rounded-lg">
            <i class="fas fa-tachometer-alt text-blue-500 text-xl mb-2"></i>
            <p class="font-bold text-gray-800">1013 hPa</p>
            <p class="text-xs text-gray-600">Pressure</p>
        </div>
        <div class="text-center p-3 bg-blue-50 rounded-lg">
            <i class="fas fa-eye text-blue-500 text-xl mb-2"></i>
            <p class="font-bold text-gray-800">10 km</p>
            <p class="text-xs text-gray-600">Visibility</p>
        </div>
        <div class="text-center p-3 bg-blue-50 rounded-lg">
            <i class="fas fa-sun text-blue-500 text-xl mb-2"></i>
            <p class="font-bold text-gray-800">UV Index: 6</p>
            <p class="text-xs text-gray-600">Moderate</p>
        </div>
    `;
}

function updateWeatherDetails(data) {
    elements.weatherDetails.innerHTML = `
        <div class="text-center p-3 bg-blue-50 rounded-lg">
            <i class="fas fa-wind text-blue-500 text-xl mb-2"></i>
            <p class="font-bold text-gray-800">${data.wind.speed} m/s</p>
            <p class="text-xs text-gray-600">Wind Speed</p>
        </div>
        <div class="text-center p-3 bg-blue-50 rounded-lg">
            <i class="fas fa-tachometer-alt text-blue-500 text-xl mb-2"></i>
            <p class="font-bold text-gray-800">${data.main.pressure} hPa</p>
            <p class="text-xs text-gray-600">Pressure</p>
        </div>
        <div class="text-center p-3 bg-blue-50 rounded-lg">
            <i class="fas fa-eye text-blue-500 text-xl mb-2"></i>
            <p class="font-bold text-gray-800">${data.visibility / 1000} km</p>
            <p class="text-xs text-gray-600">Visibility</p>
        </div>
        <div class="text-center p-3 bg-blue-50 rounded-lg">
            <i class="fas fa-cloud text-blue-500 text-xl mb-2"></i>
            <p class="font-bold text-gray-800">${data.clouds.all}%</p>
            <p class="text-xs text-gray-600">Cloud Cover</p>
        </div>
    `;
}

// Market Prices Functions
async function fetchMarketPrices() {
    try {
        // Using mock data for demo
        const mockPrices = getMockMarketPrices();
        displayMarketPrices(mockPrices);
    } catch (error) {
        console.error('Market prices error:', error);
        displayMockMarketPrices();
    }
}

function getMockMarketPrices() {
    return [
        { crop: 'Wheat', price: '₹2,300', unit: 'Quintal', change: '+2%' },
        { crop: 'Rice', price: '₹3,800', unit: 'Quintal', change: '+1.5%' },
        { crop: 'Tomato', price: '₹25', unit: 'kg', change: '+5%' },
        { crop: 'Potato', price: '₹18', unit: 'kg', change: '-2%' }
    ];
}

function displayMarketPrices(prices) {
    let html = '';
    prices.slice(0, 2).forEach(item => {
        const changeColor = item.change.startsWith('+') ? 'text-green-600' : 'text-red-600';
        html += `
            <div class="mb-2">
                <div class="flex justify-between items-center">
                    <span class="font-medium">${item.crop}</span>
                    <span class="font-bold">${item.price}/${item.unit}</span>
                </div>
                <div class="text-sm ${changeColor}">
                    ${item.change} from yesterday
                </div>
            </div>
        `;
    });
    
    elements.marketPricesCard.innerHTML = html;
}

function displayMockMarketPrices() {
    elements.marketPricesCard.innerHTML = `
        <div class="mb-2">
            <div class="flex justify-between items-center">
                <span class="font-medium">Wheat</span>
                <span class="font-bold">₹2,300/Quintal</span>
            </div>
            <div class="text-sm text-green-600">
                +2% from yesterday
            </div>
        </div>
        <div>
            <div class="flex justify-between items-center">
                <span class="font-medium">Rice</span>
                <span class="font-bold">₹3,800/Quintal</span>
            </div>
            <div class="text-sm text-green-600">
                +1.5% from yesterday
            </div>
        </div>
    `;
}

// PWA Functions
function initPWA() {
    // Handle beforeinstallprompt
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        elements.pwaInstallButton.classList.remove('hidden');
    });
    
    // Handle install button click
    elements.pwaInstallButton.addEventListener('click', async () => {
        if (!deferredPrompt) return;
        
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        
        if (outcome === 'accepted') {
            showToast('App installed successfully!', 'success');
            elements.pwaInstallButton.classList.add('hidden');
        }
        
        deferredPrompt = null;
    });
    
    // Handle app installed
    window.addEventListener('appinstalled', () => {
        elements.pwaInstallButton.classList.add('hidden');
        deferredPrompt = null;
    });
    
    // Register Service Worker
    if ('serviceWorker' in navigator) {
        const swPath = CONFIG.GITHUB_PAGES ? 
            `/${CONFIG.REPO_NAME}/service-worker.js` : 
            './service-worker.js';
            
        navigator.serviceWorker.register(swPath)
            .then(registration => {
                console.log('Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    }
}

// Toast Notification
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'} mr-2"></i>
        ${message}
    `;
    
    elements.toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Modal Functions
function openWeatherModal() {
    showToast('Weather details opened', 'info');
}

function openMarketPricesModal() {
    showToast('Market prices opened', 'info');
}

function openSeedModal() {
    showToast('Seed recommendations opened', 'info');
}

// Show mock data for offline/demo
function showMockData() {
    displayMockWeatherData();
    displayMockMarketPrices();
}

// Event Listeners
window.addEventListener('online', () => {
    checkConnectivity();
    showToast('Back online!', 'success');
});

window.addEventListener('offline', () => {
    checkConnectivity();
    showToast('You are offline. Using cached data.', 'error');
});

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
