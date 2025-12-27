/*
 * Agritarmers Application Script
 * Version: 5.0.0 - Complete Fix with Enhanced OTP & PWA
 */

// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
    APP_NAME: 'Agritarmers',
    VERSION: '5.0.0',
    DEBUG_MODE: true,
};

// ============================================
// APPLICATION STATE
// ============================================
const appState = {
    activeUser: null,
    currentLanguage: 'en',
    isInitialized: false,
    tempUserData: null,
    lastGeneratedOTP: null,
    isOfflineMode: false,
    loginAttempts: 0,
    otpTimer: null,
    otpTimeLeft: 120
};

// ============================================
// DISTRICT DATA
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
        
        showToast(`Language changed to ${langCode === 'en' ? 'English' : langCode === 'hi' ? 'Hindi' : 'Punjabi'}`, 'success');
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
        },
        pa: {
            app_title: "ਅਗਰੀਟਾਰਮਰਸ - ਤੁਹਾਡਾ ਖੇਤੀ ਸਾਥੀ",
            app_name: "ਅਗਰੀਟਾਰਮਰਸ",
            loading_message: "ਤੁਹਾਡਾ ਖੇਤੀ ਸਹਾਇਕ ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
            offline_label: "ਆਫਲਾਈਨ",
            offline_mode: "ਆਫਲਾਈਨ ਮੋਡ - ਕੁਝ ਡੇਟਾ ਕੈਸ਼ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ",
            welcome_title: "ਅਗਰੀਟਾਰਮਰਸ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ",
            welcome_subtitle: "ਆਧੁਨਿਕ ਖੇਤੀ ਲਈ ਤੁਹਾਡਾ ਭਰੋਸੇਮੰਦ ਸਾਥੀ।",
            get_started_button: "ਸ਼ੁਰੂ ਕਰੋ",
            login_button: "ਲਾਗਇਨ",
            login_title: "ਵਾਪਸੀ 'ਤੇ ਸਵਾਗਤ ਹੈ",
            mobile_number_label: "ਮੋਬਾਈਲ ਨੰਬਰ",
            mobile_placeholder: "10 ਅੰਕਾਂ ਦਾ ਮੋਬਾਈਲ ਨੰਬਰ ਦਾਖਲ ਕਰੋ",
            mobile_error: "ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਵੈਧ 10-ਅੰਕੀ ਮੋਬਾਈਲ ਨੰਬਰ ਦਾਖਲ ਕਰੋ",
            no_account_text: "ਨਵੇਂ ਹੋ?",
            signup_link: "ਖਾਤਾ ਬਣਾਓ",
            signup_title: "ਅਗਰੀਟਾਰਮਰਸ ਨਾਲ ਜੁੜੋ",
            full_name_label: "ਪੂਰਾ ਨਾਮ",
            name_placeholder: "ਤੁਹਾਡਾ ਨਾਮ",
            name_error: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਪੂਰਾ ਨਾਮ ਦਾਖਲ ਕਰੋ",
            state_label: "ਰਾਜ",
            select_state: "ਰਾਜ ਚੁਣੋ",
            state_error: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਰਾਜ ਚੁਣੋ",
            district_label: "ਜ਼ਿਲ੍ਹਾ",
            select_district: "ਜ਼ਿਲ੍ਹਾ ਚੁਣੋ",
            district_error: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਜ਼ਿਲ੍ਹਾ ਚੁਣੋ",
            signup_button: "ਖਾਤਾ ਬਣਾਓ",
            have_account_text: "ਪਹਿਲਾਂ ਤੋਂ ਖਾਤਾ ਹੈ?",
            login_link: "ਸਾਈਨ ਇਨ",
            welcome_text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
            personalized_dashboard: "ਤੁਹਾਡਾ ਨਿਜੀਕ੍ਰਿਤ ਡੈਸ਼ਬੋਰਡ",
            weather_info: "ਮੌਸਮ ਪੂਰਵਾਣੁਮਾਨ",
            weather_subtitle: "ਅੱਜ ਦਾ ਮੌਸਮ ਅਤੇ ਪੂਰਵਾਣੁਮਾਨ",
            seed_advice: "ਬੀਜ ਸਿਫਾਰਸ਼ਾਂ",
            seed_subtitle: "ਤੁਹਾਡੇ ਖੇਤਰ ਲਈ ਸਰਵੋਤਮ ਬੀਜ",
            fertilizer_guide: "ਖਾਦ ਗਾਈਡ",
            fertilizer_subtitle: "ਤੁਹਾਡੀਆਂ ਫਸਲਾਂ ਲਈ ਪੋਸ਼ਕ ਤੱਤ",
            crop_calendar: "ਫਸਲ ਕੈਲੰਡਰ",
            crop_subtitle: "ਮੌਸਮੀ ਬਿਜਾਈ ਗਾਈਡ",
            market_prices: "ਬਾਜ਼ਾਰ ਕੀਮਤਾਂ",
            market_subtitle: "ਮੌਜੂਦਾ ਫਸਲ ਕੀਮਤਾਂ",
            soil_health: "ਮਿੱਟੀ ਸਿਹਤ",
            soil_subtitle: "ਮਿੱਟੀ ਟੈਸਟਿੰਗ ਮਾਰਗਦਰਸ਼ਨ",
            current_weather: "ਮੌਜੂਦਾ ਮੌਸਮ",
            feels_like: "ਅਹਿਸਾਸ",
            humidity: "ਨਮੀ",
            wind: "ਹਵਾ",
            pressure: "ਦਬਾਅ",
            visibility: "ਦ੍ਰਿਸ਼ਟੀ",
            sunrise: "ਸੂਰਜ ਚੜ੍ਹਨਾ",
            sunset: "ਸੂਰਜ ਡੁੱਬਣਾ",
            forecast: "5-ਦਿਨ ਪੂਰਵਾਣੁਮਾਨ",
            weather_loading: "ਮੌਸਮ ਡੇਟਾ ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
            weather_error: "ਮੌਸਮ ਡੇਟਾ ਪ੍ਰਾਪਤ ਕਰਨ ਵਿੱਚ ਅਸਮਰੱਥ",
            offline_weather: "ਆਫਲਾਈਨ ਮੌਸਮ ਡੇਟਾ",
            farming_advisory: "ਖੇਤੀ ਸਲਾਹ",
            high_temp_alert: "ਉੱਚ ਤਾਪਮਾਨ ਚੇਤਾਵਨੀ! ਸਵੇਰੇ ਜਲਦੀ ਜਾਂ ਸ਼ਾਮ ਨੂੰ ਫਸਲਾਂ ਨੂੰ ਪਾਣੀ ਦਿਓ।",
            low_temp_alert: "ਘੱਟ ਤਾਪਮਾਨ! ਸੈਂਸਟਿਵ ਫਸਲਾਂ ਨੂੰ ਕਵਰ ਨਾਲ ਬਚਾਓ।",
            good_weather_alert: "ਖੇਤੀ ਗਤੀਵਿਧੀਆਂ ਲਈ ਚੰਗਾ ਮੌਸਮ। ਸਿੰਜਾਈ ਅਤੇ ਖਾਦ ਲਈ ਆਦਰਸ਼।",
            connect_internet: "ਰੀਅਲ-ਟਾਈਮ ਅੱਪਡੇਟ ਲਈ ਇੰਟਰਨੈੱਟ ਨਾਲ ਕਨੈਕਟ ਕਰੋ",
            seed_recommendation: "{season} ਸੀਜ਼ਨ",
            seed_tip: "ਟਿਪ: ਬਿਹਤਰ ਪੈਦਾਵਾਰ ਲਈ ਹਮੇਸ਼ਾ ਪ੍ਰਮਾਣਿਤ ਬੀਜ ਅਧਿਕਾਰਤ ਡੀਲਰਾਂ ਤੋਂ ਵਰਤੋ।",
            seed_consult: "ਖੇਤਰ-ਵਿਸ਼ੇਸ਼ ਸਿਫਾਰਸ਼ਾਂ ਲਈ ਸਥਾਨਕ ਖੇਤੀ ਅਧਿਕਾਰੀ ਨਾਲ ਸਲਾਹ ਮਸ਼ਵਰਾ ਕਰੋ।",
            npk_ratio: "ਐਨਪੀਕੇ ਅਨੁਪਾਤ",
            nitrogen_phosphorus_potassium: "ਨਾਈਟ੍ਰੋਜਨ:ਫਾਸਫੋਰਸ:ਪੋਟਾਸ਼ੀਅਮ",
            application_time: "ਅਪਲਾਈ ਸਮਾਂ",
            before_sowing: "ਬਿਜਾਈ ਤੋਂ ਪਹਿਲਾਂ",
            basal_dose: "ਬੇਸਲ ਖੁਰਾਕ ਦੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਗਈ ਹੈ",
            soil_testing_important: "ਮਹੱਤਵਪੂਰਨ: ਖਾਦ ਲਗਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਮਿੱਟੀ ਟੈਸਟਿੰਗ ਦੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।",
            season: "ਸੀਜ਼ਨ",
            sowing: "ਬਿਜਾਈ",
            harvesting: "ਕਟਾਈ",
            crops: "ਫਸਲਾਂ",
            current_recommendation: "ਮੌਜੂਦਾ ਸਿਫਾਰਸ਼",
            kharif_time: "ਹੁਣ ਖਰੀਫ ਫਸਲਾਂ ਜਿਵੇਂ ਚਾਵਲ ਅਤੇ ਕਪਾਹ ਲਈ ਸਹੀ ਸਮਾਂ ਹੈ।",
            rabi_time: "ਹੁਣ ਰਬੀ ਫਸਲਾਂ ਜਿਵੇਂ ਕਣਕ ਅਤੇ ਸਰੋਂ ਲਈ ਸਹੀ ਸਮਾਂ ਹੈ।",
            zaid_time: "ਹੁਣ ਜ਼ੈਦ ਫਸਲਾਂ ਜਿਵੇਂ ਤਰਬੂਜ ਅਤੇ ਖੀਰੇ ਲਈ ਚੰਗਾ ਸਮਾਂ ਹੈ।",
            wheat_price: "ਕਣਕ",
            rice_price: "ਚਾਵਲ",
            cotton_price: "ਕਪਾਹ",
            per_quintal: "/ਕੁਇੰਟਲ",
            fetching_prices: "ਤਾਜ਼ਾ ਬਾਜ਼ਾਰ ਕੀਮਤਾਂ ਪ੍ਰਾਪਤ ਕੀਤੀਆਂ ਜਾ ਰਹੀਆਂ ਹਨ...",
            offline_prices: "ਆਫਲਾਈਨ: ਕੀਮਤਾਂ ਮੌਜੂਦਾ ਨਹੀਂ ਹੋ ਸਕਦੀਆਂ।",
            soil_testing_steps: "ਮਿੱਟੀ ਟੈਸਟਿੰਗ ਕਦਮ",
            soil_step_1: "ਵੱਖ-ਵੱਖ ਥਾਵਾਂ ਤੋਂ ਮਿੱਟੀ ਦੇ ਨਮੂਨੇ ਇਕੱਠੇ ਕਰੋ",
            soil_step_2: "ਨਮੂਨਿਆਂ ਨੂੰ ਚੰਗੀ ਤਰ੍ਹਾਂ ਮਿਲਾਓ",
            soil_step_3: "ਨਜ਼ਦੀਕੀ ਕ੍ਰਿਸ਼ੀ ਵਿਗਿਆਨ ਕੇਂਦਰ 'ਤੇ ਜਾਓ",
            soil_step_4: "ਸਿਫਾਰਸ਼ਾਂ ਨਾਲ ਮਿੱਟੀ ਸਿਹਤ ਕਾਰਡ ਪ੍ਰਾਪਤ ਕਰੋ",
            kvk_contact: "ਕੇਵੀਕੇ ਸੰਪਰਕ ਜਾਣਕਾਰੀ",
            kvk_info: "ਆਪਣੇ ਜ਼ਿਲ੍ਹੇ ਵਿੱਚ ਨਜ਼ਦੀਕੀ ਕ੍ਰਿਸ਼ੀ ਵਿਗਿਆਨ ਕੇਂਦਰ (ਕੇਵੀਕੇ) ਲੱਭੋ।",
            otp_sent: "OTP ਭੇਜਿਆ ਗਿਆ",
            otp_display: "ਤੁਹਾਡਾ OTP ਹੈ",
            otp_verification: "OTP ਤਸਦੀਕ",
            enter_otp: "6-ਅੰਕੀ OTP ਦਾਖਲ ਕਰੋ",
            verify_otp: "OTP ਤਸਦੀਕ ਕਰੋ",
            resend_otp: "OTP ਦੁਬਾਰਾ ਭੇਜੋ",
            otp_valid_for: "OTP {minutes} ਮਿੰਟ ਲਈ ਵੈਧ ਹੈ",
            otp_demo_note: "ਡੈਮੋ: ਤੁਹਾਡਾ OTP ਹੇਠਾਂ ਦਿਖਾਇਆ ਗਿਆ ਹੈ",
            back_to_login: "ਲਾਗਇਨ 'ਤੇ ਵਾਪਸ ਜਾਓ",
            logout_button: "ਲਾਗ ਆਊਟ",
            profile_button: "ਪ੍ਰੋਫਾਈਲ",
            toast_online: "ਆਨਲਾਈਨ ਵਾਪਸ!",
            toast_offline: "ਤੁਸੀਂ ਆਫਲਾਈਨ ਹੋ। ਕੁਝ ਸੁਵਿਧਾਵਾਂ ਸੀਮਿਤ ਹੋ ਸਕਦੀਆਂ ਹਨ।",
            toast_login_success: "ਲਾਗਇਨ ਸਫਲ! ਵਾਪਸੀ 'ਤੇ ਸਵਾਗਤ ਹੈ!",
            toast_signup_success: "ਖਾਤਾ ਸਫਲਤਾਪੂਰਵਕ ਬਣਾਇਆ ਗਿਆ! ਅਗਰੀਟਾਰਮਰਸ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ!",
            toast_logout: "ਸਫਲਤਾਪੂਰਵਕ ਲਾਗ ਆਊਟ ਕੀਤਾ ਗਿਆ",
            toast_otp_sent: "OTP ਸਫਲਤਾਪੂਰਵਕ ਭੇਜਿਆ ਗਿਆ!",
            toast_new_otp: "ਨਵਾਂ OTP ਭੇਜਿਆ ਗਿਆ!",
            error_no_account: "ਕੋਈ ਖਾਤਾ ਨਹੀਂ ਮਿਲਿਆ। ਕਿਰਪਾ ਕਰਕੇ ਪਹਿਲਾਂ ਸਾਈਨ ਅੱਪ ਕਰੋ।",
            error_invalid_otp: "ਅਵੈਧ OTP। ਕਿਰਪਾ ਕਰਕੇ ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
            error_network: "ਨੈੱਟਵਰਕ ਤਰੁੱਟੀ। ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਕਨੈਕਸ਼ਨ ਚੈੱਕ ਕਰੋ।",
            retry: "ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ",
            close: "ਬੰਦ ਕਰੋ",
            online: "ਆਨਲਾਈਨ",
            offline_limited: "ਆਫਲਾਈਨ - ਸੀਮਿਤ ਕਾਰਜਸ਼ੀਲਤਾ",
            tip: "ਟਿਪ",
            important: "ਮਹੱਤਵਪੂਰਨ",
            invalid_input: "ਅਵੈਧ ਇਨਪੁਟ",
            checking_connectivity: "ਕਨੈਕਟੀਵਿਟੀ ਚੈੱਕ ਕਰ ਰਿਹਾ ਹੈ...",
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
        
        container.classList.add('hidden');
        container.innerHTML = '';
        this.currentModal = null;
    }
};

