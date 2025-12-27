/*
 * Agrifarmers Application Script
 * Version: 2.6.0 - Web Edition
 */
// ============================================
// PWA SERVICE WORKER REGISTRATION
// ============================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    const swUrl = './service-worker.js';
    
    navigator.serviceWorker.register(swUrl)
      .then(registration => {
        console.log('✅ Service Worker registered');
      })
      .catch(error => {
        console.log('❌ Service Worker registration failed:', error);
      });
  });
}
// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
    WEATHER_API_KEY: '44a55de0f2e0674cb9160f50459d51d4', 
    WEATHER_API_URL: 'https://api.openweathermap.org/data/2.5',
    CROP_PRICE_API: 'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070',
    OTP_EXPIRY_MINUTES: 5,
    MAX_LOGIN_ATTEMPTS: 3,
    APP_NAME: 'Agrifarmers',
    VERSION: '2.6.0',
    DEBUG_MODE: false,
};

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
    en: {
        app_title: "Agrifarmers - Your Farming Companion",
        app_name: "Agrifarmers",
        loading_message: "Loading your farming assistant...",
        offline_label: "Offline",
        offline_mode: "Offline Mode - Some data may be cached",
        welcome_title: "Welcome to Agrifarmers",
        welcome_subtitle: "Your trusted companion for modern farming.",
        get_started_button: "Get Started",
        login_button: "Login",
        login_title: "Welcome Back",
        mobile_number_label: "Mobile Number",
        mobile_placeholder: "Enter 10-digit mobile number",
        mobile_error: "Please enter a valid 10-digit mobile number",
        no_account_text: "New here?",
        signup_link: "Create account",
        signup_title: "Join Agrifarmers",
        full_name_label: "Full Name",
        name_placeholder: "Your Name",
        name_error: "Please enter your full name",
        state_label: "State",
        select_state: "Select State",
        state_error: "Please select your state",
        district_label: "District",
        select_district: "Select District",
        district_error: "Please select your district",
        signup_button: "Create Account",
        have_account_text: "Already have an account?",
        login_link: "Sign in",
        welcome_text: "Hello",
        personalized_dashboard: "Your personalized dashboard",
        weather_info: "Weather Forecast",
        weather_subtitle: "Today's weather & forecast",
        seed_advice: "Seed Recommendations",
        seed_subtitle: "Best seeds for your region",
        fertilizer_guide: "Fertilizer Guide",
        fertilizer_subtitle: "Nutrients for your crops",
        crop_calendar: "Crop Calendar",
        crop_subtitle: "Seasonal planting guide",
        market_prices: "Market Prices",
        market_subtitle: "Current crop prices",
        soil_health: "Soil Health",
        soil_subtitle: "Soil testing guidance",
        current_weather: "Current Weather",
        feels_like: "Feels like",
        humidity: "Humidity",
        wind: "Wind",
        pressure: "Pressure",
        visibility: "Visibility",
        sunrise: "Sunrise",
        sunset: "Sunset",
        forecast: "5-Day Forecast",
        weather_loading: "Loading weather data...",
        weather_error: "Unable to fetch weather data",
        offline_weather: "Offline Weather Data",
        farming_advisory: "Farming Advisory",
        high_temp_alert: "High temperature alert! Water crops in early morning or late evening.",
        low_temp_alert: "Low temperature! Protect sensitive crops with covers.",
        good_weather_alert: "Good weather for farming activities. Ideal for irrigation and fertilization.",
        connect_internet: "Connect to internet for real-time updates",
        seed_recommendation: "{season} Season",
        seed_tip: "Tip: Always use certified seeds from authorized dealers for better yield.",
        seed_consult: "Consult with local agriculture officer for region-specific recommendations.",
        npk_ratio: "NPK Ratio",
        nitrogen_phosphorus_potassium: "Nitrogen:Phosphorus:Potassium",
        application_time: "Application Time",
        before_sowing: "Before Sowing",
        basal_dose: "Basal dose recommended",
        soil_testing_important: "Important: Soil testing is recommended before fertilizer application.",
        season: "Season",
        sowing: "Sowing",
        harvesting: "Harvesting",
        crops: "Crops",
        current_recommendation: "Current Recommendation",
        kharif_time: "Now is the perfect time for Kharif crops like Rice and Cotton.",
        rabi_time: "Now is the perfect time for Rabi crops like Wheat and Mustard.",
        zaid_time: "Now is good time for Zaid crops like Watermelon and Cucumber.",
        wheat_price: "Wheat",
        rice_price: "Rice",
        cotton_price: "Cotton",
        per_quintal: "/q",
        fetching_prices: "Fetching latest market prices...",
        offline_prices: "Offline: Prices may not be current.",
        soil_testing_steps: "Soil Testing Steps",
        soil_step_1: "Collect soil samples from different spots",
        soil_step_2: "Mix samples thoroughly",
        soil_step_3: "Visit nearest Krishi Vigyan Kendra",
        soil_step_4: "Get soil health card with recommendations",
        kvk_contact: "KVK Contact Info",
        kvk_info: "Search for nearest Krishi Vigyan Kendra (KVK) in your district.",
        otp_sent: "OTP Sent",
        otp_display: "Your OTP is",
        otp_verification: "OTP Verification",
        enter_otp: "Enter 6-digit OTP",
        verify_otp: "Verify OTP",
        resend_otp: "Resend OTP",
        otp_valid_for: "OTP valid for {minutes} minutes",
        otp_demo_note: "In production, this would be sent via SMS",
        logout_button: "Logout",
        profile_button: "Profile",
        toast_online: "Back online!",
        toast_offline: "You are offline. Some features may be limited.",
        toast_login_success: "Login successful! Welcome back!",
        toast_signup_success: "Account created successfully! Welcome to Agrifarmers!",
        toast_logout: "Logged out successfully",
        toast_otp_sent: "OTP sent successfully!",
        error_no_account: "No account found. Please sign up first.",
        error_invalid_otp: "Invalid OTP. Please try again.",
        error_network: "Network error. Please check your connection.",
        retry: "Retry",
        close: "Close",
        online: "Online",
        offline_limited: "Offline - Limited functionality",
        tip: "Tip",
        important: "Important",
        invalid_input: "Invalid input",
        checking_connectivity: "Checking connectivity...",
    },
    hi: {
        app_title: "अग्रीफार्मर्स - आपका कृषि साथी",
        app_name: "अग्रीफार्मर्स",
        loading_message: "आपका कृषि सहायक लोड हो रहा है...",
        offline_label: "ऑफलाइन",
        offline_mode: "ऑफलाइन मोड - कुछ डेटा कैश किया गया हो सकता है",
        welcome_title: "अग्रीफार्मर्स में आपका स्वागत है",
        welcome_subtitle: "आधुनिक खेती के लिए आपका विश्वसनीय साथी।",
        get_started_button: "शुरू करें",
        login_button: "लॉग इन",
        login_title: "वापसी पर स्वागत है",
        mobile_number_label: "मोबाइल नंबर",
        mobile_placeholder: "10 अंकों का मोबाइल नंबर दर्ज करें",
        mobile_error: "कृपया एक वैध 10-अंकीय मोबाइल नंबर दर्ज करें",
        no_account_text: "नए हैं?",
        signup_link: "खाता बनाएं",
        signup_title: "अग्रीफार्मर्स से जुड़ें",
        full_name_label: "पूरा नाम",
        name_placeholder: "आपका नाम",
        name_error: "कृपया अपना पूरा नाम दर्ज करें",
        state_label: "राज्य",
        select_state: "राज्य चुनें",
        state_error: "कृपया अपना राज्य चुनें",
        district_label: "जिला",
        select_district: "जिला चुनें",
        district_error: "कृपया अपना जिला चुनें",
        signup_button: "खाता बनाएं",
        have_account_text: "पहले से खाता है?",
        login_link: "साइन इन",
        welcome_text: "नमस्ते",
        personalized_dashboard: "आपका व्यक्तिगत डैशबोर्ड",
        weather_info: "मौसम पूर्वानुमान",
        weather_subtitle: "आज का मौसम और पूर्वानुमान",
        seed_advice: "बीज सिफारिशें",
        seed_subtitle: "आपके क्षेत्र के लिए सर्वोत्तम बीज",
        fertilizer_guide: "उर्वरक गाइड",
        fertilizer_subtitle: "आपकी फसलों के लिए पोषक तत्व",
        crop_calendar: "फसल कैलेंडर",
        crop_subtitle: "मौसमी रोपण गाइड",
        market_prices: "बाजार मूल्य",
        market_subtitle: "वर्तमान फसल मूल्य",
        soil_health: "मृदा स्वास्थ्य",
        soil_subtitle: "मृदा परीक्षण मार्गदर्शन",
        current_weather: "वर्तमान मौसम",
        feels_like: "अनुभव",
        humidity: "आर्द्रता",
        wind: "हवा",
        pressure: "दबाव",
        visibility: "दृश्यता",
        sunrise: "सूर्योदय",
        sunset: "सूर्यास्त",
        forecast: "5-दिन पूर्वानुमान",
        weather_loading: "मौसम डेटा लोड हो रहा है...",
        weather_error: "मौसम डेटा प्राप्त करने में असमर्थ",
        offline_weather: "ऑफलाइन मौसम डेटा",
        farming_advisory: "कृषि परामर्श",
        high_temp_alert: "उच्च तापमान चेतावनी! फसलों को सुबह जल्दी या शाम को पानी दें।",
        low_temp_alert: "कम तापमान! संवेदनशील फसलों को कवर से बचाएं।",
        good_weather_alert: "खेती की गतिविधियों के लिए अच्छा मौसम। सिंचाई और उर्वरक के लिए आदर्श।",
        connect_internet: "रीयल-टाइम अपडेट के लिए इंटरनेट से कनेक्ट करें",
        seed_recommendation: "{season} सीजन के लिए अनुशंसित",
        seed_tip: "टिप: बेहतर उपज के लिए हमेशा प्रमाणित बीज अधिकृत डीलरों से उपयोग करें।",
        seed_consult: "क्षेत्र-विशिष्ट सिफारिशों के लिए स्थानीय कृषि अधिकारी से परामर्श करें।",
        npk_ratio: "एनपीके अनुपात",
        nitrogen_phosphorus_potassium: "नाइट्रोजन:फॉस्फोरस:पोटेशियम",
        application_time: "आवेदन समय",
        before_sowing: "बुवाई से पहले",
        basal_dose: "बेसल खुराक की सिफारिश की जाती है",
        soil_testing_important: "महत्वपूर्ण: उर्वरक आवेदन से पहले मृदा परीक्षण की सिफारिश की जाती है।",
        season: "मौसम",
        sowing: "बुवाई",
        harvesting: "कटाई",
        crops: "फसलें",
        current_recommendation: "वर्तमान सिफारिश",
        kharif_time: "अब खरीफ फसलों जैसे चावल और कपास के लिए सही समय है।",
        rabi_time: "अब रबी फसलों जैसे गेहूं और सरसों के लिए सही समय है।",
        zaid_time: "अब जायद फसलों जैसे तरबूज और खीरे के लिए अच्छा समय है।",
        wheat_price: "गेहूं",
        rice_price: "चावल",
        cotton_price: "कपास",
        per_quintal: "/क्विंटल",
        fetching_prices: "नवीनतम बाजार मूल्य प्राप्त किए जा रहे हैं...",
        offline_prices: "ऑफलाइन: कीमतें वर्तमान नहीं हो सकती हैं।",
        soil_testing_steps: "मृदा परीक्षण चरण",
        soil_step_1: "विभिन्न स्थानों से मिट्टी के नमूने एकत्र करें",
        soil_step_2: "नमूनों को अच्छी तरह मिलाएं",
        soil_step_3: "निकटतम कृषि विज्ञान केंद्र पर जाएं",
        soil_step_4: "सिफारिशों के साथ मृदा स्वास्थ्य कार्ड प्राप्त करें",
        kvk_contact: "केवीके संपर्क जानकारी",
        kvk_info: "अपने जिले में निकटतम कृषि विज्ञान केंद्र (केवीके) खोजें।",
        otp_sent: "ओटीपी भेजा गया",
        otp_display: "आपका ओटीपी है",
        otp_verification: "ओटीपी सत्यापन",
        enter_otp: "6-अंकीय ओटीपी दर्ज करें",
        verify_otp: "ओटीपी सत्यापित करें",
        resend_otp: "ओटीपी पुनः भेजें",
        otp_valid_for: "ओटीपी {minutes} मिनट के लिए वैध",
        otp_demo_note: "वास्तविक उपयोग में, यह एसएमएस द्वारा भेजा जाएगा",
        logout_button: "लॉग आउट",
        profile_button: "प्रोफ़ाइल",
        toast_online: "ऑनलाइन वापस!",
        toast_offline: "आप ऑफलाइन हैं। कुछ सुविधाएं सीमित हो सकती हैं।",
        toast_login_success: "लॉगिन सफल! वापसी पर स्वागत है!",
        toast_signup_success: "खाता सफलतापूर्वक बनाया गया! अग्रीफार्मर्स में आपका स्वागत है!",
        toast_logout: "सफलतापूर्वक लॉग आउट किया गया",
        toast_otp_sent: "ओटीपी सफलतापूर्वक भेजा गया!",
        error_no_account: "कोई खाता नहीं मिला। कृपया पहले साइन अप करें।",
        error_invalid_otp: "अमान्य ओटीपी। कृपया पुनः प्रयास करें।",
        error_network: "नेटवर्क त्रुटि। कृपया अपना कनेक्शन जांचें।",
        retry: "पुनः प्रयास करें",
        close: "बंद करें",
        online: "ऑनलाइन",
        offline_limited: "ऑफलाइन - सीमित कार्यक्षमता",
        tip: "टिप",
        important: "महत्वपूर्ण",
        invalid_input: "अमान्य इनपुट",
        checking_connectivity: "कनेक्टिविटी जांच रहा है...",
    }
};

