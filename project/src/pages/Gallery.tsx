import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Calendar,
  Camera,
  Video,
  Download
} from 'lucide-react';

interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  title: string;
  year: string;
  category: string;
  description?: string;
}

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ['All', '2024', '2023', '2022', 'Events', 'Speakers', 'Moments'];

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      type: 'image',
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Opening Ceremony 2024',
      year: '2024',
      category: 'Events',
      description: 'Grand opening of Finanza 2024 with 500+ participants'
    },
    {
      id: '2',
      type: 'video',
      src: 'https://player.vimeo.com/video/example',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Finanza 2024 Aftermovie',
      year: '2024',
      category: 'Events',
      description: 'Official aftermovie showcasing the best moments'
    },
    {
      id: '3',
      type: 'image',
      src: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Stock Market Simulation',
      year: '2024',
      category: 'Events',
      description: 'Intense trading competition with real market data'
    },
    {
      id: '4',
      type: 'image',
      src: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Industry Speaker Session',
      year: '2024',
      category: 'Speakers',
      description: 'Guest lecture by Goldman Sachs Managing Director'
    },
    {
      id: '5',
      type: 'image',
      src: 'https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Business Case Study Finals',
      year: '2023',
      category: 'Events',
      description: 'Top teams presenting solutions to real business challenges'
    },
    {
      id: '6',
      type: 'image',
      src: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Award Ceremony',
      year: '2023',
      category: 'Moments',
      description: 'Celebrating winners and outstanding performances'
    },
    {
      id: '7',
      type: 'image',
      src: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Team Networking Session',
      year: '2023',
      category: 'Moments',
      description: 'Participants connecting and building professional networks'
    },
    {
      id: '8',
      type: 'image',
      src: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Quiz Championship',
      year: '2022',
      category: 'Events',
      description: 'Finance knowledge battle between top colleges'
    }
  ];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => 
        item.year === selectedCategory || item.category === selectedCategory
      );

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const currentItem = filteredItems[currentIndex];

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
              <span className="text-[#A020F0]">Gallery</span> & Memories
            </h1>
            <p className="text-xl md:text-2xl text-[#E0D9EB] max-w-3xl mx-auto">
              Relive the excitement, innovation, and unforgettable moments from Finanza's journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-12 bg-[#1A0A2E]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center glass p-6 rounded-xl"
            >
              <Camera className="w-8 h-8 text-[#A020F0] mx-auto mb-4" />
              <div className="text-3xl font-bold text-[#E0D9EB] mb-2">500+</div>
              <div className="text-[#E0D9EB]">Photos</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center glass p-6 rounded-xl"
            >
              <Video className="w-8 h-8 text-[#A020F0] mx-auto mb-4" />
              <div className="text-3xl font-bold text-[#E0D9EB] mb-2">15+</div>
              <div className="text-[#E0D9EB]">Videos</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center glass p-6 rounded-xl"
            >
              <Calendar className="w-8 h-8 text-[#A020F0] mx-auto mb-4" />
              <div className="text-3xl font-bold text-[#E0D9EB] mb-2">3</div>
              <div className="text-[#E0D9EB]">Years</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center glass p-6 rounded-xl"
            >
              <Download className="w-8 h-8 text-[#A020F0] mx-auto mb-4" />
              <div className="text-3xl font-bold text-[#E0D9EB] mb-2">1M+</div>
              <div className="text-[#E0D9EB]">Downloads</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-[#1A0A2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E0D9EB] mb-4">
              Photo & Video <span className="text-[#A020F0]">Collection</span>
            </h2>
            <p className="text-lg text-[#E0D9EB]">Browse through our carefully curated memories</p>
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

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Video Play Icon */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center group-hover:bg-opacity-70 transition-all duration-300">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-[#E0D9EB] font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-[#E0D9EB] text-xs">{item.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 text-[#E0D9EB] hover:text-[#A020F0] transition-colors duration-200"
              >
                <X size={32} />
              </button>

              {/* Navigation Buttons */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-[#E0D9EB] hover:text-[#A020F0] transition-colors duration-200"
                  >
                    <ChevronLeft size={48} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-[#E0D9EB] hover:text-[#A020F0] transition-colors duration-200"
                  >
                    <ChevronRight size={48} />
                  </button>
                </>
              )}

              {/* Content */}
              <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                {currentItem?.type === 'image' ? (
                  <motion.img
                    key={currentItem.id}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    src={currentItem.src}
                    alt={currentItem.title}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <motion.div
                    key={currentItem?.id}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="w-full max-w-4xl aspect-video"
                  >
                    <iframe
                      src={currentItem?.src}
                      className="w-full h-full rounded-lg"
                      allowFullScreen
                      title={currentItem?.title}
                    />
                  </motion.div>
                )}
              </div>

              {/* Info Panel */}
              <div className="absolute bottom-4 left-4 right-4 glass rounded-lg p-4">
                <h3 className="text-[#E0D9EB] font-bold text-lg mb-2">{currentItem?.title}</h3>
                <p className="text-[#E0D9EB] text-sm">{currentItem?.description}</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center space-x-4 text-sm text-[#E0D9EB]">
                    <span>{currentItem?.year}</span>
                    <span>•</span>
                    <span>{currentItem?.category}</span>
                  </div>
                  <div className="text-sm text-[#E0D9EB]">
                    {currentIndex + 1} of {filteredItems.length}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* YouTube Section */}
      <section className="py-16 bg-[#1A0A2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E0D9EB] mb-4">
              Official <span className="text-[#A020F0]">Aftermovies</span>
            </h2>
            <p className="text-lg text-[#E0D9EB]">Experience the energy and excitement of past editions</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass rounded-xl overflow-hidden"
            >
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Finanza 2024 Official Aftermovie"
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#E0D9EB] mb-2">Finanza 2024 Aftermovie</h3>
                <p className="text-[#E0D9EB]">Relive the most spectacular moments from our biggest edition yet</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass rounded-xl overflow-hidden"
            >
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Finanza 2023 Official Aftermovie"
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#E0D9EB] mb-2">Finanza 2023 Aftermovie</h3>
                <p className="text-[#E0D9EB]">The journey that established Finanza as a premier finance festival</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-[#1A0A2E]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E0D9EB]">
              Want These <span className="text-[#A020F0]">Memories?</span>
            </h2>
            <p className="text-lg text-[#E0D9EB] max-w-2xl mx-auto">
              Download high-resolution photos and videos from all our events. Share your Finanza experience with the world.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-gradient-to-r from-[#A020F0] to-[#C7A2ED] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-[#C7A2ED] hover:to-[#A020F0] transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2">
                <Download size={20} />
                <span>Download Photos</span>
              </button>
              <button className="glass text-[#E0D9EB] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:bg-opacity-20 transition-all duration-200 border border-[#E0D9EB]/20 flex items-center space-x-2">
                <Video size={20} />
                <span>Download Videos</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};