// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
    APP_NAME: 'AgriFarmers',
    VERSION: '1.3.0',
    DEBUG_MODE: true,
    LANGUAGES: {
        'en': { name: 'English', dir: 'ltr', flag: '🇺🇸' },
        'hi': { name: 'हिंदी', dir: 'ltr', flag: '🇮🇳' },
        'pa': { name: 'ਪੰਜਾਬੀ', dir: 'ltr', flag: '🇮🇳' }
    },
    WEATHER_API_KEY: '44a55de0f2e0674cb9160f50459d51d4'
};

// ============================================
// COMPLETE TRANSLATION SYSTEM
// ============================================
const TRANSLATIONS = {
    'en': {
        // Navigation
        'app_name': 'AgriFarmers',
        'online': 'Online',
        'offline': 'Offline',
        'login': 'Login',
        'logout': 'Logout',
        'get_started': 'Get Started',
        'language': 'Language',
        'profile': 'Profile',
        
        // Welcome Page
        'welcome_title': 'Welcome to AgriFarmers',
        'welcome_subtitle': 'Your trusted companion for modern farming',
        'smart_farming': 'Smart Farming',
        'smart_farming_desc': 'Get personalized crop recommendations and farming advice',
        'weather_insights': 'Weather Insights',
        'weather_insights_desc': 'Accurate weather forecasts and farming alerts',
        'market_prices': 'Market Prices',
        'market_prices_desc': 'Real-time crop prices and market trends',
        
        // Login/Signup
        'welcome_back': 'Welcome Back',
        'mobile_number': 'Mobile Number',
        'enter_mobile': 'Enter 10-digit mobile number',
        'continue': 'Continue',
        'new_here': 'New here?',
        'create_account': 'Create account',
        'join_agrifarmers': 'Join AgriFarmers',
        'full_name': 'Full Name',
        'your_name': 'Your Name',
        'state': 'State',
        'select_state': 'Select State',
        'district': 'District',
        'select_district': 'Select District',
        'already_account': 'Already have an account?',
        'sign_in': 'Sign in',
        
        // OTP
        'otp_verification': 'OTP Verification',
        'otp_sent_to': 'OTP sent to',
        'verify_otp': 'Verify OTP',
        'resend_otp': 'Resend OTP',
        'back_login': 'Back to Login',
        'demo_otp': 'Demo: Your OTP is shown below',
        'otp_valid': 'OTP valid for',
        'minutes': 'minutes',
        'enter_6_digits': 'Please enter all 6 digits',
        'invalid_otp': 'Invalid OTP. Please try again',
        'otp_verified': 'OTP verified successfully',
        'new_otp_sent': 'New OTP sent',
        
        // Home Page
        'hello': 'Hello',
        'today': 'Today',
        'dashboard': 'Your Farming Dashboard',
        'weather_forecast': 'Weather Forecast',
        'weather_desc': 'Today\'s weather & forecast',
        'seed_recommendations': 'Seed Recommendations',
        'seed_desc': 'Best seeds for your region',
        'fertilizer_guide': 'Fertilizer Guide',
        'fertilizer_desc': 'Nutrients for your crops',
        'crop_calendar': 'Crop Calendar',
        'crop_desc': 'Seasonal planting guide',
        'market_prices_title': 'Market Prices',
        'market_desc': 'Current crop prices',
        'soil_health': 'Soil Health',
        'soil_desc': 'Soil testing guidance',
        'farming_advisory': 'Today\'s Farming Advisory',
        'good_weather': 'Good weather for farming activities. Ideal for irrigation and fertilization.',
        
        // Weather Modal
        'humidity': 'Humidity',
        'wind_speed': 'Wind Speed',
        'feels_like': 'Feels Like',
        'pressure': 'Pressure',
        'sunrise': 'Sunrise',
        'sunset': 'Sunset',
        'farming_advisory_label': 'Farming Advisory:',
        'good_for_irrigation': 'Good weather for irrigation and fertilization activities.',
        
        // Seed Modal
        'recommended_for_kharif': 'Recommended for Kharif Season',
        'rice': 'Rice',
        'cotton': 'Cotton',
        'maize': 'Maize',
        'high_yield': 'High-yield variety',
        'bt_cotton': 'BT Cotton variety',
        'hybrid': 'Hybrid variety',
        'recommended': 'Recommended',
        'tip_seeds': 'Tip: Always use certified seeds from authorized dealers for better yield.',
        
        // Fertilizer Modal
        'npk_ratio': 'NPK Ratio',
        'application_time': 'Application Time',
        'before_sowing': 'Before Sowing',
        'basal_dose': 'Basal dose recommended',
        'nitrogen_phosphorus_potassium': 'Nitrogen:Phosphorus:Potassium',
        'important_soil': 'Important: Soil testing is recommended before fertilizer application.',
        
        // Crop Calendar Modal
        'season': 'Season',
        'sowing': 'Sowing',
        'harvesting': 'Harvesting',
        'crops': 'Crops',
        'kharif': 'Kharif',
        'rabi': 'Rabi',
        'zaid': 'Zaid',
        'current_recommendation': 'Current Recommendation',
        'perfect_time': 'Now is the perfect time for Kharif crops like Rice and Cotton.',
        
        // Market Prices Modal
        'grade_a': 'Grade A',
        'basmati': 'Basmati',
        'medium_staple': 'Medium Staple',
        'wheat': 'Wheat',
        'prices_updated': 'Prices updated: Today, 10:00 AM',
        
        // Soil Health Modal
        'soil_testing_steps': 'Soil Testing Steps',
        'collect_samples': 'Collect soil samples from different spots in your field',
        'mix_samples': 'Mix samples thoroughly in a clean container',
        'visit_kvk': 'Visit nearest Krishi Vigyan Kendra (KVK)',
        'get_health_card': 'Get soil health card with recommendations',
        'kvk_contact': 'KVK Contact Info',
        'search_nearest': 'Search for nearest Krishi Vigyan Kendra (KVK) in your district.',
        
        // Services Modal
        'our_services': 'Our Services',
        'weather_forecast_desc': 'Accurate weather predictions for your farming activities.',
        'seed_recommendations_desc': 'Best seeds for your specific region and soil type.',
        'fertilizer_guide_desc': 'Optimal fertilizer recommendations for your crops.',
        'market_prices_desc': 'Real-time crop prices and market trends.',
        
        // Footer
        'quick_links': 'Quick Links',
        'home': 'Home',
        'about': 'About',
        'services': 'Services',
        'contact': 'Contact',
        'empowering_farmers': 'Empowering farmers with smart agricultural solutions and real-time insights',
        'privacy_policy': 'Privacy Policy',
        'terms_of_use': 'Terms of Use',
        'sitemap': 'Sitemap',
        'all_rights_reserved': 'All rights reserved',
        
        // Toasts & Messages
        'welcome_toast': 'Welcome to AgriFarmers!',
        'account_created': 'Account created successfully!',
        'logged_out': 'Logged out successfully',
        'pwa_installed': 'AgriFarmers installed successfully!',
        'install_suggestion': 'Install AgriFarmers for better experience',
        'offline_mode': 'You are offline. Some features may be limited.',
        'installing': 'Installing AgriFarmers...',
        'installation_cancelled': 'Installation cancelled. Try from browser menu.',
        'loading': 'Loading your farming assistant...',
        
        // Errors
        'invalid_name': 'Please enter a valid name',
        'invalid_mobile': 'Please enter a valid 10-digit mobile number',
        'select_state_error': 'Please select your state',
        'select_district_error': 'Please select your district',
        'network_error': 'Network error. Please check your connection.',
        'location_error': 'Unable to get your location. Using default location.',
        'weather_error': 'Unable to fetch weather data. Please try again.',
        
        // PWA Installation Instructions
        'install_title': 'Install AgriFarmers',
        'install_ios_title': 'Install AgriFarmers on iPhone/iPad',
        'install_android_title': 'Install AgriFarmers on Android',
        'install_desktop_title': 'Install AgriFarmers on Desktop',
        'ios_step1': 'Tap the Share button',
        'ios_step2': 'Scroll and tap "Add to Home Screen"',
        'ios_step3': 'Tap "Add" to finish',
        'android_step1': 'Tap Menu (⋮) in Chrome',
        'android_step2': 'Tap "Install app"',
        'android_step3': 'Tap "Install" to confirm',
        'desktop_step1': 'Click Install button in address bar',
        'desktop_step2': 'Or click ••• menu → "Install AgriFarmers"'
    },
    
    'hi': {
        // Navigation
        'app_name': 'एग्रीफार्मर्स',
        'online': 'ऑनलाइन',
        'offline': 'ऑफलाइन',
        'login': 'लॉगिन',
        'logout': 'लॉगआउट',
        'get_started': 'शुरू करें',
        'language': 'भाषा',
        'profile': 'प्रोफ़ाइल',
        
        // Welcome Page
        'welcome_title': 'एग्रीफार्मर्स में आपका स्वागत है',
        'welcome_subtitle': 'आधुनिक खेती के लिए आपका विश्वसनीय साथी',
        'smart_farming': 'स्मार्ट खेती',
        'smart_farming_desc': 'व्यक्तिगत फसल सिफारिशें और खेती सलाह प्राप्त करें',
        'weather_insights': 'मौसम का विश्लेषण',
        'weather_insights_desc': 'सटीक मौसम पूर्वानुमान और खेती अलर्ट',
        'market_prices': 'बाजार भाव',
        'market_prices_desc': 'रीयल-टाइम फसल कीमतें और बाजार के रुझान',
        
        // Login/Signup
        'welcome_back': 'वापसी पर स्वागत है',
        'mobile_number': 'मोबाइल नंबर',
        'enter_mobile': '10 अंकों का मोबाइल नंबर दर्ज करें',
        'continue': 'जारी रखें',
        'new_here': 'नए हैं?',
        'create_account': 'खाता बनाएं',
        'join_agrifarmers': 'एग्रीफार्मर्स से जुड़ें',
        'full_name': 'पूरा नाम',
        'your_name': 'आपका नाम',
        'state': 'राज्य',
        'select_state': 'राज्य चुनें',
        'district': 'जिला',
        'select_district': 'जिला चुनें',
        'already_account': 'पहले से खाता है?',
        'sign_in': 'साइन इन करें',
        
        // OTP
        'otp_verification': 'ओटीपी सत्यापन',
        'otp_sent_to': 'ओटीपी भेजा गया',
        'verify_otp': 'ओटीपी सत्यापित करें',
        'resend_otp': 'ओटीपी पुनः भेजें',
        'back_login': 'लॉगिन पर वापस',
        'demo_otp': 'डेमो: आपका ओटीपी नीचे दिखाया गया है',
        'otp_valid': 'ओटीपी वैध है',
        'minutes': 'मिनट',
        'enter_6_digits': 'कृपया सभी 6 अंक दर्ज करें',
        'invalid_otp': 'अमान्य ओटीपी। कृपया पुनः प्रयास करें',
        'otp_verified': 'ओटीपी सफलतापूर्वक सत्यापित हुआ',
        'new_otp_sent': 'नया ओटीपी भेजा गया',
        
        // Home Page
        'hello': 'नमस्ते',
        'today': 'आज',
        'dashboard': 'आपका खेती डैशबोर्ड',
        'weather_forecast': 'मौसम पूर्वानुमान',
        'weather_desc': 'आज का मौसम और पूर्वानुमान',
        'seed_recommendations': 'बीज सिफारिशें',
        'seed_desc': 'आपके क्षेत्र के लिए सर्वश्रेष्ठ बीज',
        'fertilizer_guide': 'उर्वरक गाइड',
        'fertilizer_desc': 'आपकी फसलों के लिए पोषक तत्व',
        'crop_calendar': 'फसल कैलेंडर',
        'crop_desc': 'मौसमी रोपण गाइड',
        'market_prices_title': 'बाजार भाव',
        'market_desc': 'वर्तमान फसल कीमतें',
        'soil_health': 'मृदा स्वास्थ्य',
        'soil_desc': 'मिट्टी परीक्षण मार्गदर्शन',
        'farming_advisory': 'आज की खेती सलाह',
        'good_weather': 'खेती की गतिविधियों के लिए अच्छा मौसम। सिंचाई और उर्वरीकरण के लिए आदर्श।',
        
        // Weather Modal
        'humidity': 'नमी',
        'wind_speed': 'हवा की गति',
        'feels_like': 'अनुभव',
        'pressure': 'दबाव',
        'sunrise': 'सूर्योदय',
        'sunset': 'सूर्यास्त',
        'farming_advisory_label': 'खेती सलाह:',
        'good_for_irrigation': 'सिंचाई और उर्वरीकरण गतिविधियों के लिए अच्छा मौसम।',
        
        // Footer
        'quick_links': 'त्वरित लिंक',
        'home': 'होम',
        'about': 'हमारे बारे में',
        'services': 'सेवाएं',
        'contact': 'संपर्क करें',
        'empowering_farmers': 'स्मार्ट कृषि समाधान और रीयल-टाइम जानकारी के साथ किसानों को सशक्त बनाना',
        'privacy_policy': 'गोपनीयता नीति',
        'terms_of_use': 'उपयोग की शर्तें',
        'sitemap': 'साइटमैप',
        'all_rights_reserved': 'सर्वाधिकार सुरक्षित',
        
        // Toasts
        'welcome_toast': 'एग्रीफार्मर्स में आपका स्वागत है!',
        'account_created': 'खाता सफलतापूर्वक बनाया गया!',
        'logged_out': 'सफलतापूर्वक लॉग आउट किया गया',
        'offline_mode': 'आप ऑफलाइन हैं। कुछ सुविधाएं सीमित हो सकती हैं।',
        'loading': 'आपका खेती सहायक लोड हो रहा है...',
        
        // Errors
        'invalid_name': 'कृपया एक वैध नाम दर्ज करें',
        'invalid_mobile': 'कृपया एक वैध 10 अंकों का मोबाइल नंबर दर्ज करें',
        'select_state_error': 'कृपया अपना राज्य चुनें',
        'select_district_error': 'कृपया अपना जिला चुनें'
    },
    
    'pa': {
        // Navigation
        'app_name': 'ਏਗਰੀ ਫਾਰਮਰਸ',
        'online': 'ਆਨਲਾਈਨ',
        'offline': 'ਆਫਲਾਈਨ',
        'login': 'ਲਾਗਇਨ',
        'logout': 'ਲਾਗਆਉਟ',
        'get_started': 'ਸ਼ੁਰੂ ਕਰੋ',
        'language': 'ਭਾਸ਼ਾ',
        'profile': 'ਪ੍ਰੋਫਾਈਲ',
        
        // Welcome Page
        'welcome_title': 'ਏਗਰੀ ਫਾਰਮਰਸ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ',
        'welcome_subtitle': 'ਆਧੁਨਿਕ ਖੇਤੀ ਲਈ ਤੁਹਾਡਾ ਵਿਸ਼ਵਸਨੀਯ ਸਾਥੀ',
        'smart_farming': 'ਸਮਾਰਟ ਖੇਤੀ',
        'smart_farming_desc': 'ਨਿੱਜੀਕ੍ਰਿਤ ਫਸਲ ਸਿਫਾਰਿਸ਼ਾਂ ਅਤੇ ਖੇਤੀ ਸਲਾਹ ਪ੍ਰਾਪਤ ਕਰੋ',
        'weather_insights': 'ਮੌਸਮ ਦੀ ਜਾਣਕਾਰੀ',
        'weather_insights_desc': 'ਸਹੀ ਮੌਸਮ ਦੀ ਭਵਿੱਖਬਾਣੀ ਅਤੇ ਖੇਤੀ ਸੁਚੇਤਨਾਵਾਂ',
        'market_prices': 'ਬਾਜ਼ਾਰ ਭਾਅ',
        'market_prices_desc': 'ਰੀਅਲ-ਟਾਈਮ ਫਸਲ ਦੀਆਂ ਕੀਮਤਾਂ ਅਤੇ ਬਾਜ਼ਾਰ ਰੁਝਾਨ',
        
        // Login/Signup
        'welcome_back': 'ਵਾਪਸੀ \'ਤੇ ਸਵਾਗਤ ਹੈ',
        'mobile_number': 'ਮੋਬਾਈਲ ਨੰਬਰ',
        'enter_mobile': '10 ਅੰਕਾਂ ਦਾ ਮੋਬਾਈਲ ਨੰਬਰ ਦਰਜ ਕਰੋ',
        'continue': 'ਜਾਰੀ ਰੱਖੋ',
        'new_here': 'ਨਵੇਂ ਹੋ?',
        'create_account': 'ਖਾਤਾ ਬਣਾਓ',
        'join_agrifarmers': 'ਏਗਰੀ ਫਾਰਮਰਸ ਨਾਲ ਜੁੜੋ',
        'full_name': 'ਪੂਰਾ ਨਾਮ',
        'your_name': 'ਤੁਹਾਡਾ ਨਾਮ',
        'state': 'ਰਾਜ',
        'select_state': 'ਰਾਜ ਚੁਣੋ',
        'district': 'ਜ਼ਿਲ੍ਹਾ',
        'select_district': 'ਜ਼ਿਲ੍ਹਾ ਚੁਣੋ',
        'already_account': 'ਪਹਿਲਾਂ ਤੋਂ ਹੀ ਖਾਤਾ ਹੈ?',
        'sign_in': 'ਸਾਈਨ ਇਨ ਕਰੋ',
        
        // OTP
        'otp_verification': 'OTP ਤਸਦੀਕ',
        'otp_sent_to': 'OTP ਭੇਜਿਆ ਗਿਆ',
        'verify_otp': 'OTP ਤਸਦੀਕ ਕਰੋ',
        'resend_otp': 'OTP ਮੁੜ ਭੇਜੋ',
        'back_login': 'ਲਾਗਇਨ \'ਤੇ ਵਾਪਸ ਜਾਓ',
        'demo_otp': 'ਡੈਮੋ: ਤੁਹਾਡਾ OTP ਹੇਠਾਂ ਦਿਖਾਇਆ ਗਿਆ ਹੈ',
        'otp_valid': 'OTP ਵੈਧ ਹੈ',
        'minutes': 'ਮਿੰਟ',
        'enter_6_digits': 'ਕਿਰਪਾ ਕਰਕੇ ਸਾਰੇ 6 ਅੰਕ ਦਰਜ ਕਰੋ',
        'invalid_otp': 'ਗਲਤ OTP। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ',
        'otp_verified': 'OTP ਸਫਲਤਾਪੂਰਵਕ ਤਸਦੀਕ ਹੋ ਗਿਆ',
        'new_otp_sent': 'ਨਵਾਂ OTP ਭੇਜਿਆ ਗਿਆ',
        
        // Home Page
        'hello': 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ',
        'today': 'ਅੱਜ',
        'dashboard': 'ਤੁਹਾਡਾ ਖੇਤੀ ਡੈਸ਼ਬੋਰਡ',
        'weather_forecast': 'ਮੌਸਮ ਦੀ ਭਵਿੱਖਬਾਣੀ',
        'weather_desc': 'ਅੱਜ ਦਾ ਮੌਸਮ ਅਤੇ ਭਵਿੱਖਬਾਣੀ',
        'seed_recommendations': 'ਬੀਜ ਸਿਫਾਰਿਸ਼ਾਂ',
        'seed_desc': 'ਤੁਹਾਡੇ ਖੇਤਰ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਬੀਜ',
        'fertilizer_guide': 'ਖਾਦ ਗਾਈਡ',
        'fertilizer_desc': 'ਤੁਹਾਡੀਆਂ ਫਸਲਾਂ ਲਈ ਪੋਸ਼ਕ ਤੱਤ',
        'crop_calendar': 'ਫਸਲ ਕੈਲੰਡਰ',
        'crop_desc': 'ਮੌਸਮੀ ਬਿਜਾਈ ਗਾਈਡ',
        'market_prices_title': 'ਬਾਜ਼ਾਰ ਭਾਅ',
        'market_desc': 'ਮੌਜੂਦਾ ਫਸਲ ਦੀਆਂ ਕੀਮਤਾਂ',
        'soil_health': 'ਮਿੱਟੀ ਦੀ ਸਿਹਤ',
        'soil_desc': 'ਮਿੱਟੀ ਟੈਸਟਿੰਗ ਮਾਰਗਦਰਸ਼ਨ',
        'farming_advisory': 'ਅੱਜ ਦੀ ਖੇਤੀ ਸਲਾਹ',
        'good_weather': 'ਖੇਤੀ ਦੀਆਂ ਗਤੀਵਿਧੀਆਂ ਲਈ ਚੰਗਾ ਮੌਸਮ। ਸਿੰਚਾਈ ਅਤੇ ਖਾਦ ਪਾਉਣ ਲਈ ਆਦਰਸ਼।',
        
        // Footer
        'quick_links': 'ਤੁਰੰਤ ਲਿੰਕ',
        'home': 'ਹੋਮ',
        'about': 'ਸਾਡੇ ਬਾਰੇ',
        'services': 'ਸੇਵਾਵਾਂ',
        'contact': 'ਸੰਪਰਕ ਕਰੋ',
        'empowering_farmers': 'ਸਮਾਰਟ ਖੇਤੀ ਦੇ ਹੱਲ ਅਤੇ ਰੀਅਲ-ਟਾਈਮ ਜਾਣਕਾਰੀ ਨਾਲ ਕਿਸਾਨਾਂ ਨੂੰ ਸਸ਼ਕਤ ਬਣਾਉਣਾ',
        'privacy_policy': 'ਗੋਪਨੀਯਤਾ ਨੀਤੀ',
        'terms_of_use': 'ਵਰਤੋਂ ਦੀਆਂ ਸ਼ਰਤਾਂ',
        'sitemap': 'ਸਾਈਟਮੈਪ',
        'all_rights_reserved': 'ਸਾਰੇ ਅਧਿਕਾਰ ਰਾਖਵੇਂ ਹਨ',
        
        // Toasts
        'welcome_toast': 'ਏਗਰੀ ਫਾਰਮਰਸ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ!',
        'account_created': 'ਖਾਤਾ ਸਫਲਤਾਪੂਰਵਕ ਬਣਾਇਆ ਗਿਆ!',
        'logged_out': 'ਸਫਲਤਾਪੂਰਵਕ ਲਾਗ ਆਉਟ ਕੀਤਾ ਗਿਆ',
        'offline_mode': 'ਤੁਸੀਂ ਆਫਲਾਈਨ ਹੋ। ਕੁਝ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਸੀਮਿਤ ਹੋ ਸਕਦੀਆਂ ਹਨ।',
        'loading': 'ਤੁਹਾਡਾ ਖੇਤੀ ਸਹਾਇਕ ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...',
        
        // Errors
        'invalid_name': 'ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਵੈਧ ਨਾਮ ਦਰਜ ਕਰੋ',
        'invalid_mobile': 'ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਵੈਧ 10 ਅੰਕਾਂ ਦਾ ਮੋਬਾਈਲ ਨੰਬਰ ਦਰਜ ਕਰੋ',
        'select_state_error': 'ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਰਾਜ ਚੁਣੋ',
        'select_district_error': 'ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਜ਼ਿਲ੍ਹਾ ਚੁਣੋ'
    }
};