// ============================================
// PAGE MANAGEMENT
// ============================================
const PageManager = {
    pages: ['welcomePage', 'loginPage', 'signUpPage', 'homePage', 'otpPage'],
    
    show(pageId) {
        if (!this.pages.includes(pageId)) {
            console.error(`Page ${pageId} not found`);
            return;
        }
        
        // Hide all pages
        this.pages.forEach(page => {
            const el = document.getElementById(page);
            if (el) el.classList.remove('active');
        });
        
        // Show target page
        const targetPage = document.getElementById(pageId);
        if (targetPage) targetPage.classList.add('active');
        
        this.updateNavigation();
        
        // Hide mobile menu
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) mobileMenu.classList.add('hidden');
        
        log(`Page changed to: ${pageId}`);
        
        // Initialize page-specific elements
        if (pageId === 'otpPage') {
            setTimeout(() => {
                OTPManager.setupOTPInput();
                OTPManager.startTimer();
            }, 100);
        }
    },
    
    updateNavigation() {
        const navActions = document.getElementById('nav-actions');
        const mobileNavActions = document.getElementById('mobile-nav-actions');
        
        if (appState.activeUser) {
            const userHTML = `
                <div class="flex items-center space-x-4">
                    <span class="text-gray-700 hidden md:inline">${appState.activeUser.name}</span>
                    <button onclick="handleLogout()" class="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">${translator.t('logout_button')}</button>
                </div>
            `;
            
            const mobileUserHTML = `
                <div class="space-y-3">
                    <div class="px-3 py-2 text-gray-700">${appState.activeUser.name}</div>
                    <button onclick="handleLogout()" class="w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">${translator.t('logout_button')}</button>
                </div>
            `;
            
            if (navActions) navActions.innerHTML = userHTML;
            if (mobileNavActions) mobileNavActions.innerHTML = mobileUserHTML;
        } else {
            const guestHTML = `
                <div class="flex items-center space-x-2">
                    <button onclick="PageManager.show('loginPage')" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">${translator.t('login_button')}</button>
                    <button onclick="PageManager.show('signUpPage')" class="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">${translator.t('get_started_button')}</button>
                </div>
            `;
            
            const mobileGuestHTML = `
                <div class="space-y-1">
                    <button onclick="PageManager.show('loginPage')" class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">${translator.t('login_button')}</button>
                    <button onclick="PageManager.show('signUpPage')" class="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-green-600 text-white hover:bg-green-700">${translator.t('get_started_button')}</button>
                </div>
            `;
            
            if (navActions) navActions.innerHTML = guestHTML;
            if (mobileNavActions) mobileNavActions.innerHTML = mobileGuestHTML;
        }
    }
};

