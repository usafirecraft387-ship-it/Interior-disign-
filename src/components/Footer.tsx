import React from 'react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-obsidian pt-32 pb-12 text-gray-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          
          <div className="md:col-span-1">
            <Logo className="w-16 h-16 mb-8 border border-white/10" />
            <p className="text-sm font-light leading-relaxed max-w-sm text-gray-400">
              Dubai luxury interior architecture studio defining extraordinary spaces through precision, elegance, and bespoke craftsmanship.
            </p>
          </div>

          <div>
            <h5 className="text-gold tracking-widest uppercase text-[10px] font-semibold mb-6">Studio</h5>
            <ul className="space-y-4 text-sm font-light text-gray-300">
              <li><a href="#" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Press & Awards</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-gold tracking-widest uppercase text-[10px] font-semibold mb-6">Portfolio</h5>
            <ul className="space-y-4 text-sm font-light text-gray-300">
              <li><a href="#" className="hover:text-gold transition-colors">Luxury Villas</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Private Penthouses</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Corporate Spaces</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Hospitality</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-gold tracking-widest uppercase text-[10px] font-semibold mb-6">Connect</h5>
            <ul className="space-y-4 text-sm font-light text-gray-300">
              <li><a href="#" className="hover:text-gold transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Pinterest</a></li>
              <li><a href="#consultation" className="hover:text-gold transition-colors">Book Consultation</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] tracking-widest uppercase text-gray-500">
          <p>&copy; {new Date().getFullYear()} DIPIUGI Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
