/*
 * Agrifarmers Application Script
 * Version: 2.5.1 - Web Edition (Fixed Weather API)
 */
// ============================================
// PWA SERVICE WORKER REGISTRATION (GitHub Pages Compatible)
// ============================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // Use relative path for GitHub Pages
    const swUrl = './service-worker.js';
    
    navigator.serviceWorker.register(swUrl)
      .then(registration => {
        console.log('✅ Service Worker registered:', registration);
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          console.log('🔄 New service worker found:', newWorker.state);
          
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              console.log('📦 New content available!');
              // You can show an update notification here
            }
          });
        });
      })
      .catch(error => {
        console.log('❌ Service Worker registration failed:', error);
      });
    
    // Listen for messages from service worker
    navigator.serviceWorker.addEventListener('message', event => {
      console.log('📨 Message from Service Worker:', event.data);
    });
  });
}
// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
    // API Settings with fallbacks
    WEATHER_API_KEY: '44a55de0f2e0674cb9160f50459d51d4', 
    WEATHER_API_URL: 'https://api.openweathermap.org/data/2.5',
    CROP_PRICE_API: 'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070',
    
    // OTP Settings
    OTP_EXPIRY_MINUTES: 5,
    MAX_LOGIN_ATTEMPTS: 3,
    
    // App settings
    APP_NAME: 'Agrifarmers',
    VERSION: '2.5.1',
    DEBUG_MODE: true,
};

