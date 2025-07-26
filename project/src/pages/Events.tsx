import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Trophy, 
  Calendar, 
  Clock,
  MapPin,
  Download,
  ExternalLink,
  Filter
} from 'lucide-react';

interface Event {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  date: string;
  time: string;
  venue: string;
  prizePool: string;
  teamSize: string;
  registrationFee: string;
  rules: string[];
  featured: boolean;
}

export const Events: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const categories = ['All', 'Finance', 'Marketing', 'Case Study', 'Quiz', 'Workshop'];

  const events: Event[] = [
    {
      id: '1',
      title: 'Stock Market Simulation',
      category: 'Finance',
      description: 'Test your trading skills in a realistic stock market environment with live market data.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2025-02-15',
      time: '10:00 AM',
      venue: 'Auditorium A',
      prizePool: '₹50,000',
      teamSize: '1-2',
      registrationFee: '₹300',
      rules: [
        'Virtual trading platform with ₹10 lakh initial capital',
        'Duration: 4 hours of active trading',
        'Real-time market data and analysis tools provided',
        'Winners decided based on portfolio performance'
      ],
      featured: true
    },
    {
      id: '2',
      title: 'Marketing Maverick',
      category: 'Marketing',
      description: 'Create innovative marketing campaigns for real brands and present to industry experts.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2025-02-15',
      time: '2:00 PM',
      venue: 'Conference Hall B',
      prizePool: '₹40,000',
      teamSize: '2-4',
      registrationFee: '₹400',
      rules: [
        'Teams will be given a brand and target audience',
        'Create a complete marketing strategy',
        'Presentation time: 10 minutes + 5 minutes Q&A',
        'Judged on creativity, feasibility, and impact'
      ],
      featured: true
    },
    {
      id: '3',
      title: 'Business Case Challenge',
      category: 'Case Study',
      description: 'Analyze complex business scenarios and present strategic solutions to real-world problems.',
      image: 'https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2025-02-16',
      time: '9:00 AM',
      venue: 'Seminar Room C',
      prizePool: '₹35,000',
      teamSize: '3-5',
      registrationFee: '₹500',
      rules: [
        'Case study will be provided 24 hours before presentation',
        'Teams must research and develop solutions',
        'Presentation: 15 minutes + 10 minutes Q&A',
        'Focus on analytical thinking and practical solutions'
      ],
      featured: false
    },
    {
      id: '4',
      title: 'Finance Quiz Championship',
      category: 'Quiz',
      description: 'Ultimate test of financial knowledge covering markets, banking, and economic concepts.',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2025-02-16',
      time: '3:00 PM',
      venue: 'Main Auditorium',
      prizePool: '₹25,000',
      teamSize: '1-3',
      registrationFee: '₹200',
      rules: [
        'Multiple rounds: Written, Visual, and Rapid Fire',
        'Covers finance, economics, and current affairs',
        'Negative marking in rapid fire round',
        'Top 8 teams qualify for final round'
      ],
      featured: false
    },
    {
      id: '5',
      title: 'Fintech Innovation Workshop',
      category: 'Workshop',
      description: 'Learn about cutting-edge fintech trends and build your own financial technology solution.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2025-02-17',
      time: '11:00 AM',
      venue: 'Computer Lab',
      prizePool: 'Certificate',
      teamSize: '1-2',
      registrationFee: '₹150',
      rules: [
        'Hands-on workshop with industry experts',
        'Build a working prototype or concept',
        'All materials and resources provided',
        'Presentation of final project to peers'
      ],
      featured: false
    },
    {
      id: '6',
      title: 'Investment Banking Simulation',
      category: 'Finance',
      description: 'Experience the fast-paced world of investment banking through realistic deal scenarios.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2025-02-17',
      time: '1:00 PM',
      venue: 'Business Center',
      prizePool: '₹30,000',
      teamSize: '2-3',
      registrationFee: '₹350',
      rules: [
        'Teams work on M&A and IPO scenarios',
        'Financial modeling and valuation required',
        'Present deal recommendations to judges',
        'Emphasis on analytical skills and presentation'
      ],
      featured: false
    }
  ];

  const filteredEvents = selectedCategory === 'All' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const featuredEvents = events.filter(event => event.featured);

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
              <span className="text-[#A020F0]">Events</span> & Competitions
            </h1>
            <p className="text-xl md:text-2xl text-[#E0D9EB] max-w-3xl mx-auto">
              Challenge yourself in premium finance competitions and expand your knowledge through expert-led workshops
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 bg-[#1A0A2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E0D9EB] mb-4">
              Featured <span className="text-[#A020F0]">Events</span>
            </h2>
            <p className="text-lg text-[#E0D9EB]">Don't miss these flagship competitions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="glass rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-20 transition-all duration-300">
                  <div className="relative aspect-video">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-[#A020F0] text-[#1A0A2E] px-3 py-1 rounded-full text-sm font-bold">
                      FEATURED
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-[#A020F0] text-[#E0D9EB] px-3 py-1 rounded-full text-sm">
                        {event.category}
                      </span>
                      <span className="text-[#A020F0] font-bold">{event.prizePool}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#E0D9EB] mb-3">{event.title}</h3>
                    <p className="text-[#E0D9EB] mb-4">{event.description}</p>
                    <div className="flex items-center justify-between text-sm text-[#E0D9EB]">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users size={16} />
                        <span>{event.teamSize} members</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Events Section */}
      <section className="py-16 bg-[#1A0A2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E0D9EB] mb-4">
              All <span className="text-[#A020F0]">Events</span>
            </h2>
            <p className="text-lg text-[#E0D9EB]">Explore our complete range of competitions and workshops</p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#A020F0] to-[#C7A2ED] text-[#E0D9EB]'
                    : 'glass text-[#E0D9EB] hover:bg-white hover:bg-opacity-20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-20 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="relative aspect-video">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  {event.featured && (
                    <div className="absolute top-3 right-3 bg-[#A020F0] text-[#1A0A2E] px-2 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[#A020F0] text-[#E0D9EB] px-3 py-1 rounded-full text-sm">
                      {event.category}
                    </span>
                    <span className="text-[#A020F0] font-bold text-sm">{event.prizePool}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#E0D9EB] mb-2">{event.title}</h3>
                  <p className="text-[#E0D9EB] text-sm mb-4">{event.description}</p>
                  <div className="space-y-2 text-xs text-[#E0D9EB]">
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                      <Clock size={14} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={14} />
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users size={14} />
                      <span>{event.teamSize} members</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-t-xl"></div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 text-[#E0D9EB] hover:text-[#A020F0] transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className="bg-[#A020F0] text-[#E0D9EB] px-4 py-2 rounded-full">
                    {selectedEvent.category}
                  </span>
                  {selectedEvent.featured && (
                    <span className="bg-[#A020F0] text-[#1A0A2E] px-4 py-2 rounded-full font-bold">
                      FEATURED
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#A020F0]">{selectedEvent.prizePool}</div>
                  <div className="text-sm text-[#E0D9EB]">Prize Pool</div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-[#E0D9EB] mb-4">{selectedEvent.title}</h2>
              <p className="text-[#E0D9EB] mb-6 leading-relaxed">{selectedEvent.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-[#A020F0]" />
                    <div>
                      <div className="text-[#E0D9EB] font-medium">Date & Time</div>
                      <div className="text-[#E0D9EB]">{new Date(selectedEvent.date).toLocaleDateString()} at {selectedEvent.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-[#A020F0]" />
                    <div>
                      <div className="text-[#E0D9EB] font-medium">Venue</div>
                      <div className="text-[#E0D9EB]">{selectedEvent.venue}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-[#A020F0]" />
                    <div>
                      <div className="text-[#E0D9EB] font-medium">Team Size</div>
                      <div className="text-[#E0D9EB]">{selectedEvent.teamSize} members</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Trophy className="w-5 h-5 text-[#A020F0]" />
                    <div>
                      <div className="text-[#E0D9EB] font-medium">Registration Fee</div>
                      <div className="text-[#E0D9EB]">{selectedEvent.registrationFee}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#E0D9EB] mb-4">Rules & Guidelines</h3>
                <ul className="space-y-2">
                  {selectedEvent.rules.map((rule, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-[#A020F0] mt-1">•</span>
                      <span className="text-[#E0D9EB]">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-gradient-to-r from-[#A020F0] to-[#C7A2ED] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#C7A2ED] hover:to-[#A020F0] transition-all duration-200 flex items-center justify-center space-x-2">
                  <ExternalLink size={20} />
                  <span>Register Now</span>
                </button>
                <button className="glass text-[#E0D9EB] px-8 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Download size={20} />
                  <span>Download Rules</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};