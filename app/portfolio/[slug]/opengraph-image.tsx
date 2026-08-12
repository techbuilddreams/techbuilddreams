import { getCaseStudyBySlug, getCaseStudySlugs } from '@/data/siteData';
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '@/lib/ogImage';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Tech Build Dreams LLC case study';

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  return renderOgImage({
    eyebrow: study ? `Case Study · ${study.category}` : 'Case Study',
    title: study?.name ?? 'Our Work',
  });
}
