'use client';

import Link from 'next/link';
import Image from 'next/image';
import ProductEvolution from './components/ProductEvolution';
import HeroSlider from './components/HeroSlider';
import InspirationsCarousel from './components/InspirationsCarousel';

export default function Page() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Motion Image Play */}
      {/* Hero Section - Motion Image Play */}
      <HeroSlider />

      {/* Product Evolution Section */}
      <ProductEvolution />

      {/* Latest News Section */}
      <section className="py-24 container-xl">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-serif font-bold">LATEST NEWS</h2>
          <Link href="/news" className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-60 transition-opacity">
            View All News
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* News Card 1 */}
          <article className="group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-neutral-100">
              {/* Placeholder */}
              <div className="absolute inset-0 bg-neutral-200 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="space-y-3">
              <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Automotive</span>
              <h3 className="text-xl font-serif font-bold group-hover:text-neutral-600 transition-colors">
                Redefining Interior Luxury for 2025
              </h3>
              <p className="text-sm text-neutral-600 line-clamp-2">
                Discover how Viet Ecotex is partnering with leading automotive brands to create sustainable, high-performance interiors.
              </p>
            </div>
          </article>

          {/* News Card 2 */}
          <article className="group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-neutral-100">
              <div className="absolute inset-0 bg-neutral-300 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="space-y-3">
              <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Fashion</span>
              <h3 className="text-xl font-serif font-bold group-hover:text-neutral-600 transition-colors">
                Spring/Summer Collection Preview
              </h3>
              <p className="text-sm text-neutral-600 line-clamp-2">
                A first look at our lightweight, breathable microfiber textures designed for the next generation of fashion.
              </p>
            </div>
          </article>

          {/* News Card 3 */}
          <article className="group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-neutral-100">
              <div className="absolute inset-0 bg-neutral-400 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="space-y-3">
              <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Sustainability</span>
              <h3 className="text-xl font-serif font-bold group-hover:text-neutral-600 transition-colors">
                Achieving Carbon Neutrality Goals
              </h3>
              <p className="text-sm text-neutral-600 line-clamp-2">
                Our latest report on reducing carbon footprint through innovative manufacturing processes in Vietnam.
              </p>
            </div>
          </article>
        </div>
      </section >

      {/* Get Inspired Section */}
      <InspirationsCarousel />
    </div >
  );
}
