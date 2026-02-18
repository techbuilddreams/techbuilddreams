import React from 'react';
import { COMPANY_EMAIL } from '../../constants';

interface EmailLinkProps {
  children: React.ReactNode;
  className?: string;
}

export const EmailLink: React.FC<EmailLinkProps> = ({ children, className = '' }) => (
  <a href={`mailto:${COMPANY_EMAIL}`} className={className}>
    {children}
  </a>
);
