import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Commitment — Sustainable Microfiber Leather & Furniture Fabrics',
  description:
    'Viet Ecotex offers Vietnam-based manufacturing with China back-up. Small MOQs, customization, and US/EU-compliant certifications for eco microfiber leather and furniture fabrics.',
  keywords: [
    'sustainable microfiber leather',
    'eco furniture fabrics',
    'Vietnam manufacturing',
    'small MOQ',
    'custom microfiber leather',
    'US EU compliant',
    'sustainable materials',
  ],
  openGraph: {
    title: 'Our Commitment — Sustainable Microfiber Leather & Furniture Fabrics',
    description:
      'Vietnam-based manufacturing with China back-up. Small MOQs, customization, and US/EU-compliant certifications.',
    url: 'https://vietecotex.com/our-commitment',
  },
  alternates: {
    canonical: '/our-commitment',
  },
};

export default function OurCommitmentPage() {
  return (
    <section className="container-xl py-20 text-center">
      <h1 className="display">Microfiber Leather & Furniture Fabrics</h1>
      <p className="max-w-2xl mx-auto mt-5 text-neutral-700">
        Vietnam-based manufacturing with China back-up. Small MOQs,
        customization, and US/EU-compliant certifications.
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
