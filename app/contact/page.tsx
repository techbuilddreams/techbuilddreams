import type { Metadata } from 'next';
import { ContactSection } from '@/components/sections/ContactSection';
import { Container } from '@/components/layout/Container';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact Tech Build Dreams — Free 15-Minute Discovery Call',
  description:
    'Tell us about your project. Free 15-minute discovery call, 24-hour response. Bilingual English & Spanish. Miami HQ, remote across the US.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Tech Build Dreams — Free 15-Minute Discovery Call',
    description:
      'Free 15-minute discovery call, 24-hour response. Bilingual English & Spanish.',
    url: '/contact',
  },
};

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Contact', url: '/contact' },
]);

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <section className="pt-20 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <Container maxWidth="4xl" className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Let&rsquo;s Talk About What You&rsquo;re Building
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Free 15-minute discovery call. We respond within 24 hours, in English or Spanish, and
            give you an honest read on scope, timeline, and investment — no sales theater.
          </p>
        </Container>
      </section>
      <ContactSection />
    </>
  );
}
