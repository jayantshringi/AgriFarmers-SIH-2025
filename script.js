/*
 * AgriFarmers Application Script
 * Version: 3.0.0 - Complete Language Support (EN, HI, PA)
 */

// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
    APP_NAME: 'AgriFarmers',
    VERSION: '3.0.0',
    DEBUG_MODE: true,
    LANGUAGES: {
        'en': { name: 'English', dir: 'ltr', flag: '🇺🇸' },
        'hi': { name: 'हिंदी', dir: 'ltr', flag: '🇮🇳' },
        'pa': { name: 'ਪੰਜਾਬੀ', dir: 'ltr', flag: '🇮🇳' }
    },
    WEATHER_API_KEY: '44a55de0f2e0674cb9160f50459d51d4' 

};

// ============================================
// TRANSLATION SYSTEM
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
        'wind': 'Wind',
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
        'tip_seeds': 'Tip: Always use certified seeds from authorized dealers for better yield.',
        
        // Fertilizer Modal
        'npk_ratio': 'NPK Ratio',
        'application_time': 'Application Time',
        'before_sowing': 'Before Sowing',
        'basal_dose': 'Basal dose recommended',
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
        'wind': 'हवा',
        'farming_advisory_label': 'खेती सलाह:',
        'good_for_irrigation': 'सिंचाई और उर्वरीकरण गतिविधियों के लिए अच्छा मौसम।',
        
        // Seed Modal
        'recommended_for_kharif': 'खरीफ सीजन के लिए अनुशंसित',
        'rice': 'चावल',
        'cotton': 'कपास',
        'maize': 'मक्का',
        'high_yield': 'उच्च उपज वाली किस्म',
        'bt_cotton': 'बीटी कपास किस्म',
        'hybrid': 'संकर किस्म',
        'tip_seeds': 'टिप: बेहतर उपज के लिए हमेशा प्रमाणित बीज अधिकृत डीलरों से उपयोग करें।',
        
        // Fertilizer Modal
        'npk_ratio': 'एनपीके अनुपात',
        'application_time': 'आवेदन समय',
        'before_sowing': 'बुवाई से पहले',
        'basal_dose': 'आधार खुराक अनुशंसित',
        'important_soil': 'महत्वपूर्ण: उर्वरक आवेदन से पहले मिट्टी परीक्षण की सिफारिश की जाती है।',
        
        // Crop Calendar Modal
        'season': 'मौसम',
        'sowing': 'बुवाई',
        'harvesting': 'कटाई',
        'crops': 'फसलें',
        'kharif': 'खरीफ',
        'rabi': 'रबी',
        'zaid': 'ज़ायद',
        'current_recommendation': 'वर्तमान सिफारिश',
        'perfect_time': 'अब चावल और कपास जैसी खरीफ फसलों के लिए सही समय है।',
        
        // Market Prices Modal
        'grade_a': 'ग्रेड ए',
        'basmati': 'बासमती',
        'medium_staple': 'मध्यम स्टेपल',
        'prices_updated': 'कीमतें अद्यतन: आज, सुबह 10:00',
        
        // Soil Health Modal
        'soil_testing_steps': 'मिट्टी परीक्षण के चरण',
        'collect_samples': 'अपने खेत के विभिन्न स्थानों से मिट्टी के नमूने एकत्र करें',
        'mix_samples': 'एक साफ कंटेनर में नमूनों को अच्छी तरह मिलाएं',
        'visit_kvk': 'निकटतम कृषि विज्ञान केंद्र (केवीके) पर जाएं',
        'get_health_card': 'सिफारिशों के साथ मृदा स्वास्थ्य कार्ड प्राप्त करें',
        'kvk_contact': 'केवीके संपर्क जानकारी',
        'search_nearest': 'अपने जिले में निकटतम कृषि विज्ञान केंद्र (केवीके) खोजें।',
        
        // Services Modal
        'our_services': 'हमारी सेवाएं',
        'weather_forecast_desc': 'आपकी खेती गतिविधियों के लिए सटीक मौसम पूर्वानुमान।',
        'seed_recommendations_desc': 'आपके विशिष्ट क्षेत्र और मिट्टी के प्रकार के लिए सर्वश्रेष्ठ बीज।',
        'fertilizer_guide_desc': 'आपकी फसलों के लिए इष्टतम उर्वरक सिफारिशें।',
        'market_prices_desc': 'रीयल-टाइम फसल कीमतें और बाजार रुझान।',
        
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
        
        // Toasts & Messages
        'welcome_toast': 'एग्रीफार्मर्स में आपका स्वागत है!',
        'account_created': 'खाता सफलतापूर्वक बनाया गया!',
        'logged_out': 'सफलतापूर्वक लॉग आउट किया गया',
        'pwa_installed': 'एग्रीफार्मर्स सफलतापूर्वक इंस्टॉल हुआ!',
        'install_suggestion': 'बेहतर अनुभव के लिए एग्रीफार्मर्स इंस्टॉल करें',
        'offline_mode': 'आप ऑफलाइन हैं। कुछ सुविधाएं सीमित हो सकती हैं।',
        'installing': 'एग्रीफार्मर्स इंस्टॉल हो रहा है...',
        'installation_cancelled': 'इंस्टालेशन रद्द किया गया। ब्राउज़र मेनू से प्रयास करें।',
        'loading': 'आपका खेती सहायक लोड हो रहा है...',
        
        // Errors
        'invalid_name': 'कृपया एक वैध नाम दर्ज करें',
        'invalid_mobile': 'कृपया एक वैध 10 अंकों का मोबाइल नंबर दर्ज करें',
        'select_state_error': 'कृपया अपना राज्य चुनें',
        'select_district_error': 'कृपया अपना जिला चुनें',
        'network_error': 'नेटवर्क त्रुटि। कृपया अपना कनेक्शन जांचें।',
        'location_error': 'आपका स्थान प्राप्त करने में असमर्थ। डिफ़ॉल्ट स्थान का उपयोग कर रहे हैं।',
        
        // PWA Installation Instructions
        'install_title': 'एग्रीफार्मर्स इंस्टॉल करें',
        'install_ios_title': 'iPhone/iPad पर एग्रीफार्मर्स इंस्टॉल करें',
        'install_android_title': 'Android पर एग्रीफार्मर्स इंस्टॉल करें',
        'install_desktop_title': 'डेस्कटॉप पर एग्रीफार्मर्स इंस्टॉल करें',
        'ios_step1': 'शेयर बटन टैप करें',
        'ios_step2': 'स्क्रॉल करें और "होम स्क्रीन में जोड़ें" टैप करें',
        'ios_step3': 'समाप्त करने के लिए "जोड़ें" टैप करें',
        'android_step1': 'Chrome में मेनू (⋮) टैप करें',
        'android_step2': '"ऐप इंस्टॉल करें" टैप करें',
        'android_step3': 'पुष्टि करने के लिए "इंस्टॉल" टैप करें',
        'desktop_step1': 'एड्रेस बार में इंस्टॉल बटन क्लिक करें',
        'desktop_step2': 'या ••• मेनू → "एग्रीफार्मर्स इंस्टॉल करें" क्लिक करें'
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
        
        // Weather Modal
        'humidity': 'ਨਮੀ',
        'wind': 'ਹਵਾ',
        'farming_advisory_label': 'ਖੇਤੀ ਸਲਾਹ:',
        'good_for_irrigation': 'ਸਿੰਚਾਈ ਅਤੇ ਖਾਦ ਪਾਉਣ ਦੀਆਂ ਗਤੀਵਿਧੀਆਂ ਲਈ ਚੰਗਾ ਮੌਸਮ।',
        
        // Seed Modal
        'recommended_for_kharif': 'ਖਰੀਫ ਸੀਜ਼ਨ ਲਈ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਗਈ',
        'rice': 'ਚਾਵਲ',
        'cotton': 'ਕਪਾਹ',
        'maize': 'ਮੱਕੀ',
        'high_yield': 'ਉੱਚ ਉਪਜ ਕਿਸਮ',
        'bt_cotton': 'ਬੀ.ਟੀ. ਕਪਾਹ ਕਿਸਮ',
        'hybrid': 'ਹਾਈਬ੍ਰਿਡ ਕਿਸਮ',
        'tip_seeds': 'ਸਲਾਹ: ਬਿਹਤਰ ਉਪਜ ਲਈ ਹਮੇਸ਼ਾ ਮਾਨਤਾ ਪ੍ਰਾਪਤ ਬੀਜ ਅਧਿਕ੍ਰਿਤ ਡੀਲਰਾਂ ਤੋਂ ਵਰਤੋਂ ਕਰੋ।',
        
        // Fertilizer Modal
        'npk_ratio': 'ਐਨਪੀਕੇ ਅਨੁਪਾਤ',
        'application_time': 'ਐਪਲੀਕੇਸ਼ਨ ਸਮਾਂ',
        'before_sowing': 'ਬਿਜਾਈ ਤੋਂ ਪਹਿਲਾਂ',
        'basal_dose': 'ਬੇਸਲ ਡੋਜ਼ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਗਈ',
        'important_soil': 'ਮਹੱਤਵਪੂਰਨ: ਖਾਦ ਦੀ ਐਪਲੀਕੇਸ਼ਨ ਤੋਂ ਪਹਿਲਾਂ ਮਿੱਟੀ ਟੈਸਟਿੰਗ ਦੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।',
        
        // Crop Calendar Modal
        'season': 'ਮੌਸਮ',
        'sowing': 'ਬਿਜਾਈ',
        'harvesting': 'ਕਟਾਈ',
        'crops': 'ਫਸਲਾਂ',
        'kharif': 'ਖਰੀਫ',
        'rabi': 'ਰਬੀ',
        'zaid': 'ਜ਼ੈਦ',
        'current_recommendation': 'ਮੌਜੂਦਾ ਸਿਫਾਰਸ਼',
        'perfect_time': 'ਹੁਣ ਚਾਵਲ ਅਤੇ ਕਪਾਹ ਵਰਗੀਆਂ ਖਰੀਫ ਫਸਲਾਂ ਲਈ ਸਹੀ ਸਮਾਂ ਹੈ।',
        
        // Market Prices Modal
        'grade_a': 'ਗ੍ਰੇਡ ਏ',
        'basmati': 'ਬਾਸਮਤੀ',
        'medium_staple': 'ਮੱਧਮ ਸਟੇਪਲ',
        'prices_updated': 'ਕੀਮਤਾਂ ਅਪਡੇਟ: ਅੱਜ, ਸਵੇਰੇ 10:00',
        
        // Soil Health Modal
        'soil_testing_steps': 'ਮਿੱਟੀ ਟੈਸਟਿੰਗ ਦੇ ਕਦਮ',
        'collect_samples': 'ਆਪਣੇ ਖੇਤ ਦੇ ਵੱਖ-ਵੱਖ ਸਥਾਨਾਂ ਤੋਂ ਮਿੱਟੀ ਦੇ ਨਮੂਨੇ ਇਕੱਤਰ ਕਰੋ',
        'mix_samples': 'ਇੱਕ ਸਾਫ਼ ਕੰਟੇਨਰ ਵਿੱਚ ਨਮੂਨਿਆਂ ਨੂੰ ਚੰਗੀ ਤਰ੍ਹਾਂ ਮਿਲਾਓ',
        'visit_kvk': 'ਨਜ਼ਦੀਕੀ ਕ੍ਰਿਸ਼ੀ ਵਿਗਿਆਨ ਕੇਂਦਰ (ਕੇ.ਵੀ.ਕੇ.) ਦਾ ਦੌਰਾ ਕਰੋ',
        'get_health_card': 'ਸਿਫਾਰਸ਼ਾਂ ਨਾਲ ਮਿੱਟੀ ਸਿਹਤ ਕਾਰਡ ਪ੍ਰਾਪਤ ਕਰੋ',
        'kvk_contact': 'ਕੇ.ਵੀ.ਕੇ. ਸੰਪਰਕ ਜਾਣਕਾਰੀ',
        'search_nearest': 'ਆਪਣੇ ਜ਼ਿਲ੍ਹੇ ਵਿੱਚ ਨਜ਼ਦੀਕੀ ਕ੍ਰਿਸ਼ੀ ਵਿਗਿਆਨ ਕੇਂਦਰ (ਕੇ.ਵੀ.ਕੇ.) ਖੋਜੋ।',
        
        // Services Modal
        'our_services': 'ਸਾਡੀਆਂ ਸੇਵਾਵਾਂ',
        'weather_forecast_desc': 'ਤੁਹਾਡੀਆਂ ਖੇਤੀ ਗਤੀਵਿਧੀਆਂ ਲਈ ਸਹੀ ਮੌਸਮ ਦੀ ਭਵਿੱਖਬਾਣੀ।',
        'seed_recommendations_desc': 'ਤੁਹਾਡੇ ਖਾਸ ਖੇਤਰ ਅਤੇ ਮਿੱਟੀ ਦੀ ਕਿਸਮ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਬੀਜ।',
        'fertilizer_guide_desc': 'ਤੁਹਾਡੀਆਂ ਫਸਲਾਂ ਲਈ ਸਰਵੋਤਮ ਖਾਦ ਸਿਫਾਰਸ਼ਾਂ।',
        'market_prices_desc': 'ਰੀਅਲ-ਟਾਈਮ ਫਸਲ ਦੀਆਂ ਕੀਮਤਾਂ ਅਤੇ ਬਾਜ਼ਾਰ ਦੇ ਰੁਝਾਨ।',
        
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
        
        // Toasts & Messages
        'welcome_toast': 'ਏਗਰੀ ਫਾਰਮਰਸ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ!',
        'account_created': 'ਖਾਤਾ ਸਫਲਤਾਪੂਰਵਕ ਬਣਾਇਆ ਗਿਆ!',
        'logged_out': 'ਸਫਲਤਾਪੂਰਵਕ ਲਾਗ ਆਉਟ ਕੀਤਾ ਗਿਆ',
        'pwa_installed': 'ਏਗਰੀ ਫਾਰਮਰਸ ਸਫਲਤਾਪੂਰਵਕ ਇੰਸਟਾਲ ਹੋ ਗਿਆ!',
        'install_suggestion': 'ਬਿਹਤਰ ਅਨੁਭਵ ਲਈ ਏਗਰੀ ਫਾਰਮਰਸ ਇੰਸਟਾਲ ਕਰੋ',
        'offline_mode': 'ਤੁਸੀਂ ਆਫਲਾਈਨ ਹੋ। ਕੁਝ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਸੀਮਿਤ ਹੋ ਸਕਦੀਆਂ ਹਨ।',
        'installing': 'ਏਗਰੀ ਫਾਰਮਰਸ ਇੰਸਟਾਲ ਹੋ ਰਿਹਾ ਹੈ...',
        'installation_cancelled': 'ਇੰਸਟਾਲੇਸ਼ਨ ਰੱਦ ਕੀਤੀ ਗਈ। ਬ੍ਰਾਊਜ਼ਰ ਮੀਨੂ ਤੋਂ ਕੋਸ਼ਿਸ਼ ਕਰੋ।',
        'loading': 'ਤੁਹਾਡਾ ਖੇਤੀ ਸਹਾਇਕ ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...',
        
        // Errors
        'invalid_name': 'ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਵੈਧ ਨਾਮ ਦਰਜ ਕਰੋ',
        'invalid_mobile': 'ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਵੈਧ 10 ਅੰਕਾਂ ਦਾ ਮੋਬਾਈਲ ਨੰਬਰ ਦਰਜ ਕਰੋ',
        'select_state_error': 'ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਰਾਜ ਚੁਣੋ',
        'select_district_error': 'ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਜ਼ਿਲ੍ਹਾ ਚੁਣੋ',
        'network_error': 'ਨੈੱਟਵਰਕ ਗਲਤੀ। ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਕਨੈਕਸ਼ਨ ਚੈੱਕ ਕਰੋ।',
        'location_error': 'ਤੁਹਾਡਾ ਟਿਕਾਣਾ ਪ੍ਰਾਪਤ ਕਰਨ ਵਿੱਚ ਅਸਮਰੱਥ। ਡਿਫਾਲਟ ਟਿਕਾਣੇ ਦੀ ਵਰਤੋਂ ਕਰ ਰਹੇ ਹਾਂ।',
        
        // PWA Installation Instructions
        'install_title': 'ਏਗਰੀ ਫਾਰਮਰਸ ਇੰਸਟਾਲ ਕਰੋ',
        'install_ios_title': 'iPhone/iPad \'ਤੇ ਏਗਰੀ ਫਾਰਮਰਸ ਇੰਸਟਾਲ ਕਰੋ',
        'install_android_title': 'Android \'ਤੇ ਏਗਰੀ ਫਾਰਮਰਸ ਇੰਸਟਾਲ ਕਰੋ',
        'install_desktop_title': 'ਡੈਸਕਟੌਪ \'ਤੇ ਏਗਰੀ ਫਾਰਮਰਸ ਇੰਸਟਾਲ ਕਰੋ',
        'ios_step1': 'ਸ਼ੇਅਰ ਬਟਨ ਟੈਪ ਕਰੋ',
        'ios_step2': 'ਸਕ੍ਰੋਲ ਕਰੋ ਅਤੇ "ਹੋਮ ਸਕ੍ਰੀਨ \'ਤੇ ਜੋੜੋ" ਟੈਪ ਕਰੋ',
        'ios_step3': 'ਖਤਮ ਕਰਨ ਲਈ "ਜੋੜੋ" ਟੈਪ ਕਰੋ',
        'android_step1': 'Chrome ਵਿੱਚ ਮੀਨੂ (⋮) ਟੈਪ ਕਰੋ',
        'android_step2': '"ਐਪ ਇੰਸਟਾਲ ਕਰੋ" ਟੈਪ ਕਰੋ',
        'android_step3': 'ਪੁਸ਼ਟੀ ਕਰਨ ਲਈ "ਇੰਸਟਾਲ" ਟੈਪ ਕਰੋ',
        'desktop_step1': 'ਐਡਰੈੱਸ ਬਾਰ ਵਿੱਚ ਇੰਸਟਾਲ ਬਟਨ ਕਲਿੱਕ ਕਰੋ',
        'desktop_step2': 'ਜਾਂ ••• ਮੀਨੂ → "ਏਗਰੀ ਫਾਰਮਰਸ ਇੰਸਟਾਲ ਕਰੋ" ਕਲਿੱਕ ਕਰੋ'
    }
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
    otpTimeLeft: 120,
    installPromptEvent: null,
    userLocation: null,
    weatherData: null,
    isAppInstalled: false
};

