// DashboardStats.tsx - 대시보드 통계 카드 컴포넌트
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, Clock, CheckCircle, TrendingUp, 
  Users, DollarSign, BarChart3, Calendar
} from 'lucide-react';

interface StatsData {
  totalOrders: number;
  pendingOrders: number;
  completedOrders: number;
  totalRevenue: number;
  monthlyGrowth: number;
  newCustomers: number;
}

interface DashboardStatsProps {
  stats: StatsData;
}

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
  color: string;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon, 
  color, 
  index 
}) => {
  const getChangeColor = () => {
    switch (changeType) {
      case 'positive': return 'text-green-600';
      case 'negative': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getChangeIcon = () => {
    switch (changeType) {
      case 'positive': return '↗';
      case 'negative': return '↘';
      default: return '→';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-2">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mb-1">{value}</p>
          <div className={`flex items-center text-sm ${getChangeColor()}`}>
            <span className="mr-1">{getChangeIcon()}</span>
            <span>{change}</span>
          </div>
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          {icon}
        </div>
      </div>
    </motion.div>
  );
};

const DashboardStats: React.FC<DashboardStatsProps> = ({ stats }) => {
  const formatCurrency = (amount: number): string => {
    if (amount >= 100000000) {
      return `${(amount / 100000000).toFixed(1)}억원`;
    } else if (amount >= 10000) {
      return `${(amount / 10000).toFixed(0)}만원`;
    }
    return `${amount.toLocaleString()}원`;
  };

  const formatGrowth = (growth: number): string => {
    return `전월 대비 ${growth > 0 ? '+' : ''}${growth}%`;
  };

  const statCards = [
    {
      title: '총 주문 건수',
      value: stats.totalOrders.toLocaleString(),
      change: '이번 달 +12건',
      changeType: 'positive' as const,
      icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
      color: 'bg-blue-50'
    },
    {
      title: '대기 중인 주문',
      value: stats.pendingOrders.toString(),
      change: '처리 필요',
      changeType: 'neutral' as const,
      icon: <Clock className="w-6 h-6 text-yellow-600" />,
      color: 'bg-yellow-50'
    },
    {
      title: '완료된 주문',
      value: stats.completedOrders.toString(),
      change: formatGrowth(stats.monthlyGrowth),
      changeType: stats.monthlyGrowth > 0 ? 'positive' as const : 'negative' as const,
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      color: 'bg-green-50'
    },
    {
      title: '총 매출',
      value: formatCurrency(stats.totalRevenue),
      change: formatGrowth(stats.monthlyGrowth),
      changeType: stats.monthlyGrowth > 0 ? 'positive' as const : 'negative' as const,
      icon: <TrendingUp className="w-6 h-6 text-primary-600" />,
      color: 'bg-primary-50'
    },
    {
      title: '신규 고객',
      value: stats.newCustomers.toString(),
      change: '이번 달',
      changeType: 'positive' as const,
      icon: <Users className="w-6 h-6 text-purple-600" />,
      color: 'bg-purple-50'
    },
    {
      title: '평균 주문가',
      value: formatCurrency(stats.totalRevenue / stats.totalOrders),
      change: '건당 평균',
      changeType: 'neutral' as const,
      icon: <DollarSign className="w-6 h-6 text-emerald-600" />,
      color: 'bg-emerald-50'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      {statCards.map((card, index) => (
        <StatCard
          key={card.title}
          title={card.title}
          value={card.value}
          change={card.change}
          changeType={card.changeType}
          icon={card.icon}
          color={card.color}
          index={index}
        />
      ))}
    </div>
  );
};

export default DashboardStats;