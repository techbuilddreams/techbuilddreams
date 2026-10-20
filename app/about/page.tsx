import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { breadcrumbSchema, profilePageSchema } from '@/lib/schema';
import { values } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'About Us — Latino-Owned Miami Software Company',
  description:
    'Latino-owned Miami software company. Shender Ramos, a senior engineer with 10+ years, directs AI coding agents and reviews every change. English or Spanish.',
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'profile',
    title: 'About Us — Latino-Owned Miami Software Company | Tech Build Dreams',
    description:
      'Shender Ramos: 10+ years of engineering, directing AI coding agents, reviewing every change. For small businesses, in English or Spanish.',
    url: '/about',
  },
};

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
]);

const aboutProfile = profilePageSchema({
  url: '/about',
  name: 'About Tech Build Dreams — Founded by Shender Ramos',
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutProfile) }}
      />

      <section className="pt-20 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <Container maxWidth="4xl" className="text-center">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-4">
            About Tech Build Dreams
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            A Senior Engineer, Not a Sales Agency
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Tech Build Dreams is a Latino-owned, Miami-based software and AI partner for small and
            medium-sized businesses, founded in 2023 by Shender Ramos — a senior software engineer with 10+
            years of experience building production systems.
          </p>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container maxWidth="4xl">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Why we exist</h2>
            <p>
              Most small businesses get the worst end of the software market. The good engineers
              go to big tech or funded startups. What&rsquo;s left for the local roofing company, the
              family restaurant, or the bilingual service business is offshore commodity work,
              high-pressure agency sales decks, and developers who stop answering halfway through.
            </p>
            <p>
              We started Tech Build Dreams to put senior, hands-on engineering in reach of the
              small business owners who actually need it most — and to do it in English <em>or</em> Spanish,
              without losing nuance in translation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 pt-4">Who builds your project</h2>
            <p>
              The same senior engineer you talk to on the discovery call designs the architecture,
              directs a team of AI coding agents, reviews every change, and ships the release.
              AI does much of the typing; a person decides what gets built, tests it, and answers
              for it. No account managers, no offshore hand-offs, no junior dev billed at senior
              rates. That&rsquo;s the point of the business.
            </p>
            <p>
              Founder Shender Ramos holds two associate degrees, in Computer Science and in Information
              Technology, from Northern Essex Community College and has 10+ years of full-stack
              experience across React, Spring Boot, Swift, Flutter, AWS, and AI integration.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 pt-4">Where we work</h2>
            <p>
              Headquartered at <strong>2125 Biscayne Blvd, Ste 204, Miami, FL 33137</strong>, we
              serve small businesses on-site in Miami and South Florida and across New York&rsquo;s
              Capital Region — Albany, Schenectady, Troy, Colonie, Latham, Clifton Park,
              Guilderland, Cohoes and Rensselaer — and remotely across the United States, including
              the Bronx, Westchester, Boston, and New Jersey.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 pt-4">Bilingual by design</h2>
            <p>
              Every call, every update, every release walk-through can run in English or Spanish.
              If your team or your customers speak Spanish, nothing gets lost in translation.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gray-50">
        <Container maxWidth="4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">What we value</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-xl">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-blue-600">
        <Container maxWidth="4xl" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to start a conversation?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Free 15-minute discovery call. We respond within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Book a Discovery Call
          </Link>
        </Container>
      </section>
    </>
  );
}
