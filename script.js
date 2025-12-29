// AgriFarmers - Main Application Script
console.log('🚜 AgriFarmers App Initializing...');

// Global Variables
let currentUser = null;
let currentLanguage = 'en';
let userLocation = null;
let otpTimer = null;
let deferredPrompt = null;

// Language Data
const translations = {
    en: {
        // App
        appName: 'AgriFarmers',
        
        // Welcome Page
        welcomeTitle: 'Welcome to AgriFarmers',
        welcomeSubtitle: 'Your trusted companion for modern farming.',
        feature1Title: 'Smart Location',
        feature1Desc: 'Get location-based weather and farming advice',
        feature2Title: 'Live Weather',
        feature2Desc: 'Accurate weather forecasts and farming alerts',
        feature3Title: 'Market Prices',
        feature3Desc: 'Real-time crop prices and market trends',
        getStartedBtn: 'Get Started',
        noAccountText: 'Don\'t have an account?',
        signUpBtn: 'Sign Up',
        
        // Login Page
        loginTitle: 'Login to AgriFarmers',
        mobileLabel: 'Mobile Number',
        sendOtpBtn: 'Send OTP',
        noAccountText2: 'Don\'t have an account?',
        signUpBtn2: 'Sign Up',
        
        // Signup Page
        signupTitle: 'Create Account',
        nameLabel: 'Full Name',
        mobileLabel2: 'Mobile Number',
        stateLabel: 'State',
        districtLabel: 'District',
        selectState: 'Select State',
        selectDistrict: 'Select District',
        signupBtn: 'Sign Up',
        haveAccount: 'Already have an account?',
        loginBtn: 'Login',
        
        // OTP Page
        otpTitle: 'OTP Verification',
        otpSentText: 'OTP sent to',
        demoOtpText: 'Demo OTP:',
        otpTimerText: 'OTP valid for',
        minutesText: 'minutes',
        verifyOtpBtn: 'Verify OTP',
        resendOtpBtn: 'Resend OTP',
        backLoginBtn: 'Back to Login',
        
        // Home Page
        helloText: 'Hello',
        todayText: 'Today',
        dashboardTitle: 'Your Farming Dashboard',
        weatherTitle: 'Weather Forecast',
        weatherDesc: 'Live weather for your location',
        marketTitle: 'Market Prices',
        marketDesc: 'Live India crop prices',
        seedTitle: 'Seed & Fertilizer',
        seedDesc: 'Recommendations for your region',
        seedRecText: 'Seed Recommendations:',
        fertilizerText: 'Fertilizer Mix:',
        tipsTitle: 'Today\'s Farming Tips',
        
        // Modal Titles
        weatherModalTitle: 'Weather Details',
        marketModalTitle: 'Live Market Prices',
        seedModalTitle: 'Seed & Fertilizer Guide',
        
        // Loading Texts
        loadingWeatherText: 'Loading weather data...',
        loadingPricesText: 'Loading market prices...',
        loadingRecText: 'Loading recommendations...',
        
        // Footer
        rightsText: 'All rights reserved.',
        installText: 'Install App',
        
        // Weather Data
        temperature: 'Temperature',
        humidity: 'Humidity',
        windSpeed: 'Wind Speed',
        feelsLike: 'Feels Like',
        pressure: 'Pressure',
        sunrise: 'Sunrise',
        sunset: 'Sunset',
        
        // Market Data
        crop: 'Crop',
        price: 'Price',
        market: 'Market',
        unit: 'Unit',
        
        // Tips
        defaultTip: 'Good weather for farming activities. Ideal for irrigation and fertilization.',
        
        // States and Crops
        states: {
            Punjab: ['Wheat', 'Rice', 'Cotton', 'Sugarcane'],
            Haryana: ['Wheat', 'Rice', 'Mustard', 'Cotton'],
            Rajasthan: ['Wheat', 'Barley', 'Mustard', 'Cotton'],
            'Uttar Pradesh': ['Wheat', 'Rice', 'Sugarcane', 'Potato'],
            Maharashtra: ['Rice', 'Sugarcane', 'Cotton', 'Soybean']
        }
    },
    
    hi: {
        appName: 'एग्रीफार्मर्स',
        welcomeTitle: 'एग्रीफार्मर्स में आपका स्वागत है',
        welcomeSubtitle: 'आधुनिक खेती के लिए आपका विश्वसनीय साथी।',
        feature1Title: 'स्मार्ट लोकेशन',
        feature1Desc: 'स्थान-आधारित मौसम और खेती सलाह प्राप्त करें',
        feature2Title: 'लाइव मौसम',
        feature2Desc: 'सटीक मौसम पूर्वानुमान और खेती अलर्ट',
        feature3Title: 'बाजार भाव',
        feature3Desc: 'रीयल-टाइम फसल की कीमतें और बाजार रुझान',
        getStartedBtn: 'शुरू करें',
        noAccountText: 'खाता नहीं है?',
        signUpBtn: 'साइन अप करें',
        
        loginTitle: 'एग्रीफार्मर्स में लॉगिन करें',
        mobileLabel: 'मोबाइल नंबर',
        sendOtpBtn: 'ओटीपी भेजें',
        
        signupTitle: 'खाता बनाएं',
        nameLabel: 'पूरा नाम',
        stateLabel: 'राज्य',
        districtLabel: 'जिला',
        selectState: 'राज्य चुनें',
        selectDistrict: 'जिला चुनें',
        signupBtn: 'साइन अप करें',
        haveAccount: 'पहले से खाता है?',
        loginBtn: 'लॉगिन',
        
        otpTitle: 'ओटीपी सत्यापन',
        otpSentText: 'ओटीपी भेजा गया',
        demoOtpText: 'डेमो ओटीपी:',
        otpTimerText: 'ओटीपी वैध',
        minutesText: 'मिनट',
        verifyOtpBtn: 'ओटीपी सत्यापित करें',
        resendOtpBtn: 'ओटीपी पुनः भेजें',
        backLoginBtn: 'लॉगिन पर वापस',
        
        helloText: 'नमस्ते',
        todayText: 'आज',
        dashboardTitle: 'आपका फार्मिंग डैशबोर्ड',
        weatherTitle: 'मौसम पूर्वानुमान',
        weatherDesc: 'आपके स्थान का लाइव मौसम',
        marketTitle: 'बाजार भाव',
        marketDesc: 'भारत में फसल की कीमतें',
        seedTitle: 'बीज और उर्वरक',
        seedDesc: 'आपके क्षेत्र के लिए सिफारिशें',
        seedRecText: 'बीज सिफारिशें:',
        fertilizerText: 'उर्वरक मिश्रण:',
        tipsTitle: 'आज की खेती टिप्स',
        
        weatherModalTitle: 'मौसम विवरण',
        marketModalTitle: 'लाइव बाजार भाव',
        seedModalTitle: 'बीज और उर्वरक गाइड',
        
        loadingWeatherText: 'मौसम डेटा लोड हो रहा है...',
        loadingPricesText: 'बाजार भाव लोड हो रहे हैं...',
        loadingRecText: 'सिफारिशें लोड हो रही हैं...',
        
        rightsText: 'सभी अधिकार सुरक्षित।',
        installText: 'ऐप इंस्टॉल करें',
        
        temperature: 'तापमान',
        humidity: 'आर्द्रता',
        windSpeed: 'हवा की गति',
        feelsLike: 'अनुभव',
        pressure: 'दबाव',
        sunrise: 'सूर्योदय',
        sunset: 'सूर्यास्त',
        
        crop: 'फसल',
        price: 'कीमत',
        market: 'बाजार',
        unit: 'इकाई',
        
        defaultTip: 'खेती की गतिविधियों के लिए अच्छा मौसम। सिंचाई और उर्वरक के लिए आदर्श।',
        
        states: {
            Punjab: ['गेहूं', 'चावल', 'कपास', 'गन्ना'],
            Haryana: ['गेहूं', 'चावल', 'सरसों', 'कपास'],
            Rajasthan: ['गेहूं', 'जौ', 'सरसों', 'कपास'],
            'Uttar Pradesh': ['गेहूं', 'चावल', 'गन्ना', 'आलू'],
            Maharashtra: ['चावल', 'गन्ना', 'कपास', 'सोयाबीन']
        }
    },
    
    pa: {
        appName: 'ਐਗਰੀਫਾਰਮਰਸ',
        welcomeTitle: 'ਐਗਰੀਫਾਰਮਰਸ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ',
        welcomeSubtitle: 'ਆਧੁਨਿਕ ਖੇਤੀ ਲਈ ਤੁਹਾਡਾ ਭਰੋਸੇਮੰਦ ਸਾਥੀ।',
        feature1Title: 'ਸਮਾਰਟ ਲੋਕੇਸ਼ਨ',
        feature1Desc: 'ਸਥਾਨ-ਅਧਾਰਿਤ ਮੌਸਮ ਅਤੇ ਖੇਤੀ ਸਲਾਹ ਪ੍ਰਾਪਤ ਕਰੋ',
        feature2Title: 'ਲਾਈਵ ਮੌਸਮ',
        feature2Desc: 'ਸਹੀ ਮੌਸਮ ਪੁਰਾਣੁਮਾਨ ਅਤੇ ਖੇਤੀ ਅਲਰਟ',
        feature3Title: 'ਬਾਜ਼ਾਰ ਭਾਅ',
        feature3Desc: 'ਰੀਅਲ-ਟਾਈਮ ਫਸਲ ਦੀਆਂ ਕੀਮਤਾਂ ਅਤੇ ਬਾਜ਼ਾਰ ਰੁਝਾਨ',
        getStartedBtn: 'ਸ਼ੁਰੂ ਕਰੋ',
        noAccountText: 'ਖਾਤਾ ਨਹੀਂ ਹੈ?',
        signUpBtn: 'ਸਾਈਨ ਅੱਪ ਕਰੋ',
        
        loginTitle: 'ਐਗਰੀਫਾਰਮਰਸ ਵਿੱਚ ਲਾਗਇਨ ਕਰੋ',
        mobileLabel: 'ਮੋਬਾਈਲ ਨੰਬਰ',
        sendOtpBtn: 'ਓਟੀਪੀ ਭੇਜੋ',
        
        signupTitle: 'ਖਾਤਾ ਬਣਾਓ',
        nameLabel: 'ਪੂਰਾ ਨਾਂ',
        stateLabel: 'ਰਾਜ',
        districtLabel: 'ਜ਼ਿਲ੍ਹਾ',
        selectState: 'ਰਾਜ ਚੁਣੋ',
        selectDistrict: 'ਜ਼ਿਲ੍ਹਾ ਚੁਣੋ',
        signupBtn: 'ਸਾਈਨ ਅੱਪ ਕਰੋ',
        haveAccount: 'ਪਹਿਲਾਂ ਤੋਂ ਖਾਤਾ ਹੈ?',
        loginBtn: 'ਲਾਗਇਨ',
        
        otpTitle: 'ਓਟੀਪੀ ਪੁਸ਼ਟੀਕਰਨ',
        otpSentText: 'ਓਟੀਪੀ ਭੇਜਿਆ ਗਿਆ',
        demoOtpText: 'ਡੇਮੋ ਓਟੀਪੀ:',
        otpTimerText: 'ਓਟੀਪੀ ਵੈਧ',
        minutesText: 'ਮਿੰਟ',
        verifyOtpBtn: 'ਓਟੀਪੀ ਪੁਸ਼ਟੀ ਕਰੋ',
        resendOtpBtn: 'ਓਟੀਪੀ ਮੁੜ ਭੇਜੋ',
        backLoginBtn: 'ਲਾਗਇਨ ਤੇ ਵਾਪਸ',
        
        helloText: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ',
        todayText: 'ਅੱਜ',
        dashboardTitle: 'ਤੁਹਾਡਾ ਫਾਰਮਿੰਗ ਡੈਸ਼ਬੋਰਡ',
        weatherTitle: 'ਮੌਸਮ ਪੁਰਾਣੁਮਾਨ',
        weatherDesc: 'ਤੁਹਾਡੇ ਸਥਾਨ ਦਾ ਲਾਈਵ ਮੌਸਮ',
        marketTitle: 'ਬਾਜ਼ਾਰ ਭਾਅ',
        marketDesc: 'ਭਾਰਤ ਵਿੱਚ ਫਸਲ ਦੀਆਂ ਕੀਮਤਾਂ',
        seedTitle: 'ਬੀਜ ਅਤੇ ਖਾਦ',
        seedDesc: 'ਤੁਹਾਡੇ ਖੇਤਰ ਲਈ ਸਿਫਾਰਸ਼ਾਂ',
        seedRecText: 'ਬੀਜ ਸਿਫਾਰਸ਼ਾਂ:',
        fertilizerText: 'ਖਾਦ ਮਿਸ਼ਰਣ:',
        tipsTitle: 'ਅੱਜ ਦੀਆਂ ਖੇਤੀ ਟਿੱਪਸ',
        
        weatherModalTitle: 'ਮੌਸਮ ਵੇਰਵੇ',
        marketModalTitle: 'ਲਾਈਵ ਬਾਜ਼ਾਰ ਭਾਅ',
        seedModalTitle: 'ਬੀਜ ਅਤੇ ਖਾਦ ਗਾਈਡ',
        
        loadingWeatherText: 'ਮੌਸਮ ਡੇਟਾ ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...',
        loadingPricesText: 'ਬਾਜ਼ਾਰ ਭਾਅ ਲੋਡ ਹੋ ਰਹੇ ਹਨ...',
        loadingRecText: 'ਸਿਫਾਰਸ਼ਾਂ ਲੋਡ ਹੋ ਰਹੀਆਂ ਹਨ...',
        
        rightsText: 'ਸਾਰੇ ਅਧਿਕਾਰ ਸੁਰੱਖਿਅਤ।',
        installText: 'ਐਪ ਇੰਸਟਾਲ ਕਰੋ',
        
        temperature: 'ਤਾਪਮਾਨ',
        humidity: 'ਨਮੀ',
        windSpeed: 'ਹਵਾ ਦੀ ਗਤੀ',
        feelsLike: 'ਮਹਿਸੂਸ ਹੁੰਦਾ ਹੈ',
        pressure: 'ਦਬਾਅ',
        sunrise: 'ਸੂਰਜ ਚੜ੍ਹਨਾ',
        sunset: 'ਸੂਰਜ ਡੁੱਬਣਾ',
        
        crop: 'ਫਸਲ',
        price: 'ਕੀਮਤ',
        market: 'ਬਾਜ਼ਾਰ',
        unit: 'ਇਕਾਈ',
        
        defaultTip: 'ਖੇਤੀ ਦੀਆਂ ਗਤੀਵਿਧੀਆਂ ਲਈ ਵਧੀਆ ਮੌਸਮ। ਸਿੰਜਾਈ ਅਤੇ ਖਾਦ ਲਈ ਆਦਰਸ਼।',
        
        states: {
            Punjab: ['ਕਣਕ', 'ਚਾਵਲ', 'ਕਪਾਹ', 'ਗੰਨਾ'],
            Haryana: ['ਕਣਕ', 'ਚਾਵਲ', 'ਸਰ੍ਹੋਂ', 'ਕਪਾਹ'],
            Rajasthan: ['ਕਣਕ', 'ਜੌਂ', 'ਸਰ੍ਹੋਂ', 'ਕਪਾਹ'],
            'Uttar Pradesh': ['ਕਣਕ', 'ਚਾਵਲ', 'ਗੰਨਾ', 'ਆਲੂ'],
            Maharashtra: ['ਚਾਵਲ', 'ਗੰਨਾ', 'ਕਪਾਹ', 'ਸੋਇਆਬੀਨ']
        }
    }
};

