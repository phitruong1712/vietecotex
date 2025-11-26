import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'Microfiber Leather Catalog — Vietnam Supplier Alternative to China',
  description:
    'Browse our catalog of eco microfiber leather and furniture fabrics from Vietnam-based supplier. Premium alternative to Chinese manufacturing. Automotive, fashion, and interior design materials. Custom colors, grains, and specifications available. Small MOQs, US/EU compliant.',
  keywords: [
    'microfiber leather supplier',
    'furniture textile supplier',
    'alternative to China manufacturing',
    'Vietnam microfiber leather',
    'microfiber leather catalog',
    'furniture textile catalog',
    'Vietnam supplier catalog',
    'non-China supplier',
    'microfiber leather',
    'eco fabrics',
    'furniture textiles',
    'sustainable leather',
    'PU leather',
    'PVC leather',
    'automotive fabrics',
    'furniture fabrics',
    'eco-friendly materials',
  ],
  openGraph: {
    title:
      'Microfiber Leather Catalog — Vietnam Supplier Alternative to China',
    description:
      'Browse our catalog of eco microfiber leather and furniture fabrics from Vietnam-based supplier. Premium alternative to Chinese manufacturing for automotive, fashion, and interior design applications.',
    url: 'https://vietecotex.com/catalog',
  },
  alternates: {
    canonical: '/catalog',
  },
};

// Explicit WebPage schema to tell Google this is informational, NOT a product page
const catalogWebpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://vietecotex.com/catalog#webpage',
  url: 'https://vietecotex.com/catalog',
  name: 'Microfiber Leather Catalog — Vietnam Supplier Alternative to China',
  description:
    'Informational catalog page showing microfiber leather materials. Visual inspiration gallery, not a product listing page with prices or offers.',
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://vietecotex.com/#website',
    name: 'Viet Ecotex',
    url: 'https://vietecotex.com',
  },
  about: {
    '@type': 'Thing',
    name: 'Microfiber Leather Catalog',
    description: 'Visual inspiration gallery of microfiber leather materials, not a product listing',
  },
  // Explicitly NOT a Product or Offer - this is an informational catalog/inspiration gallery
};