// ============================================
// LANGUAGE MANAGER
// ============================================
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('agrifarmers_lang') || 'en';
        appState.currentLanguage = this.currentLang;
        this.init();
    }

    init() {
        console.log('Initializing Language Manager...');
        this.createLanguageSelector();
        this.applyLanguage();
    }

    createLanguageSelector() {
        // Remove existing language selector if any
        const existingSelector = document.querySelector('.language-selector');
        if (existingSelector) existingSelector.remove();

        const navActions = document.getElementById('nav-actions');
        if (!navActions) return;

        // Create language selector
        const langSelector = document.createElement('div');
        langSelector.className = 'language-selector relative mr-2';
        langSelector.innerHTML = `
            <button class="flex items-center space-x-2 text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                <i class="fas fa-globe"></i>
                <span>${CONFIG.LANGUAGES[this.currentLang].name}</span>
                <i class="fas fa-chevron-down text-xs"></i>
            </button>
            <div class="language-dropdown absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 hidden z-50">
                <div class="py-1">
                    ${Object.entries(CONFIG.LANGUAGES).map(([code, lang]) => `
                        <button onclick="changeLanguage('${code}')" 
                                class="flex items-center w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-green-50 ${code === this.currentLang ? 'bg-green-50 text-green-700' : ''}">
                            <span class="text-lg mr-3">${lang.flag}</span>
                            <span>${lang.name}</span>
                            ${code === this.currentLang ? '<i class="fas fa-check ml-auto text-green-600"></i>' : ''}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;

        // Insert language selector at the beginning of nav actions
        navActions.insertBefore(langSelector, navActions.firstChild);

        // Add click event to toggle dropdown
        const button = langSelector.querySelector('button');
        const dropdown = langSelector.querySelector('.language-dropdown');
        
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            dropdown.classList.add('hidden');
        });
    }

    changeLanguage(langCode) {
        if (langCode === this.currentLang) return;
        
        this.currentLang = langCode;
        appState.currentLanguage = langCode;
        localStorage.setItem('agrifarmers_lang', langCode);
        
        // Save user language preference
        if (appState.activeUser) {
            appState.activeUser.language = langCode;
            localStorage.setItem('agrifarmers_user', JSON.stringify(appState.activeUser));
        }
        
        // Update UI direction if needed
        document.documentElement.dir = CONFIG.LANGUAGES[langCode].dir;
        document.documentElement.lang = langCode;
        
        this.applyLanguage();
        this.createLanguageSelector(); // Recreate selector with new language
        updateNavigation();
        
        console.log(`Language changed to: ${langCode}`);
    }

    applyLanguage() {
        const lang = this.currentLang;
        const strings = TRANSLATIONS[lang] || TRANSLATIONS['en'];
        
        // Update all translatable elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (strings[key]) {
                element.textContent = strings[key];
            }
        });
        
        // Update placeholders
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (strings[key]) {
                element.placeholder = strings[key];
            }
        });
        
        // Update titles
        document.querySelectorAll('[data-translate-title]').forEach(element => {
            const key = element.getAttribute('data-translate-title');
            if (strings[key]) {
                element.title = strings[key];
            }
        });
        
        // Update alt texts
        document.querySelectorAll('[data-translate-alt]').forEach(element => {
            const key = element.getAttribute('data-translate-alt');
            if (strings[key]) {
                element.alt = strings[key];
            }
        });
        
        // Update farming advisory on home page
        const farmingAdvisory = document.getElementById('farmingAdvisory');
        if (farmingAdvisory && strings['good_weather']) {
            farmingAdvisory.textContent = strings['good_weather'];
        }
    }

    t(key) {
        const lang = this.currentLang;
        const strings = TRANSLATIONS[lang] || TRANSLATIONS['en'];
        return strings[key] || key;
    }
}

