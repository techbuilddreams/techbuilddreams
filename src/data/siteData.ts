import { Service, Value, Customer, ProcessStep } from '../types';

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
