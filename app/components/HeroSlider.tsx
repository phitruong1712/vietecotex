'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
        }, 5000);
        return () => clearInterval(timer);
    }, [isAutoPlaying, nextSlide]);

    const handleInteraction = () => {
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black group">
            {/* Background Images - Simplified Rendering for Crossfade */}
            <div className="absolute inset-0 z-0">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    >
                        {/* Ken Burns Effect Container */}
                        <div className={`w-full h-full ${index === currentSlide ? 'animate-ken-burns' : ''}`}>
                            <Image
                                src={slide.image}
                                alt={slide.alt}
                                fill
                                priority={index === 0}
                                className="object-cover"
                                sizes="100vw"
                                quality={90}
                            />
                        </div>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/30" />
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4 pointer-events-none">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={slides[currentSlide].id}
                        className="flex flex-col items-center justify-center pointer-events-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.h1
                            className="font-serif text-6xl md:text-8xl font-bold tracking-wider mb-6"
                        >
                            {slides[currentSlide].title}
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl tracking-widest uppercase mb-10"
                        >
                            {slides[currentSlide].subtitle}
                        </motion.p>
                        <motion.div>
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
                onClick={() => { prevSlide(); handleInteraction(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white transition-colors p-2 opacity-0 group-hover:opacity-100 duration-300"
            >
                <ChevronLeft size={48} strokeWidth={1} />
            </button>
            <button
                onClick={() => { nextSlide(); handleInteraction(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white transition-colors p-2 opacity-0 group-hover:opacity-100 duration-300"
            >
                <ChevronRight size={48} strokeWidth={1} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => { setCurrentSlide(index); handleInteraction(); }}
                        className={`h-1 transition-all duration-300 ${index === currentSlide ? 'bg-white w-12' : 'bg-white/30 w-6 hover:bg-white/60'}`}
                    />
                ))}
            </div>
            
            <style jsx global>{`
                @keyframes ken-burns {
                    0% { transform: scale(1); }
                    100% { transform: scale(1.1); }
                }
                .animate-ken-burns {
                    animation: ken-burns 10s ease-out forwards;
                }
            `}</style>
        </section>
    );
}
