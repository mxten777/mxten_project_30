// TestimonialsSection.tsx - 프리미엄 고객 후기 섹션
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin, Calendar, Sparkles, Award, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { formatDate } from '../utils';
import { 
  PremiumCard, 
  PremiumButton, 
  PremiumBadge,
  premiumAnimations 
} from './premium/PremiumDesignSystem';
import { PremiumSection } from './premium/PremiumLayouts';

const TestimonialsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 자동 슬라이드
  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // 슬라이드 네비게이션
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Premium 별점 렌더링
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: i * 0.1,
          type: "spring",
          stiffness: 300
        }}
        whileHover={{ scale: 1.2, rotate: 15 }}
      >
        <Star
          className={`w-6 h-6 transition-all duration-300 ${
            i < Math.floor(rating)
              ? 'text-amber-400 fill-amber-400 premium-shadow-glow'
              : i < rating
              ? 'text-amber-400 fill-amber-400 opacity-50'
              : 'text-white/30'
          }`}
        />
      </motion.div>
    ));
  };

  return (
    <PremiumSection 
      id="testimonials" 
      className="relative overflow-hidden"
      background="gray"
    >
      {/* Premium 배경 효과 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-amber-100/20 to-orange-100/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-rose-100/15 to-pink-100/20 rounded-full blur-3xl"></div>
        
        {/* 떠다니는 별들 */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star className="w-4 h-4 text-amber-300/40" />
          </motion.div>
        ))}
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
                <Star className="w-5 h-5 text-amber-400" />
                <span className="font-bold tracking-wide">TESTIMONIALS</span>
                <Heart className="w-4 h-4 text-rose-400" />
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
            <span className="block">고객이 직접 말하는</span>
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent">
              만송시스템 이야기
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-2xl text-gray-900 max-w-4xl mx-auto leading-relaxed font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ letterSpacing: '0.01em' }}
          >
            <span className="font-medium">30년+ 경험과 검증된 기술력으로</span><br />
            <span className="font-bold text-primary-700">고객의 성공을 함께 만들어온 이야기들입니다</span>
          </motion.p>
        </motion.div>

        {/* Premium 메인 슬라이더 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative max-w-6xl mx-auto mb-16"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          
          <PremiumCard className="bg-slate-800 text-white relative overflow-hidden premium-shadow-glow-intense">
            
            {/* Premium 배경 장식 */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            
            {/* 장식적 기하학 패턴 */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full animate-spin-slow"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white/20 rotate-45"></div>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 400 }}
                className="relative z-10 max-w-6xl mx-auto bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  
                  {/* 좌측: 고객 정보 패널 */}
                  <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-blue-700 p-8 space-y-6">
                    
                    {/* 고객 헤더 */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-center"
                    >
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white/30">
                        <Quote className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {TESTIMONIALS[currentSlide].customerName}
                      </h3>
                      
                      {/* 프로젝트 정보 */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-center space-x-2 text-blue-100">
                          <MapPin className="w-4 h-4" />
                          <span className="font-medium">{TESTIMONIALS[currentSlide].location}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2 text-blue-100">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{formatDate(TESTIMONIALS[currentSlide].completedAt)}</span>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* 별점 섹션 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-center"
                    >
                      <div className="flex justify-center mb-3">
                        {renderStars(TESTIMONIALS[currentSlide].rating)}
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                        <div className="flex items-center justify-center space-x-2">
                          <Award className="w-5 h-5 text-yellow-300" />
                          <span className="text-lg font-bold text-white">
                            {TESTIMONIALS[currentSlide].rating}/5.0
                          </span>
                        </div>
                        <span className="text-blue-100 text-sm">완벽한 만족도</span>
                      </div>
                    </motion.div>
                    
                    {/* 프로젝트 타입 */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-center"
                    >
                      <div className="bg-white text-blue-700 px-4 py-3 rounded-lg font-bold shadow-lg inline-block">
                        <div className="flex items-center space-x-2">
                          <Sparkles className="w-4 h-4" />
                          <span className="text-sm font-bold">{TESTIMONIALS[currentSlide].projectType}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* 우측: 후기 콘텐츠 */}
                  <div className="lg:col-span-3 p-8 lg:p-12 flex items-center">
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="w-full"
                    >
                      <div className="relative">
                        {/* 인용 아이콘 */}
                        <div className="absolute -top-4 -left-2 text-6xl text-blue-100 font-serif">"</div>
                        
                        {/* 후기 텍스트 */}
                        <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium pl-8 pr-4 relative">
                          {TESTIMONIALS[currentSlide].content}
                        </blockquote>
                        
                        {/* 하단 라인 */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                              {TESTIMONIALS[currentSlide].customerName}
                            </div>
                            <div className="flex items-center space-x-2 text-blue-600">
                              <Award className="w-4 h-4" />
                              <span className="text-sm font-medium">검증된 파트너</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* 세련된 네비게이션 버튼 - 터치 최적화 */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <motion.button
                onClick={prevSlide}
                className="w-14 h-14 min-w-[48px] min-h-[48px] bg-white shadow-lg rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 active:bg-blue-100 transition-all duration-300 pointer-events-auto border border-gray-200 touch-manipulation"
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label="이전 후기"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                onClick={nextSlide}
                className="w-14 h-14 min-w-[48px] min-h-[48px] bg-white shadow-lg rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 active:bg-blue-100 transition-all duration-300 pointer-events-auto border border-gray-200 touch-manipulation"
                whileHover={{ scale: 1.1, x: 3 }}
                whileTap={{ scale: 0.9 }}
                aria-label="다음 후기"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* 슬라이드 인디케이터 - 터치 최적화 */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <div className="flex space-x-3">
                {TESTIMONIALS.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 rounded-full min-w-[32px] min-h-[32px] p-1 touch-manipulation ${
                      index === currentSlide
                        ? 'w-10 h-4 bg-blue-600'
                        : 'w-4 h-4 bg-gray-300 hover:bg-gray-400 active:bg-gray-500'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>
          </PremiumCard>
        </motion.div>

        {/* Premium 통계 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { 
              value: `${TESTIMONIALS.length}+`, 
              label: '완료 프로젝트', 
              icon: Award,
              color: 'from-blue-500 to-blue-600'
            },
            { 
              value: '4.9/5.0', 
              label: '평균 만족도', 
              icon: Star,
              color: 'from-amber-500 to-amber-600'
            },
            { 
              value: '100%', 
              label: '재계약 비율', 
              icon: Heart,
              color: 'from-rose-500 to-rose-600'
            },
            { 
              value: '30+', 
              label: '년 경험', 
              icon: Sparkles,
              color: 'from-purple-500 to-purple-600'
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 1.2 + index * 0.1,
                type: "spring",
                stiffness: 300
              }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <PremiumCard className="text-center h-full premium-shadow-glow hover:premium-shadow-glow-intense transition-all duration-500">
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 premium-shadow-glow`}
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div 
                  className="text-4xl font-black text-gray-900 mb-3 font-display"
                  animate={{ 
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {stat.value}
                </motion.div>
                
                <p className="text-gray-900 font-medium text-lg font-body">
                  {stat.label}
                </p>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PremiumSection>
  );
};

export default TestimonialsSection;