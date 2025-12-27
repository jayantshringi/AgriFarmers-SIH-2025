/*
 * AgriFarmers Application Script
 * Version: 1.1.0 - Fixed PWA Installation
 */

// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
    APP_NAME: 'AgriFarmers',
    VERSION: '1.1.0',
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
    otpTimeLeft: 120,
    installPromptEvent: null
};

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
        });
        
        // Listen for appinstalled event
        window.addEventListener('appinstalled', () => {
            console.log('🎉 App installed successfully');
            this.isAppInstalled = true;
            this.hideInstallButton();
            localStorage.setItem('agrifarmers_pwa_installed', 'true');
            this.showToast('AgriFarmers installed successfully!');
        });
        
        // Try to show install button on load
        setTimeout(() => {
            if (!this.isAppInstalled) {
                this.showInstallButton();
            }
        }, 3000);
    }
    
    checkIfInstalled() {
        // Check multiple ways to detect if PWA is installed
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
        const isInWebApp = window.navigator.standalone === true;
        const localStorageInstalled = localStorage.getItem('agrifarmers_pwa_installed') === 'true';
        
        this.isAppInstalled = isStandalone || isInWebApp || localStorageInstalled;
        
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
                <span>Install AgriFarmers</span>
            `;
            document.body.appendChild(installBtn);
            
            // Add CSS styles
            this.addInstallButtonStyles();
            
            // Add click event
            installBtn.addEventListener('click', () => {
                this.installApp();
            });
        }
        
        installBtn.style.display = 'flex';
        console.log('PWA Install button shown');
        
        // Show toast notification about installation
        setTimeout(() => {
            this.showToast('Install AgriFarmers for better experience', 'info');
        }, 2000);
    }
    
    addInstallButtonStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .pwa-install-btn {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: linear-gradient(135deg, #138808, #0d6006);
                color: white;
                border: none;
                border-radius: 50px;
                padding: 12px 24px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 10px;
                box-shadow: 0 4px 20px rgba(19, 136, 8, 0.3);
                z-index: 9999;
                transition: all 0.3s ease;
                animation: float 3s ease-in-out infinite;
            }
            
            .pwa-install-btn:hover {
                background: linear-gradient(135deg, #0d6006, #084c04);
                transform: translateY(-2px);
                box-shadow: 0 6px 25px rgba(19, 136, 8, 0.4);
            }
            
            .pwa-install-btn i {
                font-size: 18px;
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-5px); }
            }
            
            @media (max-width: 768px) {
                .pwa-install-btn {
                    bottom: 80px;
                    right: 15px;
                    padding: 10px 20px;
                    font-size: 14px;
                }
            }
        `;
        document.head.appendChild(style);
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
                    this.showToast('Installing AgriFarmers...');
                    this.deferredPrompt = null;
                    appState.installPromptEvent = null;
                } else {
                    this.showToast('Installation cancelled. Try from browser menu.');
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
        
        let instructions = '';
        
        if (isIOS) {
            instructions = `
                <div class="pwa-instructions">
                    <h3>Install AgriFarmers on iPhone/iPad</h3>
                    <ol>
                        <li>Tap the <strong>Share</strong> button <i class="fas fa-share"></i></li>
                        <li>Scroll and tap <strong>"Add to Home Screen"</strong></li>
                        <li>Tap <strong>"Add"</strong> to finish</li>
                    </ol>
                </div>
            `;
        } else if (isAndroid) {
            instructions = `
                <div class="pwa-instructions">
                    <h3>Install AgriFarmers on Android</h3>
                    <ol>
                        <li>Tap <strong>Menu</strong> (⋮) in Chrome</li>
                        <li>Tap <strong>"Install app"</strong></li>
                        <li>Tap <strong>"Install"</strong> to confirm</li>
                    </ol>
                </div>
            `;
        } else {
            instructions = `
                <div class="pwa-instructions">
                    <h3>Install AgriFarmers on Desktop</h3>
                    <ol>
                        <li>Click <strong>Install</strong> button in address bar</li>
                        <li>Or click <strong>•••</strong> menu → "Install AgriFarmers"</li>
                    </ol>
                </div>
            `;
        }
        
        // Create modal for instructions
        this.showModal('Install AgriFarmers', instructions);
    }
    
    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'info' ? '#138808' : '#e74c3c'};
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
        
        // Add animation styles
        if (!document.querySelector('#toast-animations')) {
            const style = document.createElement('style');
            style.id = 'toast-animations';
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    showModal(title, content) {
        const modal = document.createElement('div');
        modal.className = 'pwa-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${title}</h3>
                    <button class="close-modal">&times;</button>
                </div>
                <div class="modal-body">${content}</div>
            </div>
        `;
        
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10001;
        `;
        
        modal.querySelector('.close-modal').onclick = () => modal.remove();
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };
        
        document.body.appendChild(modal);
        
        // Add modal styles
        const style = document.createElement('style');
        style.textContent = `
            .modal-content {
                background: white;
                border-radius: 12px;
                width: 90%;
                max-width: 400px;
                overflow: hidden;
                animation: modalAppear 0.3s ease;
            }
            .modal-header {
                background: #138808;
                color: white;
                padding: 15px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .modal-header h3 {
                margin: 0;
                font-size: 18px;
            }
            .close-modal {
                background: none;
                border: none;
                color: white;
                font-size: 24px;
                cursor: pointer;
                line-height: 1;
            }
            .modal-body {
                padding: 20px;
            }
            .pwa-instructions ol {
                padding-left: 20px;
            }
            .pwa-instructions li {
                margin-bottom: 10px;
                line-height: 1.5;
            }
            @keyframes modalAppear {
                from { transform: scale(0.9); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
}

// ============================================
// MAIN INITIALIZATION
// ============================================
function initializeApp() {
    console.log('Initializing AgriFarmers App...');
    
    // Initialize PWA Install Manager
    const pwaManager = new PWAInstallManager();
    window.pwaManager = pwaManager;
    
    // Check for existing user
    const user = localStorage.getItem('agrifarmers_user');
    if (user) {
        appState.activeUser = JSON.parse(user);
        console.log('User found:', appState.activeUser);
    }
    
    // Hide loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
        
        // Show welcome message
        pwaManager.showToast('Welcome to AgriFarmers!', 'info');
    }, 1500);
    
    appState.isInitialized = true;
    console.log('App initialized successfully');
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
    initializeApp();
    
    // Expose install function globally
    window.installAgriFarmers = () => {
        if (window.pwaManager) {
            window.pwaManager.installApp();
        }
    };
});
