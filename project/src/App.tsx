import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Events } from "./pages/Events";
import { Team } from "./pages/Team";
import { Speakers } from "./pages/Speakers";
import { Sponsors } from "./pages/Sponsors";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { YearGallery } from "./pages/YearGallery";
import { NotificationBanner } from "./components/UI/NotificationBanner";
import { FloatingCTA } from "./components/UI/FloatingCTA";

import { AnimatePresence, motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import AnimatedCursor from "react-animated-cursor";
import LoadingBar from "react-top-loading-bar";

import "./App.css";

// Scroll Restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

// Page animation wrapper
const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="min-h-[80vh]"
  >
    {children}
  </motion.div>
);

function AppContent() {
  const location = useLocation();
  const progressRef = useRef<any>(null);
  const [width, height] = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  // Start loading bar on route change
  useEffect(() => {
    progressRef.current?.continuousStart();
    setTimeout(() => {
      progressRef.current?.complete();
    }, 500);

    // Play confetti ONCE when landing on home
    if (location.pathname === "/") {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
    } else {
      setShowConfetti(false);
    }
  }, [location]);

  return (
    <>
      {/* Animated Cursor */}
      <AnimatedCursor
        innerSize={6}
        outerSize={24}
        color="162,32,240"
        outerAlpha={0.2}
        innerScale={1}
        outerScale={2}
        trailingSpeed={6}
      />

      {/* Loading Bar */}
      <LoadingBar color="#A020F0" ref={progressRef} />

      {/* Confetti on Home page */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={40}
          recycle={false}
          gravity={0.3}
          colors={["#FFD700", "#A020F0", "#E0D9EB"]}
          drawShape={(ctx) => {
            ctx.font = "20px serif";
            ctx.fillText("💰", -5, 5);
          }}
          style={{ zIndex: 9999 }}
        />
      )}

      <Header />
      <NotificationBanner />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/events" element={<PageWrapper><Events /></PageWrapper>} />
            <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
            <Route path="/speakers" element={<PageWrapper><Speakers /></PageWrapper>} />
            <Route path="/sponsors" element={<PageWrapper><Sponsors /></PageWrapper>} />
            <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
            <Route path="/gallery/:year" element={<PageWrapper><YearGallery /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
      <FloatingCTA />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-[#1A0A2E] text-[#E0D9EB] font-sans relative overflow-x-hidden">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
