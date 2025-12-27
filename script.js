/*
 * Agritarmers Application Script
 * Version: 3.2.0 - Fixed Loading Screen & Optimized Initialization
 */

// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
    WEATHER_API_KEY: '44a55de0f2e0674cb9160f50459d51d4',
    WEATHER_API_URL: 'https://api.openweathermap.org/data/2.5',
    OTP_EXPIRY_MINUTES: 5,
    MAX_LOGIN_ATTEMPTS: 3,
    APP_NAME: 'Agritarmers',
    VERSION: '3.2.0',
    DEBUG_MODE: true,
};

// ============================================
// APPLICATION STATE
// ============================================
const appState = {
    activeUser: null,
    weatherChart: null,
    pages: ['welcomePage', 'loginPage', 'signUpPage', 'homePage', 'otpPage'],
    currentLanguage: 'en',
    isInitialized: false,
    tempUserData: null,
    lastGeneratedOTP: null,
    otpExpiry: null,
    isOfflineMode: false,
    loginAttempts: 0,
    otpTimer: null,
    otpTimeLeft: 120
};

// ============================================
// DISTRICT DATA (Delhi Removed)
// ============================================
const districtData = {
    "Haryana": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
    "Punjab": ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Mohali", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sangrur", "Shaheed Bhagat Singh Nagar", "Tarn Taran"],
    "Uttar Pradesh": ["Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kanshiram Nagar", "Kaushambi", "Kushinagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Rae Bareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"]
};