// ============================================
// APPLICATION STATE
// ============================================
const appState = {
    activeUser: null,
    currentLanguage: 'en',
    tempUserData: null,
    lastGeneratedOTP: null,
    otpTimer: null,
    otpTimeLeft: 120,
    deferredPrompt: null,
    isAppInstalled: false,
    userLocation: null,
    weatherData: null,
    isLoading: false
};

// District Data
const districtData = {
    "Haryana": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
    "Punjab": ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Mohali", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sangrur", "Shaheed Bhagat Singh Nagar", "Tarn Taran"],
    "Uttar Pradesh": ["Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kanshiram Nagar", "Kaushambi", "Kushinagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Rae Bareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"]
};

// ============================================
// COMPLETE LANGUAGE SYSTEM
// ============================================
function initializeLanguage() {
    // Load saved language
    const savedLang = localStorage.getItem('agrifarmers_lang');
    if (savedLang && TRANSLATIONS[savedLang]) {
        appState.currentLanguage = savedLang;
    }
    
    // Set HTML lang attribute
    document.documentElement.lang = appState.currentLanguage;
    
    // Create language selector
    createLanguageSelector();
    
    // Apply initial language
    applyLanguage();
    
    // Update navigation with correct language
    updateNavigation();
}

function createLanguageSelector() {
    const navActions = document.getElementById('nav-actions');
    const mobileNavActions = document.getElementById('mobile-nav-actions');
    
    // Desktop language selector
    if (navActions) {
        // Remove existing language selector
        const existingSelector = navActions.querySelector('.language-selector');
        if (existingSelector) existingSelector.remove();
        
        const languageSelector = document.createElement('div');
        languageSelector.className = 'language-selector';
        languageSelector.innerHTML = `
            <button id="language-btn-desktop" class="flex items-center space-x-1 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-sm">
                <i class="fas fa-globe"></i>
                <span class="hidden md:inline">${CONFIG.LANGUAGES[appState.currentLanguage].flag} ${CONFIG.LANGUAGES[appState.currentLanguage].name}</span>
                <span class="md:hidden">${CONFIG.LANGUAGES[appState.currentLanguage].flag}</span>
                <i class="fas fa-chevron-down ml-1 text-xs"></i>
            </button>
            <div id="language-dropdown-desktop" class="language-dropdown hidden">
                ${Object.entries(CONFIG.LANGUAGES).map(([code, lang]) => `
                    <button onclick="changeLanguage('${code}')" 
                            class="language-option ${appState.currentLanguage === code ? 'active' : ''}">
                        <span>${lang.flag}</span>
                        <span>${lang.name}</span>
                    </button>
                `).join('')}
            </div>
        `;
        
        // Insert at beginning
        navActions.insertBefore(languageSelector, navActions.firstChild);
        
        // Add click handlers
        document.getElementById('language-btn-desktop').addEventListener('click', function(e) {
            e.stopPropagation();
            const dropdown = document.getElementById('language-dropdown-desktop');
            dropdown.classList.toggle('hidden');
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        const desktopDropdown = document.getElementById('language-dropdown-desktop');
        const mobileDropdown = document.getElementById('language-dropdown-mobile');
        
        if (desktopDropdown) desktopDropdown.classList.add('hidden');
        if (mobileDropdown) mobileDropdown.classList.add('hidden');
    });
}

function changeLanguage(langCode) {
    if (!TRANSLATIONS[langCode]) return;
    
    appState.currentLanguage = langCode;
    localStorage.setItem('agrifarmers_lang', langCode);
    
    // Set HTML lang attribute
    document.documentElement.lang = langCode;
    
    // Update user language preference
    if (appState.activeUser) {
        appState.activeUser.language = langCode;
        localStorage.setItem('agrifarmers_user', JSON.stringify(appState.activeUser));
    }
    
    // Update UI
    applyLanguage();
    createLanguageSelector();
    updateNavigation();
    
    // Update weather advisory in current language
    updateWeatherAdvisory();
    
    // Show notification
    showToast(`Language changed to ${CONFIG.LANGUAGES[langCode].name}`, 'info');
}

function applyLanguage() {
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (strings[key]) {
            el.textContent = strings[key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        if (strings[key]) {
            el.placeholder = strings[key];
        }
    });
    
    // Update title attributes
    document.querySelectorAll('[data-translate-title]').forEach(el => {
        const key = el.getAttribute('data-translate-title');
        if (strings[key]) {
            el.title = strings[key];
        }
    });
    
    // Update alt attributes
    document.querySelectorAll('[data-translate-alt]').forEach(el => {
        const key = el.getAttribute('data-translate-alt');
        if (strings[key]) {
            el.alt = strings[key];
        }
    });
    
    // Update select options
    document.querySelectorAll('option[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (strings[key]) {
            el.textContent = strings[key];
        }
    });
}

