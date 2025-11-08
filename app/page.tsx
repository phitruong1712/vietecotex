import { Metadata } from 'next';
import Link from 'next/link';
import HomePageContent from './homepage-content';

export const metadata: Metadata = {
  title:
    'Microfiber Leather Supplier — Alternative to China Manufacturing | Viet Ecotex',
  description:
    'Serving 1500+ customers worldwide. Premium microfiber leather (PU/PVC) and furniture fabrics manufacturer. 80% microfiber leather, 20% furniture fabrics. Applications: car seats, sofas, shoes, bags, construction. Advantages: customization, small MOQs, timely delivery, reliability, high warranty, competitive pricing. 8 factories in China, 6 factories in Vietnam.',
  keywords: [
    'microfiber leather supplier',
    'faux leather manufacturer',
    'PU leather supplier',
    'PVC leather manufacturer',
    'furniture textile supplier',
    'car seat leather',
    'sofa leather supplier',
    'shoe leather manufacturer',
    'bag leather supplier',
    'construction textiles',
    'hotel furniture fabrics',
    'resort textiles',
    '1500 customers',
    'microfiber leather Vietnam',
    'furniture fabrics China',
    'dual manufacturing China Vietnam',
    'China manufacturing microfiber leather',
    'Vietnam manufacturing microfiber leather',
    'alternative to China manufacturing',
    'Vietnam microfiber leather supplier',
    'non-China supplier',
    'microfiber leather manufacturer',
    'furniture textile manufacturer',
    'small MOQ leather',
    'custom leather supplier',
    'eco leather',
    'sustainable microfiber',
    'competitive pricing leather',
    'reliable leather supplier',
    'Vietnam supplier',
    'China supplier',
  ],
  openGraph: {
    title:
      'Microfiber Leather Supplier — Alternative to China Manufacturing | Viet Ecotex',
    description:
      'Serving 1500+ customers worldwide. Premium microfiber leather (80%) and furniture fabrics (20%) for car seats, sofas, shoes, bags, and construction. Customization, small MOQs, timely delivery, reliability, competitive pricing.',
    url: 'https://vietecotex.com',
  },
  alternates: {
    canonical: '/',
  },
};

export default function Page() {
  return <HomePageContent />;
}
