import { Metadata } from 'next';
import Link from 'next/link';
import HomePageContent from './homepage-content';

export const metadata: Metadata = {
  title:
    'Microfiber Leather Supplier — Alternative to China Manufacturing | Viet Ecotex',
  description:
    'Vietnam-based microfiber leather and furniture textile supplier — premium alternative to Chinese manufacturing. Eco microfiber leather, sustainable furniture fabrics, PU/PVC leather. Small MOQs, custom colors, US/EU compliant certifications. Ideal for companies seeking reliable non-China suppliers for automotive, fashion, and interior design.',
  keywords: [
    'microfiber leather supplier',
    'furniture textile supplier',
    'alternative to China manufacturing',
    'Vietnam microfiber leather supplier',
    'non-China supplier',
    'microfiber leather manufacturer',
    'furniture textile manufacturer',
    'Vietnam manufacturing alternative',
    'alternative to Chinese suppliers',
    'microfiber leather',
    'eco fabrics',
    'furniture textiles',
    'sustainable leather',
    'PU leather',
    'PVC leather',
    'automotive fabrics',
    'furniture fabrics',
    'Vietnam supplier',
    'alternative supplier',
    'non-China manufacturing',
  ],
  openGraph: {
    title:
      'Microfiber Leather Supplier — Alternative to China Manufacturing | Viet Ecotex',
    description:
      'Vietnam-based microfiber leather and furniture textile supplier — premium alternative to Chinese manufacturing. Small MOQs, US/EU compliant, custom solutions for automotive, fashion, and interior design.',
    url: 'https://vietecotex.com',
  },
  alternates: {
    canonical: '/',
  },
};

export default function Page() {
  return <HomePageContent />;
}
