import React from "react";
import { Play, Sparkles, Star, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero({ onOpenContact, onOpenVideo }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/15 dark:bg-brand-500/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Badge */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-brand-200/60 dark:border-brand-800/60 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-ping" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300">
              Where Businesses Become Brands
            </span>
            <Sparkles className="w-3.5 h-3.5 text-brand-500" />
          </motion.div>
        </div>

        {/* Hero Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]"
          >
            Scale Your Business into{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500">
              Iconic Brand.
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="6"
                viewBox="0 0 300 6"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0 4 Q75 0 150 4 Q225 8 300 4"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="text-brand-500"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto"
          >
            LabelBuz is your full-suite digital growth agency. From{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-100">
              Social Media & AI Video
            </span>{" "}
            to{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-100">
              Web/Mobile Apps, Automation, UI/UX
            </span>{" "}
            and{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-100">
              Paid Meta & Google Ads
            </span>
            .
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-soft-glow flex items-center justify-center gap-3 transition-all duration-300 group"
          >
            <span>Start Brand Transformation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenVideo}
            className="w-full sm:w-auto px-6 py-4 rounded-full glass-card hover:bg-white/80 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2.5 transition-all duration-300 group"
          >
            <div className="w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
            </div>
            <span>Watch Showreel</span>
          </button>
        </motion.div>

        {/* Hero Central Media Feature Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Left Floating Badge (User Review) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:flex absolute -left-12 top-12 z-20 w-64 p-4 rounded-3xl glass-card shadow-2xl border border-white/60 dark:border-slate-800/80 items-start gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/60 text-brand-600 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 fill-brand-500 text-brand-500" />
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400 text-xs font-bold mb-1">
                ★★★★★{" "}
                <span className="text-slate-700 dark:text-slate-300 text-[11px] ml-1">
                  5.0 Rating
                </span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-tight font-medium">
                "LabelBuz scaled our app signups by +340%!"
              </p>
              <span className="text-[10px] text-brand-600 font-bold mt-1 block">
                — Sarah K.
              </span>
            </div>
          </motion.div>

          {/* Right Floating Badge (Active Clients) */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="hidden lg:flex absolute -right-12 top-24 z-20 w-60 p-4 rounded-3xl glass-card shadow-2xl border border-white/60 dark:border-slate-800/80 items-center gap-3"
          >
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
                alt="Avatar"
              />
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
                alt="Avatar"
              />
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
                alt="Avatar"
              />
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                500+ Brands
              </div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                Trusted Globally
              </span>
            </div>
          </motion.div>

          {/* Main Video Preview Card Container */}
          <div className="relative rounded-3xl sm:rounded-4xl p-3 sm:p-4 bg-gradient-to-b from-white/80 to-brand-50/50 dark:from-slate-900/80 dark:to-slate-900/40 shadow-2xl border border-slate-200/80 dark:border-slate-800 backdrop-blur-xl group overflow-hidden">
            <div className="relative aspect-video sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 shadow-inner">
              {/* Background Image / Video Visual */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
                alt="LabelBuz Agency Showcase"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

              {/* Top Live Badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>Showreel 2026</span>
              </div>

              {/* Perfectly Centered Play Button Trigger */}
              <button
                onClick={onOpenVideo}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-600/90 hover:bg-brand-500 text-white flex items-center justify-center shadow-soft-glow hover:scale-110 transition-all duration-300 group/btn border-2 border-white/50 cursor-pointer"
                aria-label="Play Agency Showreel Video"
              >
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1" />
                <span className="absolute -inset-2 rounded-full bg-brand-500/30 animate-ping pointer-events-none" />
              </button>

              {/* Bottom Card Preview Stats Bar */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10 flex items-center justify-between text-white text-xs font-medium bg-slate-900/60 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10">
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-400" />
                  <span>AI Automation + Social Media + Development</span>
                </span>
                <span className="hidden sm:inline-block text-slate-300">
                  LabelBuz Studio Showcase 1:42 min
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Highlights Grid Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { label: "500+ Projects", desc: "Delivered Worldwide" },
            { label: "8.4x Avg ROAS", desc: "Meta & Google Ads" },
            { label: "99.8% Uptime", desc: "Web & Mobile Apps" },
            { label: "24/7 Dedicated", desc: "Client Support" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl glass-card border border-slate-200/60 dark:border-slate-800/60 text-center"
            >
              <div className="text-xl sm:text-2xl font-extrabold text-brand-600 dark:text-brand-400">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
