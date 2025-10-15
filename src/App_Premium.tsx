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
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600 font-medium">로딩 중...</p>
    </div>
  </div>
);

// 에러 폴백 컴포넌트
const ErrorFallback: React.FC<{ error: Error; resetErrorBoundary: () => void }> = ({
  error,
  resetErrorBoundary,
}) => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="max-w-md mx-auto text-center p-8">
      <div className="mb-6">
        <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">오류가 발생했습니다</h2>
      <p className="text-gray-600 mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="btn-primary"
      >
        다시 시도
      </button>
    </div>
  </div>
);

// 메인 App 컴포넌트
const App_Premium: React.FC = () => {
  return (
    <ScreenSizeProvider>
      <Router>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <div className="min-h-screen bg-white">
          {/* SEO 메타데이터 */}
          <Helmet>
            <title>만송시스템 - 공장자동화 전문기업 | ABB 파트너</title>
            <meta
              name="description"
              content="30년+ ABB 경험을 바탕으로 공장 자동화 현장 모니터링 및 관제 시스템을 제공하는 만송시스템입니다."
            />
            <meta
              name="keywords"
              content="공장자동화, ABB, 현장모니터링, 관제시스템, 만송시스템, 충남아산"
            />
            <meta name="author" content="만송시스템" />
            <meta name="robots" content="index, follow" />
            
            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="만송시스템 - 공장자동화 전문기업" />
            <meta
              property="og:description"
              content="30년+ ABB 경험을 바탕으로 공장 자동화 현장 모니터링 및 관제 시스템을 제공합니다."
            />
            <meta property="og:image" content="/images/og-image.jpg" />
            <meta property="og:url" content="https://mansongsystem.co.kr" />
            
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="만송시스템 - 공장자동화 전문기업" />
            <meta
              name="twitter:description"
              content="30년+ ABB 경험을 바탕으로 공장 자동화 현장 모니터링 및 관제 시스템을 제공합니다."
            />
            <meta name="twitter:image" content="/images/twitter-image.jpg" />
            
            {/* 구조화된 데이터 */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "만송시스템",
                "url": "https://mansongsystem.co.kr",
                "logo": "https://mansongsystem.co.kr/logo.png",
                "description": "공장 자동화 현장 모니터링 및 관제 시스템 전문 기업",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "아산시",
                  "addressRegion": "충청남도",
                  "addressCountry": "KR"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+82-41-XXX-XXXX",
                  "contactType": "customer service",
                  "availableLanguage": "Korean"
                },
                "foundingDate": "2021-03-02",
                "employee": "임영무",
                "sameAs": [
                  "https://blog.naver.com/mansong",
                  "https://linkedin.com/company/mansong"
                ]
              })}
            </script>
          </Helmet>

          {/* 메인 라우팅 */}
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/admin" element={<AdminDashboard />} />
              
              {/* 404 페이지 */}
              <Route
                path="*"
                element={
                  <div className="flex items-center justify-center min-h-screen bg-gray-50">
                    <div className="max-w-md mx-auto text-center p-8">
                      <div className="mb-6">
                        <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                          <span className="text-4xl font-bold text-gray-400">404</span>
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        페이지를 찾을 수 없습니다
                      </h2>
                      <p className="text-gray-600 mb-6">
                        요청하신 페이지가 존재하지 않거나 이동되었습니다.
                      </p>
                      <a href="/" className="btn-primary">
                        홈으로 돌아가기
                      </a>
                    </div>
                  </div>
                }
              />
            </Routes>
          </Suspense>
          </div>
        </ErrorBoundary>
      </Router>
    </ScreenSizeProvider>
  );
};

export default App_Premium;