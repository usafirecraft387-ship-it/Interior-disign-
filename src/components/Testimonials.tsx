import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "DIPIUGI didn't just build our villa; they completely elevated our standard of living. The attention to detail in the custom millwork is simply breathtaking.",
    author: "H.E. Al Maktoum",
    project: "Private Villa, Emirates Hills"
  },
  {
    quote: "A flawless turnkey experience. Sawsan and her team managed our penthouse renovation while we were abroad, delivering absolute perfection.",
    author: "Sarah & James Kingston",
    project: "Penthouse, Downtown Dubai"
  },
  {
    quote: "Their understanding of spatial dynamics and luxury materials set them apart from any other firm we've worked with in the UAE.",
    author: "CEO, Capital Hospitality",
    project: "Boutique Hotel Project"
  }
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 bg-ivory text-obsidian relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-sand" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <Quote className="w-10 h-10 md:w-12 md:h-12 text-gold/30 mx-auto mb-10 md:mb-16" />
        
        <div className="relative h-[300px] sm:h-[250px] md:h-[200px] flex items-center justify-center max-w-4xl mx-auto">
          <AnimatePresence mode='wait'>
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif italic font-light leading-relaxed mb-8 text-charcoal">
                "{testimonials[current].quote}"
              </h3>
              <div className="mt-auto md:mt-4">
                <p className="font-medium tracking-widest uppercase text-[10px] md:text-xs mb-1">{testimonials[current].author}</p>
                <p className="text-gold tracking-widest uppercase text-[10px] md:text-xs">{testimonials[current].project}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12 md:mt-20">
          <button onClick={prev} className="w-12 h-12 rounded-full border border-obsidian/20 flex items-center justify-center hover:bg-obsidian hover:border-obsidian hover:text-white transition-all duration-300">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="w-12 h-12 rounded-full border border-obsidian/20 flex items-center justify-center hover:bg-obsidian hover:border-obsidian hover:text-white transition-all duration-300">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
