'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const SLIDES = [
  '/images/homepage/banner-1.jpg',
  '/images/homepage/banner-2.jpg',
  '/images/homepage/banner-3.jpg',
  '/images/homepage/banner-4.jpg',
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Slides */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            opacity: { duration: 2, ease: 'easeInOut' },
            scale: { duration: 10, ease: 'linear' }
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${SLIDES[currentSlide]})` }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Explore Button/Scroll Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white text-center">
        <span className="text-[1.2rem] uppercase tracking-widest font-bold block mb-4">Explore</span>
        <div className="h-[6rem] w-[1px] bg-white/50 mx-auto relative overflow-hidden">
           <motion.div 
             animate={{ y: ['0%', '100%'] }}
             transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
             className="absolute top-0 left-0 w-full h-1/2 bg-white"
           />
        </div>
      </div>
    </section>
  );
}