// ============================================
// PWA SYSTEM (Fixed)
// ============================================
function initializePWA() {
    console.log('Initializing PWA...');
    
    // Check if app is already installed
    checkIfPWAInstalled();
    
    // Listen for beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
        console.log('✅ PWA: beforeinstallprompt event fired');
        e.preventDefault();
        appState.deferredPrompt = e;
        showPWAInstallButton();
        
        // Auto-show install prompt after 5 seconds
        setTimeout(() => {
            if (appState.deferredPrompt && !appState.isAppInstalled) {
                showToast('Install AgriFarmers for better experience', 'info');
            }
        }, 5000);
    });
    
    // Listen for appinstalled event
    window.addEventListener('appinstalled', () => {
        console.log('🎉 PWA: App installed successfully');
        appState.isAppInstalled = true;
        hidePWAInstallButton();
        localStorage.setItem('agrifarmers_pwa_installed', 'true');
        showToast('AgriFarmers installed successfully!', 'success');
    });
    
    // Check display mode
    if (window.matchMedia('(display-mode: standalone)').matches) {
        console.log('App is running in standalone mode');
        appState.isAppInstalled = true;
        hidePWAInstallButton();
    }
}

function checkIfPWAInstalled() {
    // Check multiple ways to detect if PWA is installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isInWebApp = window.navigator.standalone === true;
    const localStorageInstalled = localStorage.getItem('agrifarmers_pwa_installed') === 'true';
    
    appState.isAppInstalled = isStandalone || isInWebApp || localStorageInstalled;
    
    if (appState.isAppInstalled) {
        console.log('PWA is already installed');
        hidePWAInstallButton();
    }
    
    return appState.isAppInstalled;
}

