// AnalyticsChart.tsx - 분석 차트 컴포넌트
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, TrendingUp, TrendingDown, 
  Calendar, Filter, Download
} from 'lucide-react';

interface ChartData {
  month: string;
  orders: number;
  revenue: number;
}

interface AnalyticsChartProps {
  data: ChartData[];
}

type ChartType = 'orders' | 'revenue';

const AnalyticsChart: React.FC<AnalyticsChartProps> = ({ data }) => {
  const [chartType, setChartType] = useState<ChartType>('orders');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // 차트 데이터 정규화
  const normalizeData = (values: number[]) => {
    const max = Math.max(...values);
    const min = Math.min(...values);
    const range = max - min;
    
    if (range === 0) return values.map(() => 50); // 모든 값이 같은 경우
    
    return values.map(value => 
      ((value - min) / range) * 60 + 20 // 20-80% 범위로 정규화
    );
  };

  const formatValue = (value: number, type: ChartType) => {
    if (type === 'revenue') {
      if (value >= 100000000) {
        return `${(value / 100000000).toFixed(1)}억원`;
      } else if (value >= 10000) {
        return `${(value / 10000).toFixed(0)}만원`;
      }
      return `${value.toLocaleString()}원`;
    }
    return `${value}건`;
  };

  const getCurrentData = () => {
    return chartType === 'orders' 
      ? data.map(d => d.orders)
      : data.map(d => d.revenue);
  };

  const normalizedData = normalizeData(getCurrentData());

  // 성장률 계산
  const calculateGrowth = () => {
    const currentData = getCurrentData();
    if (currentData.length < 2) return 0;
    
    const current = currentData[currentData.length - 1];
    const previous = currentData[currentData.length - 2];
    
    if (previous === 0) return 0;
    
    return ((current - previous) / previous) * 100;
  };

  const growth = calculateGrowth();
  const isPositiveGrowth = growth > 0;

  const totalValue = getCurrentData().reduce((sum, value) => sum + value, 0);

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      {/* 차트 헤더 */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">비즈니스 분석</h3>
            <p className="text-sm text-gray-600">월별 주문 및 매출 현황</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Download className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 차트 유형 선택 */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setChartType('orders')}
            className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
              chartType === 'orders'
                ? 'bg-white text-primary-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            주문 건수
          </button>
          <button
            onClick={() => setChartType('revenue')}
            className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
              chartType === 'revenue'
                ? 'bg-white text-primary-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            매출 현황
          </button>
        </div>
      </div>

      {/* 주요 지표 */}
      <div className="p-6 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">
              {chartType === 'orders' ? '총 주문' : '총 매출'}
            </p>
            <p className="text-2xl font-bold text-gray-900">
              {formatValue(totalValue, chartType)}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">전월 대비</p>
            <div className="flex items-center">
              <span className={`text-2xl font-bold ${
                isPositiveGrowth ? 'text-green-600' : 'text-red-600'
              }`}>
                {isPositiveGrowth ? '+' : ''}{growth.toFixed(1)}%
              </span>
              <div className={`ml-2 ${
                isPositiveGrowth ? 'text-green-600' : 'text-red-600'
              }`}>
                {isPositiveGrowth ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">평균</p>
            <p className="text-2xl font-bold text-gray-900">
              {formatValue(Math.round(totalValue / data.length), chartType)}
            </p>
          </div>
        </div>
      </div>

      {/* 차트 영역 */}
      <div className="p-6">
        <div className="relative h-64">
          {/* Y축 라벨 */}
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 w-12">
            <span>{formatValue(Math.max(...getCurrentData()), chartType)}</span>
            <span>{formatValue(Math.max(...getCurrentData()) / 2, chartType)}</span>
            <span>0</span>
          </div>

          {/* 차트 바 */}
          <div className="ml-16 h-full flex items-end justify-between space-x-2">
            {data.map((item, index) => {
              const currentValue = getCurrentData()[index];
              const height = normalizedData[index];
              
              return (
                <motion.div
                  key={item.month}
                  className="flex-1 flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative w-full">
                    {/* 툴팁 */}
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10"
                      >
                        {formatValue(currentValue, chartType)}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-l-transparent border-r-transparent border-t-gray-900" />
                      </motion.div>
                    )}

                    {/* 바 */}
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className={`w-full rounded-t-sm transition-colors cursor-pointer ${
                        hoveredIndex === index
                          ? 'bg-primary-600'
                          : 'bg-primary-500 hover:bg-primary-600'
                      }`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    />
                  </div>

                  {/* X축 라벨 */}
                  <span className="text-xs text-gray-600 mt-2 font-medium">
                    {item.month}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* 그리드 라인 */}
          <div className="absolute left-16 right-0 top-0 bottom-8 pointer-events-none">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute left-0 right-0 border-t border-gray-100"
                style={{ top: `${i * 25}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 차트 하단 정보 */}
      <div className="px-6 py-4 bg-gray-50 border-t">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary-500 rounded-sm"></div>
              <span>{chartType === 'orders' ? '주문 건수' : '매출 금액'}</span>
            </div>
            <span>·</span>
            <span>{data.length}개월 데이터</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>업데이트: 방금 전</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsChart;