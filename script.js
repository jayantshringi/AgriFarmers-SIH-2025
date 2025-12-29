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
        logoutBtn: 'Logout',
        
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
        logoutBtn: 'लॉगआउट',
        
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
        logoutBtn: 'ਲਾਗਆਊਟ',
        
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

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌱 AgriFarmers Initializing...');
    
    // Immediately hide loading screen
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('app').style.display = 'block';
    
    // Initialize PWA
    initPWA();
    
    // Initialize features slider
    initFeaturesSlider();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize app
    initApp();
    
    // Load saved language preference
    const savedLang = localStorage.getItem('agrifarmers_language') || 'en';
    changeLanguage(savedLang);
});

// Initialize PWA
function initPWA() {
    // PWA Installation
    window.addEventListener('beforeinstallprompt', (e) => {
        console.log('✅ PWA install prompt available');
        e.preventDefault();
        deferredPrompt = e;
        const installButton = document.getElementById('pwa-install-button');
        installButton.style.display = 'flex';
        
        // Auto-show prompt after 5 seconds if not shown before
        if (!localStorage.getItem('pwaPromptShown')) {
            setTimeout(() => {
                if (deferredPrompt) {
                    showInstallPrompt();
                    localStorage.setItem('pwaPromptShown', 'true');
                }
            }, 5000);
        }
        
        installButton.addEventListener('click', () => {
            showInstallPrompt();
        });
    });
    
    // Check if already installed
    window.addEventListener('appinstalled', () => {
        console.log('🎉 PWA was installed');
        document.getElementById('pwa-install-button').style.display = 'none';
        localStorage.setItem('pwaInstalled', 'true');
    });
    
    if (window.matchMedia('(display-mode: standalone)').matches) {
        document.getElementById('pwa-install-button').style.display = 'none';
    }
    
    // Register Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/AgriFarmers-SIH-2025/service-worker.js')
            .then(registration => {
                console.log('✅ Service Worker registered:', registration.scope);
            })
            .catch(error => {
                console.log('❌ Service Worker failed:', error);
                // Try without path
                navigator.serviceWorker.register('service-worker.js')
                    .then(reg => console.log('✅ Service Worker registered (fallback):', reg.scope))
                    .catch(err => console.log('❌ Service Worker completely failed:', err));
            });
    }
}

function showInstallPrompt() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('✅ User installed the PWA');
                document.getElementById('pwa-install-button').innerHTML = '<i class="fas fa-check"></i> <span>Installed!</span>';
                document.getElementById('pwa-install-button').style.background = '#10b981';
                setTimeout(() => {
                    document.getElementById('pwa-install-button').style.display = 'none';
                }, 2000);
            }
            deferredPrompt = null;
        });
    }
}

// Initialize features slider
function initFeaturesSlider() {
    const slider = document.getElementById('featuresSlider');
    const dots = document.querySelectorAll('.scroll-dot');
    
    if (!slider) return;
    
    // Auto slide every 5 seconds
    setInterval(() => {
        if (!slider) return;
        const scrollAmount = slider.scrollLeft + slider.clientWidth;
        if (scrollAmount >= slider.scrollWidth) {
            slider.scrollLeft = 0;
        } else {
            slider.scrollLeft = scrollAmount;
        }
        updateDots();
    }, 5000);
    
    // Update dots on scroll
    slider.addEventListener('scroll', updateDots);
    
    // Dot click events
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            slider.scrollLeft = index * slider.clientWidth;
            updateDots();
        });
    });
    
    function updateDots() {
        const slideIndex = Math.round(slider.scrollLeft / slider.clientWidth);
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === slideIndex);
        });
    }
}

