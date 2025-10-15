// OrderPagePremium.tsx - 프리미엄 주문 접수 페이지
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle, Sparkles, 
  FileText, Settings, Calendar, Send,
  User, Mail, Phone, MapPin, Building2,
  Upload, Clock, Shield, Award
} from 'lucide-react';
import { 
  PremiumCard, 
  PremiumButton, 
  PremiumBadge,
  premiumAnimations 
} from '../components/premium/PremiumDesignSystem';

interface FormData {
  customerInfo: {
    name: string;
    company: string;
    position: string;
    phone: string;
    email: string;
    address: string;
  };
  projectInfo: {
    title: string;
    type: string;
    description: string;
    timeline: string;
    budget: string;
  };
  requirements: {
    scope: string[];
    features: string;
    files: File[];
  };
}

const OrderPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    customerInfo: {
      name: '',
      company: '',
      position: '',
      phone: '',
      email: '',
      address: ''
    },
    projectInfo: {
      title: '',
      type: '',
      description: '',
      timeline: '',
      budget: ''
    },
    requirements: {
      scope: [],
      features: '',
      files: []
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    { id: 1, title: '고객 정보', icon: User, description: '기본 연락처 정보' },
    { id: 2, title: '프로젝트 정보', icon: FileText, description: '프로젝트 개요' },
    { id: 3, title: '요구사항', icon: Settings, description: '상세 요구사항' },
    { id: 4, title: '완료', icon: CheckCircle, description: '주문 접수 완료' }
  ];

  const projectTypes = [
    'SCADA 시스템 구축',
    'HMI 개발',
    '공장 자동화',
    '모니터링 시스템',
    'PLC 프로그래밍',
    '통신 시스템',
    '기타'
  ];

  const scopeOptions = [
    '시스템 설계',
    '소프트웨어 개발',
    '하드웨어 구축',
    '설치 및 시공',
    '교육 서비스',
    '유지보수',
    'A/S 지원'
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // 실제 구현에서는 API 호출
    setTimeout(() => {
      setCurrentStep(4);
      setIsSubmitting(false);
    }, 2000);
  };

  const updateFormData = (section: keyof FormData, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <User className="w-10 h-10 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">고객 정보 입력</h2>
              <p className="text-gray-600 font-body">프로젝트 진행을 위한 기본 정보를 입력해주세요</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">성명 *</label>
                <input
                  type="text"
                  value={formData.customerInfo.name}
                  onChange={(e) => updateFormData('customerInfo', 'name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="홍길동"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">회사명 *</label>
                <input
                  type="text"
                  value={formData.customerInfo.company}
                  onChange={(e) => updateFormData('customerInfo', 'company', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="(주)만송시스템"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">직책</label>
                <input
                  type="text"
                  value={formData.customerInfo.position}
                  onChange={(e) => updateFormData('customerInfo', 'position', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="팀장"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">연락처 *</label>
                <input
                  type="tel"
                  value={formData.customerInfo.phone}
                  onChange={(e) => updateFormData('customerInfo', 'phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="010-1234-5678"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">이메일 *</label>
                <input
                  type="email"
                  value={formData.customerInfo.email}
                  onChange={(e) => updateFormData('customerInfo', 'email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="contact@company.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">주소</label>
                <input
                  type="text"
                  value={formData.customerInfo.address}
                  onChange={(e) => updateFormData('customerInfo', 'address', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="충남 천안시 동남구..."
                />
              </div>
            </div>
          </motion.div>
        );
        
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FileText className="w-10 h-10 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">프로젝트 정보</h2>
              <p className="text-gray-600 font-body">프로젝트에 대한 기본 정보를 알려주세요</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">프로젝트명 *</label>
                <input
                  type="text"
                  value={formData.projectInfo.title}
                  onChange={(e) => updateFormData('projectInfo', 'title', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="공장 자동화 SCADA 시스템 구축"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">프로젝트 유형 *</label>
                <select
                  value={formData.projectInfo.type}
                  onChange={(e) => updateFormData('projectInfo', 'type', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">선택해주세요</option>
                  {projectTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">프로젝트 설명 *</label>
                <textarea
                  value={formData.projectInfo.description}
                  onChange={(e) => updateFormData('projectInfo', 'description', e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="프로젝트의 목적, 현재 상황, 기대 효과 등을 자세히 설명해주세요..."
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">희망 완료 시기</label>
                  <input
                    type="text"
                    value={formData.projectInfo.timeline}
                    onChange={(e) => updateFormData('projectInfo', 'timeline', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="예: 2024년 6월"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">예산 범위</label>
                  <input
                    type="text"
                    value={formData.projectInfo.budget}
                    onChange={(e) => updateFormData('projectInfo', 'budget', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="예: 5,000만원 ~ 1억원"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        );
        
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Settings className="w-10 h-10 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">상세 요구사항</h2>
              <p className="text-gray-600 font-body">필요한 서비스와 구체적인 요구사항을 알려주세요</p>
            </div>

            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">필요한 서비스 (복수 선택 가능)</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {scopeOptions.map(option => (
                    <motion.label 
                      key={option}
                      className="flex items-center p-4 border border-gray-300 rounded-xl cursor-pointer hover:border-primary-300 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <input
                        type="checkbox"
                        checked={formData.requirements.scope.includes(option)}
                        onChange={(e) => {
                          const newScope = e.target.checked
                            ? [...formData.requirements.scope, option]
                            : formData.requirements.scope.filter(s => s !== option);
                          updateFormData('requirements', 'scope', newScope);
                        }}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 border-2 rounded mr-3 flex items-center justify-center transition-all duration-300 ${
                        formData.requirements.scope.includes(option)
                          ? 'bg-primary-500 border-primary-500'
                          : 'border-gray-300'
                      }`}>
                        {formData.requirements.scope.includes(option) && (
                          <CheckCircle className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <span className="text-sm font-medium">{option}</span>
                    </motion.label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">추가 요구사항</label>
                <textarea
                  value={formData.requirements.features}
                  onChange={(e) => updateFormData('requirements', 'features', e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="특별한 요구사항이나 참고할 내용이 있다면 자세히 작성해주세요..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">첨부 파일</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-primary-300 transition-all duration-300">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">파일을 드래그하거나 클릭하여 업로드</p>
                  <p className="text-sm text-gray-500">도면, 사양서, 참고 자료 등 (최대 10MB)</p>
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files) {
                        updateFormData('requirements', 'files', Array.from(e.target.files));
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        );
        
      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="text-center py-12"
          >
            <motion.div 
              className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </motion.div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-heading">
              주문 접수가 완료되었습니다!
            </h2>
            
            <div className="max-w-md mx-auto space-y-6">
              <PremiumCard className="bg-green-50 border-green-200">
                <div className="text-center py-6">
                  <h3 className="text-xl font-bold text-green-800 mb-4">주문번호</h3>
                  <div className="text-3xl font-black text-green-600 font-mono">
                    MS-{new Date().getFullYear()}-{String(Math.floor(Math.random() * 10000)).padStart(4, '0')}
                  </div>
                </div>
              </PremiumCard>
              
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-5 h-5 text-primary-500" />
                  <span>24시간 내 담당자가 연락드리겠습니다</span>
                </div>
                
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5 text-primary-500" />
                  <span>접수 확인 이메일이 발송됩니다</span>
                </div>
                
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="w-5 h-5 text-primary-500" />
                  <span>개인정보는 안전하게 보호됩니다</span>
                </div>
              </div>
            </div>
          </motion.div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
      
      {/* Premium 배경 효과 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary-100/20 to-blue-100/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-purple-100/15 to-pink-100/20 rounded-full blur-3xl"></div>
        
        {/* 떠다니는 스파클 */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            <Sparkles className="w-4 h-4 text-primary-300/30" />
          </motion.div>
        ))}
      </div>

      {/* 헤더 */}
      <motion.div 
        className="bg-white/80 backdrop-blur-sm shadow-lg relative z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-3 text-gray-600 hover:text-primary-500 transition-all duration-300 group"
            >
              <motion.div 
                className="p-2 bg-gray-100 rounded-xl group-hover:bg-primary-100 transition-colors duration-300"
                whileHover={{ scale: 1.1, x: -5 }}
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.div>
              <span className="font-medium">홈으로 돌아가기</span>
            </Link>
            
            <PremiumBadge variant="primary" className="hidden md:block">
              <Award className="w-4 h-4 mr-2" />
              프리미엄 주문 시스템
            </PremiumBadge>
          </div>
        </div>
      </motion.div>

      <div className="container-custom py-12 relative z-10">
        
        {/* 페이지 헤더 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 font-display">
            <span className="bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              프리미엄 주문 접수
            </span>
          </h1>
          <p className="text-xl text-gray-600 font-body max-w-2xl mx-auto">
            30년 경험의 전문성으로 고객님의 프로젝트를 성공으로 이끌어드리겠습니다
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          
          {/* Premium 단계 표시기 */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <PremiumCard className="bg-white/80 backdrop-blur-sm">
              <div className="flex items-center justify-between relative">
                {steps.map((step, index) => (
                  <React.Fragment key={step.id}>
                    <motion.div 
                      className="flex flex-col items-center relative z-10"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div 
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                          currentStep >= step.id
                            ? 'bg-gradient-to-br from-primary-500 to-blue-600 text-white premium-shadow-glow'
                            : 'bg-gray-100 text-gray-400'
                        }`}
                        animate={currentStep === step.id ? { 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <step.icon className="w-8 h-8" />
                      </motion.div>
                      
                      <div className="text-center">
                        <h3 className={`font-bold mb-1 transition-colors duration-300 ${
                          currentStep >= step.id ? 'text-primary-600' : 'text-gray-500'
                        }`}>
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-500 font-body">{step.description}</p>
                      </div>
                    </motion.div>
                    
                    {index < steps.length - 1 && (
                      <motion.div 
                        className={`flex-1 h-1 mx-8 rounded-full transition-all duration-500 ${
                          currentStep > step.id ? 'bg-primary-500' : 'bg-gray-200'
                        }`}
                        animate={currentStep > step.id ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 1 }}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </PremiumCard>
          </motion.div>

          {/* 폼 컨텐츠 */}
          <PremiumCard className="bg-white/90 backdrop-blur-sm premium-shadow-glow-intense min-h-[600px] relative overflow-hidden">
            
            {/* 배경 장식 */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tl from-purple-500 to-pink-600 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 p-8 lg:p-12">
              <AnimatePresence mode="wait">
                {renderStepContent()}
              </AnimatePresence>
              
              {/* 네비게이션 버튼 */}
              {currentStep < 4 && (
                <motion.div 
                  className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div>
                    {currentStep > 1 && (
                      <PremiumButton
                        variant="secondary"
                        onClick={handlePrev}
                        className="flex items-center space-x-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>이전</span>
                      </PremiumButton>
                    )}
                  </div>
                  
                  <div>
                    {currentStep < 3 ? (
                      <PremiumButton
                        variant="primary"
                        onClick={handleNext}
                        className="flex items-center space-x-2"
                      >
                        <span>다음</span>
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                      </PremiumButton>
                    ) : (
                      <PremiumButton
                        variant="primary"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="flex items-center space-x-2 min-w-[140px]"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>처리중...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>접수하기</span>
                          </>
                        )}
                      </PremiumButton>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          </PremiumCard>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;