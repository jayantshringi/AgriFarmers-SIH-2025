/*
 * Agrifarmers Application Script - Multi-Language Version
 * Version: 3.1.0
 */
// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
    WEATHER_API_KEY: '44a55de0f2e0674cb9160f50459d51d4',
    WEATHER_API_URL: 'https://api.openweathermap.org/data/2.5',
    APP_NAME: 'Agrifarmers',
    VERSION: '3.1.0'
};

// ============================================
// TRANSLATIONS FOR ENGLISH, HINDI & PUNJABI
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
        per_quintal: "/quintal",
        fetching_prices: "Fetching latest market prices...",
        offline_prices: "Offline: Prices may not be current.",
        
        // Soil Health Modal
        soil_testing_steps: "Soil Testing Steps",
        soil_step_1: "Collect soil samples from different spots",
        soil_step_2: "Mix samples thoroughly",
        soil_step_3: "Visit nearest Krishi Vigyan Kendra",
        soil_step_4: "Get soil health card with recommendations",
        kvk_contact: "KVK Contact Info",
        kvk_info: "Search for nearest Krishi Vigyan Kendra (KVK) in your district.",
        
        // OTP Translations
        otp_sent: "OTP Sent",
        otp_display: "Your OTP is",
        otp_verification: "OTP Verification",
        enter_otp: "Enter 6-digit OTP",
        verify_otp: "Verify OTP",
        resend_otp: "Resend OTP",
        otp_valid_for: "OTP valid for {minutes} minutes",
        otp_demo_note: "In production, this would be sent via SMS",
        
        // Navigation
        logout_button: "Logout",
        profile_button: "Profile",
        
        // Toast Messages
        toast_online: "Back online!",
        toast_offline: "You are offline. Some features may be limited.",
        toast_login_success: "Login successful! Welcome back!",
        toast_signup_success: "Account created successfully! Welcome to Agrifarmers!",
        toast_logout: "Logged out successfully",
        toast_otp_sent: "OTP sent successfully!",
        
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
        invalid_input: "Invalid input"
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
        offline_prices: "ऑफलाइन: कीमतें वर्तमान नहीं हो सकती हैं।",
        
        // Soil Health Modal
        soil_testing_steps: "मृदा परीक्षण चरण",
        soil_step_1: "विभिन्न स्थानों से मिट्टी के नमूने एकत्र करें",
        soil_step_2: "नमूनों को अच्छी तरह मिलाएं",
        soil_step_3: "निकटतम कृषि विज्ञान केंद्र पर जाएं",
        soil_step_4: "सिफारिशों के साथ मृदा स्वास्थ्य कार्ड प्राप्त करें",
        kvk_contact: "केवीके संपर्क जानकारी",
        kvk_info: "अपने जिले में निकटतम कृषि विज्ञान केंद्र (केवीके) खोजें।",
        
        // OTP Translations
        otp_sent: "ओटीपी भेजा गया",
        otp_display: "आपका ओटीपी है",
        otp_verification: "ओटीपी सत्यापन",
        enter_otp: "6-अंकीय ओटीपी दर्ज करें",
        verify_otp: "ओटीपी सत्यापित करें",
        resend_otp: "ओटीपी पुनः भेजें",
        otp_valid_for: "ओटीपी {minutes} मिनट के लिए वैध",
        otp_demo_note: "वास्तविक उपयोग में, यह एसएमएस द्वारा भेजा जाएगा",
        
        // Navigation
        logout_button: "लॉग आउट",
        profile_button: "प्रोफ़ाइल",
        
        // Toast Messages
        toast_online: "ऑनलाइन वापस!",
        toast_offline: "आप ऑफलाइन हैं। कुछ सुविधाएं सीमित हो सकती हैं।",
        toast_login_success: "लॉगिन सफल! वापसी पर स्वागत है!",
        toast_signup_success: "खाता सफलतापूर्वक बनाया गया! अग्रीफार्मर्स में आपका स्वागत है!",
        toast_logout: "सफलतापूर्वक लॉग आउट किया गया",
        toast_otp_sent: "ओटीपी सफलतापूर्वक भेजा गया!",
        
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
        invalid_input: "अमान्य इनपुट"
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
        mobile_placeholder: "10-ਅੰਕਾਂ ਦਾ ਮੋਬਾਇਲ ਨੰਬਰ ਦਰਜ ਕਰੋ",
        mobile_error: "ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਵੈਧ 10-ਅੰਕਾਂ ਦਾ ਮੋਬਾਇਲ ਨੰਬਰ ਦਰਜ ਕਰੋ",
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
        weather_subtitle: "ਅੱਜ ਦਾ ਮੌਸਮ ਅਤੇ ਪੁਰਵਾਨੁਮਾਨ",
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
        offline_prices: "ਔਫਲਾਈਨ: ਕੀਮਤਾਂ ਮੌਜੂਦਾ ਨਹੀਂ ਹੋ ਸਕਦੀਆਂ।",
        
        // Soil Health Modal
        soil_testing_steps: "ਮਿੱਟੀ ਟੈਸਟਿੰਗ ਕਦਮ",
        soil_step_1: "ਵੱਖ-ਵੱਖ ਸਥਾਨਾਂ ਤੋਂ ਮਿੱਟੀ ਦੇ ਨਮੂਨੇ ਇਕੱਠੇ ਕਰੋ",
        soil_step_2: "ਨਮੂਨਿਆਂ ਨੂੰ ਚੰਗੀ ਤਰ੍ਹਾਂ ਮਿਲਾਓ",
        soil_step_3: "ਨਜ਼ਦੀਕੀ ਕ੍ਰਿਸ਼ੀ ਵਿਗਿਆਨ ਕੇਂਦਰ 'ਤੇ ਜਾਓ",
        soil_step_4: "ਸਿਫਾਰਸ਼ਾਂ ਦੇ ਨਾਲ ਮਿੱਟੀ ਸਿਹਤ ਕਾਰਡ ਪ੍ਰਾਪਤ ਕਰੋ",
        kvk_contact: "ਕੇਵੀਕੇ ਸੰਪਰਕ ਜਾਣਕਾਰੀ",
        kvk_info: "ਆਪਣੇ ਜ਼ਿਲ੍ਹੇ ਵਿੱਚ ਨਜ਼ਦੀਕੀ ਕ੍ਰਿਸ਼ੀ ਵਿਗਿਆਨ ਕੇਂਦਰ (ਕੇਵੀਕੇ) ਖੋਜੋ।",
        
        // OTP Translations
        otp_sent: "ਓਟੀਪੀ ਭੇਜਿਆ ਗਿਆ",
        otp_display: "ਤੁਹਾਡਾ ਓਟੀਪੀ ਹੈ",
        otp_verification: "ਓਟੀਪੀ ਪੁਸ਼ਟੀਕਰਨ",
        enter_otp: "6-ਅੰਕੀ ਓਟੀਪੀ ਦਰਜ ਕਰੋ",
        verify_otp: "ਓਟੀਪੀ ਤਸਦੀਕ ਕਰੋ",
        resend_otp: "ਓਟੀਪੀ ਮੁੜ ਭੇਜੋ",
        otp_valid_for: "ਓਟੀਪੀ {minutes} ਮਿੰਟ ਲਈ ਵੈਧ",
        otp_demo_note: "ਅਸਲ ਵਰਤੋਂ ਵਿੱਚ, ਇਹ ਐਸਐਮਐਸ ਦੁਆਰਾ ਭੇਜਿਆ ਜਾਵੇਗਾ",
        
        // Navigation
        logout_button: "ਲੌਗ ਆਊਟ",
        profile_button: "ਪ੍ਰੋਫਾਈਲ",
        
        // Toast Messages
        toast_online: "ਔਨਲਾਈਨ ਵਾਪਸ!",
        toast_offline: "ਤੁਸੀਂ ਔਫਲਾਈਨ ਹੋ। ਕੁਝ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਸੀਮਿਤ ਹੋ ਸਕਦੀਆਂ ਹਨ।",
        toast_login_success: "ਲੌਗਇਨ ਸਫਲ! ਵਾਪਸੀ 'ਤੇ ਸੁਆਗਤ ਹੈ!",
        toast_signup_success: "ਖਾਤਾ ਸਫਲਤਾਪੂਰਵਕ ਬਣਾਇਆ ਗਿਆ! ਅਗਰੀਫਾਰਮਰਜ਼ ਵਿੱਚ ਜੀ ਆਇਆਂ ਨੂੰ!",
        toast_logout: "ਸਫਲਤਾਪੂਰਵਕ ਲੌਗ ਆਊਟ ਕੀਤਾ ਗਿਆ",
        toast_otp_sent: "ਓਟੀਪੀ ਸਫਲਤਾਪੂਰਵਕ ਭੇਜਿਆ ਗਿਆ!",
        
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
        invalid_input: "ਅਵੈਧ ਇਨਪੁੱਟ"
    }
};

