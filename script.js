// Configuration
const CONFIG = {
    WEATHER_API_KEY: '44a55de0f2e0674cb9160f50459d51d4', 
    GITHUB_PAGES: true,
    REPO_NAME: 'AgriFarmers-SIH-2025',
    DEMO_OTP: '123456'
};

// App State
let deferredPrompt = null;
let userLocation = null;
let currentUser = null;
let otpTimer = null;
let currentLanguage = 'en';
let districtData = {
    'Haryana': ['Ambala', 'Bhiwani', 'Faridabad', 'Fatehabad', 'Gurugram', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Mahendragarh', 'Nuh', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'],
    'Punjab': ['Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh Sahib', 'Fazilka', 'Ferozepur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Mansa', 'Moga', 'Pathankot', 'Patiala', 'Rupnagar', 'Sangrur', 'SAS Nagar', 'Tarn Taran'],
    'Rajasthan': ['Ajmer', 'Alwar', 'Banswara', 'Baran', 'Barmer', 'Bharatpur', 'Bhilwara', 'Bikaner', 'Bundi', 'Chittorgarh', 'Churu', 'Dausa', 'Dholpur', 'Dungarpur', 'Hanumangarh', 'Jaipur', 'Jaisalmer', 'Jalore', 'Jhalawar', 'Jhunjhunu', 'Jodhpur', 'Karauli', 'Kota', 'Nagaur', 'Pali', 'Pratapgarh', 'Rajsamand', 'Sawai Madhopur', 'Sikar', 'Sirohi', 'Sri Ganganagar', 'Tonk', 'Udaipur'],
    'Uttar Pradesh': ['Agra', 'Aligarh', 'Allahabad', 'Ambedkar Nagar', 'Amethi', 'Amroha', 'Auraiya', 'Azamgarh', 'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 'Banda', 'Barabanki', 'Bareilly', 'Basti', 'Bhadohi', 'Bijnor', 'Budaun', 'Bulandshahr', 'Chandauli', 'Chitrakoot', 'Deoria', 'Etah', 'Etawah', 'Faizabad', 'Farrukhabad', 'Fatehpur', 'Firozabad', 'Gautam Buddha Nagar', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hapur', 'Hardoi', 'Hathras', 'Jalaun', 'Jaunpur', 'Jhansi', 'Kannauj', 'Kanpur Dehat', 'Kanpur Nagar', 'Kasganj', 'Kaushambi', 'Kushinagar', 'Lakhimpur Kheri', 'Lalitpur', 'Lucknow', 'Maharajganj', 'Mahoba', 'Mainpuri', 'Mathura', 'Mau', 'Meerut', 'Mirzapur', 'Moradabad', 'Muzaffarnagar', 'Pilibhit', 'Pratapgarh', 'Rae Bareli', 'Rampur', 'Saharanpur', 'Sambhal', 'Sant Kabir Nagar', 'Shahjahanpur', 'Shamli', 'Shravasti', 'Siddharthnagar', 'Sitapur', 'Sonbhadra', 'Sultanpur', 'Unnao', 'Varanasi'],
    'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Aurangabad', 'Solapur', 'Kolhapur', 'Amravati', 'Nanded']
};

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
        'install_app': 'Install App',
        'location_permission': 'Allow location access for accurate weather',
        'location_denied': 'Location permission denied',
        'weather_error': 'Failed to fetch weather data',
        'market_error': 'Failed to fetch market prices',
        'success': 'Success',
        'error': 'Error',
        'info': 'Info'
    },
    
    hi: {
        // Header
        'app_name': 'एग्रीफार्मर्स',
        'logout': 'लॉगआउट',
        
        // Welcome Page
        'welcome_title': 'एग्रीफार्मर्स में आपका स्वागत है',
        'welcome_subtitle': 'आधुनिक खेती के लिए आपका विश्वसनीय साथी',
        'smart_location': 'स्मार्ट लोकेशन',
        'location_desc': 'स्थान-आधारित मौसम और कृषि सलाह प्राप्त करें',
        'live_weather': 'लाइव मौसम',
        'weather_desc': 'सटीक मौसम पूर्वानुमान और कृषि अलर्ट',
        'market_prices': 'बाजार मूल्य',
        'market_desc': 'रियल-टाइम फसल मूल्य और बाजार रुझान',
        'get_started': 'शुरू करें',
        'no_account': 'खाता नहीं है?',
        'sign_up': 'साइन अप करें',
        
        // Login Page
        'login_title': 'एग्रीफार्मर्स में लॉगिन करें',
        'mobile_number': 'मोबाइल नंबर',
        'enter_mobile': '10 अंकों का मोबाइल नंबर दर्ज करें',
        'send_otp': 'OTP भेजें',
        'have_account': 'पहले से खाता है?',
        'login': 'लॉगिन',
        
        // Sign Up Page
        'signup_title': 'खाता बनाएं',
        'full_name': 'पूरा नाम',
        'enter_name': 'अपना पूरा नाम दर्ज करें',
        'state': 'राज्य',
        'select_state': 'राज्य चुनें',
        'district': 'जिला',
        'select_district': 'जिला चुनें',
        
        // OTP Page
        'otp_title': 'OTP सत्यापन',
        'otp_sent': 'OTP भेजा गया',
        'demo_otp': 'डेमो OTP:',
        'otp_timer': 'OTP वैध है',
        'minutes': 'मिनट',
        'verify_otp': 'OTP सत्यापित करें',
        'resend_otp': 'OTP पुनः भेजें',
        'back_login': 'लॉगिन पर वापस',
        
        // Home Page
        'hello': 'नमस्ते',
        'today': 'आज',
        'dashboard': 'आपका कृषि डैशबोर्ड',
        'weather_forecast': 'मौसम पूर्वानुमान',
        'seed_recommendations': 'बीज सिफारिशें',
        'seed_desc': 'आपके क्षेत्र के लिए सर्वोत्तम बीज',
        'farming_tips': 'आज की कृषि सलाह',
        'default_tip': 'कृषि गतिविधियों के लिए अच्छा मौसम। सिंचाई और उर्वरक के लिए आदर्श।',
        
        // Common
        'rights_reserved': 'सर्वाधिकार सुरक्षित',
        'install_app': 'ऐप इंस्टॉल करें',
        'location_permission': 'सटीक मौसम के लिए लोकेशन एक्सेस दें',
        'location_denied': 'लोकेशन अनुमति अस्वीकृत',
        'weather_error': 'मौसम डेटा प्राप्त करने में विफल',
        'market_error': 'बाजार मूल्य प्राप्त करने में विफल',
        'success': 'सफलता',
        'error': 'त्रुटि',
        'info': 'जानकारी'
    },
    
    pa: {
        // Header
        'app_name': 'ਐਗਰੀਫਾਰਮਰਸ',
        'logout': 'ਲਾੱਗ ਆਊਟ',
        
        // Welcome Page
        'welcome_title': 'ਐਗਰੀਫਾਰਮਰਸ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ',
        'welcome_subtitle': 'ਆਧੁਨਿਕ ਖੇਤੀ ਲਈ ਤੁਹਾਡਾ ਭਰੋਸੇਮੰਦ ਸਾਥੀ',
        'smart_location': 'ਸਮਾਰਟ ਲੋਕੇਸ਼ਨ',
        'location_desc': 'ਸਥਾਨ-ਅਧਾਰਿਤ ਮੌਸਮ ਅਤੇ ਖੇਤੀ ਸਲਾਹ ਪ੍ਰਾਪਤ ਕਰੋ',
        'live_weather': 'ਲਾਈਵ ਮੌਸਮ',
        'weather_desc': 'ਸਟੀਕ ਮੌਸਮ ਪੂਰਵ-ਅਨੁਮਾਨ ਅਤੇ ਖੇਤੀ ਅਲਰਟ',
        'market_prices': 'ਬਾਜ਼ਾਰ ਮੁੱਲ',
        'market_desc': 'ਰੀਅਲ-ਟਾਈਮ ਫਸਲ ਮੁੱਲ ਅਤੇ ਬਾਜ਼ਾਰ ਰੁਝਾਨ',
        'get_started': 'ਸ਼ੁਰੂ ਕਰੋ',
        'no_account': 'ਖਾਤਾ ਨਹੀਂ ਹੈ?',
        'sign_up': 'ਸਾਈਨ ਅੱਪ ਕਰੋ',
        
        // Login Page
        'login_title': 'ਐਗਰੀਫਾਰਮਰਸ ਵਿੱਚ ਲਾਗਿਨ ਕਰੋ',
        'mobile_number': 'ਮੋਬਾਈਲ ਨੰਬਰ',
        'enter_mobile': '10 ਅੰਕਾਂ ਦਾ ਮੋਬਾਈਲ ਨੰਬਰ ਦਾਖਲ ਕਰੋ',
        'send_otp': 'OTP ਭੇਜੋ',
        'have_account': 'ਪਹਿਲਾਂ ਤੋਂ ਖਾਤਾ ਹੈ?',
        'login': 'ਲਾਗਿਨ',
        
        // Sign Up Page
        'signup_title': 'ਖਾਤਾ ਬਣਾਓ',
        'full_name': 'ਪੂਰਾ ਨਾਮ',
        'enter_name': 'ਆਪਣਾ ਪੂਰਾ ਨਾਮ ਦਾਖਲ ਕਰੋ',
        'state': 'ਰਾਜ',
        'select_state': 'ਰਾਜ ਚੁਣੋ',
        'district': 'ਜ਼ਿਲ੍ਹਾ',
        'select_district': 'ਜ਼ਿਲ੍ਹਾ ਚੁਣੋ',
        
        // OTP Page
        'otp_title': 'OTP ਪੁਸ਼ਟੀਕਰਨ',
        'otp_sent': 'OTP ਭੇਜਿਆ ਗਿਆ',
        'demo_otp': 'ਡੈਮੋ OTP:',
        'otp_timer': 'OTP ਵੈਧ ਹੈ',
        'minutes': 'ਮਿੰਟ',
        'verify_otp': 'OTP ਪੁਸ਼ਟੀ ਕਰੋ',
        'resend_otp': 'OTP ਦੁਬਾਰਾ ਭੇਜੋ',
        'back_login': 'ਲਾਗਿਨ ਤੇ ਵਾਪਸ',
        
        // Home Page
        'hello': 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ',
        'today': 'ਅੱਜ',
        'dashboard': 'ਤੁਹਾਡਾ ਖੇਤੀ ਡੈਸ਼ਬੋਰਡ',
        'weather_forecast': 'ਮੌਸਮ ਪੂਰਵ-ਅਨੁਮਾਨ',
        'seed_recommendations': 'ਬੀਜ ਸਿਫਾਰਿਸ਼ਾਂ',
        'seed_desc': 'ਤੁਹਾਡੇ ਖੇਤਰ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਬੀਜ',
        'farming_tips': 'ਅੱਜ ਦੀ ਖੇਤੀ ਸਲਾਹ',
        'default_tip': 'ਖੇਤੀ ਗਤੀਵਿਧੀਆਂ ਲਈ ਚੰਗਾ ਮੌਸਮ। ਸਿੰਜਾਈ ਅਤੇ ਖਾਦ ਲਈ ਆਦਰਸ਼।',
        
        // Common
        'rights_reserved': 'ਸਾਰੇ ਅਧਿਕਾਰ ਸੁਰੱਖਿਅਤ',
        'install_app': 'ਐਪ ਇੰਸਟਾਲ ਕਰੋ',
        'location_permission': 'ਸਟੀਕ ਮੌਸਮ ਲਈ ਟਿਕਾਣਾ ਪਹੁੰਚ ਦਿਓ',
        'location_denied': 'ਟਿਕਾਣਾ ਇਜਾਜ਼ਤ ਨਾਮਨਜ਼ੂਰ',
        'weather_error': 'ਮੌਸਮ ਡੇਟਾ ਪ੍ਰਾਪਤ ਕਰਨ ਵਿੱਚ ਅਸਫਲ',
        'market_error': 'ਬਾਜ਼ਾਰ ਮੁੱਲ ਪ੍ਰਾਪਤ ਕਰਨ ਵਿੱਚ ਅਸਫਲ',
        'success': 'ਸਫਲਤਾ',
        'error': 'ਗਲਤੀ',
        'info': 'ਜਾਣਕਾਰੀ'
    }
};

