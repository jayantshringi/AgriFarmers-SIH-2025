/*
 * Agrifarmers Application Script
 * Main functionality for the farming assistant platform
 * Author: Dev Team
 * Version: 2.2.0
 */

// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
    WEATHER_API_KEY: 'YOUR_API_KEY_HERE', 
    WEATHER_API_URL: 'https://api.openweathermap.org/data/2.5',
    CROP_PRICE_API: 'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070',
    
    // App settings
    APP_NAME: 'Agrifarmers',
    VERSION: '2.2.0',
    DEBUG_MODE: true
};

// ============================================
// TRANSLATIONS (Enhanced with HTML support)
// ============================================
const translations = {
    en: {
        // Welcome Page
        welcome_title: "<span class='text-[var(--primary-green)]'> Welcome to  Agrifarmers</span>",
        welcome_subtitle: "Your trusted companion for modern farming. Get personalized advice on seeds, fertilizers, and weather to boost your yield.",
        get_started_button: "Get Started",
        login_button: "Login",

        // Login Page
        login_title: "Welcome Back",
        mobile_number_label: "Mobile Number",
        mobile_placeholder: "Enter 10-digit mobile number",
        mobile_error: "Please enter a valid 10-digit mobile number",
        no_account_text: "New here?",
        signup_link: "Create account",

        // Signup Page
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

        // Home Page
        welcome_text: "Hello",
        personalized_dashboard: "Your personalized dashboard for",
        weather_info: "Weather Forecast",
        weather_subtitle: "Today's weather & 7-day forecast",
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

        // Navigation
        logout_button: "Logout",
        profile_button: "Profile",

        // Footer
        footer_agrifarmers: "Agrifarmers",
        footer_description: "Empowering Indian farmers with technology and knowledge for better yields and sustainable farming.",
        footer_quick_links: "Quick Links",
        footer_home: "Home",
        footer_about: "About Us",
        footer_services: "Our Services",
        footer_contact: "Contact Us",
        footer_address: "123 Agriculture Street, Farming District, India",
        footer_copyright: "© 2025 Agrifarmers. All rights reserved.",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service",
        footer_sitemap: "Sitemap"
    },
    hi: {
        // Welcome Page
        welcome_title: "<span class='text-[var(--primary-green)]'>अग्रीफार्मर्स</span> में आपका स्वागत है",
        welcome_subtitle: "आधुनिक खेती के लिए आपका विश्वसनीय साथी। बेहतर उपज के लिए बीज, उर्वरक और मौसम पर व्यक्तिगत सलाह प्राप्त करें।",
        get_started_button: "शुरू करें",
        login_button: "लॉग इन",

        // Login Page
        login_title: "वापसी पर स्वागत है",
        mobile_number_label: "मोबाइल नंबर",
        mobile_placeholder: "10 अंकों का मोबाइल नंबर दर्ज करें",
        mobile_error: "कृपया एक वैध 10-अंकीय मोबाइल नंबर दर्ज करें",
        no_account_text: "नए हैं?",
        signup_link: "खाता बनाएं",

        // Signup Page
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

        // Home Page
        welcome_text: "नमस्ते",
        personalized_dashboard: "आपका व्यक्तिगत डैशबोर्ड",
        weather_info: "मौसम पूर्वानुमान",
        weather_subtitle: "आज का मौसम और 7-दिन का पूर्वानुमान",
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

        // Navigation
        logout_button: "लॉग आउट",
        profile_button: "प्रोफ़ाइल",

        // Footer
        footer_agrifarmers: "अग्रीफार्मर्स",
        footer_description: "बेहतर उपज और टिकाऊ खेती के लिए प्रौद्योगिकी और ज्ञान के साथ भारतीय किसानों को सशक्त बनाना।",
        footer_quick_links: "त्वरित लिंक",
        footer_home: "होम",
        footer_about: "हमारे बारे में",
        footer_services: "हमारी सेवाएं",
        footer_contact: "संपर्क करें",
        footer_address: "123 कृषि स्ट्रीट, कृषि जिला, भारत",
        footer_copyright: "© 2025 अग्रीफार्मर्स। सभी अधिकार सुरक्षित।",
        footer_privacy: "गोपनीयता नीति",
        footer_terms: "सेवा की शर्तें",
        footer_sitemap: "साइटमैप"
    },
    pa: {
        // Welcome Page
        welcome_title: "<span class='text-[var(--primary-green)]'>ਅਗਰੀਫਾਰਮਰਜ਼</span> ਵਿੱਚ ਜੀ ਆਇਆਂ ਨੂੰ",
        welcome_subtitle: "ਆਧੁਨਿਕ ਖੇਤੀ ਲਈ ਤੁਹਾਡਾ ਭਰੋਸੇਮੰਦ ਸਾਥੀ। ਬਿਹਤਰ ਪੈਦਾਵਾਰ ਲਈ ਬੀਜ, ਖਾਦ ਅਤੇ ਮੌਸਮ ਬਾਰੇ ਨਿੱਜੀ ਸਲਾਹ ਪ੍ਰਾਪਤ ਕਰੋ।",
        get_started_button: "ਸ਼ੁਰੂ ਕਰੋ",
        login_button: "ਲੌਗ ਇਨ",

        // Login Page
        login_title: "ਵਾਪਸੀ 'ਤੇ ਸੁਆਗਤ ਹੈ",
        mobile_number_label: "ਮੋਬਾਈਲ ਨੰਬਰ",
        mobile_placeholder: "10-ਅੰਕਾਂ ਦਾ ਮੋਬਾਈਲ ਨੰਬਰ ਦਰਜ ਕਰੋ",
        mobile_error: "ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਵੈਧ 10-ਅੰਕਾਂ ਦਾ ਮੋਬਾਈਲ ਨੰਬਰ ਦਰਜ ਕਰੋ",
        no_account_text: "ਨਵੇਂ ਹੋ?",
        signup_link: "ਖਾਤਾ ਬਣਾਓ",

        // Signup Page
        signup_title: "ਅਗਰੀਫਾਰਮਰਜ਼ ਨਾਲ ਜੁੜੋ",
        full_name_label: "ਪੂਰਾ ਨਾਮ",
        name_placeholder: "ਤੁਹਾਡਾ ਨਾਮ",
        name_error: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਪੂਰਾ ਨਾਮ ਦਰਜ ਕਰੋ",
        state_label: "ਰਾਜ",
        select_state: "ਰਾਜ ਚੁਣੋ",
        state_error: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਰਾਜ ਚੁਣੋ",
        district_label: "ਜ਼ਿਲ੍ਹਾ",
        select_district: "ਜ਼ਿਲ੍ਹਾ ਚੁਣੋ",
        district_error: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਜ਼ਿਲ੍ਹਾ ਚੁਣੋ",
        signup_button: "ਖਾਤਾ ਬਣਾਓ",
        have_account_text: "ਪਹਿਲਾਂ ਤੋਂ ਖਾਤਾ ਹੈ?",
        login_link: "ਸਾਈਨ ਇਨ",

        // Home Page
        welcome_text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
        personalized_dashboard: "ਤੁਹਾਡਾ ਨਿੱਜੀ ਡੈਸ਼ਬੋਰਡ",
        weather_info: "ਮੌਸਮ ਪੁਰਵਾਨੁਮਾਨ",
        weather_subtitle: "ਅੱਜ ਦਾ ਮੌਸਮ ਅਤੇ 7-ਦਿਨ ਦਾ ਪੁਰਵਾਨੁਮਾਨ",
        seed_advice: "ਬੀਜ ਸਿਫਾਰਸ਼ਾਂ",
        seed_subtitle: "ਤੁਹਾਡੇ ਖੇਤਰ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਬੀਜ",
        fertilizer_guide: "ਖਾਦ ਗਾਈਡ",
        fertilizer_subtitle: "ਤੁਹਾਡੀਆਂ ਫਸਲਾਂ ਲਈ ਪੋਸ਼ਕ ਤੱਤ",
        crop_calendar: "ਫਸਲ ਕੈਲੰਡਰ",
        crop_subtitle: "ਮੌਸਮੀ ਬੀਜਾਈ ਗਾਈਡ",
        market_prices: "ਬਾਜ਼ਾਰ ਦੀਆਂ ਕੀਮਤਾਂ",
        market_subtitle: "ਮੌਜੂਦਾ ਫਸਲ ਦੀਆਂ ਕੀਮਤਾਂ",
        soil_health: "ਮਿੱਟੀ ਦੀ ਸਿਹਤ",
        soil_subtitle: "ਮਿੱਟੀ ਟੈਸਟਿੰਗ ਮਾਰਗਦਰਸ਼ਨ",

        // Navigation
        logout_button: "ਲੌਗ ਆਊਟ",
        profile_button: "ਪ੍ਰੋਫਾਈਲ",

        // Footer
        footer_agrifarmers: "ਅਗਰੀਫਾਰਮਰਜ਼",
        footer_description: "ਬਿਹਤਰ ਪੈਦਾਵਾਰ ਅਤੇ ਟਿਕਾਊ ਖੇਤੀ ਲਈ ਤਕਨਾਲੋਜੀ ਅਤੇ ਗਿਆਨ ਨਾਲ ਭਾਰਤੀ ਕਿਸਾਨਾਂ ਨੂੰ ਸਸ਼ਕਤ ਬਣਾਉਣਾ।",
        footer_quick_links: "ਤੇਜ਼ ਲਿੰਕ",
        footer_home: "ਹੋਮ",
        footer_about: "ਸਾਡੇ ਬਾਰੇ",
        footer_services: "ਸਾਡੀਆਂ ਸੇਵਾਵਾਂ",
        footer_contact: "ਸੰਪਰਕ ਕਰੋ",
        footer_address: "123 ਐਗਰੀਕਲਚਰ ਸਟ੍ਰੀਟ, ਫਾਰਮਿੰਗ ਜ਼ਿਲ੍ਹਾ, ਭਾਰਤ",
        footer_copyright: "© 2025 ਅਗਰੀਫਾਰਮਰਜ਼। ਸਾਰੇ ਅਧਿਕਾਰ ਸੁਰੱਖਿਅਤ।",
        footer_privacy: "ਗੋਪਨੀਯਤਾ ਨੀਤੀ",
        footer_terms: "ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ",
        footer_sitemap: "ਸਾਈਟਮੈਪ"
    }
};