// ============================================
// APPLICATION STATE
// ============================================
const appState = {
    activeUser: null,
    currentLanguage: 'en',
    currentPage: 'welcomePage',
    generatedOTP: null,
    isInitialized: false
};

// ============================================
// DISTRICT DATA
// ============================================
const districtData = {
    "Haryana": ["Ambala", "Bhiwani", "Faridabad", "Gurugram", "Hisar", "Karnal", "Panchkula", "Panipat", "Rohtak", "Sonipat"],
    "Punjab": ["Amritsar", "Bathinda", "Jalandhar", "Ludhiana", "Mohali", "Patiala", "Sangrur"],
    "Delhi": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "South Delhi", "West Delhi"],
    "Uttar Pradesh": ["Agra", "Aligarh", "Allahabad", "Ghaziabad", "Kanpur", "Lucknow", "Meerut", "Varanasi"]
};

// ============================================
// HELPER FUNCTIONS
// ============================================
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="flex items-center">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'} mr-3"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.getElementById('toast-container').appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function isValidMobile(mobile) {
    return /^[6-9]\d{9}$/.test(mobile);
}

function isValidName(name) {
    return name && name.trim().length >= 2;
}

// ============================================
// LANGUAGE MANAGEMENT
// ============================================
function changeLanguage(lang) {
    if (translations[lang]) {
        appState.currentLanguage = lang;
        localStorage.setItem('agrifarmers_language', lang);
        
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = translations[lang][key] || translations['en'][key] || key;
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
                if (element.hasAttribute('placeholder')) {
                    element.setAttribute('placeholder', translation);
                }
                if (element.hasAttribute('value')) {
                    element.setAttribute('value', translation);
                }
            } else {
                element.textContent = translation;
            }
        });
        
        // Update page title
        document.title = translations[lang].app_title;
        
        // Update language display
        document.querySelectorAll('#current-language, #current-language-desktop').forEach(el => {
            el.textContent = lang.toUpperCase();
        });
        
        showToast(`Language changed to ${lang === 'en' ? 'English' : lang === 'hi' ? 'Hindi' : 'Punjabi'}`, 'success');
    }
}

