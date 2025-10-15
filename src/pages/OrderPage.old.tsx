// OrderPage.tsx - 주문 접수 페이지
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const OrderPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white shadow-sm">
        <div className="container-custom py-4">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>홈으로 돌아가기</span>
          </Link>
        </div>
      </div>

      <div className="container-custom py-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          온라인 주문 접수
        </h1>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🚧</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">개발 진행 중</h2>
            <p className="text-gray-600 mb-6">
              주문 접수 시스템이 곧 준비됩니다.<br />
              현재 React Hook Form 기반으로 개발 중입니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">📝 예정 기능</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 4단계 주문 접수 폼</li>
                  <li>• 실시간 입력 검증</li>
                  <li>• 파일 첨부 기능</li>
                  <li>• 주문 번호 자동 생성</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">📞 임시 연락처</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>전화: 041-XXX-XXXX</p>
                  <p>이메일: info@mansongsystem.co.kr</p>
                  <p>운영시간: 평일 09:00-18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;