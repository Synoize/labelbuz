import React, { useState } from 'react';
import { portfolioData, portfolioCategories } from '../data/portfolio';
import { ExternalLink, TrendingUp, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('All Works');
  const [activeWorkModal, setActiveWorkModal] = useState(null);

  const filteredWorks = activeCategory === 'All Works'
    ? portfolioData
    : portfolioData.filter(w => w.category.includes(activeCategory) || activeCategory.includes(w.category));

  return (
    <section id="works" className="py-20 md:py-28 relative bg-slate-50/40 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Works That <span className="text-brand-600 dark:text-brand-400">Speak Metrics</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Explore real client success stories across mobile apps, AI automation engines, high-ROAS ads, and web platforms.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all border ${
                activeCategory === cat
                  ? 'bg-brand-600 text-white border-brand-600 shadow-soft-glow'
                  : 'glass-card text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden glass-card border border-slate-200/80 dark:border-slate-800/80 hover:shadow-card-hover hover:border-brand-300 dark:hover:border-brand-800 transition-all duration-300 flex flex-col"
              >
                {/* Image Showcase Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Metrics Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-600/90 text-white text-xs font-bold shadow-md backdrop-blur-md">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{work.metrics}</span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-4 left-4 text-xs font-semibold text-slate-200 bg-slate-900/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    {work.client}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                      {work.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-600 dark:text-slate-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setActiveWorkModal(work)}
                      className="w-full py-2.5 rounded-2xl glass-card hover:bg-brand-600 hover:text-white text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-800 transition-all duration-300"
                    >
                      <span>Explore Case Study</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeWorkModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-3xl rounded-3xl glass-card border border-slate-200 dark:border-slate-800 overflow-hidden text-slate-900 dark:text-slate-100 max-h-[90vh] flex flex-col"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <img src={activeWorkModal.image} alt={activeWorkModal.title} className="w-full h-full object-cover" />
                <button
                  onClick={() => setActiveWorkModal(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900"
                >
                  ✕
                </button>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-brand-600 text-white font-bold text-xs shadow-md">
                    {activeWorkModal.metrics}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
                <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                  Client: {activeWorkModal.client}
                </span>
                <h3 className="text-2xl font-extrabold">{activeWorkModal.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeWorkModal.description}
                </p>

                <div className="pt-4 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
                  <div className="flex gap-2">
                    {activeWorkModal.tags.map(t => (
                      <span key={t} className="text-xs font-medium text-slate-500">#{t}</span>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setActiveWorkModal(null);
                      onOpenContact();
                    }}
                    className="px-6 py-2.5 bg-brand-600 text-white rounded-full text-xs font-bold flex items-center gap-2 hover:bg-brand-700 shadow-soft-glow"
                  >
                    <span>Build Similar Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