// ============================================
// APPLICATION STATE
// ============================================
const appState = {
    activeUser: null,
    weatherChart: null,
    pages: ['welcomePage', 'loginPage', 'signUpPage', 'homePage'],
    currentLanguage: 'en',
    isInitialized: false,
    tempUserData: null,
    lastGeneratedOTP: null,
    otpExpiry: null,
    isOfflineMode: false,
    loginAttempts: 0
};

// ============================================
// DISTRICT DATA (Load First to Prevent Stuck)
// ============================================
const districtData = {
    "Haryana": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
    "Punjab": ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Mohali", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sangrur", "Shaheed Bhagat Singh Nagar", "Tarn Taran"],
    "Delhi": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"],
    "Uttar Pradesh": ["Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kanshiram Nagar", "Kaushambi", "Kushinagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Rae Bareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"]
};

// ============================================
// HELPER FUNCTIONS
// ============================================
function log(message, data = null) {
    if (CONFIG.DEBUG_MODE) {
        console.log(`[Agrifarmers] ${message}`, data || '');
    }
}

function isValidMobile(mobile) {
    return /^[6-9]\d{9}$/.test(mobile);
}

function isValidName(name) {
    return name && name.trim().length >= 2;
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(fieldId + 'Error');
    
    if (field && errorEl) {
        field.classList.add('input-error');
        errorEl.textContent = message;
        errorEl.style.display = 'block';
    }
}

