import type { Metadata } from 'next';
import { ServicePage } from '@/components/templates/ServicePage';
import { SERVICE_IDS } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Fractional CTO for Small Business',
  description:
    'A senior tech partner to call before you sign a vendor contract, hire a developer or replace a system. Monthly retainer for small businesses. EN/ES.',
  alternates: { canonical: '/services/fractional-cto' },
  openGraph: {
    title: 'Fractional CTO for Small Business | Tech Build Dreams',
    description:
      'A senior tech partner to call before you sign a vendor contract, hire a developer, or replace a system — without a full-time hire.',
    url: '/services/fractional-cto',
  },
};

export default function FractionalCtoPage() {
  return (
    <ServicePage
      slug="fractional-cto"
      title="Fractional CTO & Tech Partner"
      h1="A Senior Tech Partner You Can Call Before You Sign"
      tagline="Fractional CTO · Ongoing Partnership"
      intro="Most small businesses don't need a full-time CTO. They need someone senior to call before they sign a vendor contract, hire a developer, or replace a system — and when their tech breaks. That's this service: a fractional CTO on a monthly retainer who knows your systems, tells you the truth about a proposal, and is on your side of the table, in English or Spanish."
      audience="Small and medium-sized business owners with no tech person on staff, teams juggling several software vendors, and owners who keep getting talked into tools by sales-driven vendors and want a second opinion first."
      features={[
        'Regular check-ins on your systems, vendors, and next steps',
        'A second opinion on quotes and contracts before you sign',
        'Help hiring a developer or agency — job specs, interviews, and red flags',
        'Vendor evaluation: POS, CRM, booking, phone systems, AI tools, dev shops',
        'A plan for replacing an old system without losing your data',
        'Someone to call when something breaks, gets hacked, or goes down',
        'Monitoring of the systems your business depends on',
        'Support in English or Spanish',
      ]}
      outcomes={[
        'Stop making expensive, hard-to-undo tech decisions alone',
        'Contracts and quotes checked by someone with no stake in the sale',
        'Better developer hires, and fewer regrettable ones',
        'A direct line to a senior engineer who knows your business',
      ]}
      engagement="Monthly retainer, scoped to the senior time you need"
      investment="Fixed monthly retainer, sized for small and medium-sized businesses"
      schema={{
        id: SERVICE_IDS.fractionalCto,
        name: 'Fractional CTO & Tech Partner',
        url: '/services/fractional-cto',
        description:
          'A senior tech partner you can call before you sign a vendor contract, hire a developer, or replace a system — and when your tech breaks. Fractional CTO help for small and medium-sized businesses, in English or Spanish.',
        serviceType: 'Technology Consulting',
        category: 'Fractional CTO, Technology Advisory',
        audience: 'Small and medium-sized business owners',
      }}
      faqs={[
        {
          question: 'What is a fractional CTO and when do I need one?',
          answer:
            'A fractional CTO is a senior technology person who works with your business part-time on a monthly retainer. You need one when (a) you are about to sign a big software contract or hire a developer, (b) you are replacing a system your business depends on, (c) you have nobody to call when your tech breaks, or (d) you keep making technology decisions on your own that you later regret.',
        },
        {
          question: 'How is this different from hiring a consulting agency?',
          answer:
            'Consulting agencies sell you their billable hours. We sell you outcomes and senior judgment. A fractional CTO engagement is structured around your roadmap, your hiring, your architecture — not a project scope statement. We are also independent of any specific vendor or stack, so our advice does not depend on which proposal makes us the most money.',
        },
        {
          question: 'Will you write code?',
          answer:
            'Sometimes — usually for a quick fix, a proof of concept, or unblocking a stuck project. But this is not a build-the-product engagement. If you need a website, tool, or app built, see the Web Development or Mobile Apps services instead.',
        },
        {
          question: 'What does the bilingual support actually mean?',
          answer:
            'We can run calls, vendor meetings, and team check-ins in English or Spanish. If your team or your vendors speak Spanish, nothing gets lost in translation.',
        },
      ]}
      related={[
        { href: '/services/web-development', label: 'Custom Web Development' },
        { href: '/services/mobile-apps', label: 'Mobile App Development' },
        { href: '/services/ai-voice-agents', label: 'AI Receptionist & Automation' },
      ]}
    />
  );
}
