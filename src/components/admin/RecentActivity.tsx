// RecentActivity.tsx - 최근 활동 컴포넌트
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, CheckCircle, AlertTriangle, XCircle,
  User, Calendar, ArrowRight
} from 'lucide-react';

interface Order {
  id: string;
  customerName: string;
  contactPerson: string;
  status: string;
  createdAt: string;
  estimatedValue: number;
}

interface RecentActivityProps {
  orders: Order[];
}

interface ActivityItemProps {
  order: Order;
  index: number;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ order, index }) => {
  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'pending':
        return {
          icon: <Clock className="w-4 h-4" />,
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-100',
          label: '접수됨',
          description: '검토 대기중'
        };
      case 'in-progress':
        return {
          icon: <AlertTriangle className="w-4 h-4" />,
          color: 'text-blue-600',
          bgColor: 'bg-blue-100',
          label: '진행중',
          description: '작업 진행중'
        };
      case 'completed':
        return {
          icon: <CheckCircle className="w-4 h-4" />,
          color: 'text-green-600',
          bgColor: 'bg-green-100',
          label: '완료됨',
          description: '성공적으로 완료'
        };
      case 'cancelled':
        return {
          icon: <XCircle className="w-4 h-4" />,
          color: 'text-red-600',
          bgColor: 'bg-red-100',
          label: '취소됨',
          description: '주문이 취소됨'
        };
      default:
        return {
          icon: <Clock className="w-4 h-4" />,
          color: 'text-gray-600',
          bgColor: 'bg-gray-100',
          label: '알 수 없음',
          description: '상태 불명'
        };
    }
  };

  const formatTimeAgo = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
      return `${diffInMinutes}분 전`;
    } else if (diffInHours < 24) {
      return `${diffInHours}시간 전`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}일 전`;
    }
  };

  const formatCurrency = (amount: number) => {
    if (amount >= 100000000) {
      return `${(amount / 100000000).toFixed(1)}억원`;
    } else if (amount >= 10000) {
      return `${(amount / 10000).toFixed(0)}만원`;
    }
    return `${amount.toLocaleString()}원`;
  };

  const statusInfo = getStatusInfo(order.status);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
    >
      <div className={`flex-shrink-0 w-8 h-8 ${statusInfo.bgColor} rounded-full flex items-center justify-center`}>
        <div className={statusInfo.color}>
          {statusInfo.icon}
        </div>
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm font-medium text-gray-900 truncate">
            {order.customerName}
          </p>
          <span className="text-xs text-gray-500 whitespace-nowrap">
            {formatTimeAgo(order.createdAt)}
          </span>
        </div>
        
        <p className="text-sm text-gray-600 mb-1">
          <span className={`font-medium ${statusInfo.color}`}>{statusInfo.label}</span>
          <span className="mx-1">·</span>
          <span>{order.id}</span>
        </p>
        
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500">
            {statusInfo.description}
          </p>
          <p className="text-xs font-medium text-gray-900">
            {formatCurrency(order.estimatedValue)}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const RecentActivity: React.FC<RecentActivityProps> = ({ orders }) => {
  // 최신 순으로 정렬
  const sortedOrders = [...orders].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  // 최대 5개까지만 표시
  const recentOrders = sortedOrders.slice(0, 5);

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">최근 활동</h3>
          <button className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center">
            전체 보기
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        {recentOrders.length > 0 ? (
          <div className="space-y-1">
            {recentOrders.map((order, index) => (
              <ActivityItem
                key={order.id}
                order={order}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-gray-400 mb-2">
              <Calendar className="w-8 h-8 mx-auto" />
            </div>
            <p className="text-sm text-gray-500">최근 활동이 없습니다</p>
          </div>
        )}
      </div>

      {/* 요약 통계 */}
      {recentOrders.length > 0 && (
        <div className="px-6 py-4 bg-gray-50 border-t">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-lg font-semibold text-gray-900">
                {recentOrders.filter(order => order.status === 'pending').length}
              </p>
              <p className="text-xs text-gray-600">대기중</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">
                {recentOrders.filter(order => order.status === 'in-progress').length}
              </p>
              <p className="text-xs text-gray-600">진행중</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">
                {recentOrders.filter(order => order.status === 'completed').length}
              </p>
              <p className="text-xs text-gray-600">완료</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentActivity;