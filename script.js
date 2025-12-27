// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
    APP_NAME: 'AgriFarmers',
    VERSION: '1.0.0',
    DEBUG_MODE: true,
    LANGUAGES: {
        'en': { name: 'English', dir: 'ltr', flag: '🇺🇸' },
        'hi': { name: 'हिंदी', dir: 'ltr', flag: '🇮🇳' },
        'pa': { name: 'ਪੰਜਾਬੀ', dir: 'ltr', flag: '🇮🇳' }
    }
};

// ============================================
// TRANSLATION SYSTEM (Simplified)
// ============================================
const TRANSLATIONS = {
    'en': {
        // Navigation
        'app_name': 'AgriFarmers',
        'online': 'Online',
        'offline': 'Offline',
        'login': 'Login',
        'logout': 'Logout',
        'get_started': 'Get Started',
        'language': 'Language',
        
        // Welcome Page
        'welcome_title': 'Welcome to AgriFarmers',
        'welcome_subtitle': 'Your trusted companion for modern farming',
        'smart_farming': 'Smart Farming',
        'smart_farming_desc': 'Get personalized crop recommendations',
        'weather_insights': 'Weather Insights',
        'weather_insights_desc': 'Accurate weather forecasts',
        'market_prices': 'Market Prices',
        'market_prices_desc': 'Real-time crop prices',
        
        // Login/Signup
        'welcome_back': 'Welcome Back',
        'mobile_number': 'Mobile Number',
        'enter_mobile': 'Enter 10-digit mobile number',
        'continue': 'Continue',
        'new_here': 'New here?',
        'create_account': 'Create account',
        'join_agrifarmers': 'Join AgriFarmers',
        'full_name': 'Full Name',
        'your_name': 'Your Name',
        'state': 'State',
        'select_state': 'Select State',
        'district': 'District',
        'select_district': 'Select District',
        'already_account': 'Already have an account?',
        'sign_in': 'Sign in',
        
        // OTP
        'otp_verification': 'OTP Verification',
        'otp_sent_to': 'OTP sent to',
        'verify_otp': 'Verify OTP',
        'resend_otp': 'Resend OTP',
        'back_login': 'Back to Login',
        'demo_otp': 'Demo: Your OTP is shown below',
        'otp_valid': 'OTP valid for',
        'minutes': 'minutes',
        
        // Home Page
        'hello': 'Hello',
        'today': 'Today',
        'dashboard': 'Your Farming Dashboard',
        'weather_forecast': 'Weather Forecast',
        'weather_desc': 'Today\'s weather & forecast',
        'seed_recommendations': 'Seed Recommendations',
        'seed_desc': 'Best seeds for your region',
        'fertilizer_guide': 'Fertilizer Guide',
        'fertilizer_desc': 'Nutrients for your crops',
        'crop_calendar': 'Crop Calendar',
        'crop_desc': 'Seasonal planting guide',
        'market_prices_title': 'Market Prices',
        'market_desc': 'Current crop prices',
        'soil_health': 'Soil Health',
        'soil_desc': 'Soil testing guidance',
        'farming_advisory': 'Today\'s Farming Advisory',
        'good_weather': 'Good weather for farming activities.',
        
        // Footer
        'quick_links': 'Quick Links',
        'home': 'Home',
        'about': 'About',
        'services': 'Services',
        'contact': 'Contact',
        'empowering_farmers': 'Empowering farmers with smart solutions',
        'privacy_policy': 'Privacy Policy',
        'terms_of_use': 'Terms of Use',
        'sitemap': 'Sitemap',
        'all_rights_reserved': 'All rights reserved',
        
        // Toasts
        'welcome_toast': 'Welcome to AgriFarmers!',
        'account_created': 'Account created successfully!',
        'logged_out': 'Logged out successfully',
        'pwa_installed': 'AgriFarmers installed successfully!',
        'offline_mode': 'You are offline. Some features may be limited.',
        'loading': 'Loading your farming assistant...'
    },
    
    'hi': {
        'app_name': 'एग्रीफार्मर्स',
        'online': 'ऑनलाइन',
        'offline': 'ऑफलाइन',
        'login': 'लॉगिन',
        'logout': 'लॉगआउट',
        'get_started': 'शुरू करें',
        'language': 'भाषा',
        'welcome_title': 'एग्रीफार्मर्स में आपका स्वागत है',
        'welcome_subtitle': 'आधुनिक खेती के लिए आपका विश्वसनीय साथी',
        'welcome_back': 'वापसी पर स्वागत है',
        'mobile_number': 'मोबाइल नंबर',
        'enter_mobile': '10 अंकों का मोबाइल नंबर दर्ज करें',
        'continue': 'जारी रखें',
        'new_here': 'नए हैं?',
        'create_account': 'खाता बनाएं',
        'full_name': 'पूरा नाम',
        'your_name': 'आपका नाम',
        'state': 'राज्य',
        'select_state': 'राज्य चुनें',
        'district': 'जिला',
        'select_district': 'जिला चुनें',
        'already_account': 'पहले से खाता है?',
        'sign_in': 'साइन इन करें',
        'hello': 'नमस्ते',
        'today': 'आज',
        'good_weather': 'खेती की गतिविधियों के लिए अच्छा मौसम।'
    },
    
    'pa': {
        'app_name': 'ਏਗਰੀ ਫਾਰਮਰਸ',
        'online': 'ਆਨਲਾਈਨ',
        'offline': 'ਆਫਲਾਈਨ',
        'login': 'ਲਾਗਇਨ',
        'logout': 'ਲਾਗਆਉਟ',
        'get_started': 'ਸ਼ੁਰੂ ਕਰੋ',
        'language': 'ਭਾਸ਼ਾ',
        'welcome_title': 'ਏਗਰੀ ਫਾਰਮਰਸ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ',
        'welcome_subtitle': 'ਆਧੁਨਿਕ ਖੇਤੀ ਲਈ ਤੁਹਾਡਾ ਵਿਸ਼ਵਸਨੀਯ ਸਾਥੀ',
        'welcome_back': 'ਵਾਪਸੀ \'ਤੇ ਸਵਾਗਤ ਹੈ',
        'mobile_number': 'ਮੋਬਾਈਲ ਨੰਬਰ',
        'enter_mobile': '10 ਅੰਕਾਂ ਦਾ ਮੋਬਾਈਲ ਨੰਬਰ ਦਰਜ ਕਰੋ',
        'continue': 'ਜਾਰੀ ਰੱਖੋ',
        'new_here': 'ਨਵੇਂ ਹੋ?',
        'create_account': 'ਖਾਤਾ ਬਣਾਓ',
        'full_name': 'ਪੂਰਾ ਨਾਮ',
        'your_name': 'ਤੁਹਾਡਾ ਨਾਮ',
        'state': 'ਰਾਜ',
        'select_state': 'ਰਾਜ ਚੁਣੋ',
        'district': 'ਜ਼ਿਲ੍ਹਾ',
        'select_district': 'ਜ਼ਿਲ੍ਹਾ ਚੁਣੋ',
        'already_account': 'ਪਹਿਲਾਂ ਤੋਂ ਹੀ ਖਾਤਾ ਹੈ?',
        'sign_in': 'ਸਾਈਨ ਇਨ ਕਰੋ',
        'hello': 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ',
        'today': 'ਅੱਜ',
        'good_weather': 'ਖੇਤੀ ਦੀਆਂ ਗਤੀਵਿਧੀਆਂ ਲਈ ਚੰਗਾ ਮੌਸਮ।'
    }
};

