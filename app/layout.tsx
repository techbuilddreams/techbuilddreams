import type { Metadata, Viewport } from 'next';
// Kept for the commented-out Nurivion chat widget below — re-enable together.
import Script from 'next/script';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { siteWideGraph } from '@/lib/schema';
import { SITE_URL } from '@/lib/seo';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Miami Software Development for Small Business | Tech Build Dreams',
    template: '%s | Tech Build Dreams',
  },
  description:
    'Miami software development for small businesses: websites, apps, AI receptionists and automations. Written quotes, English or Spanish. Miami & Albany, NY.',
  keywords: [
    'AI receptionist for small business',
    'never miss a call small business',
    'small business website that shows up on Google',
    'automate booking and follow-ups',
    'custom app for my business',
    'small business tech help',
    'Miami software development',
    'Albany NY software developer',
    'AI voice agent for small business',
    'custom web development Miami',
    'iOS app developer Florida',
    'Flutter app developer',
    'mobile app development Miami',
    'Latino-owned software company',
    'bilingual software development English Spanish',
    'fractional CTO Miami',
    'AI automation small business',
    'remote software development USA',
  ],
  authors: [{ name: 'Tech Build Dreams LLC' }],
  creator: 'Tech Build Dreams LLC',
  publisher: 'Tech Build Dreams LLC',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Tech Build Dreams LLC',
    title: 'Miami Software Development for Small Business | Tech Build Dreams',
    description:
      'Miami software development for small businesses: websites, apps, AI receptionists and automations. Written quotes, English or Spanish. Miami & Albany, NY.',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tech Build Dreams — Miami software development for small businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miami Software Development for Small Business | Tech Build Dreams',
    description:
      'Never miss a call, get found on Google, and get out of spreadsheets. Websites, apps, AI receptionists and automations for small businesses. English or Spanish.',
    images: ['/og-image.png'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: '/',
  },
  other: {
    'geo.region': 'US-FL',
    'geo.placename': 'Miami, Florida',
    'geo.position': '25.7617;-80.1918',
    ICBM: '25.7617, -80.1918',
    rating: 'general',
    distribution: 'global',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2563eb',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/*
          Preconnect for the Nurivion "Dreamer" chat widget — paired with the
          Script tag below in <body>. Commented out together with it
          (2026-09-12): the widget isn't working right now, so warming up a
          connection to it is wasted DNS/TLS setup. Re-enable both once
          Nurivion fixes the widget.
        <link rel="preconnect" href="https://api-smartassistant.up.railway.app" />
        */}
        {/*
          Declared here rather than via `alternates.types` in metadata: every
          page sets its own `alternates` for the canonical, and Next replaces
          that object wholesale instead of deep-merging, which drops the feed
          link on all of them.
        */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Tech Build Dreams — Field Notes"
          href="/blog/rss.xml"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteWideGraph) }}
        />
      </head>
      <body className="min-h-screen bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics />
        {/*
          Nurivion "Dreamer" chat widget — disabled 2026-09-12, owner reports
          it's not fully working right now. Uncomment (and the matching
          preconnect above) once it's fixed.
        <Script id="smartassistant-chat" strategy="afterInteractive">
          {`(function(){const s=document.createElement('script');s.src='https://api-smartassistant.up.railway.app/static/chat-widget.js';s.defer=true;s.onload=()=>window.NurivionChat.init({businessId:'7cb15d99-2f2b-49d1-8350-aba3a1e185bd',agentId:'default',apiBase:'https://api-smartassistant.up.railway.app',title:'Dreamer'});document.head.appendChild(s);})();`}
        </Script>
        */}
      </body>
    </html>
  );
}