// State to District mapping
const stateDistricts = {
    Punjab: ['Amritsar', 'Ludhiana', 'Jalandhar', 'Patiala', 'Bathinda', 'Mohali'],
    Haryana: ['Faridabad', 'Gurgaon', 'Hisar', 'Rohtak', 'Panipat', 'Karnal'],
    Rajasthan: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer', 'Bikaner'],
    'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Allahabad', 'Meerut'],
    Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Thane']
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌱 AgriFarmers Initializing...');
    
    // Hide loading screen immediately
    setTimeout(() => {
        document.getElementById('loadingScreen').style.display = 'none';
        document.getElementById('app').style.display = 'block';
        initApp();
    }, 500);
    
    // Initialize PWA
    initPWA();
    
    // Initialize features slider
    initFeaturesSlider();
    
    // Setup event listeners
    setupEventListeners();
});

// Initialize PWA
function initPWA() {
    // PWA Installation
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        const installButton = document.getElementById('pwa-install-button');
        installButton.style.display = 'flex';
        
        installButton.addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                console.log(`User response to the install prompt: ${outcome}`);
                deferredPrompt = null;
                installButton.style.display = 'none';
            }
        });
    });
    
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
        document.getElementById('pwa-install-button').style.display = 'none';
    }
    
    // Register Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    }
}

