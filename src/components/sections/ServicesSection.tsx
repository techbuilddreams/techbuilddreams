import React from 'react';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';
import { SECTION_IDS } from '../../constants';
import { services } from '../../data/siteData';

export const ServicesSection: React.FC = () => (
  <section id={SECTION_IDS.HOW_WE_HELP} className="py-20 bg-gray-50">
    <Container>
      <SectionHeader
        title="Web, Mobile & AI Services for Miami Businesses"
        subtitle="Custom software, native mobile apps, and 24/7 AI voice agents — from MVP to enterprise, delivered remotely across the United States."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <article
            key={service.href}
            className="flex flex-col bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-5xl mb-4 text-center">{service.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
              {service.title}
            </h3>
            <p className="text-sm text-blue-600 font-medium mb-4 text-center">
              {service.timeline}
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">{service.description}</p>

            <ul className="space-y-2 mb-6 flex-grow">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start text-gray-600 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={service.href}
              className="inline-flex items-center justify-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Learn more
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </article>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/services"
          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
        >
          Compare all services, timelines &amp; pricing
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </Container>
  </section>
);
