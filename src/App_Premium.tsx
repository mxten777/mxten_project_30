// App_Premium.tsx - 만송시스템 메인 애플리케이션
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ScreenSizeProvider } from './utils/ResponsiveUtils';

// 컴포넌트 lazy 로딩
const LandingPage = lazy(() => import('./pages/LandingPage'));
const OrderPage = lazy(() => import('./pages/OrderPage'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

// 로딩 컴포넌트
const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600 font-medium">로딩 중...</p>
    </div>
  </div>
);

// 에러 폴백 컴포넌트
const ErrorFallback: React.FC<{ error: Error; resetErrorBoundary: () => void }> = ({ 
  error, 
  resetErrorBoundary 
}) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
    <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-2xl">⚠️</span>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        문제가 발생했습니다
      </h2>
      
      <p className="text-gray-600 mb-6">
        페이지를 불러오는 중 오류가 발생했습니다.
      </p>
      
      <details className="text-left mb-6">
        <summary className="cursor-pointer text-sm text-gray-500 mb-2">
          기술적 세부사항 보기
        </summary>
        <pre className="text-xs text-red-600 bg-red-50 p-3 rounded overflow-auto">
          {error.message}
        </pre>
      </details>
      
      <div className="space-y-3">
        <button
          onClick={resetErrorBoundary}
          className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
          다시 시도
        </button>
        
        <button
          onClick={() => window.location.href = '/'}
          className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          홈으로 이동
        </button>
      </div>
    </div>
  </div>
);

// 메인 앱 컴포넌트
const App: React.FC = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        console.error('Application Error:', error, errorInfo);
      }}
      onReset={() => {
        window.location.reload();
      }}
    >
      <ScreenSizeProvider>
        <Router>
          <div className="App">
            {/* 접근성: Skip Navigation Link */}
            <a 
              href="#main-content" 
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:z-50"
            >
              메인 콘텐츠로 건너뛰기
            </a>
            
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="*" element={
                  <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-4xl">🔍</span>
                      </div>
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                      <p className="text-gray-600 mb-8">요청하신 페이지를 찾을 수 없습니다.</p>
                      <button
                        onClick={() => window.location.href = '/'}
                        className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        홈으로 이동
                      </button>
                    </div>
                  </div>
                } />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </ScreenSizeProvider>
    </ErrorBoundary>
  );
};

export default App;