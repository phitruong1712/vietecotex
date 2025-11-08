import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'Vietnam Manufacturing — Alternative to China Supplier | Our Commitment',
  description:
    'Vietnam-based microfiber leather and furniture textile supplier — premium alternative to Chinese manufacturing. Small MOQs, fast lead times, US/EU compliant certifications, custom solutions. Ideal for companies seeking reliable non-China suppliers.',
  keywords: [
    'Vietnam manufacturing',
    'alternative to China manufacturing',
    'Vietnam supplier',
    'non-China supplier',
    'microfiber leather supplier Vietnam',
    'furniture textile supplier Vietnam',
    'alternative to Chinese suppliers',
    'Vietnam manufacturing alternative',
    'small MOQ',
    'custom microfiber leather',
    'US EU compliant',
    'sustainable materials',
    'Vietnam microfiber leather',
    'non-China manufacturing',
  ],
  openGraph: {
    title:
      'Vietnam Manufacturing — Alternative to China Supplier | Our Commitment',
    description:
      'Vietnam-based microfiber leather and furniture textile supplier — premium alternative to Chinese manufacturing. Small MOQs, fast lead times, US/EU compliant.',
    url: 'https://vietecotex.com/our-commitment',
  },
  alternates: {
    canonical: '/our-commitment',
  },
};

export default function OurCommitmentPage() {
  return (
    <section className="container-xl py-20 text-center">
      <h1 className="display">
        Certified Vietnam Leather & Textile Supplier
      </h1>
      <p className="max-w-2xl mx-auto mt-5 text-neutral-700">
        Vietnam-based microfiber leather and furniture textile supplier offering
        premium eco materials with US/EU certified compliance. Small MOQs, fast lead
        times, customization, and comprehensive certification documentation. Trusted by
        companies worldwide seeking reliable suppliers with flexible production
        capabilities, quality assurance, and full compliance transparency.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <Link className="btn btn-primary" href="/contact">
          Request Quote / Samples
        </Link>
        <Link className="btn btn-outline" href="/">
          Explore Catalog
        </Link>
      </div>
    </section>
  );
}