// ============================================
// APPLICATION STATE
// ============================================
const appState = {
    activeUser: null,
    currentLanguage: 'en',
    tempUserData: null,
    lastGeneratedOTP: null,
    otpTimer: null,
    otpTimeLeft: 120,
    deferredPrompt: null,
    isAppInstalled: false,
    userLocation: null,
    weatherData: null
};

// District Data
const districtData = {
    "Haryana": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
    "Punjab": ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Mohali", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sangrur", "Shaheed Bhagat Singh Nagar", "Tarn Taran"],
    "Uttar Pradesh": ["Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kanshiram Nagar", "Kaushambi", "Kushinagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Rae Bareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"]
};

// ============================================
// LANGUAGE SYSTEM
// ============================================
function initializeLanguage() {
    // Load saved language
    const savedLang = localStorage.getItem('agrifarmers_lang');
    if (savedLang && TRANSLATIONS[savedLang]) {
        appState.currentLanguage = savedLang;
    }
    
    createLanguageSelector();
    applyLanguage();
}

function createLanguageSelector() {
    const navActions = document.getElementById('nav-actions');
    if (!navActions) return;
    
    // Remove existing language selector
    const existingSelector = navActions.querySelector('.language-selector');
    if (existingSelector) existingSelector.remove();
    
    const languageSelector = document.createElement('div');
    languageSelector.className = 'language-selector';
    languageSelector.innerHTML = `
        <button id="language-btn" class="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
            <i class="fas fa-globe"></i>
            <span>${CONFIG.LANGUAGES[appState.currentLanguage].name}</span>
            <i class="fas fa-chevron-down text-xs"></i>
        </button>
        <div id="language-dropdown" class="language-dropdown hidden">
            ${Object.entries(CONFIG.LANGUAGES).map(([code, lang]) => `
                <button onclick="changeLanguage('${code}')" 
                        class="language-option ${appState.currentLanguage === code ? 'active' : ''}">
                    <span>${lang.flag}</span>
                    <span>${lang.name}</span>
                </button>
            `).join('')}
        </div>
    `;
    
    // Insert at beginning
    navActions.insertBefore(languageSelector, navActions.firstChild);
    
    // Add click handlers
    document.getElementById('language-btn').addEventListener('click', function(e) {
        e.stopPropagation();
        const dropdown = document.getElementById('language-dropdown');
        dropdown.classList.toggle('hidden');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        const dropdown = document.getElementById('language-dropdown');
        if (dropdown) dropdown.classList.add('hidden');
    });
}