// ============================================
// PAGE MANAGEMENT
// ============================================
function showPage(pageId) {
    // Hide all pages
    ['welcomePage', 'loginPage', 'signUpPage', 'homePage'].forEach(page => {
        const el = document.getElementById(page);
        if (el) el.classList.remove('active');
    });
    
    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        appState.currentPage = pageId;
    }
    
    // Hide mobile menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.add('hidden');
    }
    
    updateNavigation();
}

function updateNavigation() {
    const navActions = document.getElementById('nav-actions');
    const mobileNavActions = document.getElementById('mobile-nav-actions');
    
    if (appState.activeUser) {
        // User is logged in
        const userHTML = `
            <div class="flex items-center space-x-4">
                <span class="text-gray-700 hidden md:inline">${appState.activeUser.name}</span>
                <button onclick="handleLogout()" class="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-300">
                    ${translations[appState.currentLanguage].logout_button}
                </button>
            </div>
        `;
        
        const mobileUserHTML = `
            <div class="space-y-3">
                <div class="px-3 py-2 text-gray-700">${appState.activeUser.name}</div>
                <button onclick="handleLogout()" class="w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                    ${translations[appState.currentLanguage].logout_button}
                </button>
            </div>
        `;
        
        if (navActions) navActions.innerHTML = userHTML;
        if (mobileNavActions) mobileNavActions.innerHTML = mobileUserHTML;
    } else {
        // User is not logged in
        const guestHTML = `
            <div class="flex items-center space-x-2">
                <button onclick="showPage('loginPage')" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    ${translations[appState.currentLanguage].login_button}
                </button>
                <button onclick="showPage('signUpPage')" class="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700">
                    ${translations[appState.currentLanguage].get_started_button}
                </button>
            </div>
        `;
        
        const mobileGuestHTML = `
            <div class="space-y-1">
                <button onclick="showPage('loginPage')" class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
                    ${translations[appState.currentLanguage].login_button}
                </button>
                <button onclick="showPage('signUpPage')" class="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-green-600 text-white hover:bg-green-700">
                    ${translations[appState.currentLanguage].get_started_button}
                </button>
            </div>
        `;
        
        if (navActions) navActions.innerHTML = guestHTML;
        if (mobileNavActions) mobileNavActions.innerHTML = mobileGuestHTML;
    }
}

