import Image from 'next/image';
import Link from 'next/link';

const STORIES = [
  {
    title: 'Generating Visions Alcantara in the Arts',
    category: 'ART, DESIGN AND CREATIVITY',
    excerpt: 'Triennale Milano and Alcantara present a special exhibition curated by Damiano Gullì: an unprecedented journey through the historical archive of Alcantara.',
    image: '/images/homepage/alcantara_triennale_cover-768x512.jpg',
    href: '/a-world/generating-visions'
  },
  {
    title: 'ALCANTARA, FACETASM and FUMIE TANAKA',
    category: 'EVENTS',
    excerpt: 'Alcantara collaborates with the two Japanese fashion brands FACETASM and FUMIE TANAKA for two special Capsule Collections presented at the Italian Embassy in Tokyo.',
    image: '/images/homepage/event_fumie_tanaka_facetasm_alcantara_07-768x512.jpg',
    href: '/a-world/capsule-collections'
  },
  {
    title: 'Alcantara presents its first book about art',
    category: 'EVENTS',
    excerpt: 'ALCANTARA La materia dell’arte (Alcantara: the material of art): Luca Masia\'s book tells the story of Alcantara\'s journey and the world of art.',
    image: '/images/homepage/alcantara_libro_materia_arte_masia_copertina-768x512.jpg',
    href: '/a-world/art-book'
  }
];

export default function AWorldSection() {
  return (
    <section className="py-[8rem] lg:py-[12rem]">
      <div className="container container--expanded">
        {/* head h3: font-size: 40px, margin-bottom: 40px, text-align: center */}
        <div className="head text-center mb-[4rem]">
          <h3 className="text-[3rem] lg:text-[4rem] font-serif uppercase">
            <Link href="/a-world" className="text-black hover:text-gray-600 transition-colors">A-WORLD</Link>
          </h3>
        </div>

        {/* grid: margin: 0 -45px on desktop, flex-wrap */}
        <div className="grid flex flex-wrap lg:mx-[-4.5rem]">
          {STORIES.map((story) => (
            <div 
              key={story.title} 
              className="story-preview w-full lg:w-[33.3%] lg:px-[4.5rem] mb-[4rem] lg:mb-0"
            >
              <Link href={story.href} className="block text-black">
                {/* image: margin-bottom: 20px */}
                <div className="image relative aspect-[3/2] mb-[2rem] overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* category: font-size: 16px, margin-bottom: 20px, uppercase */}
                <div className="category text-[1.4rem] lg:text-[1.6rem] font-bold uppercase mb-[2rem]">
                  {story.category}
                </div>
                {/* title: font-size: 24px, uppercase, line-height: 1.3 */}
                <h3 className="title text-[2rem] lg:text-[2.4rem] leading-[1.3] font-serif uppercase mb-[2rem] group-hover:text-gray-600 transition-colors">
                  {story.title}
                </h3>
                {/* excerpt: font-size: 16px, margin-bottom: 30px */}
                <div className="excerpt text-[1.4rem] lg:text-[1.6rem] leading-relaxed text-gray-600 mb-[3rem] font-light">
                  {story.excerpt}
                </div>
                <span className="btn-underline inline-block border-b border-black pb-1 uppercase tracking-widest font-bold text-[1.4rem] group-hover:border-gray-600 transition-colors">
                  Read More
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

