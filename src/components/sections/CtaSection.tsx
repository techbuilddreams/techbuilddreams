import React from 'react';
import { MessageSquare, Mail } from 'lucide-react';
import { Container } from '../layout/Container';
import { ScrollToContactButton } from '../ui/ScrollToContactButton';
import { EmailLink } from '../ui/EmailLink';

export const CtaSection: React.FC = () => (
  <section className="py-24 bg-blue-600">
    <Container maxWidth="4xl" className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Ready to Build Your Dream?
      </h2>
      <p className="text-xl text-blue-100 mb-10">
        Partner with us to transform your vision into exceptional technology that creates
        lasting competitive advantages.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <ScrollToContactButton className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center">
          <MessageSquare className="w-5 h-5 mr-2" />
          Get Started Today
        </ScrollToContactButton>
        <EmailLink className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center">
          <Mail className="w-5 h-5 mr-2" />
          Email Directly
        </EmailLink>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="font-semibold text-white mb-2">Quick Response</h3>
          <p className="text-blue-100">We respond within 24 hours</p>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">Transparent Process</h3>
          <p className="text-blue-100">Clear timelines and milestones</p>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">Proven Results</h3>
          <p className="text-blue-100">10 years of successful projects</p>
        </div>
      </div>
    </Container>
  </section>
);
