import { Service, Value, Customer, ProcessStep, FAQ } from '../types';

export const services: Service[] = [
  {
    icon: '🎨',
    title: 'Custom Web & Mobile Development',
    description:
      'Custom React web platforms, SaaS applications, and native iOS / Flutter mobile apps — built to scale from MVP to enterprise. Miami-based, serving clients remotely across the United States.',
    features: [
      'Custom React & Spring Boot web platforms',
      'Native iOS (Swift) & Flutter mobile apps',
      'Enterprise integrations & APIs',
      'Advanced analytics & dashboards',
    ],
  },
  {
    icon: '🤖',
    title: 'AI Voice Agents & Automation',
    description:
      'Never miss a call, never lose revenue. Our 24/7 AI voice agents answer calls, capture leads, schedule appointments, and qualify customers — so your small business or service company captures every opportunity.',
    features: [
      '24/7 AI voice agents for inbound calls',
      'Custom AI assistants & chatbots',
      'Automated lead capture & follow-up',
      'OpenAI-powered workflows tailored to your business',
    ],
  },
  {
    icon: '🛡️',
    title: 'Strategic Technology Partnership',
    description:
      'Fractional CTO and ongoing technology leadership for founders and executives scaling beyond MVP. Proactive monitoring, architecture, and bilingual (English / Spanish) executive support.',
    features: [
      'Fractional CTO & technology advisory',
      'Proactive monitoring & scalability planning',
      'Architecture & strategic consulting',
      'Bilingual executive support (EN / ES)',
    ],
  },
];

export const values: Value[] = [
  {
    icon: '✨',
    title: 'Premium Craftsmanship',
    description: 'Beautiful, powerful technology built to excellence',
  },
  {
    icon: '🌎',
    title: 'Bilingual Excellence',
    description: 'World-class service in English & Spanish',
  },
  {
    icon: '🤝',
    title: 'Partnership Approach',
    description: 'We hold your hand from vision to reality',
  },
  {
    icon: '🚀',
    title: 'Scalable Innovation',
    description: 'Technology investments that grow with you',
  },
];

export const customers: Customer[] = [
  {
    slug: 'nurivion',
    name: 'Nurivion',
    url: 'https://nurivion.com',
    description:
      'AI-powered chat assistant SaaS platform that automates customer support, lead capture, and appointment scheduling 24/7 for small businesses',
    category: 'SaaS Platform',
    challenge:
      'Small businesses were losing inbound conversations after hours and on weekends. Existing chat tools required hand-built flows and could not handle natural conversation, so they ended up as expensive contact forms.',
    solution:
      'Designed and built Nurivion as a multi-tenant SaaS platform: a customer-facing chat widget powered by OpenAI, a configurable agent backend, and a business-owner dashboard for transcripts, leads, and bookings. Deployed on AWS with PostgreSQL.',
    stack: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'AWS', 'OpenAI APIs'],
    outcome:
      'Live SaaS product serving real customers. Powers the chat widget on Tech Build Dreams itself ("Dreamer") and a growing roster of small-business clients.',
    hasDetailPage: true,
  },
  {
    slug: 'flexdash',
    name: 'FlexDash',
    url: 'https://www.flexdash.app',
    description:
      'Mobile app for gig economy drivers — automatic mileage tracking, AI-powered earnings scanning, bank deposit reconciliation, and Amazon Flex 40-hour cap monitoring across Uber, Lyft, DoorDash, and Instacart',
    category: 'Mobile App',
    challenge:
      'Gig drivers stitching together income from Uber, Lyft, DoorDash, Instacart, and Amazon Flex had no single place to see real earnings vs. mileage vs. bank deposits — and Amazon Flex&rsquo;s 40-hour rolling cap was costing drivers blocks they did not know they were close to losing.',
    solution:
      'Built a cross-platform mobile app with automatic mileage tracking, OCR/AI-driven earnings scanning from screenshots, bank deposit reconciliation, and a rolling 40-hour cap monitor for Amazon Flex drivers. Designed for daily use in the car.',
    stack: ['Flutter', 'Firebase', 'AI/OCR APIs', 'iOS & Android'],
    outcome:
      'Live on both App Store and Play Store. Used daily by gig drivers to maximize earnings and stay compliant with platform rules.',
    hasDetailPage: true,
  },
  {
    slug: 'triple-i-roadside',
    name: 'Triple I Roadside Services',
    url: 'https://tripleiroadsideservices.com',
    description:
      '24/7 roadside assistance business website featuring service listings, coverage areas, and instant contact for towing, jump-starts, lockouts, and tire changes',
    category: 'Business Website',
    challenge:
      'A 24/7 roadside-assistance operator was relying on word of mouth and a basic listing. Drivers stranded at 2am needed a fast, mobile-first way to find services, see coverage areas, and call immediately.',
    solution:
      'Designed and shipped a fast, SEO-optimized business website with clear service breakdowns (towing, jump-starts, lockouts, tire changes), coverage area maps, and one-tap call-to-dispatch buttons optimized for mobile.',
    stack: ['React', 'Static site generation', 'Vercel', 'SEO schema'],
    outcome:
      'Live site with structured-data-rich pages targeting local roadside-assistance queries, mobile-optimized for stranded-driver intent.',
    hasDetailPage: true,
  },
  {
    slug: 'elysi',
    name: 'Elysi',
    url: 'https://elysi.app',
    description:
      'Mobile app landing page showcasing an innovative iOS/Android application available in the App Store',
    category: 'Mobile App',
    challenge:
      'A consumer mobile product needed a polished landing page and App Store presence to convert paid traffic and press mentions into installs.',
    solution:
      'Designed the landing page, built the marketing site, and supported the App Store and Play Store listings for both iOS and Android.',
    stack: ['React', 'iOS', 'Android', 'App Store Connect', 'Play Console'],
    outcome:
      'Live on both stores with a landing page geared for install-conversion.',
    hasDetailPage: true,
  },
  {
    slug: 'tabla-jaladora',
    name: 'Tabla Jaladora',
    url: 'https://tablajaladora.com',
    description:
      'Mobile app landing page for a dynamic iOS/Android application featured in the App Store',
    category: 'Mobile App',
    challenge:
      'A bilingual consumer app needed a marketing presence that converted Spanish-speaking and English-speaking visitors into installs from a single landing page.',
    solution:
      'Designed and built a bilingual mobile-app landing page with App Store / Play Store deep-links and conversion-focused above-the-fold copy.',
    stack: ['React', 'iOS', 'Android', 'Bilingual UX'],
    outcome:
      'Live on both stores with a landing page tailored to a bilingual audience.',
    hasDetailPage: true,
  },
  {
    slug: 'shenderramos',
    name: 'Shender Ramos',
    url: 'https://shenderramos.com',
    description: 'Personal blog featuring insights, thoughts, and creative content',
    category: 'Personal Blog',
    challenge: '',
    solution: '',
    stack: [],
    outcome: '',
    hasDetailPage: false,
  },
];