// Setup event listeners
function setupEventListeners() {
    // Language selector
    const languageButton = document.getElementById('languageButton');
    const languageDropdown = document.getElementById('languageDropdown');
    
    if (languageButton && languageDropdown) {
        languageButton.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('hidden');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!languageButton.contains(event.target) && !languageDropdown.contains(event.target)) {
                languageDropdown.classList.add('hidden');
            }
        });
    }
    
    // State change listener
    const stateSelect = document.getElementById('signUpState');
    if (stateSelect) {
        stateSelect.addEventListener('change', function() {
            const state = this.value;
            const districtSelect = document.getElementById('signUpDistrict');
            const districts = {
                Punjab: ['Amritsar', 'Ludhiana', 'Jalandhar', 'Patiala', 'Bathinda'],
                Haryana: ['Faridabad', 'Gurgaon', 'Hisar', 'Rohtak', 'Karnal'],
                Rajasthan: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer'],
                'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Allahabad'],
                Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad']
            };
            
            districtSelect.innerHTML = `<option value="">${translations[currentLanguage].selectDistrict}</option>`;
            
            if (state && districts[state]) {
                districts[state].forEach(district => {
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
}

// Initialize app
function initApp() {
    // Set current date
    updateDate();
    
    // Check if user is already logged in
    const savedUser = localStorage.getItem('agrifarmers_user');
    if (savedUser) {
        try {
            currentUser = JSON.parse(savedUser);
            showPage('homePage');
            updateUserInfo();
            loadDashboardData();
            
            // Show logout button
            const logoutBtn = document.getElementById('logoutButton');
            if (logoutBtn) {
                logoutBtn.classList.remove('hidden');
            }
        } catch (e) {
            console.log('Error parsing saved user:', e);
        }
    }
    
    // Initialize OTP inputs
    initOTPInputs();
}

function updateDate() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        dateElement.textContent = date.toLocaleDateString(currentLanguage === 'en' ? 'en-US' : 'hi-IN', options);
    }
}

// Page navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    const pageElement = document.getElementById(pageId);
    if (pageElement) {
        pageElement.classList.add('active');
    }
    
    if (pageId === 'homePage') {
        updateUserInfo();
        loadDashboardData();
        
        // Show logout button
        const logoutBtn = document.getElementById('logoutButton');
        if (logoutBtn) {
            logoutBtn.classList.remove('hidden');
        }
    } else {
        // Hide logout button on other pages
        const logoutBtn = document.getElementById('logoutButton');
        if (logoutBtn) {
            logoutBtn.classList.add('hidden');
        }
    }
}

// Initialize OTP inputs
function initOTPInputs() {
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
    const mobile = document.getElementById('loginMobile')?.value;
    
    if (!mobile || mobile.length !== 10 || !/^\d+$/.test(mobile)) {
        showToast('Please enter a valid 10-digit mobile number', 'error');
        return;
    }
    
    // Show OTP page
    const otpNumber = document.getElementById('otpPhoneNumber');
    if (otpNumber) {
        otpNumber.textContent = `+91 ${mobile}`;
    }
    showPage('otpPage');
    startOTPTimer();
    showToast('OTP sent to your mobile number', 'success');
}

// Handle sign up
function handleSignUp() {
    const name = document.getElementById('signUpName')?.value;
    const mobile = document.getElementById('signUpMobile')?.value;
    const state = document.getElementById('signUpState')?.value;
    const district = document.getElementById('signUpDistrict')?.value;
    
    if (!name || name.length < 2) {
        showToast('Please enter a valid name', 'error');
        return;
    }
    
    if (!mobile || mobile.length !== 10 || !/^\d+$/.test(mobile)) {
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
    
    // Save user data
    currentUser = {
        name: name,
        mobile: mobile,
        state: state,
        district: district,
        location: null
    };
    
    localStorage.setItem('agrifarmers_user', JSON.stringify(currentUser));
    
    const otpNumber = document.getElementById('otpPhoneNumber');
    if (otpNumber) {
        otpNumber.textContent = `+91 ${mobile}`;
    }
    showPage('otpPage');
    startOTPTimer();
    showToast('Account created successfully! OTP sent.', 'success');
}

// Start OTP timer
function startOTPTimer() {
    let timeLeft = 120;
    clearInterval(otpTimer);
    
    otpTimer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        const timerElement = document.getElementById('otpTimer');
        
        if (timerElement) {
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        
        if (timeLeft <= 0) {
            clearInterval(otpTimer);
        }
        timeLeft--;
    }, 1000);
}

// Verify OTP
function verifyOTP() {
    const otpInputs = document.querySelectorAll('.otp-digit');
    let enteredOTP = '';
    otpInputs.forEach(input => {
        enteredOTP += input.value || '';
    });
    
    // Demo OTP: 123456
    if (enteredOTP === '123456') {
        clearInterval(otpTimer);
        updateUserInfo();
        getUserLocation();
        showPage('homePage');
        showToast('Login successful!', 'success');
    } else {
        showToast('Invalid OTP. Please try 123456 for demo.', 'error');
    }
}

// Resend OTP
function resendOTP() {
    startOTPTimer();
    showToast('New OTP sent to your mobile', 'success');
}

// Update user info
function updateUserInfo() {
    if (!currentUser) return;
    
    const farmerName = document.getElementById('farmerName');
    const farmerLocation = document.getElementById('farmerLocation');
    
    if (farmerName) farmerName.textContent = currentUser.name;
    if (farmerLocation) {
        farmerLocation.textContent = `${currentUser.district}, ${currentUser.state}`;
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
                
                if (currentUser) {
                    currentUser.location = userLocation;
                    localStorage.setItem('agrifarmers_user', JSON.stringify(currentUser));
                }
                
                loadWeatherData(userLocation.lat, userLocation.lon);
            },
            () => {
                // Use default location (Delhi)
                userLocation = { lat: 28.6139, lon: 77.2090 };
                loadWeatherData(userLocation.lat, userLocation.lon);
                
                const farmerLocation = document.getElementById('farmerLocation');
                if (farmerLocation && currentUser) {
                    farmerLocation.textContent = `${currentUser.district}, ${currentUser.state}`;
                }
            }
        );
    } else {
        userLocation = { lat: 28.6139, lon: 77.2090 };
        loadWeatherData(userLocation.lat, userLocation.lon);
    }
    
    loadMarketData();
    loadSeedRecommendations();
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

