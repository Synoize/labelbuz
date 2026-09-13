import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import {
  ArrowUp,
  Sparkles,
  Mail,
  MapPin,
  Phone,
  Github,
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <img
                src={assets.logo}
                alt="LabelBuz"
                className="theme-logo h-14 w-auto object-contain transition duration-300 group-hover:scale-105"
              />

              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white flex items-end gap-1.5">
                  LabelBuz
                  <span className="mb-1.5 w-1.5 h-1.5 rounded-full bg-brand-500" />
                </span>

                <span className="mt-1 text-[9px] text-slate-500 dark:text-slate-400 font-semibold tracking-[0.14em] uppercase">
                  Businesses to Brands
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-medium">
              Where Businesses Become Brands. Full-suite digital growth agency
              engineering high-converting AI video, custom web & mobile apps,
              business automation, and high-ROI ad campaigns.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://twitter.com/synoize"
                target="__blank"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/labelbuz/"
                target="__blank"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/labelbuz/"
                target="__blank"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/synoize/"
                target="__blank"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/synoize"
                target="__blank"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Pages
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link to="/" className="hover:text-brand-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-brand-400 transition-colors"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  to="/works"
                  className="hover:text-brand-400 transition-colors"
                >
                  Portfolio & Works
                </Link>
              </li>
              <li>
                <Link
                  to="/process"
                  className="hover:text-brand-400 transition-colors"
                >
                  How We Work
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-brand-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-brand-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Tag Cloud */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Core Capabilities
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Social Media",
                "AI Video",
                "Automation",
                "Android App",
                "iOS App",
                "Web Dev",
                "Web Design",
                "Web App",
                "UI/UX",
                "Graphic Design",
                "Meta Ads",
                "Google Ads",
              ].map((s) => (
                <Link
                  key={s}
                  to="/services"
                  className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-brand-600 hover:text-white text-[10px] font-semibold text-slate-400 transition-colors"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-xs font-medium text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <span>ask.labelbuz@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <span>+91 6205163577</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
                <span>Global Digital Studio</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>
            © {new Date().getFullYear()} LabelBuz Agency. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hover:text-slate-400 transition-colors"
            >
              Support & Inquiry
            </Link>
            <span>•</span>
            <span className="text-slate-400">
              Where Businesses Become Brands
            </span>

            <button
              onClick={scrollToTop}
              className="ml-4 p-2.5 rounded-full bg-slate-800 hover:bg-brand-600 text-white transition-colors flex items-center justify-center shadow-md"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
