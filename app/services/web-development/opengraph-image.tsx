import { OG_CONTENT_TYPE, OG_SIZE, renderServiceOgImage } from '@/lib/ogImage';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Tech Build Dreams LLC service';

export default function OpengraphImage() {
  return renderServiceOgImage('/services/web-development');
}
