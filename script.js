// App Configuration
const CONFIG = {
    DEMO_OTP: '123456',
    WEATHER_API_KEY: '44a55de0f2e0674cb9160f50459d51d4',
    WEATHER_API_URL: 'https://api.openweathermap.org/data/2.5/weather',
    MARKET_API_KEY: '579b464db66ec23bdd0000014c14eef4939b46976774dbe7e9c84f8c',
    MARKET_API_URL: 'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070'
};

// App State
let deferredPrompt = null;
let currentUser = null;
let otpTimer = null;
let userLocation = null;
let currentSlide = 0;
let currentLanguage = 'en';

// Translation Dictionary
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
        'weather_details': 'Weather Details',
        'seed_fertilizer': 'Seed & Fertilizer',
        'seed_desc': 'Recommendations for your region',
        'seed_recommendations': 'Seed Recommendations:',
        'fertilizer_mix': 'Fertilizer Mix:',
        'seed_guide': 'Seed & Fertilizer Guide',
        'farming_tips': "Today's Farming Tips",
        'default_tip': 'Good weather for farming activities. Ideal for irrigation and fertilization.',
        'market_prices_title': 'Live Market Prices',
        
        // Modal Content
        'loading_weather': 'Loading weather data...',
        'loading_prices': 'Loading market prices...',
        'loading_recommendations': 'Loading recommendations...',
        
        // Common
        'rights_reserved': 'All rights reserved',
        'install_app': 'Install App'
    },
    
    hi: {
        'app_name': 'एग्रीफार्मर्स',
        'logout': 'लॉगआउट',
        'welcome_title': 'एग्रीफार्मर्स में आपका स्वागत है',
        'welcome_subtitle': 'आधुनिक खेती के लिए आपका विश्वसनीय साथी',
        'smart_location': 'स्मार्ट लोकेशन',
        'location_desc': 'स्थान-आधारित मौसम और खेती सलाह प्राप्त करें',
        'live_weather': 'लाइव मौसम',
        'weather_desc': 'सटीक मौसम पूर्वानुमान और खेती अलर्ट',
        'market_prices': 'बाजार मूल्य',
        'market_desc': 'रियल-टाइम फसल मूल्य और बाजार रुझान',
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
        'weather_details': 'मौसम विवरण',
        'seed_fertilizer': 'बीज और उर्वरक',
        'seed_desc': 'आपके क्षेत्र के लिए सिफारिशें',
        'seed_recommendations': 'बीज सिफारिशें:',
        'fertilizer_mix': 'उर्वरक मिश्रण:',
        'seed_guide': 'बीज और उर्वरक गाइड',
        'farming_tips': 'आज की कृषि सलाह',
        'default_tip': 'खेती की गतिविधियों के लिए अच्छा मौसम। सिंचाई और निषेचन के लिए आदर्श।',
        'market_prices_title': 'लाइव बाजार मूल्य',
        'loading_weather': 'मौसम डेटा लोड हो रहा है...',
        'loading_prices': 'बाजार मूल्य लोड हो रहे हैं...',
        'loading_recommendations': 'सिफारिशें लोड हो रही हैं...',
        'rights_reserved': 'सर्वाधिकार सुरक्षित',
        'install_app': 'ऐप इंस्टॉल करें'
    },
    
    pa: {
        'app_name': 'ਐਗਰੀਫਾਰਮਰਸ',
        'logout': 'ਲਾੱਗ ਆਊਟ',
        'welcome_title': 'ਐਗਰੀਫਾਰਮਰਸ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ',
        'welcome_subtitle': 'ਆਧੁਨਿਕ ਖੇਤੀ ਲਈ ਤੁਹਾਡਾ ਭਰੋਸੇਮੰਦ ਸਾਥੀ',
        'smart_location': 'ਸਮਾਰਟ ਲੋਕੇਸ਼ਨ',
        'location_desc': 'ਲੋਕੇਸ਼ਨ-ਅਧਾਰਤ ਮੌਸਮ ਅਤੇ ਖੇਤੀ ਸਲਾਹ ਪ੍ਰਾਪਤ ਕਰੋ',
        'live_weather': 'ਲਾਈਵ ਮੌਸਮ',
        'weather_desc': 'ਸਟੀਕ ਮੌਸਮ ਪੂਰਵਾਨੁਮਾਨ ਅਤੇ ਖੇਤੀ ਅਲਰਟ',
        'market_prices': 'ਮਾਰਕੀਟ ਮੁੱਲ',
        'market_desc': 'ਰੀਅਲ-ਟਾਈਮ ਫਸਲ ਮੁੱਲ ਅਤੇ ਮਾਰਕੀਟ ਰੁਝਾਨ',
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
        'weather_details': 'ਮੌਸਮ ਵੇਰਵੇ',
        'seed_fertilizer': 'ਬੀਜ ਅਤੇ ਖਾਦ',
        'seed_desc': 'ਤੁਹਾਡੇ ਖੇਤਰ ਲਈ ਸਿਫਾਰਿਸ਼ਾਂ',
        'seed_recommendations': 'ਬੀਜ ਸਿਫਾਰਿਸ਼ਾਂ:',
        'fertilizer_mix': 'ਖਾਦ ਮਿਸ਼ਰਣ:',
        'seed_guide': 'ਬੀਜ ਅਤੇ ਖਾਦ ਗਾਈਡ',
        'farming_tips': 'ਅੱਜ ਦੀ ਖੇਤी ਸਲਾਹ',
        'default_tip': 'ਖੇਤੀ ਦੀਆਂ ਗਤੀਵਿਧੀਆਂ ਲਈ ਚੰਗਾ ਮੌਸਮ। ਸਿੰਚਾਈ ਅਤੇ ਖਾਦ ਪਾਉਣ ਲਈ ਆਦਰਸ਼।',
        'market_prices_title': 'ਲਾਈਵ ਮਾਰਕੀਟ ਮੁੱਲ',
        'loading_weather': 'ਮੌਸਮ ਡੇਟਾ ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...',
        'loading_prices': 'ਮਾਰਕੀਟ ਮੁੱਲ ਲੋਡ ਹੋ ਰਹੇ ਹਨ...',
        'loading_recommendations': 'ਸਿਫਾਰਿਸ਼ਾਂ ਲੋਡ ਹੋ ਰਹੀਆਂ ਹਨ...',
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

// Crop recommendations by state
const cropRecommendations = {
    'Haryana': ['Wheat', 'Rice', 'Cotton', 'Sugarcane', 'Mustard'],
    'Punjab': ['Wheat', 'Rice', 'Maize', 'Cotton', 'Sugarcane'],
    'Rajasthan': ['Wheat', 'Barley', 'Mustard', 'Cotton', 'Guar'],
    'Uttar Pradesh': ['Wheat', 'Rice', 'Sugarcane', 'Potato', 'Pulses'],
    'Maharashtra': ['Sugarcane', 'Cotton', 'Soybean', 'Tur', 'Groundnut']
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
    
    // Apply initial language
    applyLanguage(currentLanguage);
    
    // Setup state-district mapping
    setupStateDistrict();
    
    // Initialize PWA
    initPWA();
    
    // Set current date
    updateCurrentDate();
    
    // Get user location
    getUserLocation();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize horizontal scroll
    initHorizontalScroll();
    
    // Show app immediately (no delay)
    showApp();
}

// Apply language translations
function applyLanguage(lang) {
    if (!translations[lang]) return;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update select options
    document.querySelectorAll('option[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Change language
function changeLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLanguage = lang;
    localStorage.setItem('agrifarmers_language', lang);
    
    // Update language display
    document.getElementById('currentLanguage').textContent = 
        lang === 'en' ? 'English' : 
        lang === 'hi' ? 'हिंदी' : 'ਪੰਜਾਬੀ';
    
    // Apply translations
    applyLanguage(lang);
    
    // Update date format based on language
    updateCurrentDate();
    
    // Close language dropdown
    document.getElementById('languageDropdown').classList.remove('show');
    
    showToast(`Language changed to ${lang === 'en' ? 'English' : lang === 'hi' ? 'Hindi' : 'Punjabi'}`);
}

// Show app immediately
function showApp() {
    const loadingScreen = document.getElementById('loadingScreen');
    const app = document.getElementById('app');
    
    loadingScreen.style.display = 'none';
    app.style.display = 'block';
    
    // Show appropriate page
    if (currentUser) {
        showPage('homePage');
        updateUserInfo();
        loadWeatherData();
        loadMarketPrices();
    } else {
        showPage('welcomePage');
    }
}

// Initialize horizontal scroll for features
function initHorizontalScroll() {
    const slider = document.getElementById('featuresSlider');
    const dots = document.querySelectorAll('.scroll-dot');
    
    if (!slider) return;
    
    // Auto slide every 3 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % 3;
        slider.scrollTo({
            left: currentSlide * slider.offsetWidth,
            behavior: 'smooth'
        });
        updateScrollDots();
    }, 3000);
    
    // Update dots on scroll
    slider.addEventListener('scroll', () => {
        const slideIndex = Math.round(slider.scrollLeft / slider.offsetWidth);
        if (slideIndex !== currentSlide) {
            currentSlide = slideIndex;
            updateScrollDots();
        }
    });
    
    function updateScrollDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
}