// ============================================
// FORM HANDLING
// ============================================
function populateStates() {
    const stateSelect = document.getElementById('signUpState');
    if (!stateSelect) return;
    
    stateSelect.innerHTML = `<option value="">${translations[appState.currentLanguage].select_state}</option>`;
    
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
    districtSelect.innerHTML = `<option value="">${translations[appState.currentLanguage].select_district}</option>`;
    
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
// MODAL MANAGEMENT
// ============================================
function openModal(title, content) {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = `
        <div class="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden">
            <div class="flex items-center justify-between p-6 border-b">
                <h3 class="text-2xl font-bold text-gray-800">${title}</h3>
                <button onclick="closeModal()" class="text-gray-500 hover:text-gray-700 text-3xl font-light">&times;</button>
            </div>
            <div class="overflow-y-auto p-6" style="max-height: calc(90vh - 80px);">
                ${content}
            </div>
        </div>
    `;
    modalContainer.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal-container').classList.add('hidden');
    document.getElementById('modal-container').innerHTML = '';
}

// ============================================
// OTP MANAGEMENT
// ============================================
function generateOTP() {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    appState.generatedOTP = otp;
    return otp;
}

function showOTPModal(mobile) {
    const otp = generateOTP();
    const content = `
        <div class="space-y-6">
            <div class="text-center">
                <i class="fas fa-sms text-5xl text-blue-500 mb-4"></i>
                <h4 class="text-xl font-bold mb-2">${translations[appState.currentLanguage].otp_verification}</h4>
                <p class="text-gray-600 mb-4">${translations[appState.currentLanguage].otp_sent} <strong>${mobile}</strong></p>
                
                <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                    <p class="text-sm text-gray-600 mb-1">${translations[appState.currentLanguage].otp_display}</p>
                    <div class="text-4xl font-bold text-blue-600 tracking-wider">${otp}</div>
                    <p class="text-xs text-gray-500 mt-2">${translations[appState.currentLanguage].otp_demo_note}</p>
                </div>
            </div>
            
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">${translations[appState.currentLanguage].enter_otp}</label>
                    <input type="text" id="otpInput" maxlength="6" pattern="\\d{6}" inputmode="numeric" 
                        class="w-full p-3 border border-gray-300 rounded-lg text-center text-2xl tracking-widest"
                        placeholder="000000" autocomplete="one-time-code">
                </div>
                
                <div class="flex gap-2">
                    <button onclick="verifyOTP('${mobile}')" class="flex-1 bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 font-medium">
                        ${translations[appState.currentLanguage].verify_otp}
                    </button>
                    <button onclick="resendOTP('${mobile}')" class="flex-1 bg-gray-200 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-300">
                        ${translations[appState.currentLanguage].resend_otp}
                    </button>
                </div>
                
                <div class="text-center">
                    <button onclick="closeModal(); showPage('loginPage');" class="text-sm text-gray-500 hover:text-gray-700">
                        ← ${translations[appState.currentLanguage].login_link}
                    </button>
                </div>
            </div>
        </div>
    `;
    
    openModal(translations[appState.currentLanguage].otp_verification, content);
    
    // Auto-focus OTP input
    setTimeout(() => {
        const otpInput = document.getElementById('otpInput');
        if (otpInput) otpInput.focus();
    }, 300);
}

function verifyOTP(mobile) {
    const enteredOTP = document.getElementById('otpInput')?.value.trim() || '';
    
    if (!enteredOTP || enteredOTP.length !== 6) {
        showToast(translations[appState.currentLanguage].error_invalid_otp, 'error');
        return;
    }
    
    if (enteredOTP === appState.generatedOTP) {
        // Find user in localStorage
        const storedUser = localStorage.getItem('agrifarmers_user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            if (user.mobile === mobile) {
                appState.activeUser = user;
                closeModal();
                showPage('homePage');
                showToast(translations[appState.currentLanguage].toast_login_success, 'success');
                
                // Update user display
                const nameEl = document.getElementById('farmerName');
                const locationEl = document.getElementById('farmerLocation');
                if (nameEl) nameEl.textContent = user.name;
                if (locationEl) locationEl.textContent = `${user.district}, ${user.state}`;
                
                appState.generatedOTP = null;
                return;
            }
        }
    }
    
    showToast(translations[appState.currentLanguage].error_invalid_otp, 'error');
}