// Load weather data
async function loadWeatherData(lat, lon) {
    try {
        // Try OpenWeatherMap API
        const apiKey = 'b6907d289e10d714a6e88b30761fae22'; // Free test API key
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
        
        if (response.ok) {
            const data = await response.json();
            updateWeatherCard(data);
            updateWeatherModal(data);
        } else {
            throw new Error('Weather API failed');
        }
    } catch (error) {
        // Fallback to mock data
        const mockWeather = {
            main: {
                temp: 28,
                feels_like: 30,
                humidity: 65,
                pressure: 1013
            },
            weather: [{ description: 'Partly cloudy', main: 'Clouds' }],
            wind: { speed: 12 },
            sys: { sunrise: 1670479200, sunset: 1670515200 },
            name: currentUser?.district || 'Location'
        };
        
        updateWeatherCard(mockWeather);
        updateWeatherModal(mockWeather);
    }
}

// Update weather card
function updateWeatherCard(weatherData) {
    const content = document.getElementById('weatherCardContent');
    if (!content) return;
    
    const temp = Math.round(weatherData.main.temp);
    const condition = weatherData.weather[0].main;
    
    let icon = 'fa-cloud';
    if (condition.includes('Clear')) icon = 'fa-sun';
    if (condition.includes('Rain')) icon = 'fa-cloud-rain';
    
    content.innerHTML = `
        <div class="flex items-center justify-between">
            <div>
                <i class="fas ${icon} text-4xl text-blue-500"></i>
                <p class="text-3xl font-bold mt-2">${temp}°C</p>
                <p class="text-gray-600 capitalize">${weatherData.weather[0].description}</p>
            </div>
            <div class="text-right">
                <p class="text-sm text-gray-600">Humidity</p>
                <p class="font-bold">${weatherData.main.humidity}%</p>
                <p class="text-sm text-gray-600 mt-2">Wind</p>
                <p class="font-bold">${weatherData.wind.speed} km/h</p>
            </div>
        </div>
    `;
}

