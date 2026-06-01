import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Image } from './Image';

const projects = [
  {
    title: 'Palm Jumeirah Signature Villa',
    category: 'Luxury Villa',
    image: 'https://images.unsplash.com/photo-1628045610260-2ff7754d9c79?q=80&w=2000&auto=format&fit=crop',
    size: 'large'
  },
  {
    title: 'Downtown Dubai Penthouse',
    category: 'Private Residence',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop',
    size: 'small'
  },
  {
    title: 'DIFC Corporate Headquarters',
    category: 'Corporate Space',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
    size: 'small'
  },
  {
    title: 'Boutique Hotel Marina',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2000&auto=format&fit=crop',
    size: 'large'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-ivory text-obsidian">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl"
          >
            <h2 className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4">Our Work</h2>
            <h3 className="text-4xl md:text-6xl font-serif leading-tight">Signature Projects</h3>
            <p className="mt-6 text-gray-500 font-light text-lg">A curated showcase of spaces designed for extraordinary lifestyles.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className={`group cursor-pointer ${project.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <div className="overflow-hidden relative bg-sand">
                <div className="w-full h-[50vh] md:h-[70vh] relative">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full transition-transform duration-[1.5s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
                </div>
              </div>
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <p className="text-gold tracking-widest uppercase text-xs md:text-sm font-medium mb-3">{project.category}</p>
                  <h4 className="text-2xl md:text-3xl font-serif text-obsidian">{project.title}</h4>
                </div>
                <div className="w-12 h-12 rounded-full border border-obsidian flex shrink-0 items-center justify-center translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:bg-obsidian group-hover:text-white transition-all duration-500">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 text-center"
        >
           <a href="#all" className="inline-flex items-center gap-4 uppercase tracking-widest text-sm font-medium border-b border-obsidian pb-1 hover:text-gold hover:border-gold transition-colors duration-300">
             Explore Project Portfolio <ArrowRight className="w-4 h-4" />
           </a>
        </motion.div>
      </div>
    </section>
  );
};
