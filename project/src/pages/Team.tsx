import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Mail,
  Star,
  Award,
  Crown
} from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
    email?: string;
  };
  isCore: boolean;
}

export const Team: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', 'Core', 'Finance', 'Marketing', 'Operations', 'Tech', 'Creative'];

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Arjun Sharma',
      designation: 'Vice Chairperson',
      department: 'Core',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Leading Finanza with vision and excellence. MBA Finance student passionate about financial markets.',
      social: {
        linkedin: '#',
        instagram: '#',
        email: 'arjun@finanza.com'
      },
      isCore: true
    },
    {
      id: '2',
      name: 'Priya Patel',
      designation: 'Chairperson',
      department: 'Core',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Steering Finanza towards new heights. Expert in financial planning and event management.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'priya@finanza.com'
      },
      isCore: true
    },
    {
      id: '3',
      name: 'Rohit Desai',
      designation: 'Finance Head',
      department: 'Finance',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Managing festival finances and sponsor relations. CA finalist with expertise in financial management.',
      social: {
        linkedin: '#',
        instagram: '#',
        email: 'rohit@finanza.com'
      },
      isCore: false
    },
    {
      id: '4',
      name: 'Sneha Joshi',
      designation: 'Marketing Head',
      department: 'Marketing',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Driving brand awareness and participant engagement. Digital marketing expert with creative flair.',
      social: {
        linkedin: '#',
        instagram: '#',
        twitter: '#',
        email: 'sneha@finanza.com'
      },
      isCore: false
    },
    {
      id: '5',
      name: 'Karan Singh',
      designation: 'Operations Head',
      department: 'Operations',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Ensuring smooth execution of all events. Operations management student with keen eye for detail.',
      social: {
        linkedin: '#',
        email: 'karan@finanza.com'
      },
      isCore: false
    },
    {
      id: '6',
      name: 'Ananya Gupta',
      designation: 'Tech Head',
      department: 'Tech',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Leading digital initiatives and platform development. Computer Science student with fintech interest.',
      social: {
        linkedin: '#',
        instagram: '#',
        email: 'ananya@finanza.com'
      },
      isCore: false
    },
    {
      id: '7',
      name: 'Vikram Reddy',
      designation: 'Creative Head',
      department: 'Creative',
      image: 'https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Crafting visual identity and creative content. Design student with passion for financial storytelling.',
      social: {
        linkedin: '#',
        instagram: '#',
        twitter: '#',
        email: 'vikram@finanza.com'
      },
      isCore: false
    },
    {
      id: '8',
      name: 'Meera Nair',
      designation: 'Events Coordinator',
      department: 'Operations',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Coordinating all event activities and participant experience. Event management specialist.',
      social: {
        linkedin: '#',
        instagram: '#',
        email: 'meera@finanza.com'
      },
      isCore: false
    }
  ];

  const filteredMembers = selectedDepartment === 'All' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === selectedDepartment);

  const coreMembers = teamMembers.filter(member => member.isCore);
  const departmentHeads = teamMembers.filter(member => !member.isCore);

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'instagram':
        return <Instagram size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      case 'email':
        return <Mail size={20} />;
      default:
        return null;
    }
  };

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
              Meet Our <span className="text-[#A020F0]">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#E0D9EB] max-w-3xl mx-auto">
              The passionate minds behind Finanza 2025, dedicated to creating an exceptional experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-16 bg-[#1A0A2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E0D9EB] mb-4">
              <span className="text-[#A020F0]">Core</span> Leadership
            </h2>
            <p className="text-lg text-[#E0D9EB]">The visionaries leading Finanza 2025</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coreMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="glass rounded-xl p-8 text-center hover:bg-white hover:bg-opacity-20 transition-all duration-300">
                  <div className="relative inline-block mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-[#A020F0]"
                    />
                    <div className="absolute -top-2 -right-2">
                      <Crown className="w-8 h-8 text-[#A020F0]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#E0D9EB] mb-2">{member.name}</h3>
                  <p className="text-[#A020F0] font-semibold mb-4">{member.designation}</p>
                  <p className="text-[#E0D9EB] mb-6 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex justify-center space-x-4">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        className="text-[#E0D9EB] hover:text-[#A020F0] transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {getSocialIcon(platform)}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Heads Section */}
      <section className="py-16 bg-[#1A0A2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E0D9EB] mb-4">
              Department <span className="text-[#A020F0]">Heads</span>
            </h2>
            <p className="text-lg text-[#E0D9EB]">Expert leaders driving each aspect of Finanza</p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedDepartment === dept
                    ? 'bg-gradient-to-r from-[#A020F0] to-[#C7A2ED] text-[#E0D9EB]'
                    : 'glass text-[#E0D9EB] hover:bg-white hover:bg-opacity-20'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-20 transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-[#E0D9EB] mb-1">{member.name}</h3>
                    <p className="text-[#A020F0] font-semibold">{member.designation}</p>
                  </div>
                  {member.isCore && (
                    <div className="absolute top-4 right-4">
                      <Star className="w-6 h-6 text-[#A020F0] fill-current" />
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#A020F0] text-[#E0D9EB] px-3 py-1 rounded-full text-sm">
                      {member.department}
                    </span>
                    <div className="flex space-x-2">
                      {Object.entries(member.social).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          className="text-[#E0D9EB] hover:text-[#A020F0] transition-colors duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {getSocialIcon(platform)}
                        </a>
                      ))}
                    </div>
                  </div>
                  <p className="text-[#E0D9EB] text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-[#1A0A2E]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E0D9EB]">
              Want to Join Our <span className="text-[#A020F0]">Team?</span>
            </h2>
            <p className="text-lg text-[#E0D9EB] max-w-2xl mx-auto">
              Be part of the team that creates India's most prestigious finance festival. We're always looking for passionate individuals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-gradient-to-r from-[#A020F0] to-[#C7A2ED] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-[#C7A2ED] hover:to-[#A020F0] transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2">
                <Users size={20} />
                <span>Join Our Team</span>
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