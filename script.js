// App Configuration
const CONFIG = {
    DEMO_OTP: '123456',
    REPO_NAME: 'AgriFarmers-SIH-2025'
};

// App State
let deferredPrompt = null;
let currentUser = null;
let otpTimer = null;
let currentLanguage = 'en';

// Translations
const translations = {
    en: {
        // Header
        'app_name': 'AgriFarmers',
        'logout': 'Logout',
        
        // Welcome Page
        'welcome_title': 'Welcome to AgriFarmers',
        'welcome_subtitle': 'Your trusted companion for modern farming',
        'smart_location': 'Smart Location',
        'location_desc': 'Get location-based weather and farming advice',
        'live_weather': 'Live Weather',
        'weather_desc': 'Accurate weather forecasts and farming alerts',
        'market_prices': 'Market Prices',
        'market_desc': 'Real-time crop prices and market trends',
        'get_started': 'Get Started',
        'no_account': "Don't have an account?",
        'sign_up': 'Sign Up',
        
        // Login Page
        'login_title': 'Login to AgriFarmers',
        'mobile_number': 'Mobile Number',
        'enter_mobile': 'Enter 10-digit mobile number',
        'send_otp': 'Send OTP',
        'have_account': 'Already have an account?',
        'login': 'Login',
        
        // Sign Up Page
        'signup_title': 'Create Account',
        'full_name': 'Full Name',
        'enter_name': 'Enter your full name',
        'state': 'State',
        'select_state': 'Select State',
        'district': 'District',
        'select_district': 'Select District',
        
        // OTP Page
        'otp_title': 'OTP Verification',
        'otp_sent': 'OTP sent to',
        'demo_otp': 'Demo OTP:',
        'otp_timer': 'OTP valid for',
        'minutes': 'minutes',
        'verify_otp': 'Verify OTP',
        'resend_otp': 'Resend OTP',
        'back_login': 'Back to Login',
        
        // Home Page
        'hello': 'Hello',
        'today': 'Today',
        'dashboard': 'Your Farming Dashboard',
        'weather_forecast': 'Weather Forecast',
        'seed_recommendations': 'Seed Recommendations',
        'seed_desc': 'Best seeds for your region',
        'farming_tips': "Today's Farming Tips",
        'default_tip': 'Good weather for farming activities. Ideal for irrigation and fertilization.',
        
        // Common
        'rights_reserved': 'All rights reserved',
        'install_app': 'Install App'
    },
    
    hi: {
        'app_name': 'एग्रीफार्मर्स',
        'logout': 'लॉगआउट',
        'welcome_title': 'एग्रीफार्मर्स में आपका स्वागत है',
        'welcome_subtitle': 'आधुनिक खेती के लिए आपका विश्वसनीय साथी',
        'get_started': 'शुरू करें',
        'no_account': 'खाता नहीं है?',
        'sign_up': 'साइन अप करें',
        'login_title': 'एग्रीफार्मर्स में लॉगिन करें',
        'mobile_number': 'मोबाइल नंबर',
        'enter_mobile': '10 अंकों का मोबाइल नंबर दर्ज करें',
        'send_otp': 'OTP भेजें',
        'have_account': 'पहले से खाता है?',
        'login': 'लॉगिन',
        'signup_title': 'खाता बनाएं',
        'full_name': 'पूरा नाम',
        'enter_name': 'अपना पूरा नाम दर्ज करें',
        'state': 'राज्य',
        'select_state': 'राज्य चुनें',
        'district': 'जिला',
        'select_district': 'जिला चुनें',
        'otp_title': 'OTP सत्यापन',
        'otp_sent': 'OTP भेजा गया',
        'demo_otp': 'डेमो OTP:',
        'otp_timer': 'OTP वैध है',
        'minutes': 'मिनट',
        'verify_otp': 'OTP सत्यापित करें',
        'resend_otp': 'OTP पुनः भेजें',
        'back_login': 'लॉगिन पर वापस',
        'hello': 'नमस्ते',
        'today': 'आज',
        'dashboard': 'आपका कृषि डैशबोर्ड',
        'weather_forecast': 'मौसम पूर्वानुमान',
        'seed_recommendations': 'बीज सिफारिशें',
        'farming_tips': 'आज की कृषि सलाह',
        'rights_reserved': 'सर्वाधिकार सुरक्षित',
        'install_app': 'ऐप इंस्टॉल करें'
    },
    
    pa: {
        'app_name': 'ਐਗਰੀਫਾਰਮਰਸ',
        'logout': 'ਲਾੱਗ ਆਊਟ',
        'welcome_title': 'ਐਗਰੀਫਾਰਮਰਸ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ',
        'welcome_subtitle': 'ਆਧੁਨਿਕ ਖੇਤੀ ਲਈ ਤੁਹਾਡਾ ਭਰੋਸੇਮੰਦ ਸਾਥੀ',
        'get_started': 'ਸ਼ੁਰੂ ਕਰੋ',
        'no_account': 'ਖਾਤਾ ਨਹੀਂ ਹੈ?',
        'sign_up': 'ਸਾਈਨ ਅੱਪ ਕਰੋ',
        'login_title': 'ਐਗਰੀਫਾਰਮਰਸ ਵਿੱਚ ਲਾਗਿਨ ਕਰੋ',
        'mobile_number': 'ਮੋਬਾਈਲ ਨੰਬਰ',
        'enter_mobile': '10 ਅੰਕਾਂ ਦਾ ਮੋਬਾਈਲ ਨੰਬਰ ਦਾਖਲ ਕਰੋ',
        'send_otp': 'OTP ਭੇਜੋ',
        'have_account': 'ਪਹਿਲਾਂ ਤੋਂ ਖਾਤਾ ਹੈ?',
        'login': 'ਲਾਗਿਨ',
        'signup_title': 'ਖਾਤਾ ਬਣਾਓ',
        'full_name': 'ਪੂਰਾ ਨਾਮ',
        'enter_name': 'ਆਪਣਾ ਪੂਰਾ ਨਾਮ ਦਾਖਲ ਕਰੋ',
        'state': 'ਰਾਜ',
        'select_state': 'ਰਾਜ ਚੁਣੋ',
        'district': 'ਜ਼ਿਲ੍ਹਾ',
        'select_district': 'ਜ਼ਿਲ੍ਹਾ ਚੁਣੋ',
        'otp_title': 'OTP ਪੁਸ਼ਟੀਕਰਨ',
        'otp_sent': 'OTP ਭੇਜਿਆ ਗਿਆ',
        'demo_otp': 'ਡੈਮੋ OTP:',
        'otp_timer': 'OTP ਵੈਧ ਹੈ',
        'minutes': 'ਮਿੰਟ',
        'verify_otp': 'OTP ਪੁਸ਼ਟੀ ਕਰੋ',
        'resend_otp': 'OTP ਦੁਬਾਰਾ ਭੇਜੋ',
        'back_login': 'ਲਾਗਿਨ ਤੇ ਵਾਪਸ',
        'hello': 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ',
        'today': 'ਅੱਜ',
        'dashboard': 'ਤੁਹਾਡਾ ਖੇਤੀ ਡੈਸ਼ਬੋਰਡ',
        'weather_forecast': 'ਮੌਸਮ ਪੂਰਵ-ਅਨੁਮਾਨ',
        'seed_recommendations': 'ਬੀਜ ਸਿਫਾਰਿਸ਼ਾਂ',
        'farming_tips': 'ਅੱਜ ਦੀ ਖੇਤੀ ਸਲਾਹ',
        'rights_reserved': 'ਸਾਰੇ ਅਧਿਕਾਰ ਸੁਰੱਖਿਅਤ',
        'install_app': 'ਐਪ ਇੰਸਟਾਲ ਕਰੋ'
    }
};