// DOM Elements
const elements = {
    loadingScreen: document.getElementById('loadingScreen'),
    app: document.getElementById('app'),
    pwaInstallButton: document.getElementById('pwa-install-button'),
    toastContainer: document.getElementById('toastContainer'),
    farmerLocation: document.getElementById('farmerLocation'),
    farmerName: document.getElementById('farmerName'),
    weatherCardContent: document.getElementById('weatherCardContent'),
    marketPricesCard: document.getElementById('marketPricesCard'),
    currentDate: document.getElementById('currentDate'),
    logoutButton: document.getElementById('logoutButton'),
    languageButton: document.getElementById('languageButton'),
    languageDropdown: document.getElementById('languageDropdown'),
    currentLanguage: document.getElementById('currentLanguage'),
    otpPhoneNumber: document.getElementById('otpPhoneNumber'),
    signUpState: document.getElementById('signUpState'),
    signUpDistrict: document.getElementById('signUpDistrict'),
    loginMobile: document.getElementById('loginMobile'),
    signUpName: document.getElementById('signUpName'),
    signUpMobile: document.getElementById('signUpMobile')
};

// Initialize App
function initApp() {
    console.log('Initializing AgriFarmers App...');
    
    // Load saved user and language
    loadSavedData();
    
    // Set current date
    updateCurrentDate();
    
    // Initialize PWA
    initPWA();
    
    // Initialize language selector
    initLanguageSelector();
    
    // Initialize state-district mapping
    initStateDistrict();
    
    // Show app after loading
    setTimeout(() => {
        elements.loadingScreen.style.display = 'none';
        elements.app.style.display = 'block';
        
        // Check if user is already logged in
        if (currentUser) {
            showPage('homePage');
            updateUserInfo();
        } else {
            showPage('welcomePage');
        }
    }, 1000);
}

