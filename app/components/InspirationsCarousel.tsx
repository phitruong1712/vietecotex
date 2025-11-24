'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const inspirations = [
    {
        id: 1,
        image: '/images/inspiration_automotive.png',
        category: 'Automotive',
        subtitle: 'Inspirations',
        link: '/applications',
    },
    {
        id: 2,
        image: '/images/inspiration_fashion.png',
        category: 'Fashion',
        subtitle: 'Inspirations',
        link: '/applications',
    },
    {
        id: 3,
        image: '/images/banner_furniture_fabric.png', // Fallback/Reuse
        category: 'Interiors',
        subtitle: 'Inspirations',
        link: '/applications',
    },
    {
        id: 4,
        image: '/images/banner_vegan_nappa.png', // Fallback/Reuse
        category: 'Marine',
        subtitle: 'Inspirations',
        link: '/applications',
    },
    {
        id: 5,
        image: '/images/banner_eco_leather.png', // Fallback/Reuse
        category: 'Aviation',
        subtitle: 'Inspirations',
        link: '/applications',
    },
];

export default function InspirationsCarousel() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300; // Approximate card width
            const newScrollLeft =
                direction === 'left'
                    ? scrollContainerRef.current.scrollLeft - scrollAmount
                    : scrollContainerRef.current.scrollLeft + scrollAmount;

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-xl px-4 sm:px-6">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-serif font-bold uppercase tracking-widest mb-2">GET INSPIRED</h3>
                </div>

                <div className="relative group">
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Carousel Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4 sm:mx-0 sm:px-0"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {inspirations.map((item) => (
                            <div
                                key={item.id}
                                className="flex-none w-[280px] snap-center group/card cursor-pointer"
                            >
                                <Link href={item.link as any} className="block">
                                    <div className="relative aspect-[2/3] overflow-hidden mb-4">
                                        <Image
                                            src={item.image}
                                            alt={item.category}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-1">
                                            {item.subtitle}
                                        </span>
                                        <h4 className="text-xl font-serif font-bold text-neutral-900 group-hover/card:text-neutral-600 transition-colors">
                                            {item.category}
                                        </h4>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-8">
                    <Link
                        href="/applications"
                        className="inline-block border border-neutral-900 text-neutral-900 px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-colors"
                    >
                        Discover more
                    </Link>
                </div>
            </div>
        </section>
    );
}
