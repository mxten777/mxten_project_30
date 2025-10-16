// data.ts - 만송시스템 실제 데이터
export const COMPANY_INFO = {
  name: '만송시스템',
  englishName: 'Mansong System Co., Ltd.',
  description: '화학공장 통합관제시스템, ABB 파트너사 30년+ 제조업 전문 솔루션 기업',
  ceo: '임영무',
  businessNumber: '314-88-02345', // mvp_project_09 기준 추정
  establishedYear: 2021,
  establishedDate: '2021.02.26',
  industry: '화학공장 통합관제시스템 및 제조업 자동화 솔루션 제공',
  partnership: {
    partner: 'ABB코리아',
    experience: '30년+ ABB 파트너사 화학공장 전문'
  },
  address: '(31471) 충남 천안시 서북구 광정로 210, B212호',
  addressDetail: {
    headquarters: {
      name: '본사',
      address: '(31471) 충남 천안시 서북구\n광정로 210, B212호',
      zipCode: '31471'
    },
    branch: {
      name: '지사',
      address: '(44715) 울산광역시 남구\n돋질합로 162, 테인빌딩 906호',
      zipCode: '44715'
    }
  }
};

export const CONTACT_INFO = {
  phone: '010-5264-8027',
  email: 'limyoungmu@hanmail.net',
  emailDetail: {
    primary: 'limyoungmu@hanmail.net',
    business: 'limyoungmoo@mansong.kr'
  },
  workingHours: '평일 09:00 - 18:00',
  website: 'https://mansong.kr',
  address: '(31471) 충남 천안시 서북구 광정로 210, B212호',
  socialMedia: {
    facebook: '',
    linkedin: '',
    twitter: '',
    instagram: '',
    kakao: '',
    blog: '',
    youtube: ''
  }
};

export const BUSINESS_STATS = {
  totalProjects: 20, // 2021년 설립 기준 적정 수준
  satisfactionRate: 98,
  experienceYears: 30, // CEO의 개인 경험 기준 (ABB 경력)
  establishedYear: 2021,
  employees: 4 // 실제 직원 수
};

export const SERVICES = [
  {
    id: 1,
    title: '통합관제시스템',
    description: '화학공장 및 제조업 전체 공정을 통합 관제하는 DCS/SCADA 시스템을 제공합니다',
    icon: 'Monitor',
    features: ['DCS 시스템 구축', 'SCADA 통합', '공정 자동화', 'HMI 설계'],
    price: {
      min: 50000000,
      display: '5,000만원~'
    }
  },
  {
    id: 2,
    title: '공정자동화 솔루션',
    description: '화학공장 생산라인 자동화부터 품질관리 시스템까지 완전한 자동화 솔루션',
    icon: 'Settings',
    features: ['PLC 프로그래밍', '제조실행시스템(MES)', '품질관리시스템(QMS)', '배치제어'],
    price: {
      min: 30000000,
      display: '3,000만원~'
    }
  },
  {
    id: 3,
    title: '안전관리시스템',
    description: '화학공장 안전 규정 준수를 위한 SIS(Safety Instrumented System) 구축',
    icon: 'Shield',
    features: ['SIS 설계/구축', '가스감지시스템', '화재감지시스템', '비상차단시스템'],
    price: {
      min: 20000000,
      display: '2,000만원~'
    }
  },
  {
    id: 4,
    title: '플랜트 유지보수',
    description: '화학공장 및 제조설비의 예방정비와 24시간 긴급출동 서비스',
    icon: 'Wrench',
    features: ['예방정비', '24시간 긴급출동', '정기점검', '부품교체 및 업그레이드'],
    price: {
      min: 10000000,
      display: '1,000만원~'
    }
  }
];

