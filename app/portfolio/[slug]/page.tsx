import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { getCaseStudyBySlug, getCaseStudySlugs } from '@/data/siteData';
import { breadcrumbSchema, caseStudySchema } from '@/lib/schema';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  const title = `${study.name} — ${study.category} Case Study`;
  return {
    title,
    description: study.description,
    alternates: { canonical: `/portfolio/${study.slug}` },
    openGraph: {
      title,
      description: study.description,
      url: `/portfolio/${study.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Portfolio', url: '/portfolio' },
    { name: study.name, url: `/portfolio/${study.slug}` },
  ]);
  const ld = caseStudySchema({
    url: `/portfolio/${study.slug}`,
    name: study.name,
    description: study.description,
    externalUrl: study.url,
    category: study.category,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <section className="pt-20 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <Container maxWidth="4xl">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-4 text-center">
            {study.category}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight text-center">
            {study.name}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed text-center mb-8">
            {study.description}
          </p>
          <div className="text-center">
            <a
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Visit {study.name}
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container maxWidth="4xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The challenge</h2>
              <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What we built</h2>
              <p className="text-gray-700 leading-relaxed">{study.solution}</p>
            </div>
            {study.stack.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Outcome</h2>
              <p className="text-gray-700 leading-relaxed">{study.outcome}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 bg-gray-50">
        <Container maxWidth="4xl" className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
          >
            ← See all case studies
          </Link>
        </Container>
      </section>

      <section className="py-20 bg-blue-600">
        <Container maxWidth="4xl" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a project like this?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Tell us what you&rsquo;re building — we respond within 24 hours.
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
