import { Metadata } from 'next';
import Link from 'next/link';
import HomePageContent from './homepage-content';

export const metadata: Metadata = {
  title: 'Viet Ecotex — Eco Microfiber Leather & Sustainable Furniture Fabrics',
  description:
    'Premium eco microfiber leather and sustainable furniture fabrics for automotive, fashion, and interior design. Custom colors, grains, and specifications. Small MOQs. US/EU compliant. Vietnam + China manufacturing.',
  keywords: [
    'microfiber leather',
    'eco fabrics',
    'furniture textiles',
    'sustainable leather',
    'PU leather',
    'PVC leather',
    'automotive fabrics',
    'furniture fabrics',
    'eco-friendly materials',
    'sustainable microfiber',
    'furniture leather',
    'eco textiles',
    'green materials',
    'sustainable furniture fabrics',
    'microfiber fabric',
  ],
  openGraph: {
    title: 'Viet Ecotex — Eco Microfiber Leather & Sustainable Furniture Fabrics',
    description:
      'Premium eco microfiber leather and sustainable furniture fabrics for automotive, fashion, and interior design. Custom colors, grains, and specifications.',
    url: 'https://vietecotex.com',
  },
  alternates: {
    canonical: '/',
  },
};

export default function Page() {
  return <HomePageContent />;
}
