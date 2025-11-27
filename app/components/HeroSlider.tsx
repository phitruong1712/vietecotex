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
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/30 z-10" />
                {/* Note: Since we cannot generate video files in this environment without ffmpeg, 
                    we are using the structure that supports video. 
                    For the demo, please replace 'hero-banner.webm' with your actual video file. 
                */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-full opacity-80"
                    poster="/images/banner_eco_leather.png"
                >
                    {/* Intentionally commented out until real video is available to prevent 404 errors in console
                    <source src="/videos/hero-banner.webm" type="video/webm" />
                    <source src="/videos/hero-banner.mp4" type="video/mp4" />
                    */}
                    {/* Fallback to Ken Burns Image if video fails or is missing */}
                    <img 
                        src="/images/banner_eco_leather.png" 
                        alt="Hero Background" 
                        className="w-full h-full object-cover animate-ken-burns"
                    />
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4 pointer-events-none">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={slides[currentSlide].id}
                        className="flex flex-col items-center justify-center pointer-events-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1
                            className={`font-serif text-6xl md:text-8xl font-bold tracking-wider mb-6 ${
                                slides[currentSlide].id ? 'animate-letter-spacing' : ''
                            }`}
                        >
                            {slides[currentSlide].title}
                        </h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-lg md:text-xl tracking-widest uppercase mb-10"
                        >
                            {slides[currentSlide].subtitle}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
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

            {/* Navigation Arrows (Hidden for video mode, can be re-enabled if multiple videos) */}
            {/* ... */}

            {/* Indicators (Hidden for video mode) */}
            {/* ... */}
            
            <style jsx global>{`
                @keyframes letterSpacing {
                    0% { opacity: 0; letter-spacing: 1em; }
                    20% { opacity: 1; letter-spacing: 1em; }
                    100% { opacity: 1; letter-spacing: 0.1em; }
                }
                .animate-letter-spacing {
                    animation: letterSpacing 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
                }
            `}</style>
        </section>
    );
}