// ============================================
// DATA STORAGE
// ============================================
const districtData = {
    "Haryana": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
    "Punjab": ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Mohali", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sangrur", "Shaheed Bhagat Singh Nagar", "Tarn Taran"],
    "Rajasthan": ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"],
    "Uttar Pradesh": ["Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kheri", "Kushinagar", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"],
};

// ============================================
// APPLICATION STATE
// ============================================
const appState = {
    activeUser: null,
    weatherChart: null,
    pages: ['welcomePage', 'loginPage', 'signUpPage', 'homePage'],
    currentLanguage: 'en',
    isInitialized: false
};

// ============================================
// HELPER FUNCTIONS
// ============================================

// Simple logger for debugging
function log(message, data = null) {
    if (CONFIG.DEBUG_MODE) {
        console.log(`[Agrifarmers] ${message}`, data || '');
    }
}

// Validate Indian mobile number
function isValidMobile(mobile) {
    return /^[6-9]\d{9}$/.test(mobile);
}

// Validate name (at least 2 characters)
function isValidName(name) {
    return name && name.trim().length >= 2;
}

// Show error message for form field
function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(fieldId + 'Error');
    
    if (field && errorEl) {
        field.classList.add('input-error');
        errorEl.textContent = message;
        errorEl.style.display = 'block';
    }
}

