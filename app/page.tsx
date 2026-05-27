import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { CustomersSection } from '@/components/sections/CustomersSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { faqs, customers } from '@/data/siteData';
import { faqPageSchema, breadcrumbSchema, portfolioItemListSchema } from '@/lib/schema';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const homeFaqSchema = faqPageSchema(faqs);
const homeBreadcrumb = breadcrumbSchema([
  { name: 'Home', url: '/' },
]);
const homePortfolioList = portfolioItemListSchema(
  customers.map((c) => ({
    name: c.name,
    url: c.url,
    description: c.description,
    category: c.category,
    hasDetailPage: c.hasDetailPage,
    slug: c.slug,
  })),
);

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePortfolioList) }}
      />
      <HeroSection />
      <ServicesSection />
      <CustomersSection />
      <ProcessSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <CtaSection />
    </>
  );
}
