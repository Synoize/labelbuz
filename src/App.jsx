import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import { ThemeProvider } from "./context/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeCustomizer from "./components/ThemeCustomizer";
import ContactModal from "./components/ContactModal";
import ShowreelModal from "./components/ShowreelModal";

// Code Splitting with React.lazy for ultra-fast initial page load performance
const Home = lazy(() => import("./pages/Home"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const WorksPage = lazy(() => import("./pages/WorksPage"));
const ProcessPage = lazy(() => import("./pages/ProcessPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

// Fallback Loading Indicator
const PageLoader = () => (
  <div className="min-h-[70vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin"></div>
      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
        Loading LabelBuz...
      </span>
    </div>
  </div>
);

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenContact = (pkgName = "") => {
    setSelectedPackage(typeof pkgName === "string" ? pkgName : "");
    setIsContactOpen(true);
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen relative font-sans flex flex-col justify-between">
          {/* Header Navigation */}
          <Navbar onOpenContact={() => handleOpenContact("")} />

          {/* Suspense Lazy Loaded Routes */}
          <div className="flex-1">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home
                      onOpenContact={handleOpenContact}
                      onOpenVideo={() => setIsVideoOpen(true)}
                    />
                  }
                />
                <Route
                  path="/services"
                  element={<ServicesPage onOpenContact={handleOpenContact} />}
                />
                <Route
                  path="/works"
                  element={<WorksPage onOpenContact={handleOpenContact} />}
                />
                <Route
                  path="/process"
                  element={<ProcessPage onOpenContact={handleOpenContact} />}
                />
                <Route
                  path="/about"
                  element={<AboutPage onOpenContact={handleOpenContact} />}
                />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </div>

          <div aria-label="Social links">
            <a
              href="https://instagram.com/labelbuz"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow LabelBuz on Instagram"
              className="fixed bottom-6 left-3 sm:left-6 z-50 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 shadow-lg transition duration-300 hover:scale-110 animate-float"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt=""
                className="h-12 w-12 rounded-xl shadow-lg transition hover:scale-110"
              />
            </a>

            <a
              href="https://wa.me/916205163577?text=Hi%20LabelBuz%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with LabelBuz on WhatsApp"
              className="fixed bottom-6 right-3 sm:right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 shadow-lg transition duration-300 hover:bg-green-600 hover:scale-110 animate-float"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20 3.5A11.9 11.9 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.5 5.9L0 24l6.5-1.7c1.7.9 3.7 1.4 5.6 1.4 6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6-3.9-8.4zM12.1 21c-1.7 0-3.3-.4-4.8-1.2l-.3-.2-3.9 1 1-3.8-.2-.3c-1-1.5-1.5-3.2-1.5-4.9 0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9 1.8 1.8 2.9 4.3 2.9 6.9 0 5.4-4.4 9.8-9.8 9.8zm5.4-7.3c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.8-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.4.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.1-.7-1.6-1-2.2-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.8s1.2 3.2 1.4 3.4c.2.3 2.4 3.6 5.9 5 .8.3 1.4.5 1.9.6.8.2 1.6.2 2.2.1.7-.1 1.7-.7 2-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.3z" />
              </svg>
            </a>
          </div>

          {/* Footer */}
          <Footer />

          {/* Dynamic Theme & Color Customizer */}
          <ThemeCustomizer />

          {/* Consultation Modal */}
          <ContactModal
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
            initialPackage={selectedPackage}
          />

          {/* Showreel Video Modal */}
          <ShowreelModal
            isOpen={isVideoOpen}
            onClose={() => setIsVideoOpen(false)}
          />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
