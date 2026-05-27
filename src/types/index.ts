export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  href: string;
  timeline: string;
}

export interface Value {
  icon: string;
  title: string;
  description: string;
}

export interface Customer {
  slug: string;
  name: string;
  url: string;
  description: string;
  category: string;
  challenge: string;
  solution: string;
  stack: string[];
  outcome: string;
  hasDetailPage: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type SubmitStatus = 'idle' | 'success' | 'error';

export interface FAQ {
  question: string;
  answer: string;
}
