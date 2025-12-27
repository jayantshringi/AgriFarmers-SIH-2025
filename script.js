/* Enhanced OTP Input Styling */
.otp-digit {
    width: 3rem;
    height: 3.5rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    border: 2px solid #d1d5db;
    border-radius: 0.75rem;
    background-color: #f9fafb;
    transition: all 0.2s ease;
    caret-color: transparent;
}

.otp-digit:focus {
    outline: none;
    border-color: #10b981;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
    background-color: white;
}

.otp-digit.filled {
    border-color: #10b981;
    background-color: #f0fdf4;
    color: #065f46;
}

.otp-digit.error {
    border-color: #ef4444;
    background-color: #fef2f2;
    color: #7f1d1d;
    animation: shake 0.5s;
}

.otp-digit.success {
    border-color: #10b981;
    background-color: #d1fae5;
    color: #065f46;
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}

/* PWA Install Button */
#pwa-install-button {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: 50;
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}
