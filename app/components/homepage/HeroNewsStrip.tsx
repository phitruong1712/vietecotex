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
    { loop: true, align: 'start', axis: 'y' },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  return (
    <div 
      id="strip-news"
      className="fixed bottom-0 left-0 w-full bg-white z-[50] py-[20px] transition-transform duration-[400ms] ease-out"
    >
      <div className="container container--expanded">
        <div className="strip-news__wrapper flex flex-wrap md:flex-nowrap">
          {/* Head - 33.3% width */}
          <div className="strip-news__head w-full md:w-[33.3%] px-[20px] md:px-[30px] mb-5 md:mb-0">
            <div className="font-bold uppercase tracking-widest text-[1.2rem]">Latest News</div>
          </div>
          
          {/* Slider - 66.7% width */}
          <div className="strip-news__slider w-full md:w-[66.7%]">
            <div className="overflow-hidden h-[150px]" ref={emblaRef}>
            <div className="flex flex-col h-full">
              {NEWS_ITEMS.map((item) => (
                <div key={item.title} className="flex-[0_0_100%] min-w-0 h-full">
                  <div className="news flex w-full pr-[20px] md:pr-[30px] h-full">
                    <div className="news__image shrink-0">
                      <Link href={item.href} title={item.title}>
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={150}
                          height={100}
                          className="w-[150px] h-auto md:w-[150px]"
                        />
                      </Link>
                    </div>
                    <div className="news__meta pl-[20px] md:pl-[30px] flex-1">
                      <div className="news__meta__wrap flex flex-wrap h-full">
                        <h3 className="w-full uppercase text-[16px] leading-[1.4] mb-0">
                          <Link href={item.href} title={item.title} className="text-black no-underline">
                            {item.title}
                          </Link>
                        </h3>
                        <p className="hidden">{item.title}</p>
                        <p className="hidden">{item.title}</p>
                        <Link 
                          href={item.href} 
                          title={item.title}
                          className="btn-underline text-[14px] self-end uppercase tracking-widest font-bold border-b border-black pb-1 hover:border-gray-600 transition-colors"
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