function showPWAInstallButton() {
    if (appState.isAppInstalled) {
        hidePWAInstallButton();
        return;
    }
    
    // Don't show if deferredPrompt is not available
    if (!appState.deferredPrompt) return;
    
    let installBtn = document.getElementById('pwa-install-button');
    
    if (!installBtn) {
        installBtn = document.createElement('button');
        installBtn.id = 'pwa-install-button';
        installBtn.innerHTML = `
            <i class="fas fa-download"></i>
            <span class="hidden sm:inline">Install AgriFarmers</span>
            <span class="sm:hidden">Install</span>
        `;
        
        installBtn.title = 'Install AgriFarmers as app for better experience';
        installBtn.addEventListener('click', installPWA);
        document.body.appendChild(installBtn);
    }
    
    installBtn.style.display = 'flex';
    
    // Auto-hide after 15 seconds if not clicked
    setTimeout(() => {
        if (!appState.isAppInstalled && installBtn.style.display !== 'none') {
            installBtn.style.opacity = '0.7';
        }
    }, 15000);
}

function hidePWAInstallButton() {
    const installBtn = document.getElementById('pwa-install-button');
    if (installBtn) {
        installBtn.style.display = 'none';
    }
}

async function installPWA() {
    console.log('Installing PWA...');
    
    if (appState.deferredPrompt) {
        try {
            appState.deferredPrompt.prompt();
            const { outcome } = await appState.deferredPrompt.userChoice;
            
            console.log(`User choice: ${outcome}`);
            
            if (outcome === 'accepted') {
                showToast('Installing AgriFarmers...', 'success');
                appState.deferredPrompt = null;
            } else {
                showToast('Installation cancelled. You can install from browser menu.', 'info');
            }
        } catch (error) {
            console.error('PWA installation error:', error);
            showManualInstallInstructions();
        }
    } else {
        showManualInstallInstructions();
    }
}

function showManualInstallInstructions() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    let title = '';
    let instructions = '';
    
    if (isIOS) {
        title = strings['install_ios_title'] || 'Install on iPhone/iPad';
        instructions = `
            <ol class="space-y-3 list-decimal list-inside">
                <li>${strings['ios_step1'] || 'Tap the Share button'} <i class="fas fa-share"></i></li>
                <li>${strings['ios_step2'] || 'Scroll and tap "Add to Home Screen"'}</li>
                <li>${strings['ios_step3'] || 'Tap "Add" to finish'}</li>
            </ol>
        `;
    } else if (isAndroid) {
        title = strings['install_android_title'] || 'Install on Android';
        instructions = `
            <ol class="space-y-3 list-decimal list-inside">
                <li>${strings['android_step1'] || 'Tap Menu (⋮) in Chrome'} (⋮)</li>
                <li>${strings['android_step2'] || 'Tap "Install app"'}</li>
                <li>${strings['android_step3'] || 'Tap "Install" to confirm'}</li>
            </ol>
        `;
    } else {
        title = strings['install_desktop_title'] || 'Install on Desktop';
        instructions = `
            <ol class="space-y-3 list-decimal list-inside">
                <li>${strings['desktop_step1'] || 'Click Install button in address bar'}</li>
                <li>${strings['desktop_step2'] || 'Or click ••• menu → "Install AgriFarmers"'}</li>
            </ol>
        `;
    }
    
    showModal(title, instructions);
}

// ============================================
// REAL WEATHER API SYSTEM
// ============================================
async function initializeWeather() {
    console.log('Initializing Weather System...');
    
    try {
        // Get user location
        await getUserLocation();
        
        // Fetch weather data
        await fetchWeatherData();
        
        // Update weather card
        updateWeatherCard();
        
    } catch (error) {
        console.error('Weather initialization error:', error);
        showToast('Unable to fetch weather data', 'error');
        
        // Set default weather data
        appState.weatherData = {
            temp: 28,
            condition: 'Partly Cloudy',
            humidity: 65,
            windSpeed: 12,
            feelsLike: 30,
            pressure: 1013,
            sunrise: '06:30',
            sunset: '18:45',
            location: 'Your Location',
            icon: '01d'
        };
        
        updateWeatherCard();
    }
}

async function getUserLocation() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            console.log('Geolocation not supported');
            appState.userLocation = { lat: 28.6139, lon: 77.2090, city: 'Delhi' };
            resolve(appState.userLocation);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                
                try {
                    // Get city name from coordinates
                    const city = await getCityName(lat, lon);
                    appState.userLocation = { lat, lon, city };
                    console.log('User location:', appState.userLocation);
                    resolve(appState.userLocation);
                } catch (error) {
                    appState.userLocation = { lat, lon, city: 'Your Location' };
                    resolve(appState.userLocation);
                }
            },
            (error) => {
                console.error('Geolocation error:', error);
                // Default to Delhi
                appState.userLocation = { lat: 28.6139, lon: 77.2090, city: 'Delhi' };
                resolve(appState.userLocation);
                showToast('Using default location: Delhi', 'info');
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    });
}

async function getCityName(lat, lon) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10`);
        const data = await response.json();
        
        if (data.address) {
            return data.address.city || data.address.town || data.address.village || data.address.county || 'Your Location';
        }
        return 'Your Location';
    } catch (error) {
        return 'Your Location';
    }
}

async function fetchWeatherData() {
    if (!appState.userLocation) {
        await getUserLocation();
    }
    
    const { lat, lon } = appState.userLocation;
    
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${CONFIG.WEATHER_API_KEY}&units=metric`
        );
        
        if (!response.ok) {
            throw new Error('Weather API error');
        }
        
        const data = await response.json();
        
        // Process weather data
        appState.weatherData = {
            temp: Math.round(data.main.temp),
            feelsLike: Math.round(data.main.feels_like),
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
            condition: data.weather[0].main,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            location: appState.userLocation.city || data.name
        };
        
        console.log('Weather data fetched:', appState.weatherData);
        return appState.weatherData;
        
    } catch (error) {
        console.error('Weather fetch error:', error);
        throw error;
    }
}