function AlcantaraInspiredPage() {
  // ALL STRUCTURED DATA REMOVED - This page is informational only, NOT a product page
  const collections = [
    {
      title: 'Automotive 2025',
      images: [
        'https://www.alcantara.com/wp-content/uploads/2025/10/automotive_2025_01.jpg',
        'https://www.alcantara.com/wp-content/uploads/2025/10/automotive_2025_02.jpg',
        'https://www.alcantara.com/wp-content/uploads/2025/10/automotive_2025_03.jpg',
        'https://www.alcantara.com/wp-content/uploads/2025/10/automotive_2025_04.jpg',
        'https://www.alcantara.com/wp-content/uploads/2025/10/automotive_2025_05.jpg',
      ],
    },
    {
      title: 'Fall/Winter 2026/27',
      images: [
        'https://www.alcantara.com/wp-content/uploads/2024/09/Alcantara-FW_26-27_02.jpg',
        'https://www.alcantara.com/wp-content/uploads/2024/09/Alcantara-FW_26-27_03.jpg',
        'https://www.alcantara.com/wp-content/uploads/2024/09/Alcantara-FW_26-27_09.jpg',
        'https://www.alcantara.com/wp-content/uploads/2024/09/Alcantara-FW_26-27_11.jpg',
        'https://www.alcantara.com/wp-content/uploads/2024/09/Alcantara-FW_26-27_13.jpg',
        'https://www.alcantara.com/wp-content/uploads/2024/09/Alcantara-FW_26-27_19.jpg',
      ],
    },
    {
      title: 'Spring/Summer 2026',
      images: [
        'https://www.alcantara.com/wp-content/uploads/2024/09/ALCANTARA_SS26_05.jpg',
        'https://www.alcantara.com/wp-content/uploads/2024/09/ALCANTARA_SS26_09.jpg',
        'https://www.alcantara.com/wp-content/uploads/2024/09/ALCANTARA_SS26_11.jpg',
        'https://www.alcantara.com/wp-content/uploads/2024/09/ALCANTARA_SS26_03.jpg',
        'https://www.alcantara.com/wp-content/uploads/2024/09/ALCANTARA_SS26_10.jpg',
        'https://www.alcantara.com/wp-content/uploads/2024/09/ALCANTARA_SS26_01.jpg',
      ],
    },
    {
      title: 'Automotive 2024',
      images: [
        'https://www.alcantara.com/wp-content/uploads/2024/06/NEBULAR-4-585.jpg',
        'https://www.alcantara.com/wp-content/uploads/2024/06/IMPULSAR-4-599.jpg',
        'https://www.alcantara.com/wp-content/uploads/2024/06/IMPULSAR-6C-635.jpg',
        'https://www.alcantara.com/wp-content/uploads/2024/06/TERRATONE-4-283.jpg',
        'https://www.alcantara.com/wp-content/uploads/2024/06/TERRATONE-12-709.jpg',
      ],
    },
    {
      title: 'Aurora',
      images: [
        'https://www.alcantara.com/wp-content/uploads/2023/05/AURORA-01_4077_interior.jpg',
        'https://www.alcantara.com/wp-content/uploads/2023/05/AURORA-02_1001_interior.jpg',
        'https://www.alcantara.com/wp-content/uploads/2023/05/AURORA-03_4077_interior.jpg',
        'https://www.alcantara.com/wp-content/uploads/2023/05/AURORA-04_7941_interior.jpg',
        'https://www.alcantara.com/wp-content/uploads/2023/05/AURORA-05_6475_interior.jpg',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">


      {/* Hero */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <div
            className="h-[60vh] w-full bg-center bg-cover"
            style={{ backgroundImage: 'url(/catalog-banner.png)' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[60vh] grid content-end pb-16">
          <div className="max-w-xl">
            <p className="text-neutral-200 text-xs tracking-[0.2em] mb-3">
              INSPIRATIONS
            </p>
            <h1 className="font-[Gilda_Display] text-4xl sm:text-5xl text-white leading-tight">
              Eco Microfiber Leather For Future Innovation
            </h1>
            <p className="text-neutral-200/90 mt-3 text-sm">
              Certified Vietnam microfiber leather and furniture textile supplier. Premium eco materials with US/EU compliance, small MOQs, and custom solutions. Trusted by automotive, fashion, and interior design industries worldwide.
            </p>
            <a
              href="#catalog"
              className="inline-block mt-6 border-b border-white/80 text-white text-sm pb-1 hover:opacity-80"
            >
              Explore
            </a>
          </div>
        </div>
      </section>

      {/* Moodboard */}
      <section id="moodboard" className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-xl tracking-[0.2em] text-neutral-600">
                DUAL MANUFACTURING — CHINA & VIETNAM
              </h2>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Flexible manufacturing across 8 factories in China and 6 factories in Vietnam. Choose China-based production for cost competitiveness, or Vietnam-based manufacturing for non-China alternatives with enhanced US/EU compliance and certification. Small MOQs, fast lead times, and custom solutions available from both locations. Each collection explores a palette and a craft: laser cut, embossing, perforation, embroidery. Trusted supplier for automotive, fashion, and interior design industries worldwide.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <img
                  src="https://www.alcantara.com/wp-content/uploads/2020/01/alcantara-suggestioni-infinite-2.jpg"
                  alt="Eco microfiber leather texture detail for furniture and automotive applications"
                  className="w-full h-64 object-cover rounded-2xl shadow-sm"
                  loading="lazy"
                />
              </div>
              <div className="col-span-2">
                <img
                  src="https://www.alcantara.com/wp-content/uploads/2020/01/alcantara-moodboard.jpg"
                  alt="Sustainable microfiber leather moodboard showcasing eco fabrics and furniture textiles"
                  className="w-full h-64 md:h-full object-cover rounded-2xl shadow-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections / Textures */}
      <section id="collections" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-xl tracking-[0.2em] text-neutral-600">
            THE TEXTURES
          </h3>
          <div className="mt-8 space-y-10">
            {collections.map((c, i) => (
              <article
                key={i}
                className="rounded-2xl border border-neutral-200 p-4 sm:p-6"
              >
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

      {/* CTA buttons */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'CONTACTS', href: '#contact' },
              { label: 'MATERIAL RANGE', href: '#collections' },
              { label: 'FIND A DISTRIBUTOR', href: '#contact' },
            ].map((b) => (
              <a
                key={b.label}
                href={b.href}
                className="text-center py-3 rounded-xl border border-neutral-300 hover:bg-neutral-100"
              >
                {b.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} VietEcoTex — Microfiber materials
            </p>
            <ul className="flex gap-4 text-neutral-500 text-lg">
              <li>
                <a aria-label="X" href="#" className="hover:text-neutral-800">
                  ✕
                </a>
              </li>
              <li>
                <a
                  aria-label="Instagram"
                  href="#"
                  className="hover:text-neutral-800"
                >
                  ◎
                </a>
              </li>
              <li>
                <a
                  aria-label="YouTube"
                  href="#"
                  className="hover:text-neutral-800"
                >
                  ▶︎
                </a>
              </li>
              <li>
                <a
                  aria-label="LinkedIn"
                  href="#"
                  className="hover:text-neutral-800"
                >
                  in
                </a>
              </li>
            </ul>
          </div>
          <div className="text-xs text-neutral-400 mt-2">
            Built with accessibility, performance, and zero‑jQuery carousels
            (scroll‑snap).
          </div>
        </div>
      </footer>

      {/* Contact anchor */}
      <div id="contact" className="sr-only" />
    </div>
  );
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(catalogWebpageSchema),
        }}
      />
      <AlcantaraInspiredPage />
    </>
  );
}
