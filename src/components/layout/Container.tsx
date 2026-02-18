import React from 'react';

const maxWidthClasses = {
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '4xl': 'max-w-4xl',
  '6xl': 'max-w-6xl',
} as const;

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: keyof typeof maxWidthClasses;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  maxWidth = '6xl',
}) => (
  <div className={`${maxWidthClasses[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);