function resendOTP(mobile) {
    showOTPModal(mobile);
    showToast(translations[appState.currentLanguage].toast_otp_sent, 'success');
}

// ============================================
// AUTHENTICATION FUNCTIONS
// ============================================
window.handleSignUp = function() {
    const name = document.getElementById('signUpName')?.value.trim() || '';
    const mobile = document.getElementById('signUpMobile')?.value.trim() || '';
    const state = document.getElementById('signUpState')?.value || '';
    const district = document.getElementById('signUpDistrict')?.value || '';
    
    if (!isValidName(name)) {
        showToast(translations[appState.currentLanguage].name_error, 'error');
        return;
    }
    
    if (!isValidMobile(mobile)) {
        showToast(translations[appState.currentLanguage].mobile_error, 'error');
        return;
    }
    
    if (!state) {
        showToast(translations[appState.currentLanguage].state_error, 'error');
        return;
    }
    
    if (!district) {
        showToast(translations[appState.currentLanguage].district_error, 'error');
        return;
    }
    
    // Create user object
    const user = {
        name: name,
        mobile: mobile,
        state: state,
        district: district,
        joined: new Date().toISOString()
    };
    
    // Save user to localStorage
    localStorage.setItem('agrifarmers_user', JSON.stringify(user));
    appState.activeUser = user;
    
    // Show home page
    showPage('homePage');
    
    // Update user display
    const nameEl = document.getElementById('farmerName');
    const locationEl = document.getElementById('farmerLocation');
    if (nameEl) nameEl.textContent = user.name;
    if (locationEl) locationEl.textContent = `${user.district}, ${user.state}`;
    
    showToast(translations[appState.currentLanguage].toast_signup_success, 'success');
};

window.handleLogin = function() {
    const mobile = document.getElementById('loginMobile')?.value.trim() || '';
    
    if (!isValidMobile(mobile)) {
        showToast(translations[appState.currentLanguage].mobile_error, 'error');
        return;
    }
    
    // Check if user exists in localStorage
    const storedUser = localStorage.getItem('agrifarmers_user');
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.mobile === mobile) {
            showOTPModal(mobile);
            return;
        }
    }
    
    showToast(translations[appState.currentLanguage].error_no_account, 'error');
};

window.handleLogout = function() {
    appState.activeUser = null;
    appState.generatedOTP = null;
    showPage('welcomePage');
    showToast(translations[appState.currentLanguage].toast_logout, 'info');
};

