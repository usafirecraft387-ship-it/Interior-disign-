import React from 'react';
import { motion } from 'motion/react';
import { Image } from './Image';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Project Challenge",
    desc: "Transforming a 15,000 sq ft raw structure into a cohesive, warm family home that balances majestic scale with intimate living spaces."
  },
  {
    num: "02",
    title: "Design Vision",
    desc: "A timeless dialogue between contemporary minimalism and rich, classical textures. Using natural light as a primary architectural material."
  },
  {
    num: "03",
    title: "The Execution",
    desc: "Sourcing custom Calacatta marble from Italian quarries, pairing it with bespoke brushed bronze fixtures and hand-crafted walnut cabinetry."
  }
];

export const CaseStudy = () => {
  return (
    <section className="bg-obsidian text-ivory py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4">Deep Dive</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">The Emirates Hills Estate</h3>
          <p className="text-gray-400 font-light text-lg">An inside look at our methodology and commitment to perfection.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12 md:space-y-16"
          >
            {steps.map((step, idx) => (
              <div key={idx} className="relative pl-10 md:pl-16 group">
                <span className="absolute left-0 top-0 text-xl font-serif text-gold opacity-50 group-hover:opacity-100 transition-opacity duration-300">{step.num}</span>
                <h4 className="text-2xl font-serif mb-4 group-hover:text-gold transition-colors duration-300">{step.title}</h4>
                <p className="text-gray-400 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pl-10 md:pl-16 pt-8"
            >
              <a href="#casestudy" className="inline-flex items-center gap-4 text-white uppercase tracking-widest text-sm font-medium border-b border-white/30 pb-1 hover:text-gold hover:border-gold transition-all duration-300">
                View Case Study <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[60vh] lg:h-[80vh] w-full"
          >
            <Image 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop" 
              alt="Case Study Interior"
              className="w-full h-full"
            />
            {/* Elegant overlay accents */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-gold/50" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-gold/50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
