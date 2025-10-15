// PremiumDesignSystem.tsx - 프리미엄 디자인 시스템
import React from 'react';
import { motion } from 'framer-motion';

// 프리미엄 색상 팔레트 확장
export const premiumColors = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe', 
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9', // 메인 브랜드 컬러
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  accent: {
    gold: '#d4af37',
    platinum: '#e5e4e2',
    emerald: '#10b981',
    ruby: '#dc2626',
  },
  semantic: {
    success: '#10b981',
    warning: '#f59e0b', 
    error: '#ef4444',
    info: '#3b82f6',
  }
};

// 프리미엄 그라데이션 정의
export const premiumGradients = {
  primary: 'bg-gradient-to-r from-primary-600 via-primary-500 to-blue-600',
  hero: 'bg-gradient-to-br from-gray-50 via-white to-primary-50',
  card: 'bg-gradient-to-br from-white via-gray-50 to-white',
  glass: 'bg-gradient-to-br from-white/80 via-white/70 to-white/60',
  accent: 'bg-gradient-to-r from-primary-500 via-blue-500 to-indigo-600',
  luxury: 'bg-gradient-to-br from-gray-900 via-gray-800 to-black',
};

// 프리미엄 그림자 정의
export const premiumShadows = {
  subtle: 'shadow-sm',
  soft: 'shadow-lg shadow-gray-200/50',
  medium: 'shadow-xl shadow-gray-300/30',
  strong: 'shadow-2xl shadow-gray-400/25',
  colored: 'shadow-xl shadow-primary-500/25',
  glow: 'shadow-2xl shadow-primary-500/30',
  float: 'shadow-2xl shadow-black/10',
};

// 프리미엄 타이포그래피
export const premiumTypography = {
  display: {
    xl: 'text-6xl lg:text-7xl font-black tracking-tight',
    lg: 'text-5xl lg:text-6xl font-bold tracking-tight',
    md: 'text-4xl lg:text-5xl font-bold tracking-tight',
    sm: 'text-3xl lg:text-4xl font-bold tracking-tight',
  },
  headline: {
    xl: 'text-3xl lg:text-4xl font-bold',
    lg: 'text-2xl lg:text-3xl font-bold', 
    md: 'text-xl lg:text-2xl font-bold',
    sm: 'text-lg lg:text-xl font-bold',
  },
  body: {
    xl: 'text-xl leading-relaxed',
    lg: 'text-lg leading-relaxed',
    md: 'text-base leading-relaxed',
    sm: 'text-sm leading-relaxed',
  },
  caption: {
    lg: 'text-sm text-gray-600',
    md: 'text-xs text-gray-600',
    sm: 'text-xs text-gray-500',
  }
};

// 프리미엄 애니메이션 프리셋
export const premiumAnimations = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  fadeInScale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  float: {
    animate: { 
      y: [-10, 10, -10],
      transition: { 
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  pulse: {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
};

// 프리미엄 버튼 컴포넌트
interface PremiumButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'luxury';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const PremiumButton: React.FC<PremiumButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  loading = false,
  icon,
  fullWidth = false
}) => {
  const baseClasses = `
    inline-flex items-center justify-center font-semibold rounded-xl
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-4 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    transform active:scale-95
    ${fullWidth ? 'w-full' : ''}
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-primary-600 to-primary-700
      hover:from-primary-700 hover:to-primary-800
      text-white shadow-lg hover:shadow-xl
      focus:ring-primary-500/50
      hover:scale-105 hover:-translate-y-0.5
    `,
    secondary: `
      bg-gradient-to-r from-gray-100 to-gray-200
      hover:from-gray-200 hover:to-gray-300
      text-gray-900 shadow-md hover:shadow-lg
      focus:ring-gray-500/50
    `,
    outline: `
      border-2 border-primary-600 bg-transparent
      hover:bg-primary-600 text-primary-600 hover:text-white
      shadow-sm hover:shadow-md
      focus:ring-primary-500/50
    `,
    ghost: `
      bg-transparent hover:bg-primary-50
      text-primary-600 hover:text-primary-700
      focus:ring-primary-500/50
    `,
    luxury: `
      bg-gradient-to-r from-gray-900 to-black
      hover:from-black hover:to-gray-900
      text-white shadow-xl hover:shadow-2xl
      focus:ring-gray-500/50
      hover:scale-105
    `
  };

  const sizes = {
    sm: 'px-4 py-2.5 text-sm min-h-[40px]',
    md: 'px-6 py-3 text-base min-h-[44px]',
    lg: 'px-8 py-4 text-lg min-h-[48px]',
    xl: 'px-10 py-5 text-xl min-h-[56px]'
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {loading && (
        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      )}
      {icon && !loading && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  );
};

// 프리미엄 카드 컴포넌트
interface PremiumCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'elevated' | 'luxury' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  hover?: boolean;
}

export const PremiumCard: React.FC<PremiumCardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  hover = true
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300 ease-out';

  const variants = {
    default: 'bg-white border border-gray-200 shadow-sm',
    glass: 'bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg',
    elevated: 'bg-white shadow-xl shadow-gray-200/50',
    luxury: 'bg-gradient-to-br from-gray-900 to-black text-white shadow-2xl',
    gradient: 'bg-gradient-to-br from-white via-gray-50 to-white shadow-lg'
  };

  const paddings = {
    sm: 'p-4',
    md: 'p-6', 
    lg: 'p-8',
    xl: 'p-10'
  };

  const hoverEffect = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';

  return (
    <motion.div
      className={`${baseClasses} ${variants[variant]} ${paddings[padding]} ${hoverEffect} ${className}`}
      whileHover={hover ? { y: -4, scale: 1.02 } : {}}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

// 프리미엄 배지 컴포넌트
interface PremiumBadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'neutral' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const PremiumBadge: React.FC<PremiumBadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full';

  const variants = {
    primary: 'bg-primary-100 text-primary-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800', 
    error: 'bg-red-100 text-red-800',
    neutral: 'bg-gray-100 text-gray-800',
    gold: 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-900'
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};

// 프리미엄 입력 필드 컴포넌트
interface PremiumInputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export const PremiumInput: React.FC<PremiumInputProps> = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  icon,
  className = ''
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full ${icon ? 'pl-10' : 'pl-4'} pr-4 py-3
            border border-gray-300 rounded-xl
            bg-white/80 backdrop-blur-sm
            focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500
            transition-all duration-200
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}
          `}
        />
      </div>
      {error && (
        <p className="text-sm text-red-600 flex items-center">
          <span className="w-4 h-4 mr-1">⚠</span>
          {error}
        </p>
      )}
    </div>
  );
};

// 프리미엄 로딩 컴포넌트
export const PremiumLoader: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ 
  size = 'md' 
}) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10', 
    lg: 'w-16 h-16'
  };

  return (
    <div className="flex items-center justify-center">
      <div className={`${sizes[size]} relative`}>
        <div className="absolute inset-0 rounded-full border-4 border-primary-200"></div>
        <div className="absolute inset-0 rounded-full border-4 border-primary-600 border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
};

// 프리미엄 구분선 컴포넌트
export const PremiumDivider: React.FC<{ 
  variant?: 'line' | 'gradient' | 'dotted';
  className?: string; 
}> = ({ 
  variant = 'line',
  className = '' 
}) => {
  const variants = {
    line: 'border-t border-gray-200',
    gradient: 'h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent',
    dotted: 'border-t border-dotted border-gray-300'
  };

  return <div className={`${variants[variant]} ${className}`} />;
};