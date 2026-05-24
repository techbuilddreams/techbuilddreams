import type { Metadata } from 'next';
import { ServicePage } from '@/components/templates/ServicePage';
import { SERVICE_IDS } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Mobile App Developer Miami — Native iOS (Swift) & Flutter Cross-Platform',
  description:
    'Native iOS apps in Swift and cross-platform iOS/Android apps in Flutter. App Store deployment, RevenueCat subscriptions, AdMob monetization. Miami-based, US-wide remote. Bilingual.',
  alternates: { canonical: '/services/mobile-apps' },
  openGraph: {
    title: 'Mobile App Developer Miami — Native iOS & Flutter Cross-Platform',
    description:
      'Native Swift iOS and Flutter cross-platform apps. App Store launch, subscriptions, monetization handled end-to-end.',
    url: '/services/mobile-apps',
  },
};

export default function MobileAppsPage() {
  return (
    <ServicePage
      slug="mobile-apps"
      title="Mobile App Development"
      h1="Mobile Apps Built for the App Store, Not Just for Demos"
      tagline="Mobile App Development · iOS & Flutter"
      intro="Native iOS apps in Swift and cross-platform iOS/Android apps in Flutter, designed and built for products that need to ship — and then keep shipping. App Store submission, subscriptions, push notifications, analytics, and ongoing release management included, not bolted on later."
      audience="Founders launching a consumer app, service businesses adding a mobile channel, and gig-economy / fintech / health / lifestyle teams that need a polished iOS or Android product to compete on the store."
      features={[
        'Native iOS development in Swift / SwiftUI',
        'Cross-platform iOS + Android in Flutter (single codebase)',
        'App Store and Google Play submission, review, and release management',
        'RevenueCat subscriptions and in-app purchase setup',
        'AdMob monetization for ad-supported apps',
        'Push notifications (APNs / FCM), deep links, and analytics',
        'Bilingual UX (English & Spanish) localization built-in',
      ]}
      outcomes={[
        'A live App Store and Play Store listing — not a TestFlight build that never ships',
        'Subscription revenue infrastructure you can iterate on (RevenueCat dashboards, paywalls)',
        'Crash-free release pipeline with proper symbol uploads and analytics from day one',
        'Roadmap for v1.1, v1.2 — we plan past launch, not just to launch',
      ]}
      timeline="6–12 weeks from kickoff to App Store submission"
      priceRange="$15,000 – $120,000+ depending on platform and scope"
      schema={{
        id: SERVICE_IDS.mobile,
        name: 'Mobile App Development',
        url: '/services/mobile-apps',
        description:
          'Native iOS apps built in Swift and cross-platform iOS/Android apps in Flutter. App Store deployment, RevenueCat subscriptions, and AdMob monetization included. Typical timeline 6–12 weeks.',
        serviceType: 'Mobile Application Development',
        category: 'iOS, Android, Flutter',
        audience: 'Startups and businesses launching consumer mobile products',
        priceMin: 15000,
        priceMax: 120000,
      }}
      faqs={[
        {
          question: 'Should I build native iOS or use Flutter?',
          answer:
            'Native Swift wins when you need deep iOS integration (HealthKit, Vision, ARKit), or when your audience is iOS-first and you can afford to skip Android for v1. Flutter wins when you need both platforms from day one and the app is mostly UI + API calls. We help you pick based on your actual product, not preference.',
        },
        {
          question: 'Do you handle App Store submission and rejections?',
          answer:
            'Yes. We submit on your behalf, respond to App Store review feedback, and iterate until you are approved. Rejection-handling is included in every mobile project — we have shipped through Apple review many times.',
        },
        {
          question: 'Can you add subscriptions or in-app purchases?',
          answer:
            'Yes. We integrate RevenueCat for subscriptions, lifetime purchases, and free trials, including the App Store Connect and Play Console configuration. You will leave the project with a working revenue stack, not just a placeholder screen.',
        },
        {
          question: 'Will you maintain the app after launch?',
          answer:
            'Yes. Most mobile clients move into a monthly retainer for OS updates, App Store policy changes, bug fixes, and new features. You can also take the codebase in-house — it is documented and standard.',
        },
      ]}
      related={[
        { href: '/services/web-development', label: 'Custom Web Development' },
        { href: '/services/ai-voice-agents', label: 'AI Voice Agents' },
        { href: '/portfolio', label: 'Mobile Apps in Our Portfolio' },
      ]}
    />
  );
}
