'use client';

import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';

const ITEMS = [
  { title: 'Automotive', image: '/images/homepage/AUTOMOTIVE2023-01_1726_automotive.webp' },
  { title: 'Ninfea', image: '/images/homepage/NINFEA-01_SS24_fashion.webp' },
  { title: 'Aurora', image: '/images/homepage/AURORA-01_4077_interior.webp' },
  { title: 'Biomorph', image: '/images/homepage/BIOMORPH-14_3895_automotive.webp' },
  { title: 'Wild', image: '/images/homepage/WILD-12_4306_fashion.webp' },
  { title: 'Rough', image: '/images/homepage/ROUGH-C01_7100_fashion.webp' },
];

export default function InspirationsCarousel() {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { align: 'start' }
    }
  });

  return (
    <section className="py-[8rem] bg-gray-50">
      <div className="container-xl">
        <div className="mb-[4rem]">
          <h3 className="text-[3rem] font-serif uppercase tracking-wide">Get Inspired</h3>
        </div>
        
        {/* Embla Carousel */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-[2rem]">
            {ITEMS.map((item) => (
              <div 
                key={item.title} 
                className="flex-[0_0_85%] md:flex-[0_0_40%] lg:flex-[0_0_30%] min-w-0 pl-[2rem]"
              >
                <div className="group relative">
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
                    <h4 className="text-[2.4rem] font-serif group-hover:text-gray-600 transition-colors">{item.title}</h4>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[4rem] text-center">
           <Link href="/material/inspirations" className="btn btn-outline">Discover More</Link>
        </div>
      </div>
    </section>
  );
}