// ============================================
// WEATHER FUNCTIONALITY
// ============================================
async function showWeatherModal() {
    const loadingContent = `
        <div class="text-center p-8">
            <div class="loader inline-block mb-4"></div>
            <p class="text-gray-600">${translations[appState.currentLanguage].weather_loading}</p>
        </div>
    `;
    
    openModal(translations[appState.currentLanguage].weather_info, loadingContent);
    
    try {
        let location = 'Delhi';
        if (appState.activeUser && appState.activeUser.district) {
            location = appState.activeUser.district;
        }
        
        // Try to fetch real weather
        const apiKey = CONFIG.WEATHER_API_KEY;
        const url = `${CONFIG.WEATHER_API_URL}/weather?q=${encodeURIComponent(location)}&appid=${apiKey}&units=metric`;
        
        let weatherData;
        let isLiveData = false;
        
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                isLiveData = true;
                weatherData = {
                    location: `${data.name}, ${data.sys.country}`,
                    temp: Math.round(data.main.temp),
                    feelsLike: Math.round(data.main.feels_like),
                    humidity: data.main.humidity,
                    windSpeed: Math.round(data.wind.speed * 3.6),
                    windDirection: getWindDirection(data.wind.deg),
                    description: data.weather[0].description,
                    icon: data.weather[0].icon,
                    pressure: data.main.pressure,
                    sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    visibility: (data.visibility / 1000).toFixed(1)
                };
            } else {
                throw new Error('API failed');
            }
        } catch (error) {
            // Fallback to mock data
            isLiveData = false;
            weatherData = {
                location: appState.activeUser?.district || 'Delhi',
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
            };
        }
        
        // Get advisory message
        let advisoryMessage = translations[appState.currentLanguage].good_weather_alert;
        if (weatherData.temp > 35) {
            advisoryMessage = translations[appState.currentLanguage].high_temp_alert;
        } else if (weatherData.temp < 10) {
            advisoryMessage = translations[appState.currentLanguage].low_temp_alert;
        }
        
        // Get weather icon
        const weatherIcon = getWeatherIcon(weatherData.icon);
        
        const content = `
            <div class="space-y-6">
                <div class="text-center mb-2">
                    <h4 class="text-lg font-bold">${weatherData.location}</h4>
                    <p class="text-gray-600">${new Date().toLocaleDateString(appState.currentLanguage)}</p>
                    ${!isLiveData ? `
                        <div class="inline-block mt-2 px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                            <i class="fas fa-wifi-slash mr-1"></i>
                            <span>${translations[appState.currentLanguage].offline_weather}</span>
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
                                <i class="${weatherIcon} text-5xl mr-4"></i>
                                <div>
                                    <div class="text-4xl font-bold text-gray-800">${weatherData.temp}°C</div>
                                    <p class="text-gray-600 capitalize">${weatherData.description}</p>
                                    <p class="text-sm text-gray-500">
                                        ${translations[appState.currentLanguage].feels_like} ${weatherData.feelsLike}°C
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                        <div class="text-center p-3 bg-white rounded-lg shadow-sm">
                            <i class="fas fa-wind text-blue-500 mb-1"></i>
                            <div class="text-sm text-gray-600">${translations[appState.currentLanguage].wind}</div>
                            <div class="font-bold">${weatherData.windSpeed} km/h</div>
                            <div class="text-xs text-gray-500">${weatherData.windDirection}</div>
                        </div>
                        <div class="text-center p-3 bg-white rounded-lg shadow-sm">
                            <i class="fas fa-tint text-blue-400 mb-1"></i>
                            <div class="text-sm text-gray-600">${translations[appState.currentLanguage].humidity}</div>
                            <div class="font-bold">${weatherData.humidity}%</div>
                        </div>
                        <div class="text-center p-3 bg-white rounded-lg shadow-sm">
                            <i class="fas fa-compress-alt text-green-500 mb-1"></i>
                            <div class="text-sm text-gray-600">${translations[appState.currentLanguage].pressure}</div>
                            <div class="font-bold">${weatherData.pressure} hPa</div>
                        </div>
                        <div class="text-center p-3 bg-white rounded-lg shadow-sm">
                            <i class="fas fa-eye text-purple-500 mb-1"></i>
                            <div class="text-sm text-gray-600">${translations[appState.currentLanguage].visibility}</div>
                            <div class="font-bold">${weatherData.visibility} km</div>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4 mt-6">
                        <div class="flex items-center p-3 bg-yellow-50 rounded-lg">
                            <i class="fas fa-sun text-yellow-500 text-2xl mr-3"></i>
                            <div>
                                <div class="text-sm text-gray-600">${translations[appState.currentLanguage].sunrise}</div>
                                <div class="font-bold">${weatherData.sunrise}</div>
                            </div>
                        </div>
                        <div class="flex items-center p-3 bg-indigo-50 rounded-lg">
                            <i class="fas fa-moon text-indigo-500 text-2xl mr-3"></i>
                            <div>
                                <div class="text-sm text-gray-600">${translations[appState.currentLanguage].sunset}</div>
                                <div class="font-bold">${weatherData.sunset}</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <div class="flex items-start">
                        <i class="fas fa-lightbulb text-yellow-600 mt-1 mr-3"></i>
                        <div>
                            <p class="font-medium text-yellow-800">${translations[appState.currentLanguage].farming_advisory}</p>
                            <p class="text-sm text-yellow-700 mt-1">${advisoryMessage}</p>
                            ${!isLiveData ? `
                                <p class="text-xs text-yellow-600 mt-2">
                                    <i class="fas fa-info-circle mr-1"></i>
                                    ${translations[appState.currentLanguage].connect_internet}
                                </p>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.querySelector('#modal-container .overflow-y-auto').innerHTML = content;
        
    } catch (error) {
        console.error('Weather error:', error);
        const errorContent = `
            <div class="text-center p-8">
                <i class="fas fa-exclamation-triangle text-5xl text-red-500 mb-4"></i>
                <h4 class="text-xl font-bold mb-2">${translations[appState.currentLanguage].weather_error}</h4>
                <p class="text-gray-600 mb-4">${translations[appState.currentLanguage].error_network}</p>
                <div class="flex flex-col gap-2">
                    <button onclick="showWeatherModal()" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                        ${translations[appState.currentLanguage].retry}
                    </button>
                    <button onclick="closeModal()" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400">
                        ${translations[appState.currentLanguage].close}
                    </button>
                </div>
            </div>
        `;
        
        document.querySelector('#modal-container .overflow-y-auto').innerHTML = errorContent;
    }
}

function getWindDirection(degrees) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(degrees / 45) % 8;
    return directions[index] || 'N';
}

function getWeatherIcon(iconCode) {
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
                <h4 class="text-lg font-bold mb-2">${translations[appState.currentLanguage].seed_recommendation.replace('{season}', currentSeason)}</h4>
                <div class="flex flex-wrap gap-2">
                    ${seasons[currentSeason].map(crop => `
                        <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">${crop}</span>
                    `).join('')}
                </div>
            </div>
            
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p class="text-sm text-yellow-800">
                    <i class="fas fa-lightbulb mr-2"></i>
                    <strong>${translations[appState.currentLanguage].tip}:</strong> ${translations[appState.currentLanguage].seed_tip}
                </p>
            </div>
            
            <div class="text-sm text-gray-600">
                <p>${translations[appState.currentLanguage].seed_consult}</p>
            </div>
        </div>
    `;
    
    openModal(translations[appState.currentLanguage].seed_advice, content);
}

