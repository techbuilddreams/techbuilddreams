import { useState } from 'react';
import { ContactFormData, SubmitStatus } from '../types';

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitStatus('idle');
    setStatusMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    const accessKey = process.env.REACT_APP_WEB3FORMS_KEY;
    if (!accessKey) {
      setSubmitStatus('error');
      setStatusMessage(
        'Contact form is not configured. Please email us directly at info@techbuilddreams.com'
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Project Inquiry from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage(
          "Thank you! We've received your message and will respond within 24 hours."
        );
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setStatusMessage(
          'Something went wrong. Please email us directly at info@techbuilddreams.com'
        );
      }
    } catch {
      setSubmitStatus('error');
      setStatusMessage(
        'Something went wrong. Please email us directly at info@techbuilddreams.com'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    submitStatus,
    statusMessage,
    updateField,
    resetForm,
    handleSubmit,
  };
}
