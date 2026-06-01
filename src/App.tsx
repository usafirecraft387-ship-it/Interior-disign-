import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { CaseStudy } from './components/CaseStudy';
import { Founder } from './components/Founder';
import { WhyUs } from './components/WhyUs';
import { Testimonials } from './components/Testimonials';
import { Consultation } from './components/Consultation';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans selection:bg-gold selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <CaseStudy />
      <Founder />
      <WhyUs />
      <Testimonials />
      <Consultation />
      <CTA />
      <Footer />
      
      {/* Mobile Sticky Consultation Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 z-50 md:hidden bg-gradient-to-t from-ivory via-ivory/90 to-transparent pt-10">
        <a href="#consultation" className="block text-center w-full bg-obsidian text-white py-4 uppercase tracking-widest text-xs font-semibold shadow-2xl">
          Book Consultation
        </a>
      </div>
    </div>
  );
}
