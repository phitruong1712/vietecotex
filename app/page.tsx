import { Metadata } from 'next';
import Link from 'next/link';
import HomePageContent from './homepage-content';

export const metadata: Metadata = {
  title:
    'Microfiber Leather Supplier — Alternative to China Manufacturing | Viet Ecotex',
  description:
    'Dual manufacturing capabilities: 8 factories in China for cost competitiveness, 6 factories in Vietnam for non-China alternatives with enhanced US/EU compliance. Microfiber leather and furniture textile supplier offering flexible sourcing options. Small MOQs, custom colors, US/EU compliant certifications. Ideal for companies seeking flexible manufacturing solutions for automotive, fashion, and interior design.',
  keywords: [
    'microfiber leather supplier',
    'furniture textile supplier',
    'dual manufacturing China Vietnam',
    'China manufacturing microfiber leather',
    'Vietnam manufacturing microfiber leather',
    'alternative to China manufacturing',
    'Vietnam microfiber leather supplier',
    'non-China supplier',
    'microfiber leather manufacturer',
    'furniture textile manufacturer',
    'Vietnam manufacturing alternative',
    'alternative to Chinese suppliers',
    'China Vietnam manufacturing',
    'flexible manufacturing supplier',
    'microfiber leather',
    'eco fabrics',
    'furniture textiles',
    'sustainable leather',
    'PU leather',
    'PVC leather',
    'automotive fabrics',
    'furniture fabrics',
    'Vietnam supplier',
    'China supplier',
    'alternative supplier',
    'non-China manufacturing',
  ],
  openGraph: {
    title:
      'Microfiber Leather Supplier — Alternative to China Manufacturing | Viet Ecotex',
    description:
      'Dual manufacturing: 8 factories in China, 6 factories in Vietnam. Flexible sourcing options for cost competitiveness or enhanced compliance. Small MOQs, US/EU compliant, custom solutions for automotive, fashion, and interior design.',
    url: 'https://vietecotex.com',
  },
  alternates: {
    canonical: '/',
  },
};

export default function Page() {
  return <HomePageContent />;
}