// Get user location
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                userLocation = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                };
                reverseGeocode(userLocation.lat, userLocation.lon);
                loadWeatherData();
            },
            (error) => {
                console.log('Location error:', error);
                // Fallback to IP-based location
                fetchIPLocation();
            }
        );
    } else {
        fetchIPLocation();
    }
}

// Reverse geocode to get location name
async function reverseGeocode(lat, lon) {
    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
        );
        const data = await response.json();
        
        if (data.address) {
            const city = data.address.city || data.address.town || data.address.village || 'Unknown';
            const state = data.address.state || 'Unknown';
            
            document.getElementById('farmerLocation').textContent = `${city}, ${state}`;
        }
    } catch (error) {
        console.log('Geocoding error:', error);
    }
}

// Fallback to IP location
async function fetchIPLocation() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        userLocation = {
            lat: data.latitude,
            lon: data.longitude
        };
        
        document.getElementById('farmerLocation').textContent = `${data.city}, ${data.region}`;
    } catch (error) {
        console.log('IP location error:', error);
        document.getElementById('farmerLocation').textContent = 'Location unavailable';
    }
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
    
    if (currentUser) {
        logoutButton.classList.remove('hidden');
    } else {
        logoutButton.classList.add('hidden');
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
            
            // Re-apply language
            applyLanguage(currentLanguage);
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
    const resendButton = document.getElementById('resendOTP');
    
    if (otpTimer) clearInterval(otpTimer);
    
    resendButton.disabled = true;
    
    otpTimer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(otpTimer);
            resendButton.disabled = false;
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
            input.classList.add('error');
            setTimeout(() => {
                input.classList.remove('error');
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
        document.getElementById('welcomeText').textContent = translations[currentLanguage]['hello'];
    }
}

// Update current date
function updateCurrentDate() {
    const now = new Date();
    let locale = 'en-IN';
    
    // Set locale based on language
    if (currentLanguage === 'hi') locale = 'hi-IN';
    if (currentLanguage === 'pa') locale = 'pa-IN';
    
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    document.getElementById('currentDate').textContent = 
        now.toLocaleDateString(locale, options);
}

// Get weather icon based on condition
function getWeatherIcon(condition) {
    const conditionLower = condition.toLowerCase();
    
    if (conditionLower.includes('clear') || conditionLower.includes('sunny')) {
        return 'fas fa-sun sunny';
    } else if (conditionLower.includes('cloud')) {
        return 'fas fa-cloud cloudy';
    } else if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
        return 'fas fa-cloud-rain rainy';
    } else if (conditionLower.includes('thunder') || conditionLower.includes('storm')) {
        return 'fas fa-bolt';
    } else if (conditionLower.includes('snow')) {
        return 'fas fa-snowflake';
    } else if (conditionLower.includes('mist') || conditionLower.includes('fog')) {
        return 'fas fa-smog';
    } else {
        return 'fas fa-cloud cloudy';
    }
}

