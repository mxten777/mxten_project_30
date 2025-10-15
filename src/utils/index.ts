// 유틸리티 함수들

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Tailwind 클래스 병합 유틸리티
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 날짜 포맷팅 함수
export const formatDate = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);
};

export const formatDateTime = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(dateObj);
};

// 전화번호 포맷팅
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  } else if (cleaned.length === 10) {
    return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  }
  
  return phone;
};

// 사업자등록번호 포맷팅
export const formatBusinessNumber = (number: string): string => {
  const cleaned = number.replace(/\D/g, '');
  
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3');
  }
  
  return number;
};

// 가격 포맷팅
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(price);
};

// 숫자 포맷팅 (천 단위 구분)
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('ko-KR').format(num);
};

// 주문 번호 생성
export const generateOrderNumber = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  
  // 로컬 스토리지에서 오늘의 주문 카운트 가져오기
  const today = `${year}${month}${day}`;
  const storageKey = `order_count_${today}`;
  const currentCount = parseInt(localStorage.getItem(storageKey) || '0', 10);
  const nextCount = currentCount + 1;
  
  // 다음 카운트 저장
  localStorage.setItem(storageKey, nextCount.toString());
  
  return `MS-${today}-${String(nextCount).padStart(3, '0')}`;
};

// 이메일 유효성 검증
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// 전화번호 유효성 검증
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^(010|011|016|017|018|019)-?\d{3,4}-?\d{4}$/;
  return phoneRegex.test(phone.replace(/\D/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
};

// 사업자등록번호 유효성 검증
export const validateBusinessNumber = (number: string): boolean => {
  const cleaned = number.replace(/\D/g, '');
  
  if (cleaned.length !== 10) return false;
  
  // 사업자등록번호 체크섬 검증
  const checkSum = [1, 3, 7, 1, 3, 7, 1, 3, 5];
  let sum = 0;
  
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleaned[i]) * checkSum[i];
  }
  
  sum += parseInt(cleaned[8]) * 5 / 10;
  const remainder = sum % 10;
  const checkDigit = remainder === 0 ? 0 : 10 - remainder;
  
  return checkDigit === parseInt(cleaned[9]);
};

// 파일 크기 포맷팅
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// 로컬 스토리지 헬퍼
export const storage = {
  get: <T>(key: string, defaultValue?: T): T | null => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue || null;
    } catch {
      return defaultValue || null;
    }
  },
  
  set: <T>(key: string, value: T): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  },
  
  remove: (key: string): void => {
    localStorage.removeItem(key);
  },
  
  clear: (): void => {
    localStorage.clear();
  }
};

// 디바운스 함수
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// 스크롤 유틸리티
export const scrollToElement = (elementId: string, offset: number = 80): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// URL 파라미터 헬퍼
export const getUrlParams = (): Record<string, string> => {
  const params = new URLSearchParams(window.location.search);
  const result: Record<string, string> = {};
  
  for (const [key, value] of params) {
    result[key] = value;
  }
  
  return result;
};

// 텍스트 트렁케이트
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

// 주문 폼 관련 유틸리티
export const orderFormUtils = {
  // 단계별 데이터 저장
  saveStepData: <T>(step: number, data: T): void => {
    storage.set(`order_form_step_${step}`, data);
  },

  // 단계별 데이터 불러오기
  loadStepData: <T>(step: number): T | null => {
    return storage.get<T>(`order_form_step_${step}`);
  },

  // 전체 폼 데이터 저장
  saveFormData: (data: any): void => {
    storage.set('order_form_complete', data);
  },

  // 전체 폼 데이터 불러오기
  loadFormData: (): any => {
    return storage.get('order_form_complete');
  },

  // 임시 저장된 데이터 삭제
  clearTempData: (): void => {
    for (let i = 1; i <= 4; i++) {
      storage.remove(`order_form_step_${i}`);
    }
  },

  // 파일 크기 검증
  validateFileSize: (file: File, maxSizeMB: number = 10): boolean => {
    return file.size <= maxSizeMB * 1024 * 1024;
  },

  // 파일 타입 검증
  validateFileType: (file: File, allowedTypes: string[] = ['pdf', 'doc', 'docx', 'jpg', 'png', 'zip']): boolean => {
    const extension = file.name.split('.').pop()?.toLowerCase();
    return extension ? allowedTypes.includes(extension) : false;
  },

  // 예산 범위 포맷팅
  formatBudgetRange: (min: number, max: number): string => {
    return `${formatPrice(min)} ~ ${formatPrice(max)}`;
  }
};