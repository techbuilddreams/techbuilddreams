import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';
import { SECTION_IDS } from '../../constants';
import { faqs } from '../../data/siteData';

export const FAQSection: React.FC = () => (
  <section id={SECTION_IDS.FAQ} className="py-20 bg-white">
    <Container maxWidth="4xl">
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about working with Tech Build Dreams."
      />

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group border border-gray-200 rounded-xl overflow-hidden bg-white"
          >
            <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors duration-200">
              <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
              <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="px-6 pb-5">
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </Container>
  </section>
);
