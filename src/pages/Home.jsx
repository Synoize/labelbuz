import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import CtaBanner from "../components/CtaBanner";
import SEO from "../components/SEO";
import { servicesData } from "../data/services";
import { portfolioData } from "../data/portfolio";
import { processSteps } from "../data/process";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Search,
  Code2,
  Rocket,
  Share2,
  Video,
  Cpu,
  Smartphone,
  Users,
  Award,
  BarChart3,
  Zap,
  Globe,
  Star,
  Target,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  Share2,
  Video,
  Cpu,
  Smartphone,
  Search,
  Code2,
  Rocket,
  TrendingUp,
};

/* =============================================================================
   SECTION 1: Why Choose LabelBuz — horizontal icon step strip
============================================================================= */
function WhyChooseUs() {
  const steps = [
    { icon: Target,   title: "Define Your Goal",       desc: "We deep-dive into your business objectives and map an actionable growth strategy." },
    { icon: Layers,   title: "Build the Stack",         desc: "Design, develop, and automate across every digital channel your brand needs." },
    { icon: BarChart3,title: "Track & Optimise",        desc: "Real-time dashboards and weekly reports keep you in full control of KPIs." },
    { icon: Award,    title: "Get Certified Results",   desc: "Measurable ROI, published case studies, and a portfolio of proven wins." },
    { icon: Rocket,   title: "Scale to New Heights",    desc: "Apply compounding growth across paid ads, content, and product channels." },
  ];

  return (
    <section className="py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/30 dark:via-brand-700/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-brand-500 text-brand-500" />
            <span>Why Clients Love LabelBuz</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            From Strategy to{" "}
            <span className="text-brand-600 dark:text-brand-400">Results</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px border-t-2 border-dashed border-brand-200 dark:border-brand-800 z-0" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.09 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-900 border-2 border-brand-200 dark:border-brand-800 shadow-glass flex items-center justify-center mb-4 group-hover:border-brand-500 group-hover:shadow-soft-glow transition-all duration-300">
                    <Icon className="w-8 h-8 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">{step.title}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================================================================
   SECTION 2: Who We Are — split layout with animated floating badges + stats
============================================================================= */
function WhoWeAre({ onOpenContact }) {
  const stats = [
    { value: "200+", label: "Expert Creatives" },
    { value: "500+", label: "Projects Delivered" },
    { value: "98%",  label: "Client Satisfaction" },
  ];

  return (
    <section className="py-16 md:py-28 bg-slate-50/50 dark:bg-slate-900/30 relative overflow-hidden">
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left visual card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-brand-600 to-purple-700 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                alt="LabelBuz team at work"
                className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
              />
              <div
                className="absolute inset-0 opacity-10"
                style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }}
              />
              {/* Floating video badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 left-6 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 shadow-xl backdrop-blur-md border border-white/60"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center shrink-0">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900 dark:text-white">Watch Video</div>
                  <div className="text-[11px] text-slate-500">Agency Showreel</div>
                </div>
              </motion.div>
              {/* Bottom stat pill */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-6 left-6 right-6 flex items-center justify-between px-5 py-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 shadow-xl backdrop-blur-md border border-white/60"
              >
                <div>
                  <div className="text-xl font-extrabold text-brand-600">10M+</div>
                  <div className="text-[11px] text-slate-500">Impressions Generated</div>
                </div>
                <div className="h-10 w-px bg-slate-200 dark:bg-slate-700" />
                <div className="flex -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60",
                  ].map((src, i) => (
                    <img key={i} src={src} alt="" className="w-8 h-8 rounded-full ring-2 ring-white object-cover" />
                  ))}
                </div>
                <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Active Clients</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right text + stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-4">
              <span>WHO WE ARE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-5">
              Empowering <span className="text-brand-600 dark:text-brand-400">brands</span> through digital mastery
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              We believe every business deserves world-class digital execution. LabelBuz brings expert
              strategists, elite developers, and creative storytellers together to help you build skills
              that matter — and brands that last.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  className="p-4 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800/80 text-center"
                >
                  <div className="text-2xl font-extrabold text-brand-600 dark:text-brand-400">{stat.value}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-soft-glow transition-all duration-300 group"
            >
              <span>Meet the Team</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =============================================================================
   SECTION 3: Work Smarter With Us — checklist + service category grid visual
============================================================================= */
function WorkSmarter({ onOpenContact }) {
  const features = [
    { icon: Video,       text: "High-quality AI video & branded content at scale" },
    { icon: Cpu,         text: "Hands-off workflow automations that run 24 / 7" },
    { icon: Users,       text: "Dedicated account team & community of partners" },
    { icon: Globe,       text: "Deploy campaigns across every platform & device" },
    { icon: ShieldCheck, text: "Transparent reporting with full ownership of assets" },
  ];

  const categories = [
    { label: "Development",    count: "10+ Projects",   color: "bg-blue-100   text-blue-700   dark:bg-blue-950/50   dark:text-blue-300"   },
    { label: "Design",         count: "90+ Brands",     color: "bg-pink-100   text-pink-700   dark:bg-pink-950/50   dark:text-pink-300"   },
    { label: "Marketing",      count: "150+ Campaigns", color: "bg-amber-100  text-amber-700  dark:bg-amber-950/50  dark:text-amber-300"  },
    { label: "AI & Automation",count: "80+ Flows",      color: "bg-purple-100 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300" },
    { label: "Paid Ads",       count: "70+ Clients",    color: "bg-green-100  text-green-700  dark:bg-green-950/50  dark:text-green-300"  },
    { label: "Video & Reels",  count: "40+ Channels",   color: "bg-red-100    text-red-700    dark:bg-red-950/50    dark:text-red-300"    },
  ];

  return (
    <section className="py-16 md:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left checklist */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>SMARTER EXECUTION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              Grow in a <span className="text-brand-600 dark:text-brand-400">smarter</span> way
            </h2>
            <ul className="space-y-4 mb-8">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-xl bg-brand-100 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{feat.text}</span>
                  </motion.li>
                );
              })}
            </ul>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-soft-glow transition-all duration-300 group"
            >
              <span>Start Working Smarter</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right category grid card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-full bg-brand-500/5 dark:bg-brand-500/10 blur-3xl pointer-events-none" />
            <div className="relative rounded-3xl p-6 sm:p-8 glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">Popular Categories</h3>
                <Link
                  to="/services"
                  className="text-xs font-bold text-brand-600 dark:text-brand-400 flex items-center gap-1 hover:underline"
                >
                  View all <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {categories.map((cat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.07 }}
                    className={`rounded-2xl px-4 py-3.5 text-center cursor-pointer hover:scale-105 transition-transform ${cat.color}`}
                  >
                    <div className="text-sm font-bold truncate">{cat.label}</div>
                    <div className="text-[11px] opacity-70 mt-0.5">{cat.count}</div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900 dark:text-white">8.4x Avg ROAS</div>
                    <div className="text-[11px] text-slate-500">Across paid ad clients</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-extrabold text-brand-600 dark:text-brand-400">500+</div>
                  <div className="text-[11px] text-slate-500">Brands Scaled</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =============================================================================
   Main Home Page
============================================================================= */
export default function Home({ onOpenContact, onOpenVideo }) {
  const featuredServices = servicesData.slice(0, 4);
  const featuredWorks = portfolioData.slice(0, 3);

  return (
    <main>
      <SEO
        title="LabelBuz — Where Businesses Become Brands"
        description="LabelBuz is a premier digital growth agency specializing in Social Media Management, AI Video, Automation, Android & iOS Apps, Web Development, UI/UX, Graphic Design, and Paid Ads."
        canonical="https://labelbuz.com/"
      />

      {/* Hero */}
      <Hero onOpenContact={onOpenContact} onOpenVideo={onOpenVideo} />

      {/* Core Services */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CORE CAPABILITIES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                What We Build &{" "}
                <span className="text-brand-600 dark:text-brand-400">Scale</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="mt-4 md:mt-0 text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1.5"
            >
              <span>Explore All 10+ Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, idx) => {
              const IconComp = iconMap[service.iconName] || Sparkles;
              return (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-400 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-5 border border-brand-200/40">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">{service.shortDesc}</p>
                  </div>
                  <Link
                    to="/services"
                    className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-brand-600 dark:text-brand-400 flex items-center justify-between"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW: Why Choose LabelBuz */}
      <WhyChooseUs />

      {/* NEW: Who We Are */}
      <WhoWeAre onOpenContact={onOpenContact} />

      {/* Process Teaser */}
      <section className="py-16 md:py-24 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              The <span className="text-brand-600 dark:text-brand-400">LabelBuz</span> Execution Pipeline
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3">
              5 strategic phases designed to turn your business into an automated, revenue-driven brand.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {processSteps.map((step) => (
              <div key={step.step} className="p-4 rounded-2xl glass-card text-center border border-slate-200/60 dark:border-slate-800/60">
                <span className="text-xs font-extrabold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950 px-2.5 py-1 rounded-full inline-block mb-2">
                  Step {step.step}
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">{step.title}</h4>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/process"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-600 text-white text-xs font-bold shadow-soft-glow hover:bg-brand-700 transition-all"
            >
              <span>Explore Detailed 5-Step Process Roadmap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* NEW: Work Smarter With Us */}
      <WorkSmarter onOpenContact={onOpenContact} />

      {/* Featured Works */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block mb-2">PROVEN RESULTS</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Featured Case Studies</h2>
            </div>
            <Link to="/works" className="mt-4 md:mt-0 text-xs font-bold text-brand-600 hover:underline flex items-center gap-1">
              <span>View All Portfolio Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredWorks.map((work) => (
              <article key={work.id} className="rounded-3xl overflow-hidden glass-card border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                  <img src={work.image} alt={work.title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-brand-600 text-white text-xs font-bold shadow-md">{work.metrics}</div>
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-bold text-brand-600 dark:text-brand-400 block mb-1">{work.category}</span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{work.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">{work.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Banner */}
      <CtaBanner onOpenContact={onOpenContact} />
    </main>
  );
}
