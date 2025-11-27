'use client';

import Image from 'next/image';
import Link from 'next/link';
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

export default function LatestNews() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  return (
    <section className="py-[8rem] bg-white">
      <div className="container-xl">
        <div className="mb-[4rem] border-b border-black pb-4">
          <h3 className="text-[1.4rem] font-bold uppercase tracking-widest">Latest News</h3>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-[3rem]">
            {NEWS_ITEMS.map((item) => (
              <div 
                key={item.title} 
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-[3rem]"
              >
                <div className="group h-full">
                   <Link href={item.href} className="flex items-start gap-[2rem]">
                     <div className="relative w-[12rem] aspect-[3/2] flex-shrink-0 bg-gray-100">
                       <Image
                         src={item.image}
                         alt={item.title}
                         fill
                         className="object-cover transition-transform duration-500 group-hover:scale-105"
                       />
                     </div>
                     <div>
                       <h4 className="text-[1.6rem] font-serif leading-tight group-hover:text-gray-600 transition-colors line-clamp-3">
                         {item.title}
                       </h4>
                       <span className="text-[1.1rem] font-bold uppercase tracking-widest mt-[1rem] inline-block border-b border-transparent group-hover:border-black transition-all">
                         Read more
                       </span>
                     </div>
                   </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
