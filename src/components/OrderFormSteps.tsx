// OrderFormSteps.tsx - 주문 폼 단계별 컴포넌트들
import React from 'react';
import { Controller } from 'react-hook-form';
import type { UseFormRegister, Control, FieldErrors, UseFormWatch, UseFormSetValue } from 'react-hook-form';
import { Building2, User, Phone, Mail, MapPin, Calendar, FileText, Upload, X, AlertCircle } from 'lucide-react';
import type { OrderFormData } from '../types';
import { SERVICE_TYPE_OPTIONS, PROJECT_SCALES } from '../types';
import { formatPrice, formatFileSize } from '../utils';

// 1단계: 기본 정보
interface Step1FormProps {
  register: UseFormRegister<OrderFormData>;
  errors: FieldErrors<OrderFormData>;
  watch: UseFormWatch<OrderFormData>;
}

export const Step1Form: React.FC<Step1FormProps> = ({ register, errors }) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">기본 정보</h2>
        <p className="text-gray-900">회사 및 담당자 정보를 입력해주세요.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 회사명 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Building2 className="w-4 h-4 inline mr-2" />
            회사명 *
          </label>
          <input
            type="text"
            {...register('customer.companyName', {
              required: '회사명을 입력해주세요',
              minLength: { value: 2, message: '회사명은 2글자 이상이어야 합니다' }
            })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            placeholder="예: ㈜만송시스템"
          />
          {errors.customer?.companyName && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.customer.companyName.message}
            </p>
          )}
        </div>

        {/* 담당자명 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <User className="w-4 h-4 inline mr-2" />
            담당자명 *
          </label>
          <input
            type="text"
            {...register('customer.contactPerson', {
              required: '담당자명을 입력해주세요',
              minLength: { value: 2, message: '담당자명은 2글자 이상이어야 합니다' }
            })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            placeholder="예: 홍길동"
          />
          {errors.customer?.contactPerson && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.customer.contactPerson.message}
            </p>
          )}
        </div>

        {/* 연락처 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Phone className="w-4 h-4 inline mr-2" />
            연락처 *
          </label>
          <input
            type="tel"
            {...register('customer.phone', {
              required: '연락처를 입력해주세요',
              pattern: {
                value: /^(010|011|016|017|018|019)-?\d{3,4}-?\d{4}$/,
                message: '올바른 휴대폰 번호를 입력해주세요'
              }
            })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            placeholder="010-1234-5678"
          />
          {errors.customer?.phone && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.customer.phone.message}
            </p>
          )}
        </div>

        {/* 이메일 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Mail className="w-4 h-4 inline mr-2" />
            이메일 *
          </label>
          <input
            type="email"
            {...register('customer.email', {
              required: '이메일을 입력해주세요',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: '올바른 이메일 주소를 입력해주세요'
              }
            })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            placeholder="example@company.com"
          />
          {errors.customer?.email && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.customer.email.message}
            </p>
          )}
        </div>
      </div>

      {/* 주소 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <MapPin className="w-4 h-4 inline mr-2" />
          주소 *
        </label>
        <input
          type="text"
          {...register('customer.address', {
            required: '주소를 입력해주세요',
            minLength: { value: 10, message: '상세한 주소를 입력해주세요' }
          })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          placeholder="예: 충청남도 아산시 배방읍 광장로 123"
        />
        {errors.customer?.address && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.customer.address.message}
          </p>
        )}
      </div>

      {/* 사업자등록번호 (선택) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          사업자등록번호 (선택)
        </label>
        <input
          type="text"
          {...register('customer.businessNumber', {
            pattern: {
              value: /^\d{3}-?\d{2}-?\d{5}$/,
              message: '올바른 사업자등록번호를 입력해주세요 (예: 123-45-67890)'
            }
          })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          placeholder="123-45-67890"
        />
        {errors.customer?.businessNumber && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.customer.businessNumber.message}
          </p>
        )}
      </div>
    </div>
  );
};

// 2단계: 프로젝트 정보
interface Step2FormProps {
  register: UseFormRegister<OrderFormData>;
  control: Control<OrderFormData>;
  errors: FieldErrors<OrderFormData>;
  watch: UseFormWatch<OrderFormData>;
  setValue: UseFormSetValue<OrderFormData>;
}

export const Step2Form: React.FC<Step2FormProps> = ({ 
  register, 
  control, 
  errors, 
  watch, 
  setValue 
}) => {
  const selectedScale = watch('project.projectScale');
  const selectedServices = watch('project.serviceTypes');

  // 프로젝트 규모 변경 시 예산 범위 자동 설정
  React.useEffect(() => {
    if (selectedScale) {
      const scale = PROJECT_SCALES[selectedScale];
      setValue('project.budgetMin', scale.budget[0]);
      setValue('project.budgetMax', scale.budget[1]);
    }
  }, [selectedScale, setValue]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">프로젝트 정보</h2>
        <p className="text-gray-900">원하시는 서비스와 프로젝트 규모를 선택해주세요.</p>
      </div>

      {/* 서비스 유형 선택 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          필요한 서비스 * (복수 선택 가능)
        </label>
        <Controller
          name="project.serviceTypes"
          control={control}
          rules={{ 
            validate: value => value.length > 0 || '최소 하나의 서비스를 선택해주세요' 
          }}
          render={({ field }) => (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SERVICE_TYPE_OPTIONS.map((service) => (
                <label
                  key={service.id}
                  className={`relative flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    field.value.includes(service.id)
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={field.value.includes(service.id)}
                    onChange={(e) => {
                      const newValue = e.target.checked
                        ? [...field.value, service.id]
                        : field.value.filter(id => id !== service.id);
                      field.onChange(newValue);
                    }}
                    className="sr-only"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{service.label}</div>
                    <div className="text-sm text-gray-600">{service.description}</div>
                  </div>
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    field.value.includes(service.id)
                      ? 'border-primary-500 bg-primary-500'
                      : 'border-gray-300'
                  }`}>
                    {field.value.includes(service.id) && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </label>
              ))}
            </div>
          )}
        />
        {errors.project?.serviceTypes && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.project.serviceTypes.message}
          </p>
        )}
      </div>

      {/* 프로젝트 규모 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          프로젝트 규모 *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(PROJECT_SCALES).map(([key, scale]) => (
            <label
              key={key}
              className={`relative flex flex-col p-4 border-2 rounded-lg cursor-pointer transition-all ${
                selectedScale === key
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="radio"
                value={key}
                {...register('project.projectScale', {
                  required: '프로젝트 규모를 선택해주세요'
                })}
                className="sr-only"
              />
              <div className="font-medium text-gray-900 mb-1">{scale.label}</div>
              <div className="text-sm text-gray-600 mb-2">{scale.description}</div>
              <div className="text-sm font-medium text-primary-600">
                {formatPrice(scale.budget[0])} ~ {formatPrice(scale.budget[1])}
              </div>
              <div className={`absolute top-2 right-2 w-5 h-5 rounded-full border-2 ${
                selectedScale === key
                  ? 'border-primary-500 bg-primary-500'
                  : 'border-gray-300'
              }`}>
                {selectedScale === key && (
                  <div className="w-full h-full rounded-full bg-white transform scale-50"></div>
                )}
              </div>
            </label>
          ))}
        </div>
        {errors.project?.projectScale && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.project.projectScale.message}
          </p>
        )}
      </div>

      {/* 완료 희망일 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Calendar className="w-4 h-4 inline mr-2" />
          완료 희망일 *
        </label>
        <input
          type="date"
          {...register('project.expectedCompletion', {
            required: '완료 희망일을 선택해주세요',
            validate: value => {
              const selectedDate = new Date(value);
              const today = new Date();
              today.setHours(0, 0, 0, 0);
              return selectedDate > today || '오늘 이후 날짜를 선택해주세요';
            }
          })}
          min={new Date().toISOString().split('T')[0]}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
        />
        {errors.project?.expectedCompletion && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.project.expectedCompletion.message}
          </p>
        )}
      </div>

      {/* 프로젝트 설명 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <FileText className="w-4 h-4 inline mr-2" />
          프로젝트 개요 *
        </label>
        <textarea
          {...register('project.description', {
            required: '프로젝트 개요를 입력해주세요',
            minLength: { value: 50, message: '프로젝트에 대한 상세한 설명을 입력해주세요 (최소 50자)' }
          })}
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
          placeholder="프로젝트의 목표, 현재 상황, 기대 효과 등을 상세히 설명해주세요..."
        />
        {errors.project?.description && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.project.description.message}
          </p>
        )}
      </div>
    </div>
  );
};

// 3단계: 상세 요구사항
interface Step3FormProps {
  register: UseFormRegister<OrderFormData>;
  errors: FieldErrors<OrderFormData>;
  uploadedFiles: File[];
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  removeFile: (index: number) => void;
  setValue: UseFormSetValue<OrderFormData>;
}

export const Step3Form: React.FC<Step3FormProps> = ({ 
  register, 
  errors, 
  uploadedFiles, 
  handleFileUpload, 
  removeFile,
  setValue
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">상세 요구사항</h2>
        <p className="text-gray-900">프로젝트의 구체적인 요구사항과 관련 자료를 제공해주세요.</p>
      </div>

      {/* 상세 설명 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <FileText className="w-4 h-4 inline mr-2" />
          상세 요구사항 *
        </label>
        <textarea
          {...register('requirements.detailedDescription', {
            required: '상세 요구사항을 입력해주세요',
            minLength: { value: 100, message: '더 구체적인 요구사항을 입력해주세요 (최소 100자)' }
          })}
          rows={8}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
          placeholder="기술적 요구사항, 기존 시스템 정보, 특별한 요청사항 등을 상세히 작성해주세요..."
        />
        {errors.requirements?.detailedDescription && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.requirements.detailedDescription.message}
          </p>
        )}
      </div>

      {/* 파일 첨부 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Upload className="w-4 h-4 inline mr-2" />
          관련 자료 첨부 (선택)
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-300 transition-colors">
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <div className="text-sm text-gray-600 mb-4">
            <label className="cursor-pointer">
              <span className="text-primary-600 hover:text-primary-500 font-medium">
                파일을 선택하거나
              </span>
              <input
                type="file"
                multiple
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.zip"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
            <span> 드래그 앤 드롭하세요</span>
          </div>
          <div className="text-xs text-gray-500">
            PDF, DOC, DOCX, JPG, PNG, ZIP 파일만 업로드 가능 (최대 10MB)
          </div>
        </div>

        {/* 업로드된 파일 목록 */}
        {uploadedFiles.length > 0 && (
          <div className="mt-4 space-y-2">
            <div className="text-sm font-medium text-gray-700">첨부된 파일 ({uploadedFiles.length}개)</div>
            {uploadedFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-700">{file.name}</span>
                  <span className="text-xs text-gray-500">({formatFileSize(file.size)})</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 현장 방문 필요 여부 */}
      <div>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            {...register('requirements.siteVisitRequired')}
            className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
          />
          <span className="text-sm font-medium text-gray-700">
            현장 방문 및 조사가 필요합니다
          </span>
        </label>
        <p className="mt-1 text-xs text-gray-500">
          체크하시면 프로젝트 시작 전 현장 방문 일정을 조율하겠습니다.
        </p>
      </div>

      {/* 추가 문의사항 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          추가 문의사항 (선택)
        </label>
        <textarea
          {...register('requirements.additionalNotes')}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
          placeholder="기타 궁금하신 점이나 특별한 요청사항이 있으시면 자유롭게 작성해주세요..."
        />
      </div>
    </div>
  );
};

// 4단계: 확인 및 제출
interface Step4FormProps {
  register: UseFormRegister<OrderFormData>;
  errors: FieldErrors<OrderFormData>;
  watch: UseFormWatch<OrderFormData>;
  formData: OrderFormData;
  uploadedFiles: File[];
}

export const Step4Form: React.FC<Step4FormProps> = ({ 
  register, 
  errors, 
  formData, 
  uploadedFiles 
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">주문 정보 확인</h2>
        <p className="text-gray-900">입력하신 정보를 확인하고 주문을 완료해주세요.</p>
      </div>

      {/* 입력 정보 요약 */}
      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
        
        {/* 기본 정보 */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">기본 정보</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div><span className="text-gray-800 font-semibold">회사명:</span> {formData.customer?.companyName}</div>
            <div><span className="text-gray-800 font-semibold">담당자:</span> {formData.customer?.contactPerson}</div>
            <div><span className="text-gray-800 font-semibold">연락처:</span> {formData.customer?.phone}</div>
            <div><span className="text-gray-800 font-semibold">이메일:</span> {formData.customer?.email}</div>
            <div className="md:col-span-2"><span className="text-gray-800 font-semibold">주소:</span> {formData.customer?.address}</div>
          </div>
        </div>

        {/* 프로젝트 정보 */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">프로젝트 정보</h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-gray-800 font-semibold">서비스:</span> {
                formData.project?.serviceTypes?.map(type => 
                  SERVICE_TYPE_OPTIONS.find(opt => opt.id === type)?.label
                ).join(', ')
              }
            </div>
            <div>
              <span className="text-gray-800 font-semibold">규모:</span> {
                PROJECT_SCALES[formData.project?.projectScale as keyof typeof PROJECT_SCALES]?.label
              }
            </div>
            <div>
              <span className="text-gray-800 font-semibold">완료 희망일:</span> {formData.project?.expectedCompletion}
            </div>
            <div>
              <span className="text-gray-800 font-semibold">첨부 파일:</span> {uploadedFiles.length}개
            </div>
          </div>
        </div>
      </div>

      {/* 약관 동의 */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900">약관 동의</h3>
        
        <label className="flex items-start space-x-3">
          <input
            type="checkbox"
            {...register('agreements.privacyPolicy', {
              required: '개인정보처리방침에 동의해주세요'
            })}
            className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 mt-0.5"
          />
          <div className="flex-1">
            <span className="text-sm font-medium text-gray-700">
              개인정보처리방침에 동의합니다 (필수)
            </span>
            <p className="text-xs text-gray-500 mt-1">
              주문 처리를 위해 개인정보를 수집 및 이용하는데 동의합니다.
            </p>
          </div>
        </label>

        <label className="flex items-start space-x-3">
          <input
            type="checkbox"
            {...register('agreements.termsOfService', {
              required: '서비스 이용약관에 동의해주세요'
            })}
            className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 mt-0.5"
          />
          <div className="flex-1">
            <span className="text-sm font-medium text-gray-700">
              서비스 이용약관에 동의합니다 (필수)
            </span>
            <p className="text-xs text-gray-500 mt-1">
              서비스 제공 및 이용에 관한 제반 사항에 동의합니다.
            </p>
          </div>
        </label>

        <label className="flex items-start space-x-3">
          <input
            type="checkbox"
            {...register('agreements.marketingConsent')}
            className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 mt-0.5"
          />
          <div className="flex-1">
            <span className="text-sm font-medium text-gray-700">
              마케팅 정보 수신에 동의합니다 (선택)
            </span>
            <p className="text-xs text-gray-500 mt-1">
              새로운 서비스나 이벤트 정보를 이메일로 받아보실 수 있습니다.
            </p>
          </div>
        </label>

        {(errors.agreements?.privacyPolicy || errors.agreements?.termsOfService) && (
          <p className="text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            필수 약관에 동의해주세요
          </p>
        )}
      </div>

      {/* 주의사항 */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-800">
            <div className="font-medium mb-1">주문 접수 후 처리 절차</div>
            <ul className="space-y-1 text-xs">
              <li>• 주문 접수 후 1영업일 내 담당자가 연락드립니다</li>
              <li>• 현장 조사가 필요한 경우 별도 일정을 조율합니다</li>
              <li>• 상세 견적서는 3-5영업일 내 제공됩니다</li>
              <li>• 문의사항은 041-XXX-XXXX로 연락주세요</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};