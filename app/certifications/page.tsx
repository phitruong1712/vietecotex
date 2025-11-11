import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title:
    'US/EU Certifications — Vietnam Supplier Alternative to China | Certifications',
  description:
    'Vietnam-based microfiber leather and furniture textile supplier with US/EU compliant certifications. REACH, RoHS, TB117, BS5852, OEKO-TEX®, and GRS support. Premium alternative to Chinese manufacturing with full compliance documentation.',
  keywords: [
    'Vietnam supplier certifications',
    'alternative to China certifications',
    'US EU compliant supplier',
    'microfiber leather certifications',
    'REACH compliance',
    'RoHS compliance',
    'TB117 certification',
    'BS5852',
    'OEKO-TEX',
    'GRS certification',
    'furniture fabric certifications',
    'US EU compliance',
    'sustainable material certifications',
    'non-China supplier certifications',
    'Vietnam manufacturing certifications',
  ],
  openGraph: {
    title:
      'US/EU Certifications — Vietnam Supplier Alternative to China | Certifications',
    description:
      'Vietnam-based supplier with US/EU compliant certifications. REACH, RoHS, TB117, BS5852, OEKO-TEX®, and GRS support. Premium alternative to Chinese manufacturing.',
    url: 'https://vietecotex.com/certifications',
  },
  alternates: {
    canonical: '/certifications',
  },
};

const certs = [
  {
    src: '/certifications/sgs_tb117.png',
    name: 'SGS TB117 (Upholstered Furniture)',
  },
  {
    src: '/certifications/grs_scope.png',
    name: 'GRS Scope Certificate',
  },
  {
    src: '/certifications/grs_products.png',
    name: 'GRS Products Appendix',
  },
  {
    src: '/certifications/grs_facility.png',
    name: 'GRS Facility Appendix',
  },
  {
    src: '/certifications/bio_based.png',
    name: 'Bio-based Carbon Content (Beta Analytic, USA)',
  },
  {
    src: '/certifications/bio_based_summary.png',
    name: 'Bio-based Carbon Content — Summary',
  },
];

export default function Certifications() {
  // ALL STRUCTURED DATA REMOVED - This page is informational only, NOT a product page
  return (
    <section className="container-xl py-10 md:py-14">
      <h1 className="font-serif text-3xl md:text-4xl mb-2">
        US/EU Certified Vietnam Leather & Textile Supplier
      </h1>
      <p className="text-neutral-700 max-w-3xl">
        As a Vietnam-based supplier, we provide comprehensive third-party testing and certificates as
        required for US/EU buyers. Full compliance documentation including REACH
        & RoHS chemical compliance, TB117/BS5852 flammability for upholstery,
        OEKO-TEX®, and GRS support via partners. Complete certification transparency for global buyers seeking trusted, compliant suppliers. Below is a
        sample of documents.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {certs.map((c) => (
          <figure key={c.name} className="card p-3">
            <div className="relative h-48">
              <Image
                src={c.src}
                alt={`${c.name} certification for eco microfiber leather and furniture fabrics`}
                fill
                className="object-contain"
              />
            </div>
            <figcaption className="text-xs mt-2 text-neutral-600">
              {c.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
