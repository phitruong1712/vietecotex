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
      <div className="container-xl">
        <div className="mb-[6rem]">
          <h3 className="text-[3rem] font-serif uppercase tracking-wide">
            <Link href="/a-world">A-WORLD</Link>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[4rem]">
          {STORIES.map((story) => (
            <div key={story.title} className="group">
              <Link href={story.href} className="block">
                <div className="relative aspect-[3/2] mb-[3rem] overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="text-[1.1rem] font-bold uppercase tracking-widest text-gray-500 mb-[1rem]">
                  {story.category}
                </div>
                <h3 className="text-[2.4rem] font-serif leading-tight mb-[2rem] group-hover:text-gray-600 transition-colors">
                  {story.title}
                </h3>
                <p className="text-[1.4rem] leading-relaxed text-gray-600 mb-[2rem] font-light">
                  {story.excerpt}
                </p>
                <span className="text-[1.1rem] font-bold uppercase tracking-widest border-b border-black pb-1 group-hover:border-gray-600 transition-colors">
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