// Load saved data from localStorage
function loadSavedData() {
    // Load user data
    const savedUser = localStorage.getItem('agrifarmers_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
    }
    
    // Load language
    const savedLang = localStorage.getItem('agrifarmers_language');
    if (savedLang && translations[savedLang]) {
        currentLanguage = savedLang;
    }
    
    // Apply language
    changeLanguage(currentLanguage, false);
}

// Save data to localStorage
function saveData() {
    if (currentUser) {
        localStorage.setItem('agrifarmers_user', JSON.stringify(currentUser));
    }
    localStorage.setItem('agrifarmers_language', currentLanguage);
}

// Update current date
function updateCurrentDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    elements.currentDate.textContent = now.toLocaleDateString(currentLanguage === 'hi' ? 'hi-IN' : 
                                                              currentLanguage === 'pa' ? 'pa-IN' : 'en-IN', options);
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
        
        // Update header based on page
        updateHeader(pageId);
        
        // If home page, fetch data
        if (pageId === 'homePage') {
            updateUserInfo();
            getUserLocation();
        }
        
        // If OTP page, setup OTP inputs
        if (pageId === 'otpPage') {
            setupOTPInputs();
        }
    }
}

// Update header
function updateHeader(pageId) {
    if (currentUser) {
        elements.logoutButton.classList.remove('hidden');
        elements.currentLanguage.textContent = currentLanguage === 'en' ? 'English' : 
                                              currentLanguage === 'hi' ? 'हिंदी' : 'ਪੰਜਾਬੀ';
    } else {
        elements.logoutButton.classList.add('hidden');
    }
}