// ============================================
// PWA INSTALLATION MANAGER
// ============================================
class PWAInstallManager {
    constructor() {
        this.deferredPrompt = null;
        this.isAppInstalled = false;
        this.init();
    }

    init() {
        console.log('Initializing PWA Install Manager...');
        
        // Check if app is already installed
        this.checkIfInstalled();
        
        // Listen for beforeinstallprompt event
        window.addEventListener('beforeinstallprompt', (e) => {
            console.log('✅ beforeinstallprompt event fired');
            e.preventDefault();
            this.deferredPrompt = e;
            appState.installPromptEvent = e;
            this.showInstallButton();
            
            // Auto-show toast after 3 seconds
            setTimeout(() => {
                if (this.deferredPrompt && !this.isAppInstalled) {
                    this.showToast(languageManager.t('install_suggestion'), 'info');
                }
            }, 3000);
        });
        
        // Listen for appinstalled event
        window.addEventListener('appinstalled', () => {
            console.log('🎉 App installed successfully');
            this.isAppInstalled = true;
            appState.isAppInstalled = true;
            this.hideInstallButton();
            localStorage.setItem('agrifarmers_pwa_installed', 'true');
            this.showToast(languageManager.t('pwa_installed'));
        });
        
        // Try to show install button on load for iOS
        setTimeout(() => {
            if (!this.isAppInstalled) {
                this.showInstallButton();
            }
        }, 2000);
    }
    
