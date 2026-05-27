import React from 'react';
import { Container } from '../layout/Container';
import { SECTION_IDS } from '../../constants';

export const AboutSection: React.FC = () => (
  <section id={SECTION_IDS.ABOUT} className="py-20 bg-gray-50">
    <Container maxWidth="4xl" className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        About Tech Build Dreams — Miami-Based, Latino-Owned Software Agency
      </h2>
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Tech Build Dreams LLC was founded in 2023 by{' '}
          <strong>Shender Ramos</strong>, a Latino software engineer with 10+ years of
          experience and dual degrees in Computer Science and Information Technology. We are a
          bilingual (English &amp; Spanish), Latino-owned agency headquartered in Miami,
          Florida, serving startups through enterprise clients remotely across the United
          States.
        </p>

        <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700 mb-4 text-left">
          "Technology advances have created unprecedented opportunities for those with vision
          and determination. Tech Build Dreams exists to be your trusted partner — ensuring
          your ideas get the world-class technology foundation they deserve, regardless of
          where you're starting from."
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