function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(fieldId + 'Error');
    
    if (field && errorEl) {
        field.classList.remove('input-error');
        errorEl.style.display = 'none';
    }
}

function showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toast-container');
    const toastId = 'toast-' + Date.now();
    
    const toast = document.createElement('div');
    toast.id = toastId;
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="flex items-center">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'} mr-3"></i>
            <span>${message}</span>
        </div>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.parentNode?.removeChild(toast), 300);
    }, duration);
    
    return toastId;
}

// ============================================
// TRANSLATION SYSTEM
// ============================================
class TranslationSystem {
    constructor() {
        this.currentLang = 'en';
        this.initialized = false;
    }
    
    init() {
        const savedLang = localStorage.getItem('agrifarmers_language');
        if (savedLang && translations[savedLang]) {
            this.currentLang = savedLang;
        }
        
        this.updateLanguageDisplay();
        this.applyTranslations();
        this.initialized = true;
    }
    
    changeLanguage(langCode) {
        if (!translations[langCode]) return;
        
        this.currentLang = langCode;
        localStorage.setItem('agrifarmers_language', langCode);
        this.updateLanguageDisplay();
        this.applyTranslations();
    }
    
    updateLanguageDisplay() {
        document.querySelectorAll('#current-language, #current-language-desktop').forEach(el => {
            el.textContent = this.currentLang.toUpperCase();
        });
    }
    
    applyTranslations() {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getTranslation(key);
            
            if (translation) {
                this.applyTranslationToElement(element, translation);
            }
        });
        
        const titleTranslation = this.getTranslation('app_title');
        if (titleTranslation) {
            document.title = titleTranslation;
        }
    }
    
    getTranslation(key, params = {}) {
        let translation = translations[this.currentLang]?.[key] || translations['en'][key] || key;
        
        Object.keys(params).forEach(param => {
            translation = translation.replace(`{${param}}`, params[param]);
        });
        
        return translation;
    }
    
    applyTranslationToElement(element, translation) {
        const tagName = element.tagName.toLowerCase();
        
        if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
            if (element.hasAttribute('placeholder')) {
                element.setAttribute('placeholder', translation);
            }
            if (element.hasAttribute('value')) {
                element.setAttribute('value', translation);
            }
        } else if (tagName === 'img' && element.hasAttribute('alt')) {
            element.setAttribute('alt', translation);
        } else {
            element.textContent = translation;
        }
    }
    
    t(key, params = {}) {
        return this.getTranslation(key, params);
    }
}

const translator = new TranslationSystem();

// ============================================
// NETWORK MANAGER
// ============================================
const NetworkManager = {
    isOnline: navigator.onLine,
    
    init() {
        this.updateNetworkStatus();
        this.setupEventListeners();
    },
    
    setupEventListeners() {
        window.addEventListener('online', () => {
            this.isOnline = true;
            this.updateNetworkStatus();
            showToast(translator.t('toast_online'), 'success');
        });
        
        window.addEventListener('offline', () => {
            this.isOnline = false;
            this.updateNetworkStatus();
            showToast(translator.t('toast_offline'), 'info', 3000);
        });
    },
    
    updateNetworkStatus() {
        const offlineIndicator = document.getElementById('offline-indicator');
        const offlineBanner = document.getElementById('offline-mode-banner');
        
        if (this.isOnline) {
            if (offlineIndicator) offlineIndicator.classList.add('hidden');
            if (offlineBanner) offlineBanner.classList.add('hidden');
        } else {
            if (offlineIndicator) offlineIndicator.classList.remove('hidden');
            if (offlineBanner) offlineBanner.classList.remove('hidden');
        }
        
        appState.isOfflineMode = !this.isOnline;
    }
};

