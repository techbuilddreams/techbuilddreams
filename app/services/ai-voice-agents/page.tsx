import type { Metadata } from 'next';
import { ServicePage } from '@/components/templates/ServicePage';
import { SERVICE_IDS } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'AI Voice Agent for Small Business — 24/7 Calls, Leads & Bookings',
  description:
    'AI voice agents that answer your phone 24/7, capture leads, qualify customers, and book appointments — so your small business never misses revenue. Built on OpenAI, deployed in days.',
  alternates: { canonical: '/services/ai-voice-agents' },
  openGraph: {
    title: 'AI Voice Agent for Small Business — 24/7 Calls, Leads & Bookings',
    description:
      'Never miss a call. Our AI voice agents answer 24/7, capture leads, and book appointments for service businesses.',
    url: '/services/ai-voice-agents',
  },
};

export default function AiVoiceAgentsPage() {
  return (
    <ServicePage
      slug="ai-voice-agents"
      title="AI Voice Agents & Automation"
      h1="An AI Voice Agent That Answers Every Call — So You Never Miss Revenue"
      tagline="AI Voice Agents · 24/7 Coverage"
      intro="Most service businesses lose more revenue to missed calls than to bad marketing. We build AI voice agents that pick up your phone 24/7, ask the right qualifying questions, capture lead details into your CRM, and book appointments on your calendar — in English or Spanish, in your business&rsquo;s voice."
      audience="Service businesses (roadside, HVAC, plumbing, legal intake, medical, real estate, home services) and small teams who are losing leads after-hours, on weekends, or while they are on a job. Anyone whose phone rings more often than someone can pick it up."
      features={[
        '24/7 inbound call answering with a custom-trained AI voice',
        'Natural English and Spanish conversation, configurable per call',
        'Lead capture into your CRM (HubSpot, Salesforce, Pipedrive, Google Sheets, custom)',
        'Calendar booking (Google Calendar, Calendly, custom systems)',
        'SMS follow-up and missed-call text-back automations',
        'Call transcripts, recordings, and analytics dashboard',
        'Escalation to a human when the AI is unsure — never a dead-end',
      ]}
      outcomes={[
        'Stop losing after-hours and weekend leads to voicemail',
        'Free your team from low-value qualifying calls',
        'A measurable lift in booked appointments within the first 30 days',
        'A defensible competitive edge over local competitors still using voicemail',
      ]}
      timeline="4–8 weeks from discovery to live deployment"
      priceRange="Setup $3,000 – $15,000 + monthly usage; volume-based pricing"
      schema={{
        id: SERVICE_IDS.aiVoice,
        name: 'AI Voice Agents & Automation',
        url: '/services/ai-voice-agents',
        description:
          '24/7 AI voice agents that answer calls, capture leads, schedule appointments, and qualify customers — so your business never misses revenue. Includes AI chatbots, lead-capture automation, and OpenAI-powered workflows. Typical timeline 4–8 weeks.',
        serviceType: 'Artificial Intelligence Integration',
        category: 'AI Voice Agents, Automation, Chatbots',
        audience:
          'Small businesses, service businesses, and growing teams losing leads outside business hours',
      }}
      faqs={[
        {
          question: 'How much does an AI voice agent cost for a small business?',
          answer:
            'Setup ranges from $3,000 for a single-purpose agent to $15,000 for multi-intent, multi-language agents with CRM and calendar integrations. Monthly usage is typically $0.10–$0.40 per call minute depending on voice quality and provider. Most small-business clients land in $200–$800/month after launch.',
        },
        {
          question: 'Does it actually sound human?',
          answer:
            'Yes. We use the highest-quality voice models available (ElevenLabs, OpenAI Realtime, Cartesia depending on use case). Callers are told they are speaking with an AI assistant — required for compliance — and most still rate the conversations as smooth and helpful. We will run a live demo with you before you commit.',
        },
        {
          question: 'Can the agent speak Spanish?',
          answer:
            'Yes, natively. Our agents can detect the caller&rsquo;s language and respond in English or Spanish, or you can configure separate phone numbers per language. Bilingual coverage is a core differentiator — most agency-built agents are English-only.',
        },
        {
          question: 'What happens if the AI cannot handle a call?',
          answer:
            'The agent is configured with explicit escalation rules. When it hits something outside scope, it can transfer to a live number, take a detailed message, or schedule a callback. We never deploy an agent that dead-ends frustrated callers.',
        },
        {
          question: 'How long until it is live?',
          answer:
            '4–8 weeks for a fully integrated agent. Simpler call-screening agents can be live in 2 weeks. We always start with a discovery call to map call scenarios before quoting timeline.',
        },
      ]}
      related={[
        { href: '/services/web-development', label: 'Custom Web Development' },
        { href: '/services/fractional-cto', label: 'Fractional CTO' },
        { href: '/portfolio/nurivion', label: 'See Nurivion — AI Support Platform' },
      ]}
    />
  );
}