    checkIfInstalled() {
        // Check multiple ways to detect if PWA is installed
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
        const isInWebApp = window.navigator.standalone === true;
        const localStorageInstalled = localStorage.getItem('agrifarmers_pwa_installed') === 'true';
        
        this.isAppInstalled = isStandalone || isInWebApp || localStorageInstalled;
        appState.isAppInstalled = this.isAppInstalled;
        
        console.log('PWA Installation Check:', {
            isStandalone,
            isInWebApp,
            localStorageInstalled,
            isAppInstalled: this.isAppInstalled
        });
        
        return this.isAppInstalled;
    }
    
    showInstallButton() {
        if (this.isAppInstalled) {
            this.hideInstallButton();
            return;
        }
        
        let installBtn = document.getElementById('pwa-install-button');
        
        if (!installBtn) {
            installBtn = document.createElement('button');
            installBtn.id = 'pwa-install-button';
            installBtn.className = 'pwa-install-btn';
            installBtn.innerHTML = `
                <i class="fas fa-download"></i>
                <span>${languageManager.t('install_title')}</span>
            `;
            document.body.appendChild(installBtn);
            
            // Add click event
            installBtn.addEventListener('click', () => {
                this.installApp();
            });
        }
        
        installBtn.style.display = 'flex';
        console.log('PWA Install button shown');
    }
    
    hideInstallButton() {
        const installBtn = document.getElementById('pwa-install-button');
        if (installBtn) {
            installBtn.style.display = 'none';
        }
    }
    
    async installApp() {
        console.log('Install button clicked');
        
        if (this.deferredPrompt) {
            console.log('Using deferred prompt for installation');
            try {
                this.deferredPrompt.prompt();
                const { outcome } = await this.deferredPrompt.userChoice;
                
                console.log(`User choice: ${outcome}`);
                
                if (outcome === 'accepted') {
                    this.showToast(languageManager.t('installing'));
                    this.deferredPrompt = null;
                    appState.installPromptEvent = null;
                } else {
                    this.showToast(languageManager.t('installation_cancelled'));
                }
            } catch (error) {
                console.error('Installation error:', error);
                this.showManualInstructions();
            }
        } else {
            console.log('No deferred prompt, showing manual instructions');
            this.showManualInstructions();
        }
    }
    
