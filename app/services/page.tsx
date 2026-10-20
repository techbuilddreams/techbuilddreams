import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { SERVICE_IDS } from '@/lib/seo';
import { breadcrumbSchema, servicesListSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Software & AI Services for Small Business',
  description:
    'Websites, apps, AI receptionists and a tech partner for small and medium-sized businesses in Miami, Albany and across the US. English or Spanish.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Software & AI Services for Small Business | Tech Build Dreams',
    description:
      'Websites, apps, AI receptionists, automations, and a senior tech partner for small businesses — Miami, Albany NY, and US-wide.',
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
      'Business websites that show up on Google, customer portals, and custom tools that replace spreadsheets — for small and medium-sized businesses.',
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
    name: 'AI Receptionist & Automation',
    url: '/services/ai-voice-agents',
    description:
      '24/7 AI receptionists that answer calls, capture leads, book appointments, and send follow-ups in English and Spanish.',
  },
  {
    id: SERVICE_IDS.fractionalCto,
    name: 'Fractional CTO & Tech Partner',
    url: '/services/fractional-cto',
    description:
      'A senior tech partner you can call before you sign a vendor contract, hire a developer, or replace a system — and when your tech breaks. Fractional CTO help for small and medium-sized businesses, in English or Spanish.',
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
            Tech Help for Small Businesses: Websites, Apps &amp; AI
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            <strong className="text-gray-900">
              Tech Build Dreams builds websites, custom tools, mobile apps, and AI receptionists
              and automations, and stays on as your senior tech partner
            </strong>{' '}
            for small and medium-sized businesses. On-site in Miami and New York&rsquo;s Capital
            Region, remote across the United States, in English or Spanish.
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
