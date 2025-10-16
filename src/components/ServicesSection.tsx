// ServicesSectionNew.tsx - 프리미엄 서비스 섹션
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Settings, Monitor, Command, GraduationCap, ArrowRight, CheckCircle, Sparkles, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../data';
import { formatPrice } from '../utils';
import { 
  PremiumCard, 
  PremiumButton, 
  PremiumBadge,
  premiumAnimations 
} from './premium/PremiumDesignSystem';
import { PremiumSection } from './premium/PremiumLayouts';

const ServicesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const navigate = useNavigate();

  // 아이콘 매핑
  const iconMap = {
    Integration: Settings,
    Database: Monitor,
    Consulting: Command,
    Maintenance: GraduationCap,
    Settings,
    Monitor,
    Command,
    GraduationCap
  };

  return (
    <PremiumSection 
      id="services" 
      className="relative overflow-hidden"
      background="white"
    >
      {/* Premium 배경 효과 */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-br from-primary-100/30 to-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-tl from-purple-100/25 to-primary-100/30 rounded-full blur-3xl"></div>
        
        {/* 기하학적 패턴 */}
        <div className="absolute inset-0 opacity-[0.03]"
             style={{
               backgroundImage: `
                 radial-gradient(circle at 20% 80%, #3b82f6 1px, transparent 1px),
                 radial-gradient(circle at 80% 20%, #8b5cf6 1px, transparent 1px),
                 radial-gradient(circle at 40% 40%, #10b981 1px, transparent 1px)
               `,
               backgroundSize: '60px 60px, 80px 80px, 100px 100px'
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
                <Settings className="w-5 h-5" />
                <span className="font-bold tracking-wide">SERVICES</span>
                <Sparkles className="w-4 h-4" />
              </div>
            </PremiumBadge>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ 
              fontFamily: "'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
              fontWeight: 700,
              letterSpacing: '-0.02em'
            }}
          >
            <span className="block text-gray-900">전문화된 서비스로</span>
            <span className="block text-blue-700 mt-1 sm:mt-2">
              완벽한 솔루션 제공
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ 
              fontFamily: "'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
              fontWeight: 500,
              letterSpacing: '0.01em'
            }}
          >
            <span className="font-semibold text-gray-900">설계부터 구축, 운영, 유지보수까지</span>
            <br className="hidden sm:block" />
            <span className="sm:ml-0"> </span>
            <span className="font-bold text-blue-700">원스톱 서비스로 고객의 성공을 지원합니다</span>
          </motion.p>
        </motion.div>

        {/* Premium 서비스 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-16 lg:mb-20 px-4 sm:px-0">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Settings;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8 + index * 0.2,
                  type: "spring",
                  stiffness: 300
                }}
                whileHover={{ 
                  y: -20,
                  scale: 1.02
                }}
                className="group"
              >
                <PremiumCard 
                  className="h-full premium-shadow-glow hover:premium-shadow-glow-intense transition-all duration-500 relative overflow-hidden"
                  padding="xl"
                >
                  {/* Premium 배경 효과 */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary-500/8 to-blue-500/12 rounded-bl-full blur-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* 서비스 헤더 */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 sm:mb-8 relative z-10">
                    <div className="flex items-center space-x-4 sm:space-x-6 mb-4 sm:mb-0">
                      {/* 아이콘 */}
                      <motion.div 
                        className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      >
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </motion.div>
                      
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight" style={{
                          fontFamily: "'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                          fontWeight: 700
                        }}>
                          {service.title}
                        </h3>
                        {service.price && (
                          <motion.div 
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 1 + index * 0.2 }}
                          >
                            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 flex-shrink-0" />
                            <span className="text-base sm:text-lg text-primary-600 font-bold" style={{
                              fontFamily: "'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                              fontWeight: 600
                            }}>
                              {formatPrice(service.price.min)} ~
                            </span>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 서비스 설명 */}
                  <motion.p 
                    className="text-gray-800 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg relative z-10"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.2 + index * 0.2 }}
                    style={{
                      fontFamily: "'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                      fontWeight: 500
                    }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Premium 특징 리스트 */}
                  <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 relative z-10">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.6, 
                          delay: 1.4 + index * 0.2 + featureIndex * 0.1,
                          type: "spring",
                          stiffness: 300
                        }}
                        whileHover={{ x: 10 }}
                        className="flex items-center space-x-3 sm:space-x-4 group/item"
                      >
                        <div
                          className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0"
                        >
                          <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                        </div>
                        <span className="text-gray-900 font-medium sm:font-semibold text-sm sm:text-base lg:text-lg group-hover/item:text-primary-700 transition-colors duration-300" style={{
                          fontFamily: "'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                          fontWeight: 500
                        }}>
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Premium CTA 버튼 */}
                  <motion.div 
                    className="relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.8 + index * 0.2 }}
                  >
                    <PremiumButton
                      variant="primary"
                      size="lg"
                      onClick={() => navigate('/order')}
                      className="w-full group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base font-bold" style={{
                          fontFamily: "'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                          fontWeight: 700
                        }}>견적 문의</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </div>
                    </PremiumButton>
                  </motion.div>
                </PremiumCard>
              </motion.div>
            );
          })}
        </div>

        {/* Premium 프로세스 플로우 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="relative"
        >
          <PremiumCard 
            className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden relative"
            padding="xl"
          >
            {/* 배경 장식 */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>
            
            <div className="relative z-10">
              <motion.h3 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 lg:mb-16 text-white px-4 sm:px-0"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2.2 }}
                style={{ 
                  fontFamily: "'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                  fontWeight: 700
                }}
              >
                <Sparkles className="inline-block w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mr-2 sm:mr-4 mb-1 sm:mb-2 text-yellow-300" />
                서비스 진행 프로세스
              </motion.h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 relative px-4 sm:px-0">
                {[
                  { step: '01', title: '상담', desc: '요구사항 분석 및 현장 조사', color: 'from-blue-400 to-blue-600' },
                  { step: '02', title: '설계', desc: '맞춤형 시스템 설계 및 제안', color: 'from-green-400 to-green-600' },
                  { step: '03', title: '구축', desc: '전문팀의 체계적 시스템 구축', color: 'from-purple-400 to-purple-600' },
                  { step: '04', title: '교육', desc: '운영진 대상 전문 교육 실시', color: 'from-amber-400 to-amber-600' },
                  { step: '05', title: '지원', desc: '지속적인 유지보수 및 지원', color: 'from-rose-400 to-rose-600' }
                ].map((process, index) => (
                  <motion.div
                    key={process.step}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: 2.4 + index * 0.1,
                      type: "spring",
                      stiffness: 300
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -10
                    }}
                    className="text-center group relative"
                  >
                    {/* 프로세스 카드 */}
                    <div className="bg-slate-800/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-slate-800/95 transition-colors duration-300">
                      <div 
                        className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${process.color} rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4`}
                      >
                        <span className="text-white font-bold text-base sm:text-lg">{process.step}</span>
                      </div>
                      
                      <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white" style={{
                        fontFamily: "'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                        fontWeight: 700
                      }}>{process.title}</h4>
                      <p className="text-gray-300 leading-relaxed text-xs sm:text-sm" style={{
                        fontFamily: "'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                        fontWeight: 500
                      }}>{process.desc}</p>
                    </div>
                    
                    {/* 연결 화살표 (마지막 제외) */}
                    {index < 4 && (
                      <div className="hidden md:block absolute top-8 -right-4 z-20">
                        <ArrowRight className="w-6 h-6 text-white/50" />
                      </div>
                    )}
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

export default ServicesSection;