// ============================================
// COMPLETE TRANSLATIONS FOR ALL LANGUAGES
// ============================================
const translations = {
    en: {
        // App metadata
        app_title: "Agrifarmers - Your Farming Companion",
        app_name: "Agrifarmers",
        
        // Common
        loading_message: "Loading your farming assistant...",
        offline_label: "Offline",
        offline_mode: "Offline Mode - Some data may be cached",
        open_menu: "Open main menu",
        
        // Welcome Page
        welcome_title: "Welcome to Agrifarmers",
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
        
        // Weather Modal
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
        
        // Seed Modal
        seed_recommendation: "{season} Season",
        seed_tip: "Tip: Always use certified seeds from authorized dealers for better yield.",
        seed_consult: "Consult with local agriculture officer for region-specific recommendations.",
        
        // Fertilizer Modal
        npk_ratio: "NPK Ratio",
        nitrogen_phosphorus_potassium: "Nitrogen:Phosphorus:Potassium",
        application_time: "Application Time",
        before_sowing: "Before Sowing",
        basal_dose: "Basal dose recommended",
        soil_testing_important: "Important: Soil testing is recommended before fertilizer application.",
        
        // Crop Calendar Modal
        season: "Season",
        sowing: "Sowing",
        harvesting: "Harvesting",
        crops: "Crops",
        current_recommendation: "Current Recommendation",
        kharif_time: "Now is the perfect time for Kharif crops like Rice and Cotton.",
        rabi_time: "Now is the perfect time for Rabi crops like Wheat and Mustard.",
        zaid_time: "Now is good time for Zaid crops like Watermelon and Cucumber.",
        
        // Market Prices Modal
        wheat_price: "Wheat",
        rice_price: "Rice",
        cotton_price: "Cotton",
        per_quintal: "/q",
        fetching_prices: "Fetching latest market prices...",
        offline_prices: "Offline: Prices may not be current. Connect to internet for updates.",
        
        // Soil Health Modal
        soil_testing_steps: "Soil Testing Steps",
        soil_step_1: "Collect soil samples from different spots",
        soil_step_2: "Mix samples thoroughly",
        soil_step_3: "Visit nearest Krishi Vigyan Kendra",
        soil_step_4: "Get soil health card with recommendations",
        kvk_contact: "KVK Contact Info",
        kvk_info: "Search for nearest Krishi Vigyan Kendra (KVK) in your district. Most KVKs offer free soil testing services for farmers.",
        
        // OTP Translations
        otp_sent: "OTP Sent",
        otp_display: "Your OTP is",
        otp_verification: "OTP Verification",
        enter_otp: "Enter 6-digit OTP",
        verify_otp: "Verify OTP",
        resend_otp: "Resend OTP",
        proceed_to_verify: "Proceed to Verify",
        otp_valid_for: "OTP valid for {minutes} minutes",
        otp_demo_note: "In production, this would be sent via SMS",
        
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
        footer_sitemap: "Sitemap",
        
        // Toast Messages
        toast_online: "Back online!",
        toast_offline: "You are offline. Some features may be limited.",
        toast_login_success: "Login successful! Welcome back!",
        toast_signup_success: "Account created successfully! Welcome to Agrifarmers!",
        toast_logout: "Logged out successfully",
        toast_otp_sent: "OTP sent successfully!",
        toast_new_otp: "New OTP generated!",
        
        // Error Messages
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
        // App metadata
        app_title: "अग्रीफार्मर्स - आपका कृषि साथी",
        app_name: "अग्रीफार्मर्स",
        
        // Common
        loading_message: "आपका कृषि सहायक लोड हो रहा है...",
        offline_label: "ऑफलाइन",
        offline_mode: "ऑफलाइन मोड - कुछ डेटा कैश किया गया हो सकता है",
        open_menu: "मुख्य मेनू खोलें",
        
        // Welcome Page
        welcome_title: "अग्रीफार्मर्स में आपका स्वागत है",
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
        
        // Weather Modal
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
        
        // Seed Modal
        seed_recommendation: "{season} सीजन के लिए अनुशंसित",
        seed_tip: "टिप: बेहतर उपज के लिए हमेशा प्रमाणित बीज अधिकृत डीलरों से उपयोग करें।",
        seed_consult: "क्षेत्र-विशिष्ट सिफारिशों के लिए स्थानीय कृषि अधिकारी से परामर्श करें।",
        
        // Fertilizer Modal
        npk_ratio: "एनपीके अनुपात",
        nitrogen_phosphorus_potassium: "नाइट्रोजन:फॉस्फोरस:पोटेशियम",
        application_time: "आवेदन समय",
        before_sowing: "बुवाई से पहले",
        basal_dose: "बेसल खुराक की सिफारिश की जाती है",
        soil_testing_important: "महत्वपूर्ण: उर्वरक आवेदन से पहले मृदा परीक्षण की सिफारिश की जाती है।",
        
        // Crop Calendar Modal
        season: "मौसम",
        sowing: "बुवाई",
        harvesting: "कटाई",
        crops: "फसलें",
        current_recommendation: "वर्तमान सिफारिश",
        kharif_time: "अब खरीफ फसलों जैसे चावल और कपास के लिए सही समय है।",
        rabi_time: "अब रबी फसलों जैसे गेहूं और सरसों के लिए सही समय है।",
        zaid_time: "अब जायद फसलों जैसे तरबूज और खीरे के लिए अच्छा समय है।",
        
        // Market Prices Modal
        wheat_price: "गेहूं",
        rice_price: "चावल",
        cotton_price: "कपास",
        per_quintal: "/क्विंटल",
        fetching_prices: "नवीनतम बाजार मूल्य प्राप्त किए जा रहे हैं...",
        offline_prices: "ऑफलाइन: कीमतें वर्तमान नहीं हो सकती हैं। अपडेट के लिए इंटरनेट से कनेक्ट करें।",
        
        // Soil Health Modal
        soil_testing_steps: "मृदा परीक्षण चरण",
        soil_step_1: "विभिन्न स्थानों से मिट्टी के नमूने एकत्र करें",
        soil_step_2: "नमूनों को अच्छी तरह मिलाएं",
        soil_step_3: "निकटतम कृषि विज्ञान केंद्र पर जाएं",
        soil_step_4: "सिफारिशों के साथ मृदा स्वास्थ्य कार्ड प्राप्त करें",
        kvk_contact: "केवीके संपर्क जानकारी",
        kvk_info: "अपने जिले में निकटतम कृषि विज्ञान केंद्र (केवीके) खोजें। अधिकांश केवीके किसानों के लिए मुफ्त मृदा परीक्षण सेवाएं प्रदान करते हैं।",
        
        // OTP Translations
        otp_sent: "ओटीपी भेजा गया",
        otp_display: "आपका ओटीपी है",
        otp_verification: "ओटीपी सत्यापन",
        enter_otp: "6-अंकीय ओटीपी दर्ज करें",
        verify_otp: "ओटीपी सत्यापित करें",
        resend_otp: "ओटीपी पुनः भेजें",
        proceed_to_verify: "सत्यापित करने के लिए आगे बढ़ें",
        otp_valid_for: "ओटीपी {minutes} मिनट के लिए वैध",
        otp_demo_note: "वास्तविक उपयोग में, यह एसएमएस द्वारा भेजा जाएगा",
        
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
        footer_sitemap: "साइटमैप",
        
        // Toast Messages
        toast_online: "ऑनलाइन वापस!",
        toast_offline: "आप ऑफलाइन हैं। कुछ सुविधाएं सीमित हो सकती हैं।",
        toast_login_success: "लॉगिन सफल! वापसी पर स्वागत है!",
        toast_signup_success: "खाता सफलतापूर्वक बनाया गया! अग्रीफार्मर्स में आपका स्वागत है!",
        toast_logout: "सफलतापूर्वक लॉग आउट किया गया",
        toast_otp_sent: "ओटीपी सफलतापूर्वक भेजा गया!",
        toast_new_otp: "नया ओटीपी जनरेट किया गया!",
        
        // Error Messages
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
        // App metadata
        app_title: "ਅਗਰੀਫਾਰਮਰਜ਼ - ਤੁਹਾਡਾ ਖੇਤੀ ਸਾਥੀ",
        app_name: "ਅਗਰੀਫਾਰਮਰਜ਼",
        
        // Common
        loading_message: "ਤੁਹਾਡਾ ਖੇਤੀ ਸਹਾਇਕ ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
        offline_label: "ਔਫਲਾਈਨ",
        offline_mode: "ਔਫਲਾਈਨ ਮੋਡ - ਕੁਝ ਡੇਟਾ ਕੈਸ਼ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ",
        open_menu: "ਮੁੱਖ ਮੇਨੂ ਖੋਲ੍ਹੋ",
        
        // Welcome Page
        welcome_title: "ਅਗਰੀਫਾਰਮਰਜ਼ ਵਿੱਚ ਜੀ ਆਇਆਂ ਨੂੰ",
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
        
        // Weather Modal
        current_weather: "ਮੌਜੂਦਾ ਮੌਸਮ",
        feels_like: "ਮਹਿਸੂਸ ਹੁੰਦਾ ਹੈ",
        humidity: "ਨਮੀ",
        wind: "ਹਵਾ",
        pressure: "ਦਬਾਅ",
        visibility: "ਦ੍ਰਿਸ਼ਟੀ",
        sunrise: "ਸੂਰਜ ਚੜ੍ਹਨਾ",
        sunset: "ਸੂਰਜ ਡੁੱਬਣਾ",
        forecast: "5-ਦਿਨ ਪੁਰਵਾਨੁਮਾਨ",
        weather_loading: "ਮੌਸਮ ਡੇਟਾ ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
        weather_error: "ਮੌਸਮ ਡੇਟਾ ਪ੍ਰਾਪਤ ਕਰਨ ਵਿੱਚ ਅਸਮਰੱਥ",
        offline_weather: "ਔਫਲਾਈਨ ਮੌਸਮ ਡੇਟਾ",
        farming_advisory: "ਖੇਤੀ ਸਲਾਹ",
        high_temp_alert: "ਉੱਚ ਤਾਪਮਾਨ ਚੇਤਾਵਨੀ! ਸਵੇਰੇ ਜਲਦੀ ਜਾਂ ਸ਼ਾਮ ਨੂੰ ਫਸਲਾਂ ਨੂੰ ਪਾਣੀ ਦਿਓ।",
        low_temp_alert: "ਘੱਟ ਤਾਪਮਾਨ! ਸੰਵੇਦਨਸ਼ੀਲ ਫਸਲਾਂ ਨੂੰ ਕਵਰਾਂ ਨਾਲ ਬਚਾਓ।",
        good_weather_alert: "ਖੇਤੀ ਦੀਆਂ ਗਤੀਵਿਧੀਆਂ ਲਈ ਚੰਗਾ ਮੌਸਮ। ਸਿੰਚਾਈ ਅਤੇ ਖਾਦ ਲਈ ਆਦਰਸ਼।",
        connect_internet: "ਰੀਅਲ-ਟਾਈਮ ਅੱਪਡੇਟਾਂ ਲਈ ਇੰਟਰਨੈੱਟ ਨਾਲ ਕਨੈਕਟ ਕਰੋ",
        
        // Seed Modal
        seed_recommendation: "{season} ਸੀਜ਼ਨ ਲਈ ਸਿਫਾਰਸ਼ ਕੀਤਾ ਗਿਆ",
        seed_tip: "ਟਿਪ: ਬਿਹਤਰ ਪੈਦਾਵਾਰ ਲਈ ਹਮੇਸ਼ਾ ਪ੍ਰਮਾਣਿਤ ਬੀਜ ਅਧਿਕ੍ਰਿਤ ਡੀਲਰਾਂ ਤੋਂ ਵਰਤੋਂ ਕਰੋ।",
        seed_consult: "ਖੇਤਰ-ਵਿਸ਼ੇਸ਼ ਸਿਫਾਰਸ਼ਾਂ ਲਈ ਸਥਾਨਕ ਖੇਤੀ ਅਧਿਕਾਰੀ ਨਾਲ ਸਲਾਹ ਕਰੋ।",
        
        // Fertilizer Modal
        npk_ratio: "ਐਨਪੀਕੇ ਅਨੁਪਾਤ",
        nitrogen_phosphorus_potassium: "ਨਾਈਟ੍ਰੋਜਨ:ਫਾਸਫੋਰਸ:ਪੋਟਾਸ਼ੀਅਮ",
        application_time: "ਐਪਲੀਕੇਸ਼ਨ ਸਮਾਂ",
        before_sowing: "ਬਿਜਾਈ ਤੋਂ ਪਹਿਲਾਂ",
        basal_dose: "ਬੇਸਲ ਖੁਰਾਕ ਦੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ",
        soil_testing_important: "ਮਹੱਤਵਪੂਰਨ: ਖਾਦ ਦੀ ਅਰਜ਼ੀ ਤੋਂ ਪਹਿਲਾਂ ਮਿੱਟੀ ਟੈਸਟਿੰਗ ਦੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।",
        
        // Crop Calendar Modal
        season: "ਮੌਸਮ",
        sowing: "ਬਿਜਾਈ",
        harvesting: "ਕਟਾਈ",
        crops: "ਫਸਲਾਂ",
        current_recommendation: "ਮੌਜੂਦਾ ਸਿਫਾਰਸ਼",
        kharif_time: "ਹੁਣ ਖਰੀਫ ਫਸਲਾਂ ਜਿਵੇਂ ਚਾਵਲ ਅਤੇ ਕਪਾਹ ਲਈ ਸਹੀ ਸਮਾਂ ਹੈ।",
        rabi_time: "ਹੁਣ ਰਬੀ ਫਸਲਾਂ ਜਿਵੇਂ ਕਣਕ ਅਤੇ ਸਰੋਂ ਲਈ ਸਹੀ ਸਮਾਂ ਹੈ।",
        zaid_time: "ਹੁਣ ਜ਼ੈਦ ਫਸਲਾਂ ਜਿਵੇਂ ਤਰਬੂਜ਼ ਅਤੇ ਖੀਰਾ ਲਈ ਚੰਗਾ ਸਮਾਂ ਹੈ।",
        
        // Market Prices Modal
        wheat_price: "ਕਣਕ",
        rice_price: "ਚਾਵਲ",
        cotton_price: "ਕਪਾਹ",
        per_quintal: "/ਕੁਇੰਟਲ",
        fetching_prices: "ਨਵੀਨਤਮ ਬਾਜ਼ਾਰ ਕੀਮਤਾਂ ਪ੍ਰਾਪਤ ਕੀਤੀਆਂ ਜਾ ਰਹੀਆਂ ਹਨ...",
        offline_prices: "ਔਫਲਾਈਨ: ਕੀਮਤਾਂ ਮੌਜੂਦਾ ਨਹੀਂ ਹੋ ਸਕਦੀਆਂ। ਅੱਪਡੇਟਾਂ ਲਈ ਇੰਟਰਨੈੱਟ ਨਾਲ ਕਨੈਕਟ ਕਰੋ।",
        
        // Soil Health Modal
        soil_testing_steps: "ਮਿੱਟੀ ਟੈਸਟਿੰਗ ਕਦਮ",
        soil_step_1: "ਵੱਖ-ਵੱਖ ਸਥਾਨਾਂ ਤੋਂ ਮਿੱਟੀ ਦੇ ਨਮੂਨੇ ਇਕੱਠੇ ਕਰੋ",
        soil_step_2: "ਨਮੂਨਿਆਂ ਨੂੰ ਚੰਗੀ ਤਰ੍ਹਾਂ ਮਿਲਾਓ",
        soil_step_3: "ਨਜ਼ਦੀਕੀ ਕ੍ਰਿਸ਼ੀ ਵਿਗਿਆਨ ਕੇਂਦਰ 'ਤੇ ਜਾਓ",
        soil_step_4: "ਸਿਫਾਰਸ਼ਾਂ ਦੇ ਨਾਲ ਮਿੱਟੀ ਸਿਹਤ ਕਾਰਡ ਪ੍ਰਾਪਤ ਕਰੋ",
        kvk_contact: "ਕੇਵੀਕੇ ਸੰਪਰਕ ਜਾਣਕਾਰੀ",
        kvk_info: "ਆਪਣੇ ਜ਼ਿਲ੍ਹੇ ਵਿੱਚ ਨਜ਼ਦੀਕੀ ਕ੍ਰਿਸ਼ੀ ਵਿਗਿਆਨ ਕੇਂਦਰ (ਕੇਵੀਕੇ) ਖੋਜੋ। ਜ਼ਿਆਦਾਤਰ ਕੇਵੀਕੇ ਕਿਸਾਨਾਂ ਲਈ ਮੁਫਤ ਮਿੱਟੀ ਟੈਸਟਿੰਗ ਸੇਵਾਵਾਂ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਨ।",
        
        // OTP Translations
        otp_sent: "ਓਟੀਪੀ ਭੇਜਿਆ ਗਿਆ",
        otp_display: "ਤੁਹਾਡਾ ਓਟੀਪੀ ਹੈ",
        otp_verification: "ਓਟੀਪੀ ਪੁਸ਼ਟੀਕਰਨ",
        enter_otp: "6-ਅੰਕੀ ਓਟੀਪੀ ਦਰਜ ਕਰੋ",
        verify_otp: "ਓਟੀਪੀ ਤਸਦੀਕ ਕਰੋ",
        resend_otp: "ਓਟੀਪੀ ਮੁੜ ਭੇਜੋ",
        proceed_to_verify: "ਤਸਦੀਕ ਕਰਨ ਲਈ ਅੱਗੇ ਵਧੋ",
        otp_valid_for: "ਓਟੀਪੀ {minutes} ਮਿੰਟ ਲਈ ਵੈਧ",
        otp_demo_note: "ਅਸਲ ਵਰਤੋਂ ਵਿੱਚ, ਇਹ ਐਸਐਮਐਸ ਦੁਆਰਾ ਭੇਜਿਆ ਜਾਵੇਗਾ",
        
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
        footer_sitemap: "ਸਾਈਟਮੈਪ",
        
        // Toast Messages
        toast_online: "ਔਨਲਾਈਨ ਵਾਪਸ!",
        toast_offline: "ਤੁਸੀਂ ਔਫਲਾਈਨ ਹੋ। ਕੁਝ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਸੀਮਿਤ ਹੋ ਸਕਦੀਆਂ ਹਨ।",
        toast_login_success: "ਲੌਗਇਨ ਸਫਲ! ਵਾਪਸੀ 'ਤੇ ਸੁਆਗਤ ਹੈ!",
        toast_signup_success: "ਖਾਤਾ ਸਫਲਤਾਪੂਰਵਕ ਬਣਾਇਆ ਗਿਆ! ਅਗਰੀਫਾਰਮਰਜ਼ ਵਿੱਚ ਜੀ ਆਇਆਂ ਨੂੰ!",
        toast_logout: "ਸਫਲਤਾਪੂਰਵਕ ਲੌਗ ਆਊਟ ਕੀਤਾ ਗਿਆ",
        toast_otp_sent: "ਓਟੀਪੀ ਸਫਲਤਾਪੂਰਵਕ ਭੇਜਿਆ ਗਿਆ!",
        toast_new_otp: "ਨਵਾਂ ਓਟੀਪੀ ਜਨਰੇਟ ਕੀਤਾ ਗਿਆ!",
        
        // Error Messages
        error_no_account: "ਕੋਈ ਖਾਤਾ ਨਹੀਂ ਮਿਲਿਆ। ਕਿਰਪਾ ਕਰਕੇ ਪਹਿਲਾਂ ਸਾਈਨ ਅੱਪ ਕਰੋ।",
        error_invalid_otp: "ਅਵੈਧ ਓਟੀਪੀ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        error_network: "ਨੈੱਟਵਰਕ ਗਲਤੀ। ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਕਨੈਕਸ਼ਨ ਜਾਂਚੋ।",
        retry: "ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ",
        close: "ਬੰਦ ਕਰੋ",
        online: "ਔਨਲਾਈਨ",
        offline_limited: "ਔਫਲਾਈਨ - ਸੀਮਿਤ ਕਾਰਜਸ਼ੀਲਤਾ",
        tip: "ਟਿਪ",
        important: "ਮਹੱਤਵਪੂਰਨ",
        invalid_input: "ਅਵੈਧ ਇਨਪੁੱਟ",
        checking_connectivity: "ਕਨੈਕਟੀਵਿਟੀ ਦੀ ਜਾਂਚ ਕਰ ਰਿਹਾ ਹੈ...",
    }
};

