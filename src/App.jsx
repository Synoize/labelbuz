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
