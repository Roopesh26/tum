import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CountdownTimer } from '../components/UI/CountdownTimer';
import { RippleButton } from '../components/UI/RippleButton';

export const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1A0A2E] via-[#16213E] to-[#0F3460] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-500/5 to-transparent rounded-full"></div>
        </div>

        {/* Video */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 max-w-5xl mx-auto"
          >
            <video
              className="w-full h-[280px] md:h-[500px] rounded-3xl"
              src="/assets/intro.mp4"
              autoPlay
              muted
              loop
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Gallery Section Start */}
      <section className="py-20 bg-gradient-to-br from-[#0F0F23] via-[#1A0A2E] to-[#16213E] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 relative z-10"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-playfair">
              <span className="bg-gradient-to-r from-[#A020F0] to-[#00FFAB] bg-clip-text text-transparent">Gallery</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-inter">
              Relive the magic of Finanza through the years - from unforgettable moments to celebrity appearances.
            </p>
          </motion.div>
          {/* Gallery Grid */}
          <div className="relative z-10">
            <div className="flex items-center justify-center min-h-[600px] perspective-1000">
              {/* Rotated Side Text */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 z-20"
              >
                <h3 className="text-8xl font-bold text-white/20 transform -rotate-90 origin-center whitespace-nowrap font-playfair tracking-widest">
                  GALLERY
                </h3>
              </motion.div>

              {/* Panels */}
              <div className="flex items-center justify-center space-x-2 md:space-x-4">
                {[
                  {
                    year: '2023',
                    gradient: 'from-pink-500 via-purple-500 to-indigo-600',
                    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600',
                    delay: 0
                  },
                  {
                    year: '2022',
                    gradient: 'from-yellow-400 via-orange-500 to-red-500',
                    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
                    delay: 0.1
                  },
                  {
                    year: '2021',
                    gradient: 'from-green-400 via-teal-500 to-blue-500',
                    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
                    delay: 0.2
                  },
                  {
                    year: '2020',
                    gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
                    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
                    delay: 0.3
                  },
                  {
                    year: '2019',
                    gradient: 'from-blue-400 via-indigo-500 to-purple-600',
                    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600',
                    delay: 0.4
                  },
                  {
                    year: 'SPEAKERS',
                    gradient: 'from-indigo-500 via-purple-600 to-pink-500',
                    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
                    delay: 0.5
                  }
                ].map((panel, index) => (
                  <motion.div
                    key={panel.year}
                    initial={{ opacity: 0, y: 100, rotateY: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: panel.delay,
                      type: 'spring',
                      stiffness: 100
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      z: 50,
                      transition: { duration: 0.3 }
                    }}
                    onClick={() =>
                      window.location.href = `/gallery/${panel.year.toLowerCase()}`

                    }
                    className={`
                      relative w-32 md:w-40 lg:w-52 h-80 md:h-[500px] lg:h-[600px]
                      bg-gradient-to-b ${panel.gradient}
                      rounded-2xl overflow-hidden cursor-pointer
                      shadow-2xl hover:shadow-3xl
                      transform-gpu perspective-1000
                      group`
                    }
                    style={{
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={panel.image}
                        alt={`Finanza ${panel.year}`}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-all duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-b ${panel.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                    {/* Sparkles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`
                          }}
                        />
                      ))}
                    </div>

                    {/* Year Label */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                      <div className="bg-black/40 backdrop-blur-md rounded-full px-3 py-1 border border-white/40">
                        <span className="text-white text-xs md:text-sm font-bold tracking-wider drop-shadow-lg">
                          {panel.year}
                        </span>
                      </div>
                    </div>

                    {/* CTA View Gallery */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                      <div className="transform group-hover:translate-y-0 translate-y-4 transition-transform duration-300">
                        <div className="w-8 h-8 mx-auto mb-2 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                          <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                        <p className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg font-medium">
                          View Gallery
                        </p>
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${panel.gradient} blur-xl scale-110`}></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Explore Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16 relative z-10"
          >
            <RippleButton
              as={Link}
              to="/gallery"
              className="bg-white/15 backdrop-blur-xl border border-white/30 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white/25 hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-3xl inline-flex items-center space-x-3 group"
            >
              <span className="group-hover:text-[#00FFAB] transition-colors duration-300">Explore Full Gallery</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </RippleButton>
          </motion.div>
        </div>
      </section>
      {/* Countdown Section */}
      <section className="py-20 bg-gradient-to-br from-[#1A0A2E] via-[#16213E] to-[#0F3460]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Event Starts In
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't miss out on India's premier finance summit. Register now and be part of the future of finance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <CountdownTimer targetDate="2025-03-15T09:00:00" />
          </motion.div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-gradient-to-br from-[#0F0F23] via-[#1A0A2E] to-[#16213E] overflow-hidden relative">
        {/* Background Bokeh Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full"></div>
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 relative z-10"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-playfair">
              Our <span className="bg-gradient-to-r from-[#A020F0] to-[#00FFAB] bg-clip-text text-transparent">Partners</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-inter">
              Proudly supported by industry leaders and innovative companies
            </p>
          </motion.div>

          {/* Sponsor Carousel (Left to Right) */}
          <div className="relative mb-12 overflow-hidden">
            <div className="flex animate-scroll-left space-x-8 min-w-max">
              {[...Array(2)].flatMap((_, i) =>
                [
                  'HDFC Bank',
                  'Goldman Sachs',
                  'JPMorgan Chase',
                  'Deloitte',
                  'KPMG',
                  'EY'
                ].map((name, index) => (
                  <div
                    key={`${name}-${i}-${index}`}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 min-w-[220px] hover:bg-white/20 hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-3xl group"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:bg-white transition-all duration-300">
                        <img
                          src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=200"
                          alt={name}
                          className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-white font-semibold text-sm font-inter group-hover:text-[#00FFAB] transition-colors duration-300">
                        {name}
                      </h3>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Title Sponsor Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, y: -15 }}
            className="bg-white/15 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-2xl hover:shadow-3xl hover:bg-white/25 transition-all duration-500 group relative overflow-hidden w-full mb-16"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              TITLE SPONSOR
            </div>

            <div className="text-center flex items-center justify-center space-x-8">
              <div className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-xl group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                <img
                  src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Microsoft"
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-2xl font-playfair group-hover:text-[#00FFAB] transition-colors duration-300 mb-2">Microsoft</h3>
                <p className="text-white/70 text-lg font-inter">Empowering Innovation</p>
              </div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-[#00FFAB] rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-[#FFD700] rounded-full animate-pulse delay-100"></div>
                <div className="w-3 h-3 bg-[#A020F0] rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </motion.div>

          {/* Sponsor Carousel (Right to Left) */}
          <div className="relative mb-16 overflow-hidden">
            <div className="flex animate-scroll-right space-x-8 min-w-max">
              {[...Array(2)].flatMap((_, i) =>
                [
                  'Axis Bank',
                  'ICICI Bank',
                  'Paytm',
                  'Razorpay',
                  'Zerodha',
                  'Upstox'
                ].map((name, index) => (
                  <div
                    key={`${name}-${i}-${index}`}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 min-w-[220px] hover:bg-white/20 hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-3xl group"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:bg-white transition-all duration-300">
                        <img
                          src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=200"
                          alt={name}
                          className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-white font-semibold text-sm font-inter group-hover:text-[#00FFAB] transition-colors duration-300">
                        {name}
                      </h3>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* View All Sponsors CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center relative z-10"
          >
            <RippleButton
              as={Link}
              to="/sponsors"
              className="bg-white/15 backdrop-blur-xl border border-white/30 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white/25 hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-3xl inline-flex items-center space-x-3 group"
            >
              <span className="group-hover:text-[#00FFAB] transition-colors duration-300">View All Sponsors</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </RippleButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};