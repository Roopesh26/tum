import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare,
  Clock,
  Instagram,
  Linkedin,
  Twitter,
  ExternalLink,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'finanza@mithibai.ac.in',
      link: 'mailto:finanza@mithibai.ac.in',
      description: 'Get in touch for general inquiries'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 98765 43210',
      link: 'tel:+919876543210',
      description: 'Available during business hours'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      details: '+91 98765 43210',
      link: 'https://wa.me/919876543210',
      description: 'Quick support and updates'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Mithibai College, Vile Parle (W)',
      link: 'https://maps.google.com',
      description: 'Mumbai - 400056, Maharashtra'
    }
  ];

  const teamContacts = [
    {
      name: 'Arjun Sharma',
      role: 'Vice Chairperson',
      email: 'arjun@finanza.com',
      phone: '+91 98765 43211'
    },
    {
      name: 'Priya Patel',
      role: 'Chairperson',
      email: 'priya@finanza.com',
      phone: '+91 98765 43212'
    },
    {
      name: 'Rohit Desai',
      role: 'Finance Head',
      email: 'rohit@finanza.com',
      phone: '+91 98765 43213'
    }
  ];

  const subjectOptions = [
    'General Inquiry',
    'Event Registration',
    'Sponsorship Opportunities',
    'Speaker Invitation',
    'Technical Support',
    'Media Partnership',
    'Other'
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
              <span className="text-[#A020F0]">Contact</span> Us
            </h1>
            <p className="text-xl md:text-2xl text-[#E0D9EB] max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Get in touch with our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-[#1A0A2E]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass p-6 rounded-xl hover:bg-white hover:bg-opacity-20 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#A020F0] to-[#C7A2ED] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#E0D9EB] mb-2">{info.title}</h3>
                  <p className="text-[#A020F0] font-medium mb-2">{info.details}</p>
                  <p className="text-[#E0D9EB] text-sm">{info.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#1A0A2E]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass rounded-xl p-8"
            >
              <h2 className="text-3xl font-bold text-[#E0D9EB] mb-6">Send us a Message</h2>
              
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500 bg-opacity-20 border border-green-500 rounded-lg p-4 mb-6 flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500 bg-opacity-20 border border-red-500 rounded-lg p-4 mb-6 flex items-center space-x-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <span className="text-red-400">Failed to send message. Please try again.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#E0D9EB] font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[#1A0A2E]/50 border-[#E0D9EB]/20 text-[#E0D9EB] placeholder-[#E0D9EB]/50 focus:border-[#A020F0] transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#E0D9EB] font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[#1A0A2E]/50 border-[#E0D9EB]/20 text-[#E0D9EB] placeholder-[#E0D9EB]/50 focus:border-[#A020F0] transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#E0D9EB] font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#1A0A2E]/50 border-[#E0D9EB]/20 text-[#E0D9EB] placeholder-[#E0D9EB]/50 focus:border-[#A020F0] transition-colors duration-200"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-[#E0D9EB] font-medium mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[#1A0A2E]/50 border-[#E0D9EB]/20 text-[#E0D9EB] focus:border-[#A020F0] transition-colors duration-200"
                    >
                      <option value="">Select a subject</option>
                      {subjectOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#E0D9EB] font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-[#1A0A2E]/50 border-[#E0D9EB]/20 text-[#E0D9EB] placeholder-[#E0D9EB]/50 focus:border-[#A020F0] transition-colors duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#A020F0] to-[#C7A2ED] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-[#C7A2ED] hover:to-[#A020F0] transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Details & Map */}
            <div className="space-y-8">
              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="glass rounded-xl p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-6 h-6 text-[#A020F0]" />
                  <h3 className="text-2xl font-bold text-[#E0D9EB]">Office Hours</h3>
                </div>
                <div className="space-y-3 text-[#E0D9EB]">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-[#A020F0]">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-[#A020F0]">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-[#E0D9EB]/50">Closed</span>
                  </div>
                </div>
              </motion.div>

              {/* Team Contacts */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="glass rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-[#E0D9EB] mb-6">Key Contacts</h3>
                <div className="space-y-4">
                  {teamContacts.map((contact, index) => (
                    <div key={index} className="border-b border-[#E0D9EB]/10 pb-4 last:border-b-0 last:pb-0">
                      <h4 className="text-[#E0D9EB] font-semibold">{contact.name}</h4>
                      <p className="text-[#A020F0] text-sm mb-2">{contact.role}</p>
                      <div className="flex flex-col space-y-1 text-sm text-[#E0D9EB]">
                        <a href={`mailto:${contact.email}`} className="hover:text-[#A020F0] transition-colors duration-200">
                          {contact.email}
                        </a>
                        <a href={`tel:${contact.phone}`} className="hover:text-[#A020F0] transition-colors duration-200">
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="glass rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-[#E0D9EB] mb-6">Follow Us</h3>
                <div className="grid grid-cols-3 gap-4">
                  <a
                    href="#"
                    className="flex flex-col items-center p-4 rounded-lg bg-[#1A0A2E]/50 hover:bg-opacity-70 transition-all duration-200 group"
                  >
                    <Instagram className="w-6 h-6 text-pink-500 mb-2 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-[#E0D9EB] text-sm">Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center p-4 rounded-lg bg-[#1A0A2E]/50 hover:bg-opacity-70 transition-all duration-200 group"
                  >
                    <Linkedin className="w-6 h-6 text-blue-500 mb-2 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-[#E0D9EB] text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center p-4 rounded-lg bg-[#1A0A2E]/50 hover:bg-opacity-70 transition-all duration-200 group"
                  >
                    <Twitter className="w-6 h-6 text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-[#E0D9EB] text-sm">Twitter</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#1A0A2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E0D9EB] mb-4">
              Find <span className="text-[#A020F0]">Us</span>
            </h2>
            <p className="text-lg text-[#E0D9EB]">Visit us at Mithibai College, Vile Parle</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-xl overflow-hidden"
          >
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4062516448796!2d72.8404285!3d19.1078088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b88ae468fd%3A0x2b6b58bd4b04a48d!2sMithibai%20College!5e0!3m2!1sen!2sin!4v1642000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mithibai College Location"
              />
            </div>
            <div className="p-6 bg-gradient-to-r from-[#1A0A2E] to-[#A020F0]">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#E0D9EB] mb-2">Mithibai College</h3>
                  <p className="text-[#E0D9EB]">Vile Parle (West), Mumbai - 400056, Maharashtra, India</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-[#E0D9EB]/20 hover:bg-opacity-30 text-[#E0D9EB] px-4 py-2 rounded-lg transition-all duration-200"
                >
                  <ExternalLink size={16} />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#1A0A2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E0D9EB] mb-4">
              Quick <span className="text-[#A020F0]">Answers</span>
            </h2>
            <p className="text-lg text-[#E0D9EB]">Frequently asked questions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-[#E0D9EB] mb-3">How do I register for events?</h3>
              <p className="text-[#E0D9EB]">Registration opens on our website. Create an account and select your preferred events.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="glass p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-[#E0D9EB] mb-3">What is the registration fee?</h3>
              <p className="text-[#E0D9EB]">Fees vary by event. Individual events range from ₹150-₹500. Check the Events page for details.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-[#E0D9EB] mb-3">Can I participate from other colleges?</h3>
              <p className="text-[#E0D9EB]">Yes! Finanza welcomes participants from all colleges across India. Register with your college details.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-[#E0D9EB] mb-3">How do I become a sponsor?</h3>
              <p className="text-[#E0D9EB]">Contact our sponsorship team at sponsor@finanza.com or download our sponsorship brochure.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};