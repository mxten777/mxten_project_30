// 만송시스템 웹사이트 타입 정의

export interface Company {
  name: string;
  ceo: string;
  businessNumber: string;
  establishedDate: string;
  address: string;
  phone: string;
  email: string;
  industry: string;
  description: string;
  partnership: {
    partner: string;
    experience: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  category: 'design' | 'monitoring' | 'control' | 'education';
  price?: {
    min: number;
    max: number;
    currency: string;
  };
}

export interface Order {
  id: string;
  orderNumber: string;
  customer: {
    companyName: string;
    contactPerson: string;
    phone: string;
    email: string;
    address: string;
    businessNumber?: string;
  };
  project: {
    serviceType: string[];
    projectScale: 'small' | 'medium' | 'large';
    budget: {
      min: number;
      max: number;
    };
    expectedCompletion: string;
    description: string;
    requirements: string;
    attachments?: File[];
    siteVisit: boolean;
  };
  status: 'draft' | 'submitted' | 'reviewing' | 'processing' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
  notes?: OrderNote[];
}

export interface OrderNote {
  id: string;
  content: string;
  author: string;
  createdAt: string;
  type: 'info' | 'warning' | 'important';
}

export interface Testimonial {
  id: string;
  customerName: string;
  customerLogo?: string;
  rating: number;
  content: string;
  projectType: string;
  location: string;
  completedAt: string;
  featured: boolean;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  workingHours: string;
  socialMedia: {
    kakao?: string;
    blog?: string;
    youtube?: string;
    linkedin?: string;
  };
}

export interface Statistics {
  totalProjects: number;
  satisfactionRate: number;
  experienceYears: number;
  establishedYear: number;
}

export interface FormErrors {
  [key: string]: string | undefined;
}

// 폼 스텝 타입
export type OrderFormStep = 1 | 2 | 3 | 4;

// 주문 상태 색상 매핑
export const ORDER_STATUS_COLORS = {
  draft: 'gray',
  submitted: 'blue', 
  reviewing: 'yellow',
  processing: 'orange',
  completed: 'green',
  cancelled: 'red'
} as const;

// 서비스 카테고리 매핑
export const SERVICE_CATEGORIES = {
  design: '시스템 설계 및 구축',
  monitoring: '현장 모니터링 솔루션',
  control: '관제 시스템 구축', 
  education: '교육 및 유지보수'
} as const;

// 주문 폼 데이터 인터페이스
export interface OrderFormData {
  // 1단계: 기본 정보
  customer: {
    companyName: string;
    contactPerson: string;
    phone: string;
    email: string;
    address: string;
    businessNumber?: string;
  };
  
  // 2단계: 프로젝트 정보
  project: {
    serviceTypes: string[];
    projectScale: 'small' | 'medium' | 'large';
    budgetMin: number;
    budgetMax: number;
    expectedCompletion: string;
    description: string;
  };
  
  // 3단계: 상세 요구사항
  requirements: {
    detailedDescription: string;
    attachments: File[];
    siteVisitRequired: boolean;
    additionalNotes: string;
  };
  
  // 4단계: 약관 동의
  agreements: {
    privacyPolicy: boolean;
    termsOfService: boolean;
    marketingConsent: boolean;
  };
}

// 프로젝트 규모 옵션
export const PROJECT_SCALES = {
  small: { label: '소규모', description: '1-2개월, 1억원 미만', budget: [10000000, 100000000] },
  medium: { label: '중규모', description: '3-6개월, 1-5억원', budget: [100000000, 500000000] },
  large: { label: '대규모', description: '6개월 이상, 5억원 이상', budget: [500000000, 2000000000] }
} as const;

// 서비스 타입 옵션 
export const SERVICE_TYPE_OPTIONS = [
  { id: 'design', label: '시스템 설계 및 구축', description: '맞춤형 시스템 설계 및 구축' },
  { id: 'monitoring', label: '현장 모니터링 솔루션', description: '실시간 현장 모니터링 시스템' },
  { id: 'control', label: '관제 시스템 구축', description: '통합 관제실 및 운영 시스템' },
  { id: 'education', label: '교육 및 유지보수', description: '전문 교육 및 지속적 지원 서비스' }
] as const;