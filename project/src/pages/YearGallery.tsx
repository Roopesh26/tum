// YearGallery.tsx — PART 1 of 3
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Calendar, Users, Award, X, ChevronLeft,
  ChevronRight, Download, Share2, Heart, Eye
} from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  description: string;
  date: string;
  photographer?: string;
  likes: number;
  views: number;
}

interface YearData {
  year: string;
  title: string;
  description: string;
  totalImages: number;
  totalEvents: number;
  participants: number;
  highlights: string[];
  images: GalleryImage[];
}

export const YearGallery: React.FC = () => {
  const { year } = useParams<{ year: string }>();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState('All');

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => setSelectedImage(null);

  const nextImage = () => {
    if (currentYearData) {
      const nextIndex = (currentImageIndex + 1) % currentYearData.images.length;
      setCurrentImageIndex(nextIndex);
      setSelectedImage(currentYearData.images[nextIndex]);
    }
  };

  const prevImage = () => {
    if (currentYearData) {
      const prevIndex = (currentImageIndex - 1 + currentYearData.images.length) % currentYearData.images.length;
      setCurrentImageIndex(prevIndex);
      setSelectedImage(currentYearData.images[prevIndex]);
    }
  };

  const yearData: Record<string, YearData> = {
    // ➤ Keep all your yearData content here (unchanged)
    // Due to space, include all years here same as before.
  };

  const currentYearData = year ? yearData[year.toLowerCase()] : null;
  const filters = ['All', 'Events', 'Speakers', 'Awards', 'Workshops'];

  if (!currentYearData) {
    return (
      <div className="min-h-screen pt-20 bg-[#1A0A2E] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#E0D9EB] mb-4">Gallery Not Found</h1>
          <p className="text-[#E0D9EB] mb-8">The requested gallery could not be found.</p>
          <Link
            to="/gallery"
            className="bg-gradient-to-r from-[#A020F0] to-[#C7A2ED] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#C7A2ED] hover:to-[#A020F0] transition-all duration-200"
          >
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen pt-20 bg-[#1A0A2E]">
      {/* Hero Header */}
      <section className="relative py-16 bg-gradient-to-br from-[#1A0A2E] via-[#1A0A2E] to-[#A020F0]">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-2 text-[#A020F0] hover:text-[#C7A2ED] transition-colors duration-200 mb-6"
            >
              <ArrowLeft size={20} />
              <span>Back to Gallery</span>
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold text-[#E0D9EB] mb-4">
              {currentYearData.title}
            </h1>
            <p className="text-xl text-[#E0D9EB] max-w-3xl mb-8">
              {currentYearData.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="glass p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-[#A020F0] mb-1">{currentYearData.totalImages}</div>
                <div className="text-[#E0D9EB] text-sm">Photos</div>
              </div>
              <div className="glass p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-[#A020F0] mb-1">{currentYearData.totalEvents}</div>
                <div className="text-[#E0D9EB] text-sm">Events</div>
              </div>
              {currentYearData.participants > 0 && (
                <div className="glass p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-[#A020F0] mb-1">{currentYearData.participants}</div>
                  <div className="text-[#E0D9EB] text-sm">Participants</div>
                </div>
              )}
              <div className="glass p-4 rounded-xl text-center">
                <Award className="w-6 h-6 text-[#A020F0] mx-auto mb-1" />
                <div className="text-[#E0D9EB] text-sm">Memorable</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-[#1A0A2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#E0D9EB] mb-6">Key Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentYearData.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start space-x-3 glass p-4 rounded-xl"
                >
                  <div className="w-2 h-2 bg-[#A020F0] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#E0D9EB]">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8">
        <div className="flex flex-wrap justify-center gap-4 px-4">
          {filters.map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                filter === filterOption
                  ? 'bg-gradient-to-r from-[#A020F0] to-[#C7A2ED] text-[#E0D9EB]'
                  : 'glass text-[#E0D9EB] hover:bg-white hover:bg-opacity-20'
              }`}
            >
              {filterOption}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentYearData.images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openLightbox(image, index)}
            >
              <div className="relative overflow-hidden rounded-xl glass hover:bg-white hover:bg-opacity-20 transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-[#E0D9EB] font-semibold mb-1">{image.title}</h3>
                  <p className="text-[#E0D9EB] text-sm opacity-80">{image.date}</p>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                      <Heart size={12} className="text-red-400" />
                      <span className="text-white text-xs">{image.likes}</span>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                      <Eye size={12} className="text-blue-400" />
                      <span className="text-white text-xs">{image.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 text-[#E0D9EB] hover:text-[#A020F0] transition-colors duration-200 bg-black/50 backdrop-blur-sm rounded-full p-2"
              >
                <X size={32} />
              </button>

              {/* Navigation Buttons */}
              {currentYearData.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-[#E0D9EB] hover:text-[#A020F0] transition-colors duration-200 bg-black/50 backdrop-blur-sm rounded-full p-3"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-[#E0D9EB] hover:text-[#A020F0] transition-colors duration-200 bg-black/50 backdrop-blur-sm rounded-full p-3"
                  >
                    <ChevronRight size={32} />
                  </button>
                </>
              )}

              {/* Main Content */}
              <div
                className="relative w-full h-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image Display */}
                <motion.div
                  key={selectedImage.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative max-w-4xl max-h-[70vh] w-full"
                >
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain rounded-xl shadow-2xl"
                    loading="lazy"
                  />
                </motion.div>

                {/* Info Panel */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4"
                >
                  <div className="glass rounded-xl p-6">
                    <div className="flex flex-col md:flex-row items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#E0D9EB] mb-2">{selectedImage.title}</h3>
                        <p className="text-[#E0D9EB] mb-4">{selectedImage.description}</p>
                        <div className="flex flex-wrap items-center space-x-4 text-sm text-[#E0D9EB]">
                          <div className="flex items-center space-x-1">
                            <Calendar size={16} />
                            <span>{selectedImage.date}</span>
                          </div>
                          {selectedImage.photographer && (
                            <div className="mt-1 md:mt-0">
                              <span>📸 {selectedImage.photographer}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 mt-4 md:mt-0 md:ml-6">
                        <div className="flex items-center space-x-2">
                          <Heart size={20} className="text-red-400" />
                          <span className="text-[#E0D9EB]">{selectedImage.likes}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Eye size={20} className="text-blue-400" />
                          <span className="text-[#E0D9EB]">{selectedImage.views}</span>
                        </div>
                        <button className="text-[#E0D9EB] hover:text-[#A020F0] transition-colors duration-200">
                          <Download size={20} />
                        </button>
                        <button className="text-[#E0D9EB] hover:text-[#A020F0] transition-colors duration-200">
                          <Share2 size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Pagination Indicators */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="text-[#E0D9EB] text-sm">
                        {currentImageIndex + 1} of {currentYearData.images.length}
                      </div>
                      <div className="flex space-x-2">
                        {currentYearData.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setCurrentImageIndex(index);
                              setSelectedImage(currentYearData.images[index]);
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentImageIndex
                                ? 'bg-[#A020F0] scale-125'
                                : 'bg-[#E0D9EB]/40 hover:bg-[#E0D9EB]/60'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
