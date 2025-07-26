import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  ExternalLink,
  Award,
  Users,
  TrendingUp,
  Mail,
  Download,
  Star,
  Crown,
  Shield,
  Zap
} from 'lucide-react';

interface Sponsor {
  id: string;
  name: string;
  tier: 'Title' | 'Platinum' | 'Gold' | 'Silver' | 'Bronze';
  logo: string;
  website: string;
  description: string;
  industry: string;
  partnership: string;
  benefits: string[];
}

export const Sponsors: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState('All');

  const tiers = ['All', 'Title', 'Platinum', 'Gold', 'Silver', 'Bronze'];

  const sponsors: Sponsor[] = [
    {
      id: '1',
      name: 'HDFC Bank',
      tier: 'Title',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=200',
      website: 'https://hdfcbank.com',
      description: 'Leading private sector bank supporting financial education and innovation across India.',
      industry: 'Banking & Financial Services',
      partnership: 'Title Sponsor',
      benefits: [
        'Brand visibility across all event materials',
        'Dedicated networking sessions',
        'Campus recruitment opportunities',
        'Speaking slots in main events'
      ]
    },
    {
      id: '2',
      name: 'Goldman Sachs',
      tier: 'Title',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=200',
      website: 'https://goldmansachs.com',
      description: 'Global investment banking and financial services company driving innovation in finance.',
      industry: 'Investment Banking',
      partnership: 'Title Sponsor',
      benefits: [
        'Premium brand placement',
        'Executive speaking opportunities',
        'Talent acquisition programs',
        'Thought leadership sessions'
      ]
    },
    {
      id: '3',
      name: 'JPMorgan Chase',
      tier: 'Platinum',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=200',
      website: 'https://jpmorganchase.com',
      description: 'Leading global financial services firm with strong presence in India and commitment to education.',
      industry: 'Financial Services',
      partnership: 'Platinum Partner',
      benefits: [
        'High-visibility brand exposure',
        'Workshop hosting opportunities',
        'Student mentorship programs',
        'Industry insights sessions'
      ]
    },
    {
      id: '4',
      name: 'Deloitte',
      tier: 'Platinum',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=200',
      website: 'https://deloitte.com',
      description: 'Global professional services network specializing in audit, consulting, and financial advisory.',
      industry: 'Professional Services',
      partnership: 'Platinum Partner',
      benefits: [
        'Strategic brand positioning',
        'Case study competitions',
        'Professional development workshops',
        'Career guidance sessions'
      ]
    },
    {
      id: '5',
      name: 'KPMG',
      tier: 'Gold',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=200',
      website: 'https://kpmg.com',
      description: 'One of the Big Four accounting organizations providing audit and advisory services globally.',
      industry: 'Audit & Advisory',
      partnership: 'Gold Sponsor',
      benefits: [
        'Brand visibility in key events',
        'Networking opportunities',
        'Student engagement programs',
        'Industry expertise sharing'
      ]
    },
    {
      id: '6',
      name: 'EY (Ernst & Young)',
      tier: 'Gold',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=200',
      website: 'https://ey.com',
      description: 'Multinational professional services network supporting business transformation and growth.',
      industry: 'Professional Services',
      partnership: 'Gold Sponsor',
      benefits: [
        'Event branding opportunities',
        'Talent scouting initiatives',
        'Knowledge sharing sessions',
        'Innovation showcases'
      ]
    },
    {
      id: '7',
      name: 'Axis Bank',
      tier: 'Silver',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=200',
      website: 'https://axisbank.com',
      description: 'Leading private sector bank focused on digital innovation and customer-centric solutions.',
      industry: 'Banking',
      partnership: 'Silver Partner',
      benefits: [
        'Digital platform visibility',
        'Student interaction sessions',
        'Innovation demonstrations',
        'Career opportunity presentations'
      ]
    },
    {
      id: '8',
      name: 'ICICI Bank',
      tier: 'Silver',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=200',
      website: 'https://icicibank.com',
      description: 'Major Indian multinational bank and financial services company with global presence.',
      industry: 'Banking & Financial Services',
      partnership: 'Silver Partner',
      benefits: [
        'Brand exposure in events',
        'Student engagement activities',
        'Financial literacy programs',
        'Internship opportunities'
      ]
    },
    {
      id: '9',
      name: 'Paytm',
      tier: 'Bronze',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=200',
      website: 'https://paytm.com',
      description: 'Leading fintech company revolutionizing digital payments and financial services in India.',
      industry: 'Fintech',
      partnership: 'Bronze Supporter',
      benefits: [
        'Digital innovation showcases',
        'Fintech workshops',
        'Startup mentorship',
        'Technology demonstrations'
      ]
    },
    {
      id: '10',
      name: 'Razorpay',
      tier: 'Bronze',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=200',
      website: 'https://razorpay.com',
      description: 'Fast-growing payments solutions company enabling businesses with comprehensive financial services.',
      industry: 'Payments & Fintech',
      partnership: 'Bronze Supporter',
      benefits: [
        'Payment technology demos',
        'Entrepreneurship sessions',
        'Product showcases',
        'Startup ecosystem insights'
      ]
    }
  ];

  const filteredSponsors = selectedTier === 'All' 
    ? sponsors 
    : sponsors.filter(sponsor => sponsor.tier === selectedTier);

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Title':
        return 'from-yellow-500 to-yellow-600';
      case 'Platinum':
        return 'from-gray-300 to-gray-400';
      case 'Gold':
        return 'from-yellow-400 to-yellow-500';
      case 'Silver':
        return 'from-gray-400 to-gray-500';
      case 'Bronze':
        return 'from-orange-400 to-orange-500';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'Title':
        return <Crown className="w-6 h-6" />;
      case 'Platinum':
        return <Star className="w-6 h-6" />;
      case 'Gold':
        return <Award className="w-6 h-6" />;
      case 'Silver':
        return <Shield className="w-6 h-6" />;
      case 'Bronze':
        return <Zap className="w-6 h-6" />;
      default:
        return <Building className="w-6 h-6" />;
    }
  };

  const sponsorshipStats = [
    { icon: Building, value: '25+', label: 'Partner Companies' },
    { icon: Users, value: '500+', label: 'Students Reached' },
    { icon: TrendingUp, value: '₹5L+', label: 'Sponsorship Value' },
    { icon: Award, value: '15+', label: 'Industry Sectors' },
  ];

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
              Our <span className="text-[#A020F0]">Sponsors</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#E0D9EB] max-w-3xl mx-auto">
              Partnering with industry leaders to create exceptional experiences and opportunities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sponsorship Stats */}
      <section className="py-12 bg-[#1A0A2E]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sponsorshipStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center glass p-6 rounded-xl"
              >
                <stat.icon className="w-8 h-8 text-[#A020F0] mx-auto mb-4" />
                <div className="text-3xl font-bold text-[#E0D9EB] mb-2">{stat.value}</div>
                <div className="text-[#E0D9EB]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-[#1A0A2E]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {tiers.map((tier) => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedTier === tier
                    ? 'bg-gradient-to-r from-[#A020F0] to-[#C7A2ED] text-[#E0D9EB]'
                    : 'glass text-[#E0D9EB] hover:bg-white hover:bg-opacity-20'
                }`}
              >
                {tier} {tier !== 'All' && 'Sponsors'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors by Tier */}
      <section className="py-16 bg-[#1A0A2E]">
        <div className="container mx-auto px-4">
          {['Title', 'Platinum', 'Gold', 'Silver', 'Bronze'].map((tier) => {
            const tierSponsors = sponsors.filter(sponsor => sponsor.tier === tier);
            
            if (selectedTier !== 'All' && selectedTier !== tier) return null;
            if (tierSponsors.length === 0) return null;
            
            return (
              <div key={tier} className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-12"
                >
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${getTierColor(tier)} rounded-full flex items-center justify-center`}>
                      {getTierIcon(tier)}
                    </div>
                    <h2 className={`text-3xl md:text-4xl font-bold text-[#E0D9EB]`}>
                      {tier} Sponsors
                    </h2>
                  </div>
                  <p className="text-lg text-[#E0D9EB]">
                    {tier === 'Title' && 'Our premier partners driving the vision of Finanza'}
                    {tier === 'Platinum' && 'Strategic partners supporting our mission'}
                    {tier === 'Gold' && 'Valued partners enhancing student experiences'}
                    {tier === 'Silver' && 'Supporting partners contributing to our success'}
                    {tier === 'Bronze' && 'Community partners fostering innovation'}
                  </p>
                </motion.div>

                <div className={`grid gap-8 ${
                  tier === 'Title' ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' : 
                  tier === 'Platinum' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
                  'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                }`}>
                  {tierSponsors.map((sponsor, index) => (
                    <motion.div
                      key={sponsor.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="glass rounded-xl p-6 hover:bg-white hover:bg-opacity-20 transition-all duration-300 group cursor-pointer"
                      onClick={() => window.open(sponsor.website, '_blank')}
                    >
                      <div className="text-center">
                        <div className="relative mb-6">
                          <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className={`mx-auto object-contain group-hover:scale-105 transition-transform duration-300 ${
                              tier === 'Title' ? 'h-24' : 
                              tier === 'Platinum' ? 'h-20' : 
                              tier === 'Gold' ? 'h-16' :
                              'h-12'
                            }`}
                          />
                          <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r ${getTierColor(tier)} rounded-full flex items-center justify-center`}>
                            {getTierIcon(tier)}
                          </div>
                        </div>
                        
                        <h3 className={`font-bold text-white mb-2 ${
                          tier === 'Title' ? 'text-2xl' : 
                          tier === 'Platinum' ? 'text-xl' : 
                          'text-lg'
                        }`}>
                          {sponsor.name}
                        </h3>
                        
                        <p className="text-[#A020F0] text-sm font-medium mb-3">{sponsor.partnership}</p>
                        <p className="text-[#E0D9EB] text-sm mb-4">{sponsor.description}</p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="text-xs text-[#E0D9EB]">
                            <span className="font-medium">Industry:</span> {sponsor.industry}
                          </div>
                        </div>

                        {tier === 'Title' || tier === 'Platinum' ? (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-[#E0D9EB] mb-2">Partnership Benefits:</h4>
                            <ul className="text-xs text-[#E0D9EB] space-y-1">
                              {sponsor.benefits.slice(0, 3).map((benefit, idx) => (
                                <li key={idx} className="flex items-start space-x-1">
                                  <span className="text-[#A020F0] mt-0.5">•</span>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                        
                        <div className="flex items-center justify-center text-[#A020F0] group-hover:text-[#C7A2ED] transition-colors duration-200">
                          <ExternalLink size={16} />
                          <span className="ml-2 text-sm">Visit Website</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sponsorship Benefits */}
      <section className="py-16 bg-[#1A0A2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E0D9EB] mb-4">
              Why <span className="text-[#A020F0]">Sponsor</span> Finanza?
            </h2>
            <p className="text-lg text-[#E0D9EB] max-w-3xl mx-auto">
              Partner with us to reach India's brightest finance minds and showcase your brand to the next generation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Access to Top Talent',
                description: 'Connect with 500+ bright students from premier colleges across India for recruitment and internships.'
              },
              {
                icon: TrendingUp,
                title: 'Brand Visibility',
                description: 'Gain extensive brand exposure through event materials, digital platforms, and social media reach.'
              },
              {
                icon: Building,
                title: 'Industry Leadership',
                description: 'Position your company as an industry leader and thought pioneer in the finance and business sector.'
              },
              {
                icon: Award,
                title: 'Networking Opportunities',
                description: 'Build valuable connections with other industry leaders, academic institutions, and potential partners.'
              },
              {
                icon: Star,
                title: 'CSR Impact',
                description: 'Support education and skill development while fulfilling corporate social responsibility goals.'
              },
              {
                icon: ExternalLink,
                title: 'Market Insights',
                description: 'Gain insights into emerging trends and fresh perspectives from the next generation of professionals.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass p-6 rounded-xl hover:bg-white hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#A020F0] to-[#C7A2ED] rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#E0D9EB] mb-3">{benefit.title}</h3>
                <p className="text-[#E0D9EB]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Sponsor CTA */}
      <section className="py-16 bg-[#1A0A2E]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E0D9EB]">
              Ready to <span className="text-[#A020F0]">Partner</span> with Us?
            </h2>
            <p className="text-lg text-[#E0D9EB] max-w-2xl mx-auto">
              Join our prestigious list of sponsors and be part of India's premier finance festival. Multiple sponsorship tiers available to suit your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-gradient-to-r from-[#A020F0] to-[#C7A2ED] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-[#C7A2ED] hover:to-[#A020F0] transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2">
                <Building size={20} />
                <span>Become a Sponsor</span>
              </button>
              <button className="glass text-[#E0D9EB] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:bg-opacity-20 transition-all duration-200 border border-[#E0D9EB]/20 flex items-center space-x-2">
                <Download size={20} />
                <span>Download Brochure</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
              <div className="glass p-6 rounded-xl">
                <Mail className="w-8 h-8 text-[#A020F0] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#E0D9EB] mb-2">Email Us</h3>
                <p className="text-[#E0D9EB] text-sm">sponsors@finanza.com</p>
              </div>
              <div className="glass p-6 rounded-xl">
                <Download className="w-8 h-8 text-[#A020F0] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#E0D9EB] mb-2">Sponsorship Kit</h3>
                <p className="text-[#E0D9EB] text-sm">Complete details & packages</p>
              </div>
              <div className="glass p-6 rounded-xl">
                <Users className="w-8 h-8 text-[#A020F0] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#E0D9EB] mb-2">Custom Packages</h3>
                <p className="text-[#E0D9EB] text-sm">Tailored sponsorship solutions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};