import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Building, 
  Award, 
  ExternalLink,
  Calendar,
  Clock,
  MapPin,
  Star,
  TrendingUp,
  Briefcase,
  Mail
} from 'lucide-react';

interface Speaker {
  id: string;
  name: string;
  designation: string;
  company: string;
  image: string;
  bio: string;
  talkTitle: string;
  talkDescription: string;
  expertise: string[];
  achievements: string[];
  featured: boolean;
  talkDate?: string;
  talkTime?: string;
  venue?: string;
}

export const Speakers: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Featured', 'Finance', 'Technology', 'Entrepreneurship', 'Banking'];

  const speakers: Speaker[] = [
    {
      id: '1',
      name: 'Rajesh Khanna',
      designation: 'Managing Director',
      company: 'Goldman Sachs India',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'A veteran investment banker with over 20 years of experience in global financial markets. Rajesh has led numerous high-profile IPOs and M&A transactions worth over $10 billion.',
      talkTitle: 'The Future of Investment Banking in India',
      talkDescription: 'Exploring emerging trends, fintech integration, and career opportunities in modern investment banking. Learn about the evolving landscape of financial services.',
      expertise: ['Investment Banking', 'M&A', 'Capital Markets', 'Financial Strategy'],
      achievements: [
        'Led $2B+ in IPO transactions',
        'Featured in Forbes India Finance Leaders',
        'Guest faculty at IIM Bombay',
        'Winner of Investment Banker of the Year 2023'
      ],
      featured: true,
      talkDate: '2025-02-15',
      talkTime: '11:00 AM',
      venue: 'Main Auditorium'
    },
    {
      id: '2',
      name: 'Priya Sharma',
      designation: 'Chief Risk Officer',
      company: 'HDFC Bank',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in risk management and regulatory compliance with extensive experience in banking operations and financial risk assessment. Pioneer in digital banking risk frameworks.',
      talkTitle: 'Risk Management in the Digital Age',
      talkDescription: 'Understanding modern risk frameworks and the impact of digital transformation on financial risk. Insights into regulatory compliance and operational excellence.',
      expertise: ['Risk Management', 'Regulatory Compliance', 'Digital Banking', 'Operations'],
      achievements: [
        'Implemented risk frameworks for digital banking',
        'Winner of Risk Manager of the Year 2023',
        'Published researcher on financial risk',
        'Board member of Risk Management Association'
      ],
      featured: true,
      talkDate: '2025-02-15',
      talkTime: '2:30 PM',
      venue: 'Conference Hall A'
    },
    {
      id: '3',
      name: 'Arjun Mehta',
      designation: 'Founder & CEO',
      company: 'FinTech Innovations',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Serial entrepreneur and fintech pioneer who has built multiple successful financial technology companies. Expert in digital payments, blockchain, and financial inclusion.',
      talkTitle: 'Fintech Revolution: Opportunities for Young Entrepreneurs',
      talkDescription: 'Insights into building fintech startups and identifying market opportunities in financial technology. Learn about the startup ecosystem and funding landscape.',
      expertise: ['Fintech', 'Entrepreneurship', 'Digital Payments', 'Blockchain'],
      achievements: [
        'Built 3 successful fintech startups',
        'Raised $50M+ in venture funding',
        'Forbes 30 Under 30 recipient',
        'Advisor to 20+ fintech startups'
      ],
      featured: false,
      talkDate: '2025-02-16',
      talkTime: '10:00 AM',
      venue: 'Innovation Lab'
    },
    {
      id: '4',
      name: 'Kavita Patel',
      designation: 'Senior Vice President',
      company: 'Blackstone India',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Private equity specialist with deep expertise in alternative investments and portfolio management. Leader in ESG investing and sustainable finance initiatives.',
      talkTitle: 'Alternative Investments and Portfolio Diversification',
      talkDescription: 'Exploring private equity, real estate, and other alternative investment strategies. Understanding portfolio construction and risk-return optimization.',
      expertise: ['Private Equity', 'Alternative Investments', 'Portfolio Management', 'ESG Investing'],
      achievements: [
        'Managed $5B+ in alternative investments',
        'Led 50+ private equity transactions',
        'Guest speaker at global investment conferences',
        'Champion of ESG investing initiatives'
      ],
      featured: false,
      talkDate: '2025-02-16',
      talkTime: '3:00 PM',
      venue: 'Seminar Room B'
    },
    {
      id: '5',
      name: 'Dr. Suresh Kumar',
      designation: 'Chief Technology Officer',
      company: 'Paytm',
      image: 'https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Technology leader driving digital transformation in financial services. Expert in AI, machine learning, and blockchain applications in fintech.',
      talkTitle: 'AI and Machine Learning in Financial Services',
      talkDescription: 'How artificial intelligence is revolutionizing banking, payments, and financial decision-making. Practical applications and future possibilities.',
      expertise: ['Artificial Intelligence', 'Machine Learning', 'Blockchain', 'Digital Transformation'],
      achievements: [
        'Led digital transformation at 3 major fintech companies',
        'Published 25+ research papers on AI in finance',
        'Patent holder for ML algorithms in payments',
        'Keynote speaker at international tech conferences'
      ],
      featured: false,
      talkDate: '2025-02-17',
      talkTime: '11:30 AM',
      venue: 'Tech Hub'
    },
    {
      id: '6',
      name: 'Meera Nair',
      designation: 'Head of Sustainable Finance',
      company: 'Yes Bank',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Pioneer in sustainable finance and green banking initiatives. Leading expert in ESG frameworks and climate finance solutions.',
      talkTitle: 'Sustainable Finance and Green Banking',
      talkDescription: 'The future of banking lies in sustainability. Learn about green bonds, ESG investing, and how finance can drive positive environmental impact.',
      expertise: ['Sustainable Finance', 'ESG Investing', 'Green Banking', 'Climate Finance'],
      achievements: [
        'Launched India\'s first green banking initiative',
        'Raised $1B+ in green bonds',
        'UN Sustainable Finance Advisory Board member',
        'Winner of Sustainable Finance Leader Award 2024'
      ],
      featured: false,
      talkDate: '2025-02-17',
      talkTime: '2:00 PM',
      venue: 'Green Finance Center'
    }
  ];

  const filteredSpeakers = selectedCategory === 'All' 
    ? speakers 
    : selectedCategory === 'Featured'
    ? speakers.filter(speaker => speaker.featured)
    : speakers.filter(speaker => 
        speaker.expertise.some(skill => 
          skill.toLowerCase().includes(selectedCategory.toLowerCase())
        )
      );

  const featuredSpeakers = speakers.filter(speaker => speaker.featured);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1A0A2E] via-[#1A0A2E] to-[#A020F0]">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#E0D9EB] mb-6">
              Industry <span className="text-[#A020F0]">Speakers</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#E0D9EB] max-w-3xl mx-auto">
              Learn from the brightest minds in finance, technology, and entrepreneurship
            </p>
          </motion.div>
        </div>
      </section>

      {/* Speaker Stats */}
      <section className="py-12 bg-[#1A0A2E]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center glass p-6 rounded-xl"
            >
              <Users className="w-8 h-8 text-[#A020F0] mx-auto mb-4" />
              <div className="text-3xl font-bold text-[#E0D9EB] mb-2">15+</div>
              <div className="text-[#E0D9EB]">Expert Speakers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center glass p-6 rounded-xl"
            >
              <Building className="w-8 h-8 text-[#A020F0] mx-auto mb-4" />
              <div className="text-3xl font-bold text-[#E0D9EB] mb-2">10+</div>
              <div className="text-[#E0D9EB]">Top Companies</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center glass p-6 rounded-xl"
            >
              <Calendar className="w-8 h-8 text-[#A020F0] mx-auto mb-4" />
              <div className="text-3xl font-bold text-[#E0D9EB] mb-2">12</div>
              <div className="text-[#E0D9EB]">Sessions</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center glass p-6 rounded-xl"
            >
              <Clock className="w-8 h-8 text-[#A020F0] mx-auto mb-4" />
              <div className="text-3xl font-bold text-[#E0D9EB] mb-2">20+</div>
              <div className="text-[#E0D9EB]">Hours of Learning</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-16 bg-[#1A0A2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E0D9EB] mb-4">
              Keynote <span className="text-[#A020F0]">Speakers</span>
            </h2>
            <p className="text-lg text-[#E0D9EB]">Industry leaders sharing their expertise and insights</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredSpeakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-20 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedSpeaker(speaker)}
              >
                <div className="relative">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-[#A020F0] text-white px-3 py-1 rounded-full text-sm font-bold">
                    KEYNOTE
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-[#E0D9EB] mb-1">{speaker.name}</h3>
                    <p className="text-[#A020F0] font-semibold">{speaker.designation}</p>
                    <p className="text-[#E0D9EB] text-sm">{speaker.company}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-[#E0D9EB] mb-2">{speaker.talkTitle}</h4>
                  <p className="text-[#E0D9EB] text-sm mb-4">{speaker.talkDescription}</p>
                  <div className="flex items-center justify-between text-sm text-[#E0D9EB] mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{speaker.talkDate && new Date(speaker.talkDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>{speaker.talkTime}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {speaker.expertise.slice(0, 3).map((skill) => (
                      <span key={skill} className="bg-[#A020F0] text-white px-3 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Speakers */}
      <section className="py-16 bg-[#1A0A2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E0D9EB] mb-4">
              All <span className="text-[#A020F0]">Speakers</span>
            </h2>
            <p className="text-lg text-[#E0D9EB]">Complete lineup of industry experts and thought leaders</p>
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

          {/* Speakers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpeakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-20 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedSpeaker(speaker)}
              >
                <div className="relative">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  {speaker.featured && (
                    <div className="absolute top-3 right-3 bg-[#A020F0] text-white px-2 py-1 rounded-full text-xs font-bold">
                      KEYNOTE
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg font-bold text-[#E0D9EB] mb-1">{speaker.name}</h3>
                    <p className="text-[#A020F0] font-semibold text-sm">{speaker.designation}</p>
                    <p className="text-[#E0D9EB] text-xs">{speaker.company}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-base font-semibold text-[#E0D9EB] mb-2">{speaker.talkTitle}</h4>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {speaker.expertise.slice(0, 2).map((skill) => (
                      <span key={skill} className="bg-[#A020F0] text-white px-2 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                  {speaker.talkDate && (
                    <div className="flex items-center justify-between text-xs text-[#E0D9EB]">
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{new Date(speaker.talkDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={12} />
                        <span>{speaker.talkTime}</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Details Modal */}
      {selectedSpeaker && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <img
                src={selectedSpeaker.image}
                alt={selectedSpeaker.name}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-t-xl"></div>
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-4 right-4 text-[#E0D9EB] hover:text-[#A020F0] transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-[#E0D9EB] mb-2">{selectedSpeaker.name}</h2>
                  <p className="text-[#A020F0] font-semibold text-lg">{selectedSpeaker.designation}</p>
                  <p className="text-[#E0D9EB]">{selectedSpeaker.company}</p>
                </div>
                {selectedSpeaker.featured && (
                  <div className="bg-[#A020F0] text-white px-4 py-2 rounded-full font-bold">
                    KEYNOTE SPEAKER
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[#E0D9EB] mb-4">About</h3>
                  <p className="text-[#E0D9EB] mb-6 leading-relaxed">{selectedSpeaker.bio}</p>
                  
                  <h3 className="text-xl font-bold text-[#E0D9EB] mb-4">Expertise</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedSpeaker.expertise.map((skill) => (
                      <span key={skill} className="bg-[#A020F0] text-white px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#E0D9EB] mb-4">Talk Details</h3>
                  <h4 className="text-lg font-semibold text-[#A020F0] mb-2">{selectedSpeaker.talkTitle}</h4>
                  <p className="text-[#E0D9EB] mb-6">{selectedSpeaker.talkDescription}</p>
                  
                  {selectedSpeaker.talkDate && (
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-[#A020F0]" />
                        <span className="text-[#E0D9EB]">{new Date(selectedSpeaker.talkDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-[#A020F0]" />
                        <span className="text-[#E0D9EB]">{selectedSpeaker.talkTime}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-[#A020F0]" />
                        <span className="text-[#E0D9EB]">{selectedSpeaker.venue}</span>
                      </div>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-[#E0D9EB] mb-4">Key Achievements</h3>
                  <ul className="space-y-2">
                    {selectedSpeaker.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Star className="w-4 h-4 text-[#A020F0] mt-0.5 flex-shrink-0" />
                        <span className="text-[#E0D9EB] text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Become a Speaker CTA */}
      <section className="py-16 bg-[#1A0A2E]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E0D9EB]">
              Want to <span className="text-[#A020F0]">Speak</span> at Finanza?
            </h2>
            <p className="text-lg text-[#E0D9EB] max-w-2xl mx-auto">
              Share your expertise with India's brightest finance minds. Join our distinguished panel of speakers and inspire the next generation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-gradient-to-r from-[#A020F0] to-[#C7A2ED] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-[#C7A2ED] hover:to-[#A020F0] transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2">
                <Users size={20} />
                <span>Apply to Speak</span>
              </button>
              <button className="glass text-[#E0D9EB] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:bg-opacity-20 transition-all duration-200 border border-[#E0D9EB]/20 flex items-center space-x-2">
                <Mail size={20} />
                <span>Contact Us</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};