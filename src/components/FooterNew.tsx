import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ChevronUp } from 'lucide-react';

const FooterNew: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* 회사 정보 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">MSS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-400">만송시스템주식회사</h3>
                <p className="text-xs text-gray-400">Mansong System Co., Ltd.</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              데이터시스템 구축 전문기업으로<br />
              고객의 성공을 위한 최적의 솔루션을 제공합니다.
            </p>
            <div className="text-sm text-gray-400">
              <p>대표이사 임영무(CEO)</p>
            </div>
          </motion.div>

          {/* 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">연락처</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <a 
                  href="tel:010-5264-8027" 
                  className="hover:text-blue-400 active:text-blue-300 transition-colors py-2 px-1 -mx-1 rounded touch-manipulation text-lg md:text-base"
                >
                  010-5264-8027
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <div className="text-sm space-y-1">
                  <div>
                    <a 
                      href="mailto:limyoungmu@hanmail.net" 
                      className="hover:text-blue-400 active:text-blue-300 transition-colors py-1 px-1 -mx-1 rounded touch-manipulation inline-block"
                    >
                      limyoungmu@hanmail.net
                    </a>
                  </div>
                  <div>
                    <a 
                      href="mailto:limyoungmoo@mansong.kr" 
                      className="hover:text-blue-400 active:text-blue-300 transition-colors py-1 px-1 -mx-1 rounded touch-manipulation inline-block"
                    >
                      limyoungmoo@mansong.kr
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-blue-400 mt-1" />
                <div className="text-sm">
                  <div className="font-medium text-white mb-1">본사</div>
                  <div>(31471) 충남 천안시 서북구<br />광정로 210, B212호</div>
                  <div className="font-medium text-white mt-2 mb-1">지사</div>
                  <div>(44715) 울산광역시 남구<br />돋질합로 162, 테인빌딩 906호</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-blue-400" />
                <span>평일 09:00 - 18:00</span>
              </div>
            </div>
          </motion.div>

          {/* 서비스 메뉴 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">서비스</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">시스템 통합</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">데이터 솔루션</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">기술 컨설팅</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">유지보수</a></li>
            </ul>
          </motion.div>
        </div>

        {/* 하단 저작권 및 맨 위로 버튼 */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} 만송시스템주식회사. All rights reserved.
            </div>
            <motion.button
              onClick={scrollToTop}
              className="w-14 h-14 min-w-[48px] min-h-[48px] bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl flex items-center justify-center transition-colors duration-300 touch-manipulation"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="페이지 맨 위로"
            >
              <ChevronUp className="w-6 h-6 text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;