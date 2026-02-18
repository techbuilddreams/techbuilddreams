import React from 'react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';
import { SECTION_IDS } from '../../constants';
import { processSteps } from '../../data/siteData';

export const ProcessSection: React.FC = () => (
  <section id={SECTION_IDS.OUR_PROCESS} className="py-20 bg-white">
    <Container>
      <SectionHeader
        title="How We Work Together"
        subtitle="A refined process built on trust, transparency, and exceptional results. Strategic partnership from vision to victory."
      />

      <div className="grid md:grid-cols-4 gap-8">
        {processSteps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
              {step.step}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);
