import React, { useState } from "react";
import {
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import SEO from "../components/SEO";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website Development",
    budget: "₹2,599 - ₹4,599",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `New Free Growth Consultation request:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nBudget: ${formData.budget}\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage).replace(
      /%2B/g,
      "+",
    );
    const whatsappUrl = `https://wa.me/916205163577?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
  };

  return (
    <main className="pt-32 pb-24">
      <SEO
        title="Contact & Book Growth Consultation | LabelBuz"
        description="Book a free consultation with LabelBuz digital growth strategists for web/mobile apps, AI video, business automation, and Meta & Google ads."
        canonical="https://labelbuz.com/contact"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CONTACT & CONSULTATION</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Build Something{" "}
            <span className="text-brand-600 dark:text-brand-400">Iconic</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Have a project in mind or want to automate your business? Get in
            touch with our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details & Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Direct Communication
              </h3>

              <div className="space-y-4 text-xs font-medium">
                <div className="flex items-start gap-4 p-3 rounded-2xl bg-slate-100/60 dark:bg-slate-800/60">
                  <Mail className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-slate-400 font-bold block uppercase">
                      Email Us
                    </span>
                    <a
                      href="mailto:ask.labelbuz@gmail.com"
                      className="text-sm font-bold text-slate-900 dark:text-white hover:text-brand-500"
                    >
                      ask.labelbuz@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-2xl bg-slate-100/60 dark:bg-slate-800/60">
                  <Phone className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-slate-400 font-bold block uppercase">
                      Call or WhatsApp
                    </span>
                    <a
                      href="https://wa.me/916205163577"
                      className="text-sm font-bold text-slate-900 dark:text-white hover:text-brand-500"
                    >
                      +91 6205163577
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-2xl bg-slate-100/60 dark:bg-slate-800/60">
                  <Clock className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-slate-400 font-bold block uppercase">
                      Response Guarantee
                    </span>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Within 2 Business Hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Consultation Perks */}
            <div className="p-6 rounded-3xl bg-brand-50/70 dark:bg-brand-950/40 border border-brand-200/60 dark:border-brand-800/60 space-y-3">
              <span className="text-xs font-extrabold text-brand-700 dark:text-brand-300 block uppercase">
                ⚡ What Happens Next?
              </span>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                  <span>15-min discovery call to understand your goals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                  <span>Custom scope proposal & clear milestone breakdown</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                  <span>No obligation, 100% free consultation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 shadow-2xl">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    Message Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                    Thank you for contacting LabelBuz. Our growth strategist
                    will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    Send Us a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-xs font-medium focus:outline-none focus:border-brand-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@brand.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-xs font-medium focus:outline-none focus:border-brand-500"
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
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-xs font-medium focus:outline-none focus:border-brand-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                        Primary Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-xs font-medium focus:outline-none focus:border-brand-500"
                      >
                        <option>Website Development</option>
                        <option>Android & iOS App</option>
                        <option>AI Video Production</option>
                        <option>Business Automation</option>
                        <option>Social Media Management</option>
                        <option>Meta & Google Ads</option>
                        <option>UI/UX & Graphic Design</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Target Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-xs font-medium focus:outline-none focus:border-brand-500"
                    >
                      <option>₹2,599 - ₹4,599</option>
                      <option>₹4,599 - ₹7,599</option>
                      <option>₹7,599 - ₹10,999</option>
                      <option>₹10,999 - ₹14,999</option>
                      <option>₹14,999 - ₹19,999</option>
                      <option>₹19,999 - ₹25,999</option>
                      <option>₹25,999+</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Project Overview
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your brand goals, target timeline, or existing stack..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-xs font-medium focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-soft-glow flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
