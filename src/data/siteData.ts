import { Service, Value, Customer, ProcessStep, FAQ } from '../types';

export const services: Service[] = [
  {
    icon: '🎨',
    title: 'Custom Web Development',
    description:
      'Outdated website that doesn\'t show up on Google? Drowning in spreadsheets? We build fast business websites, customer portals, and custom tools that replace the copy-paste — and you own the code.',
    features: [
      'Business websites that show up on Google',
      'Customer portals & online booking',
      'Internal tools that replace spreadsheets',
      'Rescue for half-finished or AI-built apps',
    ],
    href: '/services/web-development',
    badge: 'Websites, portals & tools',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description:
      'Need an app for your business? We build iPhone and Android apps for your customers or your crew — and handle the App Store and Google Play submission for you.',
    features: [
      'iPhone & Android from one build',
      'App Store & Google Play submission',
      'Bookings, payments & push notifications',
      'Updates and fixes after launch',
    ],
    href: '/services/mobile-apps',
    badge: 'iOS & Android',
  },
  {
    icon: '🤖',
    title: 'AI Receptionist & Automation',
    description:
      'Keep missing calls while you\'re on a job? An AI receptionist answers 24/7 in English or Spanish, takes the customer\'s details, books the appointment, and texts back anyone who hung up.',
    features: [
      '24/7 AI receptionist for inbound calls',
      'Missed-call text-back',
      'Automated booking & follow-ups',
      'Website chat assistants',
    ],
    href: '/services/ai-voice-agents',
    badge: '24/7 call coverage',
  },
  {
    icon: '🛡️',
    title: 'Fractional CTO & Tech Partner',
    description:
      'A senior tech partner you can call before you sign a vendor contract, hire a developer, or replace a system — and when your tech breaks. Fractional CTO help on a monthly retainer, in English or Spanish.',
    features: [
      'A second opinion before you sign',
      'Help hiring a developer or agency',
      'Someone to call when tech breaks',
      'Monitoring of the systems you rely on',
    ],
    href: '/services/fractional-cto',
    badge: 'Ongoing retainer',
  },
];

export const values: Value[] = [
  {
    icon: '🔑',
    title: 'You own it',
    description: 'On custom builds, the code, the domain, and the accounts are in your name',
  },
  {
    icon: '📝',
    title: 'A fixed written quote',
    description: 'A written quote before any work starts. It only changes if the scope does, and you agree first'
  },
  {
    icon: '✅',
    title: 'Milestones you approve',
    description: 'You sign off on each step before we move to the next one',
  },
  {
    icon: '👀',
    title: 'Progress you can see',
    description: 'Working software you can click through every week',
  },
  {
    icon: '🧪',
    title: 'Tested before it ships',
    description: 'Every change tested and reviewed before your customers see it',
  },
  {
    icon: '🌎',
    title: 'English or Spanish',
    description: 'Calls, updates, and the finished product in your language',
  },
];

