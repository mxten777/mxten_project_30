// FooterNewPremium.tsx - 프리미엄 푸터 컴포넌트
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, Send, 
  ExternalLink, ChevronUp, Building2, 
  Award, TrendingUp, Users, Sparkles,
  Shield, Zap, Heart, Star
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { COMPANY_INFO, CONTACT_INFO, BUSINESS_STATS } from '../data';
import { scrollToElement } from '../utils';
import { 
  PremiumCard, 
  PremiumButton, 
  PremiumBadge,
  premiumAnimations 
} from './premium/PremiumDesignSystem';

const FooterNew: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // 뉴스레터 구독 처리
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 실제 구현에서는 API 호출
    setTimeout(() => {
      alert('뉴스레터 구독이 완료되었습니다!');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  // 맨 위로 스크롤
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white relative overflow-hidden">
      
      {/* Premium 배경 장식 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-500/8 to-primary-500/10 rounded-full blur-3xl"></div>
        
        {/* 떠다니는 스파클 */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Sparkles className="w-4 h-4 text-primary-300/30" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10">
        
        {/* Premium 비즈니스 통계 섹션 */}
        <div className="border-b border-gray-800/50">
          <div className="container-custom py-20">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <PremiumBadge variant="primary" size="lg" className="mb-6">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-bold">OUR ACHIEVEMENT</span>
                  <Award className="w-4 h-4" />
                </div>
              </PremiumBadge>
              
              <h2 className="text-4xl lg:text-5xl font-black mb-6 font-display bg-gradient-to-r from-white via-blue-100 to-primary-200 bg-clip-text text-transparent">
                30년간 쌓아온 신뢰와 성과
              </h2>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-body">
                수많은 프로젝트와 고객의 성공 스토리가 우리의 자신감입니다
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { 
                  icon: Building2, 
                  value: `${BUSINESS_STATS.totalProjects}+`, 
                  label: '완료 프로젝트',
                  color: 'from-blue-500 to-blue-600',
                  delay: 0
                },
                { 
                  icon: Users, 
                  value: `${BUSINESS_STATS.satisfactionRate}%`, 
                  label: '고객 만족도',
                  color: 'from-green-500 to-green-600',
                  delay: 0.1
                },
                { 
                  icon: Award, 
                  value: `${BUSINESS_STATS.experienceYears}+`, 
                  label: '년 경험',
                  color: 'from-purple-500 to-purple-600',
                  delay: 0.2
                },
                { 
                  icon: TrendingUp, 
                  value: `${new Date().getFullYear() - BUSINESS_STATS.establishedYear + 1}`, 
                  label: '년차 기업',
                  color: 'from-amber-500 to-amber-600',
                  delay: 0.3
                }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: stat.delay,
                    type: "spring",
                    stiffness: 300
                  }}
                  whileHover={{ y: -15, scale: 1.05 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <PremiumCard className="text-center h-full bg-gray-800/50 backdrop-blur-sm border-gray-700/50 premium-shadow-glow hover:premium-shadow-glow-intense transition-all duration-500">
                    <motion.div 
                      className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6 premium-shadow-glow`}
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      <stat.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <motion.div 
                      className="text-5xl font-black text-white mb-4 font-display"
                      animate={{ 
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    
                    <p className="text-gray-300 font-medium text-lg font-body group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </p>
                  </PremiumCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Premium 메인 푸터 컨텐츠 */}
        <div className="container-custom py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* 회사 정보 섹션 */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <motion.div 
                  className="flex items-center space-x-3 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white font-heading">
                    {COMPANY_INFO.name}
                  </h3>
                </motion.div>
                
                <p className="text-gray-300 leading-relaxed text-lg mb-6 font-body">
                  {COMPANY_INFO.description}을 통해 고객의 성공을 함께 만들어갑니다. 
                  30년 이상의 경험과 전문성으로 최고의 서비스를 제공합니다.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <PremiumBadge variant="secondary" className="bg-primary-900/50 text-primary-100">
                    <Shield className="w-4 h-4 mr-2" />
                    검증된 기술력
                  </PremiumBadge>
                  <PremiumBadge variant="secondary" className="bg-green-900/50 text-green-100">
                    <Zap className="w-4 h-4 mr-2" />
                    신속한 대응
                  </PremiumBadge>
                  <PremiumBadge variant="secondary" className="bg-purple-900/50 text-purple-100">
                    <Heart className="w-4 h-4 mr-2" />
                    고객 만족
                  </PremiumBadge>
                </div>
              </div>
            </motion.div>

            {/* 연락처 정보 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-bold text-white mb-8 font-heading">
                <MapPin className="inline-block w-6 h-6 mr-3 text-primary-400" />
                연락처
              </h4>
              
              <div className="space-y-6">
                {[
                  { icon: Phone, label: '전화', value: CONTACT_INFO.phone, link: `tel:${CONTACT_INFO.phone}` },
                  { icon: Mail, label: '이메일', value: CONTACT_INFO.email, link: `mailto:${CONTACT_INFO.email}` },
                  { icon: MapPin, label: '주소', value: COMPANY_INFO.address, link: null },
                  { icon: Clock, label: '운영시간', value: CONTACT_INFO.businessHours, link: null }
                ].map((contact, index) => (
                  <motion.div 
                    key={contact.label}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <contact.icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <dt className="text-sm text-gray-400 font-medium font-body">{contact.label}</dt>
                        {contact.link ? (
                          <dd>
                            <a 
                              href={contact.link}
                              className="text-white hover:text-primary-400 transition-colors duration-300 font-medium"
                            >
                              {contact.value}
                            </a>
                          </dd>
                        ) : (
                          <dd className="text-white font-medium">{contact.value}</dd>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Premium 뉴스레터 구독 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <PremiumCard className="bg-gradient-to-br from-primary-600/20 to-blue-600/20 backdrop-blur-sm border-primary-500/30 premium-shadow-glow">
                <div className="text-center mb-6">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-4"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Send className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h4 className="text-xl font-bold text-white mb-2 font-heading">
                    뉴스레터 구독
                  </h4>
                  <p className="text-gray-300 text-sm font-body">
                    최신 소식과 기술 정보를<br />받아보세요
                  </p>
                </div>
                
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <motion.div 
                    className="relative"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="이메일 주소를 입력하세요"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-primary-400 focus:bg-white/15 transition-all duration-300 font-body"
                      required
                    />
                  </motion.div>
                  
                  <PremiumButton
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>구독 중...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Send className="w-4 h-4" />
                        <span>구독하기</span>
                      </div>
                    )}
                  </PremiumButton>
                </form>
              </PremiumCard>
            </motion.div>
          </div>
        </div>

        {/* Premium 하단 섹션 */}
        <div className="border-t border-gray-800/50">
          <div className="container-custom py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              
              {/* 저작권 정보 */}
              <motion.div 
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-400 font-body">
                  © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
                </p>
                <p className="text-gray-500 text-sm mt-1 font-body">
                  사업자등록번호: {COMPANY_INFO.businessNumber} | 대표: {COMPANY_INFO.ceo}
                </p>
              </motion.div>

              {/* 맨 위로 버튼 */}
              <motion.button
                onClick={scrollToTop}
                className="group w-12 h-12 bg-primary-600 hover:bg-primary-500 rounded-2xl flex items-center justify-center transition-all duration-300 premium-shadow-glow hover:premium-shadow-glow-intense"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <ChevronUp className="w-6 h-6 text-white group-hover:translate-y-[-2px] transition-transform duration-300" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;