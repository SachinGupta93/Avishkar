import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: '/gallery/g1.jpg',
    alt: 'Avishkar 2K24 Event'
  },
  {
    id: 2,
    src: '/gallery/g2.jpg',
    alt: 'Avishkar 2K24 Event'
  },
  {
    id: 3,
    src: '/gallery/g3.jpg',
    alt: 'Avishkar 2K24 Event'
  },
  {
    id: 4,
    src: '/gallery/g4.jpg',
    alt: 'Avishkar 2K24 Event'
  },
  {
    id: 5,
    src: '/gallery/g5.jpg',
    alt: 'Avishkar 2K24 Event'
  },
  {
    id: 6,
    src: '/gallery/g6.jpg',
    alt: 'Avishkar 2K24 Event'
  },
  {
    id: 7,
    src: '/gallery/g7.jpg',
    alt: 'Avishkar 2K24 Event'
  },
  {
    id: 8,
    src: '/gallery/g8.jpg',
    alt: 'Avishkar 2K24 Event'
  },
  {
    id: 9,
    src: '/gallery/g9.jpg',
    alt: 'Avishkar 2K24 Event'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl mt-24 font-bold text-[#4A90E2] mb-8">
            GALLERY
          </h1>
          <div className="flex justify-center space-x-4">
            <div className="w-12 h-1 bg-black"></div>
            <div className="w-12 h-1 bg-black"></div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer shadow-lg"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-7xl max-h-[90vh] rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage}
                alt="Selected gallery image"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;