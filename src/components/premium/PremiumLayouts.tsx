// PremiumLayouts.tsx - 프리미엄 레이아웃 컴포넌트들
import React from 'react';
import { motion } from 'framer-motion';
import { premiumAnimations, PremiumCard } from './PremiumDesignSystem';

// 프리미엄 섹션 컨테이너
interface PremiumSectionProps {
  children: React.ReactNode;
  background?: 'white' | 'gray' | 'gradient' | 'dark' | 'primary';
  padding?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  id?: string;
}

export const PremiumSection: React.FC<PremiumSectionProps> = ({
  children,
  background = 'white',
  padding = 'xl',
  className = '',
  id
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-gray-50 via-white to-primary-50',
    dark: 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white',
    primary: 'bg-gradient-to-br from-primary-600 via-primary-500 to-blue-600 text-white'
  };

  const paddings = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20',
    xl: 'py-24',
    '2xl': 'py-32'
  };

  return (
    <section 
      id={id}
      className={`relative ${backgrounds[background]} ${paddings[padding]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

// 프리미엄 히어로 레이아웃
interface PremiumHeroLayoutProps {
  children: React.ReactNode;
  backgroundElements?: React.ReactNode;
  className?: string;
}

export const PremiumHeroLayout: React.FC<PremiumHeroLayoutProps> = ({
  children,
  backgroundElements,
  className = ''
}) => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* 배경 요소들 */}
      <div className="absolute inset-0">
        {backgroundElements || (
          <>
            {/* 기본 배경 애니메이션 */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-20 animate-bounce"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-100 to-blue-100 rounded-full blur-3xl opacity-10 animate-spin" style={{ animationDuration: '20s' }}></div>
            
            {/* 추가 장식 요소들 */}
            <div className="absolute top-10 left-10 w-2 h-2 bg-primary-400 rounded-full animate-ping"></div>
            <div className="absolute top-20 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-3 h-3 bg-primary-300 rounded-full animate-bounce"></div>
            
            {/* 그리드 패턴 */}
            <div className="absolute inset-0 opacity-5">
              <div className="h-full w-full bg-grid-pattern"></div>
            </div>
          </>
        )}
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

// 프리미엄 그리드 레이아웃
interface PremiumGridProps {
  children: React.ReactNode;
  cols?: {
    default: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  stagger?: boolean;
}

export const PremiumGrid: React.FC<PremiumGridProps> = ({
  children,
  cols = { default: 1, md: 2, lg: 3 },
  gap = 'lg',
  className = '',
  stagger = true
}) => {
  const gaps = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12'
  };

  const gridCols = [
    `grid-cols-${cols.default}`,
    cols.sm && `sm:grid-cols-${cols.sm}`,
    cols.md && `md:grid-cols-${cols.md}`,
    cols.lg && `lg:grid-cols-${cols.lg}`,
    cols.xl && `xl:grid-cols-${cols.xl}`
  ].filter(Boolean).join(' ');

  return (
    <motion.div
      className={`grid ${gridCols} ${gaps[gap]} ${className}`}
      variants={stagger ? premiumAnimations.stagger : undefined}
      initial="initial"
      animate="animate"
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={stagger ? premiumAnimations.fadeInUp : undefined}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

// 프리미엄 플렉스 레이아웃
interface PremiumFlexProps {
  children: React.ReactNode;
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const PremiumFlex: React.FC<PremiumFlexProps> = ({
  children,
  direction = 'row',
  align = 'center',
  justify = 'start',
  wrap = false,
  gap = 'md',
  className = ''
}) => {
  const directions = {
    row: 'flex-row',
    col: 'flex-col',
    'row-reverse': 'flex-row-reverse',
    'col-reverse': 'flex-col-reverse'
  };

  const alignments = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch'
  };

  const justifications = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly'
  };

  const gaps = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8'
  };

  return (
    <div className={`
      flex ${directions[direction]} ${alignments[align]} ${justifications[justify]}
      ${wrap ? 'flex-wrap' : ''} ${gaps[gap]} ${className}
    `}>
      {children}
    </div>
  );
};

// 프리미엄 컨테이너
interface PremiumContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

export const PremiumContainer: React.FC<PremiumContainerProps> = ({
  children,
  size = 'lg',
  padding = 'md',
  className = ''
}) => {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-9xl',
    full: 'max-w-full'
  };

  const paddings = {
    none: '',
    sm: 'px-4 sm:px-6',
    md: 'px-4 sm:px-6 lg:px-8',
    lg: 'px-6 sm:px-8 lg:px-12'
  };

  return (
    <div className={`${sizes[size]} mx-auto ${paddings[padding]} ${className}`}>
      {children}
    </div>
  );
};

// 프리미엄 스택 레이아웃 (Vertical Stack)
interface PremiumStackProps {
  children: React.ReactNode;
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  className?: string;
}

export const PremiumStack: React.FC<PremiumStackProps> = ({
  children,
  spacing = 'md',
  align = 'stretch',
  className = ''
}) => {
  const spacings = {
    xs: 'space-y-2',
    sm: 'space-y-4',
    md: 'space-y-6',
    lg: 'space-y-8',
    xl: 'space-y-12',
    '2xl': 'space-y-16'
  };

  const alignments = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch'
  };

  return (
    <div className={`flex flex-col ${alignments[align]} ${spacings[spacing]} ${className}`}>
      {children}
    </div>
  );
};

// 프리미엄 2열 레이아웃 (Feature/Content)
interface PremiumTwoColumnProps {
  left: React.ReactNode;
  right: React.ReactNode;
  reverse?: boolean;
  leftWidth?: 'narrow' | 'equal' | 'wide';
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const PremiumTwoColumn: React.FC<PremiumTwoColumnProps> = ({
  left,
  right,
  reverse = false,
  leftWidth = 'equal',
  gap = 'lg',
  className = ''
}) => {
  const widths = {
    narrow: reverse ? 'lg:grid-cols-[1fr,2fr]' : 'lg:grid-cols-[1fr,2fr]',
    equal: 'lg:grid-cols-2',
    wide: reverse ? 'lg:grid-cols-[2fr,1fr]' : 'lg:grid-cols-[2fr,1fr]'
  };

  const gaps = {
    sm: 'gap-6',
    md: 'gap-8',
    lg: 'gap-12',
    xl: 'gap-16'
  };

  return (
    <div className={`grid grid-cols-1 ${widths[leftWidth]} ${gaps[gap]} items-center ${className}`}>
      <motion.div
        className={reverse ? 'lg:order-2' : ''}
        variants={premiumAnimations.slideInLeft}
        initial="initial"
        animate="animate"
      >
        {left}
      </motion.div>
      <motion.div
        className={reverse ? 'lg:order-1' : ''}
        variants={premiumAnimations.slideInRight}
        initial="initial"
        animate="animate"
      >
        {right}
      </motion.div>
    </div>
  );
};

// 프리미엄 카드 그리드
interface PremiumCardGridProps {
  cards: Array<{
    title: string;
    description: string;
    icon?: React.ReactNode;
    image?: string;
    action?: React.ReactNode;
  }>;
  cols?: { default: number; md?: number; lg?: number };
  variant?: 'default' | 'glass' | 'elevated' | 'luxury';
  className?: string;
}

export const PremiumCardGrid: React.FC<PremiumCardGridProps> = ({
  cards,
  cols = { default: 1, md: 2, lg: 3 },
  variant = 'elevated',
  className = ''
}) => {
  return (
    <PremiumGrid cols={cols} className={className}>
      {cards.map((card, index) => (
        <PremiumCard key={index} variant={variant} className="h-full">
          <div className="space-y-4">
            {card.icon && (
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                {card.icon}
              </div>
            )}
            {card.image && (
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="space-y-2">
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
            {card.action && (
              <div className="pt-2">
                {card.action}
              </div>
            )}
          </div>
        </PremiumCard>
      ))}
    </PremiumGrid>
  );
};