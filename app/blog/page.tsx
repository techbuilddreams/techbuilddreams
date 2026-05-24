import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { posts } from '@/data/blog';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Blog — Notes on AI, Software Development, and Building Real Businesses',
  description:
    'Field notes from a senior engineer building AI voice agents, custom web platforms, and mobile apps for small and growing businesses. Honest pricing, real tradeoffs.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — Tech Build Dreams LLC',
    description: 'Field notes from a senior engineer building AI, web, and mobile for real businesses.',
    url: '/blog',
  },
};

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' },
]);

export default function BlogIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <section className="pt-20 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <Container maxWidth="4xl" className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Field Notes
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Honest write-ups from a senior engineer building AI voice agents, custom web platforms,
            and mobile apps. Real numbers, real tradeoffs, no agency fluff.
          </p>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container maxWidth="4xl">
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border-b border-gray-200 pb-8 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span>{new Date(post.datePublished).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                >
                  Read post →
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
