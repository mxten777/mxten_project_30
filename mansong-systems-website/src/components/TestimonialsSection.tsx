// TestimonialsSection.tsx - 고객 후기 섹션
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin, Calendar } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { formatDate } from '../utils';

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
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // 슬라이드 네비게이션
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // 별점 렌더링
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-yellow-400'
            : i < rating
            ? 'text-yellow-400 fill-yellow-400 opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        
        {/* 섹션 헤더 */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-600">TESTIMONIALS</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="block">고객이 직접 말하는</span>
            <span className="text-gradient">만송시스템 이야기</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            30년+ 경험과 검증된 기술력으로<br />
            고객의 성공을 함께 만들어온 이야기들입니다
          </p>
        </motion.div>

        {/* 메인 슬라이더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto mb-12"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            
            {/* 배경 장식 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  
                  {/* 좌측: 고객 정보 */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                        <Quote className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {TESTIMONIALS[currentSlide].customerName}
                        </h3>
                        <div className="flex items-center space-x-4 text-white/80 text-sm">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{TESTIMONIALS[currentSlide].location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(TESTIMONIALS[currentSlide].completedAt)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* 별점 */}
                    <div className="flex items-center space-x-1 mb-4">
                      {renderStars(TESTIMONIALS[currentSlide].rating)}
                      <span className="ml-2 text-white/90 font-semibold">
                        {TESTIMONIALS[currentSlide].rating}/5.0
                      </span>
                    </div>
                    
                    {/* 프로젝트 타입 */}
                    <div className="inline-block bg-white/20 rounded-full px-4 py-2">
                      <span className="text-sm font-medium text-white">
                        {TESTIMONIALS[currentSlide].projectType}
                      </span>
                    </div>
                  </div>

                  {/* 우측: 후기 내용 */}
                  <div className="lg:col-span-2">
                    <blockquote className="text-xl lg:text-2xl font-medium text-white leading-relaxed">
                      "{TESTIMONIALS[currentSlide].content}"
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* 네비게이션 버튼 */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="이전 후기"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              {/* 인디케이터 */}
              <div className="flex space-x-2">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`${index + 1}번째 후기로 이동`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="다음 후기"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* 고객사 로고들 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-8">
            신뢰받는 파트너사들
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {TESTIMONIALS.slice(0, 5).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-50 transition-colors duration-300">
                  <span className="text-gray-600 font-semibold text-sm group-hover:text-primary-600">
                    {testimonial.customerName.split(' ')[0]}
                  </span>
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  {testimonial.customerName}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 통계 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">98%</div>
            <div className="text-gray-600 font-medium">고객 만족도</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">4.9/5</div>
            <div className="text-gray-600 font-medium">평균 평점</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">95%</div>
            <div className="text-gray-600 font-medium">재계약률</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;