// District data
const districtData = {
    'Haryana': ['Ambala', 'Bhiwani', 'Faridabad', 'Fatehabad', 'Gurugram', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Mahendragarh', 'Nuh', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'],
    'Punjab': ['Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh Sahib', 'Fazilka', 'Ferozepur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Mansa', 'Moga', 'Pathankot', 'Patiala', 'Rupnagar', 'Sangrur', 'SAS Nagar', 'Tarn Taran'],
    'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer', 'Bikaner', 'Alwar', 'Bhilwara', 'Chittorgarh'],
    'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Allahabad', 'Meerut', 'Ghaziabad', 'Aligarh'],
    'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Aurangabad', 'Solapur']
};

// Initialize App
function initApp() {
    console.log('Initializing AgriFarmers...');
    
    // Load saved data
    const savedUser = localStorage.getItem('agrifarmers_user');
    const savedLang = localStorage.getItem('agrifarmers_language');
    
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
    }
    
    if (savedLang && translations[savedLang]) {
        currentLanguage = savedLang;
    }
    
    // Apply language
    changeLanguage(currentLanguage, false);
    
    // Set up state-district mapping
    setupStateDistrict();
    
    // Initialize PWA
    initPWA();
    
    // Set current date
    updateCurrentDate();
    
    // Setup event listeners
    setupEventListeners();
    
    // Show app after short delay
    setTimeout(() => {
        showApp();
    }, 800); // Reduced from 1500ms to 800ms
}

