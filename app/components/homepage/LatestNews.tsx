import Image from 'next/image';
import Link from 'next/link';

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
  return (
    <section className="py-[8rem] bg-white">
      <div className="container-xl">
        <div className="mb-[4rem] border-b border-black pb-4">
          <h3 className="text-[1.4rem] font-bold uppercase tracking-widest">Latest News</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
          {NEWS_ITEMS.map((item) => (
            <div key={item.title} className="group">
               <Link href={item.href} className="flex items-start gap-[2rem]">
                 <div className="relative w-[12rem] aspect-[3/2] flex-shrink-0 bg-gray-100">
                   <Image
                     src={item.image}
                     alt={item.title}
                     fill
                     className="object-cover"
                   />
                 </div>
                 <div>
                   <h4 className="text-[1.6rem] font-serif leading-tight group-hover:text-gray-600 transition-colors">
                     {item.title}
                   </h4>
                   <span className="text-[1.1rem] font-bold uppercase tracking-widest mt-[1rem] inline-block border-b border-transparent group-hover:border-black transition-all">
                     Read more
                   </span>
                 </div>
               </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