// Update weather modal
function updateWeatherModal(weatherData) {
    const content = document.getElementById('weatherModalContent');
    if (!content) return;
    
    const temp = Math.round(weatherData.main.temp);
    const sunrise = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();
    
    content.innerHTML = `
        <div class="text-center mb-6">
            <i class="fas fa-cloud-sun text-6xl text-blue-500 mb-4"></i>
            <h4 class="text-2xl font-bold">${temp}°C</h4>
            <p class="text-gray-600">${weatherData.weather[0].description}</p>
            <p class="text-sm text-gray-500 mt-2">${weatherData.name}</p>
        </div>
        
        <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-600">Feels Like</p>
                <p class="text-lg font-bold">${Math.round(weatherData.main.feels_like)}°C</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-600">Humidity</p>
                <p class="text-lg font-bold">${weatherData.main.humidity}%</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-600">Wind Speed</p>
                <p class="text-lg font-bold">${weatherData.wind.speed} km/h</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-600">Pressure</p>
                <p class="text-lg font-bold">${weatherData.main.pressure} hPa</p>
            </div>
        </div>
        
        <div class="mt-6 pt-6 border-t">
            <div class="flex justify-between">
                <div class="text-center">
                    <i class="fas fa-sunrise text-yellow-500 text-2xl"></i>
                    <p class="text-sm text-gray-600 mt-2">Sunrise</p>
                    <p class="font-bold">${sunrise}</p>
                </div>
                <div class="text-center">
                    <i class="fas fa-sunset text-orange-500 text-2xl"></i>
                    <p class="text-sm text-gray-600 mt-2">Sunset</p>
                    <p class="font-bold">${sunset}</p>
                </div>
            </div>
        </div>
    `;
}

// Load market data
async function loadMarketData() {
    try {
        // Try to get real market data
        const response = await fetch('https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&limit=10');
        
        if (response.ok) {
            const data = await response.json();
            const records = data.records || [];
            
            if (records.length > 0) {
                updateMarketCard(records.slice(0, 3));
                updateMarketModal(records);
            } else {
                throw new Error('No market data');
            }
        } else {
            throw new Error('Market API failed');
        }
    } catch (error) {
        // Fallback to mock data
        const mockData = [
            { commodity: 'Wheat', modal_price: '2150', market: 'Mandi Gobindgarh', state: 'Punjab' },
            { commodity: 'Rice', modal_price: '1850', market: 'Khanna', state: 'Punjab' },
            { commodity: 'Cotton', modal_price: '6200', market: 'Sirsa', state: 'Haryana' }
        ];
        
        updateMarketCard(mockData);
        updateMarketModal(mockData);
    }
}

// Update market card
function updateMarketCard(marketData) {
    const content = document.getElementById('marketPricesCard');
    if (!content) return;
    
    const items = marketData.slice(0, 3).map(item => `
        <div class="flex justify-between items-center py-2 border-b">
            <div>
                <p class="font-medium">${item.commodity || item.crop}</p>
                <p class="text-sm text-gray-600">${item.market}</p>
            </div>
            <div class="text-right">
                <p class="font-bold text-green-600">₹${item.modal_price || item.price}</p>
                <p class="text-sm text-gray-600">/Quintal</p>
            </div>
        </div>
    `).join('');
    
    content.innerHTML = items;
}

// Update market modal
function updateMarketModal(marketData) {
    const content = document.getElementById('marketPricesModalContent');
    if (!content) return;
    
    const rows = marketData.map(item => `
        <tr>
            <td class="font-medium">${item.commodity || item.crop}</td>
            <td class="font-bold text-green-600">₹${item.modal_price || item.price}</td>
            <td>${item.market}</td>
            <td>${item.state || 'India'}</td>
        </tr>
    `).join('');
    
    content.innerHTML = `
        <div class="overflow-x-auto">
            <table class="min-w-full">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="py-2 px-4 text-left">Crop</th>
                        <th class="py-2 px-4 text-left">Price</th>
                        <th class="py-2 px-4 text-left">Market</th>
                        <th class="py-2 px-4 text-left">State</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        </div>
    `;
}

