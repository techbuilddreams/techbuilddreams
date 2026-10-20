import React from 'react';
import { Container } from '../layout/Container';
import { SECTION_IDS } from '../../constants';

export const AboutSection: React.FC = () => (
  <section id={SECTION_IDS.ABOUT} className="py-20 bg-gray-50">
    <Container maxWidth="4xl" className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        About Tech Build Dreams — A Latino-Owned Tech Partner for Small Businesses
      </h2>
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Tech Build Dreams LLC was founded in 2023 by{' '}
          <strong>Shender Ramos</strong>, a Latino software engineer with 10+ years of
          experience and two associate degrees, in Computer Science and in Information Technology. We are a
          bilingual (English &amp; Spanish), Latino-owned agency headquartered in Miami,
          Florida, with on-site service in New York&rsquo;s Capital Region and remote work
          with small and medium-sized businesses across the United States.
        </p>

        <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700 mb-4 text-left">
          "Small business owners deserve the same senior engineering big companies get — and a
          person who picks up the phone. I design every project, direct a team of AI coding
          agents, and review every change before it ships, in English or Spanish."
        </blockquote>
        <p className="text-sm text-gray-500 mb-8 text-left pl-6">
          — Shender Ramos, Founder &amp; Lead Software Engineer
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-1">10+</div>
            <div className="text-gray-600 text-sm">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-1">2</div>
            <div className="text-gray-600 text-sm">CS &amp; IT Degrees</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-1">EN / ES</div>
            <div className="text-gray-600 text-sm">Bilingual Service</div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);
