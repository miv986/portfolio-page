import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { clsx } from 'clsx';

interface ImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, alt, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  const openModal = (index?: number) => {
    if (index !== undefined) {
      setCurrentIndex(index);
    }
    
    // Scroll to image position first
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // Open modal after scroll
    setTimeout(() => {
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
    }, 300);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isModalOpen]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (images.length === 0) return null;

  return (
    <div className={clsx('relative group', className)} ref={imageContainerRef}>
      {/* Main Image Display */}
      <div className="relative aspect-video overflow-hidden rounded-xl bg-lavender-web cursor-pointer" onClick={() => openModal()}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${alt} - ${currentIndex + 1}`}
            className="w-full h-full object-contain"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            onLoad={() => setIsLoading(false)}
            onLoadStart={() => setIsLoading(true)}
          />
        </AnimatePresence>

        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 bg-lavender-web flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 bg-raisin-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              onDoubleClick={() => openModal(index)}
              className={clsx(
                'flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer',
                index === currentIndex
                  ? 'border-primary-600 ring-2 ring-primary-200'
                  : 'border-transparent hover:border-primary-300'
              )}
            >
              <img
                src={image}
                alt={`${alt} thumbnail ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>
      )}

      {/* Swipe Indicators for Mobile */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={clsx(
                'w-2 h-2 rounded-full transition-all duration-200',
                index === currentIndex
                  ? 'bg-primary-600 w-6'
                  : 'bg-primary-200 hover:bg-primary-300'
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Full Screen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-raisin-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              className="relative w-[95vw] h-[95vh] max-w-7xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
              style={{ width: '95vw', height: '95vh', maxWidth: '1280px' }}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm text-raisin-black p-2 rounded-full shadow-large hover:bg-white hover:scale-110 transition-all duration-200 pointer-events-auto"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              {/* Main Image */}
              <div className="relative w-full h-full flex items-center justify-center" style={{ width: '100%', height: '100%' }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`${alt} - ${currentIndex + 1}`}
                    className="object-contain rounded-lg select-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ 
                      pointerEvents: 'none', 
                      maxWidth: '90vw', 
                      maxHeight: '90vh',
                      width: 'auto',
                      height: 'auto'
                    }}
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-raisin-black p-3 rounded-full shadow-large hover:bg-white hover:scale-110 transition-all duration-200 pointer-events-auto z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-raisin-black p-3 rounded-full shadow-large hover:bg-white hover:scale-110 transition-all duration-200 pointer-events-auto z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-raisin-black px-4 py-2 rounded-full text-sm font-medium shadow-large">
                    {currentIndex + 1} / {images.length}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageCarousel;