import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';
import { SECTION_IDS } from '../../constants';
import { services } from '../../data/siteData';

export const ServicesSection: React.FC = () => (
  <section id={SECTION_IDS.HOW_WE_HELP} className="py-20 bg-gray-50">
    <Container>
      <SectionHeader
        title="How We Help Your Business Grow"
        subtitle="Exceptional technology solutions crafted for visionaries ready to transform their industries."
      />

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-5xl mb-6 text-center">{service.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
            <p className="text-gray-600 mb-6 text-center leading-relaxed">
              {service.description}
            </p>

            <ul className="space-y-3">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </section>
);
