import React from 'react';
import { SECTION_IDS } from '../../constants';

interface ScrollToContactButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollToContactButton: React.FC<ScrollToContactButtonProps> = ({
  children,
  className = '',
}) => (
  <button
    onClick={() =>
      document.getElementById(SECTION_IDS.CONTACT)?.scrollIntoView({ behavior: 'smooth' })
    }
    className={className}
  >
    {children}
  </button>
);
