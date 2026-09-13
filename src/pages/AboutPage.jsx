import React from 'react';
import {
  Sparkles,
  Target,
  Award,
  CheckCircle2,
  BrainCircuit,
  Palette,
  BarChart3,
  Code2,
  ArrowUpRight,
  Lightbulb,
  Users,
} from 'lucide-react';
import { motion } from 'framer-motion';
import CtaBanner from '../components/CtaBanner';
import SEO from '../components/SEO';
import assets from '../assets/assets';

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

        {/* Brand visual and studio snapshot */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 items-stretch mb-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[360px] overflow-hidden rounded-3xl bg-slate-950 p-8 sm:p-12 text-white shadow-2xl"
          >
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(167,139,250,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,.35) 1px, transparent 1px)', backgroundSize: '34px 34px' }} />
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-brand-400/30" />
            <div className="absolute -right-4 top-0 h-32 w-32 rounded-full border border-accent-400/30" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-300">LabelBuz Studio</span>
                <ArrowUpRight className="h-5 w-5 text-brand-300" />
              </div>
              <div className="flex items-center gap-5 py-10">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-white/10 p-3 ring-1 ring-white/20 backdrop-blur-sm">
                  <img src={assets.logo} alt="LabelBuz" className="theme-logo h-full w-full object-contain" />
                </div>
                <div>
                  <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">Ideas into impact.</p>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-300">A compact team of strategists, designers, developers, and growth specialists building brands people remember.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-300">
                {['Strategy', 'Design', 'Technology', 'Growth'].map((item) => (
                  <span key={item} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5">{item}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '500+', label: 'Brands supported', icon: Users },
              { value: '4x', label: 'Growth disciplines', icon: BarChart3 },
              { value: '24/7', label: 'Support mindset', icon: Lightbulb },
              { value: '100%', label: 'Built around KPIs', icon: Target },
            ].map(({ value, label, icon: Icon }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex min-h-[170px] flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
              >
                <Icon className="h-6 w-6 text-brand-500" />
                <div>
                  <p className="text-3xl font-extrabold text-slate-900 dark:text-white">{value}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">{label}</p>
                </div>
              </motion.div>
            ))}
          </div>
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

        {/* How the team creates value */}
        <div className="mb-20">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-400">One connected team</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Four capabilities, one growth engine.</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">Every engagement connects the story you tell with the experience you build and the results you measure.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: BrainCircuit, title: 'AI & Automation', text: 'Remove repetitive work and create faster customer journeys.' },
              { icon: Palette, title: 'Brand & Creative', text: 'Turn a clear point of view into a visual identity that travels.' },
              { icon: Code2, title: 'Digital Products', text: 'Build quick, useful web and mobile experiences for real users.' },
              { icon: BarChart3, title: 'Performance Growth', text: 'Use clean data and smart campaigns to compound momentum.' },
            ].map(({ icon: Icon, title, text }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-3xl border border-slate-200 bg-slate-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:bg-white hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-brand-800 dark:hover:bg-slate-900"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-950/60 dark:text-brand-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{text}</p>
              </motion.div>
            ))}
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
