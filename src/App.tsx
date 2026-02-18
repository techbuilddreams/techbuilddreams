import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { CustomersSection } from './components/sections/CustomersSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { CtaSection } from './components/sections/CtaSection';

const App: React.FC = () => (
  <div className="min-h-screen bg-white">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <CustomersSection />
    <ProcessSection />
    <AboutSection />
    <ContactSection />
    <CtaSection />
    <Footer />
  </div>
);

export default App;
