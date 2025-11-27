'use client';

import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const NEWS_ITEMS = [
  {
    title: 'Where the design of the future is born',
    image: '/images/homepage/alcantara_design_futuro_universita_tessuto-300x200.jpg',
    href: '/news/university-collaboration'
  },
  {
    title: 'Alcantara takes center stage at IAA Mobility 2025',
    image: '/images/homepage/alcantara_iaa_mobility_2025_monaco-300x200.jpeg',
    href: '/news/iaa-mobility'
  },
  {
    title: 'Alcantara: over 50 years of Italian excellence',
    image: '/images/homepage/alcantara_50_anni_eccellenza_italiana-300x200.jpg',
    href: '/news/50-years'
  },
  {
    title: 'Alcantara on board La Dolce Vita Orient Express',
    image: '/images/homepage/alcantara_dolce-vita-orient-express-train-300x200.jpg',
    href: '/news/orient-express'
  },
  {
    title: 'Alcantara at Goodwood Festival of Speed 2025',
    image: '/images/homepage/alcantara_goodwood_festival_of_speed_2025-300x200.jpg',
    href: '/news/goodwood'
  },
  {
    title: 'Expo 2025 Osaka: Alcantara at Italy Pavilion',
    image: '/images/homepage/expo_osaka_2025_padiglione_italia_alcantara_02-300x200.jpg',
    href: '/news/expo-2025'
  }
];

export default function HeroNewsStrip() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', axis: 'x', slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  return (
    <div className="absolute bottom-0 left-0 w-full bg-white z-20 border-t border-gray-100 hidden md:block">
      <div className="container-xl">
        <div className="flex items-center h-[6rem]">
          <div className="font-bold uppercase tracking-widest text-[1.2rem] mr-8 shrink-0 border-r border-gray-200 pr-8 h-full flex items-center">
            Latest News
          </div>
          
          <div className="overflow-hidden flex-1 h-[6rem]" ref={emblaRef}>
            <div className="flex">
              {NEWS_ITEMS.map((item) => (
                <div key={item.title} className="flex-[0_0_100%] min-w-0 pr-[2rem]">
                  <div className="flex items-center gap-4">
                    <div className="relative w-[6rem] h-[4rem] shrink-0 bg-gray-100">
                      <Image src={item.image} alt={item.title} fill className="object-cover" sizes="96px" />
                    </div>
                    <div className="flex flex-col justify-center truncate">
                      <Link href={item.href} className="text-[1.3rem] font-serif hover:text-gray-600 transition-colors truncate">
                        {item.title}
                      </Link>
                      <Link
                        href={item.href}
                        className="text-[1rem] uppercase tracking-widest font-bold border-b border-black inline-block w-max mt-1 hover:border-gray-600"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