function showFertilizerModal() {
    const content = `
        <div class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-green-50 p-4 rounded-lg">
                    <h5 class="font-bold mb-2">${translations[appState.currentLanguage].npk_ratio}</h5>
                    <p class="text-3xl font-bold text-gray-800">4:2:1</p>
                    <p class="text-sm text-gray-600">${translations[appState.currentLanguage].nitrogen_phosphorus_potassium}</p>
                </div>
                <div class="bg-blue-50 p-4 rounded-lg">
                    <h5 class="font-bold mb-2">${translations[appState.currentLanguage].application_time}</h5>
                    <p class="text-lg font-bold text-gray-800">${translations[appState.currentLanguage].before_sowing}</p>
                    <p class="text-sm text-gray-600">${translations[appState.currentLanguage].basal_dose}</p>
                </div>
            </div>
            
            <div class="bg-red-50 border-l-4 border-red-400 p-4">
                <p class="text-sm text-red-800">
                    <i class="fas fa-exclamation-triangle mr-2"></i>
                    <strong>${translations[appState.currentLanguage].important}:</strong> ${translations[appState.currentLanguage].soil_testing_important}
                </p>
            </div>
        </div>
    `;
    
    openModal(translations[appState.currentLanguage].fertilizer_guide, content);
}

function showCropCalendarModal() {
    const seasonsData = [
        { season: "Kharif", sowing: "Jun - Jul", harvesting: "Sep - Oct", crops: "Rice, Maize, Cotton" },
        { season: "Rabi", sowing: "Oct - Nov", harvesting: "Mar - Apr", crops: "Wheat, Barley, Mustard" },
        { season: "Zaid", sowing: "Mar - Jun", harvesting: "Jun - Jul", crops: "Watermelon, Cucumber" }
    ];
    
    // Determine current recommendation
    const currentMonth = new Date().getMonth() + 1;
    let recommendation = translations[appState.currentLanguage].zaid_time;
    if (currentMonth >= 5 && currentMonth <= 8) {
        recommendation = translations[appState.currentLanguage].kharif_time;
    } else if (currentMonth >= 9 || currentMonth <= 1) {
        recommendation = translations[appState.currentLanguage].rabi_time;
    }
    
    const content = `
        <div class="space-y-6">
            <div class="overflow-x-auto">
                <table class="w-full text-sm">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="p-3 text-left">${translations[appState.currentLanguage].season}</th>
                            <th class="p-3 text-left">${translations[appState.currentLanguage].sowing}</th>
                            <th class="p-3 text-left">${translations[appState.currentLanguage].harvesting}</th>
                            <th class="p-3 text-left">${translations[appState.currentLanguage].crops}</th>
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
                <h5 class="font-bold mb-2">${translations[appState.currentLanguage].current_recommendation}</h5>
                <p class="text-gray-700">${recommendation}</p>
            </div>
        </div>
    `;
    
    openModal(translations[appState.currentLanguage].crop_calendar, content);
}

