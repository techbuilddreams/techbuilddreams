import { getPostBySlug, getPostSlugs } from '@/data/blog';
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '@/lib/ogImage';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Tech Build Dreams LLC';

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return renderOgImage({
    eyebrow: post?.category ?? 'Field Notes',
    title: post?.title ?? 'Field Notes',
  });
}
