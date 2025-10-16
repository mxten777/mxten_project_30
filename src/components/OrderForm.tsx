// OrderForm.tsx - 4단계 주문 접수 폼
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, Check, Upload, X, 
  Building2, User, Phone, Mail, MapPin, 
  Calendar, DollarSign, FileText, Shield,
  AlertCircle, CheckCircle
} from 'lucide-react';
import { Step1Form, Step2Form, Step3Form, Step4Form } from './OrderFormSteps';
import { Link } from 'react-router-dom';
import type { OrderFormData, OrderFormStep } from '../types';
import { SERVICE_TYPE_OPTIONS, PROJECT_SCALES } from '../types';
import { 
  validateEmail, 
  validatePhone, 
  validateBusinessNumber, 
  generateOrderNumber,
  orderFormUtils,
  formatPrice 
} from '../utils';

const OrderForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<OrderFormStep>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderNumber, setOrderNumber] = useState<string>('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const { 
    register, 
    handleSubmit, 
    control, 
    watch, 
    setValue, 
    getValues, 
    formState: { errors, isValid },
    trigger 
  } = useForm<OrderFormData>({
    mode: 'onChange',
    defaultValues: {
      customer: {
        companyName: '',
        contactPerson: '',
        phone: '',
        email: '',
        address: '',
        businessNumber: ''
      },
      project: {
        serviceTypes: [],
        projectScale: 'medium',
        budgetMin: 100000000,
        budgetMax: 500000000,
        expectedCompletion: '',
        description: ''
      },
      requirements: {
        detailedDescription: '',
        attachments: [],
        siteVisitRequired: false,
        additionalNotes: ''
      },
      agreements: {
        privacyPolicy: false,
        termsOfService: false,
        marketingConsent: false
      }
    }
  });

  // 현재 단계의 데이터를 임시 저장
  const saveCurrentStep = () => {
    const currentData = getValues();
    orderFormUtils.saveStepData(currentStep, currentData);
  };

  // 이전에 저장된 데이터 복원
  useEffect(() => {
    const savedData = orderFormUtils.loadFormData();
    if (savedData) {
      Object.keys(savedData).forEach(key => {
        setValue(key as keyof OrderFormData, savedData[key]);
      });
    }
  }, [setValue]);

  // 단계 진행 함수
  const goToNextStep = async () => {
    const stepValid = await validateCurrentStep();
    if (stepValid) {
      saveCurrentStep();
      setCurrentStep((prev) => Math.min(prev + 1, 4) as OrderFormStep);
    }
  };

  const goToPrevStep = () => {
    saveCurrentStep();
    setCurrentStep((prev) => Math.max(prev - 1, 1) as OrderFormStep);
  };

  // 현재 단계 유효성 검증
  const validateCurrentStep = async (): Promise<boolean> => {
    const stepFields: Record<OrderFormStep, string[]> = {
      1: ['customer.companyName', 'customer.contactPerson', 'customer.phone', 'customer.email', 'customer.address'],
      2: ['project.serviceTypes', 'project.projectScale', 'project.expectedCompletion', 'project.description'],
      3: ['requirements.detailedDescription'],
      4: ['agreements.privacyPolicy', 'agreements.termsOfService']
    };

    return await trigger(stepFields[currentStep] as any);
  };

  // 파일 업로드 처리
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter(file => {
      if (!orderFormUtils.validateFileSize(file, 10)) {
        alert(`파일 "${file.name}"이 10MB를 초과합니다.`);
        return false;
      }
      if (!orderFormUtils.validateFileType(file)) {
        alert(`파일 "${file.name}"의 형식이 지원되지 않습니다.`);
        return false;
      }
      return true;
    });

    setUploadedFiles(prev => [...prev, ...validFiles]);
    setValue('requirements.attachments', [...uploadedFiles, ...validFiles]);
  };

  // 파일 삭제
  const removeFile = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
    setValue('requirements.attachments', newFiles);
  };

  // 폼 제출
  const onSubmit = async (data: OrderFormData) => {
    setIsSubmitting(true);
    
    try {
      // 주문 번호 생성
      const orderNum = generateOrderNumber();
      setOrderNumber(orderNum);

      // 실제 구현에서는 API 호출
      await new Promise(resolve => setTimeout(resolve, 2000));

      // 성공 처리
      orderFormUtils.saveFormData({ ...data, orderNumber: orderNum });
      orderFormUtils.clearTempData();
      
      // 성공 페이지로 이동 (현재는 알림으로 대체)
      alert(`주문이 성공적으로 접수되었습니다!\n주문번호: ${orderNum}`);
      
    } catch (error) {
      alert('주문 접수 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 진행률 계산
  const progress = (currentStep / 4) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white shadow-sm">
        <div className="container-custom py-4">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-gray-800 hover:text-primary-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>홈으로 돌아가기</span>
          </Link>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* 제목 및 진행률 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              온라인 주문 접수
            </h1>
            <p className="text-gray-900 mb-6">
              단계별로 정보를 입력하여 주문을 접수해주세요
            </p>
            
            {/* 진행률 바 */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <motion.div
                className="bg-primary-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="text-sm text-gray-500">
              {currentStep} / 4 단계 ({Math.round(progress)}%)
            </div>
          </div>

          {/* 단계 인디케이터 */}
          <div className="flex justify-between items-center mb-8">
            {[
              { step: 1, title: '기본정보', icon: User },
              { step: 2, title: '프로젝트정보', icon: Building2 },
              { step: 3, title: '상세요구사항', icon: FileText },
              { step: 4, title: '확인 및 제출', icon: Check }
            ].map(({ step, title, icon: Icon }) => (
              <div key={step} className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors ${
                  step <= currentStep 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-gray-200 text-gray-400'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className={`text-sm font-medium ${
                  step <= currentStep ? 'text-primary-500' : 'text-gray-400'
                }`}>
                  {title}
                </span>
              </div>
            ))}
          </div>

          {/* 폼 컨테이너 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  
                  {/* 1단계: 기본 정보 */}
                  {currentStep === 1 && (
                    <Step1Form 
                      register={register}
                      errors={errors}
                      watch={watch}
                    />
                  )}

                  {/* 2단계: 프로젝트 정보 */}
                  {currentStep === 2 && (
                    <Step2Form 
                      register={register}
                      control={control}
                      errors={errors}
                      watch={watch}
                      setValue={setValue}
                    />
                  )}

                  {/* 3단계: 상세 요구사항 */}
                  {currentStep === 3 && (
                    <Step3Form 
                      register={register}
                      errors={errors}
                      uploadedFiles={uploadedFiles}
                      handleFileUpload={handleFileUpload}
                      removeFile={removeFile}
                      setValue={setValue}
                    />
                  )}

                  {/* 4단계: 확인 및 제출 */}
                  {currentStep === 4 && (
                    <Step4Form 
                      register={register}
                      errors={errors}
                      watch={watch}
                      formData={getValues()}
                      uploadedFiles={uploadedFiles}
                    />
                  )}

                </motion.div>
              </AnimatePresence>

              {/* 네비게이션 버튼 */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t">
                <button
                  type="button"
                  onClick={goToPrevStep}
                  disabled={currentStep === 1}
                  className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>이전 단계</span>
                </button>

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={goToNextStep}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <span>다음 단계</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>제출 중...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span>주문 접수</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;