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
    name: 'Nurivion',
    url: 'https://nurivion.com',
    description:
      'AI-powered chat assistant SaaS platform that automates customer support, lead capture, and appointment scheduling 24/7 for small businesses',
    category: 'SaaS Platform',
  },
  {
    name: 'Elysi',
    url: 'https://elysi.app',
    description:
      'Mobile app landing page showcasing an innovative iOS/Android application available in the App Store',
    category: 'Mobile App',
  },
  {
    name: 'Tabla Jaladora',
    url: 'https://tablajaladora.com',
    description:
      'Mobile app landing page for a dynamic iOS/Android application featured in the App Store',
    category: 'Mobile App',
  },
  {
    name: 'Shender Ramos',
    url: 'https://shenderramos.com',
    description:
      'Personal blog featuring insights, thoughts, and creative content',
    category: 'Personal Blog',
  },
  {
    name: 'Triple I Roadside Services',
    url: 'https://tripleiroadsideservices.com',
    description:
      '24/7 roadside assistance business website featuring service listings, coverage areas, and instant contact for towing, jump-starts, lockouts, and tire changes',
    category: 'Business Website',
  },
  {
    name: 'FlexDash',
    url: 'https://www.flexdash.app',
    description:
      'Mobile app for gig economy drivers — automatic mileage tracking, AI-powered earnings scanning, bank deposit reconciliation, and Amazon Flex 40-hour cap monitoring across Uber, Lyft, DoorDash, and Instacart',
    category: 'Mobile App',
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