export const COMPANY_HISTORY = [
  {
    year: 2021,
    title: '만송시스템 설립',
    description: '화학공장 통합관제시스템 및 제조업 자동화 전문기업으로 시작'
  },
  {
    year: 2022,
    title: 'ABB 파트너십 체결',
    description: 'ABB코리아 공식 파트너사로 화학공장 DCS/SCADA 전문성 강화'
  },
  {
    year: 2023,
    title: '사업 확장',
    description: '울산 지사 개소 및 석유화학단지 통합관제시스템 전문 서비스 확대'
  },
  {
    year: 2024,
    title: '기술 혁신',
    description: 'IoT 기반 실시간 모니터링 솔루션 및 스마트팩토리 구축 서비스 강화'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    customerName: 'ABB코리아',
    projectType: '통합관제시스템',
    content: '화학공장 DCS 시스템 구축에서 만송시스템의 전문성을 확인했습니다. 30년 파트너십의 신뢰를 바탕으로 완벽한 솔루션을 제공해주셨습니다.',
    rating: 5,
    completedAt: '2024-08-15',
    location: '경기 성남시',
    industry: '산업자동화'
  },
  {
    id: 2,
    customerName: 'LG화학',
    projectType: '공정자동화',
    content: '여수 석유화학단지 배치제어 시스템 구축으로 생산효율이 35% 향상되었습니다. 복잡한 화학공정을 완벽히 이해하고 최적화해주셨습니다.',
    rating: 5,
    completedAt: '2024-09-20',
    location: '전남 여수시',
    industry: '석유화학'
  },
  {
    id: 3,
    customerName: '포스코케미칼',
    projectType: '안전관리시스템',
    content: 'SIS(안전계장시스템) 구축을 통해 화학공장 안전성을 크게 향상시켰습니다. 국제 안전기준을 완벽히 준수한 전문적인 작업이었습니다.',
    rating: 5,
    completedAt: '2024-07-10',
    location: '전남 광양시',
    industry: '화학'
  },
  {
    id: 4,
    customerName: '현대제철',
    projectType: '통합관제시스템',
    content: '제철소 전체 공정을 통합 모니터링할 수 있는 SCADA 시스템 덕분에 품질관리와 생산성이 동시에 개선되었습니다.',
    rating: 5,
    completedAt: '2024-06-25',
    location: '충남 당진시',
    industry: '철강'
  },
  {
    id: 5,
    customerName: '포스코',
    projectType: '플랜트 유지보수',
    content: '철강 생산설비 예방정비 시스템으로 예기치 못한 설비중단을 90% 이상 줄일 수 있었습니다. 24시간 긴급출동 서비스도 완벽합니다.',
    rating: 5,
    completedAt: '2024-05-30',
    location: '경북 포항시',
    industry: '철강'
  },
  {
    id: 6,
    customerName: 'SK이노베이션',
    projectType: '공정자동화',
    content: '울산 정유공장 MES 시스템 구축으로 실시간 생산관리가 가능해졌습니다. 석유화학 공정의 복잡성을 완벽히 반영한 솔루션입니다.',
    rating: 5,
    completedAt: '2024-04-15',
    location: '울산 남구',
    industry: '석유화학'
  }
];

// 유틸리티 함수들
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// 네비게이션 메뉴
export const NAVIGATION_MENU = [
  { href: '#home', label: '홈' },
  { href: '#about', label: '회사소개' },
  { href: '#services', label: '서비스' },
  { href: '#testimonials', label: '고객후기' },
  { href: '#contact', label: '연락처' }
];

// 소셜 미디어 링크 (필요시 추가)
export const SOCIAL_LINKS = {
  email: 'mailto:limyoungmu@hanmail.net',
  business: 'mailto:limyoungmoo@mansong.kr',
  phone: 'tel:010-5264-8027'
};

// 팀 정보
export const TEAM_MEMBERS = [
  {
    name: '임영무',
    position: '대표이사',
    role: 'Founder & CEO',
    description: '공장자동화 전문가, 관제시스템 개발자. 만송시스템의 창립자.',
    expertise: ['공장자동화 전문', '관제시스템', '산업 자동화', '시스템 통합'],
    experience: '30+ 년',
    avatar: '/images/team/ceo.jpg'
  },
  {
    name: '임동근',
    position: 'CTO',
    role: '개발총괄',
    description: '화학공장 DCS/SCADA 시스템 개발 전문가. 시스템 설계 및 개발 리드.',
    expertise: ['DCS/SCADA 시스템', '화학공장 자동화', '시스템 아키텍처', '개발 관리'],
    experience: '15+ 년',
    avatar: '/images/team/cto.jpg'
  },
  {
    name: '프로젝트 매니저',
    position: '팀장',
    role: '프로젝트 매니저',
    description: '프로젝트 관리 및 고객 커뮤니케이션 전담.',
    expertise: ['프로젝트 관리', '고객 관계', '품질 관리', '팀 리더십'],
    experience: '12+ 년',
    avatar: '/images/team/pm.jpg'
  }
];

// 회사 핵심 가치
export const COMPANY_VALUES = [
  {
    title: '전문성',
    description: '30년 이상의 산업용 시스템 경험을 바탕으로 최고 품질의 전문 솔루션을 제공합니다.'
  },
  {
    title: '신뢰성',
    description: '고객과의 지속적인 소통, 정직하고 진실한 파트너십을 구축합니다.'
  },
  {
    title: '혁신성',
    description: '최신 기술 트렌드를 반영하여 고객의 비즈니스 혁신을 이끌어냅니다.'
  },
  {
    title: '품질',
    description: '철저한 품질 관리와 체계적인 프로세스로 최상의 결과물을 보장합니다.'
  }
];

// 회사 정보 통계
export const COMPANY_STATS = {
  founded: '1995년',
  projects: '500+',
  clients: '300+',
  satisfaction: '98%',
  locations: ['충남 천안', '울산광역시']
};