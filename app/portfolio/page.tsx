import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { customers } from '@/data/siteData';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Portfolio — Software Development & AI Case Studies',
  description:
    'Selected case studies from Tech Build Dreams LLC: AI-powered SaaS, gig-economy mobile apps, bilingual marketing sites, and 24/7 service-business websites. Miami-based, US-wide.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Portfolio — Software Development & AI Case Studies',
    description:
      'Selected case studies: AI SaaS, mobile apps, and business sites built by Tech Build Dreams.',
    url: '/portfolio',
  },
};

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Portfolio', url: '/portfolio' },
]);

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <section className="pt-20 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <Container maxWidth="4xl" className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Selected Work
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A few of the platforms, apps, and AI products we&rsquo;ve shipped for clients across the
            US. Each one solves a specific business problem — read the case studies for the full
            story.
          </p>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {customers.map((customer) => (
              <article
                key={customer.slug}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    {customer.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{customer.name}</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">{customer.description}</p>
                <div className="flex gap-4">
                  {customer.hasDetailPage && (
                    <Link
                      href={`/portfolio/${customer.slug}`}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                    >
                      Read case study →
                    </Link>
                  )}
                  <a
                    href={customer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-500 hover:text-blue-700"
                  >
                    Visit site
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-blue-600">
        <Container maxWidth="4xl" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to see your project here?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Tell us what you&rsquo;re building. We respond within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Start a Project
          </Link>
        </Container>
      </section>
    </>
  );
}
