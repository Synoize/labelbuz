import React from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CtaBanner({ onOpenContact }) {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl sm:rounded-4xl p-8 sm:p-14 bg-gradient-to-r from-brand-700 via-brand-600 to-purple-800 text-white shadow-2xl overflow-hidden border border-white/20"
        >
          {/* Ambient Glow & Decorative Icons */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ready to Elevate Your Business?</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Start Your Growth Journey Today <Heart className="inline w-8 h-8 fill-pink-400 text-pink-400" />
              </h2>
              <p className="mt-4 text-brand-100 text-sm sm:text-base">
                Join 500+ successful brands scaling with LabelBuz's AI video, automation, web/mobile dev, and high-ROI ads.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-brand-700 hover:bg-slate-100 font-extrabold text-sm shadow-xl flex items-center justify-center gap-3 transition-all duration-300 group"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
