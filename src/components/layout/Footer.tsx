import React from 'react';
import { Linkedin, Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { Container } from './Container';
import { services } from '../../data/siteData';
import {
  COMPANY_EMAIL,
  COMPANY_PHONE,
  COMPANY_PHONE_DISPLAY,
  SOCIAL_LINKS,
} from '../../constants';

export const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-16">
    <Container>
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="mb-4">
            <a
              href="#"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="cursor-pointer inline-block"
              aria-label="Tech Build Dreams home"
            >
              <img src="/logo.png" alt="Tech Build Dreams LLC" className="h-20 md:h-28" />
            </a>
          </div>
          <p className="text-gray-400 mb-6 max-w-md">
            Miami-based software development and AI agency — custom web platforms, native iOS &amp;
            Flutter mobile apps, and 24/7 AI voice agents. Bilingual English &amp; Spanish.
          </p>
          <address className="not-italic text-gray-400 space-y-1 mb-6">
            <p className="flex items-center">
              <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="hover:text-white transition-colors"
              >
                {COMPANY_EMAIL}
              </a>
            </p>
            <p className="flex items-center">
              <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
              <a
                href={`tel:${COMPANY_PHONE}`}
                className="hover:text-white transition-colors"
              >
                {COMPANY_PHONE_DISPLAY}
              </a>
            </p>
            <p>🌐 English &amp; Spanish · Miami, FL · Remote across the US</p>
          </address>
          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tech Build Dreams on LinkedIn"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tech Build Dreams on Instagram"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tech Build Dreams on Facebook"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            {services.map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Service Areas</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Miami, Florida (HQ)</li>
            <li>Albany &amp; Bronx, NY</li>
            <li>Massachusetts</li>
            <li>Remote · United States</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Tech Build Dreams LLC. Building technology that builds
          dreams.
        </p>
      </div>
    </Container>
  </footer>
);
