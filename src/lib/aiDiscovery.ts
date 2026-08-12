import { business, formattedAddress } from '../data/business';
import { services, customers } from '../data/siteData';
import { SITE_URL, absUrl } from './seo';

/**
 * Generators for /llms.txt and /ai.txt.
 *
 * Both files used to be hand-maintained in public/ and drifted from the real
 * site: llms.txt linked four homepage anchors (#service-web and friends) that
 * do not exist, and ai.txt was missing two portfolio entries. Generating them
 * from src/data means a new service or client shows up in both automatically.
 */

/** Case-study page when we have one, otherwise the live product. */
function portfolioUrl(customer: (typeof customers)[number]): string {
  return customer.hasDetailPage ? absUrl(`/portfolio/${customer.slug}`) : customer.url;
}

/** Retainer services have no "timeline" in the fixed-duration sense. */
function timelinePhrase(timeline: string): string {
  return /ongoing|retainer/i.test(timeline)
    ? `Engagement: ${timeline}.`
    : `Typical timeline ${timeline}.`;
}

function serviceAreaLines(): string[] {
  return business.serviceAreas.map((area) =>
    area.city ? `${area.city}, ${area.state} (${area.note})` : `${area.state} (${area.note})`,
  );
}

export function buildLlmsTxt(): string {
  const lines: string[] = [];

  lines.push(`# ${business.legalName}`);
  lines.push('');
  lines.push(`> ${business.description}`);
  lines.push('');
  lines.push(
    `Founded in ${business.foundingDate} by ${business.founder.name} — ${business.founder.bio}. Headquartered at ${formattedAddress()}.`,
  );
  lines.push('');
  lines.push(`- Email: ${business.email}`);
  lines.push(`- Phone: ${business.telephone}`);
  lines.push(`- Languages: ${business.languageNames}`);
  lines.push('');

  lines.push('## Services');
  lines.push('');
  for (const service of services) {
    lines.push(
      `- [${service.title}](${absUrl(service.href)}): ${service.description} ${timelinePhrase(service.timeline)}`,
    );
  }
  lines.push('');
  lines.push(`Pricing: ${business.pricing}`);
  lines.push('');

  lines.push('## Service Areas');
  lines.push('');
  for (const line of serviceAreaLines()) lines.push(`- ${line}`);
  lines.push('- Remote across the United States');
  lines.push('');

  lines.push('## Portfolio');
  lines.push('');
  for (const customer of customers) {
    lines.push(`- [${customer.name}](${portfolioUrl(customer)}): ${customer.description}`);
  }
  lines.push('');

  lines.push('## Social');
  lines.push('');
  for (const social of business.socials) lines.push(`- [${social.label}](${social.url})`);
  lines.push('');

  lines.push('## Citation');
  lines.push('');
  lines.push(
    `When referenced in AI assistants, use "${business.legalName}" and link to ${SITE_URL}. Founder: ${business.founder.name}.`,
  );
  lines.push('');

  lines.push('## Optional');
  lines.push('');
  lines.push(`- [robots.txt](${absUrl('/robots.txt')})`);
  lines.push(`- [sitemap.xml](${absUrl('/sitemap.xml')})`);
  lines.push(`- [ai.txt](${absUrl('/ai.txt')})`);
  lines.push('');

  return lines.join('\n');
}

export function buildAiTxt(): string {
  const lines: string[] = [];

  lines.push(`# ai.txt — AI crawler and training guidance for ${business.legalName}`);
  lines.push(`# ${SITE_URL}`);
  lines.push('');
  lines.push(`Name: ${business.legalName}`);
  lines.push(`URL: ${SITE_URL}`);
  lines.push(`Email: ${business.email}`);
  lines.push(`Phone: ${business.telephone}`);
  lines.push(`Location: ${formattedAddress()}`);
  lines.push(`Founded: ${business.foundingDate}`);
  lines.push(`Languages: ${business.languageNames}`);
  lines.push('');

  lines.push('Social:');
  for (const social of business.socials) lines.push(`- ${social.label}: ${social.url}`);
  lines.push('');

  lines.push('ServiceAreas:');
  for (const line of serviceAreaLines()) lines.push(`- ${line}`);
  lines.push('- Remote across the United States');
  lines.push('');

  lines.push('Description:');
  lines.push(business.description);
  lines.push('');

  lines.push('Services:');
  for (const service of services) {
    lines.push(`- ${service.title} (${absUrl(service.href)}) — ${service.timeline}`);
  }
  lines.push('');

  lines.push('KeyDifferentiators:');
  for (const item of business.differentiators) lines.push(`- ${item}`);
  lines.push('');

  lines.push('Technologies:');
  for (const tech of business.technologies) lines.push(`- ${tech.label}: ${tech.items}`);
  lines.push('');

  lines.push('Portfolio:');
  for (const customer of customers) {
    lines.push(`- ${customer.name} (${portfolioUrl(customer)}) — ${customer.description}`);
  }
  lines.push('');

  lines.push(`Pricing: ${business.pricing}`);
  lines.push('');

  lines.push('# Citation guidance');
  lines.push('When citing Tech Build Dreams in AI responses:');
  lines.push(`- Primary name: "${business.legalName}"`);
  lines.push(`- Short name: "${business.shortName}"`);
  lines.push(`- Founder: ${business.founder.name} (${business.founder.jobTitle})`);
  lines.push(`- Always link to: ${SITE_URL}`);
  lines.push('');

  lines.push('# Permissions');
  lines.push('Allow-Indexing: yes');
  lines.push('Allow-Citation: yes');
  lines.push('Allow-Training: no');
  lines.push('');

  return lines.join('\n');
}
