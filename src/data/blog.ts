import type { ComponentType } from 'react';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  readingTime: string;
  category: string;
  load: () => Promise<{ default: ComponentType }>;
}

export const posts: BlogPost[] = [
  {
    slug: 'how-much-does-an-ai-voice-agent-cost',
    title: 'How Much Does an AI Voice Agent Cost for a Small Business?',
    description:
      'A real breakdown of setup and monthly costs for AI voice agents — including providers, voice quality tiers, integration time, and what to budget for a service business in 2026.',
    datePublished: '2026-05-10',
    readingTime: '6 min read',
    category: 'AI Voice Agents',
    load: () => import('../../content/blog/how-much-does-an-ai-voice-agent-cost.mdx'),
  },
  {
    slug: 'react-or-flutter-which-to-build-first',
    title: 'React or Flutter: Which Should You Build First?',
    description:
      'A senior engineer&rsquo;s decision framework for picking between React web and Flutter mobile when you only have budget to build one — based on user behavior, distribution, and economics.',
    datePublished: '2026-04-22',
    readingTime: '7 min read',
    category: 'Engineering',
    load: () => import('../../content/blog/react-or-flutter-which-to-build-first.mdx'),
  },
  {
    slug: 'what-is-a-fractional-cto',
    title: 'What Is a Fractional CTO and When Do You Actually Need One?',
    description:
      'When to hire a fractional CTO, what the engagement looks like in practice, what it costs, and the warning signs that you needed one six months ago.',
    datePublished: '2026-03-18',
    readingTime: '5 min read',
    category: 'Leadership',
    load: () => import('../../content/blog/what-is-a-fractional-cto.mdx'),
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}