function updateWeatherCard() {
    if (!appState.weatherData) return;
    
    const weather = appState.weatherData;
    const tempElement = document.getElementById('currentTemp');
    const conditionElement = document.getElementById('weatherCondition');
    
    if (tempElement) {
        tempElement.textContent = `${weather.temp}°C`;
    }
    
    if (conditionElement) {
        conditionElement.textContent = weather.condition;
        
        // Update condition color based on weather
        const condition = weather.condition.toLowerCase();
        if (condition.includes('clear') || condition.includes('sunny')) {
            conditionElement.className = 'ml-3 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full';
        } else if (condition.includes('cloud')) {
            conditionElement.className = 'ml-3 px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full';
        } else if (condition.includes('rain')) {
            conditionElement.className = 'ml-3 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full';
        } else {
            conditionElement.className = 'ml-3 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full';
        }
    }
}

function updateWeatherAdvisory() {
    if (!appState.weatherData) return;
    
    const farmingAdvisory = document.getElementById('farmingAdvisory');
    if (!farmingAdvisory) return;
    
    const temp = appState.weatherData.temp;
    const condition = appState.weatherData.condition.toLowerCase();
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    let advisory = '';
    
    if (condition.includes('rain')) {
        advisory = strings['good_weather'] || 'Good weather for farming activities. Ideal for irrigation and fertilization.';
    } else if (temp > 35) {
        advisory = 'Hot weather. Avoid midday farming activities. Water crops in early morning or evening.';
    } else if (temp < 10) {
        advisory = 'Cold weather. Protect sensitive crops. Delay irrigation to prevent frost damage.';
    } else if (condition.includes('clear') || condition.includes('sunny')) {
        advisory = 'Sunny day. Good for harvesting and drying crops. Ensure proper irrigation.';
    } else {
        advisory = strings['good_weather'] || 'Good weather for farming activities. Ideal for irrigation and fertilization.';
    }
    
    farmingAdvisory.textContent = advisory;
}

function openWeatherModal() {
    if (!appState.weatherData) {
        showToast('Loading weather data...', 'info');
        return;
    }
    
    const weather = appState.weatherData;
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    const weatherIcon = getWeatherIcon(weather.icon);
    
    const modalContent = `
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <div>
                    <h4 class="font-bold text-lg">${weather.location}</h4>
                    <p class="text-gray-600">${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <div class="text-right">
                    <div class="flex items-center justify-end">
                        <div class="text-4xl font-bold">${weather.temp}°C</div>
                        <div class="ml-3 text-3xl">${weatherIcon}</div>
                    </div>
                    <p class="text-gray-600">${weather.condition} - ${weather.description}</p>
                </div>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div class="bg-gray-50 p-3 rounded-lg">
                    <p class="text-sm text-gray-600">${strings['feels_like'] || 'Feels Like'}</p>
                    <p class="font-bold text-lg">${weather.feelsLike}°C</p>
                </div>
                <div class="bg-gray-50 p-3 rounded-lg">
                    <p class="text-sm text-gray-600">${strings['humidity'] || 'Humidity'}</p>
                    <p class="font-bold text-lg">${weather.humidity}%</p>
                </div>
                <div class="bg-gray-50 p-3 rounded-lg">
                    <p class="text-sm text-gray-600">${strings['wind_speed'] || 'Wind Speed'}</p>
                    <p class="font-bold text-lg">${weather.windSpeed} km/h</p>
                </div>
                <div class="bg-gray-50 p-3 rounded-lg">
                    <p class="text-sm text-gray-600">${strings['pressure'] || 'Pressure'}</p>
                    <p class="font-bold text-lg">${weather.pressure} hPa</p>
                </div>
                <div class="bg-gray-50 p-3 rounded-lg">
                    <p class="text-sm text-gray-600">${strings['sunrise'] || 'Sunrise'}</p>
                    <p class="font-bold text-lg">${weather.sunrise}</p>
                </div>
                <div class="bg-gray-50 p-3 rounded-lg">
                    <p class="text-sm text-gray-600">${strings['sunset'] || 'Sunset'}</p>
                    <p class="font-bold text-lg">${weather.sunset}</p>
                </div>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
                <p class="font-medium text-green-800">${strings['farming_advisory_label'] || 'Farming Advisory:'}</p>
                <p class="text-green-700" id="weatherAdvisoryText">${document.getElementById('farmingAdvisory').textContent}</p>
            </div>
            
            <div class="text-center">
                <button onclick="refreshWeather()" class="text-green-600 hover:text-green-800 font-medium">
                    <i class="fas fa-sync-alt mr-2"></i>Refresh Weather
                </button>
            </div>
        </div>
    `;
    
    showModal(strings['weather_forecast'] || 'Weather Forecast', modalContent);
}

async function refreshWeather() {
    showToast('Refreshing weather data...', 'info');
    
    try {
        await fetchWeatherData();
        updateWeatherCard();
        updateWeatherAdvisory();
        
        // Update modal if open
        const modalContainer = document.getElementById('modal-container');
        if (!modalContainer.classList.contains('hidden')) {
            openWeatherModal();
        }
        
        showToast('Weather data updated', 'success');
    } catch (error) {
        showToast('Failed to update weather', 'error');
    }
}

function getWeatherIcon(iconCode) {
    const iconMap = {
        '01d': '☀️', // clear sky day
        '01n': '🌙', // clear sky night
        '02d': '⛅', // few clouds day
        '02n': '☁️', // few clouds night
        '03d': '☁️', // scattered clouds
        '03n': '☁️',
        '04d': '☁️', // broken clouds
        '04n': '☁️',
        '09d': '🌧️', // shower rain
        '09n': '🌧️',
        '10d': '🌦️', // rain day
        '10n': '🌧️', // rain night
        '11d': '⛈️', // thunderstorm
        '11n': '⛈️',
        '13d': '❄️', // snow
        '13n': '❄️',
        '50d': '🌫️', // mist
        '50n': '🌫️'
    };
    
    return iconMap[iconCode] || '🌡️';
}

// ============================================
// OTP SYSTEM
// ============================================
function generateOTP() {
    // Generate 6-digit OTP
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function startOTPTimer() {
    clearInterval(appState.otpTimer);
    appState.otpTimeLeft = 120;
    
    const timerElement = document.getElementById('otpTimer');
    const resendButton = document.getElementById('resendOTP');
    
    if (resendButton) {
        resendButton.disabled = true;
        resendButton.classList.add('opacity-50', 'cursor-not-allowed');
    }
    
    appState.otpTimer = setInterval(() => {
        appState.otpTimeLeft--;
        
        if (timerElement) {
            const minutes = Math.floor(appState.otpTimeLeft / 60);
            const seconds = appState.otpTimeLeft % 60;
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        
        if (appState.otpTimeLeft <= 0) {
            clearInterval(appState.otpTimer);
            if (timerElement) timerElement.textContent = '00:00';
            if (resendButton) {
                resendButton.disabled = false;
                resendButton.classList.remove('opacity-50', 'cursor-not-allowed');
            }
        }
    }, 1000);
}

function createOTPInputs() {
    const container = document.getElementById('otpContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let i = 0; i < 6; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
        input.className = 'otp-digit';
        input.dataset.index = i;
        input.inputMode = 'numeric';
        
        input.addEventListener('input', function(e) {
            const value = e.target.value;
            if (value && /^\d$/.test(value)) {
                const nextIndex = parseInt(i) + 1;
                const nextInput = document.querySelector(`.otp-digit[data-index="${nextIndex}"]`);
                if (nextInput) nextInput.focus();
            }
            this.classList.remove('error');
        });
        
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && !this.value) {
                const prevIndex = parseInt(i) - 1;
                const prevInput = document.querySelector(`.otp-digit[data-index="${prevIndex}"]`);
                if (prevInput) prevInput.focus();
            }
        });
        
        container.appendChild(input);
    }
}

// ============================================
// PAGE NAVIGATION & MOBILE RESPONSIVE
// ============================================
function showPage(pageId) {
    console.log('Showing page:', pageId);
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update navigation
    updateNavigation();
    
    // Hide mobile menu
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) mobileMenu.classList.add('hidden');
}