// Update user info on home page
function updateUserInfo() {
    if (currentUser) {
        elements.farmerName.textContent = currentUser.name;
        document.querySelector('#welcomeText').textContent = 
            currentLanguage === 'en' ? 'Hello' : 
            currentLanguage === 'hi' ? 'नमस्ते' : 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ';
    }
}

// Login handler
function handleLogin() {
    const mobile = elements.loginMobile.value.trim();
    
    // Validate mobile
    if (!mobile || mobile.length !== 10 || !/^\d+$/.test(mobile)) {
        showError('loginMobileError', 'Please enter a valid 10-digit mobile number');
        return;
    }
    
    // Store mobile for OTP
    localStorage.setItem('temp_mobile', mobile);
    elements.otpPhoneNumber.textContent = `+91 ${mobile}`;
    
    // Show OTP page
    showPage('otpPage');
    startOTPTimer();
    showToast('OTP sent to your mobile number', 'success');
}

// Sign Up handler
function handleSignUp() {
    const name = elements.signUpName.value.trim();
    const mobile = elements.signUpMobile.value.trim();
    const state = elements.signUpState.value;
    const district = elements.signUpDistrict.value;
    
    // Validate inputs
    let valid = true;
    
    if (!name) {
        showError('signUpNameError', 'Please enter your name');
        valid = false;
    }
    
    if (!mobile || mobile.length !== 10 || !/^\d+$/.test(mobile)) {
        showError('signUpMobileError', 'Please enter a valid 10-digit mobile number');
        valid = false;
    }
    
    if (!state) {
        showError('signUpStateError', 'Please select your state');
        valid = false;
    }
    
    if (!district) {
        showError('signUpDistrictError', 'Please select your district');
        valid = false;
    }
    
    if (!valid) return;
    
    // Store user data for OTP
    const tempUser = {
        name: name,
        mobile: mobile,
        state: state,
        district: district
    };
    localStorage.setItem('temp_user', JSON.stringify(tempUser));
    
    // Show OTP page
    elements.otpPhoneNumber.textContent = `+91 ${mobile}`;
    showPage('otpPage');
    startOTPTimer();
    showToast('OTP sent to your mobile number', 'success');
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
    
    // Focus first input
    container.firstChild.focus();
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
    
    // Auto verify if all inputs filled
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
        if (prevInput) prevInput.focus();
    }
}