// Initialize features slider
function initFeaturesSlider() {
    const slider = document.getElementById('featuresSlider');
    const dots = document.querySelectorAll('.scroll-dot');
    let currentSlide = 0;
    
    // Auto slide every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % 3;
        slider.scrollLeft = currentSlide * slider.offsetWidth;
        updateDots(currentSlide);
    }, 5000);
    
    // Update dots on scroll
    slider.addEventListener('scroll', () => {
        const slideIndex = Math.round(slider.scrollLeft / slider.offsetWidth);
        updateDots(slideIndex);
    });
    
    // Dot click events
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            slider.scrollLeft = index * slider.offsetWidth;
            updateDots(index);
        });
    });
    
    function updateDots(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
}

// Setup event listeners
function setupEventListeners() {
    // Language selector
    document.getElementById('languageButton').addEventListener('click', function() {
        const dropdown = document.getElementById('languageDropdown');
        dropdown.classList.toggle('hidden');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const dropdown = document.getElementById('languageDropdown');
        const button = document.getElementById('languageButton');
        if (!button.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.add('hidden');
        }
    });
    
    // State change listener
    document.getElementById('signUpState').addEventListener('change', function() {
        const state = this.value;
        const districtSelect = document.getElementById('signUpDistrict');
        
        districtSelect.innerHTML = `<option value="">${translations[currentLanguage].selectDistrict}</option>`;
        
        if (state && stateDistricts[state]) {
            stateDistricts[state].forEach(district => {
                const option = document.createElement('option');
                option.value = district;
                option.textContent = district;
                districtSelect.appendChild(option);
            });
            districtSelect.disabled = false;
        } else {
            districtSelect.disabled = true;
        }
    });
}

