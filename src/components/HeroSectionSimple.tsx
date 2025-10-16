// HeroSection.tsx - 히어로 섹션 컴포넌트
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BUSINESS_STATS } from '../data';
import { scrollToElement } from '../utils';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  // 통계 데이터
  const stats = [
    {
      icon: TrendingUp,
      number: `${BUSINESS_STATS.totalProjects}+`,
      label: '대기업 프로젝트 완료',
      color: 'text-blue-500'
    },
    {
      icon: Users,
      number: `${BUSINESS_STATS.satisfactionRate}%`,
      label: '고객 만족도 달성',
      color: 'text-green-500'
    },
    {
      icon: Award,
      number: `${BUSINESS_STATS.experienceYears}년+`,
      label: 'ABB 파트너십 유지',
      color: 'text-yellow-500'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50">
      
      {/* 배경 애니메이션 요소들 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-20 animate-bounce-gentle"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-100 to-blue-100 rounded-full blur-3xl opacity-10 animate-spin slow"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center">
          
          {/* 배지 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-50 via-white to-yellow-50 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-yellow-200"
          >
            <Award className="w-5 h-5 text-yellow-600" />
            <span className="text-sm font-bold text-gray-800">
              🏆 ABB 코리아 공식 파트너 • 산업자동화 1위
            </span>
          </motion.div>

          {/* 메인 헤드라인 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            <span className="block">공장 자동화의</span>
            <span className="text-gradient">새로운 기준</span>
          </motion.h1>

          {/* 서브 헤드라인 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            <span className="font-medium text-gray-700">DCS · SCADA · HMI 전문기업</span><br />
            <span className="font-semibold text-primary-600">ABB 파트너십</span>으로 검증된 <span className="font-bold text-gray-800">산업용 자동화 솔루션</span>
          </motion.p>

          {/* CTA 버튼들 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <motion.button
              onClick={() => navigate('/order')}
              className="btn-primary group flex items-center space-x-2 text-lg px-8 py-4 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-bold">무료 현장 진단 받기</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              onClick={() => scrollToElement('services')}
              className="btn-secondary text-lg px-8 py-4 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              30년 포트폴리오 보기
            </motion.button>
          </motion.div>

          {/* 통계 카드들 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                  className="text-3xl font-bold text-gray-900 mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;