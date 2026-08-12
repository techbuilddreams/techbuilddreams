import { BLOG_DESCRIPTION, latestPostDate, postsByDateDesc } from '@/data/blog';
import { business } from '@/data/business';
import { absUrl } from '@/lib/seo';

export const dynamic = 'force-static';

/** Minimal XML escaping for text nodes and attribute values. */
function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function GET() {
  const sorted = postsByDateDesc();
  const lastBuildDate = (latestPostDate() ?? new Date(0)).toUTCString();

  const items = sorted
    .map((post) => {
      const url = escapeXml(absUrl(`/blog/${post.slug}`));
      return [
        '    <item>',
        `      <title>${escapeXml(post.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <description>${escapeXml(post.description)}</description>`,
        `      <category>${escapeXml(post.category)}</category>`,
        `      <pubDate>${new Date(post.datePublished).toUTCString()}</pubDate>`,
        `      <dc:creator>${escapeXml(business.founder.name)}</dc:creator>`,
        '    </item>',
      ].join('\n');
    })
    .join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">',
    '  <channel>',
    `    <title>${escapeXml(`${business.legalName} — Field Notes`)}</title>`,
    `    <link>${escapeXml(absUrl('/blog'))}</link>`,
    `    <description>${escapeXml(BLOG_DESCRIPTION)}</description>`,
    '    <language>en-us</language>',
    `    <lastBuildDate>${lastBuildDate}</lastBuildDate>`,
    `    <atom:link href="${escapeXml(absUrl('/blog/rss.xml'))}" rel="self" type="application/rss+xml" />`,
    `    <copyright>${escapeXml(business.legalName)}</copyright>`,
    items,
    '  </channel>',
    '</rss>',
    '',
  ].join('\n');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
