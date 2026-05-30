import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { SERVICE_IDS } from '@/lib/seo';
import { breadcrumbSchema, servicesListSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Software, Mobile App & AI Services — Tech Build Dreams',
  description:
    'Tech Build Dreams offers custom web development, native iOS and Flutter mobile apps, 24/7 AI voice agents, and fractional CTO services. Miami-based, bilingual (EN/ES), remote across the United States.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Software, Mobile App & AI Services — Tech Build Dreams',
    description:
      'Custom web platforms, mobile apps, AI voice agents, and fractional CTO services — Miami-based, US-wide.',
    url: '/services',
  },
};

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
]);

const servicesList = servicesListSchema([
  {
    id: SERVICE_IDS.web,
    name: 'Custom Web Development',
    url: '/services/web-development',
    description:
      'Custom React web platforms, SaaS applications, and Spring Boot APIs — built to scale from MVP to enterprise.',
  },
  {
    id: SERVICE_IDS.mobile,
    name: 'Mobile App Development',
    url: '/services/mobile-apps',
    description:
      'Native iOS apps in Swift and cross-platform iOS/Android apps in Flutter, including App Store deployment and in-app subscriptions.',
  },
  {
    id: SERVICE_IDS.aiVoice,
    name: 'AI Voice Agents & Automation',
    url: '/services/ai-voice-agents',
    description:
      '24/7 AI voice agents that answer calls, capture leads, schedule appointments, and qualify customers in English and Spanish.',
  },
  {
    id: SERVICE_IDS.fractionalCto,
    name: 'Fractional CTO & Strategic Technology Partnership',
    url: '/services/fractional-cto',
    description:
      'Fractional CTO and ongoing technology leadership for founders and executives scaling beyond MVP, with bilingual (EN/ES) executive support.',
  },
]);

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesList) }}
      />

      <section className="pt-20 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <Container maxWidth="4xl" className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Software, Mobile App &amp; AI Services
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            <strong className="text-gray-900">
              Tech Build Dreams builds custom web platforms, native mobile apps, 24/7 AI voice
              agents, and provides fractional CTO leadership
            </strong>{' '}
            for small businesses and growing teams. Miami-based, bilingual (English / Spanish),
            and delivered remotely across the United States.
          </p>
        </Container>
      </section>

      <ServicesSection />

      <section className="py-20 bg-blue-600">
        <Container maxWidth="4xl" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not sure which service fits?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Free 15-minute discovery call. We&rsquo;ll tell you which engagement makes sense — and
            when none of them do.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Start a Conversation
          </Link>
        </Container>
      </section>
    </>
  );
}