// ============================================
// ENHANCED TRANSLATION SYSTEM
// ============================================
class TranslationSystem {
    constructor() {
        this.currentLang = 'en';
        this.initialized = false;
    }
    
    init() {
        // Load saved language preference
        const savedLang = localStorage.getItem('agrifarmers_language');
        if (savedLang && translations[savedLang]) {
            this.currentLang = savedLang;
        }
        
        this.setupEventListeners();
        this.updateLanguageDisplay();
        this.applyTranslations();
        this.initialized = true;
        
        console.log(`🌐 Translation system initialized with language: ${this.currentLang}`);
    }
    
    setupEventListeners() {
        // Setup all language selectors
        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const lang = e.currentTarget.getAttribute('data-lang');
                this.changeLanguage(lang);
                
                // Close dropdown
                document.querySelectorAll('.language-selector').forEach(selector => {
                    selector.classList.remove('active');
                });
            });
        });
        
        // Language selector toggle
        document.querySelectorAll('#desktop-language-btn, #mobile-language-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const selector = e.currentTarget.closest('.language-selector');
                if (selector) {
                    selector.classList.toggle('active');
                }
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            document.querySelectorAll('.language-selector').forEach(selector => {
                selector.classList.remove('active');
            });
        });
    }
    
    changeLanguage(langCode) {
        if (!translations[langCode]) {
            console.error(`Language ${langCode} not supported`);
            return;
        }
        
        this.currentLang = langCode;
        localStorage.setItem('agrifarmers_language', langCode);
        
        this.updateLanguageDisplay();
        this.applyTranslations();
        
        console.log(`🌐 Language changed to: ${langCode}`);
    }
    
    updateLanguageDisplay() {
        // Update all language display elements
        document.querySelectorAll('#current-language, #current-language-desktop').forEach(el => {
            el.textContent = this.currentLang.toUpperCase();
        });
    }
    
    applyTranslations() {
        // 1. Translate all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getTranslation(key);
            
            if (translation) {
                this.applyTranslationToElement(element, translation);
            }
        });
        
        // 2. Update page title
        const titleTranslation = this.getTranslation('app_title');
        if (titleTranslation) {
            document.title = titleTranslation;
        }
        
        console.log('🌐 Translations applied');
    }
    
    getTranslation(key, params = {}) {
        let translation = translations[this.currentLang]?.[key] || translations['en'][key] || key;
        
        // Replace parameters in translation
        Object.keys(params).forEach(param => {
            translation = translation.replace(`{${param}}`, params[param]);
        });
        
        return translation;
    }
    
    applyTranslationToElement(element, translation) {
        const tagName = element.tagName.toLowerCase();
        
        if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
            // For form elements, set placeholder
            if (element.hasAttribute('placeholder')) {
                element.setAttribute('placeholder', translation);
            }
            
            // For buttons with value attribute
            if (element.hasAttribute('value')) {
                element.setAttribute('value', translation);
            }
        } else if (tagName === 'img' && element.hasAttribute('alt')) {
            // For images with alt text
            element.setAttribute('alt', translation);
        } else if (tagName === 'meta' && element.hasAttribute('content')) {
            // For meta tags
            element.setAttribute('content', translation);
        } else {
            // For regular elements, set text content
            element.textContent = translation;
        }
    }
    
    // Helper method for dynamic content generation
    t(key, params = {}) {
        return this.getTranslation(key, params);
    }
}