// Start OTP timer
function startOTPTimer() {
    let timeLeft = 120; // 2 minutes
    
    if (otpTimer) {
        clearInterval(otpTimer);
    }
    
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
    const inputs = document.querySelectorAll('.otp-digit');
    const enteredOTP = Array.from(inputs).map(input => input.value).join('');
    
    if (enteredOTP === CONFIG.DEMO_OTP) {
        // Check if it's login or signup
        const tempMobile = localStorage.getItem('temp_mobile');
        const tempUser = localStorage.getItem('temp_user');
        
        if (tempUser) {
            // Signup flow
            const userData = JSON.parse(tempUser);
            currentUser = {
                id: Date.now(),
                name: userData.name,
                mobile: userData.mobile,
                state: userData.state,
                district: userData.district,
                joined: new Date().toISOString()
            };
            
            // Clear temp data
            localStorage.removeItem('temp_user');
            localStorage.removeItem('temp_mobile');
            
            // Save user
            saveData();
            
            // Show success
            showToast('Account created successfully!', 'success');
            showPage('homePage');
        } else if (tempMobile) {
            // Login flow
            currentUser = {
                id: 1,
                name: 'Demo User',
                mobile: tempMobile,
                state: 'Haryana',
                district: 'Ambala',
                joined: new Date().toISOString()
            };
            
            // Clear temp data
            localStorage.removeItem('temp_mobile');
            
            // Save user
            saveData();
            
            // Show success
            showToast('Login successful!', 'success');
            showPage('homePage');
        }
        
        clearInterval(otpTimer);
    } else {
        showToast('Invalid OTP. Please try again.', 'error');
        
        // Shake animation for OTP inputs
        inputs.forEach(input => {
            input.style.animation = 'shake 0.5s';
            setTimeout(() => {
                input.style.animation = '';
            }, 500);
        });
    }
}

// Resend OTP
function resendOTP() {
    startOTPTimer();
    showToast('OTP resent to your mobile number', 'info');
}

// Location Functions
function getUserLocation() {
    if (navigator.geolocation) {
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
            },
            (error) => {
                console.error('Geolocation error:', error);
                elements.farmerLocation.textContent = 'Location not available';
                showMockData();
            },
            { enableHighAccuracy: true, timeout: 10000 }
        );
    } else {
        elements.farmerLocation.textContent = 'Location not supported';
        showMockData();
    }
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

// Weather API Functions
async function fetchWeatherData(lat, lon) {
    try {
        const apiKey = CONFIG.WEATHER_API_KEY;
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );
        
        if (response.ok) {
            const data = await response.json();
            displayWeatherData(data);
        } else {
            throw new Error('Weather API failed');
        }
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
}