// ============================================
// MODAL MANAGEMENT
// ============================================
const ModalManager = {
    currentModal: null,
    
    open(title, content, modalId = 'genericModal') {
        const container = document.getElementById('modal-container');
        
        this.close();
        
        let translatedTitle = title;
        if (title.startsWith('translate:')) {
            const key = title.replace('translate:', '').trim();
            translatedTitle = translator.t(key);
        }
        
        container.innerHTML = `
            <div id="${modalId}" class="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden animate-fadeIn">
                <div class="flex items-center justify-between p-6 border-b">
                    <h3 class="text-2xl font-bold text-gray-800">${translatedTitle}</h3>
                    <button onclick="ModalManager.close()" class="text-gray-500 hover:text-gray-700 text-3xl font-light leading-none">&times;</button>
                </div>
                <div class="overflow-y-auto p-6" style="max-height: calc(90vh - 80px);">
                    ${content}
                </div>
            </div>
        `;
        
        container.classList.remove('hidden');
        this.currentModal = modalId;
        
        setTimeout(() => translator.applyTranslations(), 100);
    },
    
    close() {
        const container = document.getElementById('modal-container');
        
        if (appState.weatherChart) {
            appState.weatherChart.destroy();
            appState.weatherChart = null;
        }
        
        container.classList.add('hidden');
        container.innerHTML = '';
        this.currentModal = null;
    }
};

// ============================================
// PAGE MANAGEMENT
// ============================================
const PageManager = {
    show(pageId) {
        appState.pages.forEach(page => {
            const el = document.getElementById(page);
            if (el) el.classList.remove('active');
        });
        
        const targetPage = document.getElementById(pageId);
        if (targetPage) targetPage.classList.add('active');
        
        this.updateNavigation();
        
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) mobileMenu.classList.add('hidden');
    },
    
    updateNavigation() {
        const navActions = document.getElementById('nav-actions');
        const mobileNavActions = document.getElementById('mobile-nav-actions');
        
        if (appState.activeUser) {
            const userHTML = `
                <div class="flex items-center space-x-4">
                    <span class="text-gray-700 hidden md:inline">${appState.activeUser.name}</span>
                    <button onclick="handleLogout()" class="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors" data-translate="logout_button">Logout</button>
                </div>
            `;
            
            const mobileUserHTML = `
                <div class="space-y-3">
                    <div class="px-3 py-2 text-gray-700">${appState.activeUser.name}</div>
                    <button onclick="handleLogout()" class="w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100" data-translate="logout_button">Logout</button>
                </div>
            `;
            
            if (navActions) navActions.innerHTML = userHTML;
            if (mobileNavActions) mobileNavActions.innerHTML = mobileUserHTML;
        } else {
            const guestHTML = `
                <div class="flex items-center space-x-2">
                    <button onclick="showPage('loginPage')" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors" data-translate="login_button">Login</button>
                    <button onclick="showPage('signUpPage')" class="bg-[var(--primary-green)] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors" data-translate="get_started_button">Get Started</button>
                </div>
            `;
            
            const mobileGuestHTML = `
                <div class="space-y-1">
                    <button onclick="showPage('loginPage')" class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100" data-translate="login_button">Login</button>
                    <button onclick="showPage('signUpPage')" class="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-[var(--primary-green)] text-white hover:bg-green-700" data-translate="get_started_button">Get Started</button>
                </div>
            `;
            
            if (navActions) navActions.innerHTML = guestHTML;
            if (mobileNavActions) mobileNavActions.innerHTML = mobileGuestHTML;
        }
        
        setTimeout(() => translator.applyTranslations(), 50);
    }
};

// ============================================
// FORM HANDLING
// ============================================
function populateStates() {
    const stateSelect = document.getElementById('signUpState');
    if (!stateSelect) return;
    
    stateSelect.innerHTML = '<option value="" data-translate="select_state">Select State</option>';
    
    const states = Object.keys(districtData).sort();
    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });
}

function populateDistricts() {
    const stateSelect = document.getElementById('signUpState');
    const districtSelect = document.getElementById('signUpDistrict');
    
    if (!stateSelect || !districtSelect) return;
    
    const selectedState = stateSelect.value;
    districtSelect.innerHTML = '<option value="" data-translate="select_district">Select District</option>';
    
    if (selectedState && districtData[selectedState]) {
        districtData[selectedState].forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
        districtSelect.disabled = false;
    } else {
        districtSelect.disabled = true;
    }
}

