import type { Metadata, Viewport } from 'next';
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
    default: 'Tech Build Dreams LLC — Miami Software Development, Mobile Apps & AI Voice Agents',
    template: '%s | Tech Build Dreams LLC',
  },
  description:
    'Tech Build Dreams LLC — Miami software development and AI agency. We build custom web platforms, native iOS & Flutter mobile apps, and 24/7 AI voice agents for businesses in Miami FL, Albany NY, Bronx NY, Massachusetts, and remote across the United States. Bilingual English & Spanish.',
  keywords: [
    'Miami software development',
    'AI voice agent for small business',
    'custom web development Miami',
    'iOS app developer Florida',
    'Flutter app developer',
    'mobile app development Miami',
    'Latino-owned software company',
    'bilingual software development English Spanish',
    'fractional CTO Miami',
    'SaaS development',
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
    title: 'Tech Build Dreams LLC — Miami Software Development, Mobile Apps & AI Voice Agents',
    description:
      'Custom web platforms, iOS & Flutter mobile apps, and 24/7 AI voice agents. Miami-based, serving Florida, New York, Massachusetts, and remote across the US. Bilingual English & Spanish service.',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tech Build Dreams LLC — Technology That Builds Dreams',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Build Dreams LLC — Miami Software Development & AI Voice Agents',
    description:
      'Custom web platforms, iOS & Flutter mobile apps, and 24/7 AI voice agents for businesses ready to scale. Bilingual English & Spanish. Miami-based, US-wide remote.',
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
        <link rel="preconnect" href="https://api-smartassistant.up.railway.app" />
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
        <Script id="smartassistant-chat" strategy="afterInteractive">
          {`(function(){const s=document.createElement('script');s.src='https://api-smartassistant.up.railway.app/static/chat-widget.js';s.defer=true;s.onload=()=>window.NurivionChat.init({businessId:'7cb15d99-2f2b-49d1-8350-aba3a1e185bd',agentId:'default',apiBase:'https://api-smartassistant.up.railway.app',title:'Dreamer'});document.head.appendChild(s);})();`}
        </Script>
      </body>
    </html>
  );
}
