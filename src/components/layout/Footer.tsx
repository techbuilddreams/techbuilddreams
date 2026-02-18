import React from 'react';
import { Container } from './Container';

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
            >
              <img src="/logo.png" alt="Tech Build Dreams LLC" className="h-20 md:h-28" />
            </a>
          </div>
          <p className="text-gray-400 mb-6 max-w-md">
            Technology solutions company helping businesses build their dreams through modern
            full-stack development, mobile solutions, and AI integration.
          </p>
          <div className="text-gray-400">
            <p>📧 info@techbuilddreams.com</p>
            <p>🌐 Available in English & Spanish</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Full-Stack Development</li>
            <li>Mobile Solutions</li>
            <li>AI Voice Agents & Automation</li>
            <li>Cloud Infrastructure</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Technologies</h3>
          <ul className="space-y-2 text-gray-400">
            <li>React & Spring Boot</li>
            <li>Swift & Flutter</li>
            <li>AWS & PostgreSQL</li>
            <li>OpenAI & RevenueCat</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Tech Build Dreams LLC. Building technology that builds dreams.</p>
      </div>
    </Container>
  </footer>
);
