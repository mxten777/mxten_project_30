// HeroSection.tsx - 프리미엄 히어로 섹션 컴포넌트
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Award, TrendingUp, Sparkles, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BUSINESS_STATS } from '../data';
import { scrollToElement } from '../utils';
import { useScreenSize } from '../utils/ResponsiveUtils';
import { 
  PremiumButton, 
  PremiumBadge, 
  premiumAnimations,
  PremiumCard
} from './premium/PremiumDesignSystem';
import { PremiumHeroLayout } from './premium/PremiumLayouts';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useScreenSize();

  // 통계 데이터
  const stats = [
    {
      icon: TrendingUp,
      number: `${BUSINESS_STATS.totalProjects}+`,
      label: '완료 프로젝트',
      color: 'text-blue-500'
    },
    {
      icon: Users,
      number: `${BUSINESS_STATS.satisfactionRate}%`,
      label: '고객 만족도',
      color: 'text-green-500'
    },
    {
      icon: Award,
      number: `${BUSINESS_STATS.experienceYears}년+`,
      label: 'ABB 경험',
      color: 'text-yellow-500'
    }
  ];

  return (
    <PremiumHeroLayout>
      {/* 간소화된 배경 레이어 시스템 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 기본 그라디언트 배경 */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
        
        {/* 미니멀한 기하학적 패턴 */}
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64"
          animate={{ 
            rotate: [0, 360],
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-100/30 to-purple-100/20 rounded-full blur-xl"></div>
        </motion.div>

        <motion.div 
          className="absolute bottom-20 left-20 w-80 h-80"
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-tr from-purple-100/25 to-blue-100/15 rounded-full blur-2xl"></div>
        </motion.div>

        {/* 간단한 파티클 시스템 */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/20"
            style={{
              width: `${6 + (i % 2) * 3}px`,
              height: `${6 + (i % 2) * 3}px`,
              left: `${15 + i * 12}%`,
              top: `${25 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + (i * 0.5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}

        {/* 중앙 포커스 영역 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl bg-gradient-radial from-white/30 via-white/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-20">
        <motion.div 
          className="text-center relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          
          {/* 간소화된 배지 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 300 }}
            className="mb-8"
          >
            <PremiumBadge 
              variant="primary"
              size="lg"
              className="shadow-md font-heading"
            >
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4" />
                <span className="font-semibold">ABB코리아 공식 파트너 • 30년+ 전문성</span>
                <Sparkles className="w-4 h-4" />
              </div>
            </PremiumBadge>
          </motion.div>

          {/* 깔끔한 메인 헤드라인 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 200 }}
            className={`font-display font-black mb-8 leading-tight relative ${
              isMobile ? 'text-4xl px-4' : isTablet ? 'text-5xl' : 'text-6xl sm:text-7xl lg:text-8xl'
            }`}
          >
            <motion.span 
              className="block text-gray-900 relative z-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ 
                letterSpacing: '-0.02em',
                fontWeight: '900'
              }}
            >
              공장 자동화의
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent font-black relative z-10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{ 
                letterSpacing: '-0.02em',
                fontWeight: '900'
              }}
            >
              새로운 기준
            </motion.span>
          </motion.h1>

          {/* 간소화된 서브 헤드라인 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, type: "spring", stiffness: 300 }}
            className={`text-gray-700 font-body mb-12 max-w-4xl mx-auto leading-relaxed ${
              isMobile ? 'text-lg px-4' : isTablet ? 'text-xl' : 'text-2xl sm:text-3xl'
            }`}
          >
            <div className="space-y-2">
              <div className="font-medium">
                화학공장 통합관제부터 플랜트 자동화까지,
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="font-bold text-blue-700 font-display text-2xl sm:text-3xl">
                  만송시스템
                </span>
              </div>
              <div className="font-medium">
                이 제공하는 <span className="font-bold text-purple-600">완벽한 솔루션</span>
              </div>
            </div>
          </motion.div>

          {/* 개선된 CTA 버튼들 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 300 }}
            className={`flex items-center justify-center mb-16 ${
              isMobile ? 'flex-col space-y-4 px-4' : 'flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6'
            }`}
          >
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <PremiumButton
                variant="primary"
                size="xl"
                onClick={() => navigate('/order')}
                className={`shadow-lg font-bold font-heading touch-manipulation border-2 border-transparent hover:border-blue-300 ${
                  isMobile ? 'px-8 py-4 text-lg min-h-[56px] w-full' : 'px-10 py-4 text-xl'
                }`}
                icon={<ArrowRight className="w-5 h-5" />}
              >
                무료 상담 신청하기
              </PremiumButton>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <PremiumButton
                variant="outline"
                size="xl"
                onClick={() => scrollToElement('services')}
                className={`font-semibold font-heading touch-manipulation border-2 hover:border-purple-300 ${
                  isMobile ? 'px-8 py-4 text-lg min-h-[56px] w-full' : 'px-10 py-4 text-xl'
                }`}
                icon={<Sparkles className="w-5 h-5" />}
              >
                서비스 둘러보기
              </PremiumButton>
            </motion.div>
          </motion.div>

          {/* Premium 통계 카드들 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8,
              type: "spring",
              stiffness: 150,
              damping: 25
            }}
            className={`grid gap-6 sm:gap-8 max-w-5xl mx-auto ${
              isMobile ? 'grid-cols-1 px-4' : isTablet ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-3'
            }`}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1.0 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 25
                }}
                whileHover={{ 
                  y: -5
                }}
              >
                <PremiumCard 
                  className="text-center h-full bg-white/90 backdrop-blur-sm border border-white/20 hover:bg-white/95 transition-all duration-300 group cursor-pointer relative"
                  padding="lg"
                >
                  <div className="w-16 h-16 mx-auto mb-6 premium-gradient-primary rounded-2xl flex items-center justify-center relative">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-4xl sm:text-5xl font-black text-blue-700 mb-4 font-display">
                    {stat.number}
                  </div>
                  
                  <div className="text-gray-800 font-semibold text-base sm:text-lg font-heading">
                    {stat.label}
                  </div>
                  
                  {/* Simple hover indicator */}
                  <motion.div
                    className="w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"
                    whileHover={{ width: "60%" }}
                    transition={{ 
                      duration: 0.3,
                      type: "spring",
                      stiffness: 400,
                      damping: 30
                    }}
                  />
                </PremiumCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 bg-white/20 backdrop-blur-sm rounded-full flex justify-center border border-white/30"
        >
          <motion.div
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-4 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </PremiumHeroLayout>
  );
};

export default HeroSection;