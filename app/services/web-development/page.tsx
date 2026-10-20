import type { Metadata } from 'next';
import { ServicePage } from '@/components/templates/ServicePage';
import { SERVICE_IDS } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Custom Software Development in Miami & Albany',
  description:
    'Outdated website or drowning in spreadsheets? Custom software, websites and web apps for small businesses in Miami and Albany, NY. You own the code.',
  alternates: { canonical: '/services/web-development' },
  openGraph: {
    title: 'Custom Software Development in Miami & Albany | Tech Build Dreams',
    description:
      'Websites that show up on Google, customer portals, and custom tools that replace spreadsheets. You own the code.',
    url: '/services/web-development',
  },
};

export default function WebDevelopmentPage() {
  return (
    <ServicePage
      slug="web-development"
      title="Custom Web Development"
      h1="Websites and Custom Tools for Businesses Outgrowing Spreadsheets"
      tagline="Custom Web Development · Miami"
      intro="Your website is outdated and doesn't show up on Google. Your team re-types the same order into three spreadsheets. We build business websites, customer portals, online booking, and internal tools that fit how your business actually runs — not stretched to fit a template. A senior engineer with 10+ years of experience directs a team of AI coding agents, and every change is tested and reviewed before it ships. Under the hood: React, Spring Boot, PostgreSQL, and AWS — proven tools any good developer can maintain."
      audience="Small and medium-sized businesses — restaurants, contractors, clinics, shops, and service companies — replacing an outdated website, brittle spreadsheets, a no-code setup that hit its limits, or a half-finished app from a developer who disappeared or an AI tool that broke."
      features={[
        'Custom React + TypeScript web applications',
        'Spring Boot REST APIs with PostgreSQL',
        'AWS infrastructure (EC2, RDS, S3, Lambda) and CI/CD pipelines',
        'Customer portals, dashboards, and internal admin tools',
        'Connections to the tools you already use: Stripe, Twilio, HubSpot, Salesforce, Google Sheets, custom APIs',
        'Authentication, role-based access, and audit logging',
        'Bilingual (English & Spanish) project communication',
      ]}
      outcomes={[
        'A production-ready platform you actually own — not locked into a no-code vendor',
        'Software that keeps working as you add customers, staff, and locations',
        'Direct access to the senior engineer building it (no account-manager layer)',
        'Documented codebase and handoff so your in-house team can take over later',
      ]}
      engagement="Discovery call, written scope, then milestones you approve"
      investment="Written quote after a free discovery call, sized for small and medium-sized businesses"
      schema={{
        id: SERVICE_IDS.web,
        name: 'Custom Web Development',
        url: '/services/web-development',
        description:
          'Business websites, customer portals, and custom web tools for small and medium-sized businesses.',
        serviceType: 'Custom Software Development',
        category: 'Web Development',
        audience: 'Small and medium-sized businesses',
      }}
      faqs={[
        {
          question: 'Do you build websites or web applications?',
          answer:
            'Both. This page covers web applications — interactive software that users log into, like SaaS platforms, customer portals, and internal tools. We also build fast, mobile-first business websites for local service companies on the same React and Next.js stack so you own the code either way. The one thing we do not do is patch and re-theme old WordPress installs.',
        },
        {
          question: 'What tech stack do you use and why?',
          answer:
            'Default: React + TypeScript on the frontend, Spring Boot (Java) on the backend, PostgreSQL for the database, and AWS for hosting. This stack is mature, well-staffed in the talent market, and battle-tested at scale. We pick alternatives (Next.js, Node, Firebase) when a project genuinely benefits from them, not because they are trendy.',
        },
        {
          question: 'My developer disappeared (or my AI-built app broke). Can you take it over?',
          answer:
            'Yes. We start with a code audit: what is salvageable, what needs to be rewritten, and who actually holds your domain, hosting, and code accounts. Then you get an honest path forward and a fixed quote. This includes apps started with AI builders that worked in the demo and broke with real customers.',
        },
        {
          question: 'Do you sign NDAs and IP-assignment agreements?',
          answer:
            'Yes. All client work is delivered with full IP assignment. NDAs are signed before discovery calls if requested.',
        },
      ]}
      related={[
        { href: '/services/mobile-apps', label: 'Mobile App Development' },
        { href: '/services/ai-voice-agents', label: 'AI Receptionist & Automation' },
        { href: '/services/fractional-cto', label: 'Fractional CTO & Tech Partner' },
      ]}
    />
  );
}
