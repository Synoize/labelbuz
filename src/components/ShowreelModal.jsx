import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ShowreelModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-lg">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-4xl rounded-3xl glass-card border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 border border-white/20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
            title="LabelBuz Studio Showreel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="p-4 sm:p-6 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <h4 className="font-bold text-base">LabelBuz Agency Brand Showreel 2026</h4>
            <span className="text-xs text-slate-400">Social Media • AI Video • Automation • Mobile & Web Apps</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-brand-600 hover:bg-brand-500 text-xs font-bold text-white"
          >
            Close Reel
          </button>
        </div>
      </motion.div>
    </div>
  );
}
