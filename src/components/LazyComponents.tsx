// LazyComponents.tsx - 지연 로딩 컴포넌트들
import { lazy } from 'react';

// 관리자 대시보드 (덜 자주 사용)
export const AdminDashboard = lazy(() => import('../pages/AdminDashboard'));

// 주문 페이지 (특정 상황에서만 사용)  
export const OrderPage = lazy(() => import('../pages/OrderPage'));