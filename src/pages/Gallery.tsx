import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { getImagePath } from '../utils/imageUtils';

const galleryImages = [
  {
    id: 1,
    src: getImagePath('/gallery/g1.jpg'),
    alt: 'Avishkar 2K24 Event'
  },
  {
    id: 2,
    src: getImagePath('/gallery/g2.jpg'),
    alt: 'Avishkar 2K24 Event'
  },
  {
    id: 3,
    src: getImagePath('/gallery/g3.jpg'),
    alt: 'Avishkar 2K24 Event'
  },
  {
    id: 4,
    src: getImagePath('/gallery/g4.jpg'),
    alt: 'Avishkar 2K24 Event'
  },
  {
    id: 5,
    src: getImagePath('/gallery/g5.jpg'),
    alt: 'Avishkar 2K24 Event'
  },
  {
    id: 6,
    src: getImagePath('/gallery/g6.jpg'),
    alt: 'Avishkar 2K24 Event'
  },
  {
    id: 7,
    src: getImagePath('/gallery/g7.jpg'),
    alt: 'Avishkar 2K24 Event'
  },
  {
    id: 8,
    src: getImagePath('/gallery/g8.jpg'),
    alt: 'Avishkar 2K24 Event'
  },
  {
    id: 9,
    src: getImagePath('/gallery/g9.jpg'),
    alt: 'Avishkar 2K24 Event'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  
  // Initialize loading state for all images
  useEffect(() => {
    const initialLoadState: Record<number, boolean> = {};
    galleryImages.forEach(image => {
      initialLoadState[image.id] = false;
    });
    setImagesLoaded(initialLoadState);
  }, []);

  // Add window resize listener to detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical mobile breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleImageClick = (imageSrc: string) => {
    if (!isMobile) {
      setSelectedImage(imageSrc);
    }
  };

  const handleImageLoad = (id: number) => {
    setImagesLoaded(prev => ({ ...prev, [id]: true }));
  };

  const handleImageError = (id: number) => {
    // On error, try to load a placeholder image
    const img = document.querySelector(`img[data-id="${id}"]`) as HTMLImageElement;
    if (img) {
      img.src = getImagePath('/images/placeholder.jpg');
      // Mark as loaded after a short delay to prevent infinite loading
      setTimeout(() => {
        setImagesLoaded(prev => ({ ...prev, [id]: true }));
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="text-center mb-12 mt-16">
        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-8">
          <div className="w-24 sm:w-48 h-[2px] bg-[#15A6F7]"></div>
          <h2 className="text-[36px] sm:text-[48px] font-bold text-[#15A6F7] whitespace-nowrap">Gallery</h2>
          <div className="w-24 sm:w-48 h-[2px] bg-[#15A6F7]"></div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                whileHover={{ scale: isMobile ? 1 : 1.02 }}
                transition={{ duration: 0.2 }}
                className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden ${
                  !isMobile ? 'cursor-pointer' : ''
                } shadow-lg`}
                onClick={() => handleImageClick(image.src)}
              >
                {/* Loading spinner for each image */}
                <div 
                  className={`absolute inset-0 bg-gray-100 flex items-center justify-center z-10 transition-opacity duration-300 ${
                    imagesLoaded[image.id] ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#15A6F7] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                  </div>
                </div>

                {/* Actual image */}
                <img
                  data-id={image.id}
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    imagesLoaded[image.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(image.id)}
                  onError={() => handleImageError(image.id)}
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 ${
                  !isMobile ? 'bg-black/20 hover:bg-black/10' : 'bg-black/10'
                } transition-colors duration-300 ${
                  imagesLoaded[image.id] ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox for selected image */}
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