// Load seed recommendations
function loadSeedRecommendations() {
    if (!currentUser) return;
    
    const state = currentUser.state;
    const crops = translations[currentLanguage].states[state] || ['Wheat', 'Rice', 'Cotton'];
    
    // Update home page seed tags
    const seedTags = document.querySelectorAll('#homePage .rounded-full');
    seedTags.forEach((tag, index) => {
        if (crops[index]) {
            tag.textContent = crops[index];
        }
    });
    
    // Update seed modal
    updateSeedModal(crops);
}

// Update seed modal
function updateSeedModal(crops) {
    const content = document.getElementById('seedModalContent');
    if (!content) return;
    
    content.innerHTML = `
        <div class="mb-6">
            <h4 class="font-bold text-lg mb-3">${translations[currentLanguage].seedRecText}</h4>
            <div class="flex flex-wrap gap-2">
                ${crops.map(crop => `
                    <span class="px-4 py-2 bg-green-100 text-green-800 rounded-full">${crop}</span>
                `).join('')}
            </div>
        </div>
        
        <div class="mb-6">
            <h4 class="font-bold text-lg mb-3">${translations[currentLanguage].fertilizerText}</h4>
            <div class="w-full h-6 bg-gray-200 rounded-full overflow-hidden flex">
                <div class="h-full bg-green-500" style="width: 50%"></div>
                <div class="h-full bg-blue-500" style="width: 25%"></div>
                <div class="h-full bg-purple-500" style="width: 25%"></div>
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
                <li>Water crops in early morning or late evening</li>
                <li>Use organic compost to improve soil health</li>
                <li>Monitor for pests weekly</li>
                <li>Rotate crops annually</li>
            </ul>
        </div>
    `;
}

// Modal functions
function openWeatherModal() {
    document.getElementById('weatherModal').classList.add('active');
}

function openMarketPricesModal() {
    document.getElementById('marketPricesModal').classList.add('active');
}

function openSeedModal() {
    document.getElementById('seedModal').classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Show toast notification
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `fixed top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg transform transition-transform duration-300 ${
        type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 
        'bg-red-100 text-red-800 border border-red-200'
    }`;
    
    toast.innerHTML = `
        <div class="flex items-center">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} mr-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Handle logout
function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        currentUser = null;
        localStorage.removeItem('agrifarmers_user');
        showPage('welcomePage');
        showToast('Logged out successfully', 'success');
        
        // Hide logout button
        const logoutBtn = document.getElementById('logoutButton');
        if (logoutBtn) {
            logoutBtn.classList.add('hidden');
        }
    }
}

// Change language
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update current language display
    const currentLanguageElement = document.getElementById('currentLanguage');
    if (currentLanguageElement) {
        currentLanguageElement.textContent = lang === 'en' ? 'English' : lang === 'hi' ? 'हिंदी' : 'ਪੰਜਾਬੀ';
    }
    
    // Update all translatable elements
    const t = translations[lang];
    
    // Update elements by ID
    Object.keys(t).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = t[key];
        }
    });
    
    // Update date
    updateDate();
    
    // Update OTP inputs
    initOTPInputs();
    
    // Update seed recommendations if user is logged in
    if (currentUser) {
        loadSeedRecommendations();
    }
    
    // Save language preference
    localStorage.setItem('agrifarmers_language', lang);
    
    // Close language dropdown
    const languageDropdown = document.getElementById('languageDropdown');
    if (languageDropdown) {
        languageDropdown.classList.add('hidden');
    }
    
    showToast('Language changed to ' + (lang === 'en' ? 'English' : lang === 'hi' ? 'Hindi' : 'Punjabi'), 'success');
}

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