    showManualInstructions() {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const isAndroid = /Android/.test(navigator.userAgent);
        
        let title = '';
        let instructions = '';
        
        if (isIOS) {
            title = languageManager.t('install_ios_title');
            instructions = `
                <ol class="space-y-3 list-decimal list-inside">
                    <li>${languageManager.t('ios_step1')} <i class="fas fa-share"></i></li>
                    <li>${languageManager.t('ios_step2')}</li>
                    <li>${languageManager.t('ios_step3')}</li>
                </ol>
            `;
        } else if (isAndroid) {
            title = languageManager.t('install_android_title');
            instructions = `
                <ol class="space-y-3 list-decimal list-inside">
                    <li>${languageManager.t('android_step1')} (⋮)</li>
                    <li>${languageManager.t('android_step2')}</li>
                    <li>${languageManager.t('android_step3')}</li>
                </ol>
            `;
        } else {
            title = languageManager.t('install_desktop_title');
            instructions = `
                <ol class="space-y-3 list-decimal list-inside">
                    <li>${languageManager.t('desktop_step1')}</li>
                    <li>${languageManager.t('desktop_step2')}</li>
                </ol>
            `;
        }
        
        this.showModal(title, instructions);
    }
    
    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'info' ? '#138808' : type === 'success' ? '#138808' : '#e74c3c'};
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
    
    showModal(title, content) {
        const modal = document.createElement('div');
        modal.className = 'pwa-instructions-modal fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
        modal.innerHTML = `
            <div class="bg-white rounded-xl shadow-2xl max-w-md w-full animate-fadeIn">
                <div class="flex items-center justify-between p-6 border-b">
                    <h3 class="text-xl font-bold text-gray-800">${title}</h3>
                    <button onclick="this.closest('.pwa-instructions-modal').remove()" class="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
                </div>
                <div class="p-6">
                    ${content}
                </div>
                <div class="px-6 py-4 bg-gray-50 rounded-b-xl">
                    <button onclick="this.closest('.pwa-instructions-modal').remove()" class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg">
                        ${languageManager.t('continue')}
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
}

// ============================================
// WEATHER MANAGER
// ============================================
class WeatherManager {
    constructor() {
        this.userLocation = null;
        this.weatherData = null;
    }

    async getUserLocation() {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                console.log('Geolocation not supported');
                this.setDefaultLocation();
                resolve(this.userLocation);
                return;
            }

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.userLocation = {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                        accuracy: position.coords.accuracy,
                        timestamp: position.timestamp
                    };
                    appState.userLocation = this.userLocation;
                    console.log('User location obtained:', this.userLocation);
                    resolve(this.userLocation);
                },
                (error) => {
                    console.error('Geolocation error:', error);
                    this.setDefaultLocation();
                    resolve(this.userLocation);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0
                }
            );
        });
    }

    setDefaultLocation() {
        // Default to Delhi, India
        this.userLocation = {
            lat: 28.6139,
            lon: 77.2090,
            city: 'Delhi',
            state: 'Delhi',
            country: 'India'
        };
        appState.userLocation = this.userLocation;
        console.log('Using default location:', this.userLocation);
        
        // Show error toast
        if (window.languageManager) {
            showToast(languageManager.t('location_error'), 'error');
        }
    }

    async getWeatherData() {
        try {
            // For demo purposes, return mock data
            // In production, you would use a real weather API:
            // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${CONFIG.WEATHER_API_KEY}&units=metric`);
            
            const mockWeatherData = {
                temp: Math.floor(Math.random() * 10) + 25, // 25-35°C
                condition: ['Sunny', 'Partly Cloudy', 'Cloudy', 'Light Rain'][Math.floor(Math.random() * 4)],
                humidity: Math.floor(Math.random() * 30) + 50, // 50-80%
                wind: Math.floor(Math.random() * 15) + 5, // 5-20 km/h
                city: this.userLocation?.city || 'Your Location',
                country: this.userLocation?.country || 'India'
            };

            this.weatherData = mockWeatherData;
            appState.weatherData = mockWeatherData;
            
            return mockWeatherData;
        } catch (error) {
            console.error('Weather API error:', error);
            return {
                temp: 28,
                condition: 'Partly Cloudy',
                humidity: 65,
                wind: 12,
                city: 'Your Location',
                country: 'India'
            };
        }
    }

    async updateWeatherCard() {
        try {
            if (!this.userLocation) {
                await this.getUserLocation();
            }
            
            const weatherData = await this.getWeatherData();
            
            // Update weather card on home page
            const weatherCard = document.querySelector('.feature-card:first-child');
            if (weatherCard) {
                const tempElement = weatherCard.querySelector('span.text-3xl');
                const conditionElement = weatherCard.querySelector('span.text-xs');
                
                if (tempElement) {
                    tempElement.textContent = `${weatherData.temp}°C`;
                }
                
                if (conditionElement) {
                    conditionElement.textContent = weatherData.condition;
                }
            }
            
            return weatherData;
        } catch (error) {
            console.error('Error updating weather card:', error);
            return null;
        }
    }

    async showWeatherModal() {
        try {
            if (!this.weatherData) {
                await this.updateWeatherCard();
            }

            const weatherData = this.weatherData || await this.getWeatherData();
            const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
            
            const modalContent = `
                <div class="space-y-4">
                    <div class="flex items-center justify-between">
                        <div>
                            <h4 class="font-bold text-lg">${weatherData.city}, ${weatherData.country}</h4>
                            <p class="text-gray-600">${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </div>
                        <div class="text-right">
                            <div class="text-4xl font-bold">${weatherData.temp}°C</div>
                            <p class="text-gray-600">${weatherData.condition}</p>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-gray-50 p-3 rounded-lg">
                            <p class="text-sm text-gray-600">${strings['humidity'] || 'Humidity'}</p>
                            <p class="font-bold">${weatherData.humidity}%</p>
                        </div>
                        <div class="bg-gray-50 p-3 rounded-lg">
                            <p class="text-sm text-gray-600">${strings['wind'] || 'Wind'}</p>
                            <p class="font-bold">${weatherData.wind} km/h</p>
                        </div>
                    </div>
                    
                    <div class="bg-green-50 p-4 rounded-lg">
                        <p class="font-medium text-green-800">${strings['farming_advisory_label'] || 'Farming Advisory:'}</p>
                        <p class="text-green-700">${strings['good_for_irrigation'] || 'Good weather for irrigation and fertilization activities.'}</p>
                    </div>
                </div>
            `;
            
            this.openModal(strings['weather_forecast'] || 'Weather Forecast', modalContent);
        } catch (error) {
            console.error('Error showing weather modal:', error);
        }
    }

    openModal(title, content) {
        const modal = document.createElement('div');
        modal.className = 'weather-modal fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4';
        modal.innerHTML = `
            <div class="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden animate-fadeIn">
                <div class="flex items-center justify-between p-6 border-b">
                    <h3 class="text-2xl font-bold text-gray-800">${title}</h3>
                    <button onclick="this.closest('.weather-modal').remove()" class="text-gray-500 hover:text-gray-700 text-3xl font-light">&times;</button>
                </div>
                <div class="overflow-y-auto p-6" style="max-height: calc(90vh - 80px);">
                    ${content}
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
}

// ============================================
// APPLICATION MANAGER
// ============================================
class AppManager {
    constructor() {
        this.pwaManager = null;
        this.languageManager = null;
        this.weatherManager = null;
        this.isInitialized = false;
    }

    async initialize() {
        console.log('Initializing AgriFarmers App...');
        
        // Set current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();
        
        // Set current date
        const currentDateElement = document.getElementById('currentDate');
        if (currentDateElement) {
            currentDateElement.textContent = new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
        }
        
        // Initialize managers
        this.languageManager = new LanguageManager();
        this.pwaManager = new PWAInstallManager();
        this.weatherManager = new WeatherManager();
        
        // Set global references
        window.pwaManager = this.pwaManager;
        window.languageManager = this.languageManager;
        window.weatherManager = this.weatherManager;
        
        // Check for existing user
        this.loadUserData();
        
        // Initialize UI components
        this.initializeUI();
        
        // Initialize network status
        this.initializeNetwork();
        
        // Initialize weather
        await this.initializeWeather();
        
        // Hide loading screen
        setTimeout(() => {
            const loadingScreen = document.getElementById('loadingScreen');
            if (loadingScreen) {
                loadingScreen.style.display = 'none';
            }
            
            // Show app container
            const appContainer = document.getElementById('app');
            if (appContainer) {
                appContainer.classList.remove('opacity-0');
            }
            
            // Show welcome message
            showToast(this.languageManager.t('welcome_toast'), 'info');
        }, 1500);
        
        this.isInitialized = true;
        appState.isInitialized = true;
        console.log('App initialized successfully');
    }

    loadUserData() {
        const user = localStorage.getItem('agrifarmers_user');
        if (user) {
            try {
                appState.activeUser = JSON.parse(user);
                console.log('User found:', appState.activeUser);
                
                // Update language from user preference
                if (appState.activeUser.language) {
                    this.languageManager.changeLanguage(appState.activeUser.language);
                }
                
                // Update home page with user data
                this.updateHomePage();
                
                // Show home page if user is logged in
                showPage('homePage');
            } catch (e) {
                console.error('Error parsing user data:', e);
                localStorage.removeItem('agrifarmers_user');
                showPage('welcomePage');
            }
        } else {
            showPage('welcomePage');
        }
    }

    updateHomePage() {
        if (appState.activeUser) {
            const welcomeText = document.getElementById('welcomeText');
            const farmerName = document.getElementById('farmerName');
            const farmerLocation = document.getElementById('farmerLocation');
            
            if (welcomeText) {
                welcomeText.textContent = `${this.languageManager.t('hello')}, ${appState.activeUser.name.split(' ')[0]}`;
            }
            
            if (farmerName) {
                farmerName.textContent = appState.activeUser.name;
            }
            
            if (farmerLocation) {
                farmerLocation.textContent = `${appState.activeUser.district}, ${appState.activeUser.state}`;
            }
        }
    }

    async initializeWeather() {
        try {
            await this.weatherManager.updateWeatherCard();
        } catch (error) {
            console.error('Weather initialization error:', error);
        }
    }

    initializeUI() {
        // Initialize state/district dropdown
        this.initializeStateDistrict();
        
        // Set up mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    initializeStateDistrict() {
        const districtData = {
            "Haryana": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
            "Punjab": ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Mohali", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sangrur", "Shaheed Bhagat Singh Nagar", "Tarn Taran"],
            "Uttar Pradesh": ["Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kanshiram Nagar", "Kaushambi", "Kushinagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Rae Bareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"]
        };

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

    initializeNetwork() {
        updateNetworkStatus();
        window.addEventListener('online', updateNetworkStatus);
        window.addEventListener('offline', updateNetworkStatus);
    }
}

// ============================================
// GLOBAL FUNCTIONS
// ============================================

// Page Navigation
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
    
    if (!navActions) return;
    
    // Clear existing content (except language selector)
    const languageSelector = navActions.querySelector('.language-selector');
    navActions.innerHTML = '';
    if (languageSelector) {
        navActions.appendChild(languageSelector);
    }
    
    // Create actions container
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'flex items-center space-x-2';
    
    if (appState.activeUser) {
        // User is logged in
        actionsDiv.innerHTML = `
            <span class="hidden md:inline text-gray-700">${appState.activeUser.name}</span>
            <button onclick="handleLogout()" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors">
                ${languageManager.t('logout')}
            </button>
        `;
    } else {
        // User is not logged in
        actionsDiv.innerHTML = `
            <button onclick="showPage('loginPage')" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                ${languageManager.t('login')}
            </button>
            <button onclick="showPage('signUpPage')" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                ${languageManager.t('get_started')}
            </button>
        `;
    }
    
    navActions.appendChild(actionsDiv);
    
    // Update mobile navigation
    if (mobileNavActions) {
        mobileNavActions.innerHTML = '';
        
        if (appState.activeUser) {
            mobileNavActions.innerHTML = `
                <div class="space-y-3">
                    <div class="px-3 py-2 text-gray-700">${appState.activeUser.name}</div>
                    <button onclick="handleLogout()" class="w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                        ${languageManager.t('logout')}
                    </button>
                </div>
            `;
        } else {
            mobileNavActions.innerHTML = `
                <div class="space-y-1">
                    <button onclick="showPage('loginPage')" class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
                        ${languageManager.t('login')}
                    </button>
                    <button onclick="showPage('signUpPage')" class="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-green-600 text-white hover:bg-green-700">
                        ${languageManager.t('get_started')}
                    </button>
                </div>
            `;
        }
    }
}

// Language Functions
function changeLanguage(langCode) {
    if (window.languageManager) {
        window.languageManager.changeLanguage(langCode);
    }
}

// User Management Functions
function handleSignUp() {
    const name = document.getElementById('signUpName').value.trim();
    const mobile = document.getElementById('signUpMobile').value.trim();
    const state = document.getElementById('signUpState').value;
    const district = document.getElementById('signUpDistrict').value;
    
    // Simple validation
    if (!name || name.length < 2) {
        showToast(languageManager.t('invalid_name'), 'error');
        return;
    }
    
    if (!/^[6-9]\d{9}$/.test(mobile)) {
        showToast(languageManager.t('invalid_mobile'), 'error');
        return;
    }
    
    if (!state) {
        showToast(languageManager.t('select_state_error'), 'error');
        return;
    }
    
    if (!district) {
        showToast(languageManager.t('select_district_error'), 'error');
        return;
    }
    
    // Create user object
    const user = {
        name: name,
        mobile: mobile,
        state: state,
        district: district,
        language: appState.currentLanguage,
        joined: new Date().toISOString(),
        lastLogin: new Date().toISOString()
    };
    
    // Save to localStorage
    localStorage.setItem('agrifarmers_user', JSON.stringify(user));
    appState.activeUser = user;
    
    // Update home page
    document.getElementById('farmerName').textContent = user.name;
    document.getElementById('farmerLocation').textContent = `${user.district}, ${user.state}`;
    document.getElementById('welcomeText').textContent = `${languageManager.t('hello')}, ${user.name.split(' ')[0]}`;
    
    // Show success message and go to home
    showToast(languageManager.t('account_created'), 'success');
    showPage('homePage');
    updateNavigation();
}

function handleLogin() {
    const mobile = document.getElementById('loginMobile').value.trim();
    
    if (!/^[6-9]\d{9}$/.test(mobile)) {
        showToast(languageManager.t('invalid_mobile'), 'error');
        return;
    }
    
    // Check if user exists
    const storedUser = localStorage.getItem('agrifarmers_user');
    
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.mobile === mobile) {
            // Existing user
            proceedToOTP(mobile, user);
        } else {
            // New user
            appState.tempUserData = { mobile: mobile };
            proceedToOTP(mobile);
        }
    } else {
        // New user
        appState.tempUserData = { mobile: mobile };
        proceedToOTP(mobile);
    }
}

function proceedToOTP(mobile, user = null) {
    // Generate OTP (for demo, use 123456)
    const otp = '123456';
    appState.lastGeneratedOTP = otp;
    appState.tempUserData = user || { mobile: mobile };
    
    // Update OTP page
    document.getElementById('otpPhoneNumber').textContent = `+91 ${mobile}`;
    document.getElementById('demoOTP').textContent = otp;
    
    // Generate OTP input fields
    const otpContainer = document.getElementById('otpContainer');
    otpContainer.innerHTML = '';
    
    for (let i = 0; i < 6; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
        input.className = 'otp-digit';
        input.dataset.index = i;
        
        input.addEventListener('input', function(e) {
            const value = e.target.value;
            if (value && /^\d$/.test(value)) {
                // Move to next input
                const nextInput = document.querySelector(`.otp-digit[data-index="${parseInt(i) + 1}"]`);
                if (nextInput) nextInput.focus();
            }
            
            // Remove error class
            this.classList.remove('error');
        });
        
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && !this.value) {
                // Move to previous input
                const prevInput = document.querySelector(`.otp-digit[data-index="${parseInt(i) - 1}"]`);
                if (prevInput) prevInput.focus();
            }
        });
        
        otpContainer.appendChild(input);
    }
    
    // Start OTP timer
    startOTPTimer();
    
    // Show OTP page
    showPage('otpPage');
    
    // Auto-focus first OTP input
    setTimeout(() => {
        const firstInput = document.querySelector('.otp-digit[data-index="0"]');
        if (firstInput) firstInput.focus();
    }, 100);
}

function verifyOTP() {
    // Collect OTP from inputs
    const otpInputs = document.querySelectorAll('.otp-digit');
    let enteredOTP = '';
    
    otpInputs.forEach(input => {
        enteredOTP += input.value;
    });
    
    // Validate OTP length
    if (enteredOTP.length !== 6) {
        showToast(languageManager.t('enter_6_digits'), 'error');
        otpInputs.forEach(input => {
            if (!input.value) {
                input.classList.add('error');
            }
        });
        return;
    }
    
    // Validate OTP (for demo, accept 123456)
    if (enteredOTP === appState.lastGeneratedOTP || enteredOTP === '123456') {
        // OTP verified
        showToast(languageManager.t('otp_verified'), 'success');
        
        // Stop timer
        if (appState.otpTimer) {
            clearInterval(appState.otpTimer);
            appState.otpTimer = null;
        }
        
        // Check if user exists or needs to sign up
        if (appState.tempUserData && appState.tempUserData.name) {
            // Existing user
            appState.activeUser = appState.tempUserData;
            appState.activeUser.lastLogin = new Date().toISOString();
            appState.activeUser.language = appState.currentLanguage;
            
            // Save to localStorage
            localStorage.setItem('agrifarmers_user', JSON.stringify(appState.activeUser));
            
            // Update home page
            document.getElementById('farmerName').textContent = appState.activeUser.name;
            document.getElementById('farmerLocation').textContent = `${appState.activeUser.district}, ${appState.activeUser.state}`;
            document.getElementById('welcomeText').textContent = `${languageManager.t('hello')}, ${appState.activeUser.name.split(' ')[0]}`;
            
            // Go to home page
            showPage('homePage');
        } else {
            // New user - go to sign up
            showToast('Please complete your registration', 'info');
            showPage('signUpPage');
            
            // Pre-fill mobile number
            if (appState.tempUserData?.mobile) {
                document.getElementById('signUpMobile').value = appState.tempUserData.mobile;
            }
        }
        
        // Clear temp data
        appState.tempUserData = null;
        appState.lastGeneratedOTP = null;
        
        // Update navigation
        updateNavigation();
    } else {
        // Invalid OTP
        showToast(languageManager.t('invalid_otp'), 'error');
        otpInputs.forEach(input => {
            input.classList.add('error');
        });
    }
}

function handleLogout() {
    appState.activeUser = null;
    appState.tempUserData = null;
    
    // Clear OTP timer if running
    if (appState.otpTimer) {
        clearInterval(appState.otpTimer);
        appState.otpTimer = null;
    }
    
    // Show logout message
    showToast(languageManager.t('logged_out'), 'info');
    
    // Go to welcome page
    showPage('welcomePage');
    updateNavigation();
}

// Weather Functions
function openWeatherModal() {
    if (window.weatherManager) {
        window.weatherManager.showWeatherModal();
    }
}

// Modal Functions
function openModal(title, content) {
    const modalContainer = document.getElementById('modal-container');
    if (!modalContainer) return;
    
    modalContainer.innerHTML = `
        <div class="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden animate-fadeIn">
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
    const modalContainer = document.getElementById('modal-container');
    if (modalContainer) {
        modalContainer.classList.add('hidden');
    }
}

