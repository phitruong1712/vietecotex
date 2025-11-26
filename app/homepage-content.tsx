'use client';
import Link from 'next/link';
import EcoLeatherCycle from './components/eco-leather-cycle';
import { TrustBar } from './components/trust-bar';

export default function OldHomepageSection() {
  const collections = [
    {
      title: 'Automotive 2025',
      images: [
        'https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1553440291-6a2336383659?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
      ],
    },
    {
      title: 'Fall/Winter 2026/27',
      images: [
        'https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80',
        '/homepage-image-4.png',
        'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1550614000-4b9519e020c9?auto=format&fit=crop&w=800&q=80',
      ],
    },
    {
      title: 'Spring/Summer 2026',
      images: [
        '/homepage-image-5.png',
        'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1485230946086-21e682462746?auto=format&fit=crop&w=800&q=80',
      ],
    },
    {
      title: 'Automotive 2024',
      images: [
        'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80',
      ],
    },
    {
      title: 'Aurora',
      images: [
        'https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1618219740975-d409b1ca9ef8?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1618219908412-a29a1bb7bccc?auto=format&fit=crop&w=800&q=80',
      ],
    },
  ];

  return (
    <div className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
            style={{
              backgroundImage: "url('/images/hero-banner-new.png')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[60vh] grid content-end pb-16">
          <div className="max-w-xl">
            <p className="text-neutral-200 text-xs tracking-[0.2em] mb-3">
              INSPIRATIONS
            </p>
            <h1 className="font-[Gilda_Display] text-4xl sm:text-5xl text-white leading-tight">
              Modern Eco Leather for Environmental Protection
            </h1>
            <p className="text-neutral-200/90 mt-3 text-sm">
              Serving 1500+ customers worldwide. Premium microfiber leather (PU/PVC) and furniture fabrics manufacturer. 80% microfiber leather, 20% furniture fabrics. Customization, small MOQs, timely delivery, and competitive pricing. Trusted by automotive, furniture, footwear, fashion, and construction industries.
            </p>
            <a
              href="#Catalog"
              className="inline-block mt-6 border-b border-white/80 text-white text-sm pb-1 hover:opacity-80"
            >
              Explore
            </a>
          </div>
        </div>
      </section>

      {/* Product Evolution Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4">The Evolution of Eco-Leather</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              From traditional synthetics to our latest Vegan Nappa technology, we continuously innovate to define the future of sustainable materials.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Gen 1: PVC/PU */}
            <div className="group relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 mb-4">
                <img
                  src="/images/pvc_pu_gen1.png"
                  alt="Standard PVC/PU Leather - Generation 1"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <div className="text-xs font-bold tracking-wider text-neutral-400 uppercase mb-1">Generation 1</div>
                <h3 className="text-xl font-semibold mb-2">Standard PVC/PU</h3>
                <p className="text-sm text-neutral-600">The foundation of synthetic leather. Durable and versatile for general applications.</p>
              </div>
            </div>

            {/* Gen 2: Microfiber */}
            <div className="group relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 mb-4">
                <img
                  src="/images/microfiber_gen2.png"
                  alt="Microfiber Leather - Generation 2"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <div className="text-xs font-bold tracking-wider text-neutral-400 uppercase mb-1">Generation 2</div>
                <h3 className="text-xl font-semibold mb-2">Microfiber Leather</h3>
                <p className="text-sm text-neutral-600">Enhanced structure mimicking real leather dermis. Superior breathability and strength.</p>
              </div>
            </div>

            {/* Gen 3: Vegan Nappa */}
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-b from-neutral-50 to-white rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 mb-4 ring-1 ring-neutral-200 shadow-lg">
                <div className="absolute top-3 right-3 bg-neutral-900 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">
                  LATEST TECH
                </div>
                <img
                  src="/images/vegan_nappa_gen3.png"
                  alt="Vegan Nappa Leather - Generation 3"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="text-center relative">
                <div className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-1">Generation 3</div>
                <h3 className="text-xl font-serif font-semibold mb-2">Vegan Nappa</h3>
                <p className="text-sm text-neutral-600">Our breakthrough technology. Unmatched softness, realistic touch, and premium finish for high-end applications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eco-Leather Circular Mission */}
      <EcoLeatherCycle />

      {/* Trust Bar */}
      <TrustBar />

      {/* Moodboard */}
      <section id="Global Sourcing Advantage" className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="h-96 flex flex-col justify-center">
              <h2 className="text-xl tracking-[0.2em] text-neutral-600">
                1500+ CUSTOMERS WORLDWIDE
              </h2>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Serving 1500+ customers with 80% microfiber leather and 20% furniture fabrics. 70-80% of our customers produce car seats, sofas, shoes, and bags. 20% come from construction tenders (hotels, resorts, apartments). Our advantages: customization, tailor-made solutions, timely delivery, reliability, high warranty, small MOQs, high quality, and competitive pricing. Dual manufacturing across 8 factories in China and 6 in Vietnam gives you flexibility to choose.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 h-96 rounded-2xl overflow-hidden shadow-sm bg-neutral-100 relative">
                <picture>
                  <source
                    srcSet="/homepage-image-2.jpg"
                    type="image/jpeg"
                  />
                  <img
                    src="/homepage-image-2.jpg"
                    alt="Eco microfiber leather texture detail for sustainable furniture and automotive applications"
                    width={1024}
                    height={1536}
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    style={{
                      imageRendering: 'auto',
                      willChange: 'auto',
                    }}
                    loading="eager"
                    decoding="sync"
                  />
                </picture>
              </div>
              <div className="col-span-1 h-96 rounded-2xl overflow-hidden shadow-sm bg-neutral-100 relative">
                <picture>
                  <source
                    srcSet="/homepage-image-3.jpg"
                    type="image/jpeg"
                  />
                  <img
                    src="/homepage-image-3.jpg"
                    alt="Sustainable microfiber leather moodboard showcasing eco fabrics and furniture textiles"
                    width={1024}
                    height={1536}
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    style={{
                      imageRendering: 'auto',
                      willChange: 'auto',
                    }}
                    loading="eager"
                    decoding="sync"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections / Textures */}
      <section id="Catalog" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-xl tracking-[0.2em] text-neutral-600">
            THE TEXTURES
          </h3>
          <div className="mt-8 space-y-10">
            {collections.map((c, i) => (
              <article key={i} className="rounded-2xl border border-neutral-200 p-4 sm:p-6">
                <div className="flex items-center justify-between gap-6 flex-wrap">
                  <h4 className="text-lg font-medium">{c.title}</h4>
                  <div className="text-xs text-neutral-500">Scroll →</div>
                </div>
                <div
                  className="mt-4 flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-neutral-300"
                  aria-label={`${c.title} textures carousel`}
                >
                  {c.images.map((src, idx) => (
                    <figure
                      key={idx}
                      className="min-w-[220px] sm:min-w-[260px] lg:min-w-[300px] snap-start"
                    >
                      <img
                        src={src}
                        alt={`${c.title} eco microfiber leather texture ${idx + 1} for ${c.title.includes('Automotive') ? 'automotive' : c.title.includes('Fall') || c.title.includes('Spring') ? 'fashion' : 'interior design'} applications`}
                        loading={i < 2 && idx < 2 ? 'eager' : 'lazy'}
                        className="w-full h-[300px] object-cover rounded-xl shadow-sm"
                      />
                    </figure>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="py-12 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">Learn More</h3>
            <p className="text-neutral-600 text-sm mb-4">
              Curious about the difference between faux leather and microfiber leather?
            </p>
            <Link
              href="/faux-leather"
              className="inline-block px-6 py-2 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium transition-colors"
            >
              Faux vs Microfiber Leather Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA buttons */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'REQUEST QUOTE', href: '/contact' },
              { label: 'APPLICATIONS', href: '/applications' },
              { label: 'OUR ADVANTAGES', href: '/advantages' },
              { label: 'BECOME A PARTNER', href: '/distributors' },
            ].map((b) => (
              <Link
                key={b.label}
                href={b.href as any}
                className="text-center py-3 rounded-xl border border-neutral-300 hover:bg-neutral-100"
              >
                {b.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact anchor */}
      <div id="contact" className="sr-only" />
    </div>
  );
}