// Initialize app
function initApp() {
    // Set current date
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').textContent = date.toLocaleDateString(currentLanguage === 'en' ? 'en-US' : 'hi-IN', options);
    
    // Check if user is already logged in
    const savedUser = localStorage.getItem('agrifarmers_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showPage('homePage');
        updateUserInfo();
        loadDashboardData();
    }
    
    // Initialize OTP inputs
    initOTPInputs();
}

// Page navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    
    if (pageId === 'homePage') {
        updateUserInfo();
        loadDashboardData();
    }
}

// Initialize OTP inputs
function initOTPInputs() {
    const container = document.getElementById('otpContainer');
    container.innerHTML = '';
    
    for (let i = 0; i < 6; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
        input.className = 'otp-digit';
        input.dataset.index = i;
        
        input.addEventListener('input', function(e) {
            if (this.value.length === 1) {
                const nextIndex = parseInt(this.dataset.index) + 1;
                const nextInput = container.querySelector(`[data-index="${nextIndex}"]`);
                if (nextInput) nextInput.focus();
            }
        });
        
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && this.value.length === 0) {
                const prevIndex = parseInt(this.dataset.index) - 1;
                const prevInput = container.querySelector(`[data-index="${prevIndex}"]`);
                if (prevInput) prevInput.focus();
            }
        });
        
        container.appendChild(input);
    }
    
    // Focus first input
    const firstInput = container.querySelector('[data-index="0"]');
    if (firstInput) firstInput.focus();
}

