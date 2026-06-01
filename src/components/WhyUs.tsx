import React from 'react';
import { motion } from 'motion/react';
import { Compass, Diamond, Ruler, Key, Users, Infinity as InfinityIcon } from 'lucide-react';

const pillars = [
  { icon: Ruler, title: "Architectural Expertise", desc: "A structural approach to interiors, ensuring aesthetic vision meets engineering reality." },
  { icon: Diamond, title: "Luxury Craftsmanship", desc: "Collaborating with elite artisans globally to source and install unparalleled materials." },
  { icon: Compass, title: "Bespoke Design", desc: "Every project is a singular masterpiece, tailored precisely to the client's lifestyle." },
  { icon: Key, title: "Turnkey Solutions", desc: "End-to-end project management, from concept sketches to final styling and handover." },
  { icon: Users, title: "Personalized Experience", desc: "A discreet, highly attentive client journey built on trust, transparency, and care." },
  { icon: InfinityIcon, title: "Timeless Principles", desc: "Transcending trends to create spaces that endure in elegance for generations." }
];

export const WhyUs = () => {
  return (
    <section id="expertise" className="py-24 md:py-32 bg-obsidian text-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4"
          >
            Why DIPIUGI
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight"
          >
            The Distinction of Excellence
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/5 mx-auto max-w-6xl">
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-10 md:p-12 border-r border-b border-white/5 hover:bg-white/5 transition-colors duration-500 group"
            >
              <pillar.icon className="w-8 h-8 text-gold mb-8 stroke-[1.5] group-hover:-translate-y-2 transition-transform duration-500" />
              <h4 className="text-xl font-serif mb-4">{pillar.title}</h4>
              <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
