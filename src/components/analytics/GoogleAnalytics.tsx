import React from 'react';
import Script from 'next/script';

/**
 * GA4, gated on NEXT_PUBLIC_GA_ID.
 *
 * Renders nothing when the env var is unset, so local dev and preview
 * deploys stay out of the production property unless you opt them in.
 * GA4 is free at any volume this site will see.
 */
/**
 * GA4 measurement IDs look like `G-XXXXXXXXXX`. The ID is interpolated into
 * an inline script, so anything else is dropped rather than emitted as
 * malformed JS — a typo'd env var fails closed instead of breaking the page.
 */
const MEASUREMENT_ID_PATTERN = /^G-[A-Z0-9]+$/;

export const GoogleAnalytics: React.FC = () => {
  const measurementId = process.env.NEXT_PUBLIC_GA_ID;
  if (!measurementId || !MEASUREMENT_ID_PATTERN.test(measurementId)) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${measurementId}');`}
      </Script>
    </>
  );
};
