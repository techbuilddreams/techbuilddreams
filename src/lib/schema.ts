import {
  SITE_URL,
  ORG_ID,
  FOUNDER_ID,
  WEBSITE_ID,
  SERVICE_IDS,
  absUrl,
} from './seo';

export const organizationSchema = {
  '@type': ['LocalBusiness', 'ProfessionalService', 'Organization'],
  '@id': ORG_ID,
  name: 'Tech Build Dreams LLC',
  alternateName: ['Tech Build Dreams', 'TBD'],
  legalName: 'Tech Build Dreams LLC',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: absUrl('/logo.png'),
    width: 512,
    height: 512,
  },
  image: absUrl('/og-image.png'),
  description:
    'Miami-based software development and AI agency. We build custom web platforms, native iOS and Flutter mobile apps, and 24/7 AI voice agents for businesses ready to scale. Bilingual English and Spanish. Remote service across the United States including Florida, New York, and Massachusetts.',
  slogan: 'Technology That Builds Dreams',
  email: 'info@techbuilddreams.com',
  telephone: '+1-800-301-6584',
  foundingDate: '2023',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2125 Biscayne Blvd, Ste 204',
    addressLocality: 'Miami',
    addressRegion: 'FL',
    postalCode: '33137',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.7617,
    longitude: -80.1918,
  },
  areaServed: [
    { '@type': 'City', name: 'Miami', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Albany', containedInPlace: { '@type': 'State', name: 'New York' } },
    { '@type': 'City', name: 'Bronx', containedInPlace: { '@type': 'State', name: 'New York' } },
    { '@type': 'City', name: 'Boston', containedInPlace: { '@type': 'State', name: 'Massachusetts' } },
    { '@type': 'State', name: 'Florida' },
    { '@type': 'State', name: 'New York' },
    { '@type': 'State', name: 'Massachusetts' },
    { '@type': 'Country', name: 'United States' },
  ],
  serviceArea: [{ '@type': 'AdministrativeArea', name: 'United States' }],
  knowsLanguage: ['en', 'es'],
  knowsAbout: [
    'Custom Web Development',
    'React',
    'Spring Boot',
    'SaaS Platforms',
    'Native iOS Development',
    'Swift',
    'Flutter',
    'Mobile App Development',
    'AI Voice Agents',
    'AI Automation',
    'OpenAI APIs',
    'AWS Cloud Infrastructure',
    'PostgreSQL',
    'Firebase',
    'Strategic Technology Partnership',
    'Bilingual Software Consulting',
    'Latino-owned business',
    'Hispanic-owned software agency',
    'Minority-owned technology company',
    'Fractional CTO services',
    'Small business software development',
  ],
  priceRange: '$$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Credit Card, Bank Transfer, ACH',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/93594952',
    'https://www.instagram.com/techbuilddreams/',
    'https://www.facebook.com/techbuilddreams/',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-800-301-6584',
      email: 'info@techbuilddreams.com',
      contactType: 'sales',
      areaServed: 'US',
      availableLanguage: ['en', 'es'],
    },
    {
      '@type': 'ContactPoint',
      email: 'info@techbuilddreams.com',
      contactType: 'customer support',
      areaServed: 'US',
      availableLanguage: ['en', 'es'],
    },
  ],
  founder: { '@id': FOUNDER_ID },
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@id': SERVICE_IDS.web } },
    { '@type': 'Offer', itemOffered: { '@id': SERVICE_IDS.mobile } },
    { '@type': 'Offer', itemOffered: { '@id': SERVICE_IDS.aiVoice } },
    { '@type': 'Offer', itemOffered: { '@id': SERVICE_IDS.fractionalCto } },
  ],
};

