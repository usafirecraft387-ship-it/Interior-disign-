import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-32 bg-ivory text-obsidian relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-sand" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
            Ready To Transform Your Space?
          </h2>
          <p className="text-gray-500 font-light text-xl mb-12">
            Partner with DIPIUGI to create interiors that inspire, elevate and endure.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#consultation" className="group flex items-center gap-4 bg-obsidian text-white px-8 py-5 hover:bg-gold transition-all duration-300 w-full sm:w-auto justify-center">
              <span className="uppercase tracking-widest text-sm font-medium">Book Consultation</span>
            </a>
            <a href="#projects" className="group flex items-center gap-4 border border-obsidian px-8 py-5 hover:border-gold hover:text-gold transition-all duration-300 w-full sm:w-auto justify-center">
              <span className="uppercase tracking-widest text-sm font-medium">Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
