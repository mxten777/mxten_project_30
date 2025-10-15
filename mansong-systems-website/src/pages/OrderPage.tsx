// OrderPage.tsx - 주문 접수 페이지
import React from 'react';

const OrderPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          온라인 주문 접수
        </h1>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <p className="text-center text-gray-600">
            주문 접수 폼이 곧 준비됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;