import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  Building,
  Upload,
  Key,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
  QrCode
} from 'lucide-react';

// ===== Part 1: Types and Constants =====
enum UserRole {
  GUEST = 'Guest',
  MEMBER = 'Member'
}

enum SubmitStatus {
  IDLE = 'idle',
  SUCCESS = 'success',
  ERROR = 'error'
}

enum FormType {
  LOGIN = 'login',
  SIGNUP = 'signup'
}

interface LoginFormData {
  email: string;
  password: string;
}

interface SignupFormData {
  name: string;
  email: string;
  phone: string;
  college: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
  secretCode: string;
  collegeId: File | null;
}

interface PasswordVisibility {
  login: boolean;
  signup: boolean;
  signupConfirm: boolean;
}

interface ValidationError {
  field?: string;
  message: string;
}

const FILE_SIZE_LIMIT = 5 * 1024 * 1024; // 5MB
const PASSWORD_MIN_LENGTH = 8;
const ERROR_DISPLAY_TIMEOUT = 8000;
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf', 'image/webp'];
const ALLOWED_FILE_EXTENSIONS = ['jpeg', 'jpg', 'png', 'pdf', 'webp'];

// ===== Part 2: Sub-Components =====
interface PasswordInputProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  onTogglePassword: () => void;
  required?: boolean;
  minLength?: number;
  ariaLabel: string;
  className?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  name,
  placeholder,
  value,
  onChange,
  showPassword,
  onTogglePassword,
  required = false,
  minLength,
  ariaLabel,
  className = ''
}) => (
  <div className={`flex items-center bg-[#1A0A2E]/50 border border-[#E0D9EB]/20 rounded-lg p-3 focus-within:border-[#A020F0] transition-colors duration-200 ${className}`}>
    <Key size={20} className="text-[#E0D9EB]/50 mr-3" />
    <input
      type={showPassword ? 'text' : 'password'}
      name={name}
      placeholder={placeholder}
      className="w-full bg-transparent text-[#E0D9EB] placeholder-[#E0D9EB]/50 outline-none"
      value={value}
      onChange={onChange}
      required={required}
      minLength={minLength}
      aria-label={ariaLabel}
    />
    <button 
      type="button" 
      onClick={onTogglePassword}
      className="text-[#E0D9EB]/50 hover:text-[#A020F0] transition-colors duration-200"
      aria-label={showPassword ? `Hide ${ariaLabel.toLowerCase()}` : `Show ${ariaLabel.toLowerCase()}`}
    >
      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
    </button>
  </div>
);

interface StatusMessageProps {
  status: SubmitStatus;
  message: string;
  formType: FormType;
}

const StatusMessage: React.FC<StatusMessageProps> = ({ 
  status, 
  message, 
  formType 
}) => {
  if (status === SubmitStatus.IDLE) return null;

  const isSuccess = status === SubmitStatus.SUCCESS;
  const defaultSuccessMessage = formType === FormType.LOGIN 
    ? 'Login successful!' 
    : 'Registration successful!';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm mb-6 ${
        isSuccess
          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
          : 'bg-red-500/20 text-red-400 border border-red-500/30'
      }`}
    >
      {isSuccess ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
      {isSuccess ? defaultSuccessMessage : (message || 'Please check your information and try again.')}
    </motion.div>
  );
};

interface LoadingButtonProps {
  isLoading: boolean;
  loadingText: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading,
  loadingText,
  children,
  type = 'submit',
  disabled = false,
  className = '',
  onClick
}) => (
  <button 
    type={type}
    disabled={isLoading || disabled}
    className={`w-full py-3 bg-gradient-to-r from-[#A020F0] to-[#C7A2ED] text-white rounded-lg font-semibold hover:from-[#C7A2ED] hover:to-[#A020F0] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${className}`}
    onClick={onClick}
  >
    {isLoading ? (
      <div className="flex items-center justify-center gap-2">
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        {loadingText}
      </div>
    ) : (
      children
    )}
  </button>
);

// ===== Part 3: Main Component =====
const Login: React.FC = () => {
  // State management
  const [activeTab, setActiveTab] = useState<FormType>(FormType.LOGIN);
  const [loginData, setLoginData] = useState<LoginFormData>({ 
    email: '', 
    password: '' 
  });
  const [signupData, setSignupData] = useState<SignupFormData>({
    name: '',
    email: '',
    phone: '',
    college: '',
    password: '',
    confirmPassword: '',
    role: UserRole.GUEST,
    secretCode: '',
    collegeId: null
  });
  
  const [passwordVisibility, setPasswordVisibility] = useState<PasswordVisibility>({
    login: false,
    signup: false,
    signupConfirm: false
  });
  
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(SubmitStatus.IDLE);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Refs
  const errorTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\+?[\d\s\-()]{10,}$/;
    return phoneRegex.test(phone);
  };

  const validatePassword = (password: string): ValidationError | null => {
    if (password.length < PASSWORD_MIN_LENGTH) {
      return { message: `Password must be at least ${PASSWORD_MIN_LENGTH} characters long` };
    }
    if (!/[A-Z]/.test(password)) {
      return { message: 'Password must contain at least one uppercase letter' };
    }
    if (!/[0-9]/.test(password)) {
      return { message: 'Password must contain at least one number' };
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
      return { message: 'Password must contain at least one special character' };
    }
    return null;
  };

  const validateFile = (file: File): ValidationError | null => {
    if (file.size > FILE_SIZE_LIMIT) {
      return { message: 'File size must be less than 5MB' };
    }

    const fileExt = file.name.split('.').pop()?.toLowerCase();
    if (!ALLOWED_FILE_TYPES.includes(file.type) && 
        (!fileExt || !ALLOWED_FILE_EXTENSIONS.includes(fileExt))) {
      return { message: 'Only JPG, PNG, WEBP, and PDF files are allowed' };
    }

    return null;
  };

  // ... [Rest of the component code from Part 3 and Part 4] ...

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-[#1A0A2E] via-[#1A0A2E] to-[#A020F0]">
      {/* ... [JSX from Part 4] ... */}
    </div>
  );
};

export default Login;