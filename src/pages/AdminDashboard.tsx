// AdminDashboard.tsx - 관리자 대시보드 메인 페이지
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BarChart3, Users, ShoppingCart, TrendingUp, 
  Calendar, Filter, Download, Search, ArrowLeft,
  CheckCircle, Clock, AlertTriangle, XCircle
} from 'lucide-react';

// 임시 더미 데이터 인터페이스
interface DashboardData {
  stats: {
    totalOrders: number;
    pendingOrders: number;
    completedOrders: number;
    totalRevenue: number;
    monthlyGrowth: number;
    newCustomers: number;
  };
  recentOrders: Array<{
    id: string;
    customerName: string;
    contactPerson: string;
    email: string;
    phone: string;
    serviceType: string[];
    projectScale: string;
    status: string;
    createdAt: string;
    expectedCompletion: string;
    estimatedValue: number;
  }>;
  chartData: {
    monthly: Array<{
      month: string;
      orders: number;
      revenue: number;
    }>;
  };
}

// 통계 카드 컴포넌트
interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, changeType, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600 mb-2">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className={`text-sm ${changeType === 'positive' ? 'text-green-600' : 'text-red-600'} flex items-center mt-1`}>
          <TrendingUp className="w-4 h-4 mr-1" />
          {change}
        </p>
      </div>
      <div className="text-primary-500">
        {icon}
      </div>
    </div>
  </div>
);

// 주문 목록 행 컴포넌트
interface OrderRowProps {
  order: DashboardData['recentOrders'][0];
}

const OrderRow: React.FC<OrderRowProps> = ({ order }) => {
  const getStatusBadge = (status: string) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-800',
      'in-progress': 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    
    const labels = {
      pending: '대기중',
      'in-progress': '진행중',
      completed: '완료',
      cancelled: '취소'
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{order.id}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div>
          <div className="text-sm font-medium text-gray-900">{order.customerName}</div>
          <div className="text-sm text-gray-500">{order.contactPerson}</div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{order.serviceType.join(', ')}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{formatCurrency(order.estimatedValue)}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {getStatusBadge(order.status)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {new Date(order.createdAt).toLocaleDateString('ko-KR')}
      </td>
    </tr>
  );
};

// 임시 더미 데이터
const mockDashboardData: DashboardData = {
  stats: {
    totalOrders: 245,
    pendingOrders: 18,
    completedOrders: 201,
    totalRevenue: 125000000,
    monthlyGrowth: 12.5,
    newCustomers: 34
  },
  recentOrders: [
    {
      id: 'ORD-001',
      customerName: '삼성전자',
      contactPerson: '김철수',
      email: 'kim@samsung.com',
      phone: '010-1234-5678',
      serviceType: ['자동화', 'PLC'],
      projectScale: 'large',
      status: 'pending',
      createdAt: '2024-12-15T09:30:00Z',
      expectedCompletion: '2025-03-15',
      estimatedValue: 25000000
    },
    {
      id: 'ORD-002',
      customerName: 'LG화학',
      contactPerson: '박영희',
      email: 'park@lgchem.com',
      phone: '010-9876-5432',
      serviceType: ['유지보수'],
      projectScale: 'medium',
      status: 'in-progress',
      createdAt: '2024-12-14T14:15:00Z',
      expectedCompletion: '2025-01-30',
      estimatedValue: 8000000
    },
    {
      id: 'ORD-003',
      customerName: '포스코',
      contactPerson: '이민수',
      email: 'lee@posco.com',
      phone: '010-5555-1111',
      serviceType: ['컨설팅', '자동화'],
      projectScale: 'large',
      status: 'completed',
      createdAt: '2024-12-13T11:00:00Z',
      expectedCompletion: '2024-12-20',
      estimatedValue: 35000000
    },
    {
      id: 'ORD-004',
      customerName: '현대모비스',
      contactPerson: '정수영',
      email: 'jung@hyundai-mobis.com',
      phone: '010-7777-8888',
      serviceType: ['자동화', '유지보수'],
      projectScale: 'medium',
      status: 'in-progress',
      createdAt: '2024-12-12T16:20:00Z',
      expectedCompletion: '2025-02-28',
      estimatedValue: 15000000
    }
  ],
  chartData: {
    monthly: [
      { month: '7월', orders: 15, revenue: 45000000 },
      { month: '8월', orders: 22, revenue: 68000000 },
      { month: '9월', orders: 18, revenue: 52000000 },
      { month: '10월', orders: 28, revenue: 89000000 },
      { month: '11월', orders: 25, revenue: 76000000 },
      { month: '12월', orders: 31, revenue: 95000000 }
    ]
  }
};

const AdminDashboard: React.FC = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData>(mockDashboardData);
  const [selectedTimeRange, setSelectedTimeRange] = useState('6months');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // 실제 환경에서는 API 호출로 데이터 가져오기
  useEffect(() => {
    // fetchDashboardData();
  }, [selectedTimeRange]);

  const handleExportData = () => {
    // CSV 내보내기 기능
    console.log('Exporting dashboard data...');
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const filteredOrders = dashboardData.recentOrders.filter(order => {
    const matchesSearch = order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 대시보드 헤더 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-500 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>홈으로</span>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">관리자 대시보드</h1>
                <p className="mt-1 text-sm text-gray-500">
                  주문 접수 현황 및 비즈니스 분석을 확인하세요
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* 시간 범위 선택 */}
              <select
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="1month">최근 1개월</option>
                <option value="3months">최근 3개월</option>
                <option value="6months">최근 6개월</option>
                <option value="1year">최근 1년</option>
              </select>
              
              {/* 데이터 내보내기 */}
              <button
                onClick={handleExportData}
                className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                내보내기
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 대시보드 콘텐츠 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 통계 카드 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <StatsCard
            title="총 주문 건수"
            value={dashboardData.stats.totalOrders.toString()}
            change={`+${dashboardData.stats.monthlyGrowth}%`}
            changeType="positive"
            icon={<ShoppingCart className="w-8 h-8" />}
          />
          <StatsCard
            title="대기 중인 주문"
            value={dashboardData.stats.pendingOrders.toString()}
            change="+3건"
            changeType="positive"
            icon={<Clock className="w-8 h-8" />}
          />
          <StatsCard
            title="완료된 주문"
            value={dashboardData.stats.completedOrders.toString()}
            change="+8건"
            changeType="positive"
            icon={<CheckCircle className="w-8 h-8" />}
          />
          <StatsCard
            title="총 매출"
            value={formatCurrency(dashboardData.stats.totalRevenue)}
            change={`+${dashboardData.stats.monthlyGrowth}%`}
            changeType="positive"
            icon={<TrendingUp className="w-8 h-8" />}
          />
        </motion.div>

        {/* 주문 목록 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm"
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">최근 주문 접수</h2>
              
              <div className="flex items-center space-x-4">
                {/* 검색 */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="고객명 또는 주문번호 검색"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                {/* 상태 필터 */}
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="all">전체 상태</option>
                  <option value="pending">대기중</option>
                  <option value="in-progress">진행중</option>
                  <option value="completed">완료</option>
                  <option value="cancelled">취소</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">주문번호</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">고객정보</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">서비스</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">예상금액</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">접수일</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <OrderRow key={order.id} order={order} />
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;