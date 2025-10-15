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