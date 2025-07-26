import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Team', href: '/team' },
  { name: 'Speakers', href: '/speakers' },
  { name: 'Sponsors', href: '/sponsors' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-800 transition-all duration-300',
        isScrolled
          ? 'bg-gradient-to-r from-[#0d071a] via-[#0c0c0c] to-[#0d071a] shadow-2xl'
          : 'bg-gradient-to-r from-[#1A0A2E]/80 via-black/80 to-[#A020F0]/80'
      )}
    >
      <nav className="w-full px-0 sm:px-4 lg:px-6">
        <div className="flex items-center h-16 lg:h-20">
          <Link to="/" className="flex items-center space-x-2 mr-auto group">
            {!logoError ? (
              <motion.img
                src="/Untitled design (2).png"
                alt="Finanza 2025 Logo"
                className="h-16 lg:h-20 w-auto object-contain max-w-[350px] drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                onError={() => setLogoError(true)}
                onLoad={() => console.log('Logo loaded successfully')}
                whileHover={{ rotateY: 10 }}
              />
            ) : (
              <div className="text-2xl font-bold bg-gradient-to-r from-[#A020F0] to-[#C7A2ED] bg-clip-text text-transparent">
                FINANZA 2025
              </div>
            )}
          </Link>

          <div className="hidden md:flex items-center space-x-8 ml-auto">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={clsx(
                  'relative px-3 py-2 text-sm font-medium transition duration-200 transform hover:scale-105 hover:shadow-inner',
                  isActive(item.href)
                    ? 'text-[#A020F0]'
                    : 'text-gray-300 hover:text-[#A020F0]'
                )}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A020F0]"
                  />
                )}
              </Link>
            ))}
            <Link
              to="/login"
              className="bg-gradient-to-r from-[#A020F0] to-[#C7A2ED] text-white px-4 py-2 rounded-lg font-medium hover:from-[#C7A2ED] hover:to-[#A020F0] transition-all duration-200 shadow-lg hover:shadow-2xl transform hover:scale-105"
            >
              Login
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-[#A020F0] transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-[#1A0A2E] bg-opacity-95 backdrop-blur-xl border-t border-gray-800 mt-2 rounded-b-lg shadow-lg"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={clsx(
                      'block px-3 py-2 text-base font-medium rounded-md transition duration-200 transform hover:scale-105',
                      isActive(item.href)
                        ? 'text-[#A020F0] bg-[#A020F0] bg-opacity-10'
                        : 'text-gray-300 hover:text-[#A020F0] hover:bg-[#A020F0] hover:bg-opacity-10'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-center bg-gradient-to-r from-[#A020F0] to-[#C7A2ED] text-white rounded-md mx-3 mt-4 shadow hover:shadow-xl transform hover:scale-105"
                >
                  Login
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};