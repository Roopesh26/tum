import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  Users,
  Trophy,
  ChevronUp,
  Lightbulb
} from "lucide-react";
import { motion } from "framer-motion";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export const Footer: React.FC = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ParallaxProvider>
      <footer className="relative bg-black border-t border-gray-800 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A0A2E]/20 via-black to-[#A020F0]/20 blur-md opacity-60 z-0" />

        {/* Top wave */}
        <div className="absolute inset-x-0 top-0 -mt-1 overflow-hidden z-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#1A0A2E" d="M0,40 C360,100 1080,0 1440,60 L1440,100 L0,100 Z" />
          </svg>
        </div>

        {/* Parallax floating icons */}
        {[
          { speed: -10, icon: <TrendingUp size={24} className="text-purple-500" />, top: "10", left: "10" },
          { speed: 5, icon: <Lightbulb size={24} className="text-yellow-400" />, bottom: "10", right: "10" }
        ].map(({ speed, icon, top, left, bottom, right }, idx) => (
          <Parallax speed={speed} key={idx}>
            <motion.div
              className={`absolute ${top ? `top-${top}` : ""} ${left ? `left-${left}` : ""} ${bottom ? `bottom-${bottom}` : ""} ${right ? `right-${right}` : ""}`}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6 + idx }}
            >
              {icon}
            </motion.div>
          </Parallax>
        ))}

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Brand Logo Block */}
            <motion.div
              whileHover={{ rotateX: 4, rotateY: 4 }}
              className="space-y-4 p-4 rounded-2xl bg-black/30 backdrop-blur-xl shadow-[0_8px_30px_rgba(162,32,240,0.35)]"
            >
              <img
                  src="public/Untitled%20design%20(2).png"
                alt="Finanza Logo"
                className="w-44 h-auto drop-shadow-xl hover:scale-105 transition-transform duration-300"
              />
              <p className="text-gray-400 text-sm">
                The premier finance and business festival bringing together the brightest minds in commerce, economics, and entrepreneurship.
              </p>
              <div className="flex space-x-4">
                <a href="#" aria-label="Instagram">
                  <Instagram className="text-gray-400 hover:text-[#A020F0] transition-transform duration-300 hover:scale-110" size={20} />
                </a>
                <a href="#" aria-label="Twitter">
                  <Twitter className="text-gray-400 hover:text-[#A020F0] transition-transform duration-300 hover:scale-110" size={20} />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="text-gray-400 hover:text-[#A020F0] transition-transform duration-300 hover:scale-110" size={20} />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              whileHover={{ rotateX: 4, rotateY: 4 }}
              className="space-y-4 p-4 rounded-2xl bg-black/30 backdrop-blur-xl shadow-[0_8px_30px_rgba(162,32,240,0.35)]"
            >
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                {["About", "Events", "Team", "Speakers"].map(name => (
                  <li key={name}>
                    <Link to={`/${name.toLowerCase()}`} className="text-[#E0D9EB] hover:text-[#A020F0] text-sm">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Event Categories */}
            <motion.div
              whileHover={{ rotateX: 4, rotateY: 4 }}
              className="space-y-4 p-4 rounded-2xl bg-black/30 backdrop-blur-xl shadow-[0_8px_30px_rgba(162,32,240,0.35)]"
            >
              <h4 className="text-lg font-semibold text-white">Event Categories</h4>
              <ul className="space-y-2">
                {[
                  { name: "Finance Competitions", icon: TrendingUp },
                  { name: "Case Studies", icon: Users },
                  { name: "Quizzes", icon: Trophy }
                ].map(({ name, icon: Icon }) => (
                  <li key={name} className="flex items-center space-x-2">
                    <Icon size={16} className="text-[#A020F0]" />
                    <span className="text-[#E0D9EB] text-sm">{name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              whileHover={{ rotateX: 4, rotateY: 4 }}
              className="space-y-4 p-4 rounded-2xl bg-black/30 backdrop-blur-xl shadow-[0_8px_30px_rgba(162,32,240,0.35)]"
            >
              <h4 className="text-lg font-semibold text-white">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-[#A020F0]" />
                  <div>
                    <p className="text-[#E0D9EB] text-sm">Mithibai College</p>
                    <p className="text-[#E0D9EB] text-sm">Vile Parle (W), Mumbai</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-[#A020F0]" />
                  <a href="mailto:finanza@mithibai.ac.in" className="text-[#E0D9EB] text-sm">
                    finanza@mithibai.ac.in
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-[#A020F0]" />
                  <a href="tel:+919876543210" className="text-[#E0D9EB] text-sm">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Footer */}
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {year} Finanza - Mithibai College. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#A020F0] text-sm">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-[#A020F0] text-sm">Terms</a>
              <a href="#" className="text-gray-400 hover:text-[#A020F0] text-sm">FAQ</a>
            </div>
          </div>

          {/* Scroll to Top */}
          {showScroll && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 p-3 rounded-full bg-[#A020F0] text-white hover:bg-[#C7A2ED] animate-pulse shadow-2xl"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} />
            </button>
          )}
        </div>
      </footer>
    </ParallaxProvider>
  );
};