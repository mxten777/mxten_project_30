// utils.ts - 유틸리티 함수들
import { CONTACT_INFO } from './data';

// 날짜 포맷팅
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// 부드러운 스크롤
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// 전화번호 포맷팅
export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
};

// 이메일 유효성 검사
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// 연락처 링크 생성
export const getContactLinks = () => ({
  phone: `tel:${CONTACT_INFO.phone}`,
  email: `mailto:${CONTACT_INFO.emailDetail.primary}`,
  businessEmail: `mailto:${CONTACT_INFO.emailDetail.business}`
});

// 이메일 유효성 검사 (별칭)
export const validateEmail = isValidEmail;

// 전화번호 유효성 검사
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^010-\d{4}-\d{4}$/;
  return phoneRegex.test(phone);
};

// 사업자번호 유효성 검사
export const validateBusinessNumber = (businessNumber: string): boolean => {
  const regex = /^\d{3}-\d{2}-\d{5}$/;
  return regex.test(businessNumber);
};

// 주문번호 생성
export const generateOrderNumber = (): string => {
  const date = new Date();
  const dateStr = date.getFullYear().toString() + 
                  (date.getMonth() + 1).toString().padStart(2, '0') + 
                  date.getDate().toString().padStart(2, '0');
  const randomStr = Math.random().toString(36).substr(2, 6).toUpperCase();
  return `MSS-${dateStr}-${randomStr}`;
};

// 가격 포맷팅
export const formatPrice = (price: number | string): string => {
  if (typeof price === 'string') return price;
  return `${formatNumber(price)}원`;
};

// 파일 크기 포맷팅
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// 주문 폼 유틸리티
export const orderFormUtils = {
  validateStep: (step: number, data: any): boolean => {
    switch (step) {
      case 1:
        return !!(data.companyName && data.contactName && data.phone && data.email);
      case 2:
        return !!(data.serviceType && data.projectScale);
      case 3:
        return !!(data.budget && data.timeline);
      default:
        return false;
    }
  },
  
  calculateEstimate: (data: any): number => {
    let basePrice = 1000000; // 기본 100만원
    
    if (data.serviceType === '시스템 통합') basePrice = 5000000;
    else if (data.serviceType === '데이터 솔루션') basePrice = 3000000;
    else if (data.serviceType === '기술 컨설팅') basePrice = 2000000;
    
    if (data.projectScale === 'large') basePrice *= 2;
    else if (data.projectScale === 'medium') basePrice *= 1.5;
    
    return basePrice;
  },
  
  saveStepData: (step: number, data: any): void => {
    const key = `orderForm_step${step}`;
    window.localStorage.setItem(key, JSON.stringify(data));
  },
  
  loadFormData: (): any => {
    const allData = {};
    for (let i = 1; i <= 3; i++) {
      const key = `orderForm_step${i}`;
      const stepData = window.localStorage.getItem(key);
      if (stepData) {
        Object.assign(allData, JSON.parse(stepData));
      }
    }
    return allData;
  },
  
  validateFileSize: (file: File, maxSizeMB: number = 10): boolean => {
    const maxSize = maxSizeMB * 1024 * 1024; // MB to bytes
    return file.size <= maxSize;
  },
  
  validateFileType: (file: File, allowedTypes: string[] = ['image/*', 'application/pdf', '.doc', '.docx']): boolean => {
    return allowedTypes.some(type => {
      if (type.includes('*')) {
        return file.type.startsWith(type.replace('*', ''));
      }
      return file.name.toLowerCase().endsWith(type);
    });
  },
  
  saveFormData: (data: any): void => {
    window.localStorage.setItem('completedOrderForm', JSON.stringify(data));
  },
  
  clearTempData: (): void => {
    for (let i = 1; i <= 3; i++) {
      window.localStorage.removeItem(`orderForm_step${i}`);
    }
  }
};

// 텍스트 길이 제한
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// 숫자에 콤마 추가
export const formatNumber = (num: number): string => {
  return num.toLocaleString('ko-KR');
};

// 디바이스 타입 감지
export const getDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

// 스크롤 위치 확인
export const getScrollProgress = (): number => {
  const scrolled = window.scrollY;
  const maxHeight = document.body.scrollHeight - window.innerHeight;
  return (scrolled / maxHeight) * 100;
};

// 로컬 스토리지 유틸리티
export const localStorage = {
  set: (key: string, value: any): void => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('localStorage set error:', error);
    }
  },
  
  get: (key: string): any => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('localStorage get error:', error);
      return null;
    }
  },
  
  remove: (key: string): void => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error('localStorage remove error:', error);
    }
  }
};

// 세션 스토리지 유틸리티
export const sessionStorage = {
  set: (key: string, value: any): void => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('sessionStorage set error:', error);
    }
  },
  
  get: (key: string): any => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('sessionStorage get error:', error);
      return null;
    }
  },
  
  remove: (key: string): void => {
    try {
      window.sessionStorage.removeItem(key);
    } catch (error) {
      console.error('sessionStorage remove error:', error);
    }
  }
};

// 랜덤 ID 생성
export const generateId = (prefix: string = 'id'): string => {
  return `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
};

// 딜레이 함수
export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// 화면 크기별 반응형 값 반환
export const getResponsiveValue = <T>(values: {
  mobile: T;
  tablet?: T;
  desktop: T;
}): T => {
  const deviceType = getDeviceType();
  
  switch (deviceType) {
    case 'mobile':
      return values.mobile;
    case 'tablet':
      return values.tablet || values.desktop;
    case 'desktop':
      return values.desktop;
    default:
      return values.desktop;
  }
};