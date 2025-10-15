// HeaderNew.tsx - 프리미엄 헤더 및 네비게이션 컴포넌트
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Clock, Menu, X, Award, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { scrollToElement } from '../utils';
import { useScreenSize } from '../utils/ResponsiveUtils';
import { PremiumButton, premiumAnimations } from './premium/PremiumDesignSystem';

const HeaderNew: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  // 스크롤 이벤트 처리
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 네비게이션 항목들
  const navItems = [
    { label: '홈', href: '/', type: 'link' },
    { label: '회사소개', href: '#about', type: 'scroll' },
    { label: '서비스', href: '#services', type: 'scroll' },
    { label: '고객후기', href: '#testimonials', type: 'scroll' },
    { label: '주문하기', href: '/order', type: 'link' },
    { label: '문의', href: '#contact', type: 'scroll' }
  ];

  // 네비게이션 클릭 처리
  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.type === 'link') {
      navigate(item.href);
    } else if (item.type === 'scroll') {
      scrollToElement(item.href.slice(1));
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative">
      {/* Premium 상단 연락처 바 */}
      {!isMobile && (
        <motion.div 
          className={`bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white transition-all duration-500 relative overflow-hidden shadow-lg ${
            isScrolled ? 'h-0 opacity-0' : 'h-auto opacity-100'
          }`}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: isScrolled ? 0 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* 배경 장식 */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
          
          <div className="container-custom relative">
            <div className="flex flex-wrap items-center justify-between py-3 text-sm">
              <motion.div 
                className={`flex items-center ${isMobile ? 'space-x-3' : 'space-x-8'}`}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                  }
                }}
                initial="hidden"
                animate="visible"
              >
                <motion.div 
                  className="flex items-center space-x-2 text-blue-200 group cursor-pointer hover:text-white transition-all duration-300"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <Phone className="w-4 h-4 transition-transform group-hover:rotate-12" />
                  <span className={`font-medium tracking-wide ${isMobile ? 'hidden' : 'inline'}`}>
                    {CONTACT_INFO.phone}
                  </span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-2 text-blue-200 group cursor-pointer hover:text-white transition-all duration-300"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <Mail className="w-4 h-4 transition-transform group-hover:rotate-12" />
                  <span className={`font-medium tracking-wide ${isTablet ? 'truncate' : 'inline'}`}>
                    {CONTACT_INFO.email}
                  </span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-2 text-blue-200"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <Clock className="w-4 h-4" />
                  <span className="font-medium tracking-wide">{CONTACT_INFO.workingHours}</span>
                </motion.div>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center space-x-2 text-yellow-200">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-semibold">ABB 공식 파트너 30년+ 경험</span>
                </div>
                <PremiumButton
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate('/admin')}
                  className="text-blue-200 hover:text-white bg-blue-800/30 hover:bg-blue-700/50 border border-blue-300/30"
                  icon={<Award className="w-4 h-4" />}
                >
                  관리자
                </PremiumButton>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Premium 메인 헤더 */}
      <motion.div 
        className={`backdrop-blur-xl transition-all duration-500 relative ${
          isScrolled 
            ? 'fixed top-0 left-0 right-0 z-50 premium-shadow-glow border-b premium-border-primary/20 bg-white/95' 
            : 'relative bg-white/98'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* 헤더 배경 강화 */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/98 to-white/95 backdrop-blur-xl"></div>
        <div className="absolute inset-0 premium-shadow-glow opacity-50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/50 to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="flex items-center justify-between py-5">
            
            {/* Premium 로고 및 회사명 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link to="/" className="flex items-center space-x-4 group">
                <motion.div 
                  className="relative w-14 h-14 premium-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 premium-shadow-glow"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 premium-gradient-primary rounded-2xl opacity-80"></div>
                  <span className="text-white font-bold text-2xl relative z-10 tracking-tight">MS</span>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/20 to-transparent"></div>
                </motion.div>
                <div className="space-y-1">
                  <motion.h1 
                    className="text-3xl font-black text-gray-900 group-hover:text-blue-700 transition-all duration-300 tracking-tight font-display"
                    whileHover={{ scale: 1.02 }}
                    style={{ 
                      textShadow: '0 1px 2px rgba(255,255,255,0.9), 0 2px 8px rgba(0,0,0,0.1)',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    만송시스템
                  </motion.h1>
                  <motion.p 
                    className="text-sm text-gray-600 font-medium tracking-wide hidden sm:block font-body"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{ 
                      textShadow: '0 1px 2px rgba(255,255,255,0.8)',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Premium Factory Automation Solutions
                  </motion.p>
                </div>
              </Link>
            </motion.div>

            {/* Premium 데스크톱 네비게이션 */}
            <motion.nav 
              className="hidden lg:flex items-center space-x-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="relative px-4 py-2 text-gray-700 hover:text-blue-700 font-semibold transition-all duration-300 group rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 font-heading"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1 + 0.5,
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  style={{ 
                    textShadow: '0 1px 2px rgba(255,255,255,0.8)',
                    letterSpacing: '0.02em'
                  }}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Premium hover effect */}
                  <motion.div
                    className="absolute inset-0 premium-gradient-primary-light opacity-0 group-hover:opacity-20 rounded-xl"
                    initial={false}
                    whileHover={{ 
                      opacity: 0.2,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Premium underline */}
                  <motion.div
                    className="absolute -bottom-1 left-1/2 w-0 h-1 premium-gradient-primary rounded-full"
                    whileHover={{ 
                      width: "80%",
                      x: "-50%"
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  
                  {/* Sparkle effect */}
                  <motion.div
                    className="absolute top-1 right-1 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{ 
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  />
                </motion.button>
              ))}
              
              {/* Premium CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="ml-6"
              >
                <PremiumButton
                  variant="primary"
                  size="sm"
                  onClick={() => scrollToElement('contact')}
                  className="premium-shadow-glow"
                  icon={<Sparkles className="w-4 h-4" />}
                >
                  무료 상담
                </PremiumButton>
              </motion.div>
            </motion.nav>

            {/* Premium 모바일 메뉴 버튼 */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative p-3 premium-text-secondary hover:premium-text-primary focus:outline-none rounded-xl premium-glass-subtle hover:premium-shadow-glow transition-all duration-300"
              aria-label="메뉴 열기/닫기"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.div>
              
              {/* Premium glow effect */}
              <div className="absolute inset-0 premium-gradient-primary opacity-0 hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* 백드롭 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            />

            {/* Premium 메뉴 패널 */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 30,
                opacity: { duration: 0.2 }
              }}
              className="fixed top-0 right-0 h-full w-80 premium-glass backdrop-blur-xl border-l premium-border-primary/20 z-50 lg:hidden overflow-y-auto premium-shadow-glow"
            >
              {/* Premium background gradient */}
              <div className="absolute inset-0 premium-gradient-primary-light opacity-5"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95"></div>
              
              <div className="relative p-6">
                {/* Premium 모바일 헤더 */}
                <motion.div 
                  className="flex items-center justify-between pb-6 border-b premium-border-primary/10"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="w-12 h-12 premium-gradient-primary rounded-2xl flex items-center justify-center premium-shadow-glow"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span className="text-white font-bold text-lg">MS</span>
                    </motion.div>
                    <div>
                      <h2 className="text-xl font-black premium-text-primary">만송시스템</h2>
                      <p className="text-xs premium-text-secondary font-medium">Premium Factory Automation</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-xl premium-glass-subtle hover:premium-shadow-glow transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5 premium-text-secondary" />
                  </motion.button>
                </motion.div>

                {/* 모바일 네비게이션 */}
                {/* Premium 모바일 네비게이션 */}
                <motion.nav 
                  className="py-8 space-y-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.label}
                      onClick={() => {
                        handleNavClick(item);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left px-5 py-4 rounded-xl premium-text-secondary hover:premium-text-primary premium-glass-subtle hover:premium-shadow-glow transition-all duration-300 font-semibold tracking-wide group relative overflow-hidden"
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ 
                        delay: index * 0.1 + 0.3,
                        type: "spring",
                        stiffness: 300
                      }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="relative z-10 flex items-center justify-between">
                        <span>{item.label}</span>
                        <motion.div
                          className="w-2 h-2 premium-gradient-primary rounded-full opacity-0 group-hover:opacity-100"
                          initial={false}
                          animate={{ scale: [0, 1, 0] }}
                          transition={{ 
                            duration: 1.5,
                            repeat: Infinity,
                            delay: index * 0.2
                          }}
                        />
                      </div>
                      
                      {/* Premium background effect */}
                      <motion.div
                        className="absolute inset-0 premium-gradient-primary-light opacity-0 group-hover:opacity-10 rounded-xl"
                        initial={false}
                        whileHover={{ 
                          opacity: 0.1,
                          scale: 1.05
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Side accent */}
                      <motion.div
                        className="absolute left-0 top-1/2 w-1 h-0 premium-gradient-primary rounded-r-full"
                        whileHover={{ 
                          height: "60%",
                          y: "-50%"
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </motion.button>
                  ))}
                </motion.nav>

                {/* Premium 모바일 CTA 버튼 */}
                <motion.div 
                  className="space-y-4 pt-8 border-t premium-border-primary/10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <PremiumButton
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      navigate('/order');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full premium-shadow-glow"
                    icon={<Mail className="w-5 h-5" />}
                  >
                    견적 문의
                  </PremiumButton>
                  
                  <PremiumButton
                    variant="primary"
                    size="lg"
                    onClick={() => {
                      scrollToElement('contact');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full premium-shadow-glow"
                    icon={<Sparkles className="w-5 h-5" />}
                  >
                    무료 상담 신청
                  </PremiumButton>
                </motion.div>

                {/* Premium 모바일 연락처 */}
                <motion.div 
                  className="pt-8 space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <motion.div 
                    className="flex items-center space-x-4 p-3 premium-glass-subtle rounded-xl group hover:premium-shadow-glow transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="w-8 h-8 premium-gradient-primary rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <span className="premium-text-secondary font-medium text-sm group-hover:premium-text-primary transition-colors">
                      {CONTACT_INFO.phone}
                    </span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center space-x-4 p-3 premium-glass-subtle rounded-xl group hover:premium-shadow-glow transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="w-8 h-8 premium-gradient-primary rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <span className="premium-text-secondary font-medium text-sm group-hover:premium-text-primary transition-colors">
                      {CONTACT_INFO.email}
                    </span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center space-x-4 p-3 premium-glass-subtle rounded-xl group hover:premium-shadow-glow transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="w-8 h-8 premium-gradient-primary rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <span className="premium-text-secondary font-medium text-sm group-hover:premium-text-primary transition-colors">
                      {CONTACT_INFO.workingHours}
                    </span>
                  </motion.div>
                </motion.div>
                
                {/* Premium decoration */}
                <motion.div
                  className="flex justify-center pt-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <div className="flex items-center space-x-2 premium-text-accent text-sm font-semibold">
                    <Award className="w-4 h-4" />
                    <span>30년+ 전문 경험</span>
                    <Sparkles className="w-4 h-4" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderNew;