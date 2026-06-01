import React from 'react';
import { motion } from 'motion/react';

export const Consultation = () => {
  return (
    <section id="consultation" className="relative py-24 md:py-32 bg-obsidian text-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4">Private Consultation</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-[1.1]">Let's Create Something Exceptional.</h3>
            <p className="text-gray-400 font-light text-lg max-w-md mb-12">
              Partner with DIPIUGI to craft interiors that inspire, elevate, and endure. Complete the form to initiate a confidential discussion regarding your project.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 mb-1">Dubai Studio</p>
                <p className="font-serif text-lg">Dubai Design District, Building 4</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 mb-1">Direct Inquiries</p>
                <p className="font-serif text-lg hover:text-gold transition-colors cursor-pointer">design@dipiugi.com</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 p-8 md:p-12 lg:p-16 border border-white/10"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-gold transition-colors text-ivory placeholder-gray-600" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-gold transition-colors text-ivory placeholder-gray-600" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-gold transition-colors text-ivory placeholder-gray-600" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400">Phone Number</label>
                  <input type="tel" className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-gold transition-colors text-ivory placeholder-gray-600" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400">Project Type</label>
                <select className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-gold transition-colors text-ivory appearance-none">
                  <option value="" disabled className="bg-obsidian">Select...</option>
                  <option value="villa" className="bg-obsidian">Luxury Villa</option>
                  <option value="penthouse" className="bg-obsidian">Penthouse</option>
                  <option value="commercial" className="bg-obsidian">Corporate Workspace</option>
                  <option value="hospitality" className="bg-obsidian">Hospitality / Retail</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400">Project Details & Timeline</label>
                <textarea rows={3} className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-gold transition-colors text-ivory placeholder-gray-600 resize-none"></textarea>
              </div>

              <button className="w-full bg-white text-obsidian py-5 uppercase tracking-widest text-xs md:text-sm font-medium hover:bg-gold hover:text-white transition-all duration-300 mt-4">
                Schedule Private Consultation
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
