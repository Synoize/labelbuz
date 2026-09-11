import React from 'react';
import { processSteps } from '../data/process';
import { Search, Sparkles, Code2, Rocket, TrendingUp, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Search,
  Sparkles,
  Code2,
  Rocket,
  TrendingUp,
};

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Matching reference layout visual structure) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-4">
            <span>HOW WE WORK</span>
            <Heart className="w-3.5 h-3.5 fill-brand-500 text-brand-500" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Businesses Choose <span className="text-brand-600 dark:text-brand-400">LabelBuz</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A seamless, 5-stage transformation roadmap from initial concept to market leader.
          </p>
        </div>

        {/* 5-Step Process Pipeline Container */}
        <div className="relative">
          {/* Connecting Curved Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/3 left-[8%] right-[8%] h-0.5 border-t-2 border-dashed border-brand-300 dark:border-brand-800 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
            {processSteps.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Sparkles;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Icon Badge */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-md group-hover:shadow-soft-glow border border-slate-200 dark:border-slate-700 flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    {/* Step Number Tag */}
                    <span className="absolute -top-2 -right-2 px-2 py-0.5 text-[10px] font-extrabold bg-brand-600 text-white rounded-full shadow-sm">
                      {item.step}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