// ============================================
// HELPER FUNCTIONS
// ============================================
function log(message, data = null) {
    if (CONFIG.DEBUG_MODE) {
        console.log(`[Agritarmers] ${message}`, data || '');
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
    if (!container) {
        console.warn('Toast container not found');
        return null;
    }
    
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
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
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
        const savedLang = localStorage.getItem('agritarmers_language');
        if (savedLang && this.translations[savedLang]) {
            this.currentLang = savedLang;
        }
        
        this.updateLanguageDisplay();
        this.applyTranslations();
        this.initialized = true;
        log('Translation system initialized');
    }
    
    changeLanguage(langCode) {
        if (!this.translations[langCode]) return;
        
        this.currentLang = langCode;
        localStorage.setItem('agritarmers_language', langCode);
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
        let translation = this.translations[this.currentLang]?.[key] || this.translations['en'][key] || key;
        
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
    
    translations = {
        en: {
            app_title: "Agritarmers - Your Farming Companion",
            app_name: "Agritarmers",
            loading_message: "Loading your farming assistant...",
            offline_label: "Offline",
            offline_mode: "Offline Mode - Some data may be cached",
            welcome_title: "Welcome to Agritarmers",
            welcome_subtitle: "Your trusted companion for modern farming.",
            get_started_button: "Get Started",
            login_button: "Login",
            login_title: "Welcome Back",
            mobile_number_label: "Mobile Number",
            mobile_placeholder: "Enter 10-digit mobile number",
            mobile_error: "Please enter a valid 10-digit mobile number",
            no_account_text: "New here?",
            signup_link: "Create account",
            signup_title: "Join Agritarmers",
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
            otp_demo_note: "Demo: Your OTP is shown below",
            back_to_login: "Back to Login",
            logout_button: "Logout",
            profile_button: "Profile",
            toast_online: "Back online!",
            toast_offline: "You are offline. Some features may be limited.",
            toast_login_success: "Login successful! Welcome back!",
            toast_signup_success: "Account created successfully! Welcome to Agritarmers!",
            toast_logout: "Logged out successfully",
            toast_otp_sent: "OTP sent successfully!",
            toast_new_otp: "New OTP sent!",
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
            otp_demo_note: "डेमो: आपका ओटीपी नीचे दिखाया गया है",
            back_to_login: "लॉगिन पर वापस जाएं",
            logout_button: "लॉग आउट",
            profile_button: "प्रोफ़ाइल",
            toast_online: "ऑनलाइन वापस!",
            toast_offline: "आप ऑफलाइन हैं। कुछ सुविधाएं सीमित हो सकती हैं।",
            toast_login_success: "लॉगिन सफल! वापसी पर स्वागत है!",
            toast_signup_success: "खाता सफलतापूर्वक बनाया गया! अग्रीफार्मर्स में आपका स्वागत है!",
            toast_logout: "सफलतापूर्वक लॉग आउट किया गया",
            toast_otp_sent: "ओटीपी सफलतापूर्वक भेजा गया!",
            toast_new_otp: "नया ओटीपी भेजा गया!",
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
        log('Network manager initialized');
    },
    
    setupEventListeners() {
        window.addEventListener('online', () => {
            this.isOnline = true;
            this.updateNetworkStatus();
            showToast('Back online!', 'success');
        });
        
        window.addEventListener('offline', () => {
            this.isOnline = false;
            this.updateNetworkStatus();
            showToast('You are offline. Some features may be limited.', 'info', 3000);
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
        if (!container) {
            console.error('Modal container not found');
            return;
        }
        
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
        
        setTimeout(() => {
            if (translator && translator.applyTranslations) {
                translator.applyTranslations();
            }
        }, 100);
    },
    
    close() {
        const container = document.getElementById('modal-container');
        if (!container) return;
        
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
        if (!appState.pages.includes(pageId)) {
            console.error(`Page ${pageId} not found`);
            return;
        }
        
        appState.pages.forEach(page => {
            const el = document.getElementById(page);
            if (el) el.classList.remove('active');
        });
        
        const targetPage = document.getElementById(pageId);
        if (targetPage) targetPage.classList.add('active');
        
        this.updateNavigation();
        
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) mobileMenu.classList.add('hidden');
        
        log(`Page changed to: ${pageId}`);
    },
    
    updateNavigation() {
        const navActions = document.getElementById('nav-actions');
        const mobileNavActions = document.getElementById('mobile-nav-actions');
        
        if (appState.activeUser) {
            const userHTML = `
                <div class="flex items-center space-x-4">
                    <span class="text-gray-700 hidden md:inline">${appState.activeUser.name}</span>
                    <button onclick="handleLogout()" class="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">Logout</button>
                </div>
            `;
            
            const mobileUserHTML = `
                <div class="space-y-3">
                    <div class="px-3 py-2 text-gray-700">${appState.activeUser.name}</div>
                    <button onclick="handleLogout()" class="w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Logout</button>
                </div>
            `;
            
            if (navActions) navActions.innerHTML = userHTML;
            if (mobileNavActions) mobileNavActions.innerHTML = mobileUserHTML;
        } else {
            const guestHTML = `
                <div class="flex items-center space-x-2">
                    <button onclick="showPage('loginPage')" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Login</button>
                    <button onclick="showPage('signUpPage')" class="bg-[var(--primary-green)] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">Get Started</button>
                </div>
            `;
            
            const mobileGuestHTML = `
                <div class="space-y-1">
                    <button onclick="showPage('loginPage')" class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Login</button>
                    <button onclick="showPage('signUpPage')" class="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-[var(--primary-green)] text-white hover:bg-green-700">Get Started</button>
                </div>
            `;
            
            if (navActions) navActions.innerHTML = guestHTML;
            if (mobileNavActions) mobileNavActions.innerHTML = mobileGuestHTML;
        }
        
        setTimeout(() => {
            if (translator && translator.applyTranslations) {
                translator.applyTranslations();
            }
        }, 50);
    }
};

// ============================================
// FORM HANDLING
// ============================================
function populateStates() {
    const stateSelect = document.getElementById('signUpState');
    if (!stateSelect) return;
    
    stateSelect.innerHTML = '<option value="">Select State</option>';
    
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
    districtSelect.innerHTML = '<option value="">Select District</option>';
    
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
// OTP MANAGEMENT (FIXED)
// ============================================
const OTPManager = {
    generateOTP() {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        appState.lastGeneratedOTP = otp;
        appState.otpExpiry = Date.now() + (CONFIG.OTP_EXPIRY_MINUTES * 60 * 1000);
        return otp;
    },
    
    isValidOTP(enteredOTP) {
        if (!appState.lastGeneratedOTP || !appState.otpExpiry) {
            console.log('No OTP or expiry found');
            return false;
        }
        
        if (Date.now() > appState.otpExpiry) {
            showToast('OTP has expired. Please request a new one.', 'error');
            return false;
        }
        
        return enteredOTP === appState.lastGeneratedOTP;
    },
    
    startOTPTimer() {
        this.stopOTPTimer();
        
        appState.otpTimeLeft = 120;
        const timerElement = document.getElementById('timer');
        const resendButton = document.getElementById('resendOTPBtn');
        
        if (timerElement) {
            timerElement.textContent = '02:00';
        }
        
        if (resendButton) {
            resendButton.disabled = true;
            resendButton.classList.remove('bg-green-500', 'text-white');
            resendButton.classList.add('bg-gray-200', 'text-gray-500');
        }
        
        appState.otpTimer = setInterval(() => {
            appState.otpTimeLeft--;
            
            const minutes = Math.floor(appState.otpTimeLeft / 60);
            const seconds = appState.otpTimeLeft % 60;
            
            if (timerElement) {
                timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
            
            if (appState.otpTimeLeft <= 0) {
                this.stopOTPTimer();
                if (timerElement) {
                    timerElement.textContent = '00:00';
                }
                if (resendButton) {
                    resendButton.disabled = false;
                    resendButton.classList.remove('bg-gray-200', 'text-gray-500');
                    resendButton.classList.add('bg-green-500', 'text-white');
                }
            }
        }, 1000);
    },
    
    stopOTPTimer() {
        if (appState.otpTimer) {
            clearInterval(appState.otpTimer);
            appState.otpTimer = null;
        }
    },
    
    setupOTPInputs() {
        const otpInputs = document.querySelectorAll('.otp-digit');
        
        otpInputs.forEach((input, index) => {
            input.value = '';
            
            input.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
                
                if (e.target.value.length === 1 && index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
                
                const allFilled = Array.from(otpInputs).every(input => input.value.length === 1);
                if (allFilled) {
                    setTimeout(() => {
                        window.verifyOTP();
                    }, 300);
                }
            });
            
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && !input.value && index > 0) {
                    otpInputs[index - 1].focus();
                }
            });
        });
        
        setTimeout(() => {
            if (otpInputs[0]) {
                otpInputs[0].focus();
            }
        }, 100);
    }
};

// ============================================
// WEATHER SERVICE (Delhi References Removed)
// ============================================
const WeatherService = {
    async getWeatherData() {
        try {
            let location = 'Noida';
            
            if (appState.activeUser && appState.activeUser.district) {
                location = appState.activeUser.district;
            }
            
            return {
                ...this.getMockWeatherData(),
                isMockData: true,
                source: 'mock'
            };
            
        } catch (error) {
            console.log('Weather error:', error);
            return {
                ...this.getMockWeatherData(),
                isMockData: true,
                source: 'mock'
            };
        }
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
            location: appState.activeUser?.district || 'Noida, India'
        };
    }
};

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
        showFieldError('signUpName', 'Please enter your full name');
        hasError = true;
    }
    
    if (!isValidMobile(mobile)) {
        showFieldError('signUpMobile', 'Please enter a valid 10-digit mobile number');
        hasError = true;
    }
    
    if (!state) {
        showFieldError('signUpState', 'Please select your state');
        hasError = true;
    }
    
    if (!district) {
        showFieldError('signUpDistrict', 'Please select your district');
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
    
    localStorage.setItem('agritarmers_user', JSON.stringify(user));
    appState.activeUser = user;
    
    PageManager.show('homePage');
    
    const nameEl = document.getElementById('farmerName');
    const locationEl = document.getElementById('farmerLocation');
    if (nameEl) nameEl.textContent = user.name;
    if (locationEl) locationEl.textContent = `${user.district}, ${user.state}`;
    
    showToast('Account created successfully! Welcome to Agritarmers!', 'success');
};

