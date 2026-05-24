import type { Metadata } from 'next';
import { ServicePage } from '@/components/templates/ServicePage';
import { SERVICE_IDS } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Custom Web Development Miami — React & Spring Boot SaaS Platforms',
  description:
    'Custom web application and SaaS development in Miami. React frontends, Spring Boot APIs, AWS infrastructure. Built for founders scaling from MVP to enterprise. Bilingual English & Spanish.',
  alternates: { canonical: '/services/web-development' },
  openGraph: {
    title: 'Custom Web Development Miami — React & Spring Boot SaaS Platforms',
    description:
      'Custom web application and SaaS development in Miami. React frontends, Spring Boot APIs, AWS infrastructure.',
    url: '/services/web-development',
  },
};

export default function WebDevelopmentPage() {
  return (
    <ServicePage
      slug="web-development"
      title="Custom Web Development"
      h1="Custom Web Development for Founders Who Are Done with Templates"
      tagline="Custom Web Development · Miami"
      intro="We design and build custom web applications, SaaS platforms, and internal tools for founders and teams that need software tailored to their business — not stretched to fit a template. React frontends, Spring Boot APIs, PostgreSQL, and AWS infrastructure, delivered by a senior engineer who has shipped this stack for 10+ years."
      audience="Startups going from MVP to revenue, agencies needing a senior development partner, and growing small-to-medium businesses replacing brittle spreadsheets, no-code stacks, or aging internal tools with software that actually scales."
      features={[
        'Custom React + TypeScript web applications',
        'Spring Boot REST APIs with PostgreSQL',
        'AWS infrastructure (EC2, RDS, S3, Lambda) and CI/CD pipelines',
        'Customer portals, dashboards, and internal admin tools',
        'Enterprise integrations: Stripe, Twilio, Salesforce, HubSpot, custom APIs',
        'Authentication, role-based access, and audit logging',
        'Bilingual (English & Spanish) project communication',
      ]}
      outcomes={[
        'A production-ready platform you actually own — not locked into a no-code vendor',
        'Architecture that scales from your first paying customer to thousands',
        'Direct access to the senior engineer building it (no account-manager layer)',
        'Documented codebase and handoff so your in-house team can take over later',
      ]}
      timeline="8–16 weeks from discovery to launch"
      priceRange="$15,000 – $250,000+ depending on scope"
      schema={{
        id: SERVICE_IDS.web,
        name: 'Custom Web Development',
        url: '/services/web-development',
        description:
          'Custom React SaaS platforms, web applications, and Spring Boot APIs for startups and growing businesses. Typical timeline 8–16 weeks.',
        serviceType: 'Custom Software Development',
        category: 'Web Development',
        audience: 'Startups, SaaS founders, scaling small and medium businesses',
        priceMin: 15000,
        priceMax: 250000,
      }}
      faqs={[
        {
          question: 'Do you build websites or web applications?',
          answer:
            'We build web applications — interactive software that users log into, like SaaS platforms, customer portals, and internal tools. We do not build marketing brochure sites or WordPress themes. If you need a marketing site, a Webflow agency is a better fit.',
        },
        {
          question: 'What tech stack do you use and why?',
          answer:
            'Default: React + TypeScript on the frontend, Spring Boot (Java) on the backend, PostgreSQL for the database, and AWS for hosting. This stack is mature, well-staffed in the talent market, and battle-tested at scale. We pick alternatives (Next.js, Node, Firebase) when a project genuinely benefits from them, not because they are trendy.',
        },
        {
          question: 'Can you take over a project another developer started?',
          answer:
            'Yes — most of our engagements include a code audit phase. We will assess what is salvageable, what needs to be rewritten, and give you an honest path forward with a fixed-scope rebuild quote.',
        },
        {
          question: 'Do you sign NDAs and IP-assignment agreements?',
          answer:
            'Yes. All client work is delivered with full IP assignment. NDAs are signed before discovery calls if requested.',
        },
      ]}
      related={[
        { href: '/services/mobile-apps', label: 'Mobile App Development' },
        { href: '/services/ai-voice-agents', label: 'AI Voice Agents' },
        { href: '/services/fractional-cto', label: 'Fractional CTO' },
      ]}
    />
  );
}
