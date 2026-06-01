import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-obsidian text-white flex items-center pt-20">
      {/* Cinematic Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: yImage }}
      >
        <motion.div
          className="absolute inset-0 bg-black/40 z-10" // Overlay for text readability
          initial={{ opacity: 1 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
        />
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2500&auto=format&fit=crop" 
          alt="Luxury Interior Dubai" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <motion.div 
          style={{ opacity: opacityText }}
          className="max-w-4xl"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 font-medium"
          >
            Dubai Luxury Interior Architecture Studio Since 2003
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8"
          >
            Designing Extraordinary Spaces For Extraordinary Lives.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mb-12 leading-relaxed"
          >
            Creating bespoke residential, commercial and hospitality environments that combine architectural precision, timeless elegance and exceptional craftsmanship.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mt-8"
          >
            <a href="#consultation" className="group flex items-center gap-4 bg-white text-obsidian px-8 py-5 hover:bg-gold hover:text-white transition-all duration-300">
              <span className="uppercase tracking-widest text-sm font-medium">Book Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust Bar - Absolute positioned at bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/20 backdrop-blur-sm hidden lg:block"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center text-[10px] xl:text-xs tracking-widest uppercase text-gray-300">
            <span>Established Since 2003</span>
            <span className="w-1 h-1 bg-gold rounded-full"></span>
            <span>100K+ Instagram Community</span>
            <span className="w-1 h-1 bg-gold rounded-full"></span>
            <span>Lux Residential & Corporate</span>
            <span className="w-1 h-1 bg-gold rounded-full"></span>
            <span>Dubai Based</span>
            <span className="w-1 h-1 bg-gold rounded-full"></span>
            <span>Intl. Design Standards</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
