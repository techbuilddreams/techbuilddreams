import React from 'react';
import { ExternalLink, MessageSquare } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';
import { ScrollToContactButton } from '../ui/ScrollToContactButton';
import { SECTION_IDS } from '../../constants';
import { customers } from '../../data/siteData';

export const CustomersSection: React.FC = () => (
  <section id={SECTION_IDS.CUSTOMERS} className="py-20 bg-white">
    <Container>
      <SectionHeader
        title="Our Work in Action"
        subtitle="Discover the exceptional digital experiences we've crafted for visionary clients who trusted us to bring their dreams to life."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {customers.map((customer, index) => (
          <div
            key={index}
            className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                {customer.category}
              </span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
              {customer.name}
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">{customer.description}</p>

            <a
              href={customer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
            >
              Visit Site
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-6">
          Ready to see your vision become the next success story?
        </p>
        <ScrollToContactButton className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center">
          <MessageSquare className="w-5 h-5 mr-2" />
          Start Your Project
        </ScrollToContactButton>
      </div>
    </Container>
  </section>
);
