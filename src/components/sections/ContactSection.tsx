import React from 'react';
import { Mail, Users, MapPin, CheckCircle, MessageSquare } from 'lucide-react';
import { Container } from '../layout/Container';
import { SECTION_IDS } from '../../constants';
import { useContactForm } from '../../hooks/useContactForm';

export const ContactSection: React.FC = () => {
  const { formData, isSubmitting, submitStatus, statusMessage, updateField, handleSubmit } =
    useContactForm();

  return (
    <section id={SECTION_IDS.CONTACT} className="py-20 bg-white">
      <Container maxWidth="4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600">
            Tell us about your dream and we'll respond within 24 hours with next steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Get In Touch</h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-lg p-2 mr-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">info@techbuilddreams.com</p>
                  <p className="text-gray-600 text-sm">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-100 rounded-lg p-2 mr-3">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">English & Spanish</p>
                  <p className="text-gray-600 text-sm">Bilingual support available</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-purple-100 rounded-lg p-2 mr-3">
                  <MapPin className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Miami, Florida</p>
                  <p className="text-gray-600 text-sm">Local team, global solutions</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">💡 What to Share:</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Your vision and business objectives
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Current challenges or growth opportunities
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Timeline and investment parameters
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>

            {submitStatus !== 'idle' && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus === 'success'
                    ? 'bg-green-100 text-green-800 border border-green-200'
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}
              >
                {statusMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What should we call you?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell Us About Your Project *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your vision and goals. What challenges are you facing? What opportunities do you want to capitalize on? We'll handle the technical strategy."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
