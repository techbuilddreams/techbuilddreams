import React from 'react';
import Link from 'next/link';
import { Heart, Calendar, User } from 'lucide-react';
import { Container } from '../layout/Container';
import { ScrollToContactButton } from '../ui/ScrollToContactButton';
import { values } from '../../data/siteData';

export const HeroSection: React.FC = () => (
  <section className="pt-20 pb-20 bg-gradient-to-b from-blue-50 to-white">
    <Container maxWidth="4xl" className="text-center">
      <div className="mb-8">
        <span className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
          <Heart className="w-4 h-4 mr-2" />
          Tech Build Dreams LLC
        </span>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        Miami Software Development,
        <span className="block text-blue-600">Mobile Apps & AI Voice Agents</span>
      </h1>

      <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed max-w-3xl mx-auto">
        Custom React web platforms, native iOS &amp; Flutter mobile apps, and 24/7 AI voice
        agents — built by a Latino-owned, bilingual (EN/ES) engineering team. Miami-based, remote
        across the United States.
      </p>

      <p className="text-base md:text-lg text-gray-500 italic mb-8">
        Technology That Builds Dreams.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <ScrollToContactButton className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
          <Calendar className="w-5 h-5 mr-2" />
          Book a free 15-min discovery call
        </ScrollToContactButton>
        <Link
          href="/about"
          className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors duration-300 flex items-center justify-center"
        >
          <User className="w-5 h-5 mr-2" />
          Meet the founder
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {values.map((value, index) => (
          <div key={index} className="text-center p-4">
            <div className="text-3xl mb-2">{value.icon}</div>
            <div className="font-semibold text-gray-900 text-sm mb-1">{value.title}</div>
            <div className="text-gray-600 text-xs">{value.description}</div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);
