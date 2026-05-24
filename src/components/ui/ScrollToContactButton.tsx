import React from 'react';
import Link from 'next/link';

interface ContactCtaProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollToContactButton: React.FC<ContactCtaProps> = ({
  children,
  className = '',
}) => (
  <Link href="/contact" className={className}>
    {children}
  </Link>
);
