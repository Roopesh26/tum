import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus } from 'lucide-react';
import { RippleButton } from './RippleButton';

export const FloatingCTA: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        setIsVisible(footerTop > window.innerHeight);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (audioRef.current) audioRef.current.play();

    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/login';
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/click-sound.mp3" preload="auto" />
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="fixed bottom-6 right-6 z-40 group"
          whileHover={{ rotate: 2 }}
        >
          <div className="absolute -top-10 right-1 bg-[#FFD700] text-black px-3 py-1 text-xs rounded-full shadow-md animate-bounce hidden sm:block">
            🎉 Early Bird Ends Soon!
          </div>
          <RippleButton
            useRupeeCursor={true}
            className="bg-gradient-to-r from-[#00FFAB] to-[#FFD700] text-white px-6 py-3 rounded-full shadow-2xl transition-all duration-300 flex items-center space-x-2 enhanced-button glow-effect animate-pulse"
            onClick={handleClick}
          >
            <UserPlus size={20} />
            <span className="hidden sm:inline font-medium">Register Now</span>
          </RippleButton>
        </motion.div>
      )}
    </>
  );
};