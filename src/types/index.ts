export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Value {
  icon: string;
  title: string;
  description: string;
}

export interface Customer {
  name: string;
  url: string;
  description: string;
  category: string;
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
