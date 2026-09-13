import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Palette, Sun, Moon, Check, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeCustomizer() {
  const {
    currentPalette,
    setCurrentPalette,
    isDarkMode,
    toggleDarkMode,
    themePalettes,
  } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-3 sm:right-6 z-50">
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-brand-600 text-white shadow-soft-glow flex items-center justify-center backdrop-blur-md transition-all duration-300 group"
        aria-label="Customize Theme Colors"
      >
        <Palette className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
      </motion.button>

      {/* Floating Settings Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-16 right-0 w-80 p-5 rounded-3xl glass-card shadow-2xl border border-slate-200/50 dark:border-slate-800/80 backdrop-blur-xl z-50 text-slate-900 dark:text-slate-100"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 dark:border-slate-800/60 mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-500" />
                <h4 className="font-bold text-base">Dynamic Theme & Colors</h4>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Dark/Light Mode Switch */}
            <div className="mb-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                Appearance Mode
              </span>
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 dark:bg-slate-900 rounded-2xl">
                <button
                  onClick={() => isDarkMode && toggleDarkMode()}
                  className={`flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-xl transition-all ${
                    !isDarkMode
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  <Sun className="w-4 h-4 text-amber-500" />
                  Light Mode
                </button>
                <button
                  onClick={() => !isDarkMode && toggleDarkMode()}
                  className={`flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-xl transition-all ${
                    isDarkMode
                      ? "bg-slate-800 text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  <Moon className="w-4 h-4 text-brand-400" />
                  Dark Mode
                </button>
              </div>
            </div>

            {/* Accent Color Palette Switcher */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                Brand Accent Color
              </span>
              <div className="grid grid-cols-1 gap-2">
                {themePalettes.map((palette) => (
                  <button
                    key={palette.id}
                    onClick={() => setCurrentPalette(palette.id)}
                    className={`flex items-center justify-between p-2.5 rounded-2xl border transition-all text-xs font-medium ${
                      currentPalette === palette.id
                        ? "border-brand-500 bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-300 shadow-sm"
                        : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-5 h-5 rounded-full bg-gradient-to-r ${palette.previewBg} shadow-sm`}
                      />
                      <span>{palette.name}</span>
                    </div>
                    {currentPalette === palette.id && (
                      <Check className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
