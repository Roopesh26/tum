import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Megaphone } from 'lucide-react';
import confetti from 'canvas-confetti';

export const NotificationBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [soundReady, setSoundReady] = useState(false);

  const messages = [
    '🎉 Early Bird Registration ends Jan 15 – Save 30%!',
    '📣 Speaker Lineup Announced – Check the Events page!',
    '🔥 New Workshops just added – Limited spots!'
  ];

  useEffect(() => {
    const dismissed = localStorage.getItem('bannerDismissed');
    if (dismissed) setIsVisible(false);
  }, []);

  useEffect(() => {
    const rotate = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 6000);
    return () => clearInterval(rotate);
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Confetti burst
      confetti({ particleCount: 50, spread: 80, origin: { y: 0.2 } });

      // Wait for user interaction before playing sound
      const handleInteraction = () => {
        const audio = new Audio('/banner-chime.mp3');
        audio.play().catch((err) => {
          console.warn("Sound play blocked or failed:", err.message);
        });
        setSoundReady(true);
        window.removeEventListener('click', handleInteraction);
      };

      // Only add listener once
      if (!soundReady) {
        window.addEventListener('click', handleInteraction);
      }

      // Auto-dismiss after 10s
      const timer = setTimeout(() => setIsVisible(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, soundReady]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('bannerDismissed', 'true');
  };

  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const gradientClass = isDark
    ? 'from-[#A020F0] to-[#C7A2ED]'
    : 'from-[#FF7E5F] to-[#FEB47B]';

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className={`bg-gradient-to-r ${gradientClass} relative overflow-hidden mt-16 lg:mt-20`}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative w-full px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Megaphone size={20} className="text-white animate-pulse" />
              <p
                className="text-white text-sm md:text-base font-medium animate-pulse"
                style={{ textShadow: '0 0 8px #ffffff99' }}
                aria-live="polite"
              >
                {messages[currentMessage]}
              </p>
              <button
                onClick={() =>
                  document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="ml-4 bg-white text-[#A020F0] px-3 py-1 rounded text-sm font-semibold hover:bg-gray-100"
              >
                Register Now
              </button>
            </div>
            <button
              onClick={handleClose}
              className="text-white hover:text-gray-200 transition-colors duration-200 p-1"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