// ============================================
// OTP MANAGEMENT
// ============================================
const OTPManager = {
    generateOTP() {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        appState.lastGeneratedOTP = otp;
        appState.otpExpiry = Date.now() + (CONFIG.OTP_EXPIRY_MINUTES * 60 * 1000);
        return otp;
    },
    
    isValidOTP(enteredOTP) {
        if (!appState.lastGeneratedOTP || !appState.otpExpiry) return false;
        if (Date.now() > appState.otpExpiry) {
            showToast('OTP has expired. Please request a new one.', 'error');
            return false;
        }
        return enteredOTP === appState.lastGeneratedOTP;
    },
    
    showOTPModal(mobile, otp) {
        const content = `
            <div class="space-y-6">
                <div class="text-center">
                    <i class="fas fa-sms text-5xl text-blue-500 mb-4"></i>
                    <h4 class="text-xl font-bold mb-2" data-translate="otp_verification">OTP Verification</h4>
                    <p class="text-gray-600 mb-1">${translator.t('otp_sent')} <strong>${mobile}</strong></p>
                    <p class="text-sm text-gray-500 mb-4">${translator.t('otp_valid_for', { minutes: CONFIG.OTP_EXPIRY_MINUTES })}</p>
                    
                    <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                        <p class="text-sm text-gray-600 mb-1" data-translate="otp_display">Your OTP is</p>
                        <div class="text-4xl font-bold text-blue-600 tracking-wider">${otp}</div>
                        <p class="text-xs text-gray-500 mt-2" data-translate="otp_demo_note">In production, this would be sent via SMS</p>
                    </div>
                </div>
                
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2" data-translate="enter_otp">Enter 6-digit OTP</label>
                        <input type="text" id="otpInput" maxlength="6" pattern="\d{6}" inputmode="numeric" 
                            class="w-full p-3 border border-gray-300 rounded-lg text-center text-2xl tracking-widest"
                            placeholder="000000" autocomplete="one-time-code">
                    </div>
                    
                    <div class="flex gap-2">
                        <button onclick="verifyOTP()" class="flex-1 bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium" data-translate="verify_otp">Verify OTP</button>
                        <button onclick="resendOTP('${mobile}')" class="flex-1 bg-gray-200 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-300 transition-colors" data-translate="resend_otp">Resend OTP</button>
                    </div>
                    
                    <div class="text-center">
                        <button onclick="ModalManager.close(); showPage('loginPage');" class="text-sm text-gray-500 hover:text-gray-700">
                            ← Back to Login
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        ModalManager.open(translator.t('otp_verification'), content, 'otpModal');
        
        // Auto-focus OTP input
        setTimeout(() => {
            const otpInput = document.getElementById('otpInput');
            if (otpInput) otpInput.focus();
        }, 300);
    }
};

// ============================================
// WEATHER SERVICE
// ============================================
const WeatherService = {
    async getWeatherData() {
        try {
            let location = 'Delhi';
            
            if (appState.activeUser && appState.activeUser.district) {
                location = appState.activeUser.district;
            }
            
            // Try real API if online
            if (NetworkManager.isOnline) {
                const realWeather = await this.fetchRealWeather(location);
                if (realWeather && !realWeather.error) {
                    this.cacheWeatherData(realWeather);
                    return {
                        ...realWeather,
                        isMockData: false,
                        source: 'api'
                    };
                }
            }
            
            // Try cache
            const cachedData = this.getCachedWeatherData();
            if (cachedData) {
                return {
                    ...cachedData,
                    isMockData: false,
                    source: 'cache',
                    cached: true
                };
            }
            
            // Fallback to mock data
            return {
                ...this.getMockWeatherData(),
                isMockData: true,
                source: 'mock'
            };
            
        } catch (error) {
            console.log('Weather error:', error);
            const cachedData = this.getCachedWeatherData();
            if (cachedData) {
                return {
                    ...cachedData,
                    isMockData: false,
                    source: 'cache',
                    cached: true
                };
            }
            return {
                ...this.getMockWeatherData(),
                isMockData: true,
                source: 'mock'
            };
        }
    },
    
    async fetchRealWeather(location) {
        try {
            const apiKey = CONFIG.WEATHER_API_KEY;
            const url = `${CONFIG.WEATHER_API_URL}/weather?q=${encodeURIComponent(location)}&appid=${apiKey}&units=metric`;
            
            const response = await fetch(url);
            
            if (!response.ok) {
                console.log('Weather API failed:', response.status);
                return null;
            }
            
            const data = await response.json();
            
            return {
                current: {
                    temp: Math.round(data.main.temp),
                    feelsLike: Math.round(data.main.feels_like),
                    humidity: data.main.humidity,
                    windSpeed: Math.round(data.wind.speed * 3.6),
                    windDirection: this.getWindDirection(data.wind.deg),
                    description: data.weather[0].description,
                    icon: data.weather[0].icon,
                    pressure: data.main.pressure,
                    sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    visibility: (data.visibility / 1000).toFixed(1)
                },
                location: `${data.name}, ${data.sys.country}`
            };
            
        } catch (error) {
            console.log('Weather fetch error:', error);
            return null;
        }
    },
    
    getWindDirection(degrees) {
        const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        const index = Math.round(degrees / 45) % 8;
        return directions[index] || 'N';
    },
    
    getWeatherIcon(iconCode) {
        const iconMap = {
            '01d': 'fas fa-sun text-yellow-500',
            '01n': 'fas fa-moon text-gray-400',
            '02d': 'fas fa-cloud-sun text-orange-400',
            '02n': 'fas fa-cloud-moon text-gray-500',
            '03d': 'fas fa-cloud text-gray-500',
            '03n': 'fas fa-cloud text-gray-600',
            '04d': 'fas fa-cloud text-gray-600',
            '04n': 'fas fa-cloud text-gray-700',
            '09d': 'fas fa-cloud-rain text-blue-500',
            '09n': 'fas fa-cloud-rain text-blue-600',
            '10d': 'fas fa-cloud-sun-rain text-blue-400',
            '10n': 'fas fa-cloud-moon-rain text-blue-500',
            '11d': 'fas fa-bolt text-yellow-600',
            '11n': 'fas fa-bolt text-yellow-700',
            '13d': 'fas fa-snowflake text-blue-300',
            '13n': 'fas fa-snowflake text-blue-400',
            '50d': 'fas fa-smog text-gray-400',
            '50n': 'fas fa-smog text-gray-500'
        };
        
        return iconMap[iconCode] || 'fas fa-cloud text-gray-500';
    },
    
    getMockWeatherData() {
        return {
            current: {
                temp: 28,
                feelsLike: 30,
                humidity: 65,
                windSpeed: '12',
                windDirection: 'NE',
                description: 'Partly Cloudy',
                icon: '02d',
                pressure: 1013,
                sunrise: '06:15',
                sunset: '18:45',
                visibility: '10'
            },
            location: appState.activeUser?.district || 'Delhi'
        };
    },
    
    cacheWeatherData(data) {
        try {
            localStorage.setItem('cached_weather', JSON.stringify({
                data: data,
                timestamp: Date.now()
            }));
        } catch (error) {
            console.log('Cache error:', error);
        }
    },
    
    getCachedWeatherData() {
        try {
            const cached = localStorage.getItem('cached_weather');
            if (cached) {
                const parsed = JSON.parse(cached);
                if (Date.now() - parsed.timestamp < 60 * 60 * 1000) {
                    return parsed.data;
                }
            }
        } catch (error) {
            console.log('Get cache error:', error);
        }
        return null;
    }
};

// ============================================
// WEATHER MODAL (Clean - No Debug Buttons)
// ============================================
async function showWeatherModal() {
    const loadingContent = `
        <div class="text-center p-8">
            <div class="loader inline-block mb-4"></div>
            <p class="text-gray-600" data-translate="weather_loading">Loading weather data...</p>
        </div>
    `;
    
    ModalManager.open(
        `translate:weather_info`,
        loadingContent,
        'weatherModal'
    );
    
    try {
        const weatherData = await WeatherService.getWeatherData();
        const isOfflineData = weatherData.isMockData || !NetworkManager.isOnline;
        const isCachedData = weatherData.source === 'cache';
        
        let advisoryMessage = translator.t('good_weather_alert');
        if (weatherData.current.temp > 35) {
            advisoryMessage = translator.t('high_temp_alert');
        } else if (weatherData.current.temp < 10) {
            advisoryMessage = translator.t('low_temp_alert');
        }
        
        const content = `
            <div class="space-y-6">
                <div class="text-center mb-2">
                    <h4 class="text-lg font-bold">${weatherData.location}</h4>
                    <p class="text-gray-600">${new Date().toLocaleDateString(translator.currentLang, { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                    })}</p>
                    ${isOfflineData ? `
                        <div class="inline-block mt-2 px-3 py-1 ${isCachedData ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'} text-xs rounded-full">
                            <i class="fas ${isCachedData ? 'fa-database' : 'fa-wifi-slash'} mr-1"></i>
                            <span>${isCachedData ? 'Cached Data' : translator.t('offline_weather')}</span>
                        </div>
                    ` : `
                        <div class="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            <i class="fas fa-wifi mr-1"></i>
                            <span>Live Data</span>
                        </div>
                    `}
                </div>
                
                <div class="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100">
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="flex items-center">
                                <i class="${WeatherService.getWeatherIcon(weatherData.current.icon)} text-5xl mr-4"></i>
                                <div>
                                    <div class="text-4xl font-bold text-gray-800">${weatherData.current.temp}°C</div>
                                    <p class="text-gray-600 capitalize">${weatherData.current.description}</p>
                                    <p class="text-sm text-gray-500">
                                        <span data-translate="feels_like">Feels like</span> ${weatherData.current.feelsLike}°C
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                        <div class="text-center p-3 bg-white rounded-lg shadow-sm">
                            <i class="fas fa-wind text-blue-500 mb-1"></i>
                            <div class="text-sm text-gray-600" data-translate="wind">Wind</div>
                            <div class="font-bold">${weatherData.current.windSpeed} km/h</div>
                            <div class="text-xs text-gray-500">${weatherData.current.windDirection}</div>
                        </div>
                        <div class="text-center p-3 bg-white rounded-lg shadow-sm">
                            <i class="fas fa-tint text-blue-400 mb-1"></i>
                            <div class="text-sm text-gray-600" data-translate="humidity">Humidity</div>
                            <div class="font-bold">${weatherData.current.humidity}%</div>
                        </div>
                        <div class="text-center p-3 bg-white rounded-lg shadow-sm">
                            <i class="fas fa-compress-alt text-green-500 mb-1"></i>
                            <div class="text-sm text-gray-600" data-translate="pressure">Pressure</div>
                            <div class="font-bold">${weatherData.current.pressure} hPa</div>
                        </div>
                        <div class="text-center p-3 bg-white rounded-lg shadow-sm">
                            <i class="fas fa-eye text-purple-500 mb-1"></i>
                            <div class="text-sm text-gray-600" data-translate="visibility">Visibility</div>
                            <div class="font-bold">${weatherData.current.visibility} km</div>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4 mt-6">
                        <div class="flex items-center p-3 bg-yellow-50 rounded-lg">
                            <i class="fas fa-sun text-yellow-500 text-2xl mr-3"></i>
                            <div>
                                <div class="text-sm text-gray-600" data-translate="sunrise">Sunrise</div>
                                <div class="font-bold">${weatherData.current.sunrise}</div>
                            </div>
                        </div>
                        <div class="flex items-center p-3 bg-indigo-50 rounded-lg">
                            <i class="fas fa-moon text-indigo-500 text-2xl mr-3"></i>
                            <div>
                                <div class="text-sm text-gray-600" data-translate="sunset">Sunset</div>
                                <div class="font-bold">${weatherData.current.sunset}</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <div class="flex items-start">
                        <i class="fas fa-lightbulb text-yellow-600 mt-1 mr-3"></i>
                        <div>
                            <p class="font-medium text-yellow-800" data-translate="farming_advisory">Farming Advisory</p>
                            <p class="text-sm text-yellow-700 mt-1">${advisoryMessage}</p>
                            ${isOfflineData ? `
                                <p class="text-xs text-yellow-600 mt-2">
                                    <i class="fas fa-info-circle mr-1"></i>
                                    ${translator.t('connect_internet')}
                                </p>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        const modalContent = document.querySelector('#weatherModal .overflow-y-auto');
        if (modalContent) {
            modalContent.innerHTML = content;
            translator.applyTranslations();
        }
        
    } catch (error) {
        log('Weather modal error:', error);
        
        const errorContent = `
            <div class="text-center p-8">
                <i class="fas fa-exclamation-triangle text-5xl text-red-500 mb-4"></i>
                <h4 class="text-xl font-bold mb-2" data-translate="weather_error">Unable to fetch weather data</h4>
                <p class="text-gray-600 mb-4">${translator.t('error_network')}</p>
                <div class="flex flex-col gap-2">
                    <button onclick="showWeatherModal()" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        ${translator.t('retry')}
                    </button>
                    <button onclick="ModalManager.close()" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors">
                        ${translator.t('close')}
                    </button>
                </div>
            </div>
        `;
        
        const modalContent = document.querySelector('#weatherModal .overflow-y-auto');
        if (modalContent) {
            modalContent.innerHTML = errorContent;
            translator.applyTranslations();
        }
    }
}

// ============================================
// OTHER MODALS
// ============================================
function showSeedModal() {
    const seasons = {
        "Kharif": ["Rice", "Maize", "Cotton", "Soybean", "Groundnut"],
        "Rabi": ["Wheat", "Barley", "Mustard", "Gram", "Peas"],
        "Zaid": ["Watermelon", "Muskmelon", "Cucumber", "Bitter Gourd"]
    };
    
    const currentMonth = new Date().getMonth() + 1;
    let currentSeason = "Kharif";
    if (currentMonth >= 10 || currentMonth <= 2) currentSeason = "Rabi";
    else if (currentMonth >= 3 && currentMonth <= 6) currentSeason = "Zaid";
    
    const content = `
        <div class="space-y-6">
            <div>
                <h4 class="text-lg font-bold mb-2">${translator.t('seed_recommendation', { season: currentSeason })}</h4>
                <div class="flex flex-wrap gap-2">
                    ${seasons[currentSeason].map(crop => `
                        <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">${crop}</span>
                    `).join('')}
                </div>
            </div>
            
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p class="text-sm text-yellow-800">
                    <i class="fas fa-lightbulb mr-2"></i>
                    <strong>${translator.t('tip')}:</strong> ${translator.t('seed_tip')}
                </p>
            </div>
            
            <div class="text-sm text-gray-600">
                <p>${translator.t('seed_consult')}</p>
            </div>
        </div>
    `;
    
    ModalManager.open(`translate:seed_advice`, content, 'seedModal');
}

function showFertilizerModal() {
    const content = `
        <div class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-green-50 p-4 rounded-lg">
                    <h5 class="font-bold mb-2" data-translate="npk_ratio">NPK Ratio</h5>
                    <p class="text-3xl font-bold text-gray-800">4:2:1</p>
                    <p class="text-sm text-gray-600" data-translate="nitrogen_phosphorus_potassium">Nitrogen:Phosphorus:Potassium</p>
                </div>
                <div class="bg-blue-50 p-4 rounded-lg">
                    <h5 class="font-bold mb-2" data-translate="application_time">Application Time</h5>
                    <p class="text-lg font-bold text-gray-800" data-translate="before_sowing">Before Sowing</p>
                    <p class="text-sm text-gray-600" data-translate="basal_dose">Basal dose recommended</p>
                </div>
            </div>
            
            <div class="bg-red-50 border-l-4 border-red-400 p-4">
                <p class="text-sm text-red-800">
                    <i class="fas fa-exclamation-triangle mr-2"></i>
                    <strong data-translate="important">Important:</strong> ${translator.t('soil_testing_important')}
                </p>
            </div>
        </div>
    `;
    
    ModalManager.open(`translate:fertilizer_guide`, content, 'fertilizerModal');
}

function showCropCalendarModal() {
    const seasonsData = [
        { season: "Kharif", sowing: "Jun - Jul", harvesting: "Sep - Oct", crops: "Rice, Maize, Cotton" },
        { season: "Rabi", sowing: "Oct - Nov", harvesting: "Mar - Apr", crops: "Wheat, Barley, Mustard" },
        { season: "Zaid", sowing: "Mar - Jun", harvesting: "Jun - Jul", crops: "Watermelon, Cucumber" }
    ];
    
    const currentMonth = new Date().getMonth() + 1;
    let recommendation = translator.t('zaid_time');
    if (currentMonth >= 5 && currentMonth <= 8) {
        recommendation = translator.t('kharif_time');
    } else if (currentMonth >= 9 || currentMonth <= 1) {
        recommendation = translator.t('rabi_time');
    }
    
    const content = `
        <div class="space-y-6">
            <div class="overflow-x-auto">
                <table class="w-full text-sm">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="p-3 text-left" data-translate="season">Season</th>
                            <th class="p-3 text-left" data-translate="sowing">Sowing</th>
                            <th class="p-3 text-left" data-translate="harvesting">Harvesting</th>
                            <th class="p-3 text-left" data-translate="crops">Crops</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${seasonsData.map(season => `
                            <tr class="border-b">
                                <td class="p-3 font-medium">${season.season}</td>
                                <td class="p-3">${season.sowing}</td>
                                <td class="p-3">${season.harvesting}</td>
                                <td class="p-3">${season.crops}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2" data-translate="current_recommendation">Current Recommendation</h5>
                <p class="text-gray-700">${recommendation}</p>
            </div>
        </div>
    `;
    
    ModalManager.open(`translate:crop_calendar`, content, 'calendarModal');
}

// ============================================
// AUTHENTICATION FUNCTIONS
// ============================================
window.handleSignUp = function() {
    const name = document.getElementById('signUpName')?.value.trim() || '';
    const mobile = document.getElementById('signUpMobile')?.value.trim() || '';
    const state = document.getElementById('signUpState')?.value || '';
    const district = document.getElementById('signUpDistrict')?.value || '';
    
    ['signUpName', 'signUpMobile', 'signUpState', 'signUpDistrict'].forEach(clearFieldError);
    
    let hasError = false;
    
    if (!isValidName(name)) {
        showFieldError('signUpName', translator.t('name_error'));
        hasError = true;
    }
    
    if (!isValidMobile(mobile)) {
        showFieldError('signUpMobile', translator.t('mobile_error'));
        hasError = true;
    }
    
    if (!state) {
        showFieldError('signUpState', translator.t('state_error'));
        hasError = true;
    }
    
    if (!district) {
        showFieldError('signUpDistrict', translator.t('district_error'));
        hasError = true;
    }
    
    if (hasError) return;
    
    const user = {
        name: name,
        mobile: mobile,
        state: state,
        district: district,
        verified: true,
        joined: new Date().toISOString(),
        lastLogin: new Date().toISOString()
    };
    
    localStorage.setItem('agrifarmers_user', JSON.stringify(user));
    appState.activeUser = user;
    
    PageManager.show('homePage');
    
    const nameEl = document.getElementById('farmerName');
    const locationEl = document.getElementById('farmerLocation');
    if (nameEl) nameEl.textContent = user.name;
    if (locationEl) locationEl.textContent = `${user.district}, ${user.state}`;
    
    showToast(translator.t('toast_signup_success'), 'success');
};

window.handleLogin = function() {
    const mobile = document.getElementById('loginMobile')?.value.trim() || '';
    
    clearFieldError('loginMobile');
    
    if (!isValidMobile(mobile)) {
        showFieldError('loginMobile', translator.t('mobile_error'));
        return;
    }
    
    const storedUser = localStorage.getItem('agrifarmers_user');
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.mobile === mobile) {
            appState.tempUserData = user;
            const otp = OTPManager.generateOTP();
            OTPManager.showOTPModal(mobile, otp);
            showToast(translator.t('toast_otp_sent'), 'success');
            return;
        }
    }
    
    showFieldError('loginMobile', translator.t('error_no_account'));
};

window.verifyOTP = function() {
    const enteredOTP = document.getElementById('otpInput')?.value.trim() || '';
    
    if (!enteredOTP || enteredOTP.length !== 6) {
        showToast('Please enter a valid 6-digit OTP', 'error');
        return;
    }
    
    if (OTPManager.isValidOTP(enteredOTP)) {
        const user = appState.tempUserData;
        appState.activeUser = user;
        user.lastLogin = new Date().toISOString();
        localStorage.setItem('agrifarmers_user', JSON.stringify(user));
        
        ModalManager.close();
        PageManager.show('homePage');
        
        const nameEl = document.getElementById('farmerName');
        const locationEl = document.getElementById('farmerLocation');
        if (nameEl) nameEl.textContent = user.name;
        if (locationEl) locationEl.textContent = `${user.district}, ${user.state}`;
        
        showToast(translator.t('toast_login_success'), 'success');
        
        appState.tempUserData = null;
        appState.lastGeneratedOTP = null;
        appState.loginAttempts = 0;
    } else {
        appState.loginAttempts++;
        if (appState.loginAttempts >= CONFIG.MAX_LOGIN_ATTEMPTS) {
            showToast('Too many failed attempts. Please try again later.', 'error');
            ModalManager.close();
        } else {
            showToast(translator.t('error_invalid_otp'), 'error');
        }
    }
};

window.resendOTP = function(mobile) {
    const otp = OTPManager.generateOTP();
    OTPManager.showOTPModal(mobile, otp);
    showToast('New OTP generated!', 'success');
};

window.handleLogout = function() {
    appState.activeUser = null;
    appState.tempUserData = null;
    appState.lastGeneratedOTP = null;
    appState.loginAttempts = 0;
    
    PageManager.show('welcomePage');
    showToast(translator.t('toast_logout'), 'info');
};

// ============================================
// GLOBAL FUNCTIONS
// ============================================
window.showPage = PageManager.show;
window.openWeatherModal = showWeatherModal;
window.openSeedModal = showSeedModal;
window.openFertilizerModal = showFertilizerModal;
window.openCropCalendarModal = showCropCalendarModal;
window.openMarketPricesModal = () => {
    ModalManager.open(
        `translate:market_prices`,
        `<div class="text-center p-8"><div class="loader inline-block mb-4"></div><p>${translator.t('fetching_prices')}</p></div>`,
        'marketModal'
    );
    
    setTimeout(() => {
        const content = `
            <div class="space-y-4">
                <div class="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span data-translate="wheat_price">Wheat</span>
                    <span class="font-bold">₹2,300<span data-translate="per_quintal">/q</span></span>
                </div>
                <div class="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span data-translate="rice_price">Rice</span>
                    <span class="font-bold">₹3,800<span data-translate="per_quintal">/q</span></span>
                </div>
                <div class="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span data-translate="cotton_price">Cotton</span>
                    <span class="font-bold">₹6,500<span data-translate="per_quintal">/q</span></span>
                </div>
            </div>
        `;
        
        const modalContent = document.querySelector('#marketModal .overflow-y-auto');
        if (modalContent) {
            modalContent.innerHTML = content;
            translator.applyTranslations();
        }
    }, 1500);
};

window.openSoilHealthModal = () => {
    const content = `
        <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2" data-translate="soil_testing_steps">Soil Testing Steps</h4>
                <ol class="list-decimal list-inside space-y-2 text-gray-700">
                    <li data-translate="soil_step_1">Collect soil samples from different spots</li>
                    <li data-translate="soil_step_2">Mix samples thoroughly</li>
                    <li data-translate="soil_step_3">Visit nearest Krishi Vigyan Kendra</li>
                    <li data-translate="soil_step_4">Get soil health card with recommendations</li>
                </ol>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2" data-translate="kvk_contact">KVK Contact Info</h4>
                <p class="text-sm text-gray-700">${translator.t('kvk_info')}</p>
            </div>
        </div>
    `;
    
    ModalManager.open(`translate:soil_health`, content, 'soilModal');
};

window.closeModal = ModalManager.close;

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    const stateSelect = document.getElementById('signUpState');
    if (stateSelect) {
        stateSelect.addEventListener('change', populateDistricts);
    }
    
    const validateOnBlur = (fieldId, validator) => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('blur', function() {
                if (validator(this.value)) {
                    clearFieldError(fieldId);
                } else {
                    const messages = {
                        'signUpName': translator.t('name_error'),
                        'signUpMobile': translator.t('mobile_error'),
                        'loginMobile': translator.t('mobile_error')
                    };
                    showFieldError(fieldId, messages[fieldId] || translator.t('invalid_input'));
                }
            });
        }
    };
    
    validateOnBlur('signUpName', isValidName);
    validateOnBlur('signUpMobile', isValidMobile);
    validateOnBlur('loginMobile', isValidMobile);
    
    const lazyImages = document.querySelectorAll('.lazy-image');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                if (src) {
                    img.src = src;
                    img.classList.add('loaded');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
});

