import type { Metadata } from 'next';
import { ServicePage } from '@/components/templates/ServicePage';
import { SERVICE_IDS } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'AI Receptionist for Small Business',
  description:
    'Missing calls? An AI receptionist answers 24/7, captures leads, books appointments and texts back missed callers, in English or Spanish. Miami & Albany.',
  alternates: { canonical: '/services/ai-voice-agents' },
  openGraph: {
    title: 'AI Receptionist for Small Business | Tech Build Dreams',
    description:
      'Never miss a call. An AI receptionist answers 24/7, captures leads, and books appointments for small businesses.',
    url: '/services/ai-voice-agents',
  },
};

export default function AiVoiceAgentsPage() {
  return (
    <ServicePage
      slug="ai-voice-agents"
      title="AI Receptionist & Automation"
      h1="An AI Receptionist That Answers Every Call — So You Stop Losing Customers"
      tagline="AI Receptionist · 24/7 Coverage"
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
        'Booking and follow-ups that happen automatically, not when someone remembers',
        'Callers get an answer instead of voicemail — and call you, not the next business on Google',
      ]}
      engagement="We map your call scenarios, demo the agent live, then go live"
      investment="One-time setup plus usage that scales with your call volume — written quote after a free discovery call, sized for small and medium-sized businesses"
      schema={{
        id: SERVICE_IDS.aiVoice,
        name: 'AI Receptionist & Automation',
        url: '/services/ai-voice-agents',
        description:
          '24/7 AI receptionists that answer calls, capture leads, schedule appointments, and qualify customers — so your business never misses a call. Includes website chat assistants, missed-call text-back, and automated booking and follow-ups.',
        serviceType: 'Artificial Intelligence Integration',
        category: 'AI Receptionist, AI Voice Agents, Automation, Chatbots',
        audience:
          'Small businesses, service businesses, and growing teams losing leads outside business hours',
      }}
      faqs={[
        {
          question: 'How much does an AI voice agent cost for a small business?',
          answer:
            'Two parts: a one-time setup, and monthly usage that scales with how many minutes the agent is on the phone. Setup depends on how many call types it handles, whether it speaks English and Spanish, and what it connects to (CRM, calendar, SMS). We map your call scenarios on a free discovery call and give you a fixed setup quote plus a usage estimate built from your real call volume.',
        },
        {
          question: 'Does it actually sound human?',
          answer:
            'Yes. We use the highest-quality voice models available (ElevenLabs, OpenAI Realtime, Cartesia depending on use case). Callers are told they are speaking with an AI assistant — required for compliance. We will run a live demo with you before you commit.',
        },
        {
          question: 'Can the agent speak Spanish?',
          answer:
            'Yes, natively. Our agents can detect the caller&rsquo;s language and respond in English or Spanish, or you can configure separate phone numbers per language.',
        },
        {
          question: 'What happens if the AI cannot handle a call?',
          answer:
            'The agent is configured with explicit escalation rules. When it hits something outside scope, it can transfer to a live number, take a detailed message, or schedule a callback. We never deploy an agent that dead-ends frustrated callers.',
        },
        {
          question: 'How long until it is live?',
          answer:
            'Simple call-screening agents go live fast; fully integrated agents with booking and CRM take longer. We start with a discovery call to map your call scenarios, then give you a go-live date in writing.',
        },
      ]}
      related={[
        { href: '/services/web-development', label: 'Custom Web Development' },
        { href: '/services/fractional-cto', label: 'Fractional CTO & Tech Partner' },
        { href: '/portfolio/nurivion', label: 'See Nurivion — AI Support Platform' },
      ]}
    />
  );
}