// OTP Timer Functions
function startOTPTimer() {
    if (appState.otpTimer) {
        clearInterval(appState.otpTimer);
    }
    
    appState.otpTimeLeft = 120;
    const timerElement = document.getElementById('otpTimer');
    const resendButton = document.getElementById('resendOTP');
    
    // Disable resend button
    if (resendButton) {
        resendButton.disabled = true;
        resendButton.classList.add('opacity-50', 'cursor-not-allowed');
    }
    
    appState.otpTimer = setInterval(() => {
        appState.otpTimeLeft--;
        
        const minutes = Math.floor(appState.otpTimeLeft / 60);
        const seconds = appState.otpTimeLeft % 60;
        
        if (timerElement) {
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        
        if (appState.otpTimeLeft <= 0) {
            clearInterval(appState.otpTimer);
            appState.otpTimer = null;
            
            if (timerElement) {
                timerElement.textContent = '00:00';
            }
            
            if (resendButton) {
                resendButton.disabled = false;
                resendButton.classList.remove('opacity-50', 'cursor-not-allowed');
            }
        }
    }, 1000);
}

function resendOTP() {
    const resendButton = document.getElementById('resendOTP');
    
    if (resendButton && !resendButton.disabled) {
        // For demo, keep same OTP
        const otp = '123456';
        appState.lastGeneratedOTP = otp;
        
        // Update display
        document.getElementById('demoOTP').textContent = otp;
        
        // Clear OTP inputs
        document.querySelectorAll('.otp-digit').forEach(input => {
            input.value = '';
            input.classList.remove('error', 'success');
        });
        
        // Restart timer
        startOTPTimer();
        
        // Focus first input
        const firstInput = document.querySelector('.otp-digit[data-index="0"]');
        if (firstInput) firstInput.focus();
        
        showToast(languageManager.t('new_otp_sent'), 'info');
    }
}

// Toast function
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'info' ? '#138808' : type === 'success' ? '#138808' : '#e74c3c'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Network Status
function updateNetworkStatus() {
    const offlineIndicator = document.getElementById('offline-indicator');
    const networkStatus = document.getElementById('network-status');
    
    if (navigator.onLine) {
        if (offlineIndicator) offlineIndicator.classList.add('hidden');
        if (networkStatus) {
            networkStatus.innerHTML = '<i class="fas fa-wifi mr-1"></i> Online';
            networkStatus.className = 'text-sm px-3 py-1 bg-green-100 text-green-800 rounded-full';
        }
        const connectivityStatus = document.getElementById('connectivity-status');
        if (connectivityStatus) {
            connectivityStatus.textContent = 'Online';
        }
    } else {
        if (offlineIndicator) offlineIndicator.classList.remove('hidden');
        if (networkStatus) {
            networkStatus.innerHTML = '<i class="fas fa-wifi-slash mr-1"></i> Offline';
            networkStatus.className = 'text-sm px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full';
        }
        const connectivityStatus = document.getElementById('connectivity-status');
        if (connectivityStatus) {
            connectivityStatus.textContent = 'Offline - Limited functionality';
        }
        showToast(languageManager.t('offline_mode'), 'info');
    }
}

// Feature Modal Functions
function openSeedModal() {
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    openModal(strings['seed_recommendations'] || 'Seed Recommendations', `
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
                
                <div class="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                        <p class="font-bold">${strings['maize'] || 'Maize'}</p>
                        <p class="text-sm text-gray-600">${strings['hybrid'] || 'Hybrid variety'}</p>
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
    
    openModal(strings['fertilizer_guide'] || 'Fertilizer Guide', `
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
            
            <div class="bg-yellow-50 p-3 rounded-lg">
                <p class="text-sm text-yellow-800">
                    <i class="fas fa-exclamation-triangle mr-2"></i>
                    ${strings['important_soil'] || 'Important: Soil testing is recommended before fertilizer application.'}
                </p>
            </div>
        </div>
    `);
}

function openCropCalendarModal() {
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    openModal(strings['crop_calendar'] || 'Crop Calendar', `
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
                            <td class="p-2">Wheat, Barley, Mustard</td>
                        </tr>
                        <tr>
                            <td class="p-2 font-medium">${strings['zaid'] || 'Zaid'}</td>
                            <td class="p-2">Mar - Jun</td>
                            <td class="p-2">Jun - Jul</td>
                            <td class="p-2">Watermelon, Cucumber</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">${strings['current_recommendation'] || 'Current Recommendation'}</h5>
                <p class="text-gray-700">${strings['perfect_time'] || 'Now is the perfect time for Kharif crops like Rice and Cotton.'}</p>
            </div>
        </div>
    `);
}

function openMarketPricesModal() {
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    openModal(strings['market_prices_title'] || 'Market Prices', `
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
                
                <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                        <p class="font-bold">${strings['cotton'] || 'Cotton'}</p>
                        <p class="text-sm text-gray-600">${strings['medium_staple'] || 'Medium Staple'}</p>
                    </div>
                    <span class="text-lg font-bold text-green-600">₹6,500/q</span>
                </div>
            </div>
            
            <p class="text-sm text-gray-600 text-center">${strings['prices_updated'] || 'Prices updated: Today, 10:00 AM'}</p>
        </div>
    `);
}

function openSoilHealthModal() {
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    openModal(strings['soil_health'] || 'Soil Health', `
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
            
            <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">${strings['kvk_contact'] || 'KVK Contact Info'}</h4>
                <p class="text-gray-700">${strings['search_nearest'] || 'Search for nearest Krishi Vigyan Kendra (KVK) in your district.'}</p>
                <p class="text-sm text-gray-600 mt-2">Call: 1800-180-1551 (Toll-free)</p>
            </div>
        </div>
    `);
}

// Footer Modal Functions
function openServicesModal() {
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    openModal(strings['our_services'] || 'Our Services', `
        <div class="space-y-4">
            <div class="bg-green-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">${strings['weather_forecast'] || 'Weather Forecast'}</h5>
                <p class="text-gray-700">${strings['weather_forecast_desc'] || 'Accurate weather predictions for your farming activities.'}</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">${strings['seed_recommendations'] || 'Seed Recommendations'}</h5>
                <p class="text-gray-700">${strings['seed_recommendations_desc'] || 'Best seeds for your specific region and soil type.'}</p>
            </div>
            <div class="bg-yellow-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">${strings['fertilizer_guide'] || 'Fertilizer Guide'}</h5>
                <p class="text-gray-700">${strings['fertilizer_guide_desc'] || 'Optimal fertilizer recommendations for your crops.'}</p>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">${strings['market_prices_title'] || 'Market Prices'}</h5>
                <p class="text-gray-700">${strings['market_prices_desc'] || 'Real-time crop prices and market trends.'}</p>
            </div>
        </div>
    `);
}

function openContactModal() {
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    openModal(strings['contact'] || 'Contact', `
        <div class="space-y-4">
            <div class="bg-green-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">Email</h5>
                <p class="text-gray-700">help@agrifarmers.com</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">Phone</h5>
                <p class="text-gray-700">+91 1800-XXX-XXXX (Toll-free)</p>
            </div>
            <div class="bg-yellow-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">Address</h5>
                <p class="text-gray-700">Noida, Uttar Pradesh, India</p>
            </div>
        </div>
    `);
}

function openAboutModal() {
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    openModal(strings['about'] || 'About', `
        <div class="space-y-4">
            <div class="bg-green-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">Our Mission</h5>
                <p class="text-gray-700">To empower farmers with technology-driven solutions for better farming practices and increased productivity.</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">Our Vision</h5>
                <p class="text-gray-700">To become the most trusted digital companion for farmers across India.</p>
            </div>
        </div>
    `);
}

function openPrivacyModal() {
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    openModal(strings['privacy_policy'] || 'Privacy Policy', `
        <div class="space-y-4">
            <p class="text-gray-700">We respect your privacy. Your personal information is securely stored and never shared with third parties without your consent.</p>
            <div class="bg-gray-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">Data Collection</h5>
                <p class="text-sm text-gray-700">We collect only necessary information for providing farming recommendations.</p>
            </div>
        </div>
    `);
}

function openTermsModal() {
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    openModal(strings['terms_of_use'] || 'Terms of Use', `
        <div class="space-y-4">
            <p class="text-gray-700">By using AgriFarmers, you agree to our terms and conditions.</p>
            <div class="bg-gray-50 p-4 rounded-lg">
                <h5 class="font-bold mb-2">User Responsibilities</h5>
                <p class="text-sm text-gray-700">Users are responsible for verifying farming advice with local experts.</p>
            </div>
        </div>
    `);
}

function openSitemapModal() {
    const strings = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS['en'];
    
    openModal(strings['sitemap'] || 'Sitemap', `
        <div class="space-y-3">
            <a href="#" onclick="showPage('welcomePage'); closeModal(); return false;" class="block p-2 hover:bg-gray-100 rounded">${strings['home'] || 'Home'}</a>
            <a href="#" onclick="showPage('loginPage'); closeModal(); return false;" class="block p-2 hover:bg-gray-100 rounded">${strings['login'] || 'Login'}</a>
            <a href="#" onclick="showPage('signUpPage'); closeModal(); return false;" class="block p-2 hover:bg-gray-100 rounded">${strings['create_account'] || 'Create account'}</a>
            <a href="#" onclick="openWeatherModal(); closeModal(); return false;" class="block p-2 hover:bg-gray-100 rounded">${strings['weather_forecast'] || 'Weather'}</a>
            <a href="#" onclick="openSeedModal(); closeModal(); return false;" class="block p-2 hover:bg-gray-100 rounded">${strings['seed_recommendations'] || 'Seeds'}</a>
            <a href="#" onclick="openFertilizerModal(); closeModal(); return false;" class="block p-2 hover:bg-gray-100 rounded">${strings['fertilizer_guide'] || 'Fertilizer'}</a>
        </div>
    `);
}

// ============================================
// SERVICE WORKER REGISTRATION
// ============================================
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

// ============================================
// START THE APPLICATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, starting app...');
    
    // Register service worker first
    registerServiceWorker();
    
    // Initialize the app
    const appManager = new AppManager();
    window.appManager = appManager;
    appManager.initialize();
    
    // Expose install function globally
    window.installAgriFarmers = () => {
        if (window.pwaManager) {
            window.pwaManager.installApp();
        }
    };
    
    // Expose modal functions
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
});