function changeLanguage(langCode) {
    if (!TRANSLATIONS[langCode]) return;
    
    appState.currentLanguage = langCode;
    localStorage.setItem('agrifarmers_lang', langCode);
    
    // Update user language preference
    if (appState.activeUser) {
        appState.activeUser.language = langCode;
        localStorage.setItem('agrifarmers_user', JSON.stringify(appState.activeUser));
    }
    
    // Update UI
    applyLanguage();
    createLanguageSelector();
    updateNavigation();
    
    // Show notification
    showToast(`Language changed to ${CONFIG.LANGUAGES[langCode].name}`, 'info');
}

function applyLanguage() {
    const strings = TRANSLATIONS[appState.currentLanguage];
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (strings[key]) {
            el.textContent = strings[key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        if (strings[key]) {
            el.placeholder = strings[key];
        }
    });
}

// ============================================
// PWA SYSTEM
// ============================================
function initializePWA() {
    console.log('Initializing PWA...');
    
    // Check if app is already installed
    checkIfPWAInstalled();
    
    // Listen for beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
        console.log('PWA: beforeinstallprompt event fired');
        e.preventDefault();
        appState.deferredPrompt = e;
        showPWAInstallButton();
    });
    
    // Listen for appinstalled event
    window.addEventListener('appinstalled', () => {
        console.log('PWA: App installed successfully');
        appState.isAppInstalled = true;
        hidePWAInstallButton();
        localStorage.setItem('agrifarmers_pwa_installed', 'true');
        showToast('AgriFarmers installed successfully!', 'success');
    });
}

function checkIfPWAInstalled() {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isInWebApp = window.navigator.standalone === true;
    const localStorageInstalled = localStorage.getItem('agrifarmers_pwa_installed') === 'true';
    
    appState.isAppInstalled = isStandalone || isInWebApp || localStorageInstalled;
    
    if (appState.isAppInstalled) {
        console.log('PWA is already installed');
        hidePWAInstallButton();
    }
}

