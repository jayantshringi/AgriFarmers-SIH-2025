/*
 * Agrifarmers Application Script - Clean Working Version
 * Version: 3.0.0
 */
// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
    WEATHER_API_KEY: '44a55de0f2e0674cb9160f50459d51d4',
    WEATHER_API_URL: 'https://api.openweathermap.org/data/2.5',
    APP_NAME: 'Agrifarmers',
    VERSION: '3.0.0'
};

// ============================================
// SIMPLE TRANSLATIONS
// ============================================
const translations = {
    en: {
        welcome_title: "Welcome to Agrifarmers",
        welcome_subtitle: "Your trusted companion for modern farming",
        get_started_button: "Get Started",
        login_button: "Login",
        login_title: "Welcome Back",
        mobile_number_label: "Mobile Number",
        mobile_placeholder: "Enter 10-digit mobile number",
        signup_title: "Join Agrifarmers",
        full_name_label: "Full Name",
        name_placeholder: "Your Name",
        state_label: "State",
        select_state: "Select State",
        district_label: "District",
        select_district: "Select District",
        signup_button: "Create Account",
        have_account_text: "Already have an account?",
        login_link: "Sign in",
        welcome_text: "Hello",
        weather_info: "Weather Forecast",
        weather_subtitle: "Today's weather & forecast",
        seed_advice: "Seed Recommendations",
        fertilizer_guide: "Fertilizer Guide",
        crop_calendar: "Crop Calendar",
        market_prices: "Market Prices",
        soil_health: "Soil Health",
        current_weather: "Current Weather",
        feels_like: "Feels like",
        humidity: "Humidity",
        wind: "Wind",
        pressure: "Pressure",
        visibility: "Visibility",
        sunrise: "Sunrise",
        sunset: "Sunset",
        weather_loading: "Loading weather data...",
        farming_advisory: "Farming Advisory",
        high_temp_alert: "High temperature alert! Water crops in early morning or late evening.",
        low_temp_alert: "Low temperature! Protect sensitive crops with covers.",
        good_weather_alert: "Good weather for farming activities.",
        logout_button: "Logout",
        otp_verification: "OTP Verification",
        otp_sent: "OTP sent to",
        enter_otp: "Enter 6-digit OTP",
        verify_otp: "Verify OTP",
        resend_otp: "Resend OTP"
    },
    hi: {
        welcome_title: "अग्रीफार्मर्स में आपका स्वागत है",
        welcome_subtitle: "आधुनिक खेती के लिए आपका विश्वसनीय साथी",
        get_started_button: "शुरू करें",
        login_button: "लॉग इन",
        login_title: "वापसी पर स्वागत है",
        mobile_number_label: "मोबाइल नंबर",
        mobile_placeholder: "10 अंकों का मोबाइल नंबर दर्ज करें",
        signup_title: "अग्रीफार्मर्स से जुड़ें",
        full_name_label: "पूरा नाम",
        name_placeholder: "आपका नाम",
        state_label: "राज्य",
        select_state: "राज्य चुनें",
        district_label: "जिला",
        select_district: "जिला चुनें",
        signup_button: "खाता बनाएं",
        have_account_text: "पहले से खाता है?",
        login_link: "साइन इन",
        welcome_text: "नमस्ते",
        weather_info: "मौसम पूर्वानुमान",
        weather_subtitle: "आज का मौसम और पूर्वानुमान",
        seed_advice: "बीज सिफारिशें",
        fertilizer_guide: "उर्वरक गाइड",
        crop_calendar: "फसल कैलेंडर",
        market_prices: "बाजार मूल्य",
        soil_health: "मृदा स्वास्थ्य",
        current_weather: "वर्तमान मौसम",
        feels_like: "अनुभव",
        humidity: "आर्द्रता",
        wind: "हवा",
        pressure: "दबाव",
        visibility: "दृश्यता",
        sunrise: "सूर्योदय",
        sunset: "सूर्यास्त",
        weather_loading: "मौसम डेटा लोड हो रहा है...",
        farming_advisory: "कृषि परामर्श",
        high_temp_alert: "उच्च तापमान चेतावनी! फसलों को सुबह जल्दी या शाम को पानी दें।",
        low_temp_alert: "कम तापमान! संवेदनशील फसलों को कवर से बचाएं।",
        good_weather_alert: "खेती की गतिविधियों के लिए अच्छा मौसम।",
        logout_button: "लॉग आउट",
        otp_verification: "ओटीपी सत्यापन",
        otp_sent: "ओटीपी भेजा गया",
        enter_otp: "6-अंकीय ओटीपी दर्ज करें",
        verify_otp: "ओटीपी सत्यापित करें",
        resend_otp: "ओटीपी पुनः भेजें"
    }
};

