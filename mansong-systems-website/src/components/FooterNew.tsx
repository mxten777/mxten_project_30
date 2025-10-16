// FooterNew.tsx - 푸터 컴포넌트
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, Send, 
  ExternalLink, ChevronUp, Building2, 
  Award, TrendingUp, Users
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { COMPANY_INFO, CONTACT_INFO, BUSINESS_STATS } from '../data';
import { scrollToElement } from '../utils';

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
      
      {/* 배경 장식 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        
        {/* 비즈니스 통계 섹션 */}
        <div className="border-b border-gray-800">
          <div className="container-custom py-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-gradient">신뢰할 수 있는 파트너</span>
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                화학공장 자동화 분야에서 축적한 전문성과 성과를 바탕으로 최고의 솔루션을 제공합니다
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: TrendingUp,
                  number: `${BUSINESS_STATS.totalProjects}+`,
                  label: '완료 프로젝트',
                  sublabel: '지속적인 성장'
                },
                {
                  icon: Users,
                  number: `${BUSINESS_STATS.satisfactionRate}%`,
                  label: '고객 만족도',
                  sublabel: '높은 신뢰도'
                },
                {
                  icon: Award,
                  number: `${BUSINESS_STATS.experienceYears}년+`,
                  label: 'ABB 경험',
                  sublabel: '검증된 전문성'
                },
                {
                  icon: Building2,
                  number: `${new Date().getFullYear() - BUSINESS_STATS.establishedYear + 1}년차`,
                  label: '기업 운영',
                  sublabel: '안정적 성장'
                }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 font-medium mb-1">{stat.label}</div>
                  <div className="text-gray-500 text-sm">{stat.sublabel}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 메인 푸터 콘텐츠 */}
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* 회사 정보 */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <span className="text-white font-bold text-xl">MS</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">만송시스템</h3>
                  <p className="text-gray-400 text-sm">Factory Automation</p>
                </div>
              </Link>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                {COMPANY_INFO.description}을 통해 고객의 성공을 함께 만들어갑니다.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Building2 className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">대표: {COMPANY_INFO.ceo}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Award className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">사업자: {COMPANY_INFO.businessNumber}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <TrendingUp className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">설립: {COMPANY_INFO.establishedDate}</span>
                </div>
              </div>
            </div>

            {/* 서비스 링크 */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">서비스</h4>
              <ul className="space-y-3">
                {[
                  { label: '시스템 설계 및 구축', action: () => scrollToElement('services') },
                  { label: '현장 모니터링 솔루션', action: () => scrollToElement('services') },
                  { label: '관제 시스템 구축', action: () => scrollToElement('services') },
                  { label: '교육 및 유지보수', action: () => scrollToElement('services') },
                  { label: '견적 문의', action: () => navigate('/order') },
                  { label: '포트폴리오', action: () => scrollToElement('testimonials') }
                ].map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={item.action}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <span>{item.label}</span>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* 고객 지원 */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">고객 지원</h4>
              <ul className="space-y-3 mb-6">
                <li>
                  <button
                    onClick={() => navigate('/order')}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    온라인 주문 접수
                  </button>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    자주 묻는 질문
                  </a>
                </li>
                <li>
                  <a
                    href="/downloads"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    자료 다운로드
                  </a>
                </li>
                <li>
                  <a
                    href="/support"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    기술 지원
                  </a>
                </li>
              </ul>
              
              {/* 연락처 정보 */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">{CONTACT_INFO.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">{CONTACT_INFO.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">{CONTACT_INFO.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">{CONTACT_INFO.workingHours}</span>
                </div>
              </div>
            </div>

            {/* 뉴스레터 & 소셜 미디어 */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">소식 받기</h4>
              
              <form onSubmit={handleNewsletterSubmit} className="mb-6">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="이메일 주소 입력"
                    className="flex-1 bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary-500 hover:bg-primary-600 px-4 py-3 rounded-r-lg transition-colors duration-200 disabled:opacity-50"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  최신 기술 동향과 프로젝트 소식을 받아보세요
                </p>
              </form>

              {/* 소셜 미디어 */}
              <div>
                <h5 className="text-lg font-semibold text-white mb-4">팔로우하기</h5>
                <div className="flex space-x-3">
                  {[
                    { name: '카카오톡', url: CONTACT_INFO.socialMedia.kakao, color: 'bg-yellow-500' },
                    { name: '블로그', url: CONTACT_INFO.socialMedia.blog, color: 'bg-green-500' },
                    { name: '유튜브', url: CONTACT_INFO.socialMedia.youtube, color: 'bg-red-500' },
                    { name: '링크드인', url: CONTACT_INFO.socialMedia.linkedin, color: 'bg-blue-600' }
                  ].map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 ${social.color} rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-200`}
                      aria-label={social.name}
                    >
                      <span className="text-sm font-bold">
                        {social.name.charAt(0)}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 카피라이트 */}
        <div className="border-t border-gray-800">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} 만송시스템. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6">
                <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  개인정보처리방침
                </a>
                <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  이용약관
                </a>
                <button
                  onClick={scrollToTop}
                  className="w-8 h-8 bg-gray-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="맨 위로"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;