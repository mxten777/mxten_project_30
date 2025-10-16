// 만송시스템 회사 정보 및 데이터

import type { Company, Service, Testimonial, ContactInfo, Statistics } from '../types';

// 회사 기본 정보
export const COMPANY_INFO: Company = {
  name: '만송시스템',
  ceo: '임영무',
  businessNumber: '479-88-01974',
  establishedDate: '2021-03-02',
  address: '충청남도 아산시 배방읍 광장로',
  phone: '041-XXX-XXXX',
  email: 'info@mansongsystem.co.kr',
  industry: '컴퓨터 및 주변장치, 소프트웨어 도매업',
  description: '공장 자동화 현장 모니터링 및 관제 시스템 전문 기업',
  partnership: {
    partner: 'ABB코리아',
    experience: '30년+'
  }
};

// 연락처 정보
export const CONTACT_INFO: ContactInfo = {
  phone: '010-5264-8027',
  email: 'limyoungmu@hanmail.net',
  emailDetail: {
    primary: 'limyoungmu@hanmail.net',
    business: 'limyoungmoo@mansong.kr'
  },
  address: '(31471) 충남 천안시 서북구 광정로 210, B212호',
  workingHours: '평일 09:00-18:00',
  website: 'https://mansong.kr',
  socialMedia: {
    kakao: 'https://pf.kakao.com/mansong',
    blog: 'https://blog.naver.com/mansong',
    youtube: 'https://youtube.com/@mansong',
    linkedin: 'https://linkedin.com/company/mansong',
    facebook: '',
    twitter: '',
    instagram: ''
  }
};

// 통계 정보
export const BUSINESS_STATS: Statistics = {
  totalProjects: 50,
  satisfactionRate: 98,
  experienceYears: 30,
  establishedYear: 2021
};

// 제공 서비스
export const SERVICES: Service[] = [
  {
    id: 'system-design',
    title: '시스템 설계 및 구축',
    description: '고객 요구사항 분석부터 완벽한 시스템 구축까지 원스톱 서비스를 제공합니다.',
    icon: 'Settings',
    category: 'design',
    features: [
      '맞춤형 시스템 설계',
      '검증된 기술력 적용',
      '효율적인 프로젝트 관리',
      '품질 보증 서비스'
    ],
    price: {
      min: 5000000,
      max: 50000000,
      currency: 'KRW'
    }
  },
  {
    id: 'monitoring-solution',
    title: '현장 모니터링 솔루션',
    description: '실시간 현장 상황 모니터링 및 데이터 분석으로 생산성을 극대화합니다.',
    icon: 'Monitor',
    category: 'monitoring',
    features: [
      '24/7 실시간 모니터링',
      '즉시 알림 시스템',
      '데이터 분석 및 리포팅',
      '모바일 연동 지원'
    ],
    price: {
      min: 3000000,
      max: 30000000,
      currency: 'KRW'
    }
  },
  {
    id: 'control-system',
    title: '관제 시스템 구축',
    description: '통합 관제실 구축 및 운영 시스템 개발로 효율성을 극대화합니다.',
    icon: 'Command',
    category: 'control',
    features: [
      '중앙 집중 관리 시스템',
      '통합 대시보드 제공',
      'AI 기반 예측 분석',
      '확장 가능한 아키텍처'
    ],
    price: {
      min: 10000000,
      max: 100000000,
      currency: 'KRW'
    }
  },
  {
    id: 'education-maintenance',
    title: '교육 및 유지보수',
    description: '체계적인 전문 교육부터 지속적인 유지보수까지 완벽한 지원을 제공합니다.',
    icon: 'GraduationCap',
    category: 'education',
    features: [
      '체계적인 교육 프로그램',
      '신속한 기술 지원',
      '정기 점검 서비스',
      '24시간 긴급 지원'
    ],
    price: {
      min: 1000000,
      max: 10000000,
      currency: 'KRW'
    }
  }
];

// 고객 후기
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'samsung-cheonan',
    customerName: '㈜삼성전자 천안사업장',
    customerLogo: '/logos/samsung.png',
    rating: 5,
    content: '30년 경험이 느껴지는 완벽한 솔루션을 제공받았습니다. ABB 장비와의 호환성이 뛰어나고 안정적인 운영이 가능합니다.',
    projectType: '생산라인 모니터링 시스템',
    location: '천안',
    completedAt: '2024-08-15',
    featured: true
  },
  {
    id: 'hyundai-asan',
    customerName: '현대자동차 아산공장',
    customerLogo: '/logos/hyundai.png',
    rating: 5,
    content: 'ABB 장비와 완벽한 호환성을 보여주며, 시스템 안정성이 매우 뛰어납니다. 24시간 운영에도 문제없이 작동하고 있습니다.',
    projectType: '통합 관제 시스템',
    location: '아산',
    completedAt: '2024-06-20',
    featured: true
  },
  {
    id: 'lg-chungju',
    customerName: 'LG화학 충주공장',
    customerLogo: '/logos/lg.png',
    rating: 4.8,
    content: '신속한 대응과 전문적인 기술 지원에 매우 만족합니다. 특히 현장 교육이 체계적이고 이해하기 쉬웠습니다.',
    projectType: '현장 모니터링 솔루션',
    location: '충주',
    completedAt: '2024-05-10',
    featured: true
  },
  {
    id: 'posco-dangjin',
    customerName: '포스코 당진제철소',
    customerLogo: '/logos/posco.png',
    rating: 5,
    content: '24시간 안정적인 시스템 운영이 가능하며, 예방 정비 시스템이 특히 우수합니다. 생산 효율성이 크게 향상되었습니다.',
    projectType: '설비 관제 시스템',
    location: '당진',
    completedAt: '2024-04-25',
    featured: false
  },
  {
    id: 'doosan-changwon',
    customerName: '두산중공업 창원공장',
    customerLogo: '/logos/doosan.png',
    rating: 4.9,
    content: '맞춤형 솔루션과 체계적인 교육 프로그램이 인상적이었습니다. 사후 지원도 매우 신속하고 전문적입니다.',
    projectType: '생산관리 시스템',
    location: '창원',
    completedAt: '2024-03-18',
    featured: false
  }
];

// 주요 성과 지표
export const KEY_METRICS = {
  projects: {
    total: 50,
    ongoing: 8,
    completed: 42,
    growth: '+25%'
  },
  clients: {
    total: 35,
    satisfaction: 98,
    retention: 95,
    referral: 78
  },
  technology: {
    abbPartnership: '30년+',
    certifications: 12,
    patents: 3,
    innovations: 15
  }
};

// FAQ 데이터
export const FAQ_DATA = [
  {
    question: 'ABB 장비가 아닌 다른 브랜드도 지원 가능한가요?',
    answer: '네, ABB 외에도 시멘스, 슈나이더 일렉트릭 등 주요 브랜드의 장비를 모두 지원합니다. 30년간의 경험으로 다양한 브랜드와 호환되는 솔루션을 제공할 수 있습니다.'
  },
  {
    question: '프로젝트 기간은 보통 얼마나 소요되나요?',
    answer: '프로젝트 규모에 따라 다르지만, 소규모는 2-4주, 중규모는 2-3개월, 대규모는 6개월 이상 소요됩니다. 정확한 일정은 현장 조사 후 안내드립니다.'
  },
  {
    question: '유지보수 서비스는 어떻게 제공되나요?',
    answer: '24시간 긴급 지원, 정기 점검, 원격 모니터링 서비스를 제공합니다. 연간 계약을 통해 예방적 유지보수와 신속한 장애 대응이 가능합니다.'
  },
  {
    question: '견적은 어떻게 받을 수 있나요?',
    answer: '온라인 주문 접수 폼을 작성해 주시거나 직접 연락 주시면, 현장 조사 후 정확한 견적을 제공해 드립니다. 기본 상담은 무료입니다.'
  }
];

// 회사 연혁
export const COMPANY_HISTORY = [
  {
    year: '2021',
    title: '만송시스템 설립',
    description: 'ABB코리아 파트너십 체결 및 사업 시작'
  },
  {
    year: '2022',
    title: '첫 대형 프로젝트 수주',
    description: '삼성전자 천안사업장 모니터링 시스템 구축'
  },
  {
    year: '2023',
    title: '기술력 인정',
    description: '정부 인증 획득 및 특허 출원'
  },
  {
    year: '2024',
    title: '사업 확장',
    description: '50+ 프로젝트 완료 및 강소기업 선정'
  }
];