// Market Prices Functions
async function fetchMarketPrices() {
    try {
        // Using mock data
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

// Show mock data
function showMockData() {
    displayMockWeatherData();
    displayMockMarketPrices();
}

// PWA Functions - FIXED
function initPWA() {
    // Listen for beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        
        // Stash the event so it can be triggered later
        deferredPrompt = e;
        
        // Show install button
        elements.pwaInstallButton.classList.remove('hidden');
        
        console.log('PWA installable - showing install button');
    });
    
    // Handle install button click
    elements.pwaInstallButton.addEventListener('click', async () => {
        if (!deferredPrompt) {
            showToast('App installation not available', 'error');
            return;
        }
        
        console.log('Showing install prompt');
        
        // Show the install prompt
        deferredPrompt.prompt();
        
        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;
        
        console.log(`User response to install prompt: ${outcome}`);
        
        if (outcome === 'accepted') {
            showToast('App installed successfully!', 'success');
            elements.pwaInstallButton.classList.add('hidden');
        } else {
            showToast('App installation cancelled', 'info');
        }
        
        // Clear the deferredPrompt variable
        deferredPrompt = null;
    });
    
    // Listen for app installed event
    window.addEventListener('appinstalled', () => {
        console.log('PWA was installed');
        elements.pwaInstallButton.classList.add('hidden');
        deferredPrompt = null;
        
        // Track installation in analytics if needed
        if (typeof gtag !== 'undefined') {
            gtag('event', 'install', {
                'event_category': 'PWA',
                'event_label': 'App Installation'
            });
        }
    });
    
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches ||
        window.navigator.standalone === true) {
        console.log('App is running in standalone mode');
        elements.pwaInstallButton.classList.add('hidden');
    }
    
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

// Language Functions
function initLanguageSelector() {
    // Toggle language dropdown
    elements.languageButton.addEventListener('click', (e) => {
        e.stopPropagation();
        elements.languageDropdown.classList.toggle('hidden');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        elements.languageDropdown.classList.add('hidden');
    });
    
    // Update language display
    updateLanguageDisplay();
}

function changeLanguage(lang, showToastMsg = true) {
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
    
    // Update language display
    updateLanguageDisplay();
    
    // Update date format
    updateCurrentDate();
    
    // Update user greeting
    if (currentUser) {
        updateUserInfo();
    }
    
    if (showToastMsg) {
        showToast(`Language changed to ${lang === 'en' ? 'English' : lang === 'hi' ? 'Hindi' : 'Punjabi'}`, 'success');
    }
}

function updateLanguageDisplay() {
    elements.currentLanguage.textContent = 
        currentLanguage === 'en' ? 'English' : 
        currentLanguage === 'hi' ? 'हिंदी' : 'ਪੰਜਾਬੀ';
}

// State-District Functions
function initStateDistrict() {
    elements.signUpState.addEventListener('change', function() {
        const state = this.value;
        const districtSelect = elements.signUpDistrict;
        
        // Clear previous options
        districtSelect.innerHTML = '<option value="" data-i18n="select_district">Select District</option>';
        
        if (state && districtData[state]) {
            // Enable district select
            districtSelect.disabled = false;
            
            // Add district options
            districtData[state].forEach(district => {
                const option = document.createElement('option');
                option.value = district;
                option.textContent = district;
                districtSelect.appendChild(option);
            });
        } else {
            // Disable district select
            districtSelect.disabled = true;
        }
        
        // Re-translate
        changeLanguage(currentLanguage, false);
    });
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

// Logout Function
function handleLogout() {
    currentUser = null;
    localStorage.removeItem('agrifarmers_user');
    showPage('welcomePage');
    showToast('Logged out successfully', 'success');
}

// Error Display
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

// Event Listeners
document.addEventListener('DOMContentLoaded', initApp);

// Online/Offline detection
window.addEventListener('online', () => {
    document.getElementById('connectivity-status').textContent = 'Connected ✓';
    document.getElementById('connectivity-status').style.color = '#138808';
});

window.addEventListener('offline', () => {
    document.getElementById('connectivity-status').textContent = 'Offline - Using cached data';
    document.getElementById('connectivity-status').style.color = '#e74c3c';
});

// Add shake animation for OTP
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);