window.handleLogin = function() {
    const mobile = document.getElementById('loginMobile')?.value.trim() || '';
    
    clearFieldError('loginMobile');
    
    if (!isValidMobile(mobile)) {
        showFieldError('loginMobile', 'Please enter a valid 10-digit mobile number');
        return;
    }
    
    const storedUser = localStorage.getItem('agritarmers_user');
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.mobile === mobile) {
            appState.tempUserData = user;
            proceedToOTP(mobile);
            return;
        }
    }
    
    appState.tempUserData = { mobile: mobile };
    proceedToOTP(mobile);
};

function proceedToOTP(mobile) {
    const otp = OTPManager.generateOTP();
    
    PageManager.show('otpPage');
    
    document.getElementById('otpPhoneNumber').textContent = `+91 ${mobile}`;
    document.getElementById('demoOTP').textContent = otp;
    
    OTPManager.setupOTPInputs();
    OTPManager.startOTPTimer();
    
    showToast('OTP sent successfully!', 'success');
}

window.verifyOTP = function() {
    const otpInputs = document.querySelectorAll('.otp-digit');
    let enteredOTP = '';
    otpInputs.forEach(input => {
        enteredOTP += input.value;
    });
    
    if (enteredOTP.length !== 6) {
        showToast('Invalid OTP. Please try again.', 'error');
        return;
    }
    
    if (OTPManager.isValidOTP(enteredOTP)) {
        OTPManager.stopOTPTimer();
        
        if (appState.tempUserData) {
            if (appState.tempUserData.name) {
                appState.activeUser = appState.tempUserData;
                appState.activeUser.lastLogin = new Date().toISOString();
                localStorage.setItem('agritarmers_user', JSON.stringify(appState.activeUser));
                
                PageManager.show('homePage');
                
                const nameEl = document.getElementById('farmerName');
                const locationEl = document.getElementById('farmerLocation');
                if (nameEl) nameEl.textContent = appState.activeUser.name;
                if (locationEl && appState.activeUser.district && appState.activeUser.state) {
                    locationEl.textContent = `${appState.activeUser.district}, ${appState.activeUser.state}`;
                }
                
                showToast('Login successful! Welcome back!', 'success');
            } else {
                PageManager.show('signUpPage');
                document.getElementById('signUpMobile').value = appState.tempUserData.mobile;
                showToast('Please complete your registration', 'info');
            }
        }
        
        appState.lastGeneratedOTP = null;
        appState.otpExpiry = null;
        appState.tempUserData = null;
        appState.loginAttempts = 0;
        
    } else {
        appState.loginAttempts++;
        if (appState.loginAttempts >= CONFIG.MAX_LOGIN_ATTEMPTS) {
            showToast('Too many failed attempts. Please try again later.', 'error');
            PageManager.show('loginPage');
            appState.loginAttempts = 0;
        } else {
            showToast('Invalid OTP. Please try again.', 'error');
            
            otpInputs.forEach(input => {
                input.value = '';
            });
            
            setTimeout(() => {
                if (otpInputs[0]) {
                    otpInputs[0].focus();
                }
            }, 100);
        }
    }
};