// ============================================
// APP INITIALIZATION (Fast & Non-Stuck)
// ============================================
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingProgress = document.getElementById('loading-progress');
    const app = document.getElementById('app');
    
    const updateLoading = (message) => {
        if (loadingProgress) {
            loadingProgress.textContent = message;
        }
    };
    
    updateLoading('Initializing app...');
    
    // Initialize with minimal delay
    setTimeout(function() {
        try {
            updateLoading('Setting up network...');
            NetworkManager.init();
            
            updateLoading('Loading language...');
            translator.init();
            
            updateLoading('Preparing data...');
            populateStates();
            
            updateLoading('Finalizing...');
            PageManager.updateNavigation();
            
            appState.isInitialized = true;
            
            // Hide loading screen quickly
            setTimeout(() => {
                if (loadingScreen) {
                    loadingScreen.style.display = 'none';
                }
                
                if (app) {
                    app.classList.remove('opacity-0');
                }
                
                log('App initialized successfully');
                
                const storedUser = localStorage.getItem('agrifarmers_user');
                if (storedUser) {
                    const user = JSON.parse(storedUser);
                    appState.activeUser = user;
                    PageManager.show('homePage');
                    
                    const nameEl = document.getElementById('farmerName');
                    const locationEl = document.getElementById('farmerLocation');
                    if (nameEl) nameEl.textContent = user.name;
                    if (locationEl && user.district && user.state) {
                        locationEl.textContent = `${user.district}, ${user.state}`;
                    }
                }
                
                if (!localStorage.getItem('agrifarmers_visited')) {
                    setTimeout(() => {
                        showToast('Welcome to Agrifarmers!', 'info', 3000);
                        localStorage.setItem('agrifarmers_visited', 'true');
                    }, 1000);
                }
                
            }, 200);
            
        } catch (error) {
            console.error('Initialization error:', error);
            
            // Still show app even on error
            setTimeout(() => {
                if (loadingScreen) {
                    loadingScreen.style.display = 'none';
                }
                
                if (app) {
                    app.classList.remove('opacity-0');
                }
            }, 300);
        }
    }, 100); // Very short initial delay
});