// ============================================
// APPLICATION STATE
// ============================================
const appState = {
    activeUser: null,
    currentLanguage: 'en',
    currentPage: 'welcomePage',
    generatedOTP: null
};

// ============================================
// DISTRICT DATA (Load First)
// ============================================
const districtData = {
    "Haryana": ["Ambala", "Bhiwani", "Faridabad", "Gurugram", "Hisar", "Karnal", "Panchkula", "Panipat", "Rohtak", "Sonipat", "Yamunanagar"],
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
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'} mr-3"></i>
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
                    <p class="text-sm text-gray-600 mb-1">Demo OTP (In real app, sent via SMS)</p>
                    <div class="text-4xl font-bold text-blue-600 tracking-wider">${otp}</div>
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
        showToast('Please enter a valid 6-digit OTP', 'error');
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
                showToast('Login successful!', 'success');
                
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
    
    showToast('Invalid OTP. Please try again.', 'error');
}

function resendOTP(mobile) {
    showOTPModal(mobile);
    showToast('New OTP sent!', 'success');
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
        showToast('Please enter a valid name', 'error');
        return;
    }
    
    if (!isValidMobile(mobile)) {
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
    
    showToast('Account created successfully!', 'success');
};

window.handleLogin = function() {
    const mobile = document.getElementById('loginMobile')?.value.trim() || '';
    
    if (!isValidMobile(mobile)) {
        showToast('Please enter a valid 10-digit mobile number', 'error');
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
    
    showToast('No account found. Please sign up first.', 'error');
};

window.handleLogout = function() {
    appState.activeUser = null;
    showPage('welcomePage');
    showToast('Logged out successfully', 'info');
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
                    <p class="text-gray-600">${new Date().toLocaleDateString()}</p>
                    ${!isLiveData ? `
                        <div class="inline-block mt-2 px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                            <i class="fas fa-wifi-slash mr-1"></i>
                            <span>Offline Data</span>
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
                                    Connect to internet for real-time updates
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
                <h4 class="text-xl font-bold mb-2">Unable to fetch weather data</h4>
                <p class="text-gray-600 mb-4">Please check your internet connection and try again.</p>
                <div class="flex flex-col gap-2">
                    <button onclick="showWeatherModal()" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                        Try Again
                    </button>
                    <button onclick="closeModal()" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400">
                        Close
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
                <h4 class="text-lg font-bold mb-2">Recommended for ${currentSeason} Season</h4>
                <div class="flex flex-wrap gap-2">
                    ${seasons[currentSeason].map(crop => `
                        <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">${crop}</span>
                    `).join('')}
                </div>
            </div>
            
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p class="text-sm text-yellow-800">
                    <i class="fas fa-lightbulb mr-2"></i>
                    <strong>Tip:</strong> Always use certified seeds from authorized dealers for better yield.
                </p>
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
                <h5 class="font-bold mb-2">Current Recommendation</h5>
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
    
    openModal(translations[appState.currentLanguage].market_prices, content);
}

function showSoilHealthModal() {
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
            
            <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">KVK Contact Info</h4>
                <p class="text-sm text-gray-700">Search for nearest Krishi Vigyan Kendra (KVK) in your district. Most KVKs offer free soil testing services for farmers.</p>
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

// Language switching
window.changeLanguage = function(lang) {
    if (translations[lang]) {
        appState.currentLanguage = lang;
        updateNavigation();
        
        // Update all visible text
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        
        showToast(`Language changed to ${lang === 'en' ? 'English' : 'Hindi'}`, 'success');
    }
};