// Handle login
function handleLogin() {
    const mobile = document.getElementById('loginMobile').value;
    
    if (!mobile || mobile.length !== 10 || !/^\d+$/.test(mobile)) {
        showToast('Please enter a valid 10-digit mobile number', 'error');
        return;
    }
    
    // Show OTP page
    document.getElementById('otpPhoneNumber').textContent = `+91 ${mobile}`;
    showPage('otpPage');
    startOTPTimer();
    
    // Simulate OTP sending
    showToast('OTP sent to your mobile number', 'success');
}

// Handle sign up
function handleSignUp() {
    const name = document.getElementById('signUpName').value;
    const mobile = document.getElementById('signUpMobile').value;
    const state = document.getElementById('signUpState').value;
    const district = document.getElementById('signUpDistrict').value;
    
    // Validate inputs
    let isValid = true;
    
    if (!name || name.length < 2) {
        showError('signUpNameError', 'Please enter a valid name');
        isValid = false;
    }
    
    if (!mobile || mobile.length !== 10 || !/^\d+$/.test(mobile)) {
        showError('signUpMobileError', 'Please enter a valid 10-digit mobile number');
        isValid = false;
    }
    
    if (!state) {
        showError('signUpStateError', 'Please select your state');
        isValid = false;
    }
    
    if (!district) {
        showError('signUpDistrictError', 'Please select your district');
        isValid = false;
    }
    
    if (!isValid) return;
    
    // Save user data
    currentUser = {
        name: name,
        mobile: mobile,
        state: state,
        district: district,
        location: null
    };
    
    // Save to localStorage
    localStorage.setItem('agrifarmers_user', JSON.stringify(currentUser));
    
    // Show OTP page
    document.getElementById('otpPhoneNumber').textContent = `+91 ${mobile}`;
    showPage('otpPage');
    startOTPTimer();
    
    showToast('Account created successfully! OTP sent.', 'success');
}

// Start OTP timer
function startOTPTimer() {
    let timeLeft = 120; // 2 minutes
    
    clearInterval(otpTimer);
    
    otpTimer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        
        document.getElementById('otpTimer').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(otpTimer);
            document.getElementById('resendOTP').disabled = false;
        }
        
        timeLeft--;
    }, 1000);
}

// Verify OTP
function verifyOTP() {
    // Get OTP from inputs
    const otpInputs = document.querySelectorAll('.otp-digit');
    let enteredOTP = '';
    otpInputs.forEach(input => {
        enteredOTP += input.value;
    });
    
    // Demo OTP: 123456
    if (enteredOTP === '123456') {
        clearInterval(otpTimer);
        
        // Update user info
        updateUserInfo();
        
        // Get user location
        getUserLocation();
        
        // Show home page
        showPage('homePage');
        
        showToast('Login successful!', 'success');
    } else {
        showToast('Invalid OTP. Please try again.', 'error');
    }
}

// Resend OTP
function resendOTP() {
    startOTPTimer();
    showToast('New OTP sent to your mobile', 'success');
}

// Update user info on home page
function updateUserInfo() {
    if (!currentUser) return;
    
    document.getElementById('farmerName').textContent = currentUser.name;
    
    if (currentUser.location) {
        document.getElementById('farmerLocation').textContent = 
            `${currentUser.district}, ${currentUser.state}`;
    }
}

