export const SITE_URL = 'https://techbuilddreams.com';

export const ORG_ID = `${SITE_URL}/#organization`;
export const FOUNDER_ID = `${SITE_URL}/#founder`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const SERVICE_IDS = {
  web: `${SITE_URL}/services/web-development#service`,
  mobile: `${SITE_URL}/services/mobile-apps#service`,
  aiVoice: `${SITE_URL}/services/ai-voice-agents#service`,
  fractionalCto: `${SITE_URL}/services/fractional-cto#service`,
} as const;

export function absUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

interface JsonLdProps {
  id?: string;
  data: object;
}

export function jsonLdScript({ id, data }: JsonLdProps) {
  return {
    id,
    type: 'application/ld+json' as const,
    content: JSON.stringify(data),
  };
}