// Get weather advice based on condition
function getWeatherAdvice(condition, temp) {
    const conditionLower = condition.toLowerCase();
    
    if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
        return 'Rainy weather. Avoid irrigation and harvesting. Good for planting rain-fed crops.';
    } else if (conditionLower.includes('clear') || conditionLower.includes('sunny')) {
        if (temp > 30) {
            return 'Hot and sunny. Water crops early morning or late evening to reduce evaporation.';
        } else {
            return 'Perfect weather for farming activities. Ideal for irrigation and fertilization.';
        }
    } else if (conditionLower.includes('cloud')) {
        return 'Cloudy weather. Good for transplanting and applying pesticides.';
    } else if (conditionLower.includes('wind')) {
        return 'Windy conditions. Secure crops and avoid spraying pesticides.';
    } else {
        return 'Good weather for farming activities. Ideal for irrigation and fertilization.';
    }
}

// Load REAL weather data from API
async function loadWeatherData() {
    if (!userLocation) {
        getUserLocation();
        return;
    }
    
    try {
        document.getElementById('weatherCardContent').innerHTML = `
            <div class="flex items-center">
                <i class="fas fa-spinner fa-spin text-blue-500 mr-2"></i>
                <span class="text-gray-600">Fetching live weather...</span>
            </div>
        `;
        
        // Fetch real weather data from OpenWeatherMap
        const response = await fetch(
            `${CONFIG.WEATHER_API_URL}?lat=${userLocation.lat}&lon=${userLocation.lon}&appid=${CONFIG.WEATHER_API_KEY}&units=metric`
        );
        
        if (!response.ok) {
            throw new Error(`Weather API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Extract weather information
        const temp = Math.round(data.main.temp);
        const feelsLike = Math.round(data.main.feels_like);
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const condition = data.weather[0].description;
        const icon = getWeatherIcon(condition);
        
        // Update weather card
        document.getElementById('weatherCardContent').innerHTML = `
            <div class="flex items-center">
                <span class="text-3xl font-bold text-gray-800">${temp}°C</span>
                <span class="ml-3 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    ${condition}
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
        
        // Update farming advisory based on weather
        const weatherAdvice = getWeatherAdvice(condition, temp);
        document.getElementById('farmingAdvisory').textContent = weatherAdvice;
        
        // Update weather modal
        updateWeatherModal(data);
        
        showToast('Weather data updated successfully!');
        
    } catch (error) {
        console.error('Weather API error:', error);
        
        // Fallback to mock data if API fails
        const mockWeather = {
            temp: 28,
            feels_like: 30,
            humidity: 65,
            wind_speed: 12,
            condition: 'Partly Cloudy',
            description: 'Partly cloudy'
        };
        
        document.getElementById('weatherCardContent').innerHTML = `
            <div class="flex items-center">
                <span class="text-3xl font-bold text-gray-800">${mockWeather.temp}°C</span>
                <span class="ml-3 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    ${mockWeather.condition}
                </span>
            </div>
            <div class="mt-3 text-sm text-gray-600">
                <div class="flex items-center">
                    <i class="fas fa-temperature-low mr-2"></i>
                    <span>Feels like ${mockWeather.feels_like}°C</span>
                </div>
                <div class="flex items-center mt-1">
                    <i class="fas fa-tint mr-2"></i>
                    <span>Humidity: ${mockWeather.humidity}%</span>
                </div>
            </div>
        `;
        
        updateWeatherModal(mockWeather);
        showToast('Using demo weather data', 'info');
    }
}

// Update weather modal with real data
function updateWeatherModal(weatherData) {
    const isMock = !weatherData.weather; // Check if it's mock data
    
    let temp, feelsLike, humidity, windSpeed, condition, pressure, visibility, icon;
    
    if (isMock) {
        temp = weatherData.temp;
        feelsLike = weatherData.feels_like;
        humidity = weatherData.humidity;
        windSpeed = weatherData.wind_speed;
        condition = weatherData.description;
        pressure = 1013;
        visibility = 10;
        icon = getWeatherIcon(condition);
    } else {
        temp = Math.round(weatherData.main.temp);
        feelsLike = Math.round(weatherData.main.feels_like);
        humidity = weatherData.main.humidity;
        windSpeed = weatherData.wind.speed;
        condition = weatherData.weather[0].description;
        pressure = weatherData.main.pressure;
        visibility = weatherData.visibility / 1000; // Convert to km
        icon = getWeatherIcon(condition);
    }
    
    const weatherAdvice = getWeatherAdvice(condition, temp);
    
    const content = `
        <div class="text-center mb-6">
            <i class="${icon} weather-icon ${icon.includes('sun') ? 'sunny' : icon.includes('cloud') ? 'cloudy' : icon.includes('rain') ? 'rainy' : ''}"></i>
            <h4 class="text-3xl font-bold text-gray-800 mb-2">${temp}°C</h4>
            <p class="text-gray-600 capitalize">${condition}</p>
        </div>
        
        <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-4 rounded-lg">
                <i class="fas fa-temperature-low text-blue-500 mb-2"></i>
                <p class="text-sm text-gray-600">Feels Like</p>
                <p class="font-bold text-lg">${feelsLike}°C</p>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
                <i class="fas fa-tint text-green-500 mb-2"></i>
                <p class="text-sm text-gray-600">Humidity</p>
                <p class="font-bold text-lg">${humidity}%</p>
            </div>
            <div class="bg-yellow-50 p-4 rounded-lg">
                <i class="fas fa-wind text-yellow-500 mb-2"></i>
                <p class="text-sm text-gray-600">Wind Speed</p>
                <p class="font-bold text-lg">${windSpeed} m/s</p>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg">
                <i class="fas fa-compress-arrows-alt text-purple-500 mb-2"></i>
                <p class="text-sm text-gray-600">Pressure</p>
                <p class="font-bold text-lg">${pressure} hPa</p>
            </div>
        </div>
        
        <div class="mt-6 p-4 bg-gray-50 rounded-lg">
            <h5 class="font-bold text-gray-800 mb-2">Farming Advisory</h5>
            <p class="text-gray-600 text-sm">${weatherAdvice}</p>
        </div>
        
        ${isMock ? `
        <div class="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p class="text-xs text-yellow-700 text-center">
                <i class="fas fa-info-circle mr-1"></i>
                Using demo weather data. Real API data would show here.
            </p>
        </div>
        ` : ''}
    `;
    
    document.getElementById('weatherModalContent').innerHTML = content;
}

// Load REAL market prices from API
async function loadMarketPrices() {
    try {
        document.getElementById('marketPricesCard').innerHTML = `
            <div class="text-gray-700">
                <p class="font-medium">Fetching live market prices...</p>
            </div>
        `;
        
        // Fetch market prices from data.gov.in API
        // Using a CORS proxy to avoid CORS issues
        const corsProxy = 'https://api.allorigins.win/raw?url=';
        const apiUrl = `${CONFIG.MARKET_API_URL}?api-key=${CONFIG.MARKET_API_KEY}&format=json&limit=10&filters[state]=Haryana`;
        
        const response = await fetch(corsProxy + encodeURIComponent(apiUrl));
        
        if (!response.ok) {
            throw new Error(`Market API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.records && data.records.length > 0) {
            // Take first 3 records for the card
            const prices = data.records.slice(0, 3);
            
            // Update market prices card
            let cardContent = '';
            prices.forEach(item => {
                const commodity = item.commodity || 'Crop';
                const modalPrice = item.modal_price || 'N/A';
                const minPrice = item.min_price || 'N/A';
                const maxPrice = item.max_price || 'N/A';
                
                cardContent += `
                    <div class="mb-2">
                        <div class="flex justify-between items-center">
                            <span class="font-medium">${commodity}</span>
                            <span class="font-bold">₹${modalPrice}/Quintal</span>
                        </div>
                        <div class="text-sm text-gray-500">
                            Min: ₹${minPrice} | Max: ₹${maxPrice}
                        </div>
                    </div>
                `;
            });
            
            document.getElementById('marketPricesCard').innerHTML = cardContent;
            
            // Update market prices modal
            updateMarketPricesModal(data.records.slice(0, 10));
            
            showToast('Market prices updated successfully!');
        } else {
            throw new Error('No market data available');
        }
        
    } catch (error) {
        console.error('Market API error:', error);
        
        // Fallback to mock market data
        const mockPrices = [
            { commodity: 'Wheat', modal_price: '2300', min_price: '2200', max_price: '2400', state: 'Haryana', district: 'Ambala' },
            { commodity: 'Rice', modal_price: '3800', min_price: '3500', max_price: '4000', state: 'Punjab', district: 'Amritsar' },
            { commodity: 'Cotton', modal_price: '6500', min_price: '6000', max_price: '7000', state: 'Gujarat', district: 'Ahmedabad' },
            { commodity: 'Sugarcane', modal_price: '350', min_price: '320', max_price: '380', state: 'Uttar Pradesh', district: 'Meerut' },
            { commodity: 'Potato', modal_price: '1200', min_price: '1000', max_price: '1400', state: 'West Bengal', district: 'Hooghly' },
            { commodity: 'Tomato', modal_price: '800', min_price: '600', max_price: '1000', state: 'Maharashtra', district: 'Pune' }
        ];
        
        // Update market prices card with mock data
        document.getElementById('marketPricesCard').innerHTML = `
            <div class="mb-2">
                <div class="flex justify-between items-center">
                    <span class="font-medium">Wheat</span>
                    <span class="font-bold">₹2,300/quintal</span>
                </div>
                <div class="text-sm text-green-600">
                    +2% from yesterday
                </div>
            </div>
            <div>
                <div class="flex justify-between items-center">
                    <span class="font-medium">Rice</span>
                    <span class="font-bold">₹3,800/quintal</span>
                </div>
                <div class="text-sm text-green-600">
                    +1.5% from yesterday
                </div>
            </div>
        `;
        
        // Update market prices modal with mock data
        updateMarketPricesModal(mockPrices);
        
        showToast('Using demo market data', 'info');
    }
}

// Update market prices modal
function updateMarketPricesModal(prices) {
    let content = `
        <div class="mb-4">
            <div class="flex items-center mb-2">
                <i class="fas fa-info-circle text-blue-500 mr-2"></i>
                <p class="text-sm text-gray-600">Live prices from Indian mandis (updated daily)</p>
            </div>
        </div>
    `;
    
    if (prices.length === 0) {
        content += `
            <div class="text-center py-8">
                <i class="fas fa-exclamation-triangle text-yellow-500 text-3xl mb-3"></i>
                <p class="text-gray-600">No market data available at the moment.</p>
            </div>
        `;
    } else {
        prices.forEach(item => {
            const commodity = item.commodity || 'Unknown Crop';
            const state = item.state || 'Unknown';
            const district = item.district || 'Unknown';
            const modalPrice = item.modal_price || 'N/A';
            const minPrice = item.min_price || 'N/A';
            const maxPrice = item.max_price || 'N/A';
            
            content += `
                <div class="price-item">
                    <div class="flex justify-between items-start mb-2">
                        <div>
                            <h5 class="font-bold text-gray-800">${commodity}</h5>
                            <p class="text-sm text-gray-500">${district}, ${state}</p>
                        </div>
                        <div class="text-right">
                            <p class="font-bold text-lg">₹${modalPrice}/quintal</p>
                            <p class="text-sm text-gray-600">
                                Min: ₹${minPrice} | Max: ₹${maxPrice}
                            </p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    
    content += `
        <div class="mt-6 p-4 bg-blue-50 rounded-lg">
            <div class="flex items-center">
                <i class="fas fa-chart-line text-blue-500 mr-3"></i>
                <div>
                    <p class="font-bold text-blue-800">Market Trend</p>
                    <p class="text-sm text-blue-600">Prices updated daily from government sources</p>
                </div>
            </div>
        </div>
        
        <div class="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p class="text-xs text-yellow-700 text-center">
                <i class="fas fa-info-circle mr-1"></i>
                Data source: data.gov.in - Government of India
            </p>
        </div>
    `;
    
    document.getElementById('marketPricesModalContent').innerHTML = content;
}

// Update seed modal
function updateSeedModal() {
    const state = currentUser?.state || 'Haryana';
    const crops = cropRecommendations[state] || ['Wheat', 'Rice', 'Cotton'];
    
    let content = `
        <div class="mb-6">
            <div class="flex items-center mb-4">
                <i class="fas fa-map-marker-alt text-green-500 mr-3"></i>
                <div>
                    <p class="font-bold text-gray-800">Location Based Recommendations</p>
                    <p class="text-sm text-gray-600">For ${state} region</p>
                </div>
            </div>
            
            <div class="mb-6">
                <h4 class="font-bold text-gray-800 mb-3">Recommended Seeds</h4>
                <div class="flex flex-wrap gap-2">
    `;
    
    crops.forEach(crop => {
        content += `<span class="px-4 py-2 bg-green-100 text-green-800 rounded-full">${crop}</span>`;
    });
    
    content += `
                </div>
            </div>
            
            <div class="mb-6">
                <h4 class="font-bold text-gray-800 mb-3">Fertilizer Recommendation</h4>
                <div class="bg-gray-100 p-4 rounded-lg">
                    <div class="flex justify-between mb-2">
                        <span class="text-sm text-gray-600">Organic Fertilizer</span>
                        <span class="font-bold">50%</span>
                    </div>
                    <div class="w-full bg-gray-300 rounded-full h-4">
                        <div class="bg-green-500 h-4 rounded-full" style="width: 50%"></div>
                    </div>
                    
                    <div class="flex justify-between mt-4 mb-2">
                        <span class="text-sm text-gray-600">NPK (Chemical)</span>
                        <span class="font-bold">25%</span>
                    </div>
                    <div class="w-full bg-gray-300 rounded-full h-4">
                        <div class="bg-blue-500 h-4 rounded-full" style="width: 25%"></div>
                    </div>
                    
                    <div class="flex justify-between mt-4 mb-2">
                        <span class="text-sm text-gray-600">Urea</span>
                        <span class="font-bold">25%</span>
                    </div>
                    <div class="w-full bg-gray-300 rounded-full h-4">
                        <div class="bg-yellow-500 h-4 rounded-full" style="width: 25%"></div>
                    </div>
                </div>
            </div>
            
            <div class="p-4 bg-yellow-50 rounded-lg">
                <div class="flex items-center">
                    <i class="fas fa-lightbulb text-yellow-500 mr-3"></i>
                    <div>
                        <p class="font-bold text-yellow-800">Tip</p>
                        <p class="text-sm text-yellow-700">Apply organic fertilizer first, then chemical fertilizers for best results</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('seedModalContent').innerHTML = content;
}

// PWA Installation - FIXED VERSION
function initPWA() {
    console.log('🔄 Initializing PWA features...');
    
    // Check if the browser supports service workers and PWA installation
    if ('serviceWorker' in navigator && 'BeforeInstallPromptEvent' in window) {
        
        // Register Service Worker with proper path
        window.addEventListener('load', async () => {
            try {
                // Use correct path based on current location
                const swPath = window.location.pathname.includes('/AgriFarmers-SIH-2025/') 
                    ? '/AgriFarmers-SIH-2025/service-worker.js' 
                    : './service-worker.js';
                
                const registration = await navigator.serviceWorker.register(swPath);
                console.log('✅ Service Worker registered:', registration);
                
                // Check if app is already installed
                if (!isAppInstalled()) {
                    // Show install button after delay
                    setTimeout(() => {
                        const installButton = document.getElementById('pwa-install-button');
                        if (installButton && deferredPrompt) {
                            installButton.classList.remove('hidden');
                            console.log('📱 PWA install button shown');
                        }
                    }, 2000);
                }
            } catch (error) {
                console.log('❌ Service Worker registration failed:', error);
            }
        });
        
        // Handle beforeinstallprompt event
        window.addEventListener('beforeinstallprompt', (e) => {
            console.log('✅ beforeinstallprompt event fired');
            
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            
            // Stash the event so it can be triggered later
            deferredPrompt = e;
            
            // Update UI to notify the user they can install the PWA
            const installButton = document.getElementById('pwa-install-button');
            if (installButton) {
                installButton.classList.remove('hidden');
                showToast('App can be installed!', 'info');
                console.log('📱 Showing install button');
            }
            
            // Log for debugging
            console.log('Deferred prompt saved:', !!deferredPrompt);
        });
        
        // Listen for app installation
        window.addEventListener('appinstalled', (evt) => {
            console.log('✅ PWA was installed');
            
            // Hide the install button
            const installButton = document.getElementById('pwa-install-button');
            if (installButton) {
                installButton.classList.add('hidden');
            }
            
            // Clear the deferredPrompt variable
            deferredPrompt = null;
            
            // Show success message
            showToast('App installed successfully! You can now access it from your home screen.', 'success');
        });
    } else {
        console.log('❌ PWA features not supported in this browser');
    }
    
    // Setup install button click handler
    const installButton = document.getElementById('pwa-install-button');
    if (installButton) {
        installButton.addEventListener('click', async () => {
            console.log('🔘 Install button clicked');
            
            if (deferredPrompt) {
                console.log('📱 Showing install prompt');
                
                // Show the install prompt
                deferredPrompt.prompt();
                
                // Wait for the user to respond to the prompt
                const choiceResult = await deferredPrompt.userChoice;
                
                console.log('User choice:', choiceResult.outcome);
                
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                    showToast('App installation started!', 'success');
                } else {
                    console.log('User dismissed the install prompt');
                    showToast('Installation cancelled.', 'info');
                }
                
                // Clear the saved prompt since it can't be used again
                deferredPrompt = null;
                
                // Hide the install button
                installButton.classList.add('hidden');
            } else {
                console.log('No deferred prompt available');
                showToast('App installation not available in this browser.', 'error');
            }
        });
    }
}

// Check if app is already installed
function isAppInstalled() {
    return window.matchMedia('(display-mode: standalone)').matches || 
           window.navigator.standalone ||
           document.referrer.includes('android-app://');
}

// Setup event listeners
function setupEventListeners() {
    // Language selector toggle
    const languageButton = document.getElementById('languageButton');
    const languageDropdown = document.getElementById('languageDropdown');
    
    if (languageButton && languageDropdown) {
        languageButton.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            languageDropdown.classList.remove('show');
        });
    }
    
    // Close modals when clicking outside
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
    
    // Close modals with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay').forEach(modal => {
                modal.classList.remove('active');
            });
        }
    });
    
    // Refresh weather data every 30 minutes
    setInterval(() => {
        if (currentUser && userLocation) {
            loadWeatherData();
            loadMarketPrices();
        }
    }, 30 * 60 * 1000); // 30 minutes
}

// Modal functions
function openWeatherModal() {
    document.getElementById('weatherModal').classList.add('active');
    updateWeatherModal({});
}

function openMarketPricesModal() {
    document.getElementById('marketPricesModal').classList.add('active');
    loadMarketPrices();
}

function openSeedModal() {
    document.getElementById('seedModal').classList.add('active');
    updateSeedModal();
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
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
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;
    
    // Remove existing toasts
    while (toastContainer.firstChild) {
        toastContainer.removeChild(toastContainer.firstChild);
    }
    
    const toast = document.createElement('div');
    toast.className = `mb-3 px-6 py-3 rounded-lg shadow-lg text-white ${
        type === 'success' ? 'bg-green-500' :
        type === 'error' ? 'bg-red-500' :
        type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
    }`;
    toast.innerHTML = `
        <i class="fas fa-${
            type === 'success' ? 'check-circle' :
            type === 'error' ? 'exclamation-circle' :
            type === 'warning' ? 'exclamation-triangle' : 'info-circle'
        } mr-2"></i>
        ${message}
    `;
    
    toastContainer.appendChild(toast);
    
    // Remove toast after 5 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 5000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
