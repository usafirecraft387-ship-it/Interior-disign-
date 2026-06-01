import React from 'react';
import { motion } from 'motion/react';
import { Image } from './Image';
import { ArrowRight } from 'lucide-react';

export const Founder = () => {
  return (
    <section id="studio" className="py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative h-[60vh] md:h-[70vh] lg:h-[85vh] w-full"
          >
            <div className="absolute inset-0 bg-sand translate-x-4 translate-y-4" />
            <div className="relative w-full h-full">
              <Image 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1588&auto=format&fit=crop" 
                alt="Sawsan Haber - Founder"
                className="w-full h-full grayscale-[20%] contrast-125 rounded-none"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h2 className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4">Leadership</h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif text-obsidian leading-[1.1] mb-8">
              "We don't just design spaces; we curate the backdrop of your life."
            </h3>
            
            <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed mb-12">
              <p>
                Under the visionary guidance of Sawsan Haber, DIPIUGI has spent over two decades redefining the luxury interior architecture landscape in Dubai and the wider Middle East.
              </p>
              <p>
                Our philosophy is rooted in a deep understanding of structural integrity paired with an obsessive eye for detail. We believe true luxury is invisible—it is felt in the seamless flow of a room, the precise calibration of light, and the quiet perfection of natural materials.
              </p>
            </div>

            <div className="pt-8 border-t border-sand flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <h4 className="font-serif text-3xl text-obsidian mb-2">Sawsan Haber</h4>
                <p className="tracking-widest uppercase text-[10px] sm:text-xs text-gold font-medium mb-4">Founder & Principal Designer</p>
              </div>
              
              <a href="#founder" className="inline-flex items-center gap-4 text-obsidian uppercase tracking-widest text-sm font-medium border-b border-obsidian pb-1 hover:text-gold hover:border-gold transition-all duration-300">
                Meet The Founder <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