// ============================================
// FORM HANDLING
// ============================================
function populateStates() {
    const stateSelect = document.getElementById('signUpState');
    if (!stateSelect) return;
    
    stateSelect.innerHTML = `<option value="">${translator.t('select_state')}</option>`;
    
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
    districtSelect.innerHTML = `<option value="">${translator.t('select_district')}</option>`;
    
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
// ENHANCED OTP MANAGEMENT (FIXED)
// ============================================
const OTPManager = {
    generateOTP() {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        appState.lastGeneratedOTP = otp;
        appState.otpTimeLeft = 120; // 2 minutes
        log('Generated OTP:', otp);
        return otp;
    },
    
    isValidOTP(enteredOTP) {
        if (!appState.lastGeneratedOTP) {
            log('No OTP found in state');
            return false;
        }
        
        const isValid = enteredOTP === appState.lastGeneratedOTP;
        log(`OTP Validation: Entered=${enteredOTP}, Expected=${appState.lastGeneratedOTP}, Valid=${isValid}`);
        return isValid;
    },
    
    setupOTPInput() {
        const otpInputs = document.querySelectorAll('.otp-digit');
        
        if (otpInputs.length === 0) {
            console.error('No OTP input fields found');
            return;
        }
        
        // Clear all inputs
        otpInputs.forEach(input => {
            input.value = '';
            input.classList.remove('filled', 'error');
        });
        
        // Focus first input
        setTimeout(() => {
            if (otpInputs[0]) otpInputs[0].focus();
        }, 100);
        
        // Add event listeners
        otpInputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                // Allow only numbers
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
                
                // Add filled class
                if (e.target.value.length === 1) {
                    e.target.classList.add('filled');
                    e.target.classList.remove('error');
                    
                    // Move to next input
                    if (index < otpInputs.length - 1) {
                        otpInputs[index + 1].focus();
                    } else {
                        // All inputs filled, auto verify
                        const otp = Array.from(otpInputs).map(i => i.value).join('');
                        if (otp.length === 6) {
                            setTimeout(() => {
                                window.verifyOTP();
                            }, 300);
                        }
                    }
                }
            });
            
            input.addEventListener('keydown', (e) => {
                // Handle backspace
                if (e.key === 'Backspace' && !e.target.value && index > 0) {
                    otpInputs[index - 1].focus();
                    otpInputs[index - 1].classList.remove('filled');
                }
                
                // Handle paste
                if ((e.ctrlKey || e.metaKey) && e.key === 'v') {
                    setTimeout(() => {
                        const pastedText = e.target.value;
                        if (pastedText.length === 6 && /^\d+$/.test(pastedText)) {
                            for (let i = 0; i < 6; i++) {
                                if (otpInputs[i]) {
                                    otpInputs[i].value = pastedText[i];
                                    otpInputs[i].classList.add('filled');
                                }
                            }
                            setTimeout(() => {
                                window.verifyOTP();
                            }, 300);
                        }
                    }, 10);
                }
            });
            
            input.addEventListener('focus', (e) => {
                e.target.select();
            });
        });
    },
    
    startTimer() {
        this.stopTimer();
        
        const timerElement = document.getElementById('otpTimer');
        const resendButton = document.getElementById('resendOTP');
        
        if (timerElement) {
            timerElement.textContent = '02:00';
        }
        
        if (resendButton) {
            resendButton.disabled = true;
            resendButton.classList.add('opacity-50', 'cursor-not-allowed');
            resendButton.classList.remove('hover:bg-green-700');
        }
        
        appState.otpTimer = setInterval(() => {
            appState.otpTimeLeft--;
            
            const minutes = Math.floor(appState.otpTimeLeft / 60);
            const seconds = appState.otpTimeLeft % 60;
            
            if (timerElement) {
                timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
            
            if (appState.otpTimeLeft <= 0) {
                this.stopTimer();
                if (timerElement) {
                    timerElement.textContent = '00:00';
                }
                if (resendButton) {
                    resendButton.disabled = false;
                    resendButton.classList.remove('opacity-50', 'cursor-not-allowed');
                    resendButton.classList.add('hover:bg-green-700');
                }
            }
        }, 1000);
    },
    
    stopTimer() {
        if (appState.otpTimer) {
            clearInterval(appState.otpTimer);
            appState.otpTimer = null;
        }
    },
    
    resendOTP() {
        const mobile = appState.tempUserData?.mobile || '';
        if (!mobile) {
            showToast('No mobile number found', 'error');
            return;
        }
        
        const otp = this.generateOTP();
        
        // Update OTP display
        const demoOTP = document.getElementById('demoOTP');
        if (demoOTP) {
            demoOTP.textContent = otp;
        }
        
        // Reset OTP inputs
        const otpInputs = document.querySelectorAll('.otp-digit');
        otpInputs.forEach(input => {
            input.value = '';
            input.classList.remove('filled', 'error');
        });
        
        // Focus first input
        setTimeout(() => {
            if (otpInputs[0]) otpInputs[0].focus();
        }, 100);
        
        // Restart timer
        this.startTimer();
        
        showToast('New OTP sent! Use: ' + otp, 'success');
    }
};