// Show app
function showApp() {
    const loadingScreen = document.getElementById('loadingScreen');
    const app = document.getElementById('app');
    
    // Fade out loading screen
    loadingScreen.classList.add('loading-hidden');
    
    // Show app after fade
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        app.style.display = 'block';
        
        // Show appropriate page
        if (currentUser) {
            showPage('homePage');
            updateUserInfo();
        } else {
            showPage('welcomePage');
        }
    }, 500);
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
        
        // Update header
        updateHeader();
        
        // Page-specific actions
        if (pageId === 'homePage') {
            updateUserInfo();
            loadWeatherData();
            loadMarketPrices();
        } else if (pageId === 'otpPage') {
            setupOTPInputs();
        }
    }
}

// Update header
function updateHeader() {
    const logoutButton = document.getElementById('logoutButton');
    const currentLanguageSpan = document.getElementById('currentLanguage');
    
    if (currentUser) {
        logoutButton.classList.remove('hidden');
        logoutButton.innerHTML = `<i class="fas fa-sign-out-alt mr-2"></i>${translations[currentLanguage]['logout']}`;
    } else {
        logoutButton.classList.add('hidden');
    }
    
    // Update language display
    currentLanguageSpan.textContent = 
        currentLanguage === 'en' ? 'English' : 
        currentLanguage === 'hi' ? 'हिंदी' : 'ਪੰਜਾਬੀ';
}

// Change language
function changeLanguage(lang, showToast = true) {
    if (!translations[lang]) return;
    
    currentLanguage = lang;
    localStorage.setItem('agrifarmers_language', lang);
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update header
    updateHeader();
    
    // Update date
    updateCurrentDate();
    
    if (showToast) {
        showToast(`Language changed to ${lang === 'en' ? 'English' : lang === 'hi' ? 'Hindi' : 'Punjabi'}`);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Language dropdown
    const languageButton = document.getElementById('languageButton');
    const languageDropdown = document.getElementById('languageDropdown');
    
    if (languageButton && languageDropdown) {
        languageButton.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.classList.toggle('hidden');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            languageDropdown.classList.add('hidden');
        });
    }
    
    // Logout button
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', handleLogout);
    }
    
    // PWA install button
    const installButton = document.getElementById('pwa-install-button');
    if (installButton) {
        installButton.addEventListener('click', handleInstall);
    }
}

// Setup state-district mapping
function setupStateDistrict() {
    const stateSelect = document.getElementById('signUpState');
    const districtSelect = document.getElementById('signUpDistrict');
    
    if (stateSelect && districtSelect) {
        stateSelect.addEventListener('change', function() {
            const state = this.value;
            districtSelect.innerHTML = '<option value="" data-i18n="select_district">Select District</option>';
            
            if (state && districtData[state]) {
                districtSelect.disabled = false;
                districtData[state].forEach(district => {
                    const option = document.createElement('option');
                    option.value = district;
                    option.textContent = district;
                    districtSelect.appendChild(option);
                });
            } else {
                districtSelect.disabled = true;
            }
            
            // Re-translate
            changeLanguage(currentLanguage, false);
        });
    }
}

