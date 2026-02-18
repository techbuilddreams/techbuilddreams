import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from './Container';
import { ScrollToContactButton } from '../ui/ScrollToContactButton';
import { SECTION_IDS } from '../../constants';

const navLinks = [
  { href: `#${SECTION_IDS.HOW_WE_HELP}`, label: 'How We Help' },
  { href: `#${SECTION_IDS.CUSTOMERS}`, label: 'Our Work' },
  { href: `#${SECTION_IDS.OUR_PROCESS}`, label: 'Our Process' },
  { href: `#${SECTION_IDS.ABOUT}`, label: 'About Us' },
];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center h-24 md:h-32">
          <div className="flex items-center">
            <a
              href="#"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="cursor-pointer"
            >
              <img src="/logo.png" alt="Tech Build Dreams LLC" className="h-20 md:h-28" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                {link.label}
              </a>
            ))}
            <ScrollToContactButton className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 font-medium">
              Let's Talk
            </ScrollToContactButton>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="block text-gray-600 font-medium">
                {link.label}
              </a>
            ))}
            <ScrollToContactButton className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium">
              Let's Talk
            </ScrollToContactButton>
          </div>
        </div>
      )}
    </nav>
  );
};
