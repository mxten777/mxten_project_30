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
                <motion.a
                  href={`tel:${CONTACT_INFO.phone}`}
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
                </motion.a>
                <motion.a
                  href={`mailto:${CONTACT_INFO.emailDetail.primary}`}
                  className="flex items-center space-x-2 text-blue-200 group cursor-pointer hover:text-white transition-all duration-300"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <Mail className="w-4 h-4 transition-transform group-hover:rotate-12" />
                  <span className={`font-medium tracking-wide ${isTablet ? 'truncate' : 'inline'}`}>
                    {CONTACT_INFO.emailDetail.primary}
                  </span>
                </motion.a>
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
                  <span className="font-semibold whitespace-nowrap">ABB 파트너 30년+</span>
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
            ? 'fixed top-0 left-0 right-0 z-50 shadow-lg border-b border-blue-200/20 bg-white/95' 
            : 'relative bg-white/98'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* 헤더 배경 강화 */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/98 to-white/95 backdrop-blur-xl"></div>
        <div className="absolute inset-0 shadow-lg opacity-50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/50 to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="flex items-center justify-between py-5">
            
            {/* Premium 로고 및 회사명 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <Link to="/" className="flex items-center space-x-3 group">
                <motion.div 
                  className={`relative ${isMobile ? 'w-12 h-12' : 'w-14 h-14'} bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl opacity-80"></div>
                  <span className={`text-white font-bold ${isMobile ? 'text-xl' : 'text-2xl'} relative z-10 tracking-tight`}>MS</span>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/20 to-transparent"></div>
                </motion.div>
                <div className="space-y-1">
                  <motion.h1 
                    className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-gray-900 group-hover:text-blue-700 transition-all duration-300`}
                    whileHover={{ scale: 1.02 }}
                    style={{ 
                      fontFamily: "'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif",
                      fontWeight: 700,
                      letterSpacing: '-0.02em'
                    }}
                  >
                    만송시스템
                  </motion.h1>
                  <motion.p 
                    className="text-xs sm:text-sm text-gray-700 font-medium hidden sm:block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{ 
                      fontFamily: "'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif",
                      fontWeight: 500,
                      textShadow: 'none',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Premium Factory Automation Solutions
                  </motion.p>
                </div>
              </Link>
            </motion.div>

            {/* Premium 연락처 정보 (데스크톱 전용) */}
            {isDesktop && (
              <motion.div 
                className="flex items-center space-x-3 flex-shrink-0"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="w-3.5 h-3.5 transition-transform group-hover:rotate-12" />
                  <span className="font-semibold text-xs whitespace-nowrap">{CONTACT_INFO.phone}</span>
                </motion.a>
                <motion.a
                  href={`mailto:${CONTACT_INFO.emailDetail.primary}`}
                  className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-green-50 to-blue-50 text-green-700 hover:from-green-100 hover:to-blue-100 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-3.5 h-3.5 transition-transform group-hover:rotate-12" />
                  <span className="font-semibold text-xs whitespace-nowrap">메일 상담</span>
                </motion.a>
              </motion.div>
            )}

            {/* Premium 데스크톱 네비게이션 */}
            <motion.nav 
              className="hidden lg:flex items-center space-x-1 flex-1 justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="relative px-3 py-2 text-gray-800 hover:text-blue-700 font-medium transition-all duration-300 group rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 text-sm whitespace-nowrap"
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
                    fontFamily: "'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                    fontWeight: 600,
                    letterSpacing: '-0.01em'
                  }}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Premium hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-purple-500/50 opacity-0 group-hover:opacity-20 rounded-xl"
                    initial={false}
                    whileHover={{ 
                      opacity: 0.2,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Premium underline */}
                  <motion.div
                    className="absolute -bottom-1 left-1/2 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full"
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
                className="ml-3 flex-shrink-0"
              >
                <PremiumButton
                  variant="primary"
                  size="sm"
                  onClick={() => scrollToElement('contact')}
                  className="shadow-lg text-sm px-4 py-2 whitespace-nowrap"
                  icon={<Sparkles className="w-3.5 h-3.5" />}
                >
                  무료 상담
                </PremiumButton>
              </motion.div>
            </motion.nav>

            {/* Premium 모바일 메뉴 버튼 - 터치 최적화 */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative p-4 min-w-[48px] min-h-[48px] text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-xl bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 active:bg-blue-50"
              aria-label="메뉴 열기/닫기"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
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
              className="fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-xl border-l border-blue-200/20 z-50 lg:hidden overflow-y-auto shadow-xl"
            >
              {/* Premium background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-500/10 opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95"></div>
              
              <div className="relative p-6">
                {/* Premium 모바일 헤더 */}
                <motion.div 
                  className="flex items-center justify-between pb-6 border-b border-blue-200/20"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span className="text-white font-bold text-lg">MS</span>
                    </motion.div>
                    <div>
                      <h2 className="text-xl font-black text-gray-900">만송시스템</h2>
                      <p className="text-xs text-gray-700 font-medium">Premium Factory Automation</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5 text-gray-700" />
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
                      className="w-full text-left px-6 py-5 min-h-[56px] rounded-xl text-gray-700 hover:text-blue-700 active:text-blue-800 bg-white/90 backdrop-blur-sm hover:shadow-lg active:bg-blue-50 transition-all duration-300 font-semibold tracking-wide group relative overflow-hidden touch-manipulation"
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ 
                        delay: index * 0.1 + 0.3,
                        type: "spring",
                        stiffness: 300
                      }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <div className="relative z-10 flex items-center justify-between">
                        <span>{item.label}</span>
                        <motion.div
                          className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100"
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
                        className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-purple-500/50 opacity-0 group-hover:opacity-10 rounded-xl"
                        initial={false}
                        whileHover={{ 
                          opacity: 0.1,
                          scale: 1.05
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Side accent */}
                      <motion.div
                        className="absolute left-0 top-1/2 w-1 h-0 bg-gradient-to-b from-blue-600 to-purple-700 rounded-r-full"
                        whileHover={{ 
                          height: "60%",
                          y: "-50%"
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </motion.button>
                  ))}
                </motion.nav>

                {/* Premium 모바일 연락처 정보 */}
                <motion.div 
                  className="py-6 border-t border-blue-200/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">연락처 정보</h3>
                  <div className="space-y-3">
                    <motion.a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 group"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
                      <div>
                        <div className="font-semibold">{CONTACT_INFO.phone}</div>
                        <div className="text-xs text-blue-600">전화 상담 (터치하여 통화)</div>
                      </div>
                    </motion.a>
                    
                    <motion.a
                      href={`mailto:${CONTACT_INFO.emailDetail.primary}`}
                      className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-green-50 to-blue-50 text-green-700 hover:from-green-100 hover:to-blue-100 transition-all duration-300 group"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Mail className="w-5 h-5 transition-transform group-hover:rotate-12" />
                      <div>
                        <div className="font-semibold text-sm">{CONTACT_INFO.emailDetail.primary}</div>
                        <div className="text-xs text-green-600">이메일 상담 (터치하여 메일 작성)</div>
                      </div>
                    </motion.a>
                  </div>
                </motion.div>

                {/* Premium 모바일 CTA 버튼 */}
                <motion.div 
                  className="space-y-4 pt-6 border-t border-blue-200/20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <PremiumButton
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      scrollToElement('contact');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full shadow-lg"
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
                    className="w-full shadow-lg"
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
                    className="flex items-center space-x-4 p-3 bg-white/80 rounded-xl group hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm group-hover:text-blue-700 transition-colors">
                      {CONTACT_INFO.phone}
                    </span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center space-x-4 p-3 bg-white/80 rounded-xl group hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm group-hover:text-blue-700 transition-colors">
                      {CONTACT_INFO.email}
                    </span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center space-x-4 p-3 bg-white/80 rounded-xl group hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm group-hover:text-blue-700 transition-colors">
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
                  <div className="flex items-center space-x-2 text-yellow-600 text-sm font-semibold">
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