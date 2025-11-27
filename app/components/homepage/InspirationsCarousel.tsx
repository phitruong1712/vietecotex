'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const ITEMS = [
  { title: 'Automotive', image: '/images/homepage/AUTOMOTIVE2023-01_1726_automotive.webp' },
  { title: 'Ninfea', image: '/images/homepage/NINFEA-01_SS24_fashion.webp' },
  { title: 'Aurora', image: '/images/homepage/AURORA-01_4077_interior.webp' },
  { title: 'Biomorph', image: '/images/homepage/BIOMORPH-14_3895_automotive.webp' },
  { title: 'Wild', image: '/images/homepage/WILD-12_4306_fashion.webp' },
  { title: 'Rough', image: '/images/homepage/ROUGH-C01_7100_fashion.webp' },
];

export default function InspirationsCarousel() {
  return (
    <section className="py-[8rem] bg-gray-50">
      <div className="container-xl">
        <div className="mb-[4rem]">
          <h3 className="text-[3rem] font-serif uppercase tracking-wide">Get Inspired</h3>
        </div>
        
        {/* Scrollable Container */}
        <div className="flex gap-[2rem] overflow-x-auto pb-[2rem] snap-x">
          {ITEMS.map((item) => (
            <div key={item.title} className="min-w-[85vw] md:min-w-[40vw] lg:min-w-[30%] snap-start group">
              <Link href="/material/inspirations" className="block">
                <div className="relative aspect-[2/3] mb-[2rem] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="text-[1.1rem] text-gray-500 uppercase tracking-widest block mb-2">Inspirations</span>
                <h4 className="text-[2.4rem] font-serif">{item.title}</h4>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-[4rem] text-center">
           <Link href="/material/inspirations" className="btn btn-outline">Discover More</Link>
        </div>
      </div>
    </section>
  );
}

