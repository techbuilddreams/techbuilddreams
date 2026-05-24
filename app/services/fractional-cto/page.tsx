import type { Metadata } from 'next';
import { ServicePage } from '@/components/templates/ServicePage';
import { SERVICE_IDS } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Fractional CTO Miami — Senior Technology Leadership Without Full-Time Cost',
  description:
    'Fractional CTO and ongoing technology partnership for founders scaling past MVP. Architecture reviews, hiring, vendor management, and executive consulting. Miami-based, bilingual EN/ES.',
  alternates: { canonical: '/services/fractional-cto' },
  openGraph: {
    title: 'Fractional CTO Miami — Senior Technology Leadership Without Full-Time Cost',
    description:
      'Senior CTO-level guidance for founders scaling beyond MVP — without the seven-figure full-time CTO bill.',
    url: '/services/fractional-cto',
  },
};

export default function FractionalCtoPage() {
  return (
    <ServicePage
      slug="fractional-cto"
      title="Strategic Technology Partnership"
      h1="A Senior CTO Without the Seven-Figure Hire"
      tagline="Fractional CTO · Ongoing Partnership"
      intro="When you are past MVP and your team is making technology decisions that will cost you six months to undo, you need a senior voice in the room. We provide fractional CTO and ongoing technology partnership for founders, executives, and investors who need world-class guidance without the cost or commitment of a full-time hire."
      audience="Funded startups between MVP and Series A, established small businesses going through digital transformation, investment groups doing technical due diligence on portfolio companies, and founders who keep getting outvoted on technical decisions by sales-driven vendors."
      features={[
        'Weekly or bi-weekly executive-level technology advisory',
        'Architecture review and scalability planning',
        'Hiring: interviewing senior engineers and writing job specs that filter for real talent',
        'Vendor evaluation (CRM, infrastructure, AI providers, dev shops)',
        'Technical due diligence for fundraising or acquisitions',
        'Roadmap and prioritization workshops with founders',
        'On-call escalation for outages, security incidents, and major decisions',
        'Bilingual executive support (English & Spanish)',
      ]}
      outcomes={[
        'Stop making expensive, irreversible technology decisions in isolation',
        'A defensible architecture story for investors, customers, and audits',
        'Faster, better engineering hires (and fewer regrettable ones)',
        'A direct line to a senior technologist who has lived through the next 3 stages of your scale',
      ]}
      timeline="Monthly retainer, typically 6+ months"
      priceRange="$3,500 – $12,000/month depending on engagement depth"
      schema={{
        id: SERVICE_IDS.fractionalCto,
        name: 'Strategic Technology Partnership',
        url: '/services/fractional-cto',
        description:
          'Ongoing technology leadership, proactive monitoring, scalability planning, and executive consulting for businesses that need senior technical guidance without a full-time CTO.',
        serviceType: 'Technology Consulting',
        category: 'Fractional CTO, Technology Advisory',
        audience: 'Founders and executives scaling beyond MVP',
      }}
      faqs={[
        {
          question: 'What is a fractional CTO and when do I need one?',
          answer:
            'A fractional CTO is a senior technology executive who works with your company part-time on a retainer — typically 10–30 hours per month. You need one when (a) your team has more than 3 engineers but no senior technical leader, (b) you are about to commit six figures to a build or vendor, (c) investors want to see CTO-level credibility on the cap table, or (d) you keep making technology decisions on your own that you later regret.',
        },
        {
          question: 'How is this different from hiring a consulting agency?',
          answer:
            'Consulting agencies sell you their billable hours. We sell you outcomes and senior judgment. A fractional CTO engagement is structured around your roadmap, your hiring, your architecture — not a project scope statement. We are also independent of any specific vendor or stack, so our advice does not depend on which proposal makes us the most money.',
        },
        {
          question: 'Will you write code?',
          answer:
            'Sometimes — usually for architecture spikes, hiring rubric exercises, or unblocking a stuck team. But this is not a build-the-product engagement. If you need an entire product built, see the Web Development or Mobile Apps services instead.',
        },
        {
          question: 'What does the bilingual support actually mean?',
          answer:
            'We can run founder calls, vendor negotiations, and team standups in English or Spanish. For founders running Spanish-speaking teams or Latin-American operations, this removes the translation layer that usually slows down strategic technology decisions.',
        },
      ]}
      related={[
        { href: '/services/web-development', label: 'Custom Web Development' },
        { href: '/services/mobile-apps', label: 'Mobile App Development' },
        { href: '/services/ai-voice-agents', label: 'AI Voice Agents' },
      ]}
    />
  );
}
