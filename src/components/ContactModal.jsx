import React, { useState } from "react";
import { X, Send, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal({ isOpen, onClose, initialPackage }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceNeeded: initialPackage || "Website Development",
    budget: "₹2,599 - ₹4,599",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data for Google Sheet
    const payload = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      serviceNeeded: formData.serviceNeeded,
      budget: formData.budget,
      message: formData.message,
    });

    // Send to Google Apps Script endpoint (no CORS required)
    try {
      await fetch(GOOGLE_FORM_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body: payload,
      });
    } catch (err) {
      console.error("Error sending data to Google Sheet:", err);
    }

    // Open WhatsApp chat with prefilled message
    // Open WhatsApp chat with prefilled message
    const whatsappMessage = `New Free Growth Consultation request:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.serviceNeeded}\nBudget: ${formData.budget}\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage).replace(
      /%2B/g,
      "+",
    );
    const whatsappUrl = `https://wa.me/916205163577?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    // Show submitted UI
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-xl p-6 sm:p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 shadow-2xl text-slate-900 dark:text-slate-100 max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-500"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold">
              Inquiry Sent Successfully!
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs mx-auto">
              Our growth strategist will contact you within 2 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Let's Talk Strategy</span>
            </div>

            <h3 className="text-2xl font-extrabold tracking-tight">
              Book Free Growth Consultation
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Tell us about your brand vision and goals.
            </p>

            {initialPackage && (
              <div className="p-3 rounded-2xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-xs font-bold text-brand-700 dark:text-brand-300">
                Selected Package: {initialPackage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-xs font-medium focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="alex@company.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-xs font-medium focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-xs font-medium focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Estimated Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-xs font-medium focus:outline-none focus:border-brand-500"
                >
                  <option> ₹2,599 - ₹4,599</option>
                  <option> ₹4,599 - ₹7,599</option>
                  <option> ₹7,599 - ₹10,999</option>
                  <option> ₹10,999 - ₹14,999</option>
                  <option> ₹14,999 - ₹19,999</option>
                  <option> ₹19,999 - ₹25,999</option>
                  <option> ₹25,999+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Project Details
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Briefly describe your requirements or existing brand..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-xs font-medium focus:outline-none focus:border-brand-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-soft-glow flex items-center justify-center gap-2 transition-all duration-300"
            >
              <span>Submit Consultation Request</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