// Handle session persistence
window.addEventListener('beforeunload', function() {
    if (appState.activeUser) {
        localStorage.setItem('agrifarmers_user', JSON.stringify(appState.activeUser));
    }
});

// ============================================
// PWA INSTALLATION
// ============================================
const PwaManager = {
  deferredPrompt: null,
  
  init() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.showInstallButton();
    });
    
    window.addEventListener('appinstalled', () => {
      this.hideInstallButton();
      showToast('Agrifarmers installed successfully!', 'success');
    });
    
    this.checkIfAppIsInstalled();
  },
  
  showInstallButton() {
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
      return;
    }
    
    let installBtn = document.getElementById('pwa-install-button');
    
    if (!installBtn) {
      installBtn = document.createElement('button');
      installBtn.id = 'pwa-install-button';
      installBtn.className = 'fixed bottom-4 right-4 z-50 bg-[var(--primary-green)] text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors';
      installBtn.innerHTML = '<i class="fas fa-download text-xl"></i>';
      installBtn.title = 'Install Agrifarmers App';
      installBtn.addEventListener('click', () => this.installApp());
      document.body.appendChild(installBtn);
    }
  },
  
  hideInstallButton() {
    const installBtn = document.getElementById('pwa-install-button');
    if (installBtn) installBtn.remove();
  },
  
  async installApp() {
    if (!this.deferredPrompt) {
      showToast('App installation not available', 'info');
      return;
    }
    
    this.deferredPrompt.prompt();
    const { outcome } = await this.deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      this.deferredPrompt = null;
      this.hideInstallButton();
    }
  },
  
  checkIfAppIsInstalled() {
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
      this.hideInstallButton();
    }
  }
};

document.addEventListener('DOMContentLoaded', function() {
  PwaManager.init();
});
