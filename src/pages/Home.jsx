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
  CheckCircle2,
  TrendingUp,
  Search,
  Code2,
  Rocket,
  Share2,
  Video,
  Cpu,
  Smartphone,
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

export default function Home({ onOpenContact, onOpenVideo }) {
  // Show top 4 services on minimal home page
  const featuredServices = servicesData.slice(0, 4);
  // Show top 3 works on minimal home page
  const featuredWorks = portfolioData.slice(0, 3);

  return (
    <main>
      <SEO
        title="LabelBuz — Where Businesses Become Brands"
        description="LabelBuz is a premier digital growth agency specializing in Social Media Management, AI Video, Automation, Android & iOS Apps, Web Development, UI/UX, Graphic Design, and Paid Ads."
        canonical="https://labelbuz.com/"
      />

      {/* Hero Section */}
      <Hero onOpenContact={onOpenContact} onOpenVideo={onOpenVideo} />

      {/* Minimal Featured Services Section */}
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
                <span className="text-brand-600 dark:text-brand-400">
                  Scale
                </span>
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
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>
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

      {/* Minimal Process Teaser Section */}
      <section className="py-16 md:py-24 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              The{" "}
              <span className="text-brand-600 dark:text-brand-400">
                LabelBuz
              </span>{" "}
              Execution Pipeline
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3">
              5 strategic phases designed to turn your business into an
              automated, revenue-driven brand.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-4 rounded-2xl glass-card text-center border border-slate-200/60 dark:border-slate-800/60"
              >
                <span className="text-xs font-extrabold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950 px-2.5 py-1 rounded-full inline-block mb-2">
                  Step {step.step}
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                  {step.title}
                </h4>
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

      {/* Minimal Works Showcase Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block mb-2">
                PROVEN RESULTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Featured Case Studies
              </h2>
            </div>
            <Link
              to="/works"
              className="mt-4 md:mt-0 text-xs font-bold text-brand-600 hover:underline flex items-center gap-1"
            >
              <span>View All Portfolio Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredWorks.map((work) => (
              <article
                key={work.id}
                className="rounded-3xl overflow-hidden glass-card border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                  <img
                    src={work.image}
                    alt={work.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-brand-600 text-white text-xs font-bold shadow-md">
                    {work.metrics}
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-bold text-brand-600 dark:text-brand-400 block mb-1">
                    {work.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {work.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                    {work.description}
                  </p>
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