window.resendOTP = function() {
    const otp = OTPManager.generateOTP();
    
    document.getElementById('demoOTP').textContent = otp;
    
    document.querySelectorAll('.otp-digit').forEach(input => {
        input.value = '';
    });
    
    OTPManager.setupOTPInputs();
    OTPManager.startOTPTimer();
    
    showToast('New OTP sent!', 'success');
};

window.handleLogout = function() {
    appState.activeUser = null;
    appState.tempUserData = null;
    appState.lastGeneratedOTP = null;
    appState.loginAttempts = 0;
    
    PageManager.show('welcomePage');
    showToast('Logged out successfully', 'info');
};

// ============================================
// GLOBAL FUNCTIONS
// ============================================
window.showPage = PageManager.show;

window.openWeatherModal = function() {
    const loadingContent = `
        <div class="text-center p-8">
            <div class="loader inline-block mb-4"></div>
            <p class="text-gray-600">Loading weather data...</p>
        </div>
    `;
    
    ModalManager.open('Weather Forecast', loadingContent, 'weatherModal');
    
    setTimeout(() => {
        const weatherData = WeatherService.getMockWeatherData();
        const content = `
            <div class="space-y-6">
                <div class="text-center mb-2">
                    <h4 class="text-lg font-bold">${weatherData.location}</h4>
                    <p class="text-gray-600">${new Date().toLocaleDateString('en', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                    })}</p>
                </div>
                
                <div class="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100">
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="flex items-center">
                                <i class="fas fa-cloud-sun text-5xl text-orange-400 mr-4"></i>
                                <div>
                                    <div class="text-4xl font-bold text-gray-800">${weatherData.current.temp}°C</div>
                                    <p class="text-gray-600 capitalize">${weatherData.current.description}</p>
                                    <p class="text-sm text-gray-500">
                                        Feels like ${weatherData.current.feelsLike}°C
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                        <div class="text-center p-3 bg-white rounded-lg shadow-sm">
                            <i class="fas fa-wind text-blue-500 mb-1"></i>
                            <div class="text-sm text-gray-600">Wind</div>
                            <div class="font-bold">${weatherData.current.windSpeed} km/h</div>
                            <div class="text-xs text-gray-500">${weatherData.current.windDirection}</div>
                        </div>
                        <div class="text-center p-3 bg-white rounded-lg shadow-sm">
                            <i class="fas fa-tint text-blue-400 mb-1"></i>
                            <div class="text-sm text-gray-600">Humidity</div>
                            <div class="font-bold">${weatherData.current.humidity}%</div>
                        </div>
                        <div class="text-center p-3 bg-white rounded-lg shadow-sm">
                            <i class="fas fa-compress-alt text-green-500 mb-1"></i>
                            <div class="text-sm text-gray-600">Pressure</div>
                            <div class="font-bold">${weatherData.current.pressure} hPa</div>
                        </div>
                        <div class="text-center p-3 bg-white rounded-lg shadow-sm">
                            <i class="fas fa-eye text-purple-500 mb-1"></i>
                            <div class="text-sm text-gray-600">Visibility</div>
                            <div class="font-bold">${weatherData.current.visibility} km</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        const modalContent = document.querySelector('#weatherModal .overflow-y-auto');
        if (modalContent) {
            modalContent.innerHTML = content;
        }
    }, 1000);
};

window.openSeedModal = function() {
    const currentMonth = new Date().getMonth() + 1;
    let currentSeason = "Kharif";
    if (currentMonth >= 10 || currentMonth <= 2) currentSeason = "Rabi";
    else if (currentMonth >= 3 && currentMonth <= 6) currentSeason = "Zaid";
    
    const content = `
        <div class="space-y-6">
            <div>
                <h4 class="text-lg font-bold mb-2">Recommended for ${currentSeason} Season</h4>
                <div class="flex flex-wrap gap-2">
                    ${currentSeason === "Kharif" ? 
                        '<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Rice</span>' +
                        '<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Maize</span>' +
                        '<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Cotton</span>'
                        : currentSeason === "Rabi" ?
                        '<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Wheat</span>' +
                        '<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Barley</span>' +
                        '<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Mustard</span>'
                        :
                        '<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Watermelon</span>' +
                        '<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Muskmelon</span>' +
                        '<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Cucumber</span>'
                    }
                </div>
            </div>
        </div>
    `;
    
    ModalManager.open('Seed Recommendations', content, 'seedModal');
};

window.openFertilizerModal = function() {
    const content = `
        <div class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
    `;
    
    ModalManager.open('Fertilizer Guide', content, 'fertilizerModal');
};

window.openCropCalendarModal = function() {
    const currentMonth = new Date().getMonth() + 1;
    let recommendation = "Now is good time for Zaid crops like Watermelon and Cucumber.";
    if (currentMonth >= 5 && currentMonth <= 8) {
        recommendation = "Now is the perfect time for Kharif crops like Rice and Cotton.";
    } else if (currentMonth >= 9 || currentMonth <= 1) {
        recommendation = "Now is the perfect time for Rabi crops like Wheat and Mustard.";
    }
    
    const content = `
        <div class="space-y-6">
            <div class="overflow-x-auto">
                <table class="w-full text-sm">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="p-3 text-left">Season</th>
                            <th class="p-3 text-left">Sowing</th>
                            <th class="p-3 text-left">Harvesting</th>
                            <th class="p-3 text-left">Crops</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b">
                            <td class="p-3 font-medium">Kharif</td>
                            <td class="p-3">Jun - Jul</td>
                            <td class="p-3">Sep - Oct</td>
                            <td class="p-3">Rice, Maize, Cotton</td>
                        </tr>
                        <tr class="border-b">
                            <td class="p-3 font-medium">Rabi</td>
                            <td class="p-3">Oct - Nov</td>
                            <td class="p-3">Mar - Apr</td>
                            <td class="p-3">Wheat, Barley, Mustard</td>
                        </tr>
                        <tr class="border-b">
                            <td class="p-3 font-medium">Zaid</td>
                            <td class="p-3">Mar - Jun</td>
                            <td class="p-3">Jun - Jul</td>
                            <td class="p-3">Watermelon, Cucumber</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">Current Recommendation</h5>
                <p class="text-gray-700">${recommendation}</p>
            </div>
        </div>
    `;
    
    ModalManager.open('Crop Calendar', content, 'calendarModal');
};

window.openMarketPricesModal = function() {
    ModalManager.open('Market Prices', '<div class="text-center p-8"><div class="loader inline-block mb-4"></div><p>Fetching latest market prices...</p></div>', 'marketModal');
    
    setTimeout(() => {
        const content = `
            <div class="space-y-4">
                <div class="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Wheat</span>
                    <span class="font-bold">₹2,300/q</span>
                </div>
                <div class="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Rice</span>
                    <span class="font-bold">₹3,800/q</span>
                </div>
                <div class="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Cotton</span>
                    <span class="font-bold">₹6,500/q</span>
                </div>
            </div>
        `;
        
        const modalContent = document.querySelector('#marketModal .overflow-y-auto');
        if (modalContent) {
            modalContent.innerHTML = content;
        }
    }, 1500);
};

window.openSoilHealthModal = function() {
    const content = `
        <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Soil Testing Steps</h4>
                <ol class="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Collect soil samples from different spots</li>
                    <li>Mix samples thoroughly</li>
                    <li>Visit nearest Krishi Vigyan Kendra</li>
                    <li>Get soil health card with recommendations</li>
                </ol>
            </div>
        </div>
    `;
    
    ModalManager.open('Soil Health', content, 'soilModal');
};

window.closeModal = ModalManager.close;

// ============================================
// PWA INSTALLATION
// ============================================
const PwaManager = {
    deferredPrompt: null,
    
    init() {
        // Check if already installed
        if (this.isAppInstalled()) {
            this.hideInstallButton();
            return;
        }
        
        // Listen for beforeinstallprompt event
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredPrompt = e;
            this.showInstallButton();
        });
        
        // Listen for appinstalled event
        window.addEventListener('appinstalled', () => {
            console.log('PWA installed successfully');
            this.hideInstallButton();
        });
    },
    
    showInstallButton() {
        const installButton = document.getElementById('pwa-install-button');
        if (installButton) {
            installButton.style.display = 'flex';
            installButton.addEventListener('click', () => this.installApp());
        }
    },
    
    hideInstallButton() {
        const installButton = document.getElementById('pwa-install-button');
        if (installButton) {
            installButton.style.display = 'none';
        }
    },
    
    async installApp() {
        if (!this.deferredPrompt) {
            console.log('No install prompt available');
            return;
        }
        
        this.deferredPrompt.prompt();
        const { outcome } = await this.deferredPrompt.userChoice;
        
        if (outcome === 'accepted') {
            console.log('User accepted the install prompt');
            this.deferredPrompt = null;
            this.hideInstallButton();
        } else {
            console.log('User dismissed the install prompt');
        }
    },
    
    isAppInstalled() {
        return window.matchMedia('(display-mode: standalone)').matches || 
               window.navigator.standalone === true;
    }
};

// ============================================
// SERVICE WORKER REGISTRATION (Fixed)
// ============================================
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('Service Worker registered:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    }
}

// ============================================
// INITIALIZATION (Fixed - No More Stuck Loading)
// ============================================
function initApp() {
    log('Starting app initialization...');
    
    // Update loading message
    const loadingProgress = document.getElementById('loading-progress');
    if (loadingProgress) {
        loadingProgress.textContent = 'Initializing app...';
    }
    
    // Step 1: Initialize basic components (fast)
    try {
        // Initialize network manager
        NetworkManager.init();
        
        // Initialize translation system
        translator.init();
        
        // Populate states dropdown
        populateStates();
        
        // Initialize PWA
        PwaManager.init();
        
        // Register service worker (non-blocking)
        setTimeout(registerServiceWorker, 0);
        
        // Check for existing user
        const storedUser = localStorage.getItem('agritarmers_user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            appState.activeUser = user;
            
            // Update dashboard
            const nameEl = document.getElementById('farmerName');
            const locationEl = document.getElementById('farmerLocation');
            if (nameEl) nameEl.textContent = user.name;
            if (locationEl && user.district && user.state) {
                locationEl.textContent = `${user.district}, ${user.state}`;
            }
        }
        
        // Update navigation
        PageManager.updateNavigation();
        
        appState.isInitialized = true;
        
        // Hide loading screen after short delay
        setTimeout(() => {
            const loadingScreen = document.getElementById('loadingScreen');
            const app = document.getElementById('app');
            
            if (loadingScreen) {
                loadingScreen.style.display = 'none';
            }
            
            if (app) {
                app.classList.remove('opacity-0');
            }
            
            log('App initialized successfully');
            
            // Show welcome toast on first visit
            if (!localStorage.getItem('agritarmers_visited')) {
                setTimeout(() => {
                    showToast('Welcome to Agritarmers!', 'info', 3000);
                    localStorage.setItem('agritarmers_visited', 'true');
                }, 1000);
            }
            
        }, 500); // Reduced from longer delays
        
    } catch (error) {
        console.error('Initialization error:', error);
        
        // Still show app even on error
        setTimeout(() => {
            const loadingScreen = document.getElementById('loadingScreen');
            const app = document.getElementById('app');
            
            if (loadingScreen) {
                loadingScreen.style.display = 'none';
            }
            
            if (app) {
                app.classList.remove('opacity-0');
            }
            
            showToast('App loaded with limited functionality', 'warning');
        }, 300);
    }
}

// ============================================
// DOM EVENT LISTENERS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    log('DOM Content Loaded');
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // State and district dropdowns
    const stateSelect = document.getElementById('signUpState');
    if (stateSelect) {
        stateSelect.addEventListener('change', populateDistricts);
    }
    
    // Form validation
    const validateOnBlur = (fieldId, validator) => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('blur', function() {
                if (validator(this.value)) {
                    clearFieldError(fieldId);
                } else {
                    const messages = {
                        'signUpName': 'Please enter your full name',
                        'signUpMobile': 'Please enter a valid 10-digit mobile number',
                        'loginMobile': 'Please enter a valid 10-digit mobile number'
                    };
                    showFieldError(fieldId, messages[fieldId] || 'Invalid input');
                }
            });
        }
    };
    
    validateOnBlur('signUpName', isValidName);
    validateOnBlur('signUpMobile', isValidMobile);
    validateOnBlur('loginMobile', isValidMobile);
    
    // Language selector
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            translator.changeLanguage(lang);
            
            // Close dropdown
            document.querySelectorAll('.language-selector').forEach(selector => {
                selector.classList.remove('active');
            });
        });
    });
    
    // Language dropdown toggle
    document.querySelectorAll('#desktop-language-btn, #mobile-language-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const selector = this.closest('.language-selector');
            if (selector) {
                selector.classList.toggle('active');
            }
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function() {
        document.querySelectorAll('.language-selector').forEach(selector => {
            selector.classList.remove('active');
        });
    });
    
    // Lazy loading images
    const lazyImages = document.querySelectorAll('.lazy-image');
    if (lazyImages.length > 0) {
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
    }
    
    // Start app initialization
    initApp();
});

// ============================================
// WINDOW LOAD EVENT (Backup)
// ============================================
window.addEventListener('load', function() {
    log('Window Loaded');
    
    // Double-check if app is initialized (in case DOMContentLoaded failed)
    if (!appState.isInitialized) {
        setTimeout(() => {
            const loadingScreen = document.getElementById('loadingScreen');
            const app = document.getElementById('app');
            
            if (loadingScreen && loadingScreen.style.display !== 'none') {
                log('Forcing loading screen hide');
                loadingScreen.style.display = 'none';
            }
            
            if (app && app.classList.contains('opacity-0')) {
                app.classList.remove('opacity-0');
            }
        }, 2000); // Max 2 seconds wait
    }
});

// ============================================
// UTILITY FUNCTIONS
// ============================================
function openModal(type) {
    let title = '';
    let content = '';
    
    switch(type) {
        case 'privacy':
            title = 'Privacy Policy';
            content = '<p class="text-gray-700">We value your privacy and are committed to protecting your personal information.</p>';
            break;
        case 'terms':
            title = 'Terms of Use';
            content = '<p class="text-gray-700">By using Agritarmers, you agree to our terms and conditions.</p>';
            break;
        case 'sitemap':
            title = 'Sitemap';
            content = '<p class="text-gray-700">Home • Login • Sign Up • Dashboard</p>';
            break;
        case 'services':
            title = 'Our Services';
            content = '<p class="text-gray-700">Weather • Seeds • Fertilizer • Market Prices • Crop Calendar • Soil Health</p>';
            break;
        case 'contact':
            title = 'Contact Us';
            content = '<p class="text-gray-700">Email: help@agritarmers.com<br>Phone: +91 701XXXXXXX</p>';
            break;
    }
    
    ModalManager.open(title, content);
}

window.openModal = openModal;

// ============================================
// CLEANUP ON UNLOAD
// ============================================
window.addEventListener('beforeunload', function() {
    if (appState.activeUser) {
        localStorage.setItem('agritarmers_user', JSON.stringify(appState.activeUser));
    }
    
    // Stop OTP timer
    if (appState.otpTimer) {
        clearInterval(appState.otpTimer);
    }
});