// ============================================
// AUTHENTICATION FUNCTIONS (FIXED)
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
    
    localStorage.setItem('agritarmers_user', JSON.stringify(user));
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
    
    const storedUser = localStorage.getItem('agritarmers_user');
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.mobile === mobile) {
            appState.tempUserData = user;
            proceedToOTP(mobile);
            return;
        }
    }
    
    // New user - still proceed to OTP for demo
    appState.tempUserData = { mobile: mobile };
    proceedToOTP(mobile);
};

function proceedToOTP(mobile) {
    const otp = OTPManager.generateOTP();
    
    PageManager.show('otpPage');
    
    // Update UI with phone number and OTP
    setTimeout(() => {
        const otpPhoneNumber = document.getElementById('otpPhoneNumber');
        const demoOTP = document.getElementById('demoOTP');
        
        if (otpPhoneNumber) {
            otpPhoneNumber.textContent = `+91 ${mobile}`;
        }
        
        if (demoOTP) {
            demoOTP.textContent = otp;
            demoOTP.classList.add('font-bold', 'text-green-600', 'text-xl', 'p-2', 'bg-green-50', 'rounded-lg');
        }
        
        // Show OTP in toast
        showToast(`Your OTP is: ${otp}`, 'info', 5000);
    }, 100);
}