// Get user location
function getUserLocation() {
    if (!navigator.geolocation) {
        console.log('Geolocation is not supported by this browser.');
        return;
    }
    
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            
            userLocation = { lat, lon };
            
            if (currentUser) {
                currentUser.location = userLocation;
                localStorage.setItem('agrifarmers_user', JSON.stringify(currentUser));
            }
            
            // Update location display
            if (currentUser) {
                document.getElementById('farmerLocation').textContent = 
                    `${currentUser.district}, ${currentUser.state}`;
            }
            
            // Load weather data
            loadWeatherData(lat, lon);
            
            // Load market data
            loadMarketData();
            
            // Load seed recommendations
            loadSeedRecommendations();
            
        },
        (error) => {
            console.log('Error getting location:', error);
            
            // Use default location (Punjab coordinates)
            const defaultLat = 31.1471;
            const defaultLon = 75.3412;
            
            userLocation = { lat: defaultLat, lon: defaultLon };
            
            // Load data with default location
            loadWeatherData(defaultLat, defaultLon);
            loadMarketData();
            loadSeedRecommendations();
            
            document.getElementById('farmerLocation').textContent = 
                `${currentUser?.district || 'Punjab'}, ${currentUser?.state || 'Punjab'}`;
        }
    );
}

// Load dashboard data
function loadDashboardData() {
    if (userLocation) {
        loadWeatherData(userLocation.lat, userLocation.lon);
    } else {
        getUserLocation();
    }
    
    loadMarketData();
    loadSeedRecommendations();
}

// Load weather data using OpenWeatherMap API
async function loadWeatherData(lat, lon) {
    const apiKey = '44a55de0f2e0674cb9160f50459d51d4'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    
    try {
        // For demo, use mock data (replace with actual API call)
        const mockWeather = {
            main: {
                temp: 28,
                feels_like: 30,
                humidity: 65,
                pressure: 1013
            },
            weather: [{ description: 'Partly cloudy', main: 'Clouds', icon: '03d' }],
            wind: { speed: 12 },
            sys: { sunrise: 1670479200, sunset: 1670515200 },
            name: currentUser?.district || 'Punjab'
        };
        
        updateWeatherCard(mockWeather);
        updateWeatherModal(mockWeather);
        
    } catch (error) {
        console.log('Error loading weather:', error);
        
        // Fallback to mock data
        const mockWeather = {
            main: {
                temp: 28,
                feels_like: 30,
                humidity: 65,
                pressure: 1013
            },
            weather: [{ description: 'Partly cloudy', main: 'Clouds', icon: '03d' }],
            wind: { speed: 12 },
            sys: { sunrise: 1670479200, sunset: 1670515200 },
            name: currentUser?.district || 'Punjab'
        };
        
        updateWeatherCard(mockWeather);
        updateWeatherModal(mockWeather);
    }
}

// Update weather card
function updateWeatherCard(weatherData) {
    const temp = Math.round(weatherData.main.temp);
    const condition = weatherData.weather[0].main;
    const description = weatherData.weather[0].description;
    
    let weatherIcon = 'fa-cloud-sun';
    let weatherClass = 'cloudy';
    
    if (condition.includes('Clear') || condition.includes('Sun')) {
        weatherIcon = 'fa-sun';
        weatherClass = 'sunny';
    } else if (condition.includes('Rain')) {
        weatherIcon = 'fa-cloud-rain';
        weatherClass = 'rainy';
    } else if (condition.includes('Cloud')) {
        weatherIcon = 'fa-cloud';
        weatherClass = 'cloudy';
    }
    
    const content = `
        <div class="flex items-center justify-between">
            <div>
                <i class="fas ${weatherIcon} text-4xl ${weatherClass}"></i>
                <p class="text-3xl font-bold mt-2">${temp}°C</p>
                <p class="text-gray-600 capitalize">${description}</p>
            </div>
            <div class="text-right">
                <p class="text-sm text-gray-600">${translations[currentLanguage].feelsLike}</p>
                <p class="font-bold">${Math.round(weatherData.main.feels_like)}°C</p>
                <p class="text-sm text-gray-600 mt-2">${translations[currentLanguage].humidity}</p>
                <p class="font-bold">${weatherData.main.humidity}%</p>
            </div>
        </div>
    `;
    
    document.getElementById('weatherCardContent').innerHTML = content;
}

