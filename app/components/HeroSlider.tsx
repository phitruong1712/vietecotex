'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        id: 1,
        image: '/images/banner_eco_leather.png',
        title: 'MATERIAL',
        subtitle: 'The Art of Everyday Luxury',
        alt: 'Premium Eco-Leather Texture',
    },
    {
        id: 2,
        image: '/images/banner_vegan_nappa.png',
        title: 'INNOVATION',
        subtitle: 'Next-Gen Vegan Nappa',
        alt: 'Sleek Vegan Nappa Leather',
    },
    {
        id: 3,
        image: '/images/banner_furniture_fabric.png',
        title: 'COMFORT',
        subtitle: 'Sustainable Furniture Textiles',
        alt: 'Textured Furniture Fabric',
    },
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setInterval(() => {
            nextSlide();
        }, 5000); // 5 seconds per slide

        return () => clearInterval(timer);
    }, [isAutoPlaying, nextSlide]);

    // Pause auto-play on interaction
    const handleInteraction = () => {
        setIsAutoPlaying(false);
        // Resume auto-play after 10 seconds of inactivity
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black group">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={slides[currentSlide].id}
                    className="absolute inset-0 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                >
                    {/* Ken Burns Effect Image */}
                    <motion.div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.1 }}
                        transition={{ duration: 10, ease: 'linear' }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40" />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4 pointer-events-none">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={slides[currentSlide].id}
                        className="flex flex-col items-center justify-center pointer-events-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <motion.h1
                            className="font-serif text-6xl md:text-8xl font-bold tracking-wider mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            {slides[currentSlide].title}
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl tracking-widest uppercase mb-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            {slides[currentSlide].subtitle}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.1 }}
                        >
                            <Link
                                href="/catalog"
                                className="btn btn-outline border-white text-white hover:bg-white hover:text-black transition-colors duration-300 px-8 py-3 rounded-none uppercase tracking-widest text-sm font-bold"
                            >
                                Discover More
                            </Link>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={() => {
                    prevSlide();
                    handleInteraction();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white transition-colors p-2 opacity-0 group-hover:opacity-100 duration-300"
                aria-label="Previous slide"
            >
                <ChevronLeft size={48} strokeWidth={1} />
            </button>
            <button
                onClick={() => {
                    nextSlide();
                    handleInteraction();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white transition-colors p-2 opacity-0 group-hover:opacity-100 duration-300"
                aria-label="Next slide"
            >
                <ChevronRight size={48} strokeWidth={1} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrentSlide(index);
                            handleInteraction();
                        }}
                        className={`h-1 transition-all duration-300 ${index === currentSlide ? 'bg-white w-12' : 'bg-white/30 w-6 hover:bg-white/60'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