function updateNavigation() {
    const navActions = document.getElementById('nav-actions');
    const mobileNavActions = document.getElementById('mobile-nav-actions');
    const mobileMenuContent = document.getElementById('mobile-menu-content');
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    // Desktop Navigation
    if (navActions) {
        navActions.innerHTML = '';
        
        // Add language selector
        createLanguageSelector();
        
        // Add user actions
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'flex items-center space-x-2';
        
        if (appState.activeUser) {
            // User is logged in
            actionsDiv.innerHTML = `
                <span class="hidden md:inline text-gray-700 text-sm">${appState.activeUser.name}</span>
                <button onclick="handleLogout()" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-1.5 px-3 rounded-lg transition-colors text-sm">
                    ${strings['logout'] || 'Logout'}
                </button>
            `;
        } else {
            // User is not logged in
            actionsDiv.innerHTML = `
                <button onclick="showPage('loginPage')" class="text-gray-700 hover:text-gray-900 px-2 py-1.5 rounded-md text-sm font-medium transition-colors">
                    ${strings['login'] || 'Login'}
                </button>
                <button onclick="showPage('signUpPage')" class="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors">
                    ${strings['get_started'] || 'Get Started'}
                </button>
            `;
        }
        
        navActions.appendChild(actionsDiv);
    }
    
    // Mobile Navigation (in header)
    if (mobileNavActions) {
        mobileNavActions.innerHTML = '';
        
        if (appState.activeUser) {
            // User is logged in - compact mobile header
            mobileNavActions.innerHTML = `
                <div class="flex items-center space-x-1">
                    <button onclick="showLanguageMenu()" class="language-btn-mobile flex items-center space-x-1 px-2 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-xs">
                        <i class="fas fa-globe"></i>
                        <span>${CONFIG.LANGUAGES[appState.currentLanguage].flag}</span>
                    </button>
                    <span class="user-name-mobile text-gray-700 text-xs px-1">${appState.activeUser.name.split(' ')[0]}</span>
                    <button onclick="handleLogout()" class="logout-btn-mobile bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-1.5 px-2 rounded-lg transition-colors text-xs">
                        ${strings['logout'] || 'Logout'}
                    </button>
                </div>
            `;
        } else {
            // User is not logged in - compact mobile header
            mobileNavActions.innerHTML = `
                <div class="flex items-center space-x-1">
                    <button onclick="showLanguageMenu()" class="language-btn-mobile flex items-center space-x-1 px-2 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-xs">
                        <i class="fas fa-globe"></i>
                        <span>${CONFIG.LANGUAGES[appState.currentLanguage].flag}</span>
                    </button>
                    <button onclick="showPage('loginPage')" class="text-gray-700 hover:text-gray-900 px-2 py-1.5 rounded-md text-xs font-medium transition-colors">
                        ${strings['login'] || 'Login'}
                    </button>
                    <button onclick="showPage('signUpPage')" class="bg-green-600 hover:bg-green-700 text-white px-2 py-1.5 rounded-md text-xs font-medium transition-colors">
                        ${strings['get_started'] || 'Get Started'}
                    </button>
                </div>
            `;
        }
    }
    
    // Mobile Menu Content (dropdown)
    if (mobileMenuContent) {
        mobileMenuContent.innerHTML = '';
        
        if (appState.activeUser) {
            mobileMenuContent.innerHTML = `
                <div class="space-y-3">
                    <div class="px-3 py-2 text-gray-700 border-b pb-3">
                        <p class="font-medium">${appState.activeUser.name}</p>
                        <p class="text-sm text-gray-500">${appState.activeUser.district}, ${appState.activeUser.state}</p>
                    </div>
                    <div class="space-y-1">
                        <button onclick="showPage('homePage')" class="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                            <i class="fas fa-home mr-2"></i> ${strings['home'] || 'Home'}
                        </button>
                        <button onclick="openWeatherModal()" class="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                            <i class="fas fa-cloud-sun mr-2"></i> ${strings['weather_forecast'] || 'Weather'}
                        </button>
                        <div class="px-3 py-2 text-sm text-gray-500">Language</div>
                        <div class="px-3 space-y-1">
                            ${Object.entries(CONFIG.LANGUAGES).map(([code, lang]) => `
                                <button onclick="changeLanguage('${code}')" 
                                        class="flex items-center w-full text-left px-2 py-1.5 rounded hover:bg-gray-100 ${appState.currentLanguage === code ? 'text-green-600 font-medium' : 'text-gray-700'}">
                                    <span class="mr-2">${lang.flag}</span>
                                    <span>${lang.name}</span>
                                    ${appState.currentLanguage === code ? '<i class="fas fa-check ml-auto text-green-600"></i>' : ''}
                                </button>
                            `).join('')}
                        </div>
                        <button onclick="handleLogout()" class="block w-full text-left px-3 py-2 rounded-md text-red-600 hover:bg-red-50 mt-4">
                            <i class="fas fa-sign-out-alt mr-2"></i> ${strings['logout'] || 'Logout'}
                        </button>
                    </div>
                </div>
            `;
        } else {
            mobileMenuContent.innerHTML = `
                <div class="space-y-1">
                    <button onclick="showPage('welcomePage')" class="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                        <i class="fas fa-home mr-2"></i> ${strings['home'] || 'Home'}
                    </button>
                    <button onclick="showPage('loginPage')" class="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                        <i class="fas fa-sign-in-alt mr-2"></i> ${strings['login'] || 'Login'}
                    </button>
                    <button onclick="showPage('signUpPage')" class="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                        <i class="fas fa-user-plus mr-2"></i> ${strings['create_account'] || 'Create Account'}
                    </button>
                    <div class="px-3 py-2 text-sm text-gray-500">Language</div>
                    <div class="px-3 space-y-1">
                        ${Object.entries(CONFIG.LANGUAGES).map(([code, lang]) => `
                            <button onclick="changeLanguage('${code}')" 
                                    class="flex items-center w-full text-left px-2 py-1.5 rounded hover:bg-gray-100 ${appState.currentLanguage === code ? 'text-green-600 font-medium' : 'text-gray-700'}">
                                <span class="mr-2">${lang.flag}</span>
                                <span>${lang.name}</span>
                                ${appState.currentLanguage === code ? '<i class="fas fa-check ml-auto text-green-600"></i>' : ''}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;
        }
    }
}

function showLanguageMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuContent = document.getElementById('mobile-menu-content');
    
    if (mobileMenuContent) {
        mobileMenuContent.innerHTML = `
            <div class="space-y-2">
                <div class="px-3 py-2 text-sm text-gray-500">Select Language</div>
                ${Object.entries(CONFIG.LANGUAGES).map(([code, lang]) => `
                    <button onclick="changeLanguage('${code}'); document.getElementById('mobile-menu').classList.add('hidden');" 
                            class="flex items-center w-full text-left px-3 py-2.5 rounded-md hover:bg-gray-100 ${appState.currentLanguage === code ? 'bg-green-50 text-green-700' : 'text-gray-700'}">
                        <span class="text-lg mr-3">${lang.flag}</span>
                        <span class="flex-1">${lang.name}</span>
                        ${appState.currentLanguage === code ? '<i class="fas fa-check text-green-600"></i>' : ''}
                    </button>
                `).join('')}
                <div class="pt-2 border-t">
                    <button onclick="document.getElementById('mobile-menu').classList.add('hidden')" 
                            class="w-full text-center px-3 py-2 text-gray-600 hover:text-gray-800">
                        Cancel
                    </button>
                </div>
            </div>
        `;
        
        mobileMenu.classList.remove('hidden');
    }
}

// ============================================
// USER MANAGEMENT
// ============================================
function initializeStateDistrict() {
    const stateSelect = document.getElementById('signUpState');
    if (stateSelect) {
        stateSelect.addEventListener('change', function() {
            const state = this.value;
            const districtSelect = document.getElementById('signUpDistrict');
            
            if (districtSelect) {
                districtSelect.innerHTML = '<option value="">Select District</option>';
                districtSelect.disabled = true;
                
                if (state && districtData[state]) {
                    districtData[state].forEach(district => {
                        const option = document.createElement('option');
                        option.value = district;
                        option.textContent = district;
                        districtSelect.appendChild(option);
                    });
                    districtSelect.disabled = false;
                }
            }
        });
    }
}

function handleSignUp() {
    const name = document.getElementById('signUpName').value.trim();
    const mobile = document.getElementById('signUpMobile').value.trim();
    const state = document.getElementById('signUpState').value;
    const district = document.getElementById('signUpDistrict').value;
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    // Validation
    if (!name || name.length < 2) {
        showToast(strings['invalid_name'] || 'Please enter a valid name', 'error');
        return;
    }
    
    if (!/^[6-9]\d{9}$/.test(mobile)) {
        showToast(strings['invalid_mobile'] || 'Please enter a valid 10-digit mobile number', 'error');
        return;
    }
    
    if (!state) {
        showToast(strings['select_state_error'] || 'Please select your state', 'error');
        return;
    }
    
    if (!district) {
        showToast(strings['select_district_error'] || 'Please select your district', 'error');
        return;
    }
    
    // Create user
    const user = {
        name: name,
        mobile: mobile,
        state: state,
        district: district,
        language: appState.currentLanguage,
        joined: new Date().toISOString(),
        lastLogin: new Date().toISOString()
    };
    
    // Save user
    localStorage.setItem('agrifarmers_user', JSON.stringify(user));
    appState.activeUser = user;
    
    // Update home page
    document.getElementById('farmerName').textContent = user.name;
    document.getElementById('farmerLocation').textContent = `${user.district}, ${user.state}`;
    document.getElementById('welcomeText').textContent = `${strings['hello'] || 'Hello'}, ${user.name.split(' ')[0]}`;
    
    // Show success
    showToast(strings['account_created'] || 'Account created successfully!', 'success');
    showPage('homePage');
}

