// HeaderNew.tsx - 헤더 및 네비게이션 컴포넌트
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Clock, Menu, X, ChevronDown } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { scrollToElement } from '../utils';

const HeaderNew: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

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
      {/* 상단 연락처 바 */}
      <div className={`bg-primary-500 text-white transition-all duration-300 ${
        isScrolled ? 'h-0 overflow-hidden' : 'h-auto'
      }`}>
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{CONTACT_INFO.workingHours}</span>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <span className="text-yellow-200">⭐ ABB 공식 파트너 30년+ 경험</span>
            </div>
          </div>
        </div>
      </div>

      {/* 메인 헤더 */}
      <div className={`bg-white shadow-lg transition-all duration-300 ${
        isScrolled ? 'fixed top-0 left-0 right-0 z-50 shadow-xl' : 'relative'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            
            {/* 로고 및 회사명 */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-xl">MS</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 group-hover:text-primary-500 transition-colors">
                  만송시스템
                </h1>
                <p className="text-sm text-gray-500 hidden sm:block">
                  Factory Automation Solutions
                </p>
              </div>
            </Link>

            {/* 데스크톱 네비게이션 */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200 relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              ))}
            </nav>

            {/* CTA 버튼 */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.button
                onClick={() => navigate('/order')}
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                견적 문의
              </motion.button>
              <motion.button
                onClick={() => navigate('/order')}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                무료 상담
              </motion.button>
            </div>

            {/* 모바일 메뉴 버튼 */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="메뉴 열기/닫기"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

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

            {/* 메뉴 패널 */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* 모바일 헤더 */}
                <div className="flex items-center justify-between pb-6 border-b">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">MS</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">만송시스템</h2>
                      <p className="text-xs text-gray-500">Factory Automation</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* 모바일 네비게이션 */}
                <nav className="py-6 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.label}
                      onClick={() => handleNavClick(item)}
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-all duration-200 font-medium"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>

                {/* 모바일 CTA 버튼 */}
                <div className="space-y-3 pt-6 border-t">
                  <motion.button
                    onClick={() => {
                      navigate('/order');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full btn-secondary text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    견적 문의
                  </motion.button>
                  <motion.button
                    onClick={() => {
                      navigate('/order');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full btn-primary text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    무료 상담 신청
                  </motion.button>
                </div>

                {/* 모바일 연락처 */}
                <div className="pt-6 space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{CONTACT_INFO.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>{CONTACT_INFO.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{CONTACT_INFO.workingHours}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderNew;