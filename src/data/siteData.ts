import { Service, Value, Customer, ProcessStep, FAQ } from '../types';

export const services: Service[] = [
  {
    icon: '🎨',
    title: 'Custom Digital Experiences',
    description:
      'Meticulously crafted websites, applications, and systems designed to elevate your brand and drive results.',
    features: [
      'Premium web platforms',
      'Native mobile apps',
      'Enterprise integrations',
      'Advanced analytics',
    ],
  },
  {
    icon: '🤖',
    title: 'AI Automation & Voice Agents',
    description:
      'Never miss a call, never lose revenue. Our AI voice agents and assistants work 24/7 to capture every opportunity and scale your business.',
    features: [
      '24/7 AI voice agents for calls',
      'Custom AI assistants for your workflow',
      'Automated lead capture & follow-up',
      'Increase revenue by eliminating missed opportunities',
    ],
  },
  {
    icon: '🛡️',
    title: 'Strategic Partnership',
    description:
      'Ongoing technology leadership and support that evolves with your business ambitions.',
    features: [
      'Proactive monitoring',
      'Strategic consulting',
      'Scalability planning',
      'Executive support',
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
    question: 'Where is Tech Build Dreams located?',
    answer:
      'Tech Build Dreams LLC is located at 2125 Biscayne Blvd, Suite 204, Miami, Florida 33137. We serve clients locally in Miami and South Florida, and remotely throughout the United States and internationally.',
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