// Create global translation instance
const translator = new TranslationSystem();

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
    isOfflineMode: false
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
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
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
// MODAL MANAGEMENT (Updated for translations)
// ============================================
const ModalManager = {
    currentModal: null,
    
    open(title, content, modalId = 'genericModal') {
        const container = document.getElementById('modal-container');
        
        // Close any existing modal
        this.close();
        
        // Translate title if it's a translation key
        let translatedTitle = title;
        if (title.startsWith('translate:')) {
            const key = title.replace('translate:', '').trim();
            translatedTitle = translator.t(key);
        }
        
        container.innerHTML = `
            <div id="${modalId}" class="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden animate-fadeIn">
                <div class="flex items-center justify-between p-6 border-b">
                    <h3 class="text-2xl font-bold text-gray-800">${translatedTitle}</h3>
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
        
        // Apply translations to modal content
        setTimeout(() => {
            translator.applyTranslations();
        }, 100);
        
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
        setTimeout(() => {
            translator.applyTranslations();
        }, 50);
    }
};

// ============================================
// DISTRICT DATA (Moved to top to prevent loading issues)
// ============================================
const districtData = {
    "Haryana": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
    "Punjab": ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Mohali", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sangrur", "Shaheed Bhagat Singh Nagar", "Tarn Taran"],
    "Delhi": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"]
};

// ============================================
// FORM HANDLING
// ============================================
function populateStates() {
    try {
        const stateSelect = document.getElementById('signUpState');
        if (!stateSelect) {
            console.log('State select element not found');
            return;
        }
        
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
        
        log('States populated successfully');
    } catch (error) {
        console.error('Error populating states:', error);
    }
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
        const networkStatus = document.getElementById('network-status');
        const offlineBanner = document.getElementById('offline-mode-banner');
        
        if (this.isOnline) {
            if (offlineIndicator) offlineIndicator.classList.add('hidden');
            if (offlineBanner) offlineBanner.classList.add('hidden');
            
            if (networkStatus) {
                networkStatus.textContent = translator.t('online');
                networkStatus.className = 'fixed top-16 left-0 right-0 z-40 text-center p-2 text-sm font-medium bg-green-500 text-white';
                setTimeout(() => {
                    if (networkStatus) networkStatus.classList.add('hidden');
                }, 2000);
            }
        } else {
            if (offlineIndicator) offlineIndicator.classList.remove('hidden');
            if (offlineBanner) offlineBanner.classList.remove('hidden');
            
            if (networkStatus) {
                networkStatus.textContent = translator.t('offline_limited');
                networkStatus.className = 'fixed top-16 left-0 right-0 z-40 text-center p-2 text-sm font-medium bg-yellow-500 text-white';
            }
        }
        
        // Update the global app state
        appState.isOfflineMode = !this.isOnline;
    }
};

// ============================================
// OFFLINE DATA CACHE
// ============================================
const OfflineCache = {
  async cacheWeatherData(data) {
    try {
      localStorage.setItem('cached_weather', JSON.stringify({
        data: data,
        timestamp: Date.now()
      }));
    } catch (error) {
      console.log('Weather cache error:', error);
    }
  },
  
  async getCachedWeatherData() {
    try {
      const cached = localStorage.getItem('cached_weather');
      if (cached) {
        const parsed = JSON.parse(cached);
        // Return data if less than 1 hour old
        if (Date.now() - parsed.timestamp < 60 * 60 * 1000) {
          return parsed.data;
        }
      }
    } catch (error) {
      console.log('Get cached weather error:', error);
    }
    return null;
  },
  
  async cacheMarketPrices(prices) {
    try {
      localStorage.setItem('cached_prices', JSON.stringify({
        data: prices,
        timestamp: Date.now()
      }));
    } catch (error) {
      console.log('Prices cache error:', error);
    }
  },
  
  async getCachedMarketPrices() {
    try {
      const cached = localStorage.getItem('cached_prices');
      if (cached) {
        const parsed = JSON.parse(cached);
        // Return data if less than 24 hours old
        if (Date.now() - parsed.timestamp < 24 * 60 * 60 * 1000) {
          return parsed.data;
        }
      }
    } catch (error) {
      console.log('Get cached prices error:', error);
    }
    return null;
  },
  
  clearOldCache() {
    // Clear cache older than 7 days
    const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    
    ['cached_weather', 'cached_prices'].forEach(key => {
      try {
        const cached = localStorage.getItem(key);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (parsed.timestamp < weekAgo) {
            localStorage.removeItem(key);
          }
        }
      } catch (error) {
        // Silently fail
      }
    });
  }
};

// Initialize offline cache
OfflineCache.clearOldCache();

// ============================================
// WEATHER SERVICE (FIXED VERSION - REAL API INTEGRATION)
// ============================================
const WeatherService = {
    async getWeatherData(city = null) {
        try {
            let location = city || 'Delhi';
            
            if (appState.activeUser && appState.activeUser.district) {
                location = appState.activeUser.district;
            }
            
            // FIRST: Check if we're online
            if (NetworkManager.isOnline) {
                // Try to fetch REAL weather data
                const realWeather = await this.fetchRealWeather(location);
                if (realWeather && !realWeather.error) {
                    // Cache the real data
                    await OfflineCache.cacheWeatherData(realWeather);
                    console.log('✅ Using real weather API data');
                    return {
                        ...realWeather,
                        isMockData: false,
                        source: 'api'
                    };
                }
            }
            
            // SECOND: If online fetch failed or we're offline, try cache
            const cachedData = await OfflineCache.getCachedWeatherData();
            if (cachedData) {
                console.log('🔄 Using cached weather data');
                return {
                    ...cachedData,
                    isMockData: false,
                    source: 'cache',
                    cached: true
                };
            }
            
            // THIRD: Only as last resort, use mock data
            console.log("⚠️ Using offline weather data - no real API data available");
            return {
                ...this.getMockWeatherData(),
                isMockData: true,
                source: 'mock'
            };
            
        } catch (error) {
            log('Weather API error:', error);
            // Try cache first on error
            const cachedData = await OfflineCache.getCachedWeatherData();
            if (cachedData) {
                return {
                    ...cachedData,
                    isMockData: false,
                    source: 'cache',
                    cached: true
                };
            }
            // Last resort: mock data
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
            
            // Check if API key is valid
            if (!apiKey || apiKey === '44a55de0f2e0674cb9160f50459d51d4') {
                console.warn('⚠️ Using default/possibly invalid API key');
            }
            
            // IMPORTANT: Add &units=metric for Celsius
            const url = `${CONFIG.WEATHER_API_URL}/weather?q=${encodeURIComponent(location)}&appid=${apiKey}&units=metric`;
            
            console.log("🌤️ Fetching weather from:", url);
            
            const response = await fetch(url);
            
            if (!response.ok) {
                console.error(`❌ Weather API error: ${response.status}`);
                if (response.status === 401) {
                    return { error: 'Invalid API key', status: 401 };
                }
                if (response.status === 404) {
                    // Try with default location
                    const defaultUrl = `${CONFIG.WEATHER_API_URL}/weather?q=Delhi&appid=${apiKey}&units=metric`;
                    const defaultResponse = await fetch(defaultUrl);
                    if (defaultResponse.ok) {
                        const data = await defaultResponse.json();
                        return this.transformWeatherData(data);
                    }
                }
                throw new Error(`Weather API error: ${response.status}`);
            }
            
            const data = await response.json();
            return this.transformWeatherData(data);
            
        } catch (error) {
            console.error("❌ Failed to fetch real weather:", error);
            return null;
        }
    },
    
    transformWeatherData(data) {
        return {
            current: {
                temp: Math.round(data.main.temp),
                feelsLike: Math.round(data.main.feels_like),
                humidity: data.main.humidity,
                windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
                windDirection: this.getWindDirection(data.wind.deg),
                description: data.weather[0].description,
                icon: data.weather[0].icon,
                pressure: data.main.pressure,
                sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                visibility: (data.visibility / 1000).toFixed(1) // Convert meters to km
            },
            location: `${data.name}, ${data.sys.country}`,
            coordinates: {
                lat: data.coord.lat,
                lon: data.coord.lon
            }
        };
    },
    
    getWindDirection(degrees) {
        if (degrees === undefined) return 'N/A';
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
            location: appState.activeUser?.district || 'Delhi',
            coordinates: { lat: 28.7041, lon: 77.1025 }
        };
    },
    
    // DEBUG FUNCTION: Test API connection
    async testAPI() {
        console.clear();
        console.log("=== 🌤️ Weather API Debug Test ===");
        
        const apiKey = CONFIG.WEATHER_API_KEY;
        const testUrl = `https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${apiKey}&units=metric`;
        
        console.log("🔍 Testing OpenWeather API...");
        console.log("API Key (first 8 chars):", apiKey.substring(0, 8) + "...");
        console.log("Full API Key:", apiKey);
        console.log("URL:", testUrl);
        console.log("Network Status:", NetworkManager.isOnline ? 'Online ✅' : 'Offline ❌');
        
        try {
            const response = await fetch(testUrl);
            console.log("✅ Response status:", response.status);
            
            if (response.ok) {
                const data = await response.json();
                console.log("✅ API is WORKING! Data received:");
                console.log("Location:", data.name);
                console.log("Temperature:", data.main.temp + "°C");
                console.log("Weather:", data.weather[0].description);
                console.log("Full response:", data);
                
                showToast("✅ Weather API is working! Temperature: " + data.main.temp + "°C", 'success', 5000);
                return { success: true, data: data };
            } else {
                console.log("❌ API Failed. Status:", response.status);
                if (response.status === 401) {
                    console.log("❌ INVALID API KEY! Get a new one from: https://home.openweathermap.org/api_keys");
                    console.log("💡 TIP: Your current key might be:", apiKey);
                    showToast("❌ Invalid API Key. Get a new one from OpenWeather", 'error', 5000);
                } else if (response.status === 429) {
                    console.log("❌ Rate limit exceeded. Try again later.");
                    showToast("⚠️ Rate limit exceeded. Try again later.", 'warning', 5000);
                }
                return { success: false, status: response.status };
            }
        } catch (error) {
            console.error("❌ Test Failed:", error);
            showToast("❌ API Test Failed: " + error.message, 'error', 5000);
            return { success: false, error: error.message };
        }
    }
};

// ============================================
// WEATHER MODULE (Translated)
// ============================================
async function showWeatherModal() {
    // Show loading state
    const loadingContent = `
        <div class="text-center p-8">
            <div class="loader inline-block mb-4"></div>
            <p class="text-gray-600" data-translate="weather_loading">Loading weather data...</p>
            <p class="text-sm text-gray-500 mt-2">${translator.t('checking_connectivity') || 'Checking connectivity...'}</p>
        </div>
    `;
    
    ModalManager.open(
        `translate:weather_info`,
        loadingContent,
        'weatherModal'
    );
    
    try {
        // Fetch weather data
        const weatherData = await WeatherService.getWeatherData();
        const isOfflineData = weatherData.isMockData || !NetworkManager.isOnline;
        const isCachedData = weatherData.source === 'cache';
        
        // Get current season for advisory
        let advisoryMessage = translator.t('good_weather_alert');
        if (weatherData.current.temp > 35) {
            advisoryMessage = translator.t('high_temp_alert');
        } else if (weatherData.current.temp < 10) {
            advisoryMessage = translator.t('low_temp_alert');
        }
        
        const content = `
            <div class="space-y-6">
                <!-- Location and source indicator -->
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
                
                <!-- Current Weather -->
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
                    
                    <!-- Weather details -->
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
                    
                    <!-- Sunrise/Sunset -->
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
                
                <!-- Farming Advisory -->
                <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <div class="flex items-start">
                        <i class="fas fa-lightbulb text-yellow-600 mt-1 mr-3"></i>
                        <div>
                            <p class="font-medium text-yellow-800" data-translate="farming_advisory">Farming Advisory</p>
                            <p class="text-sm text-yellow-700 mt-1">
                                ${advisoryMessage}
                            </p>
                            ${isOfflineData ? `
                                <p class="text-xs text-yellow-600 mt-2">
                                    <i class="fas fa-info-circle mr-1"></i>
                                    ${translator.t('connect_internet')}
                                </p>
                            ` : ''}
                        </div>
                    </div>
                </div>
                
                <!-- Debug section -->
                <div class="mt-8 pt-4 border-t border-gray-200">
                    <button onclick="debugWeatherAPI()" 
                        class="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded mr-2">
                        🔍 Test API Connection
                    </button>
                    <button onclick="showWeatherSourceInfo()" 
                        class="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded">
                        ℹ️ Data Source Info
                    </button>
                </div>
            </div>
        `;
        
        // Update modal content
        const modalContent = document.querySelector('#weatherModal .overflow-y-auto');
        if (modalContent) {
            modalContent.innerHTML = content;
            // Apply translations to new content
            translator.applyTranslations();
        }
        
    } catch (error) {
        log('Weather modal error:', error);
        
        const errorContent = `
            <div class="text-center p-8">
                <i class="fas fa-exclamation-triangle text-5xl text-red-500 mb-4"></i>
                <h4 class="text-xl font-bold mb-2" data-translate="weather_error">Unable to fetch weather data</h4>
                <p class="text-gray-600 mb-4">${translator.t('error_network') || 'Please check your internet connection and try again.'}</p>
                <div class="flex flex-col gap-2">
                    <button onclick="showWeatherModal()" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        ${translator.t('retry') || 'Retry'}
                    </button>
                    <button onclick="debugWeatherAPI()" class="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
                        🔍 Debug API
                    </button>
                    <button onclick="ModalManager.close()" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors">
                        ${translator.t('close') || 'Close'}
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
// OTHER MODULES (Translated)
// ============================================
function showSeedModal() {
    const seasons = {
        "Kharif": ["Rice", "Maize", "Cotton", "Soybean", "Groundnut"],
        "Rabi": ["Wheat", "Barley", "Mustard", "Gram", "Peas"],
        "Zaid": ["Watermelon", "Muskmelon", "Cucumber", "Bitter Gourd"]
    };
    
    // Determine current season based on month
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
                        <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                            ${crop}
                        </span>
                    `).join('')}
                </div>
            </div>
            
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p class="text-sm text-yellow-800">
                    <i class="fas fa-lightbulb mr-2"></i>
                    <strong>${translator.t('tip') || 'Tip'}:</strong> ${translator.t('seed_tip')}
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
    
    // Determine current recommendation
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
// DEBUG FUNCTIONS
// ============================================
window.debugWeatherAPI = async function() {
    console.clear();
    console.log("=== 🌤️ Weather API Debug ===");
    const result = await WeatherService.testAPI();
    
    if (result.success) {
        showToast("✅ Weather API is working! Temperature: " + result.data.main.temp + "°C", 'success', 5000);
    } else {
        showToast("❌ Weather API failed. Check console for details.", 'error', 5000);
    }
};

window.showWeatherSourceInfo = function() {
    const content = `
        <div class="space-y-4">
            <h4 class="font-bold text-lg">ℹ️ Weather Data Source Info</h4>
            
            <div class="space-y-3">
                <div class="p-3 bg-gray-50 rounded-lg">
                    <p class="font-medium">API Status:</p>
                    <p>• Online: ${NetworkManager.isOnline ? '✅ Yes' : '❌ No'}</p>
                    <p>• API Key: ${CONFIG.WEATHER_API_KEY.substring(0, 8)}...</p>
                    <p>• Last Test: <span id="last-api-test">Not tested</span></p>
                </div>
                
                <div class="p-3 bg-blue-50 rounded-lg">
                    <p class="font-medium">Data Sources (in order):</p>
                    <ol class="list-decimal list-inside ml-2 space-y-1">
                        <li>Real-time API (when online)</li>
                        <li>Cached data (up to 1 hour old)</li>
                        <li>Offline mock data (last resort)</li>
                    </ol>
                </div>
                
                <div class="p-3 bg-yellow-50 rounded-lg">
                    <p class="font-medium">Troubleshooting:</p>
                    <p>1. Check if API key is valid</p>
                    <p>2. Ensure internet connection</p>
                    <p>3. Check browser console (F12)</p>
                    <p>4. Test API with button below</p>
                </div>
            </div>
            
            <div class="flex gap-2">
                <button onclick="debugWeatherAPI()" 
                    class="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    🔍 Test API Now
                </button>
                <button onclick="ModalManager.close()" 
                    class="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
                    Close
                </button>
            </div>
        </div>
    `;
    
    ModalManager.open('Weather Source Information', content, 'weatherSourceModal');
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
    
    // Create user object
    const user = {
        name: name,
        mobile: mobile,
        state: state,
        district: district,
        verified: true,
        joined: new Date().toISOString(),
        lastLogin: new Date().toISOString()
    };
    
    // Save user to localStorage
    localStorage.setItem('agrifarmers_user', JSON.stringify(user));
    appState.activeUser = user;
    
    // Show home page
    PageManager.show('homePage');
    
    // Update user display
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
    
    // Check if user exists in localStorage
    const storedUser = localStorage.getItem('agrifarmers_user');
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.mobile === mobile) {
            appState.activeUser = user;
            user.lastLogin = new Date().toISOString();
            localStorage.setItem('agrifarmers_user', JSON.stringify(user));
            
            PageManager.show('homePage');
            
            // Update user display
            const nameEl = document.getElementById('farmerName');
            const locationEl = document.getElementById('farmerLocation');
            if (nameEl) nameEl.textContent = user.name;
            if (locationEl) locationEl.textContent = `${user.district}, ${user.state}`;
            
            showToast(translator.t('toast_login_success'), 'success');
            return;
        }
    }
    
    showFieldError('loginMobile', translator.t('error_no_account'));
};

window.handleLogout = function() {
    appState.activeUser = null;
    PageManager.show('welcomePage');
    showToast(translator.t('toast_logout'), 'info');
    log('User logged out');
};

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
                        'signUpName': translator.t('name_error'),
                        'signUpMobile': translator.t('mobile_error'),
                        'loginMobile': translator.t('mobile_error')
                    };
                    showFieldError(fieldId, messages[fieldId] || translator.t('invalid_input') || 'Invalid input');
                }
            });
        }
    };
    
    validateOnBlur('signUpName', isValidName);
    validateOnBlur('signUpMobile', isValidMobile);
    validateOnBlur('loginMobile', isValidMobile);
    
    // Lazy load images
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
    
    // PWA Installation
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('./service-worker.js')
                .then(function(registration) {
                    console.log('ServiceWorker registration successful');
                })
                .catch(function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }
});

// ============================================
// APP INITIALIZATION (FIXED - No Loading Stuck)
// ============================================
window.addEventListener('load', function() {
    log('App starting initialization...');
    
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingProgress = document.getElementById('loading-progress');
    const app = document.getElementById('app');
    
    const updateLoading = (message) => {
        if (loadingProgress) {
            loadingProgress.textContent = message;
        }
    };
    
    updateLoading('Initializing app...');
    
    // Use a shorter timeout to prevent sticking
    setTimeout(function() {
        try {
            updateLoading('Loading network manager...');
            NetworkManager.init();
            
            updateLoading('Loading translation system...');
            translator.init();
            
            updateLoading('Loading states data...');
            // This should be quick now
            setTimeout(() => {
                populateStates();
                
                updateLoading('Setting up navigation...');
                PageManager.updateNavigation();
                
                appState.isInitialized = true;
                
                // Hide loading screen after all initialization
                setTimeout(() => {
                    if (loadingScreen) {
                        loadingScreen.style.display = 'none';
                    }
                    
                    if (app) {
                        app.classList.remove('opacity-0');
                    }
                    
                    log('App initialized successfully');
                    
                    // Show welcome message if first visit
                    if (!localStorage.getItem('agrifarmers_visited')) {
                        setTimeout(() => {
                            showToast('Welcome to Agrifarmers!', 'info', 3000);
                            localStorage.setItem('agrifarmers_visited', 'true');
                        }, 1000);
                    }
                    
                    // Show app version
                    const versionEl = document.getElementById('app-version');
                    if (versionEl) {
                        versionEl.textContent = CONFIG.VERSION;
                    }
                    
                    // Auto-test weather API on first load (optional)
                    if (CONFIG.DEBUG_MODE) {
                        setTimeout(() => {
                            console.log("⚡ Agrifarmers Debug Tools Available:");
                            console.log("👉 Type 'debugWeatherAPI()' to test weather API");
                            console.log("👉 Type 'showWeatherSourceInfo()' for API info");
                            console.log("👉 Your API key:", CONFIG.WEATHER_API_KEY.substring(0, 8) + "...");
                        }, 2000);
                    }
                    
                }, 300); // Reduced from 500ms
                
            }, 50); // Small delay to ensure DOM is ready
            
        } catch (error) {
            console.error('Initialization error:', error);
            updateLoading('Error initializing app');
            
            // Still hide loading screen even on error
            setTimeout(() => {
                if (loadingScreen) {
                    loadingScreen.style.display = 'none';
                }
                
                if (app) {
                    app.classList.remove('opacity-0');
                }
                
                showToast('App initialized with errors. Check console.', 'error', 5000);
            }, 1000);
        }
        
    }, 300); // Reduced from 800ms
});

// ============================================
// GLOBAL DEBUG FUNCTION (Add to browser console)
// ============================================
window.testWeatherAPI = async function() {
    return await WeatherService.testAPI();
};

// Handle page visibility change
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible' && appState.isInitialized) {
        log('App resumed from background');
        NetworkManager.updateNetworkStatus();
    }
});

// Handle beforeunload for saving state
window.addEventListener('beforeunload', function() {
    // Save any pending data
    if (appState.activeUser) {
        localStorage.setItem('agrifarmers_user', JSON.stringify(appState.activeUser));
    }
});

// Check for existing session on load
window.addEventListener('load', function() {
    const storedUser = localStorage.getItem('agrifarmers_user');
    if (storedUser) {
        const user = JSON.parse(storedUser);
        appState.activeUser = user;
        
        // Update user display
        const nameEl = document.getElementById('farmerName');
        const locationEl = document.getElementById('farmerLocation');
        if (nameEl) nameEl.textContent = user.name;
        if (locationEl && user.district && user.state) {
            locationEl.textContent = `${user.district}, ${user.state}`;
        }
        
        PageManager.show('homePage');
    }
});

// ============================================
// PWA INSTALLATION PROMPT
// ============================================
const PwaManager = {
  deferredPrompt: null,
  
  init() {
    // Listen for beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      this.deferredPrompt = e;
      // Show custom install button if not already installed
      this.showInstallButton();
      
      console.log('PWA install prompt available');
    });
    
    // Listen for app installed event
    window.addEventListener('appinstalled', (evt) => {
      console.log('PWA installed successfully');
      this.hideInstallButton();
      showToast('Agrifarmers installed successfully!', 'success');
    });
    
    // Check if app is already installed
    this.checkIfAppIsInstalled();
  },
  
  showInstallButton() {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches || 
        window.navigator.standalone === true) {
      return;
    }
    
    // Create or show install button
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
    if (installBtn) {
      installBtn.remove();
    }
  },
  
  async installApp() {
    if (!this.deferredPrompt) {
      showToast('App installation not available', 'info');
      return;
    }
    
    // Show the install prompt
    this.deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await this.deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
      this.deferredPrompt = null;
      this.hideInstallButton();
    } else {
      console.log('User dismissed the install prompt');
    }
  },
  
  checkIfAppIsInstalled() {
    if (window.matchMedia('(display-mode: standalone)').matches || 
        window.navigator.standalone === true) {
      console.log('App is running in standalone mode');
      this.hideInstallButton();
      
      // Show banner for installed PWA
      setTimeout(() => {
        showToast('Welcome to Agrifarmers PWA!', 'success', 3000);
      }, 1000);
    }
  }
};

// Initialize PWA manager when app loads
document.addEventListener('DOMContentLoaded', function() {
  PwaManager.init();
});