window.verifyOTP = function() {
    const otpInputs = document.querySelectorAll('.otp-digit');
    let enteredOTP = '';
    
    // Collect OTP from all 6 inputs
    otpInputs.forEach(input => {
        enteredOTP += input.value;
    });
    
    log('OTP Verification Attempt:', enteredOTP);
    
    // Validate OTP length
    if (enteredOTP.length !== 6) {
        showToast('Please enter all 6 digits', 'error');
        
        // Highlight empty inputs in red
        otpInputs.forEach(input => {
            if (!input.value) {
                input.classList.add('error');
            }
        });
        return;
    }
    
    // Validate OTP
    if (OTPManager.isValidOTP(enteredOTP)) {
        log('OTP Verified Successfully');
        
        // Stop timer
        OTPManager.stopTimer();
        
        // Add success animation
        otpInputs.forEach(input => {
            input.classList.remove('error');
            input.classList.add('success');
        });
        
        if (appState.tempUserData) {
            // If user has name, it's an existing user
            if (appState.tempUserData.name) {
                appState.activeUser = appState.tempUserData;
                appState.activeUser.lastLogin = new Date().toISOString();
                localStorage.setItem('agritarmers_user', JSON.stringify(appState.activeUser));
                
                // Show success message
                showToast('Login successful! Redirecting...', 'success');
                
                // Small delay before redirect
                setTimeout(() => {
                    PageManager.show('homePage');
                    
                    const nameEl = document.getElementById('farmerName');
                    const locationEl = document.getElementById('farmerLocation');
                    if (nameEl) nameEl.textContent = appState.activeUser.name;
                    if (locationEl && appState.activeUser.district && appState.activeUser.state) {
                        locationEl.textContent = `${appState.activeUser.district}, ${appState.activeUser.state}`;
                    }
                }, 1000);
                
            } else {
                // New user, go to signup
                showToast('Please complete your registration', 'info');
                setTimeout(() => {
                    PageManager.show('signUpPage');
                    document.getElementById('signUpMobile').value = appState.tempUserData.mobile;
                }, 1000);
            }
        }
        
        // Clear OTP data
        appState.lastGeneratedOTP = null;
        appState.tempUserData = null;
        appState.loginAttempts = 0;
        
    } else {
        appState.loginAttempts++;
        log('OTP Verification Failed, Attempt:', appState.loginAttempts);
        
        // Show error on inputs
        otpInputs.forEach(input => {
            input.classList.add('error');
            input.classList.remove('filled');
        });
        
        if (appState.loginAttempts >= 3) {
            showToast('Too many failed attempts. Please try again later.', 'error');
            setTimeout(() => {
                PageManager.show('loginPage');
                appState.loginAttempts = 0;
            }, 2000);
        } else {
            showToast('Invalid OTP. Please try again.', 'error');
            
            // Clear inputs and refocus first one
            setTimeout(() => {
                otpInputs.forEach(input => {
                    input.value = '';
                    input.classList.remove('error');
                });
                if (otpInputs[0]) otpInputs[0].focus();
            }, 500);
        }
    }
};

