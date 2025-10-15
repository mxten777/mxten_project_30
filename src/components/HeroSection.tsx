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
      {/* 복잡한 프리미엄 배경 레이어 시스템 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 기본 그라디언트 배경 */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30"></div>
        
        {/* 메쉬 그라디언트 오버레이 */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/60 via-transparent to-purple-100/40"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-cyan-50/30 to-indigo-100/50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-violet-50/20 via-transparent to-blue-50/30"></div>
        </div>
        
        {/* 움직이는 기하학적 패턴들 */}
        <motion.div 
          className="absolute -top-20 -right-20 w-96 h-96"
          animate={{ 
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-200/20 via-purple-200/15 to-cyan-200/25 rounded-full blur-2xl"></div>
        </motion.div>

        <motion.div 
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px]"
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-tr from-indigo-200/25 via-blue-200/20 to-violet-200/30 rounded-full blur-3xl"></div>
        </motion.div>

        {/* 중앙 회전하는 대형 오브젝트 */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          animate={{ 
            rotate: [0, 180, 360],
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{ 
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute inset-0 bg-gradient-conic from-blue-100/15 via-purple-100/20 via-cyan-100/15 to-blue-100/15 rounded-full blur-3xl"></div>
        </motion.div>
        
        {/* 복잡한 기하학적 패턴들 */}
        <motion.div 
          className="absolute top-20 left-1/4 w-64 h-64"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 45, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-cyan-200/20 to-blue-200/25 transform rotate-45 blur-xl"></div>
        </motion.div>

        <motion.div 
          className="absolute bottom-32 right-1/4 w-80 h-80"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 25, 0],
            rotate: [0, -30, 0]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        >
          <div className="w-full h-full bg-gradient-to-bl from-purple-200/25 to-indigo-200/20 transform -rotate-12 blur-2xl"></div>
        </motion.div>
        
        {/* 동적 파티클 시스템 */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${4 + (i % 3) * 2}px`,
              height: `${4 + (i % 3) * 2}px`,
              left: `${10 + i * 7}%`,
              top: `${20 + (i % 4) * 15}%`,
              background: i % 3 === 0 ? '#fbbf24' : i % 3 === 1 ? '#60a5fa' : '#a78bfa'
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, (i % 2 === 0 ? 20 : -20), 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 4 + (i * 0.3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}

        {/* 추가 기하학적 장식 요소들 */}
        <motion.div 
          className="absolute top-1/4 right-20 w-32 h-32 border-2 border-blue-200/30 rounded-lg transform rotate-45"
          animate={{ 
            rotate: [45, 135, 45],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute inset-2 bg-gradient-to-br from-blue-100/20 to-purple-100/30 rounded"></div>
        </motion.div>

        <motion.div 
          className="absolute bottom-1/4 left-16 w-24 h-24 border border-purple-200/40 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="absolute inset-1 bg-gradient-to-r from-purple-100/25 to-cyan-100/20 rounded-full"></div>
        </motion.div>

        {/* 원형 리플 효과들 */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`ripple-${i}`}
            className="absolute rounded-full border border-blue-200/20"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${20 + i * 20}%`,
              top: `${30 + i * 15}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
          />
        ))}

        {/* 고급 패턴 오버레이 */}
        <motion.div 
          className="absolute inset-0 opacity-[0.04]" 
          animate={{ 
            backgroundPosition: ['0 0, 20px 20px, 40px 40px', '10px 10px, 30px 30px, 50px 50px', '0 0, 20px 20px, 40px 40px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #8b5cf6 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, #06b6d4 1.5px, transparent 1.5px)
            `,
            backgroundSize: '60px 60px, 40px 40px, 80px 80px',
          }}>
        </motion.div>

        {/* 미세한 그리드 텍스처 */}
        <motion.div 
          className="absolute inset-0 opacity-[0.02]"
          animate={{
            backgroundPosition: ['0 0, 0 0', '10px 10px, 10px 10px', '0 0, 0 0']
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}>
        </motion.div>

        {/* 다이아몬드 패턴 추가 */}
        <div className="absolute inset-0 opacity-[0.025]"
             style={{
               backgroundImage: `
                 conic-gradient(from 45deg at 50% 50%, transparent 0deg, rgba(139, 92, 246, 0.1) 90deg, transparent 180deg, rgba(59, 130, 246, 0.1) 270deg, transparent 360deg)
               `,
               backgroundSize: '100px 100px'
             }}>
        </div>

        {/* 미세한 노이즈 텍스처 (가독성 향상) */}
        <div className="absolute inset-0 opacity-[0.015] bg-gradient-to-br from-gray-900 to-transparent mix-blend-overlay"></div>
        
        {/* 부드러운 비네팅 효과 */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/30"></div>
        
        {/* 중앙 포커스 영역 강조 (가독성 향상) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-screen bg-gradient-radial from-white/20 via-white/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-20">
        {/* 텍스트 영역 배경 (가독성 향상) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-6xl h-full bg-gradient-radial from-white/40 via-white/10 to-transparent rounded-full blur-2xl"></div>
        </div>
        
        <motion.div 
          className="text-center relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          
          {/* Premium 배지 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <PremiumBadge 
              variant="primary"
              size="lg"
              className="premium-shadow-glow font-heading"
            >
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5" />
                <span className="font-bold tracking-wide">ABB코리아 공식 파트너</span>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="font-bold tracking-wide">30년+ 전문성</span>
                <Sparkles className="w-4 h-4" />
              </div>
            </PremiumBadge>
          </motion.div>

          {/* Premium 메인 헤드라인 */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className={`font-display font-black mb-8 leading-tight relative ${
              isMobile ? 'text-5xl px-4' : isTablet ? 'text-6xl' : 'text-7xl sm:text-8xl lg:text-9xl'
            }`}
          >
            {/* 텍스트 배경 글로우 (가독성 향상) */}
            <div className="absolute inset-0 bg-gradient-radial from-white/60 via-white/20 to-transparent blur-xl scale-110"></div>
            
            <motion.span 
              className="block text-gray-900 relative z-10 drop-shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ 
                textShadow: '0 2px 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.3)',
                letterSpacing: '-0.04em',
                fontWeight: '900'
              }}
            >
              공장 자동화의
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent font-black relative z-10"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ 
                textShadow: '0 2px 15px rgba(59, 130, 246, 0.3), 0 0 30px rgba(147, 51, 234, 0.2)',
                filter: 'drop-shadow(0 4px 8px rgba(255,255,255,0.4))',
                letterSpacing: '-0.04em',
                fontWeight: '900'
              }}
            >
              새로운 기준
            </motion.span>
            
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 right-0 w-8 h-8"
              animate={{ 
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Star className="w-full h-full text-yellow-400" />
            </motion.div>
          </motion.h1>

          {/* Premium 서브 헤드라인 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className={`text-gray-600 font-body mb-10 max-w-4xl mx-auto leading-relaxed relative ${
              isMobile ? 'text-xl px-4' : isTablet ? 'text-2xl' : 'text-3xl sm:text-4xl'
            }`}
          >
            {/* 서브 타이틀 배경 (가독성 향상) */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-2xl blur-sm scale-110"></div>
            
            <div className="space-y-3 relative z-10">
              <div className="font-medium" style={{ 
                textShadow: '0 1px 3px rgba(255,255,255,0.8)',
                letterSpacing: '0.01em'
              }}>
                현장 모니터링부터 관제 시스템까지,
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Sparkles className="w-7 h-7 text-yellow-500 drop-shadow-lg" />
                <span 
                  className="font-bold text-blue-700 font-display"
                  style={{ 
                    textShadow: '0 2px 8px rgba(59, 130, 246, 0.3), 0 0 15px rgba(255,255,255,0.6)',
                    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                    letterSpacing: '-0.02em'
                  }}
                >
                  만송시스템
                </span>
                <Sparkles className="w-7 h-7 text-yellow-500 drop-shadow-lg" />
              </div>
              <div className="font-medium" style={{ 
                textShadow: '0 1px 3px rgba(255,255,255,0.8)',
                letterSpacing: '0.01em'
              }}>
                이 제공하는 <span 
                  className="font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-heading"
                  style={{ 
                    textShadow: '0 2px 8px rgba(147, 51, 234, 0.3)',
                    letterSpacing: '-0.01em'
                  }}
                >
                  완벽한 솔루션
                </span>
              </div>
            </div>
          </motion.div>

          {/* Premium CTA 버튼들 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className={`flex items-center justify-center mb-20 ${
              isMobile ? 'flex-col space-y-6 px-4' : 'flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8'
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <PremiumButton
                variant="primary"
                size="xl"
                onClick={() => navigate('/order')}
                className="premium-shadow-glow px-12 py-5 text-xl font-bold font-heading tracking-wide"
                icon={<ArrowRight className="w-6 h-6" />}
                style={{ letterSpacing: '0.02em' }}
              >
                무료 상담 신청하기
              </PremiumButton>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <PremiumButton
                variant="outline"
                size="xl"
                onClick={() => scrollToElement('services')}
                className="px-12 py-5 text-xl font-semibold font-heading tracking-wide"
                icon={<Sparkles className="w-6 h-6" />}
                style={{ letterSpacing: '0.02em' }}
              >
                서비스 둘러보기
              </PremiumButton>
            </motion.div>
          </motion.div>

          {/* Premium 통계 카드들 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className={`grid gap-8 max-w-5xl mx-auto ${
              isMobile ? 'grid-cols-1 px-4' : isTablet ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-3'
            }`}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: 1.6 + index * 0.2,
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                whileHover={{ 
                  scale: 1.08,
                  y: -10,
                  rotateY: 5
                }}
              >
                <PremiumCard 
                  className="text-center h-full premium-shadow-glow hover:premium-shadow-glow-intense transition-all duration-500 group cursor-pointer relative overflow-hidden"
                  padding="lg"
                >
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 premium-gradient-primary-light opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  
                  <motion.div
                    className="relative z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-16 h-16 mx-auto mb-6 premium-gradient-primary rounded-2xl flex items-center justify-center premium-shadow-glow relative">
                      <stat.icon className="w-8 h-8 text-white" />
                      
                      {/* Animated ring */}
                      <motion.div
                        className="absolute inset-0 border-2 border-yellow-400 rounded-2xl opacity-0 group-hover:opacity-100"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                    
                    {/* Floating sparkles */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-4 h-4"
                      animate={{ 
                        rotate: [0, 180, 360],
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      <Sparkles className="w-full h-full text-yellow-400" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="text-5xl sm:text-6xl font-black text-blue-700 mb-4 relative z-10 font-display"
                    animate={{ 
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                    style={{ letterSpacing: '-0.03em' }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  <div className="text-gray-600 font-bold text-lg tracking-wide relative z-10 font-heading">
                    {stat.label}
                  </div>
                  
                  {/* Premium animated underline */}
                  <motion.div
                    className="w-0 h-1 premium-gradient-primary mx-auto mt-4 rounded-full"
                    whileHover={{ width: "80%" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  
                  {/* Pulse effect */}
                  <motion.div
                    className="absolute inset-0 premium-gradient-primary rounded-2xl opacity-0"
                    animate={{ 
                      opacity: [0, 0.1, 0],
                      scale: [0.8, 1.1, 0.8]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 1
                    }}
                  />
                </PremiumCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Premium 스크롤 인디케이터 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-12 premium-glass rounded-full flex justify-center border-2 premium-border-primary/30 premium-shadow-glow"
        >
          <motion.div
            animate={{ 
              y: [0, 12, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1, 0.8]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-6 premium-gradient-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </PremiumHeroLayout>
  );
};

export default HeroSection;