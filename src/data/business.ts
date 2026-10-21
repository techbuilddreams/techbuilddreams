import {
  COMPANY_EMAIL,
  COMPANY_PHONE,
  GOOGLE_BUSINESS_PROFILE,
  SOCIAL_LINKS,
} from '../constants';

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
  /** e.g. "NY" — for compact prose (footer, hero). schema.org wants `state`. */
  stateAbbr: string;
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
    'Software and AI partner for small and medium-sized businesses, based in Miami, FL and New York\u2019s Capital Region. We build websites that show up on Google, custom tools that replace spreadsheets, iPhone and Android apps, and 24/7 AI receptionists and automations for booking and follow-ups. A senior engineer directs a team of AI coding agents; every change is tested and reviewed before it ships. Bilingual English and Spanish. Remote service across the United States including Florida, New York, New Jersey, and Massachusetts.',

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

  /**
   * Matches the GBP's actual hours (confirmed 2026-08-26: the owner keeps
   * the weekend hours as-is). Grouped by distinct opens/closes pair, the
   * same shape schema.org's OpeningHoursSpecification expects, so
   * schema.ts maps this 1:1 instead of reshaping it.
   */
  openingHours: [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    { days: ['Saturday'], opens: '09:00', closes: '16:00' },
    { days: ['Sunday'], opens: '12:00', closes: '16:00' },
  ],

  /**
   * Kept in step with the Service area list on the Google Business Profile —
   * that list is the source of truth. Deliberately at city granularity, not
   * the hamlet/neighborhood granularity GBP's picker allows (e.g. Glenmont
   * folds into Albany here).
   *
   * TODO(shender): the Capital Region cluster below was expanded to on-site
   * on 2026-09-14 when you relocated. MIRROR THIS IN THE GOOGLE BUSINESS
   * PROFILE — schema alone does not move the local pack. GBP is what ranks.
   */
  serviceAreas: [
    { city: 'Miami', state: 'Florida', stateAbbr: 'FL', note: 'HQ — on-site & remote' },
    { city: 'Albany', state: 'New York', stateAbbr: 'NY', note: 'on-site & remote' },
    { city: 'Schenectady', state: 'New York', stateAbbr: 'NY', note: 'on-site & remote' },
    { city: 'Troy', state: 'New York', stateAbbr: 'NY', note: 'on-site & remote' },
    { city: 'Colonie', state: 'New York', stateAbbr: 'NY', note: 'on-site & remote' },
    { city: 'Latham', state: 'New York', stateAbbr: 'NY', note: 'on-site & remote' },
    { city: 'Clifton Park', state: 'New York', stateAbbr: 'NY', note: 'on-site & remote' },
    { city: 'Guilderland', state: 'New York', stateAbbr: 'NY', note: 'on-site & remote' },
    { city: 'Cohoes', state: 'New York', stateAbbr: 'NY', note: 'on-site & remote' },
    { city: 'Rensselaer', state: 'New York', stateAbbr: 'NY', note: 'on-site & remote' },
    { city: 'Bronx', state: 'New York', stateAbbr: 'NY', note: 'remote' },
    { city: 'White Plains', state: 'New York', stateAbbr: 'NY', note: 'remote' },
    { city: 'Yonkers', state: 'New York', stateAbbr: 'NY', note: 'remote' },
    { city: 'New Rochelle', state: 'New York', stateAbbr: 'NY', note: 'remote' },
    { city: 'Boston', state: 'Massachusetts', stateAbbr: 'MA', note: 'remote' },
    { city: 'West New York', state: 'New Jersey', stateAbbr: 'NJ', note: 'remote' },
  ] as ServiceArea[],

  founder: {
    name: 'Shender Ramos',
    givenName: 'Shender',
    familyName: 'Ramos',
    jobTitle: 'Founder & Lead Software Engineer',
    /** Credentials only — consumers append their own framing sentence. */
    bio: 'a Latino software engineer with 10+ years of experience and two associate degrees, in Computer Science and in Information Technology',
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

  pricing: 'Written quotes after a free discovery call, sized for small and medium-sized businesses; ongoing partnership retainers available',

  differentiators: [
    'Bilingual English & Spanish service',
    'Latino-owned / Hispanic-owned technology company',
    'Founder is a hands-on senior engineer (not a sales agency) who directs AI coding agents and reviews every change',
    'On custom builds, clients own their code, domains and accounts',
    'Remote-first delivery across the United States',
    'Free 15-minute discovery call, response within 24 hours',
  ],

  technologies: [
    { label: 'Frontend', items: 'React, TypeScript, Tailwind CSS' },
    { label: 'Mobile', items: 'Swift (iOS native), Flutter (cross-platform)' },
    { label: 'Backend', items: 'Java Spring Boot, Node.js' },
    { label: 'Database', items: 'PostgreSQL, Firebase' },
    { label: 'Cloud', items: 'AWS (EC2, RDS, S3, Lambda)' },
    { label: 'AI', items: 'AI receptionists and voice agents, automation workflows, OpenAI APIs' },
    { label: 'Mobile monetization', items: 'RevenueCat, AdMob' },
  ],

  /**
   * Public profiles, in the order they appear in the footer.
   *
   * Keep this in step with the Social profiles list on the Google Business
   * Profile — each side previously knew about channels the other did not,
   * which fragments the entity graph Google builds from them.
   */
  socials: [
    { label: 'LinkedIn', url: SOCIAL_LINKS.linkedin },
    { label: 'Instagram', url: SOCIAL_LINKS.instagram },
    { label: 'Facebook', url: SOCIAL_LINKS.facebook },
    { label: 'YouTube', url: SOCIAL_LINKS.youtube },
  ],
} as const;

/**
 * Everything Google and AI crawlers use to resolve us as one entity: the
 * Business Profile plus every social channel. Derived from `socials` so a new
 * profile only has to be added in one place.
 */
export const organizationSameAs: string[] = [
  GOOGLE_BUSINESS_PROFILE,
  ...business.socials.map((s) => s.url),
];

/** Every state we serve, in first-appearance order — for schema.org `areaServed`. */
export function serviceAreaStates(): string[] {
  return [...new Set(business.serviceAreas.map((a) => a.state))];
}

/** Cities grouped by state, in first-appearance order — e.g. for footer prose. */
export function serviceAreasByState(): Array<{ state: string; stateAbbr: string; cities: string[] }> {
  const groups: Array<{ state: string; stateAbbr: string; cities: string[] }> = [];
  for (const area of business.serviceAreas) {
    const group = groups.find((g) => g.state === area.state);
    if (group) group.cities.push(area.city ?? area.state);
    else groups.push({ state: area.state, stateAbbr: area.stateAbbr, cities: [area.city ?? area.state] });
  }
  return groups;
}

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
