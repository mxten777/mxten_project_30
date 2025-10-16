// AboutSection.tsx - 프리미엄 회사 소개 섹션
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Cog, Users2, Award, Sparkles, TrendingUp, Shield } from 'lucide-react';
import { COMPANY_INFO, BUSINESS_STATS, COMPANY_HISTORY } from '../data';
import { 
  PremiumCard, 
  PremiumButton, 
  PremiumBadge,
  premiumAnimations 
} from './premium/PremiumDesignSystem';
import { PremiumSection, PremiumTwoColumn } from './premium/PremiumLayouts';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // 3카드 데이터
  const aboutCards = [
    {
      icon: Building2,
      title: '회사 연혁',
      items: [
        `${COMPANY_HISTORY[0].year}년 설립`,
        'ABB코리아 파트너십 체결',
        `${BUSINESS_STATS.totalProjects}+ 프로젝트 완료`,
        '지속적인 성장'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Cog,
      title: '핵심 역량',
      items: [
        `${BUSINESS_STATS.experienceYears}년+ ABB 경험`,
        '공장 자동화 전문성',
        '현장 모니터링 시스템',
        '관제 시스템 구축'
      ],
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Award,
      title: '차별화 요소',
      items: [
        '검증된 기술력',
        '맞춤형 솔루션',
        '전문 교육 서비스',
        '완벽한 A/S 지원'
      ],
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <PremiumSection 
      id="about" 
      className="relative overflow-hidden"
      background="gradient"
    >
      {/* Premium 배경 효과 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-cyan-100/25 to-blue-100/30 rounded-full blur-3xl"></div>
        
        {/* 미세한 패턴 */}
        <div className="absolute inset-0 opacity-[0.02]"
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        
        {/* Premium 섹션 헤더 */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <PremiumBadge 
              variant="primary" 
              size="lg"
              className="premium-shadow-glow font-heading"
            >
              <div className="flex items-center space-x-2">
                <Users2 className="w-5 h-5" />
                <span className="font-bold tracking-wide">ABOUT US</span>
                <Sparkles className="w-4 h-4" />
              </div>
            </PremiumBadge>
          </motion.div>
          
          <motion.h2 
            className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 font-display leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ letterSpacing: '-0.02em' }}
          >
            <span className="block">30년 경험으로 만드는</span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              신뢰받는 파트너
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-2xl text-gray-900 max-w-4xl mx-auto leading-relaxed font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ letterSpacing: '0.01em' }}
          >
            <span className="font-medium">{COMPANY_INFO.description}</span>을 통해<br />
            <span className="font-bold text-blue-700">고객의 성공을 함께 만들어갑니다</span>
          </motion.p>
        </motion.div>

        {/* 3카드 레이아웃 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                
                {/* 배경 그라디언트 */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} opacity-5 rounded-bl-full`}></div>
                
                {/* 아이콘 */}
                <div className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className="w-8 h-8 text-white" />
                </div>

                {/* 제목 */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {card.title}
                </h3>

                {/* 아이템 리스트 */}
                <ul className="space-y-3">
                  {card.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.4 + index * 0.2 + itemIndex * 0.1 
                      }}
                      className="flex items-center space-x-3"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${card.color} rounded-full`}></div>
                      <span className="text-gray-600 font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* 호버 효과를 위한 보더 */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-200 transition-colors duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 회사 정보 요약 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* 좌측: 회사 정보 */}
            <div>
              <h3 className="text-3xl font-bold mb-6">만송시스템 소개</h3>
              <div className="space-y-4 text-white/90">
                <div>
                  <span className="font-semibold">대표자:</span> {COMPANY_INFO.ceo}
                </div>
                <div>
                  <span className="font-semibold">설립일:</span> {COMPANY_INFO.establishedDate}
                </div>
                <div>
                  <span className="font-semibold">사업영역:</span> {COMPANY_INFO.industry}
                </div>
                <div>
                  <span className="font-semibold">소재지:</span> {COMPANY_INFO.address}
                </div>
                <div>
                  <span className="font-semibold">핵심파트너:</span> {COMPANY_INFO.partnership.partner} ({COMPANY_INFO.partnership.experience} 경험)
                </div>
              </div>
            </div>

            {/* 우측: 주요 수치 */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">
                  {BUSINESS_STATS.totalProjects}+
                </div>
                <div className="text-white/80">완료 프로젝트</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">
                  {BUSINESS_STATS.satisfactionRate}%
                </div>
                <div className="text-white/80">고객 만족도</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">
                  {BUSINESS_STATS.experienceYears}+
                </div>
                <div className="text-white/80">년 경험</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">
                  {new Date().getFullYear() - BUSINESS_STATS.establishedYear + 1}
                </div>
                <div className="text-white/80">년차 기업</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PremiumSection>
  );
};

export default AboutSection;