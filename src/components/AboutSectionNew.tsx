// AboutSectionNew.tsx - 프리미엄 회사 소개 섹션
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Cog, Users2, Award, Sparkles, TrendingUp, Shield, User, Mail, Phone, Target, Lightbulb } from 'lucide-react';
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

  // 팀 멤버 데이터
  const TEAM_MEMBERS = [
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
  const COMPANY_VALUES = [
    {
      title: '전문성',
      description: '30년+ ABB 파트너십과 화학공장 DCS/SCADA 전문 경험으로 최고 품질의 솔루션을 제공합니다.'
    },
    {
      title: '안전성',
      description: '화학공장 SIS(안전계장시스템) 구축과 국제 안전기준 준수로 플랜트 안전을 보장합니다.'
    },
    {
      title: '기술력',
      description: '통합관제시스템, 공정자동화, MES/QMS까지 제조업 전 영역의 기술 솔루션을 제공합니다.'
    },
    {
      title: '신뢰성',
      description: '24시간 긴급출동과 예방정비 시스템으로 제조설비 무중단 운영을 지원합니다.'
    }
  ];

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
      background="white"
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
            <span className="block">화학공장 전문 30년</span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              ABB 파트너사의 기술력
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ letterSpacing: '0.01em' }}
          >
            <span className="font-medium text-gray-900">{COMPANY_INFO.description}</span>을 통해<br />
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
                className="h-full premium-shadow-glow hover:premium-shadow-glow-intense transition-all duration-500 relative overflow-hidden bg-white"
                padding="xl"
              >
                {/* Premium 배경 효과 */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${card.color} opacity-10 rounded-bl-full blur-xl`}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/90 to-white/95 opacity-100"></div>
                
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
                <h3 className="text-3xl font-bold text-gray-900 mb-8 font-heading relative z-20">
                  {card.title}
                </h3>

                {/* Premium 아이템 리스트 */}
                <ul className="space-y-4 relative z-20">
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
                      className="flex items-center space-x-4 text-gray-800 group/item"
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
                      <span className="font-semibold font-body group-hover/item:text-blue-700 transition-colors duration-300 text-lg text-gray-900">
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
            className="bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white overflow-hidden relative"
            padding="xl"
          >
            {/* 배경 장식 */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            {/* 회사 정보 그리드 레이아웃 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* 좌측: 회사 정보 */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white font-heading">만송시스템</h3>
                      <p className="text-amber-300 font-medium">Factory Automation Specialist</p>
                    </div>
                  </div>
                
                  <div className="space-y-4 text-lg font-body text-white">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1.8 }}
                      className="text-white"
                    >
                      <span className="font-bold text-amber-400">설립일:</span> <span className="text-white font-semibold ml-2">{COMPANY_INFO.establishedDate}</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1.9 }}
                      className="text-white"
                    >
                      <span className="font-bold text-amber-400">사업영역:</span> <span className="text-white font-semibold ml-2">{COMPANY_INFO.industry}</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 2.0 }}
                      className="text-white"
                    >
                      <span className="font-bold text-amber-400">소재지:</span> <span className="text-white font-semibold ml-2">{COMPANY_INFO.address}</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 2.1 }}
                      className="text-white"
                    >
                      <span className="font-bold text-amber-400">핵심파트너:</span> <span className="text-white font-semibold ml-2">{COMPANY_INFO.partnership.partner} ({COMPANY_INFO.partnership.experience} 경험)</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* 우측: 전문 기술 영역 - 모바일 반응형 최적화 */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {[
                  { value: 'DCS', label: '분산제어시스템', delay: 1.8 },
                  { value: 'SCADA', label: '데이터수집제어', delay: 1.9 },
                  { value: 'HMI', label: '사용자인터페이스', delay: 2.0 },
                  { value: 'SIS', label: '안전계장시스템', delay: 2.1 }
                ].map((tech, index) => (
                  <motion.div 
                    key={tech.label}
                    className="text-center group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: tech.delay }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div 
                      className="text-2xl sm:text-3xl lg:text-4xl font-black mb-2 sm:mb-3 font-display text-amber-400"
                      animate={{ 
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                      style={{ textShadow: '0 0 10px rgba(251, 191, 36, 0.5)' }}
                    >
                      {tech.value}
                    </motion.div>
                    <div className="text-white font-bold font-body text-xs sm:text-sm text-center">
                      {tech.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </PremiumCard>
        </motion.div>

        {/* 팀 소개 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <PremiumBadge 
              variant="primary" 
              size="lg"
              className="premium-shadow-glow font-heading mb-6"
            >
              <div className="flex items-center space-x-2">
                <Users2 className="w-5 h-5" />
                <span>팀 소개</span>
              </div>
            </PremiumBadge>
            
            <motion.h3
              className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 font-display"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              만송시스템 팀 구성
            </motion.h3>
            
            <motion.p
              className="text-xl text-gray-800 max-w-3xl mx-auto font-body leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              각 분야의 전문가들이 모여 고객의 성공을 위해 최선을 다하고 있습니다.
            </motion.p>
          </div>

          {/* 팀 멤버 카드 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {TEAM_MEMBERS.map((member: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 + 1.2 }}
              >
                <PremiumCard 
                  variant="glass"
                  className="h-full overflow-hidden group hover:premium-shadow-glow transition-all duration-500 p-0"
                >
                  {/* 프로필 헤더 */}
                  <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-center">
                    <motion.div 
                      className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <User size={48} className="text-white" />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-white mb-1 font-display">{member.name}</h4>
                    <p className="text-blue-100 text-lg font-medium">{member.position}</p>
                    <p className="text-blue-200 text-sm">{member.role}</p>
                  </div>

                  {/* 상세 정보 */}
                  <div className="p-6">
                    <p className="text-gray-800 mb-4 leading-relaxed font-body">
                      {member.description}
                    </p>

                    <div className="mb-4">
                      <h5 className="text-sm font-bold premium-text-primary mb-2">전문 분야</h5>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill: string, idx: number) => (
                          <motion.span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t premium-border-primary/10">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-sm text-gray-700">경력</span>
                          <div className="font-bold text-blue-600 font-display">{member.experience}</div>
                        </div>
                        <div className="flex space-x-2">
                          <motion.button 
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Mail size={16} className="text-gray-600" />
                          </motion.button>
                          <motion.button 
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Phone size={16} className="text-gray-600" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </PremiumCard>
              </motion.div>
            ))}
          </div>

          {/* 회사 가치 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 font-display">핵심 가치</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {COMPANY_VALUES.map((value: any, index: number) => {
                const icons = [Target, Users2, Lightbulb, Award];
                const IconComponent = icons[index];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 2 }}
                  >
                    <PremiumCard 
                      variant="glass"
                      className="text-center h-full hover:premium-shadow-glow transition-all duration-300 group"
                    >
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 15 }}
                      >
                        <IconComponent size={32} className="text-white" />
                      </motion.div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 font-display">{value.title}</h4>
                      <p className="text-gray-800 leading-relaxed font-body text-sm">{value.description}</p>
                    </PremiumCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PremiumSection>
  );
};

export default AboutSection;