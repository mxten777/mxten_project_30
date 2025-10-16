// LandingPage.tsx - 메인 랜딩 페이지
import React from 'react';

// 컴포넌트 임포트 (나중에 생성될 예정)
import HeaderNew from '../components/HeaderNew';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSectionNew';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FooterNew from '../components/FooterNew';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* 헤더 및 네비게이션 */}
      <HeaderNew />
      
      {/* 메인 콘텐츠 */}
      <main id="main-content">
        {/* 히어로 섹션 */}
        <HeroSection />
        
        {/* 회사 소개 섹션 */}
        <AboutSection />
        
        {/* 서비스 섹션 */}
        <ServicesSection />
        
        {/* 고객 후기 섹션 */}
        <TestimonialsSection />
      </main>
      
      {/* 푸터 */}
      <FooterNew />
    </div>
  );
};

export default LandingPage;