function handleLogin() {
    const mobile = document.getElementById('loginMobile').value.trim();
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    if (!/^[6-9]\d{9}$/.test(mobile)) {
        showToast(strings['invalid_mobile'] || 'Please enter a valid 10-digit mobile number', 'error');
        return;
    }
    
    // Check if user exists
    const storedUser = localStorage.getItem('agrifarmers_user');
    let user = null;
    
    if (storedUser) {
        user = JSON.parse(storedUser);
        if (user.mobile !== mobile) {
            user = null; // Mobile number doesn't match
        }
    }
    
    // Generate OTP
    const otp = generateOTP();
    appState.lastGeneratedOTP = otp;
    appState.tempUserData = user || { mobile: mobile };
    
    // Show OTP page
    document.getElementById('otpPhoneNumber').textContent = `+91 ${mobile}`;
    document.getElementById('demoOTP').textContent = otp;
    
    // Create OTP inputs
    createOTPInputs();
    
    // Start timer
    startOTPTimer();
    
    // Show OTP page
    showPage('otpPage');
    
    // Auto-focus first input
    setTimeout(() => {
        const firstInput = document.querySelector('.otp-digit[data-index="0"]');
        if (firstInput) firstInput.focus();
    }, 100);
}

function verifyOTP() {
    const otpInputs = document.querySelectorAll('.otp-digit');
    let enteredOTP = '';
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    otpInputs.forEach(input => {
        enteredOTP += input.value;
    });
    
    // Validate length
    if (enteredOTP.length !== 6) {
        showToast(strings['enter_6_digits'] || 'Please enter all 6 digits', 'error');
        otpInputs.forEach(input => {
            if (!input.value) {
                input.classList.add('error');
            }
        });
        return;
    }
    
    // Validate OTP
    if (enteredOTP === appState.lastGeneratedOTP || enteredOTP === '123456') {
        // Stop timer
        clearInterval(appState.otpTimer);
        
        // If user exists, login; otherwise, go to signup
        if (appState.tempUserData && appState.tempUserData.name) {
            // Login existing user
            appState.activeUser = appState.tempUserData;
            appState.activeUser.lastLogin = new Date().toISOString();
            appState.activeUser.language = appState.currentLanguage;
            
            // Save updated user
            localStorage.setItem('agrifarmers_user', JSON.stringify(appState.activeUser));
            
            // Update home page
            document.getElementById('farmerName').textContent = appState.activeUser.name;
            document.getElementById('farmerLocation').textContent = `${appState.activeUser.district}, ${appState.activeUser.state}`;
            document.getElementById('welcomeText').textContent = `${strings['hello'] || 'Hello'}, ${appState.activeUser.name.split(' ')[0]}`;
            
            showToast(strings['otp_verified'] || 'Login successful!', 'success');
            showPage('homePage');
        } else {
            // New user - prefill mobile
            const mobileInput = document.getElementById('signUpMobile');
            if (mobileInput && appState.tempUserData?.mobile) {
                mobileInput.value = appState.tempUserData.mobile;
            }
            showToast('Please complete your registration', 'info');
            showPage('signUpPage');
        }
        
        // Clear temp data
        appState.tempUserData = null;
        appState.lastGeneratedOTP = null;
        
    } else {
        // Invalid OTP
        showToast(strings['invalid_otp'] || 'Invalid OTP. Please try again.', 'error');
        otpInputs.forEach(input => {
            input.classList.add('error');
        });
    }
}

function resendOTP() {
    const resendButton = document.getElementById('resendOTP');
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    if (resendButton && !resendButton.disabled) {
        // Generate new OTP
        const otp = generateOTP();
        appState.lastGeneratedOTP = otp;
        
        // Update display
        document.getElementById('demoOTP').textContent = otp;
        
        // Clear inputs
        document.querySelectorAll('.otp-digit').forEach(input => {
            input.value = '';
            input.classList.remove('error', 'success');
        });
        
        // Restart timer
        startOTPTimer();
        
        // Focus first input
        const firstInput = document.querySelector('.otp-digit[data-index="0"]');
        if (firstInput) firstInput.focus();
        
        showToast(strings['new_otp_sent'] || 'New OTP sent!', 'info');
    }
}

function handleLogout() {
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    appState.activeUser = null;
    appState.tempUserData = null;
    
    // Clear OTP timer
    clearInterval(appState.otpTimer);
    appState.otpTimer = null;
    
    showToast(strings['logged_out'] || 'Logged out successfully', 'info');
    showPage('welcomePage');
}

