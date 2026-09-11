import React from 'react';
import { Sparkles, Target, Award, CheckCircle2 } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';
import SEO from '../components/SEO';

export default function AboutPage({ onOpenContact }) {
  return (
    <main className="pt-32 pb-20">
      <SEO
        title="About LabelBuz — Where Businesses Become Brands"
        description="Discover the story, mission, and operating principles of LabelBuz. We blend AI technology, design craft, and performance marketing to scale brands."
        canonical="https://labelbuz.com/about"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR STORY & MISSION</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Where Businesses Become <span className="text-brand-600 dark:text-brand-400">Brands</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            LabelBuz was built on a single premise: in today's fast-moving digital economy, standard marketing is dead. Only brands that fuse cutting-edge AI technology, irresistible visual craft, and data-driven ad performance win long term.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-md">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Our Core Mission</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To empower ambitious startups, growing enterprises, and established creators with complete end-to-end digital infrastructure—from AI video production and automated CRM workflows to custom web/mobile platforms and high-ROAS paid advertising.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-md">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">The LabelBuz Difference</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We don't sell bloated monthly retainers without accountability. Every project we launch carries strict performance KPIs: user conversion rate, sub-second load times, ad ROAS multiplier, and automated hours saved.
            </p>
          </div>
        </div>

        {/* Key Values List */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 mb-20">
          <h3 className="text-xl font-bold mb-6 text-center">Our Operating Principles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Speed is key: 10x faster execution using Generative AI",
              "100% Transparent communication & staging links",
              "Cross-platform mastery: iOS, Android, Web & SaaS",
              "Data-backed ad scaling across Meta & Google",
              "Dedicated 24/7 client support managers",
              "Clean, modular, scalable code bases"
            ].map((principle, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-100/60 dark:bg-slate-800/60 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>{principle}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <CtaBanner onOpenContact={onOpenContact} />
    </main>
  );
}
