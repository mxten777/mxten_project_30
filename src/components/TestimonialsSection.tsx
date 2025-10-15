// TestimonialsSectionNew.tsx - 프리미엄 고객 후기 섹션
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
            className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-body"
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
          
          <PremiumCard className="premium-gradient-primary text-white relative overflow-hidden premium-shadow-glow-intense">
            
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
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
                className="relative z-10 p-8 lg:p-16"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                  
                  {/* 좌측: Premium 고객 정보 */}
                  <div className="lg:col-span-1 space-y-8">
                    
                    {/* 고객 아바타 & 정보 */}
                    <motion.div 
                      className="flex items-center space-x-6"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <motion.div 
                        className="w-24 h-24 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl flex items-center justify-center premium-shadow-glow"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Quote className="w-12 h-12 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                          {TESTIMONIALS[currentSlide].customerName}
                        </h3>
                        <div className="space-y-1 text-white/80">
                          <motion.div 
                            className="flex items-center space-x-2"
                            whileHover={{ x: 5 }}
                          >
                            <MapPin className="w-4 h-4" />
                            <span className="font-medium">{TESTIMONIALS[currentSlide].location}</span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center space-x-2"
                            whileHover={{ x: 5 }}
                          >
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{formatDate(TESTIMONIALS[currentSlide].completedAt)}</span>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Premium 별점 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-2">
                        {renderStars(TESTIMONIALS[currentSlide].rating)}
                      </div>
                      <motion.div 
                        className="flex items-center space-x-3"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Award className="w-6 h-6 text-amber-400" />
                        <span className="text-2xl font-bold text-white">
                          {TESTIMONIALS[currentSlide].rating}/5.0
                        </span>
                        <span className="text-white/80 font-medium">완벽한 만족</span>
                      </motion.div>
                    </motion.div>
                    
                    {/* Premium 프로젝트 타입 배지 */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6, type: "spring" }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <PremiumBadge variant="primary" size="lg" className="bg-white/20 backdrop-blur-sm">
                        <div className="flex items-center space-x-2">
                          <Sparkles className="w-4 h-4" />
                          <span className="font-bold">{TESTIMONIALS[currentSlide].projectType}</span>
                        </div>
                      </PremiumBadge>
                    </motion.div>
                  </div>

                  {/* 우측: Premium 후기 내용 */}
                  <div className="lg:col-span-2">
                    <motion.blockquote 
                      className="text-2xl lg:text-3xl font-medium text-white leading-relaxed font-body"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      style={{ letterSpacing: '0.01em' }}
                    >
                      <span className="text-4xl text-white/60 leading-none">"</span>
                      {TESTIMONIALS[currentSlide].content}
                      <span className="text-4xl text-white/60 leading-none">"</span>
                    </motion.blockquote>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Premium 네비게이션 버튼 */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <motion.button
                onClick={prevSlide}
                className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 pointer-events-auto premium-shadow-glow"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                onClick={nextSlide}
                className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 pointer-events-auto premium-shadow-glow"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Premium 슬라이드 인디케이터 */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
              {TESTIMONIALS.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-12 h-3 bg-white rounded-full'
                      : 'w-3 h-3 bg-white/40 rounded-full hover:bg-white/60'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
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
                
                <p className="text-gray-600 font-medium text-lg font-body">
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