// Update weather modal
function updateWeatherModal(weatherData) {
    const temp = Math.round(weatherData.main.temp);
    const condition = weatherData.weather[0].main;
    const description = weatherData.weather[0].description;
    
    let weatherIcon = 'fa-cloud-sun';
    let weatherClass = 'cloudy';
    
    if (condition.includes('Clear') || condition.includes('Sun')) {
        weatherIcon = 'fa-sun';
        weatherClass = 'sunny';
    } else if (condition.includes('Rain')) {
        weatherIcon = 'fa-cloud-rain';
        weatherClass = 'rainy';
    } else if (condition.includes('Cloud')) {
        weatherIcon = 'fa-cloud';
        weatherClass = 'cloudy';
    }
    
    // Convert sunrise/sunset timestamps
    const sunriseTime = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const sunsetTime = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    const content = `
        <div class="text-center mb-6">
            <i class="fas ${weatherIcon} weather-icon-large ${weatherClass}"></i>
            <h4 class="text-2xl font-bold mt-4">${temp}°C</h4>
            <p class="text-gray-600 capitalize">${description}</p>
            <p class="text-sm text-gray-500 mt-2">${weatherData.name}</p>
        </div>
        
        <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-600">${translations[currentLanguage].feelsLike}</p>
                <p class="text-lg font-bold">${Math.round(weatherData.main.feels_like)}°C</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-600">${translations[currentLanguage].humidity}</p>
                <p class="text-lg font-bold">${weatherData.main.humidity}%</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-600">${translations[currentLanguage].windSpeed}</p>
                <p class="text-lg font-bold">${weatherData.wind.speed} km/h</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-600">${translations[currentLanguage].pressure}</p>
                <p class="text-lg font-bold">${weatherData.main.pressure} hPa</p>
            </div>
        </div>
        
        <div class="mt-6 pt-6 border-t">
            <div class="flex justify-between">
                <div class="text-center">
                    <i class="fas fa-sunrise text-yellow-500 text-2xl"></i>
                    <p class="text-sm text-gray-600 mt-2">${translations[currentLanguage].sunrise}</p>
                    <p class="font-bold">${sunriseTime}</p>
                </div>
                <div class="text-center">
                    <i class="fas fa-sunset text-orange-500 text-2xl"></i>
                    <p class="text-sm text-gray-600 mt-2">${translations[currentLanguage].sunset}</p>
                    <p class="font-bold">${sunsetTime}</p>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('weatherModalContent').innerHTML = content;
}

// Load market data
async function loadMarketData() {
    try {
        // Mock market data (replace with actual API)
        const mockMarketData = [
            { crop: 'Wheat', price: '₹2,150', market: 'Mandi Gobindgarh', unit: 'Quintal' },
            { crop: 'Rice', price: '₹1,850', market: 'Khanna', unit: 'Quintal' },
            { crop: 'Cotton', price: '₹6,200', market: 'Sirsa', unit: 'Quintal' },
            { crop: 'Sugarcane', price: '₹340', market: 'Saharanpur', unit: 'Quintal' },
            { crop: 'Mustard', price: '₹5,600', market: 'Sri Ganganagar', unit: 'Quintal' },
            { crop: 'Maize', price: '₹1,650', market: 'Karnal', unit: 'Quintal' },
            { crop: 'Potato', price: '₹900', market: 'Agra', unit: 'Quintal' },
            { crop: 'Soybean', price: '₹4,800', market: 'Nagpur', unit: 'Quintal' }
        ];
        
        updateMarketCard(mockMarketData.slice(0, 3));
        updateMarketModal(mockMarketData);
        
    } catch (error) {
        console.log('Error loading market data:', error);
        
        // Fallback mock data
        const mockMarketData = [
            { crop: 'Wheat', price: '₹2,150', market: 'Local Market', unit: 'Quintal' },
            { crop: 'Rice', price: '₹1,850', market: 'Local Market', unit: 'Quintal' },
            { crop: 'Cotton', price: '₹6,200', market: 'Local Market', unit: 'Quintal' }
        ];
        
        updateMarketCard(mockMarketData);
        updateMarketModal(mockMarketData);
    }
}

// Update market card
function updateMarketCard(marketData) {
    const content = marketData.map(item => `
        <div class="flex justify-between items-center py-2 border-b">
            <div>
                <p class="font-medium">${item.crop}</p>
                <p class="text-sm text-gray-600">${item.market}</p>
            </div>
            <div class="text-right">
                <p class="font-bold text-green-600">${item.price}</p>
                <p class="text-sm text-gray-600">/${item.unit}</p>
            </div>
        </div>
    `).join('');
    
    document.getElementById('marketPricesCard').innerHTML = content;
}

// Update market modal
function updateMarketModal(marketData) {
    const content = `
        <div class="overflow-x-auto">
            <table class="price-table">
                <thead>
                    <tr>
                        <th>${translations[currentLanguage].crop}</th>
                        <th>${translations[currentLanguage].price}</th>
                        <th>${translations[currentLanguage].market}</th>
                        <th>${translations[currentLanguage].unit}</th>
                    </tr>
                </thead>
                <tbody>
                    ${marketData.map(item => `
                        <tr>
                            <td class="font-medium">${item.crop}</td>
                            <td class="font-bold text-green-600">${item.price}</td>
                            <td>${item.market}</td>
                            <td>${item.unit}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        <p class="text-sm text-gray-500 mt-4 text-center">
            Prices updated today at ${new Date().getHours()}:${new Date().getMinutes().toString().padStart(2, '0')}
        </p>
    `;
    
    document.getElementById('marketPricesModalContent').innerHTML = content;
}

// Load seed recommendations
function loadSeedRecommendations() {
    if (!currentUser) return;
    
    const state = currentUser.state;
    const recommendations = translations[currentLanguage].states[state] || ['Wheat', 'Rice', 'Cotton'];
    
    // Update seed card
    const seedTags = document.querySelectorAll('#homePage .rounded-full');
    seedTags.forEach((tag, index) => {
        if (recommendations[index]) {
            tag.textContent = recommendations[index];
        }
    });
    
    // Update seed modal
    updateSeedModal(recommendations);
}

// Update seed modal
function updateSeedModal(recommendations) {
    const content = `
        <div class="mb-6">
            <h4 class="font-bold text-lg mb-3">${translations[currentLanguage].seedRecText}</h4>
            <div class="flex flex-wrap gap-2">
                ${recommendations.map(crop => `
                    <span class="px-4 py-2 bg-green-100 text-green-800 rounded-full">${crop}</span>
                `).join('')}
            </div>
        </div>
        
        <div class="mb-6">
            <h4 class="font-bold text-lg mb-3">${translations[currentLanguage].fertilizerText}</h4>
            <div class="progress-bar">
                <div class="progress-segment organic" style="width: 50%"></div>
                <div class="progress-segment npk" style="width: 25%"></div>
                <div class="progress-segment urea" style="width: 25%"></div>
            </div>
            <div class="flex justify-between text-sm text-gray-600 mt-2">
                <span>50% Organic</span>
                <span>25% NPK</span>
                <span>25% Urea</span>
            </div>
        </div>
        
        <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-bold text-lg mb-2">Farming Tips</h4>
            <ul class="list-disc pl-5 space-y-1">
                <li>Sow seeds 2-3 inches deep for best germination</li>
                <li>Water crops in the early morning or late evening</li>
                <li>Use organic compost to improve soil health</li>
                <li>Rotate crops annually to prevent soil depletion</li>
                <li>Monitor for pests weekly and take preventive measures</li>
            </ul>
        </div>
    `;
    
    document.getElementById('seedModalContent').innerHTML = content;
}

// Modal functions
function openWeatherModal() {
    document.getElementById('weatherModal').classList.add('active');
    if (userLocation) {
        loadWeatherData(userLocation.lat, userLocation.lon);
    }
}

function openMarketPricesModal() {
    document.getElementById('marketPricesModal').classList.add('active');
    loadMarketData();
}

function openSeedModal() {
    document.getElementById('seedModal').classList.add('active');
    loadSeedRecommendations();
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Show error
function showError(elementId, message) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.classList.remove('hidden');
    
    // Auto hide after 3 seconds
    setTimeout(() => {
        element.classList.add('hidden');
    }, 3000);
}

// Show toast notification
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `fixed top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg ${
        type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 
        type === 'error' ? 'bg-red-100 text-red-800 border border-red-200' :
        'bg-blue-100 text-blue-800 border border-blue-200'
    }`;
    
    toast.innerHTML = `
        <div class="flex items-center">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} mr-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Handle logout
function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        currentUser = null;
        localStorage.removeItem('agrifarmers_user');
        showPage('welcomePage');
        showToast('Logged out successfully', 'success');
    }
}

// Change language
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update current language display
    document.getElementById('currentLanguage').textContent = 
        lang === 'en' ? 'English' : lang === 'hi' ? 'हिंदी' : 'ਪੰਜਾਬੀ';
    
    // Close language dropdown
    document.getElementById('languageDropdown').classList.add('hidden');
    
    // Update all translatable elements
    updateLanguage();
    
    // Save language preference
    localStorage.setItem('agrifarmers_language', lang);
    
    showToast('Language changed', 'success');
}

// Update language for all elements
function updateLanguage() {
    const t = translations[currentLanguage];
    
    // Update all elements with IDs
    Object.keys(t).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (key.includes('Text') || key.includes('Title') || key.includes('Label') || 
                key.includes('Btn') || key.includes('Desc')) {
                element.textContent = t[key];
            }
        }
    });
    
    // Update date
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').textContent = 
        date.toLocaleDateString(currentLanguage === 'en' ? 'en-US' : 'hi-IN', options);
    
    // Update OTP inputs
    initOTPInputs();
    
    // Update seed recommendations if user is logged in
    if (currentUser) {
        loadSeedRecommendations();
    }
}

// Load saved language preference
window.addEventListener('load', () => {
    const savedLang = localStorage.getItem('agrifarmers_language') || 'en';
    changeLanguage(savedLang);
});

// Make functions globally available
window.showPage = showPage;
window.handleLogin = handleLogin;
window.handleSignUp = handleSignUp;
window.verifyOTP = verifyOTP;
window.resendOTP = resendOTP;
window.openWeatherModal = openWeatherModal;
window.openMarketPricesModal = openMarketPricesModal;
window.openSeedModal = openSeedModal;
window.closeModal = closeModal;
window.handleLogout = handleLogout;
window.changeLanguage = changeLanguage;