// Login handler
function handleLogin() {
    const mobileInput = document.getElementById('loginMobile');
    const mobile = mobileInput.value.trim();
    
    if (!mobile || mobile.length !== 10 || !/^\d+$/.test(mobile)) {
        showError('loginMobileError', 'Please enter a valid 10-digit mobile number');
        return;
    }
    
    // Store mobile for OTP
    localStorage.setItem('temp_mobile', mobile);
    
    // Show OTP page
    document.getElementById('otpPhoneNumber').textContent = `+91 ${mobile}`;
    showPage('otpPage');
    startOTPTimer();
    showToast('OTP sent to your mobile number');
}

// Sign up handler
function handleSignUp() {
    const name = document.getElementById('signUpName').value.trim();
    const mobile = document.getElementById('signUpMobile').value.trim();
    const state = document.getElementById('signUpState').value;
    const district = document.getElementById('signUpDistrict').value;
    
    // Validate
    if (!name) {
        showError('signUpNameError', 'Please enter your name');
        return;
    }
    
    if (!mobile || mobile.length !== 10 || !/^\d+$/.test(mobile)) {
        showError('signUpMobileError', 'Please enter a valid 10-digit mobile number');
        return;
    }
    
    if (!state) {
        showError('signUpStateError', 'Please select your state');
        return;
    }
    
    if (!district) {
        showError('signUpDistrictError', 'Please select your district');
        return;
    }
    
    // Store user data
    const tempUser = { name, mobile, state, district };
    localStorage.setItem('temp_user', JSON.stringify(tempUser));
    localStorage.setItem('temp_mobile', mobile);
    
    // Show OTP page
    document.getElementById('otpPhoneNumber').textContent = `+91 ${mobile}`;
    showPage('otpPage');
    startOTPTimer();
    showToast('OTP sent to your mobile number');
}

// Setup OTP inputs
function setupOTPInputs() {
    const container = document.getElementById('otpContainer');
    container.innerHTML = '';
    
    for (let i = 0; i < 6; i++) {
        const input = document.createElement('input');
        input.type = 'tel';
        input.maxLength = 1;
        input.className = 'otp-digit';
        input.dataset.index = i;
        input.addEventListener('input', handleOTPInput);
        input.addEventListener('keydown', handleOTPKeyDown);
        container.appendChild(input);
    }
    
    // Show demo OTP
    document.getElementById('demoOTP').textContent = CONFIG.DEMO_OTP;
    
    // Focus first input
    setTimeout(() => {
        container.firstChild?.focus();
    }, 100);
}

// Handle OTP input
function handleOTPInput(e) {
    const input = e.target;
    const index = parseInt(input.dataset.index);
    const value = input.value;
    
    if (value && index < 5) {
        const nextInput = input.parentElement.querySelector(`[data-index="${index + 1}"]`);
        if (nextInput) nextInput.focus();
    }
    
    // Auto verify if all filled
    if (index === 5 && value) {
        const allInputs = document.querySelectorAll('.otp-digit');
        const allFilled = Array.from(allInputs).every(input => input.value);
        if (allFilled) {
            setTimeout(verifyOTP, 300);
        }
    }
}

// Handle OTP keydown
function handleOTPKeyDown(e) {
    const input = e.target;
    const index = parseInt(input.dataset.index);
    
    if (e.key === 'Backspace' && !input.value && index > 0) {
        const prevInput = input.parentElement.querySelector(`[data-index="${index - 1}"]`);
        if (prevInput) {
            prevInput.focus();
            prevInput.value = '';
        }
    }
}

// Start OTP timer
function startOTPTimer() {
    let timeLeft = 120;
    const timerElement = document.getElementById('otpTimer');
    
    if (otpTimer) clearInterval(otpTimer);
    
    otpTimer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(otpTimer);
            document.getElementById('resendOTP').disabled = false;
        }
        
        timeLeft--;
    }, 1000);
}

