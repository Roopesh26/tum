// About.tsx - Part 1

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Eye, Users, Trophy, Calendar, MapPin, 
  Lightbulb, TrendingUp, Award, Globe 
} from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Participants' },
    { icon: Trophy, value: '15+', label: 'Events' },
    { icon: Award, value: '₹2L+', label: 'Prize Money' },
    { icon: Globe, value: '50+', label: 'Colleges' },
  ];

  const objectives = [
    {
      icon: Target,
      title: 'Excellence in Finance',
      description: 'Foster deep understanding of financial markets, investment strategies, and economic principles among students.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Creativity',
      description: 'Encourage innovative thinking and creative problem-solving in business and finance scenarios.'
    },
    {
      icon: Users,
      title: 'Networking & Collaboration',
      description: 'Build strong professional networks and collaborative relationships within the finance community.'
    },
    {
      icon: TrendingUp,
      title: 'Industry Exposure',
      description: 'Provide real-world exposure to financial markets, trends, and industry best practices.'
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'The Beginning',
      description: 'Finanza was established with the vision of creating India\'s premier finance festival.',
      stats: '150 participants, 8 events'
    },
    {
      year: '2020',
      title: 'Digital Innovation',
      description: 'Pioneered virtual finance competitions during the pandemic, reaching national audience.',
      stats: '300 participants, 12 events'
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Gained recognition from top financial institutions and industry leaders.',
      stats: '400 participants, 15 events'
    },
    {
      year: '2024',
      title: 'National Expansion',
      description: 'Expanded to become one of India\'s most prestigious finance festivals.',
      stats: '500+ participants, 18 events'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1A0A2E] via-[#1A0A2E] to-[#A020F0]">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#E0D9EB] mb-6">
              About <span className="text-[#A020F0]">Finanza</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#E0D9EB] max-w-3xl mx-auto">
              Empowering the next generation of financial leaders through innovation, competition, and excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1A0A2E]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center glass p-6 rounded-xl"
                >
                  <Icon className="w-8 h-8 text-[#A020F0] mx-auto mb-4" />
                  <div className="text-3xl font-bold text-[#E0D9EB] mb-2">{stat.value}</div>
                  <div className="text-[#E0D9EB]">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#1A0A2E]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <Eye className="w-8 h-8 text-[#A020F0]" />
                <h2 className="text-3xl font-bold text-[#E0D9EB]">Our Vision</h2>
              </div>
              <p className="text-lg text-[#E0D9EB] leading-relaxed">
                To establish Finanza as India's most prestigious finance and business festival, creating a platform where young minds can explore, innovate, and excel in the world of finance while building lasting professional relationships.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <Target className="w-8 h-8 text-[#A020F0]" />
                <h2 className="text-3xl font-bold text-[#E0D9EB]">Our Mission</h2>
              </div>
              <p className="text-lg text-[#E0D9EB] leading-relaxed">
                To provide students with comprehensive exposure to financial markets, investment strategies, and business excellence through engaging competitions, workshops, and networking opportunities with industry leaders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-[#1A0A2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#E0D9EB] mb-6">
              Our <span className="text-[#A020F0]">Objectives</span>
            </h2>
            <p className="text-xl text-[#E0D9EB] max-w-3xl mx-auto">
              Driving excellence in finance education through comprehensive learning experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <motion.div
                  key={objective.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="glass p-8 rounded-xl hover:bg-white hover:bg-opacity-20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#A020F0] to-[#C7A2ED] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#E0D9EB] mb-3">{objective.title}</h3>
                      <p className="text-[#E0D9EB] leading-relaxed">{objective.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Timeline */}
      <section className="py-20 bg-[#1A0A2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#E0D9EB] mb-6">
              Our <span className="text-[#A020F0]">Journey</span>
            </h2>
            <p className="text-xl text-[#E0D9EB] max-w-3xl mx-auto">
              From humble beginnings to becoming India's premier finance festival
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#A020F0] to-[#C7A2ED] hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1 md:pr-8">
                    <div className={`glass p-6 rounded-xl ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="text-[#A020F0] font-bold text-xl mb-2">{item.year}</div>
                      <h3 className="text-2xl font-semibold text-[#E0D9EB] mb-3">{item.title}</h3>
                      <p className="text-[#E0D9EB] mb-4">{item.description}</p>
                      <div className="text-sm text-[#A020F0] font-medium">{item.stats}</div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#A020F0] rounded-full border-4 border-[#1A0A2E]"></div>
                  
                  <div className="flex-1 md:pl-8"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Mithibai College */}
      <section className="py-20 bg-[#1A0A2E]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-[#E0D9EB]">
                About <span className="text-[#A020F0]">Mithibai College</span>
              </h2>
              <p className="text-lg text-[#E0D9EB] leading-relaxed">
                Established in 1961, Mithibai College is one of Mumbai's premier educational institutions, known for its excellence in commerce, management, and arts education. The college has been a nurturing ground for future leaders, entrepreneurs, and professionals.
              </p>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#A020F0]" />
                <span className="text-[#E0D9EB]">Vile Parle (West), Mumbai - 400056</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-[#A020F0]" />
                <span className="text-[#E0D9EB]">Established in 1961</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Mithibai College"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A2E]/50 to-transparent rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