export const faqs: FAQ[] = [
  {
    question: 'What services does Tech Build Dreams offer?',
    answer:
      'Tech Build Dreams offers custom web platform development, native iOS and Flutter mobile app development, AI voice agents and automation, and ongoing strategic technology partnerships. We serve startups through enterprise clients in both English and Spanish.',
  },
  {
    question: 'What is an AI voice agent and how can it help my business?',
    answer:
      'An AI voice agent is a 24/7 automated system that answers calls, captures leads, schedules appointments, and handles customer inquiries on your behalf — so your business never misses a revenue opportunity, even outside business hours.',
  },
  {
    question: 'How long does it take to build a custom web application?',
    answer:
      'Custom web applications typically take 8–16 weeks from discovery to launch. Mobile apps take 6–12 weeks, and AI integrations take 4–8 weeks. Every project starts with a free discovery call to define scope, timeline, and investment parameters.',
  },
  {
    question: 'Does Tech Build Dreams work with Spanish-speaking clients?',
    answer:
      'Yes. Tech Build Dreams provides full bilingual service in English and Spanish. Founded by a Latino software engineer, we proudly serve English and Spanish-speaking clients across the US, Latin America, and worldwide.',
  },
  {
    question: 'Where is Tech Build Dreams located and what areas do you serve?',
    answer:
      'Tech Build Dreams LLC is headquartered at 2125 Biscayne Blvd, Suite 204, Miami, Florida 33137. We serve clients locally in Miami and South Florida, and remotely throughout the United States — including Albany NY, Bronx NY, Boston and the rest of Massachusetts, and anywhere in the country that needs senior software talent and AI integration.',
  },
  {
    question: 'What technologies does Tech Build Dreams use?',
    answer:
      "Our stack includes React and Spring Boot for web applications, Swift and Flutter for mobile apps, AWS for cloud infrastructure, PostgreSQL for databases, and OpenAI APIs for AI-powered features. We select the best technology for each client's specific needs.",
  },
  {
    question: 'How much does it cost to build a custom application?',
    answer:
      'Project investment typically ranges from $15,000 for focused digital products to $250,000+ for enterprise solutions. We also offer ongoing executive technology partnership retainers. Contact us for a transparent proposal tailored to your vision.',
  },
  {
    question: 'How do I get started with Tech Build Dreams?',
    answer:
      'Getting started is simple. Contact us at info@techbuilddreams.com or fill out the contact form on our website. We guarantee a response within 24 hours and offer a free 15-minute discovery call to explore your vision and project requirements.',
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: '1',
    title: 'Discovery & Vision',
    description:
      'We dive deep into your goals, challenges, and market opportunities to craft the perfect strategy.',
  },
  {
    step: '2',
    title: 'Strategic Design',
    description:
      'Architect a solution that aligns with your vision and positions you for sustainable growth.',
  },
  {
    step: '3',
    title: 'Expert Execution',
    description:
      'Build exceptional technology with transparent progress tracking and regular milestone deliveries.',
  },
  {
    step: '4',
    title: 'Continued Success',
    description:
      'Launch with confidence and ongoing partnership to ensure your technology evolves with your ambitions.',
  },
];

export function getCaseStudyBySlug(slug: string): Customer | undefined {
  return customers.find((c) => c.slug === slug && c.hasDetailPage);
}

export function getCaseStudySlugs(): string[] {
  return customers.filter((c) => c.hasDetailPage).map((c) => c.slug);
}
