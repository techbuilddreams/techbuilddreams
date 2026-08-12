'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Container } from './Container';
import { SECTION_IDS } from '../../constants';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Our Work' },
  { href: `/#${SECTION_IDS.OUR_PROCESS}`, label: 'Our Process' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center h-24 md:h-32">
          <div className="flex items-center">
            <Link href="/" aria-label="Tech Build Dreams home">
              <Image
                src="/logo.png"
                alt="Tech Build Dreams LLC"
                width={446}
                height={112}
                priority
                className="h-20 md:h-28 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 font-medium"
            >
              Let&rsquo;s Talk
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block bg-blue-600 text-white px-6 py-2 rounded-full text-center font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Let&rsquo;s Talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