function showMarketPricesModal() {
    const content = `
        <div class="space-y-4">
            <div class="flex justify-between p-3 bg-gray-50 rounded-lg">
                <span>${translations[appState.currentLanguage].wheat_price}</span>
                <span class="font-bold">₹2,300${translations[appState.currentLanguage].per_quintal}</span>
            </div>
            <div class="flex justify-between p-3 bg-gray-50 rounded-lg">
                <span>${translations[appState.currentLanguage].rice_price}</span>
                <span class="font-bold">₹3,800${translations[appState.currentLanguage].per_quintal}</span>
            </div>
            <div class="flex justify-between p-3 bg-gray-50 rounded-lg">
                <span>${translations[appState.currentLanguage].cotton_price}</span>
                <span class="font-bold">₹6,500${translations[appState.currentLanguage].per_quintal}</span>
            </div>
        </div>
    `;
    
    openModal(translations[appState.currentLanguage].market_prices, content);
}

function showSoilHealthModal() {
    const content = `
        <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">${translations[appState.currentLanguage].soil_testing_steps}</h4>
                <ol class="list-decimal list-inside space-y-2 text-gray-700">
                    <li>${translations[appState.currentLanguage].soil_step_1}</li>
                    <li>${translations[appState.currentLanguage].soil_step_2}</li>
                    <li>${translations[appState.currentLanguage].soil_step_3}</li>
                    <li>${translations[appState.currentLanguage].soil_step_4}</li>
                </ol>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">${translations[appState.currentLanguage].kvk_contact}</h4>
                <p class="text-sm text-gray-700">${translations[appState.currentLanguage].kvk_info}</p>
            </div>
        </div>
    `;
    
    openModal(translations[appState.currentLanguage].soil_health, content);
}

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
    
    // Initialize states dropdown
    populateStates();
    
    // Load saved language
    const savedLang = localStorage.getItem('agrifarmers_language');
    if (savedLang && translations[savedLang]) {
        appState.currentLanguage = savedLang;
    }
    
    // Check for existing user session
    const storedUser = localStorage.getItem('agrifarmers_user');
    if (storedUser) {
        const user = JSON.parse(storedUser);
        appState.activeUser = user;
        showPage('homePage');
        
        // Update user display
        const nameEl = document.getElementById('farmerName');
        const locationEl = document.getElementById('farmerLocation');
        if (nameEl) nameEl.textContent = user.name;
        if (locationEl && user.district && user.state) {
            locationEl.textContent = `${user.district}, ${user.state}`;
        }
    } else {
        showPage('welcomePage');
    }
    
    // Apply translations
    changeLanguage(appState.currentLanguage);
    
    // Update navigation
    updateNavigation();
    
    // Hide loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
        
        const app = document.getElementById('app');
        if (app) {
            app.classList.remove('opacity-0');
        }
        
        appState.isInitialized = true;
    }, 500);
});

// ============================================
// EXPORT FUNCTIONS TO WINDOW
// ============================================
window.showPage = showPage;
window.openWeatherModal = showWeatherModal;
window.openSeedModal = showSeedModal;
window.openFertilizerModal = showFertilizerModal;
window.openCropCalendarModal = showCropCalendarModal;
window.openMarketPricesModal = showMarketPricesModal;
window.openSoilHealthModal = showSoilHealthModal;
window.closeModal = closeModal;
window.handleSignUp = handleSignUp;
window.handleLogin = handleLogin;
window.handleLogout = handleLogout;
window.verifyOTP = verifyOTP;
window.resendOTP = resendOTP;
window.populateDistricts = populateDistricts;
window.changeLanguage = changeLanguage;

// Language selector setup
document.addEventListener('DOMContentLoaded', function() {
    // Language dropdown toggle
    const langBtns = document.querySelectorAll('#desktop-language-btn, #mobile-language-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const selector = this.closest('.language-selector');
            if (selector) {
                selector.classList.toggle('active');
            }
        });
    });
    
    // Language option selection
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            if (lang && translations[lang]) {
                changeLanguage(lang);
                // Close dropdown
                document.querySelectorAll('.language-selector').forEach(selector => {
                    selector.classList.remove('active');
                });
            }
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        document.querySelectorAll('.language-selector').forEach(selector => {
            selector.classList.remove('active');
        });
    });
});