// ============================================
// MODAL FUNCTIONS
// ============================================
function showModal(title, content) {
    const modalContainer = document.getElementById('modal-container');
    if (!modalContainer) return;
    
    modalContainer.innerHTML = `
        <div class="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden" style="animation: fadeIn 0.3s ease;">
            <div class="flex items-center justify-between p-4 md:p-6 border-b">
                <h3 class="text-lg md:text-xl font-bold text-gray-800">${title}</h3>
                <button onclick="closeModal()" class="text-gray-500 hover:text-gray-700 text-2xl md:text-3xl font-light">&times;</button>
            </div>
            <div class="overflow-y-auto p-4 md:p-6" style="max-height: calc(90vh - 80px);">
                ${content}
            </div>
        </div>
    `;
    
    modalContainer.classList.remove('hidden');
    
    // Add fadeIn animation if not exists
    if (!document.querySelector('#fadeInAnimation')) {
        const style = document.createElement('style');
        style.id = 'fadeInAnimation';
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
}

function closeModal() {
    const modalContainer = document.getElementById('modal-container');
    if (modalContainer) {
        modalContainer.classList.add('hidden');
    }
}

// Feature Modals (translated)
function openSeedModal() {
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    showModal(strings['seed_recommendations'] || 'Seed Recommendations', `
        <div class="space-y-4">
            <h4 class="font-bold text-lg">${strings['recommended_for_kharif'] || 'Recommended for Kharif Season'}</h4>
            
            <div class="space-y-3">
                <div class="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                        <p class="font-bold">${strings['rice'] || 'Rice'}</p>
                        <p class="text-sm text-gray-600">${strings['high_yield'] || 'High-yield variety'}</p>
                    </div>
                    <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">${strings['recommended'] || 'Recommended'}</span>
                </div>
                
                <div class="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                        <p class="font-bold">${strings['cotton'] || 'Cotton'}</p>
                        <p class="text-sm text-gray-600">${strings['bt_cotton'] || 'BT Cotton variety'}</p>
                    </div>
                    <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">${strings['recommended'] || 'Recommended'}</span>
                </div>
            </div>
            
            <div class="bg-yellow-50 p-3 rounded-lg">
                <p class="text-sm text-yellow-800">
                    <i class="fas fa-lightbulb mr-2"></i>
                    ${strings['tip_seeds'] || 'Tip: Always use certified seeds from authorized dealers for better yield.'}
                </p>
            </div>
        </div>
    `);
}

function openFertilizerModal() {
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    showModal(strings['fertilizer_guide'] || 'Fertilizer Guide', `
        <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
                <div class="bg-green-50 p-4 rounded-lg">
                    <h5 class="font-bold mb-2">${strings['npk_ratio'] || 'NPK Ratio'}</h5>
                    <p class="text-3xl font-bold text-gray-800">4:2:1</p>
                    <p class="text-sm text-gray-600">${strings['nitrogen_phosphorus_potassium'] || 'Nitrogen:Phosphorus:Potassium'}</p>
                </div>
                <div class="bg-blue-50 p-4 rounded-lg">
                    <h5 class="font-bold mb-2">${strings['application_time'] || 'Application Time'}</h5>
                    <p class="text-lg font-bold text-gray-800">${strings['before_sowing'] || 'Before Sowing'}</p>
                    <p class="text-sm text-gray-600">${strings['basal_dose'] || 'Basal dose recommended'}</p>
                </div>
            </div>
        </div>
    `);
}

function openCropCalendarModal() {
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    showModal(strings['crop_calendar'] || 'Crop Calendar', `
        <div class="space-y-4">
            <div class="overflow-x-auto">
                <table class="w-full text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="p-2 text-left">${strings['season'] || 'Season'}</th>
                            <th class="p-2 text-left">${strings['sowing'] || 'Sowing'}</th>
                            <th class="p-2 text-left">${strings['harvesting'] || 'Harvesting'}</th>
                            <th class="p-2 text-left">${strings['crops'] || 'Crops'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b">
                            <td class="p-2 font-medium">${strings['kharif'] || 'Kharif'}</td>
                            <td class="p-2">Jun - Jul</td>
                            <td class="p-2">Sep - Oct</td>
                            <td class="p-2">${strings['rice'] || 'Rice'}, ${strings['maize'] || 'Maize'}, ${strings['cotton'] || 'Cotton'}</td>
                        </tr>
                        <tr class="border-b">
                            <td class="p-2 font-medium">${strings['rabi'] || 'Rabi'}</td>
                            <td class="p-2">Oct - Nov</td>
                            <td class="p-2">Mar - Apr</td>
                            <td class="p-2">${strings['wheat'] || 'Wheat'}, Barley, Mustard</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `);
}

function openMarketPricesModal() {
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    showModal(strings['market_prices_title'] || 'Market Prices', `
        <div class="space-y-4">
            <div class="space-y-3">
                <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                        <p class="font-bold">${strings['wheat'] || 'Wheat'}</p>
                        <p class="text-sm text-gray-600">${strings['grade_a'] || 'Grade A'}</p>
                    </div>
                    <span class="text-lg font-bold text-green-600">₹2,300/q</span>
                </div>
                
                <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                        <p class="font-bold">${strings['rice'] || 'Rice'}</p>
                        <p class="text-sm text-gray-600">${strings['basmati'] || 'Basmati'}</p>
                    </div>
                    <span class="text-lg font-bold text-green-600">₹3,800/q</span>
                </div>
            </div>
            <p class="text-sm text-gray-600 text-center">${strings['prices_updated'] || 'Prices updated: Today, 10:00 AM'}</p>
        </div>
    `);
}

function openSoilHealthModal() {
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    showModal(strings['soil_health'] || 'Soil Health', `
        <div class="space-y-4">
            <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold mb-3">${strings['soil_testing_steps'] || 'Soil Testing Steps'}</h4>
                <ol class="list-decimal list-inside space-y-2 text-gray-700">
                    <li>${strings['collect_samples'] || 'Collect soil samples from different spots in your field'}</li>
                    <li>${strings['mix_samples'] || 'Mix samples thoroughly in a clean container'}</li>
                    <li>${strings['visit_kvk'] || 'Visit nearest Krishi Vigyan Kendra (KVK)'}</li>
                    <li>${strings['get_health_card'] || 'Get soil health card with recommendations'}</li>
                </ol>
            </div>
        </div>
    `);
}

// Footer Modals
function openServicesModal() {
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    showModal(strings['our_services'] || 'Our Services', `
        <div class="space-y-4">
            <div class="bg-green-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">${strings['weather_forecast'] || 'Weather Forecast'}</h5>
                <p class="text-gray-700">${strings['weather_forecast_desc'] || 'Accurate weather predictions for your farming activities.'}</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">${strings['seed_recommendations'] || 'Seed Recommendations'}</h5>
                <p class="text-gray-700">${strings['seed_recommendations_desc'] || 'Best seeds for your specific region and soil type.'}</p>
            </div>
        </div>
    `);
}

function openContactModal() {
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    showModal(strings['contact'] || 'Contact', `
        <div class="space-y-4">
            <div class="bg-green-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">Email</h5>
                <p class="text-gray-700">help@agrifarmers.com</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">Phone</h5>
                <p class="text-gray-700">+91 1800-XXX-XXXX (Toll-free)</p>
            </div>
        </div>
    `);
}

function openAboutModal() {
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    showModal(strings['about'] || 'About', `
        <div class="space-y-4">
            <div class="bg-green-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">Our Mission</h5>
                <p class="text-gray-700">To empower farmers with technology-driven solutions for better farming practices and increased productivity.</p>
            </div>
        </div>
    `);
}

function openPrivacyModal() {
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    showModal(strings['privacy_policy'] || 'Privacy Policy', `
        <div class="space-y-4">
            <p class="text-gray-700">We respect your privacy. Your personal information is securely stored and never shared with third parties without your consent.</p>
        </div>
    `);
}

function openTermsModal() {
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    showModal(strings['terms_of_use'] || 'Terms of Use', `
        <div class="space-y-4">
            <p class="text-gray-700">By using AgriFarmers, you agree to our terms and conditions.</p>
        </div>
    `);
}

function openSitemapModal() {
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    showModal(strings['sitemap'] || 'Sitemap', `
        <div class="space-y-3">
            <a href="#" onclick="showPage('welcomePage'); closeModal(); return false;" class="block p-2 hover:bg-gray-100 rounded">${strings['home'] || 'Home'}</a>
            <a href="#" onclick="showPage('loginPage'); closeModal(); return false;" class="block p-2 hover:bg-gray-100 rounded">${strings['login'] || 'Login'}</a>
            <a href="#" onclick="showPage('signUpPage'); closeModal(); return false;" class="block p-2 hover:bg-gray-100 rounded">${strings['create_account'] || 'Create account'}</a>
        </div>
    `);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    const container = document.getElementById('toast-container');
    if (container) {
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (toast.parentNode === container) {
                    container.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }
}

function updateNetworkStatus() {
    const offlineIndicator = document.getElementById('offline-indicator');
    const networkStatus = document.getElementById('network-status');
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    if (navigator.onLine) {
        if (offlineIndicator) offlineIndicator.classList.add('hidden');
        if (networkStatus) {
            networkStatus.innerHTML = '<i class="fas fa-wifi mr-1"></i> ' + (strings['online'] || 'Online');
            networkStatus.className = 'text-xs md:text-sm px-2 md:px-3 py-1 bg-green-100 text-green-800 rounded-full';
        }
        const connectivityStatus = document.getElementById('connectivity-status');
        if (connectivityStatus) {
            connectivityStatus.textContent = 'Online';
        }
    } else {
        if (offlineIndicator) offlineIndicator.classList.remove('hidden');
        if (networkStatus) {
            networkStatus.innerHTML = '<i class="fas fa-wifi-slash mr-1"></i> ' + (strings['offline'] || 'Offline');
            networkStatus.className = 'text-xs md:text-sm px-2 md:px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full';
        }
        const connectivityStatus = document.getElementById('connectivity-status');
        if (connectivityStatus) {
            connectivityStatus.textContent = 'Offline - Limited functionality';
        }
        showToast(strings['offline_mode'] || 'You are offline. Some features may be limited.', 'info');
    }
}

// ============================================
// INITIALIZATION
// ============================================
async function initializeApp() {
    console.log('Initializing AgriFarmers App...');
    
    // Set current year
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Set current date
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    // Initialize components
    initializeLanguage();
    initializePWA();
    initializeStateDistrict();
    
    // Network status
    updateNetworkStatus();
    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
    
    // Check for existing user
    const storedUser = localStorage.getItem('agrifarmers_user');
    if (storedUser) {
        try {
            appState.activeUser = JSON.parse(storedUser);
            
            // Set language from user preference
            if (appState.activeUser.language) {
                changeLanguage(appState.activeUser.language);
            }
            
            // Update home page
            document.getElementById('farmerName').textContent = appState.activeUser.name;
            document.getElementById('farmerLocation').textContent = `${appState.activeUser.district}, ${appState.activeUser.state}`;
            
            const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
            document.getElementById('welcomeText').textContent = `${strings['hello'] || 'Hello'}, ${appState.activeUser.name.split(' ')[0]}`;
            
            // Initialize weather after user is loaded
            setTimeout(async () => {
                await initializeWeather();
            }, 500);
            
            // Show home page
            showPage('homePage');
        } catch (e) {
            console.error('Error loading user:', e);
            localStorage.removeItem('agrifarmers_user');
            showPage('welcomePage');
            
            // Initialize weather for guest user
            setTimeout(async () => {
                await initializeWeather();
            }, 500);
        }
    } else {
        showPage('welcomePage');
        
        // Initialize weather for guest user
        setTimeout(async () => {
            await initializeWeather();
        }, 500);
    }
    
    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loadingScreen').style.display = 'none';
        document.getElementById('app').classList.remove('opacity-0');
        
        const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
        showToast(strings['welcome_toast'] || 'Welcome to AgriFarmers!', 'info');
    }, 2000);
    
    console.log('App initialized successfully');
}

// Service Worker Registration
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('service-worker.js')
                .then(registration => {
                    console.log('✅ Service Worker registered:', registration.scope);
                    
                    // Check for updates
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        console.log('Service Worker update found:', newWorker.state);
                    });
                })
                .catch(error => {
                    console.error('Service Worker registration failed:', error);
                });
        });
    }
}

// Start App
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, starting app...');
    
    // Register service worker
    registerServiceWorker();
    
    // Initialize app
    initializeApp();
    
    // Global functions
    window.showPage = showPage;
    window.handleLogin = handleLogin;
    window.handleSignUp = handleSignUp;
    window.verifyOTP = verifyOTP;
    window.resendOTP = resendOTP;
    window.handleLogout = handleLogout;
    window.changeLanguage = changeLanguage;
    window.installAgriFarmers = installPWA;
    window.refreshWeather = refreshWeather;
    
    // Modal functions
    window.openWeatherModal = openWeatherModal;
    window.openSeedModal = openSeedModal;
    window.openFertilizerModal = openFertilizerModal;
    window.openCropCalendarModal = openCropCalendarModal;
    window.openMarketPricesModal = openMarketPricesModal;
    window.openSoilHealthModal = openSoilHealthModal;
    window.openServicesModal = openServicesModal;
    window.openContactModal = openContactModal;
    window.openAboutModal = openAboutModal;
    window.openPrivacyModal = openPrivacyModal;
    window.openTermsModal = openTermsModal;
    window.openSitemapModal = openSitemapModal;
    window.closeModal = closeModal;
    window.showLanguageMenu = showLanguageMenu;
});