// Clear field error
function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(fieldId + 'Error');
    
    if (field && errorEl) {
        field.classList.remove('input-error');
        errorEl.style.display = 'none';
    }
}

// Display toast notification
function showToast(message, type = 'info', duration = 4000) {
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
    
    // Animate in
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Remove after duration
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
// MODAL MANAGEMENT
// ============================================
const ModalManager = {
    currentModal: null,
    
    open(title, content, modalId = 'genericModal') {
        const container = document.getElementById('modal-container');
        
        // Close any existing modal
        this.close();
        
        container.innerHTML = `
            <div id="${modalId}" class="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-fadeIn">
                <div class="flex items-center justify-between p-6 border-b">
                    <h3 class="text-2xl font-bold text-gray-800">${title}</h3>
                    <button onclick="ModalManager.close()" 
                        class="text-gray-500 hover:text-gray-700 text-3xl font-light leading-none"
                        aria-label="Close">
                        &times;
                    </button>
                </div>
                <div class="overflow-y-auto p-6" style="max-height: calc(90vh - 80px);">
                    ${content}
                </div>
            </div>
        `;
        
        container.classList.remove('hidden');
        this.currentModal = modalId;
        
        // Focus trap for accessibility
        const closeBtn = container.querySelector('button');
        if (closeBtn) closeBtn.focus();
        
        log(`Modal opened: ${modalId}`);
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
// IMPROVED LANGUAGE MANAGEMENT
// ============================================
const LanguageManager = {
    init() {
        // Check for saved language preference
        const savedLang = localStorage.getItem('agrifarmers_lang');
        if (savedLang && translations[savedLang]) {
            appState.currentLanguage = savedLang;
        }
        
        this.setupEventListeners();
        this.updateDisplay();
        this.applyTranslations();
    },
    
    setupEventListeners() {
        // Setup language dropdown toggles
        const languageSelectors = document.querySelectorAll('.language-selector');
        
        languageSelectors.forEach(selector => {
            const btn = selector.querySelector('button');
            const dropdown = selector.querySelector('.language-dropdown');
            const options = selector.querySelectorAll('.language-option');
            
            if (btn) {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    selector.classList.toggle('active');
                });
            }
            
            // Handle language selection
            options.forEach(option => {
                option.addEventListener('click', (e) => {
                    const langCode = option.getAttribute('data-lang');
                    this.change(langCode);
                    selector.classList.remove('active');
                });
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            document.querySelectorAll('.language-selector').forEach(el => {
                el.classList.remove('active');
            });
        });
    },
    
    change(langCode) {
        if (translations[langCode]) {
            appState.currentLanguage = langCode;
            localStorage.setItem('agrifarmers_lang', langCode);
            
            this.updateDisplay();
            this.applyTranslations();
            
            showToast(`${this.getLanguageName(langCode)} - ਭਾਸ਼ਾ ਬਦਲੀ ਗਈ है - भाषा बदली गई है`, 'success', 2000);
            log(`Language changed to: ${langCode}`);
        }
    },
    
    updateDisplay() {
        const displayEls = document.querySelectorAll('#current-language, #current-language-desktop');
        displayEls.forEach(el => {
            if (el) el.textContent = appState.currentLanguage.toUpperCase();
        });
    },
    
    applyTranslations() {
        const elements = document.querySelectorAll('[data-translate]');
        
        elements.forEach(el => {
            const key = el.getAttribute('data-translate');
            const translation = translations[appState.currentLanguage]?.[key];
            
            if (translation) {
                if (el.tagName === 'INPUT' || el.tagName === 'SELECT') {
                    el.placeholder = translation;
                } else if (el.hasAttribute('data-html')) {
                    el.innerHTML = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });
        
        // Update HTML content with innerHTML
        const htmlElements = document.querySelectorAll('[data-translate][data-html]');
        htmlElements.forEach(el => {
            const key = el.getAttribute('data-translate');
            const translation = translations[appState.currentLanguage]?.[key];
            if (translation) {
                el.innerHTML = translation;
            }
        });
        
        log('Translations applied');
    },
    
    getLanguageName(code) {
        const names = {
            'en': 'English',
            'hi': 'Hindi',
            'pa': 'Punjabi'
        };
        return names[code] || code;
    }
};

// ============================================
// PAGE MANAGEMENT
// ============================================
const PageManager = {
    show(pageId) {
        // Hide all pages
        appState.pages.forEach(page => {
            const el = document.getElementById(page);
            if (el) el.classList.remove('active');
        });
        
        // Show target page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }
        
        this.updateNavigation();
        
        // Hide mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
        
        log(`Page changed to: ${pageId}`);
    },
    
    updateNavigation() {
        const navActions = document.getElementById('nav-actions');
        const mobileNavActions = document.getElementById('mobile-nav-actions');
        
        if (appState.activeUser) {
            // User is logged in
            const userHTML = `
                <div class="flex items-center space-x-4">
                    <span class="text-gray-700 hidden md:inline">${appState.activeUser.name}</span>
                    <button onclick="handleLogout()" 
                        class="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                        data-translate="logout_button">
                        Logout
                    </button>
                </div>
            `;
            
            const mobileUserHTML = `
                <div class="space-y-3">
                    <div class="px-3 py-2 text-gray-700">${appState.activeUser.name}</div>
                    <button onclick="handleLogout()" 
                        class="w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                        data-translate="logout_button">
                        Logout
                    </button>
                </div>
            `;
            
            if (navActions) navActions.innerHTML = userHTML;
            if (mobileNavActions) mobileNavActions.innerHTML = mobileUserHTML;
        } else {
            // User is not logged in
            const guestHTML = `
                <div class="flex items-center space-x-2">
                    <button onclick="showPage('loginPage')" 
                        class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        data-translate="login_button">
                        Login
                    </button>
                    <button onclick="showPage('signUpPage')" 
                        class="bg-[var(--primary-green)] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
                        data-translate="get_started_button">
                        Get Started
                    </button>
                </div>
            `;
            
            const mobileGuestHTML = `
                <div class="space-y-1">
                    <button onclick="showPage('loginPage')" 
                        class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                        data-translate="login_button">
                        Login
                    </button>
                    <button onclick="showPage('signUpPage')" 
                        class="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-[var(--primary-green)] text-white hover:bg-green-700"
                        data-translate="get_started_button">
                        Get Started
                    </button>
                </div>
            `;
            
            if (navActions) navActions.innerHTML = guestHTML;
            if (mobileNavActions) mobileNavActions.innerHTML = mobileGuestHTML;
        }
        
        // Re-apply translations for navigation
        LanguageManager.applyTranslations();
    }
};

// ============================================
// AUTHENTICATION
// ============================================
const AuthManager = {
    signUp() {
        const name = document.getElementById('signUpName')?.value.trim() || '';
        const mobile = document.getElementById('signUpMobile')?.value.trim() || '';
        const state = document.getElementById('signUpState')?.value || '';
        const district = document.getElementById('signUpDistrict')?.value || '';
        
        // Clear previous errors
        ['signUpName', 'signUpMobile', 'signUpState', 'signUpDistrict'].forEach(clearFieldError);
        
        let hasError = false;
        
        // Validate inputs
        if (!isValidName(name)) {
            showFieldError('signUpName', 'Please enter your full name (min 2 characters)');
            hasError = true;
        }
        
        if (!isValidMobile(mobile)) {
            showFieldError('signUpMobile', 'Please enter a valid 10-digit Indian mobile number');
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
        
        // Create user object
        const user = {
            name: name,
            mobile: mobile,
            state: state,
            district: district,
            joined: new Date().toISOString()
        };
        
        // Save to localStorage (simulating backend)
        localStorage.setItem('agrifarmers_user', JSON.stringify(user));
        appState.activeUser = user;
        
        // Show home page
        PageManager.show('homePage');
        this.updateUserDisplay();
        
        showToast('Account created successfully! Welcome to Agrifarmers!', 'success');
        log('New user signed up:', user.name);
    },
    
    login() {
        const mobile = document.getElementById('loginMobile')?.value.trim() || '';
        
        clearFieldError('loginMobile');
        
        if (!isValidMobile(mobile)) {
            showFieldError('loginMobile', 'Please enter a valid mobile number');
            return;
        }
        
        // Check if user exists
        const storedUser = localStorage.getItem('agrifarmers_user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            
            if (user.mobile === mobile) {
                appState.activeUser = user;
                PageManager.show('homePage');
                this.updateUserDisplay();
                
                showToast('Welcome back!', 'success');
                log('User logged in:', user.name);
                return;
            }
        }
        
        // If we get here, no user found
        showToast('No account found with this number. Please sign up.', 'error');
    },
    
    logout() {
        appState.activeUser = null;
        PageManager.show('welcomePage');
        showToast('Logged out successfully', 'info');
        log('User logged out');
    },
    
    updateUserDisplay() {
        if (appState.activeUser) {
            const nameEl = document.getElementById('farmerName');
            const locationEl = document.getElementById('farmerLocation');
            
            if (nameEl) nameEl.textContent = appState.activeUser.name;
            if (locationEl) {
                locationEl.textContent = `${appState.activeUser.district}, ${appState.activeUser.state}`;
            }
        }
    },
    
    checkSession() {
        const user = localStorage.getItem('agrifarmers_user');
        if (user) {
            appState.activeUser = JSON.parse(user);
            PageManager.show('homePage');
            this.updateUserDisplay();
            log('Session restored for user');
        }
    }
};

// ============================================
// FEATURE MODULES
// ============================================

// Weather module
function showWeatherModal() {
    const content = `
        <div class="text-center p-4">
            <div class="text-6xl mb-4">🌤️</div>
            <h4 class="text-xl font-bold mb-2" data-translate="weather_info">Weather Forecast</h4>
            <p class="text-gray-600 mb-6" data-translate="weather_subtitle">Real-time weather data for your location</p>
            
            <div class="bg-blue-50 rounded-xl p-6 mb-6">
                <div class="text-5xl font-bold text-gray-800 mb-2">28°C</div>
                <p class="text-gray-600">Partly Cloudy</p>
                <div class="flex justify-center gap-6 mt-4 text-sm">
                    <div>
                        <div class="font-semibold">Humidity</div>
                        <div>65%</div>
                    </div>
                    <div>
                        <div class="font-semibold">Wind</div>
                        <div>12 km/h</div>
                    </div>
                    <div>
                        <div class="font-semibold">Rain</div>
                        <div>10%</div>
                    </div>
                </div>
            </div>
            
            <p class="text-sm text-gray-500">
                <i class="fas fa-info-circle mr-1"></i>
                Connect to weather API for real-time updates
            </p>
        </div>
    `;
    
    ModalManager.open('<i class="fas fa-cloud-sun text-orange-500 mr-2"></i> <span data-translate="weather_info">Weather</span>', content, 'weatherModal');
}

// Seed advice module
function showSeedModal() {
    const seasons = {
        "Kharif": ["Rice", "Maize", "Cotton", "Soybean", "Groundnut"],
        "Rabi": ["Wheat", "Barley", "Mustard", "Gram", "Peas"],
        "Zaid": ["Watermelon", "Muskmelon", "Cucumber", "Bitter Gourd"]
    };
    
    const currentSeason = "Kharif";
    
    const content = `
        <div class="space-y-6">
            <div>
                <h4 class="text-lg font-bold mb-2">Recommended for ${currentSeason} Season</h4>
                <div class="flex flex-wrap gap-2">
                    ${seasons[currentSeason].map(crop => `
                        <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                            ${crop}
                        </span>
                    `).join('')}
                </div>
            </div>
            
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p class="text-sm text-yellow-800">
                    <i class="fas fa-lightbulb mr-2"></i>
                    <strong>Tip:</strong> Always use certified seeds from authorized dealers for better yield.
                </p>
            </div>
            
            <div class="text-sm text-gray-600">
                <p>Consult with local agriculture officer for region-specific recommendations.</p>
            </div>
        </div>
    `;
    
    ModalManager.open('<i class="fas fa-seedling text-green-600 mr-2"></i> <span data-translate="seed_advice">Seed Advice</span>', content, 'seedModal');
}

// Fertilizer module
function showFertilizerModal() {
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
            
            <div class="bg-red-50 border-l-4 border-red-400 p-4">
                <p class="text-sm text-red-800">
                    <i class="fas fa-exclamation-triangle mr-2"></i>
                    <strong>Important:</strong> Soil testing is recommended before fertilizer application.
                </p>
            </div>
        </div>
    `;
    
    ModalManager.open('<i class="fas fa-flask text-blue-500 mr-2"></i> <span data-translate="fertilizer_guide">Fertilizer Guide</span>', content, 'fertilizerModal');
}

// Crop calendar module
function showCropCalendarModal() {
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
                        <tr>
                            <td class="p-3 font-medium">Zaid</td>
                            <td class="p-3">Mar - Jun</td>
                            <td class="p-3">Jun - Jul</td>
                            <td class="p-3">Watermelon, Cucumber</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    ModalManager.open('<i class="fas fa-calendar-alt text-purple-500 mr-2"></i> <span data-translate="crop_calendar">Crop Calendar</span>', content, 'calendarModal');
}

// ============================================
// FORM HANDLING
// ============================================
function populateStates() {
    const stateSelect = document.getElementById('signUpState');
    if (!stateSelect) return;
    
    // Clear existing options except the first one
    stateSelect.innerHTML = '<option value="" data-translate="select_state">Select State</option>';
    
    // Add states alphabetically
    const states = Object.keys(districtData).sort();
    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });
    
    log('States populated');
}

function populateDistricts() {
    const stateSelect = document.getElementById('signUpState');
    const districtSelect = document.getElementById('signUpDistrict');
    
    if (!stateSelect || !districtSelect) return;
    
    const selectedState = stateSelect.value;
    
    // Clear districts
    districtSelect.innerHTML = '<option value="" data-translate="select_district">Select District</option>';
    
    if (selectedState && districtData[selectedState]) {
        // Add districts for selected state
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
// GLOBAL FUNCTIONS
// ============================================
window.showPage = PageManager.show;
window.handleSignUp = AuthManager.signUp;
window.handleLogin = AuthManager.login;
window.handleLogout = AuthManager.logout;
window.openWeatherModal = showWeatherModal;
window.openSeedModal = showSeedModal;
window.openFertilizerModal = showFertilizerModal;
window.openCropCalendarModal = showCropCalendarModal;
window.openMarketPricesModal = () => {
    ModalManager.open(
        '<i class="fas fa-chart-line text-yellow-600 mr-2"></i> <span data-translate="market_prices">Market Prices</span>',
        '<div class="text-center p-8"><div class="loader inline-block mb-4"></div><p>Fetching latest market prices...</p></div>',
        'marketModal'
    );
    
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

window.openSoilHealthModal = () => {
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
    
    ModalManager.open('<i class="fas fa-vial text-red-500 mr-2"></i> <span data-translate="soil_health">Soil Health</span>', content, 'soilModal');
};

window.closeModal = ModalManager.close;

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // State change listener
    const stateSelect = document.getElementById('signUpState');
    if (stateSelect) {
        stateSelect.addEventListener('change', populateDistricts);
    }
    
    // Form validation on blur
    const validateOnBlur = (fieldId, validator) => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('blur', function() {
                if (validator(this.value)) {
                    clearFieldError(fieldId);
                } else {
                    const messages = {
                        'signUpName': 'Please enter a valid name',
                        'signUpMobile': 'Please enter a valid 10-digit number',
                        'loginMobile': 'Please enter a valid 10-digit number'
                    };
                    showFieldError(fieldId, messages[fieldId] || 'Invalid input');
                }
            });
        }
    };
    
    validateOnBlur('signUpName', isValidName);
    validateOnBlur('signUpMobile', isValidMobile);
    validateOnBlur('loginMobile', isValidMobile);
});

window.addEventListener('load', function() {
    log('App starting initialization...');
    
    setTimeout(function() {
        const loadingScreen = document.getElementById('loadingScreen');
        const app = document.getElementById('app');
        
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
        
        if (app) {
            app.classList.remove('opacity-0');
        }
        
        // Initialize components
        LanguageManager.init();
        populateStates();
        AuthManager.checkSession();
        PageManager.updateNavigation();
        
        appState.isInitialized = true;
        log('App initialized successfully');
        
        if (!localStorage.getItem('agrifarmers_visited')) {
            setTimeout(() => {
                showToast('Welcome to Agrifarmers! Start your journey to better farming.', 'info', 5000);
                localStorage.setItem('agrifarmers_visited', 'true');
            }, 1000);
        }
        
    }, 1200);
});

// Handle page visibility change
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible' && appState.isInitialized) {
        log('App resumed from background');
    }
});
