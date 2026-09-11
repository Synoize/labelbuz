import React, { useState } from 'react';
import { servicesData, serviceCategories } from '../data/services';
import { 
  Share2, Video, Cpu, Smartphone, Code, Layout, Globe, 
  Figma, Palette, Target, ArrowRight, CheckCircle2, Sparkles, X, ChevronRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap = {
  Share2,
  Video,
  Cpu,
  Smartphone,
  Code,
  Layout,
  Globe,
  Figma,
  Palette,
  Target
};

export default function Services({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedServiceModal, setSelectedServiceModal] = useState(null);

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Services Built to <span className="text-brand-600 dark:text-brand-400">Scale Brands</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-600 dark:text-slate-400 max-w-md text-sm sm:text-base">
            From short-form AI reels to enterprise mobile apps and high-ROAS ad campaigns, we handle every growth layer.
          </p>
        </div>

        {/* Category Filter Pills (Reference layout visual style) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all shrink-0 border ${
                activeCategory === cat.id
                  ? 'bg-brand-600 text-white border-brand-600 shadow-soft-glow'
                  : 'glass-card border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => {
            const IconComp = iconMap[service.iconName] || Code;
            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative p-6 sm:p-8 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 hover:shadow-card-hover hover:border-brand-300 dark:hover:border-brand-800 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 border border-brand-200/40">
                      <IconComp className="w-7 h-7" />
                    </div>
                    {service.badge && (
                      <span className="px-3 py-1 text-[10px] font-bold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Feature Checklist (First 3) */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedServiceModal(service)}
                    className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 flex items-center gap-1 group/link"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform text-brand-500" />
                  </button>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="p-2 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 hover:bg-brand-600 hover:text-white transition-colors"
                    title="Inquire Service"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Service Spec Details Modal */}
      <AnimatePresence>
        {selectedServiceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-2xl p-6 sm:p-8 rounded-3xl glass-card shadow-2xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-md">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                    Service Blueprint
                  </span>
                  <h3 className="text-2xl font-extrabold">{selectedServiceModal.title}</h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {selectedServiceModal.fullDesc}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-3">
                  Key Deliverables & Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedServiceModal.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold p-2.5 rounded-xl bg-slate-100/60 dark:bg-slate-800/60">
                      <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-brand-50/60 dark:bg-brand-950/40 border border-brand-200/50 dark:border-brand-800/50 mb-6">
                <span className="text-xs font-bold text-brand-700 dark:text-brand-300 block mb-1">
                  📦 Deliverables Output:
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {selectedServiceModal.deliverables}
                </p>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedServiceModal(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedServiceModal.title;
                    setSelectedServiceModal(null);
                    onSelectService(title);
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-bold bg-brand-600 hover:bg-brand-700 text-white shadow-soft-glow flex items-center gap-2"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
