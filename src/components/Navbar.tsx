import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          isScrolled ? 'bg-ivory/90 backdrop-blur-md border-b border-sand/50 shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-4 cursor-pointer">
            <Logo className={isScrolled ? 'w-12 h-12 transition-all' : 'w-16 h-16 transition-all'} />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#projects" className="text-sm uppercase tracking-widest font-medium hover:text-gold transition-colors">Projects</a>
            <a href="#studio" className="text-sm uppercase tracking-widest font-medium hover:text-gold transition-colors">Studio</a>
            <a href="#expertise" className="text-sm uppercase tracking-widest font-medium hover:text-gold transition-colors">Expertise</a>
            <a href="#consultation" className="px-6 py-3 bg-obsidian text-white text-sm uppercase tracking-widest font-medium hover:bg-gold transition-colors duration-300">
              Book Consultation
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-obsidian p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-ivory flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-6 right-6 p-4 text-obsidian"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col items-center gap-8">
              <Logo className="w-24 h-24 mb-8" />
              <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif hover:text-gold transition-colors">Projects</a>
              <a href="#studio" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif hover:text-gold transition-colors">Studio</a>
              <a href="#expertise" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif hover:text-gold transition-colors">Expertise</a>
              <a href="#consultation" onClick={() => setIsMobileMenuOpen(false)} className="mt-8 px-8 py-4 bg-obsidian text-white tracking-widest uppercase text-sm">
                Book Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
