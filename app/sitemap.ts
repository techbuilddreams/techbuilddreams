import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { posts } from '@/data/blog';
import { customers } from '@/data/siteData';

const SERVICE_SLUGS = [
  'web-development',
  'mobile-apps',
  'ai-voice-agents',
  'fractional-cto',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/portfolio`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/bmf/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const portfolioRoutes: MetadataRoute.Sitemap = customers
    .filter((c) => c.hasDetailPage)
    .map((c) => ({
      url: `${SITE_URL}/portfolio/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.dateModified ? new Date(post.dateModified) : new Date(post.datePublished),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...portfolioRoutes, ...blogRoutes];
}