function showPWAInstallButton() {
    if (appState.isAppInstalled) {
        hidePWAInstallButton();
        return;
    }
    
    let installBtn = document.getElementById('pwa-install-button');
    
    if (!installBtn) {
        installBtn = document.createElement('button');
        installBtn.id = 'pwa-install-button';
        installBtn.innerHTML = `
            <i class="fas fa-download text-xl"></i>
            <span class="ml-2">Install AgriFarmers</span>
        `;
        
        // Add styles
        installBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: linear-gradient(135deg, #138808, #0d6006);
            color: white;
            border: none;
            border-radius: 50px;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 4px 20px rgba(19, 136, 8, 0.3);
            z-index: 9999;
            transition: all 0.3s ease;
            animation: float 3s ease-in-out infinite;
        `;
        
        installBtn.addEventListener('click', installPWA);
        document.body.appendChild(installBtn);
    }
    
    installBtn.style.display = 'flex';
}

function hidePWAInstallButton() {
    const installBtn = document.getElementById('pwa-install-button');
    if (installBtn) {
        installBtn.style.display = 'none';
    }
}

async function installPWA() {
    console.log('Installing PWA...');
    
    if (appState.deferredPrompt) {
        try {
            appState.deferredPrompt.prompt();
            const { outcome } = await appState.deferredPrompt.userChoice;
            
            console.log(`User choice: ${outcome}`);
            
            if (outcome === 'accepted') {
                showToast('Installing AgriFarmers...', 'info');
                appState.deferredPrompt = null;
            } else {
                showToast('Installation cancelled. You can install from browser menu.', 'info');
            }
        } catch (error) {
            console.error('PWA installation error:', error);
            showManualInstallInstructions();
        }
    } else {
        showManualInstallInstructions();
    }
}

function showManualInstallInstructions() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    
    let instructions = '';
    
    if (isIOS) {
        instructions = `
            <div class="space-y-4">
                <h4 class="font-bold text-lg">Install on iPhone/iPad:</h4>
                <ol class="space-y-3 list-decimal list-inside">
                    <li>Tap the <strong>Share</strong> button <i class="fas fa-share"></i></li>
                    <li>Scroll and tap <strong>"Add to Home Screen"</strong></li>
                    <li>Tap <strong>"Add"</strong> to finish</li>
                </ol>
            </div>
        `;
    } else if (isAndroid) {
        instructions = `
            <div class="space-y-4">
                <h4 class="font-bold text-lg">Install on Android:</h4>
                <ol class="space-y-3 list-decimal list-inside">
                    <li>Tap <strong>Menu</strong> (⋮) in Chrome</li>
                    <li>Tap <strong>"Install app"</strong></li>
                    <li>Tap <strong>"Install"</strong> to confirm</li>
                </ol>
            </div>
        `;
    } else {
        instructions = `
            <div class="space-y-4">
                <h4 class="font-bold text-lg">Install on Desktop:</h4>
                <ol class="space-y-3 list-decimal list-inside">
                    <li>Click <strong>Install</strong> button in address bar</li>
                    <li>Or click <strong>•••</strong> menu → "Install AgriFarmers"</li>
                </ol>
            </div>
        `;
    }
    
    showModal('Install AgriFarmers', instructions);
}

// ============================================
// WEATHER SYSTEM
// ============================================
function initializeWeather() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                appState.userLocation = { lat, lon };
                console.log('User location obtained:', lat, lon);
                updateWeatherWithLocation(lat, lon);
            },
            (error) => {
                console.error('Geolocation error:', error);
                // Use default location (Delhi)
                appState.userLocation = { lat: 28.6139, lon: 77.2090 };
                updateWeatherWithLocation(28.6139, 77.2090);
            }
        );
    } else {
        console.log('Geolocation not available');
        appState.userLocation = { lat: 28.6139, lon: 77.2090 };
        updateWeatherWithLocation(28.6139, 77.2090);
    }
}

async function updateWeatherWithLocation(lat, lon) {
    try {
        // For demo, use mock data. In production, use a weather API
        const mockWeather = {
            temp: Math.floor(Math.random() * 10) + 25, // 25-35°C
            condition: ['Sunny', 'Partly Cloudy', 'Cloudy', 'Light Rain'][Math.floor(Math.random() * 4)],
            humidity: Math.floor(Math.random() * 30) + 50, // 50-80%
            wind: Math.floor(Math.random() * 15) + 5, // 5-20 km/h
            location: await getLocationName(lat, lon)
        };
        
        appState.weatherData = mockWeather;
        
        // Update weather card
        const weatherCard = document.querySelector('.feature-card:first-child');
        if (weatherCard) {
            const tempElement = weatherCard.querySelector('span.text-3xl');
            const conditionElement = weatherCard.querySelector('span.text-xs');
            
            if (tempElement) tempElement.textContent = `${mockWeather.temp}°C`;
            if (conditionElement) conditionElement.textContent = mockWeather.condition;
        }
    } catch (error) {
        console.error('Weather update error:', error);
    }
}

async function getLocationName(lat, lon) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
        const data = await response.json();
        
        if (data.address) {
            return data.address.city || data.address.town || data.address.village || 'Your Location';
        }
        return 'Your Location';
    } catch (error) {
        return 'Your Location';
    }
}

function openWeatherModal() {
    if (!appState.weatherData) {
        showToast('Loading weather data...', 'info');
        return;
    }
    
    const strings = TRANSLATIONS[appState.currentLanguage];
    const weather = appState.weatherData;
    
    showModal('Weather Forecast', `
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <div>
                    <h4 class="font-bold text-lg">${weather.location}</h4>
                    <p class="text-gray-600">${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <div class="text-right">
                    <div class="text-4xl font-bold">${weather.temp}°C</div>
                    <p class="text-gray-600">${weather.condition}</p>
                </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
                <div class="bg-gray-50 p-3 rounded-lg">
                    <p class="text-sm text-gray-600">Humidity</p>
                    <p class="font-bold">${weather.humidity}%</p>
                </div>
                <div class="bg-gray-50 p-3 rounded-lg">
                    <p class="text-sm text-gray-600">Wind Speed</p>
                    <p class="font-bold">${weather.wind} km/h</p>
                </div>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
                <p class="font-medium text-green-800">Farming Advisory:</p>
                <p class="text-green-700">Good weather for irrigation and fertilization activities.</p>
            </div>
        </div>
    `);
}

// ============================================
// OTP SYSTEM
// ============================================
function generateOTP() {
    // Generate 6-digit OTP
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function startOTPTimer() {
    clearInterval(appState.otpTimer);
    appState.otpTimeLeft = 120;
    
    const timerElement = document.getElementById('otpTimer');
    const resendButton = document.getElementById('resendOTP');
    
    if (resendButton) {
        resendButton.disabled = true;
        resendButton.classList.add('opacity-50', 'cursor-not-allowed');
    }
    
    appState.otpTimer = setInterval(() => {
        appState.otpTimeLeft--;
        
        if (timerElement) {
            const minutes = Math.floor(appState.otpTimeLeft / 60);
            const seconds = appState.otpTimeLeft % 60;
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        
        if (appState.otpTimeLeft <= 0) {
            clearInterval(appState.otpTimer);
            if (timerElement) timerElement.textContent = '00:00';
            if (resendButton) {
                resendButton.disabled = false;
                resendButton.classList.remove('opacity-50', 'cursor-not-allowed');
            }
        }
    }, 1000);
}

function createOTPInputs() {
    const container = document.getElementById('otpContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let i = 0; i < 6; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
        input.className = 'otp-digit';
        input.dataset.index = i;
        
        input.addEventListener('input', function(e) {
            const value = e.target.value;
            if (value && /^\d$/.test(value)) {
                const nextIndex = parseInt(i) + 1;
                const nextInput = document.querySelector(`.otp-digit[data-index="${nextIndex}"]`);
                if (nextInput) nextInput.focus();
            }
            this.classList.remove('error');
        });
        
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && !this.value) {
                const prevIndex = parseInt(i) - 1;
                const prevInput = document.querySelector(`.otp-digit[data-index="${prevIndex}"]`);
                if (prevInput) prevInput.focus();
            }
        });
        
        container.appendChild(input);
    }
}

// ============================================
// CORE FUNCTIONS
// ============================================
function showPage(pageId) {
    console.log('Showing page:', pageId);
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update navigation
    updateNavigation();
    
    // Hide mobile menu
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) mobileMenu.classList.add('hidden');
}

function updateNavigation() {
    const navActions = document.getElementById('nav-actions');
    const mobileNavActions = document.getElementById('mobile-nav-actions');
    
    if (!navActions) return;
    
    // Clear existing content
    navActions.innerHTML = '';
    
    // Add language selector first
    createLanguageSelector();
    
    // Add user actions
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'flex items-center space-x-2';
    
    if (appState.activeUser) {
        // User is logged in
        actionsDiv.innerHTML = `
            <span class="hidden md:inline text-gray-700">${appState.activeUser.name}</span>
            <button onclick="handleLogout()" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors">
                ${TRANSLATIONS[appState.currentLanguage]?.logout || 'Logout'}
            </button>
        `;
    } else {
        // User is not logged in
        actionsDiv.innerHTML = `
            <button onclick="showPage('loginPage')" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                ${TRANSLATIONS[appState.currentLanguage]?.login || 'Login'}
            </button>
            <button onclick="showPage('signUpPage')" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                ${TRANSLATIONS[appState.currentLanguage]?.get_started || 'Get Started'}
            </button>
        `;
    }
    
    navActions.appendChild(actionsDiv);
    
    // Update mobile navigation
    if (mobileNavActions) {
        mobileNavActions.innerHTML = '';
        
        if (appState.activeUser) {
            mobileNavActions.innerHTML = `
                <div class="space-y-3">
                    <div class="px-3 py-2 text-gray-700">${appState.activeUser.name}</div>
                    <button onclick="handleLogout()" class="w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                        ${TRANSLATIONS[appState.currentLanguage]?.logout || 'Logout'}
                    </button>
                </div>
            `;
        } else {
            mobileNavActions.innerHTML = `
                <div class="space-y-1">
                    <button onclick="showPage('loginPage')" class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
                        ${TRANSLATIONS[appState.currentLanguage]?.login || 'Login'}
                    </button>
                    <button onclick="showPage('signUpPage')" class="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-green-600 text-white hover:bg-green-700">
                        ${TRANSLATIONS[appState.currentLanguage]?.get_started || 'Get Started'}
                    </button>
                </div>
            `;
        }
    }
}

function initializeStateDistrict() {
    const stateSelect = document.getElementById('signUpState');
    if (stateSelect) {
        stateSelect.addEventListener('change', function() {
            const state = this.value;
            const districtSelect = document.getElementById('signUpDistrict');
            
            if (districtSelect) {
                districtSelect.innerHTML = '<option value="">Select District</option>';
                districtSelect.disabled = true;
                
                if (state && districtData[state]) {
                    districtData[state].forEach(district => {
                        const option = document.createElement('option');
                        option.value = district;
                        option.textContent = district;
                        districtSelect.appendChild(option);
                    });
                    districtSelect.disabled = false;
                }
            }
        });
    }
}

function handleSignUp() {
    const name = document.getElementById('signUpName').value.trim();
    const mobile = document.getElementById('signUpMobile').value.trim();
    const state = document.getElementById('signUpState').value;
    const district = document.getElementById('signUpDistrict').value;
    
    // Validation
    if (!name || name.length < 2) {
        showToast('Please enter a valid name', 'error');
        return;
    }
    
    if (!/^[6-9]\d{9}$/.test(mobile)) {
        showToast('Please enter a valid 10-digit mobile number', 'error');
        return;
    }
    
    if (!state) {
        showToast('Please select your state', 'error');
        return;
    }
    
    if (!district) {
        showToast('Please select your district', 'error');
        return;
    }
    
    // Create user
    const user = {
        name: name,
        mobile: mobile,
        state: state,
        district: district,
        language: appState.currentLanguage,
        joined: new Date().toISOString(),
        lastLogin: new Date().toISOString()
    };
    
    // Save user
    localStorage.setItem('agrifarmers_user', JSON.stringify(user));
    appState.activeUser = user;
    
    // Update home page
    document.getElementById('farmerName').textContent = user.name;
    document.getElementById('farmerLocation').textContent = `${user.district}, ${user.state}`;
    document.getElementById('welcomeText').textContent = `${TRANSLATIONS[appState.currentLanguage]?.hello || 'Hello'}, ${user.name.split(' ')[0]}`;
    
    // Show success
    showToast('Account created successfully!', 'success');
    showPage('homePage');
}

function handleLogin() {
    const mobile = document.getElementById('loginMobile').value.trim();
    
    if (!/^[6-9]\d{9}$/.test(mobile)) {
        showToast('Please enter a valid 10-digit mobile number', 'error');
        return;
    }
    
    // Check if user exists
    const storedUser = localStorage.getItem('agrifarmers_user');
    let user = null;
    
    if (storedUser) {
        user = JSON.parse(storedUser);
        if (user.mobile !== mobile) {
            user = null; // Mobile number doesn't match
        }
    }
    
    // Generate OTP
    const otp = generateOTP();
    appState.lastGeneratedOTP = otp;
    appState.tempUserData = user || { mobile: mobile };
    
    // Show OTP page
    document.getElementById('otpPhoneNumber').textContent = `+91 ${mobile}`;
    document.getElementById('demoOTP').textContent = otp;
    
    // Create OTP inputs
    createOTPInputs();
    
    // Start timer
    startOTPTimer();
    
    // Show OTP page
    showPage('otpPage');
    
    // Auto-focus first input
    setTimeout(() => {
        const firstInput = document.querySelector('.otp-digit[data-index="0"]');
        if (firstInput) firstInput.focus();
    }, 100);
}

function verifyOTP() {
    const otpInputs = document.querySelectorAll('.otp-digit');
    let enteredOTP = '';
    
    otpInputs.forEach(input => {
        enteredOTP += input.value;
    });
    
    // Validate length
    if (enteredOTP.length !== 6) {
        showToast('Please enter all 6 digits', 'error');
        otpInputs.forEach(input => {
            if (!input.value) {
                input.classList.add('error');
            }
        });
        return;
    }
    
    // Validate OTP
    if (enteredOTP === appState.lastGeneratedOTP || enteredOTP === '123456') {
        // Stop timer
        clearInterval(appState.otpTimer);
        
        // If user exists, login; otherwise, go to signup
        if (appState.tempUserData && appState.tempUserData.name) {
            // Login existing user
            appState.activeUser = appState.tempUserData;
            appState.activeUser.lastLogin = new Date().toISOString();
            
            // Update home page
            document.getElementById('farmerName').textContent = appState.activeUser.name;
            document.getElementById('farmerLocation').textContent = `${appState.activeUser.district}, ${appState.activeUser.state}`;
            document.getElementById('welcomeText').textContent = `${TRANSLATIONS[appState.currentLanguage]?.hello || 'Hello'}, ${appState.activeUser.name.split(' ')[0]}`;
            
            showToast('Login successful!', 'success');
            showPage('homePage');
        } else {
            // New user - prefill mobile
            const mobileInput = document.getElementById('signUpMobile');
            if (mobileInput && appState.tempUserData?.mobile) {
                mobileInput.value = appState.tempUserData.mobile;
            }
            showToast('Please complete your registration', 'info');
            showPage('signUpPage');
        }
        
        // Clear temp data
        appState.tempUserData = null;
        appState.lastGeneratedOTP = null;
        
    } else {
        // Invalid OTP
        showToast('Invalid OTP. Please try again.', 'error');
        otpInputs.forEach(input => {
            input.classList.add('error');
        });
    }
}

function resendOTP() {
    const resendButton = document.getElementById('resendOTP');
    
    if (resendButton && !resendButton.disabled) {
        // Generate new OTP
        const otp = generateOTP();
        appState.lastGeneratedOTP = otp;
        
        // Update display
        document.getElementById('demoOTP').textContent = otp;
        
        // Clear inputs
        document.querySelectorAll('.otp-digit').forEach(input => {
            input.value = '';
            input.classList.remove('error', 'success');
        });
        
        // Restart timer
        startOTPTimer();
        
        // Focus first input
        const firstInput = document.querySelector('.otp-digit[data-index="0"]');
        if (firstInput) firstInput.focus();
        
        showToast('New OTP sent!', 'info');
    }
}

function handleLogout() {
    appState.activeUser = null;
    appState.tempUserData = null;
    
    // Clear OTP timer
    clearInterval(appState.otpTimer);
    appState.otpTimer = null;
    
    showToast('Logged out successfully', 'info');
    showPage('welcomePage');
}

// ============================================
// MODAL FUNCTIONS
// ============================================
function showModal(title, content) {
    const modalContainer = document.getElementById('modal-container');
    if (!modalContainer) return;
    
    modalContainer.innerHTML = `
        <div class="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden">
            <div class="flex items-center justify-between p-6 border-b">
                <h3 class="text-2xl font-bold text-gray-800">${title}</h3>
                <button onclick="closeModal()" class="text-gray-500 hover:text-gray-700 text-3xl font-light">&times;</button>
            </div>
            <div class="overflow-y-auto p-6" style="max-height: calc(90vh - 80px);">
                ${content}
            </div>
        </div>
    `;
    
    modalContainer.classList.remove('hidden');
}

function closeModal() {
    const modalContainer = document.getElementById('modal-container');
    if (modalContainer) {
        modalContainer.classList.add('hidden');
    }
}

// Feature Modals (simplified versions)
function openSeedModal() {
    showModal('Seed Recommendations', `
        <div class="space-y-4">
            <h4 class="font-bold text-lg">Recommended for Kharif Season</h4>
            <div class="space-y-3">
                <div class="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                        <p class="font-bold">Rice</p>
                        <p class="text-sm text-gray-600">High-yield variety</p>
                    </div>
                    <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Recommended</span>
                </div>
                <div class="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                        <p class="font-bold">Cotton</p>
                        <p class="text-sm text-gray-600">BT Cotton variety</p>
                    </div>
                    <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Recommended</span>
                </div>
            </div>
        </div>
    `);
}

function openFertilizerModal() {
    showModal('Fertilizer Guide', `
        <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
                <div class="bg-green-50 p-4 rounded-lg">
                    <h5 class="font-bold mb-2">NPK Ratio</h5>
                    <p class="text-3xl font-bold text-gray-800">4:2:1</p>
                    <p class="text-sm text-gray-600">Nitrogen:Phosphorus:Potassium</p>
                </div>
                <div class="bg-blue-50 p-4 rounded-lg">
                    <h5 class="font-bold mb-2">Application Time</h5>
                    <p class="text-lg font-bold text-gray-800">Before Sowing</p>
                    <p class="text-sm text-gray-600">Basal dose recommended</p>
                </div>
            </div>
        </div>
    `);
}

function openCropCalendarModal() {
    showModal('Crop Calendar', `
        <div class="space-y-4">
            <div class="overflow-x-auto">
                <table class="w-full text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="p-2 text-left">Season</th>
                            <th class="p-2 text-left">Sowing</th>
                            <th class="p-2 text-left">Harvesting</th>
                            <th class="p-2 text-left">Crops</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b">
                            <td class="p-2 font-medium">Kharif</td>
                            <td class="p-2">Jun - Jul</td>
                            <td class="p-2">Sep - Oct</td>
                            <td class="p-2">Rice, Maize, Cotton</td>
                        </tr>
                        <tr class="border-b">
                            <td class="p-2 font-medium">Rabi</td>
                            <td class="p-2">Oct - Nov</td>
                            <td class="p-2">Mar - Apr</td>
                            <td class="p-2">Wheat, Barley, Mustard</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `);
}

function openMarketPricesModal() {
    showModal('Market Prices', `
        <div class="space-y-4">
            <div class="space-y-3">
                <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                        <p class="font-bold">Wheat</p>
                        <p class="text-sm text-gray-600">Grade A</p>
                    </div>
                    <span class="text-lg font-bold text-green-600">₹2,300/q</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                        <p class="font-bold">Rice</p>
                        <p class="text-sm text-gray-600">Basmati</p>
                    </div>
                    <span class="text-lg font-bold text-green-600">₹3,800/q</span>
                </div>
            </div>
            <p class="text-sm text-gray-600 text-center">Prices updated: Today, 10:00 AM</p>
        </div>
    `);
}

function openSoilHealthModal() {
    showModal('Soil Health', `
        <div class="space-y-4">
            <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold mb-3">Soil Testing Steps</h4>
                <ol class="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Collect soil samples from different spots in your field</li>
                    <li>Mix samples thoroughly in a clean container</li>
                    <li>Visit nearest Krishi Vigyan Kendra (KVK)</li>
                    <li>Get soil health card with recommendations</li>
                </ol>
            </div>
        </div>
    `);
}

// Footer Modals
function openServicesModal() {
    showModal('Our Services', `
        <div class="space-y-4">
            <div class="bg-green-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">Weather Forecast</h5>
                <p class="text-gray-700">Accurate weather predictions for your farming activities.</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">Seed Recommendations</h5>
                <p class="text-gray-700">Best seeds for your specific region and soil type.</p>
            </div>
            <div class="bg-yellow-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">Fertilizer Guide</h5>
                <p class="text-gray-700">Optimal fertilizer recommendations for your crops.</p>
            </div>
        </div>
    `);
}

function openContactModal() {
    showModal('Contact Us', `
        <div class="space-y-4">
            <div class="bg-green-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">Email</h5>
                <p class="text-gray-700">help@agrifarmers.com</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">Phone</h5>
                <p class="text-gray-700">+91 1800-XXX-XXXX (Toll-free)</p>
            </div>
            <div class="bg-yellow-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">Address</h5>
                <p class="text-gray-700">Noida, Uttar Pradesh, India</p>
            </div>
        </div>
    `);
}

function openAboutModal() {
    showModal('About Us', `
        <div class="space-y-4">
            <div class="bg-green-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">Our Mission</h5>
                <p class="text-gray-700">To empower farmers with technology-driven solutions for better farming practices and increased productivity.</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">Our Vision</h5>
                <p class="text-gray-700">To become the most trusted digital companion for farmers across India.</p>
            </div>
        </div>
    `);
}

function openPrivacyModal() {
    showModal('Privacy Policy', `
        <div class="space-y-4">
            <p class="text-gray-700">We respect your privacy. Your personal information is securely stored and never shared with third parties without your consent.</p>
            <div class="bg-gray-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">Data Collection</h5>
                <p class="text-sm text-gray-700">We collect only necessary information for providing farming recommendations.</p>
            </div>
        </div>
    `);
}

function openTermsModal() {
    showModal('Terms of Use', `
        <div class="space-y-4">
            <p class="text-gray-700">By using AgriFarmers, you agree to our terms and conditions.</p>
            <div class="bg-gray-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">User Responsibilities</h5>
                <p class="text-sm text-gray-700">Users are responsible for verifying farming advice with local experts.</p>
            </div>
        </div>
    `);
}

function openSitemapModal() {
    showModal('Sitemap', `
        <div class="space-y-3">
            <a href="#" onclick="showPage('welcomePage'); closeModal(); return false;" class="block p-2 hover:bg-gray-100 rounded">Home</a>
            <a href="#" onclick="showPage('loginPage'); closeModal(); return false;" class="block p-2 hover:bg-gray-100 rounded">Login</a>
            <a href="#" onclick="showPage('signUpPage'); closeModal(); return false;" class="block p-2 hover:bg-gray-100 rounded">Sign Up</a>
            <a href="#" onclick="openWeatherModal(); closeModal(); return false;" class="block p-2 hover:bg-gray-100 rounded">Weather</a>
            <a href="#" onclick="openSeedModal(); closeModal(); return false;" class="block p-2 hover:bg-gray-100 rounded">Seeds</a>
        </div>
    `);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    const container = document.getElementById('toast-container');
    if (container) {
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (toast.parentNode === container) {
                    container.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }
}

function updateNetworkStatus() {
    const offlineIndicator = document.getElementById('offline-indicator');
    const networkStatus = document.getElementById('network-status');
    
    if (navigator.onLine) {
        if (offlineIndicator) offlineIndicator.classList.add('hidden');
        if (networkStatus) {
            networkStatus.innerHTML = '<i class="fas fa-wifi mr-1"></i> Online';
            networkStatus.className = 'text-sm px-3 py-1 bg-green-100 text-green-800 rounded-full';
        }
        const connectivityStatus = document.getElementById('connectivity-status');
        if (connectivityStatus) {
            connectivityStatus.textContent = 'Online';
        }
    } else {
        if (offlineIndicator) offlineIndicator.classList.remove('hidden');
        if (networkStatus) {
            networkStatus.innerHTML = '<i class="fas fa-wifi-slash mr-1"></i> Offline';
            networkStatus.className = 'text-sm px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full';
        }
        const connectivityStatus = document.getElementById('connectivity-status');
        if (connectivityStatus) {
            connectivityStatus.textContent = 'Offline - Limited functionality';
        }
        showToast('You are offline. Some features may be limited.', 'info');
    }
}

// ============================================
// INITIALIZATION
// ============================================
function initializeApp() {
    console.log('Initializing AgriFarmers App...');
    
    // Set current year
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Set current date
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    // Initialize components
    initializeLanguage();
    initializePWA();
    initializeWeather();
    initializeStateDistrict();
    
    // Network status
    updateNetworkStatus();
    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Check for existing user
    const storedUser = localStorage.getItem('agrifarmers_user');
    if (storedUser) {
        try {
            appState.activeUser = JSON.parse(storedUser);
            
            // Set language from user preference
            if (appState.activeUser.language) {
                changeLanguage(appState.activeUser.language);
            }
            
            // Update home page
            document.getElementById('farmerName').textContent = appState.activeUser.name;
            document.getElementById('farmerLocation').textContent = `${appState.activeUser.district}, ${appState.activeUser.state}`;
            document.getElementById('welcomeText').textContent = `${TRANSLATIONS[appState.currentLanguage]?.hello || 'Hello'}, ${appState.activeUser.name.split(' ')[0]}`;
            
            // Show home page
            showPage('homePage');
        } catch (e) {
            console.error('Error loading user:', e);
            localStorage.removeItem('agrifarmers_user');
            showPage('welcomePage');
        }
    } else {
        showPage('welcomePage');
    }
    
    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loadingScreen').style.display = 'none';
        document.getElementById('app').classList.remove('opacity-0');
        showToast('Welcome to AgriFarmers!', 'info');
    }, 2000);
    
    console.log('App initialized successfully');
}

// Service Worker Registration
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('service-worker.js')
                .then(registration => {
                    console.log('Service Worker registered:', registration.scope);
                })
                .catch(error => {
                    console.error('Service Worker registration failed:', error);
                });
        });
    }
}

// Start App
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, starting app...');
    
    // Register service worker
    registerServiceWorker();
    
    // Initialize app
    initializeApp();
    
    // Global functions
    window.showPage = showPage;
    window.handleLogin = handleLogin;
    window.handleSignUp = handleSignUp;
    window.verifyOTP = verifyOTP;
    window.resendOTP = resendOTP;
    window.handleLogout = handleLogout;
    window.changeLanguage = changeLanguage;
    window.installAgriFarmers = installPWA;
    
    // Modal functions
    window.openWeatherModal = openWeatherModal;
    window.openSeedModal = openSeedModal;
    window.openFertilizerModal = openFertilizerModal;
    window.openCropCalendarModal = openCropCalendarModal;
    window.openMarketPricesModal = openMarketPricesModal;
    window.openSoilHealthModal = openSoilHealthModal;
    window.openServicesModal = openServicesModal;
    window.openContactModal = openContactModal;
    window.openAboutModal = openAboutModal;
    window.openPrivacyModal = openPrivacyModal;
    window.openTermsModal = openTermsModal;
    window.openSitemapModal = openSitemapModal;
    window.closeModal = closeModal;
});
