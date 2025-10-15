// ResponsiveUtils.tsx - 반응형 유틸리티 훅과 컴포넌트들
import React, { useState, useEffect, createContext, useContext } from 'react';

// 브레이크포인트 정의
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const;

type Breakpoint = keyof typeof breakpoints;

// 화면 크기 컨텍스트
interface ScreenSizeContextType {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  breakpoint: Breakpoint;
}

const ScreenSizeContext = createContext<ScreenSizeContextType | undefined>(undefined);

// 화면 크기 훅
export const useScreenSize = () => {
  const context = useContext(ScreenSizeContext);
  if (!context) {
    throw new Error('useScreenSize must be used within ScreenSizeProvider');
  }
  return context;
};

// 미디어 쿼리 훅
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
};

// 반응형 브레이크포인트 훅
export const useBreakpoint = (breakpoint: Breakpoint): boolean => {
  return useMediaQuery(`(min-width: ${breakpoints[breakpoint]}px)`);
};

// 화면 크기 제공자
export const ScreenSizeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 현재 브레이크포인트 계산
  const getCurrentBreakpoint = (): Breakpoint => {
    if (screenSize.width >= breakpoints['2xl']) return '2xl';
    if (screenSize.width >= breakpoints.xl) return 'xl';
    if (screenSize.width >= breakpoints.lg) return 'lg';
    if (screenSize.width >= breakpoints.md) return 'md';
    return 'sm';
  };

  const contextValue: ScreenSizeContextType = {
    width: screenSize.width,
    height: screenSize.height,
    isMobile: screenSize.width < breakpoints.md,
    isTablet: screenSize.width >= breakpoints.md && screenSize.width < breakpoints.lg,
    isDesktop: screenSize.width >= breakpoints.lg,
    breakpoint: getCurrentBreakpoint()
  };

  return (
    <ScreenSizeContext.Provider value={contextValue}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

// 반응형 텍스트 컴포넌트
interface ResponsiveTextProps {
  children: React.ReactNode;
  className?: string;
  mobile?: string;
  tablet?: string;
  desktop?: string;
}

export const ResponsiveText: React.FC<ResponsiveTextProps> = ({
  children,
  className = '',
  mobile = 'text-sm',
  tablet = 'text-base',
  desktop = 'text-lg'
}) => {
  const { isMobile, isTablet } = useScreenSize();
  
  const sizeClass = isMobile ? mobile : isTablet ? tablet : desktop;
  
  return (
    <span className={`${sizeClass} ${className}`}>
      {children}
    </span>
  );
};

// 반응형 그리드 컴포넌트
interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  cols?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
}

export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  className = '',
  cols = { mobile: 1, tablet: 2, desktop: 3 },
  gap = { mobile: 'gap-4', tablet: 'gap-6', desktop: 'gap-8' }
}) => {
  const { isMobile, isTablet } = useScreenSize();
  
  const colClass = isMobile 
    ? `grid-cols-${cols.mobile}` 
    : isTablet 
    ? `grid-cols-${cols.tablet}` 
    : `grid-cols-${cols.desktop}`;
  
  const gapClass = isMobile 
    ? gap.mobile 
    : isTablet 
    ? gap.tablet 
    : gap.desktop;
  
  return (
    <div className={`grid ${colClass} ${gapClass} ${className}`}>
      {children}
    </div>
  );
};

// 반응형 스페이싱 컴포넌트
interface ResponsiveSpacingProps {
  className?: string;
  mobile?: string;
  tablet?: string;
  desktop?: string;
}

export const ResponsiveSpacing: React.FC<ResponsiveSpacingProps> = ({
  className = '',
  mobile = 'p-4',
  tablet = 'p-6',
  desktop = 'p-8'
}) => {
  const { isMobile, isTablet } = useScreenSize();
  
  const spacingClass = isMobile ? mobile : isTablet ? tablet : desktop;
  
  return <div className={`${spacingClass} ${className}`} />;
};

// 터치 친화적 버튼 컴포넌트
interface TouchFriendlyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export const TouchFriendlyButton: React.FC<TouchFriendlyButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false
}) => {
  const { isMobile } = useScreenSize();
  
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500'
  };
  
  const sizeClasses = {
    sm: isMobile ? 'px-4 py-3 text-sm min-h-[44px]' : 'px-3 py-2 text-sm',
    md: isMobile ? 'px-6 py-4 text-base min-h-[48px]' : 'px-4 py-2 text-base',
    lg: isMobile ? 'px-8 py-5 text-lg min-h-[52px]' : 'px-6 py-3 text-lg'
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabledClasses}
        ${isMobile ? 'active:scale-95' : 'hover:scale-105'}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

// 접근성 개선 훅
export const useAccessibility = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  
  useEffect(() => {
    // 고대비 모드 감지
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(highContrastQuery.matches);
    
    const handleHighContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };
    
    highContrastQuery.addEventListener('change', handleHighContrastChange);
    
    // 모션 감소 설정 감지
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(reducedMotionQuery.matches);
    
    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    
    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);
    
    return () => {
      highContrastQuery.removeEventListener('change', handleHighContrastChange);
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
    };
  }, []);
  
  return { isHighContrast, isReducedMotion };
};

// 키보드 네비게이션 훅
export const useKeyboardNavigation = (itemCount: number, initialIndex = 0) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          setCurrentIndex(prev => (prev > 0 ? prev - 1 : itemCount - 1));
          break;
        case 'ArrowDown':
          e.preventDefault();
          setCurrentIndex(prev => (prev < itemCount - 1 ? prev + 1 : 0));
          break;
        case 'Home':
          e.preventDefault();
          setCurrentIndex(0);
          break;
        case 'End':
          e.preventDefault();
          setCurrentIndex(itemCount - 1);
          break;
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [itemCount]);
  
  return { currentIndex, setCurrentIndex };
};

// 포커스 트랩 훅 (모달 등에서 사용)
export const useFocusTrap = (isActive: boolean) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!isActive) return;
    
    const container = containerRef.current;
    if (!container) return;
    
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };
    
    // 첫 번째 요소에 포커스
    firstElement?.focus();
    
    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [isActive]);
  
  return containerRef;
};