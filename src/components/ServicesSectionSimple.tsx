// ServicesSection.tsx - 서비스 섹션
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Settings, Monitor, Command, GraduationCap, ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../data';
import { formatPrice } from '../utils';

const ServicesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const navigate = useNavigate();

  // 아이콘 매핑
  const iconMap = {
    Settings,
    Monitor,
    Command,
    GraduationCap
  };

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        
        {/* 섹션 헤더 */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
            <Settings className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-600">SERVICES</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="block">화학공장 자동화</span>
            <span className="text-gradient">전문 솔루션</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="font-bold text-gray-800">DCS · SCADA · HMI</span> 시스템부터 <span className="font-semibold text-primary-600">통합관제실</span>까지<br />
            <span className="font-medium">30년 노하우</span>로 안전하고 효율적인 플랜트를 완성합니다
          </p>
        </motion.div>

        {/* 서비스 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                
                {/* 배경 그라디언트 */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-500/5 to-primary-600/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* 서비스 헤더 */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      {service.price && (
                        <div className="text-sm text-primary-600 font-semibold">
                          {formatPrice(service.price.min)} ~
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* 서비스 설명 */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* 특징 리스트 */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.4 + index * 0.2 + featureIndex * 0.1 
                      }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA 버튼 */}
                <motion.button
                  onClick={() => navigate('/order')}
                  className="w-full btn-primary group/btn flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>견적 문의</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>

                {/* 호버 효과 보더 */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-200 transition-colors duration-300"></div>
              </motion.div>
            );
          })}
        </div>

        {/* 프로세스 플로우 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            <span className="block text-2xl font-medium text-primary-600 mb-2">화학공장 자동화 프로젝트</span>
            검증된 5단계 프로세스
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: '01', title: '현장진단', desc: 'P&ID 분석 및 공정 최적화 컨설팅' },
              { step: '02', title: 'DCS설계', desc: 'ABB 800xA 기반 통합제어시스템 설계' },
              { step: '03', title: '시스템구축', desc: 'SCADA·HMI·SIS 통합 플랫폼 구축' },
              { step: '04', title: '운전교육', desc: '운전원 대상 실무 운전교육 및 매뉴얼 제공' },
              { step: '05', title: 'A/S지원', desc: '24시간 원격지원 및 예방정비 서비스' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{process.desc}</p>
                
                {/* 연결선 (마지막 제외) */}
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-6 h-0.5 bg-gray-300 transform translate-x-2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;