import React from 'react';
import Link from 'next/link';
import { CheckCircle, MessageSquare, Clock, DollarSign } from 'lucide-react';
import { Container } from '../layout/Container';
import {
  serviceSchema,
  breadcrumbSchema,
  faqPageSchema,
  type ServicePageSchemaInput,
} from '@/lib/schema';

interface ServiceFAQ {
  question: string;
  answer: string;
}

interface RelatedService {
  href: string;
  label: string;
}

export interface ServicePageProps {
  slug: string;
  title: string;
  h1: string;
  tagline: string;
  intro: string;
  audience: string;
  features: string[];
  outcomes: string[];
  timeline: string;
  priceRange: string;
  schema: ServicePageSchemaInput;
  faqs?: ServiceFAQ[];
  related?: RelatedService[];
}

export const ServicePage: React.FC<ServicePageProps> = ({
  slug,
  title,
  h1,
  tagline,
  intro,
  audience,
  features,
  outcomes,
  timeline,
  priceRange,
  schema,
  faqs = [],
  related = [],
}) => {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: title, url: `/services/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(schema)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
        />
      )}

      <section className="pt-20 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <Container maxWidth="4xl" className="text-center">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-4">
            {tagline}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {h1}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">{intro}</p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Start a Conversation
          </Link>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container maxWidth="4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What you get</h2>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Built for</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{audience}</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Outcomes you can expect</h3>
              <ul className="space-y-2">
                {outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 bg-gray-50">
        <Container maxWidth="4xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl flex items-center">
              <div className="bg-blue-100 rounded-lg p-3 mr-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Typical timeline</h3>
                <p className="text-gray-600">{timeline}</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl flex items-center">
              <div className="bg-green-100 rounded-lg p-3 mr-4">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Investment range</h3>
                <p className="text-gray-600">{priceRange}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {faqs.length > 0 && (
        <section className="py-16 bg-white">
          <Container maxWidth="4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Common questions about this service
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {related.length > 0 && (
        <section className="py-16 bg-gray-50">
          <Container maxWidth="4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Related services
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {related.map((rel) => (
                <Link
                  key={rel.href}
                  href={rel.href}
                  className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 border border-blue-200 transition-colors"
                >
                  {rel.label}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-20 bg-blue-600">
        <Container maxWidth="4xl" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to start? Let&rsquo;s talk.
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Free 15-minute discovery call. We respond within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Book a Discovery Call
          </Link>
        </Container>
      </section>
    </>
  );
};
