import { COMPANY_EMAIL, COMPANY_PHONE, SOCIAL_LINKS } from '../constants';

/**
 * Canonical business facts — the single source of truth for anything that
 * states who we are, where we are, or what we charge.
 *
 * Consumed by:
 *   - src/lib/schema.ts   (JSON-LD structured data)
 *   - src/lib/aiDiscovery.ts (/llms.txt and /ai.txt)
 *
 * These three used to be maintained by hand and drifted apart. Change a fact
 * here and every consumer stays in sync.
 */

export interface ServiceArea {
  /** Omitted for statewide / nationwide entries. */
  city?: string;
  state: string;
  /** Human-readable qualifier, e.g. "HQ — on-site & remote". */
  note: string;
}

export const business = {
  legalName: 'Tech Build Dreams LLC',
  shortName: 'Tech Build Dreams',
  alternateNames: ['Tech Build Dreams', 'TBD'],
  slogan: 'Technology That Builds Dreams',
  foundingDate: '2023',

  email: COMPANY_EMAIL,
  telephone: COMPANY_PHONE,

  /** BCP 47 codes for schema.org `knowsLanguage`. */
  languages: ['en', 'es'],
  /** Display form for the prose-oriented AI discovery files. */
  languageNames: 'English, Spanish',

  description:
    'Miami-based software development and AI agency. We build custom web platforms, native iOS and Flutter mobile apps, and 24/7 AI voice agents for businesses ready to scale. Bilingual English and Spanish. Remote service across the United States including Florida, New York, and Massachusetts.',

  address: {
    streetAddress: '2125 Biscayne Blvd, Ste 204',
    addressLocality: 'Miami',
    addressRegion: 'FL',
    postalCode: '33137',
    addressCountry: 'US',
  },

  /** Spelled-out forms for prose. schema.org wants the codes above. */
  addressRegionName: 'Florida',
  addressCountryName: 'United States',

  geo: { latitude: 25.7617, longitude: -80.1918 },

  openingHours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },

  serviceAreas: [
    { city: 'Miami', state: 'Florida', note: 'HQ — on-site & remote' },
    { city: 'Albany', state: 'New York', note: 'remote' },
    { city: 'Bronx', state: 'New York', note: 'remote' },
    { city: 'Boston', state: 'Massachusetts', note: 'remote' },
  ] as ServiceArea[],

  founder: {
    name: 'Shender Ramos',
    givenName: 'Shender',
    familyName: 'Ramos',
    jobTitle: 'Founder & Lead Software Engineer',
    /** Credentials only — consumers append their own framing sentence. */
    bio: 'a Latino software engineer with 10+ years of experience and dual degrees in Computer Science and Information Technology',
    url: 'https://shenderramos.com',
    alumniOf: 'Northern Essex Community College',
    /**
     * The founder's OWN profiles — not the company's. Keep these separate from
     * `business.sameAs` so Google resolves the Person and the Organization as
     * two distinct entities.
     *
     * TODO(shender): add a personal LinkedIn and GitHub here. Right now this is
     * the thinnest signal on the site for the person we actually sell.
     */
    sameAs: ['https://shenderramos.com'],
  },

  pricing: '$15,000–$250,000+ per project; ongoing partnership retainers available',

  differentiators: [
    'Bilingual English & Spanish service',
    'Latino-owned / Hispanic-owned technology company',
    'Founder is a hands-on senior engineer (not a sales agency)',
    'Remote-first delivery across the United States',
    'Free 15-minute discovery call, response within 24 hours',
  ],

  technologies: [
    { label: 'Frontend', items: 'React, TypeScript, Tailwind CSS' },
    { label: 'Mobile', items: 'Swift (iOS native), Flutter (cross-platform)' },
    { label: 'Backend', items: 'Java Spring Boot, Node.js' },
    { label: 'Database', items: 'PostgreSQL, Firebase' },
    { label: 'Cloud', items: 'AWS (EC2, RDS, S3, Lambda)' },
    { label: 'AI', items: 'OpenAI APIs, AI voice agents, automation workflows' },
    { label: 'Mobile monetization', items: 'RevenueCat, AdMob' },
  ],

  /** Profiles Google and AI crawlers use to resolve us as one entity. */
  sameAs: [
    'https://maps.app.goo.gl/em6vPuCeL5jRJrtk8',
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.instagram,
    SOCIAL_LINKS.facebook,
  ],

  socials: [
    { label: 'LinkedIn', url: SOCIAL_LINKS.linkedin },
    { label: 'Instagram', url: SOCIAL_LINKS.instagram },
    { label: 'Facebook', url: SOCIAL_LINKS.facebook },
  ],
} as const;

/** "2125 Biscayne Blvd, Ste 204, Miami, Florida 33137, United States" */
export function formattedAddress(): string {
  const a = business.address;
  return [
    a.streetAddress,
    a.addressLocality,
    `${business.addressRegionName} ${a.postalCode}`,
    business.addressCountryName,
  ].join(', ');
}
