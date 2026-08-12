import { ImageResponse } from 'next/og';
import { services } from '../data/siteData';

/**
 * Shared Open Graph card renderer.
 *
 * Every page used to share one static /og-image.png, so a blog post and a
 * service page looked identical when shared. Routes now export an
 * `opengraph-image` that calls this with their own title.
 *
 * Rendered by satori: every element with more than one child needs an
 * explicit `display: 'flex'`, and only a subset of CSS is supported.
 */

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = 'image/png';

export interface OgImageInput {
  /** Small uppercase label above the title, e.g. "AI Voice Agents". */
  eyebrow: string;
  title: string;
}

/**
 * satori has no line clamping, so an over-long headline would run off the
 * card. Step the size down instead. Verified against the longest current
 * title (100 chars); the 120 tier is headroom for future content.
 */
function titleFontSize(title: string): number {
  if (title.length > 120) return 48;
  if (title.length > 70) return 62;
  return 76;
}

export function renderOgImage({ eyebrow, title }: OgImageInput): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #1d4ed8 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#bfdbfe',
              fontWeight: 600,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: titleFontSize(title),
              lineHeight: 1.12,
              color: '#ffffff',
              fontWeight: 700,
              display: 'flex',
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '2px solid rgba(255,255,255,0.25)',
            paddingTop: 28,
          }}
        >
          <div style={{ fontSize: 30, color: '#ffffff', fontWeight: 700 }}>
            Tech Build Dreams LLC
          </div>
          <div style={{ fontSize: 26, color: '#bfdbfe' }}>techbuilddreams.com</div>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}

/**
 * OG card for a service page, looked up by its route so the four
 * `opengraph-image.tsx` files stay one line each.
 */
export function renderServiceOgImage(href: string): ImageResponse {
  const service = services.find((s) => s.href === href);
  return renderOgImage({
    eyebrow: service ? service.timeline : 'Services',
    title: service?.title ?? 'Web, Mobile & AI Services',
  });
}
