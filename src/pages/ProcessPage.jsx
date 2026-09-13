import React from "react";
import Process from "../components/Process";
import CtaBanner from "../components/CtaBanner";
import SEO from "../components/SEO";
import { Sparkles, Zap, ShieldCheck } from "lucide-react";

export default function ProcessPage({ onOpenContact }) {
  return (
    <main className="pt-24">
      <SEO
        title="Our Process — 5-Step Brand Scaling Roadmap"
        description="Learn how LabelBuz transforms businesses into brands through our 5-stage roadmap: Discovery, Strategy & AI, Design & Code, Launch & Ads, Automate & Dominate."
        canonical="https://labelbuz.com/process"
      />
      <Process />

      <section className="py-16 bg-slate-100/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              METHODOLOGY
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Data-Driven & AI-Powered Engineering
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
              Every phase is backed by rigorous QA, user testing, continuous
              integration, and AI performance monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl glass-card border border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-950 text-brand-600 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold mb-2">
                Agile & Rapid Iteration
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Weekly sprints, transparent staging deployments, and instant
                feedback loops so you track progress in real-time.
              </p>
            </div>

            <div className="p-6 rounded-3xl glass-card border border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-950 text-brand-600 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold mb-2">AI-Enhanced Scaling</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                We leverage custom generative AI models for instant ad creative
                variations, automated lead response, and code optimization.
              </p>
            </div>

            <div className="p-6 rounded-3xl glass-card border border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-950 text-brand-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold mb-2">
                Enterprise Security & Performance
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Sub-second page speeds, SOC2/GDPR compliance guidelines, and
                99.9% uptime infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner onOpenContact={onOpenContact} />
    </main>
  );
}
