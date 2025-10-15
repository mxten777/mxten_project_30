// AboutSectionNew.tsx - 프리미엄 회사 소개 섹션
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

  // Premium 3카드 데이터
  const aboutCards = [
    {
      icon: Building2,
      title: '회사 연혁',
      items: [
        `${COMPANY_HISTORY[0].year}년 설립`,
        'ABB코리아 파트너십 체결',
        `${BUSINESS_STATS.totalProjects}+ 프로젝트 완료`,
        '지속적인 성장과 혁신'
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
        '맞춤형 솔루션 제공',
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
            className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ letterSpacing: '0.01em' }}
          >
            <span className="font-medium">{COMPANY_INFO.description}</span>을 통해<br />
            <span className="font-bold text-blue-700">고객의 성공을 함께 만들어갑니다</span>
          </motion.p>
        </motion.div>

        {/* Premium 3카드 레이아웃 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.8 + index * 0.2,
                type: "spring",
                stiffness: 300
              }}
              whileHover={{ 
                y: -15,
                scale: 1.02
              }}
              className="group"
            >
              <PremiumCard 
                className="h-full premium-shadow-glow hover:premium-shadow-glow-intense transition-all duration-500 relative overflow-hidden"
                padding="xl"
              >
                {/* Premium 배경 효과 */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${card.color} opacity-8 rounded-bl-full blur-xl`}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Premium 아이콘 */}
                <motion.div 
                  className={`relative w-20 h-20 bg-gradient-to-br ${card.color} rounded-3xl flex items-center justify-center mb-8 premium-shadow-glow`}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <card.icon className="w-10 h-10 text-white relative z-10" />
                  
                  {/* 아이콘 글로우 효과 */}
                  <div className="absolute inset-0 bg-white/20 rounded-3xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
                  
                  {/* 회전하는 링 */}
                  <motion.div
                    className="absolute inset-0 border-2 border-white/30 rounded-3xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>

                {/* Premium 제목 */}
                <h3 className="text-3xl font-bold text-gray-900 mb-8 font-heading relative z-10">
                  {card.title}
                </h3>

                {/* Premium 아이템 리스트 */}
                <ul className="space-y-4 relative z-10">
                  {card.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -30 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: 1 + index * 0.2 + itemIndex * 0.1,
                        type: "spring",
                        stiffness: 300
                      }}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-4 text-gray-700 group/item"
                    >
                      <motion.div 
                        className={`w-3 h-3 bg-gradient-to-r ${card.color} rounded-full flex-shrink-0 premium-shadow-glow`}
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: itemIndex * 0.3
                        }}
                      />
                      <span className="font-medium font-body group-hover/item:text-blue-700 transition-colors duration-300 text-lg">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </PremiumCard>
            </motion.div>
          ))}
        </div>

        {/* Premium 회사 정보 요약 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="relative"
        >
          <PremiumCard 
            className="premium-gradient-primary text-white overflow-hidden relative"
            padding="xl"
          >
            {/* 배경 장식 */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
              {/* 좌측: 회사 정보 */}
              <div className="space-y-6">
                <motion.h3 
                  className="text-3xl font-bold mb-8 font-heading"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.6 }}
                >
                  <Shield className="inline-block w-8 h-8 mr-3" />
                  회사 개요
                </motion.h3>
                
                <div className="space-y-4 text-lg font-body">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.8 }}
                  >
                    <span className="font-semibold">설립일:</span> {COMPANY_INFO.establishedDate}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.9 }}
                  >
                    <span className="font-semibold">사업영역:</span> {COMPANY_INFO.industry}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 2.0 }}
                  >
                    <span className="font-semibold">소재지:</span> {COMPANY_INFO.address}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 2.1 }}
                  >
                    <span className="font-semibold">핵심파트너:</span> {COMPANY_INFO.partnership.partner} ({COMPANY_INFO.partnership.experience} 경험)
                  </motion.div>
                </div>
              </div>

              {/* 우측: 주요 수치 */}
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: `${BUSINESS_STATS.totalProjects}+`, label: '완료 프로젝트', delay: 1.8 },
                  { value: `${BUSINESS_STATS.satisfactionRate}%`, label: '고객 만족도', delay: 1.9 },
                  { value: `${BUSINESS_STATS.experienceYears}+`, label: '년 경험', delay: 2.0 },
                  { value: `${new Date().getFullYear() - BUSINESS_STATS.establishedYear + 1}`, label: '년차 기업', delay: 2.1 }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: stat.delay }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div 
                      className="text-4xl lg:text-5xl font-black mb-3 font-display"
                      animate={{ 
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-white/80 font-medium font-body text-lg">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </PremiumCard>
        </motion.div>
      </div>
    </PremiumSection>
  );
};

export default AboutSection;