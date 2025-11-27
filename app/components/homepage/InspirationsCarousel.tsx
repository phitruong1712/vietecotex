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
    <section className="py-[8rem] bg-gray-50 text-center">
      <div className="container container--percent">
        {/* carousel-3 h3: font-size: 40px, line-height: 1.1, margin-bottom: 40px, uppercase */}
        <div className="head mb-[4rem]">
          <h3 className="text-[3rem] lg:text-[4rem] leading-[1.1] font-serif uppercase">
            GET INSPIRED
          </h3>
        </div>
        
        {/* carousel: margin: 0 -40px, padding: 0 40px */}
        <div className="carousel overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef} style={{ margin: '0 -40px', padding: '0 40px' }}>
          <div className="flex">
            {ITEMS.map((item) => (
              <div 
                key={item.title} 
                className="item flex-[0_0_100%] md:flex-[0_0_33.33%] min-w-0"
                style={{ padding: '0 3px' }}
              >
                <div className="group relative">
                  <Link href="/material/inspirations" className="block">
                    {/* image: margin-bottom: 20px */}
                    <div className="image relative aspect-[2/3] mb-[2rem] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    {/* subtitle: font-size: 16px, line-height: 1, margin-bottom: 20px, uppercase */}
                    <span className="subtitle text-[1.6rem] leading-[1] text-gray-500 uppercase block mb-[2rem]">Inspirations</span>
                    {/* title: font-size: 24px, line-height: 1.2 */}
                    <h4 className="title text-[2.4rem] leading-[1.2] font-serif group-hover:text-gray-600 transition-colors">{item.title}</h4>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* bottom: margin-top: 40px */}
        <div className="bottom mt-[4rem]">
           <Link href="/material/inspirations" className="btn btn--outline">Discover more</Link>
        </div>
      </div>
    </section>
  );
}