window.resendOTP = function() {
    OTPManager.resendOTP();
};

window.handleLogout = function() {
    appState.activeUser = null;
    appState.tempUserData = null;
    appState.lastGeneratedOTP = null;
    appState.loginAttempts = 0;
    OTPManager.stopTimer();
    
    PageManager.show('welcomePage');
    showToast(translator.t('toast_logout'), 'info');
};

// ============================================
// GLOBAL FUNCTIONS
// ============================================
window.showPage = function(pageId) {
    PageManager.show(pageId);
};

window.openWeatherModal = function() {
    ModalManager.open('translate:weather_info', '<div class="text-center p-8"><div class="loader inline-block mb-4"></div><p>Loading weather data...</p></div>', 'weatherModal');
    
    setTimeout(() => {
        const content = `
            <div class="space-y-6">
                <div class="text-center mb-2">
                    <h4 class="text-lg font-bold">${appState.activeUser?.district || 'Noida'}, India</h4>
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
                                    <div class="text-4xl font-bold text-gray-800">28°C</div>
                                    <p class="text-gray-600 capitalize">Partly Cloudy</p>
                                    <p class="text-sm text-gray-500">
                                        Feels like 30°C
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                        <div class="text-center p-3 bg-white rounded-lg shadow-sm">
                            <i class="fas fa-wind text-blue-500 mb-1"></i>
                            <div class="text-sm text-gray-600">Wind</div>
                            <div class="font-bold">12 km/h</div>
                            <div class="text-xs text-gray-500">NE</div>
                        </div>
                        <div class="text-center p-3 bg-white rounded-lg shadow-sm">
                            <i class="fas fa-tint text-blue-400 mb-1"></i>
                            <div class="text-sm text-gray-600">Humidity</div>
                            <div class="font-bold">65%</div>
                        </div>
                        <div class="text-center p-3 bg-white rounded-lg shadow-sm">
                            <i class="fas fa-compress-alt text-green-500 mb-1"></i>
                            <div class="text-sm text-gray-600">Pressure</div>
                            <div class="font-bold">1013 hPa</div>
                        </div>
                        <div class="text-center p-3 bg-white rounded-lg shadow-sm">
                            <i class="fas fa-eye text-purple-500 mb-1"></i>
                            <div class="text-sm text-gray-600">Visibility</div>
                            <div class="font-bold">10 km</div>
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
    
    ModalManager.open('translate:seed_advice', content, 'seedModal');
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
    
    ModalManager.open('translate:fertilizer_guide', content, 'fertilizerModal');
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
    
    ModalManager.open('translate:crop_calendar', content, 'calendarModal');
};

window.openMarketPricesModal = function() {
    ModalManager.open('translate:market_prices', '<div class="text-center p-8"><div class="loader inline-block mb-4"></div><p>Fetching latest market prices...</p></div>', 'marketModal');
    
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
    
    ModalManager.open('translate:soil_health', content, 'soilModal');
};

window.closeModal = ModalManager.close;

// ============================================
// PWA INSTALLATION (FIXED)
// ============================================
const PwaManager = {
    deferredPrompt: null,
    
    init() {
        log('Initializing PWA Manager');
        
        // Check if app is already installed
        if (this.isAppInstalled()) {
            this.hideInstallButton();
            return;
        }
        
        // Listen for beforeinstallprompt event
        window.addEventListener('beforeinstallprompt', (e) => {
            log('beforeinstallprompt event fired');
            e.preventDefault();
            this.deferredPrompt = e;
            this.showInstallButton();
            
            // Log for debugging
            console.log('PWA can be installed');
        });
        
        // Listen for appinstalled event
        window.addEventListener('appinstalled', () => {
            log('PWA installed successfully');
            this.hideInstallButton();
            localStorage.setItem('agritarmers_pwa_installed', 'true');
            showToast('App installed successfully!', 'success');
        });
        
        // Check if already installed (in case event was missed)
        setTimeout(() => {
            if (this.isAppInstalled()) {
                this.hideInstallButton();
            }
        }, 1000);
    },
    
    isAppInstalled() {
        return window.matchMedia('(display-mode: standalone)').matches || 
               window.navigator.standalone === true ||
               localStorage.getItem('agritarmers_pwa_installed') === 'true';
    },
    
    showInstallButton() {
        const installButton = document.getElementById('pwa-install-button');
        if (installButton) {
            log('Showing PWA install button');
            installButton.classList.remove('hidden');
            installButton.classList.add('flex');
            
            // Clear any existing event listeners
            const newButton = installButton.cloneNode(true);
            installButton.parentNode.replaceChild(newButton, installButton);
            
            // Add click event listener
            newButton.addEventListener('click', () => this.installApp());
            
            // Show notification
            setTimeout(() => {
                showToast('Install Agritarmers as an app for better experience!', 'info', 5000);
            }, 2000);
        } else {
            log('PWA install button not found in DOM');
        }
    },
    
    hideInstallButton() {
        const installButton = document.getElementById('pwa-install-button');
        if (installButton) {
            installButton.classList.add('hidden');
            installButton.classList.remove('flex');
        }
    },
    
    async installApp() {
        if (!this.deferredPrompt) {
            log('No install prompt available');
            showToast('Installation prompt not available. Try refreshing the page.', 'info');
            return;
        }
        
        try {
            log('Showing installation prompt');
            this.deferredPrompt.prompt();
            const { outcome } = await this.deferredPrompt.userChoice;
            
            log(`User choice: ${outcome}`);
            
            if (outcome === 'accepted') {
                log('User accepted the install prompt');
                showToast('Installing Agritarmers...', 'success');
                this.deferredPrompt = null;
            } else {
                log('User dismissed the install prompt');
                showToast('Installation cancelled. You can install later.', 'info');
            }
        } catch (error) {
            console.error('Installation error:', error);
            showToast('Installation failed. Please try again.', 'error');
        }
    }
};

// ============================================
// SERVICE WORKER REGISTRATION
// ============================================
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('service-worker.js')
                .then(registration => {
                    console.log('Service Worker registered:', registration.scope);
                })
                .catch(error => {
                    console.log('Service Worker registration failed:', error);
                });
        });
    }
}

// ============================================
// INITIALIZATION
// ============================================
function initApp() {
    log('Starting app initialization...');
    
    try {
        // Initialize translation system
        translator.init();
        
        // Initialize network manager
        NetworkManager.init();
        
        // Populate states dropdown
        populateStates();
        
        // Initialize PWA
        PwaManager.init();
        
        // Register service worker
        registerServiceWorker();
        
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
            
            PageManager.show('homePage');
        } else {
            PageManager.show('welcomePage');
        }
        
        // Update navigation
        PageManager.updateNavigation();
        
        appState.isInitialized = true;
        
        // Hide loading screen
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
                    showToast('Welcome to Agritarmers! Install as app for best experience.', 'info', 4000);
                    localStorage.setItem('agritarmers_visited', 'true');
                }, 1000);
            }
        }, 500);
        
    } catch (error) {
        console.error('Initialization error:', error);
        
        // Show app even on error
        setTimeout(() => {
            const loadingScreen = document.getElementById('loadingScreen');
            const app = document.getElementById('app');
            
            if (loadingScreen) {
                loadingScreen.style.display = 'none';
            }
            
            if (app) {
                app.classList.remove('opacity-0');
            }
            
            PageManager.show('welcomePage');
            showToast('App loaded successfully', 'success');
        }, 300);
    }
}

// ============================================
// EVENT LISTENERS
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
    
    // Language selector
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
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
    
    // Form submission prevention
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
        });
    });
    
    // Get Started and Login buttons
    document.addEventListener('click', function(e) {
        // Get Started buttons
        if (e.target.matches('[data-action="get-started"], #get-started-btn, .get-started-btn')) {
            e.preventDefault();
            PageManager.show('signUpPage');
        }
        
        // Login buttons
        if (e.target.matches('[data-action="login"], #login-btn, .login-btn')) {
            e.preventDefault();
            PageManager.show('loginPage');
        }
    });
    
    // Add direct click handlers for specific buttons
    const getStartedBtn = document.getElementById('get-started-btn');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            PageManager.show('signUpPage');
        });
    }
    
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            PageManager.show('loginPage');
        });
    }
    
    // Start app initialization
    initApp();
});

// ============================================
// WINDOW LOAD EVENT
// ============================================
window.addEventListener('load', function() {
    log('Window Loaded');
    
    // Double-check if app is initialized
    if (!appState.isInitialized) {
        setTimeout(() => {
            const loadingScreen = document.getElementById('loadingScreen');
            const app = document.getElementById('app');
            
            if (loadingScreen && loadingScreen.style.display !== 'none') {
                loadingScreen.style.display = 'none';
            }
            
            if (app && app.classList.contains('opacity-0')) {
                app.classList.remove('opacity-0');
            }
            
            PageManager.show('welcomePage');
        }, 1000);
    }
});

// ============================================
// CLEANUP
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