export const customers: Customer[] = [
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
    slug: 'tiendacloud',
    name: 'TiendaCloud',
    url: 'https://tiendacloud.app',
    description:
      'Cloud-based point-of-sale, inventory, and DGII-compliant tax billing platform for small and medium retailers in the Dominican Republic',
    category: 'SaaS Platform',
    challenge:
      'Dominican retailers — tiendas, boutiques, cell phone shops, restaurants, colmados, pharmacies — were stuck between manual record-keeping and POS software built for other markets. None of it issued NCF tax receipts, filed DGII&rsquo;s Formato 607, or handled the cash-and-fiado (store credit) sales culture common to Dominican small business.',
    solution:
      'Built TiendaCloud as a mobile-first, offline-capable PWA: point-of-sale, multi-branch inventory with audited transfers, WhatsApp-delivered invoices and quotes, IMEI tracking for phone retailers, a restaurant mode with table and tip management, per-customer credit limits, and automatic NCF receipts with monthly Formato 607 filings for the DGII.',
    stack: ['Next.js', 'Supabase', 'PostgreSQL', 'PWA'],
    outcome:
      'Live SaaS product serving Dominican retailers across 14+ business types, with a free trial and monthly subscription plans.',
    hasDetailPage: true,
  },
  {
    slug: 'jysmartsolution',
    name: 'JY Smart Solutions',
    url: 'https://jysmartsolution.com',
    description:
      'Bilingual-market business website for a Santo Domingo electronics retailer and repair shop — phones, accessories, air conditioning, TVs, and repair services',
    category: 'Business Website',
    challenge:
      'JY Smart Solutions needed an online presence to complement its physical Santo Domingo storefront — a fast, mobile-first way for customers to browse product categories and repair services before calling or visiting.',
    solution:
      'Designed and built a Spanish-language marketing site as an installable PWA, with WhatsApp- and Facebook-optimized social sharing and a full catalog of products and repair services presented mobile-first for a Dominican audience.',
    stack: ['React', 'Vite', 'PWA'],
    outcome:
      'Live marketing site for a Santo Domingo retailer, giving walk-in and phone customers a mobile-friendly way to browse products and repair services before visiting the store.',
    hasDetailPage: true,
  },
  {
    slug: 'drfactory',
    name: 'DR Factory C+',
    url: 'https://drfactorycigs.com',
    description:
      'Trilingual e-commerce and private-label platform for a premium handmade cigar factory in Santiago, Dominican Republic — catalog, brand configurator, and order tracking for buyers in the USA, Europe, and Latin America',
    category: 'E-commerce Platform',
    challenge:
      'A Santiago cigar factory selling private-label production to international brands, lounges, and distributors was quoting every order by hand over WhatsApp. Buyers in the USA and Europe had no way to explore blends, ring finishes, and packaging options — or see what their own brand could look like — before starting a conversation.',
    solution:
      'Designed and built a Spanish, English, and French platform with an age-verification gate, a product catalog and cart, and a step-by-step private-label configurator (vitola, wrapper, ring finish, luxury packaging) that generates a professional PDF summary and sends the quote request straight to WhatsApp. Includes order tracking and USD exchange-rate pricing for international buyers.',
    stack: ['React', 'TypeScript', 'TanStack Start', 'Tailwind CSS'],
    outcome:
      'Live platform that turns international private-label inquiries into structured, ready-to-quote requests, presenting the factory&rsquo;s craftsmanship to brands and distributors across three languages.',
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
      'Live SaaS product serving real small-business customers.',
    hasDetailPage: true,
  },
  {
    slug: 'runtimeclear',
    name: 'RuntimeClear',
    url: 'https://runtimeclear.com',
    description:
      'Open-source scanner and in-browser reporting tool that inventories Oracle Java installations for organizations responding to Java SE license reviews',
    category: 'Developer Tool',
    challenge:
      'Organizations facing an Oracle Java license review had no fast way to inventory every Java install, container image, and CI pipeline across their infrastructure — and Oracle&rsquo;s per-employee subscription pricing makes an incomplete inventory expensive to get wrong, especially ahead of Oracle&rsquo;s 2026 licensing changes.',
    solution:
      'Built RuntimeClear as an open-source, read-only scanner for Linux, macOS, and Windows, paired with an in-browser report that classifies every Java install against Oracle&rsquo;s published license terms and hands back a migration runbook to free OpenJDK builds.',
    stack: ['Open-source scanner', 'Static site', 'OpenJDK migration tooling'],
    outcome:
      'Free scanner and summary available to any organization, plus paid full reports and an MSP tier for teams that need a documented compliance artifact, backed by a refund guarantee.',
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
      'We build websites that show up on Google, custom tools that get you out of spreadsheets, iPhone and Android apps, and AI receptionists and automations that answer calls and handle booking and follow-ups. We also stay on as your senior tech partner — the person you call when your tech breaks. We work with small and medium-sized businesses — restaurants, contractors, salons, clinics, shops, and service companies — in English or Spanish.',
  },
  {
    question: 'I keep missing calls. Can an AI receptionist help?',
    answer:
      'Yes. An AI receptionist (also called an AI voice agent) answers your phone 24/7, takes the caller\'s details, answers common questions, books appointments on your calendar, and texts back anyone who hung up. When a call needs a person, it hands off to you. It can speak English and Spanish.',
  },
  {
    question: 'Do you use AI to build software?',
    answer:
      'Yes, and we\'re open about it. Shender Ramos, a senior engineer with 10+ years of experience, designs every project and directs a team of AI coding agents to do much of the typing. He reviews every change, it gets tested before it ships, and he is the person you talk to and the one accountable for the result. AI is how the work gets done; a senior engineer decides what gets built and signs off on it. If you tried building something with AI yourself and it broke, we can pick it up from there.',
  },
  {
    question: 'How long does it take to build a custom web application?',
    answer:
      'It depends on scope, so we never guess before we understand the problem. Every project starts with a free discovery call; you then get a written scope with milestones and a delivery date you approve before any work begins. Smaller automations and websites move quickly; full platforms ship in phases so you see working software early.',
  },
  {
    question: 'Does Tech Build Dreams work with Spanish-speaking clients?',
    answer:
      'Yes. Tech Build Dreams provides full bilingual service in English and Spanish. Founded by a Latino software engineer, we proudly serve English and Spanish-speaking clients across the US, Latin America, and worldwide.',
  },
  {
    question: 'Where is Tech Build Dreams located and what areas do you serve?',
    answer:
      'Tech Build Dreams LLC is headquartered at 2125 Biscayne Blvd, Suite 204, Miami, Florida 33137. We work on-site in Miami and in New York\'s Capital Region (Albany, Schenectady, Troy, Colonie, Latham, Clifton Park, Guilderland, Cohoes and Rensselaer), and remotely with small businesses across the United States — including the Bronx, Westchester, Boston, and New Jersey.',
  },
  {
    question: 'What technologies does Tech Build Dreams use?',
    answer:
      "Proven, widely used tools, so you're never stuck with something only one person can maintain: React and Next.js for websites and web apps, Spring Boot for back ends, Swift and Flutter for mobile apps, PostgreSQL and Firebase for data, AWS and Vercel for hosting, and leading AI models for receptionists and automations. We pick what fits your business, not what's trendy.",
  },
  {
    question: 'How much does it cost to build a custom application?',
    answer:
      'It depends on scope, and we size every engagement for small and medium-sized businesses — from a focused website or automation to a full custom platform, plus ongoing partnership retainers. You get a written quote after one free discovery call, and no hourly billing. If the scope changes along the way, we agree on the new price in writing before any extra work.',
  },
  {
    question: 'How do I get started with Tech Build Dreams?',
    answer:
      'Tell us what\'s slowing your business down — by email at info@techbuilddreams.com or through the contact form on this site. We respond within 24 hours and set up a free 15-minute call, in English or Spanish, to see whether we\'re the right fit.',
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: '1',
    title: 'Free 15-minute call',
    description:
      'Tell us what\'s slowing your business down — missed calls, spreadsheets, a website nobody finds. In English or Spanish.',
  },
  {
    step: '2',
    title: 'A fixed written quote',
    description:
      'A written quote and a list of milestones before any work starts. If the scope changes, we agree on it in writing first.',
  },
  {
    step: '3',
    title: 'Weekly progress you can see',
    description:
      'Working software you can click through every week. You approve each milestone before we move on, and every change is tested before it ships.',
  },
  {
    step: '4',
    title: 'Launch — and you own it',
    description:
      'On custom builds, the code, the domain, and the accounts are in your name. We stay on call if you want us to.',
  },
];

export function getCaseStudyBySlug(slug: string): Customer | undefined {
  return customers.find((c) => c.slug === slug && c.hasDetailPage);
}

export function getCaseStudySlugs(): string[] {
  return customers.filter((c) => c.hasDetailPage).map((c) => c.slug);
}