// Verify OTP
function verifyOTP() {
    const inputs = document.querySelectorAll('.otp-digit');
    const enteredOTP = Array.from(inputs).map(input => input.value).join('');
    
    if (enteredOTP === CONFIG.DEMO_OTP) {
        clearInterval(otpTimer);
        
        // Check if login or signup
        const tempUser = localStorage.getItem('temp_user');
        const tempMobile = localStorage.getItem('temp_mobile');
        
        if (tempUser) {
            // Signup
            const userData = JSON.parse(tempUser);
            currentUser = {
                id: Date.now(),
                name: userData.name,
                mobile: userData.mobile,
                state: userData.state,
                district: userData.district,
                joined: new Date().toISOString()
            };
            
            localStorage.removeItem('temp_user');
            localStorage.removeItem('temp_mobile');
        } else if (tempMobile) {
            // Login
            currentUser = {
                id: 1,
                name: 'Demo Farmer',
                mobile: tempMobile,
                state: 'Haryana',
                district: 'Ambala',
                joined: new Date().toISOString()
            };
            
            localStorage.removeItem('temp_mobile');
        }
        
        // Save user
        localStorage.setItem('agrifarmers_user', JSON.stringify(currentUser));
        
        showToast('Login successful!');
        showPage('homePage');
    } else {
        showToast('Invalid OTP. Please try again.', 'error');
        inputs.forEach(input => {
            input.style.borderColor = '#e74c3c';
            setTimeout(() => {
                input.style.borderColor = '';
            }, 1000);
        });
    }
}

// Resend OTP
function resendOTP() {
    startOTPTimer();
    showToast('OTP resent to your mobile number');
}

// Logout handler
function handleLogout() {
    currentUser = null;
    localStorage.removeItem('agrifarmers_user');
    showPage('welcomePage');
    showToast('Logged out successfully');
}

// Update user info
function updateUserInfo() {
    if (currentUser) {
        document.getElementById('farmerName').textContent = currentUser.name;
        document.querySelector('#welcomeText').textContent = translations[currentLanguage]['hello'];
    }
}

// Update current date
function updateCurrentDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    let locale = 'en-IN';
    if (currentLanguage === 'hi') locale = 'hi-IN';
    if (currentLanguage === 'pa') locale = 'pa-IN';
    
    document.getElementById('currentDate').textContent = 
        now.toLocaleDateString(locale, options);
}

// Load weather data
function loadWeatherData() {
    // Mock weather data for demo
    setTimeout(() => {
        document.getElementById('weatherCardContent').innerHTML = `
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
    }, 1000);
}

// Load market prices
function loadMarketPrices() {
    // Mock market data for demo
    setTimeout(() => {
        document.getElementById('marketPricesCard').innerHTML = `
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
    }, 1000);
}

// PWA Installation
function initPWA() {
    // Handle beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        // Show install button
        const installButton = document.getElementById('pwa-install-button');
        if (installButton) {
            installButton.classList.remove('hidden');
        }
    });
    
    // Register service worker
    if ('serviceWorker' in navigator) {
        const swPath = `/${CONFIG.REPO_NAME}/service-worker.js`;
        
        navigator.serviceWorker.register(swPath)
            .then(registration => {
                console.log('Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    }
}

// Handle install button click
function handleInstall() {
    if (!deferredPrompt) return;
    
    deferredPrompt.prompt();
    
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            showToast('App installed successfully!');
            document.getElementById('pwa-install-button').classList.add('hidden');
        }
        deferredPrompt = null;
    });
}

// Show error
function showError(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = message;
        element.classList.remove('hidden');
        
        setTimeout(() => {
            element.classList.add('hidden');
        }, 3000);
    }
}

// Show toast
function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'} mr-2"></i>
        ${message}
    `;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Modal functions
function openWeatherModal() {
    showToast('Weather details opened');
}

function openMarketPricesModal() {
    showToast('Market prices opened');
}

function openSeedModal() {
    showToast('Seed recommendations opened');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

// Add style for toast animation
document.head.insertAdjacentHTML('beforeend', `
    <style>
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    </style>
`);
