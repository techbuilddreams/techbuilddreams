import React from 'react';
import { Container } from '../layout/Container';
import { SECTION_IDS } from '../../constants';

export const AboutSection: React.FC = () => (
  <section id={SECTION_IDS.ABOUT} className="py-20 bg-gray-50">
    <Container maxWidth="4xl" className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Why We Started Tech Build Dreams
      </h2>
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Founded on the belief that exceptional technology should be{' '}
          <strong>accessible to visionaries</strong> at every level. As a Latino software
          engineer with 10 years of experience and dual degrees in Computer Science and IT,
          I've witnessed how the right technology partnership can transform any dream into
          reality.
        </p>

        <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700 mb-8 text-left">
          "Technology advances have created unprecedented opportunities for those with vision
          and determination. Tech Build Dreams exists to be your trusted partner - ensuring
          your ideas get the world-class technology foundation they deserve, regardless of
          where you're starting from."
        </blockquote>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-1">10+</div>
            <div className="text-gray-600 text-sm">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-1">2</div>
            <div className="text-gray-600 text-sm">Tech Degrees</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-1">🌎</div>
            <div className="text-gray-600 text-sm">English & Spanish</div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);