export const founderSchema = {
  '@type': 'Person',
  '@id': FOUNDER_ID,
  name: 'Shender Ramos',
  givenName: 'Shender',
  familyName: 'Ramos',
  jobTitle: 'Founder & Lead Software Engineer',
  description:
    'Latino software engineer with 10+ years of experience and dual degrees in Computer Science and Information Technology. Founder of Tech Build Dreams LLC.',
  knowsLanguage: ['en', 'es'],
  knowsAbout: [
    'Full-Stack Software Engineering',
    'React',
    'Spring Boot',
    'Swift iOS Development',
    'Flutter',
    'AWS Cloud Architecture',
    'AI Integration',
    'Technology Strategy',
  ],
  url: 'https://shenderramos.com',
  sameAs: [
    'https://shenderramos.com',
    'https://www.linkedin.com/company/93594952',
  ],
  worksFor: { '@id': ORG_ID },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Northern Essex Community College',
  },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      educationalLevel: 'Associate',
      name: 'Associate of Science in Computer Science',
      recognizedBy: {
        '@type': 'EducationalOrganization',
        name: 'Northern Essex Community College',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      educationalLevel: 'Associate',
      name: 'Associate of Science in Information Technology',
      recognizedBy: {
        '@type': 'EducationalOrganization',
        name: 'Northern Essex Community College',
      },
    },
  ],
  nationality: { '@type': 'Country', name: 'United States' },
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: 'Tech Build Dreams LLC',
  description:
    'Technology That Builds Dreams — Miami software development, mobile app development, and AI voice agents for businesses ready to scale.',
  publisher: { '@id': ORG_ID },
  inLanguage: 'en',
};

export const siteWideGraph = {
  '@context': 'https://schema.org',
  '@graph': [organizationSchema, founderSchema, websiteSchema],
};

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: absUrl(item.url),
    })),
  };
}

export interface ServicePageSchemaInput {
  id: string;
  name: string;
  url: string;
  description: string;
  serviceType: string;
  category: string;
  audience?: string;
  priceMin?: number;
  priceMax?: number;
}

export function serviceSchema(input: ServicePageSchemaInput) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': input.id,
    name: input.name,
    url: absUrl(input.url),
    serviceType: input.serviceType,
    category: input.category,
    description: input.description,
    provider: { '@id': ORG_ID },
    areaServed: [{ '@type': 'Country', name: 'United States' }],
  };

  if (input.audience) {
    schema.audience = {
      '@type': 'BusinessAudience',
      audienceType: input.audience,
    };
  }

  if (input.priceMin || input.priceMax) {
    schema.offers = {
      '@type': 'Offer',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        ...(input.priceMin && { minPrice: input.priceMin }),
        ...(input.priceMax && { maxPrice: input.priceMax }),
      },
    };
  }

  return schema;
}

export function faqPageSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.faq-question', '.faq-answer'],
    },
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export interface PortfolioItem {
  name: string;
  url: string;
  description: string;
  category: string;
  hasDetailPage: boolean;
  slug: string;
}

export function portfolioItemListSchema(items: PortfolioItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Tech Build Dreams Portfolio',
    description:
      'Selected case studies and live products built by Tech Build Dreams LLC — SaaS platforms, mobile apps, and business websites.',
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    numberOfItems: items.length,
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'CreativeWork',
        name: item.name,
        description: item.description,
        url: item.hasDetailPage ? absUrl(`/portfolio/${item.slug}`) : item.url,
        genre: item.category,
        creator: { '@id': ORG_ID },
      },
    })),
  };
}

export function profilePageSchema(input: { url: string; name: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: absUrl(input.url),
    name: input.name,
    mainEntity: { '@id': FOUNDER_ID },
    about: { '@id': ORG_ID },
    breadcrumb: { '@type': 'BreadcrumbList' },
    inLanguage: 'en',
  };
}

export interface BlogPostSchemaInput {
  url: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}

export function blogPostSchema(input: BlogPostSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.title,
    description: input.description,
    image: input.image ? absUrl(input.image) : absUrl('/og-image.png'),
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: { '@id': FOUNDER_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absUrl(input.url),
    },
  };
}

export interface CaseStudySchemaInput {
  url: string;
  name: string;
  description: string;
  externalUrl: string;
  category: string;
}

export function caseStudySchema(input: CaseStudySchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: input.name,
    description: input.description,
    url: input.externalUrl,
    genre: input.category,
    creator: { '@id': ORG_ID },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absUrl(input.url),
    },
  };
}
