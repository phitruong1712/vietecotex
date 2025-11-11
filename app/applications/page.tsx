import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Applications — Microfiber Leather for Automotive, Furniture, Fashion & Construction',
  description:
    'Viet Ecotex microfiber leather and furniture fabrics for car seats, sofas, shoes, bags, and construction projects. Serving 1500+ customers in automotive (70-80%), furniture, footwear, fashion, and construction tenders (hotels, resorts, apartments).',
  keywords: [
    'microfiber leather car seats',
    'faux leather sofas',
    'PU leather shoes',
    'PVC leather bags',
    'microfiber leather construction',
    'hotel furniture fabrics',
    'resort textiles',
    'apartment upholstery',
    'automotive leather supplier',
    'furniture leather manufacturer',
    'shoe leather supplier',
    'bag leather manufacturer',
    'construction textiles',
    'tender supplier Vietnam',
  ],
  openGraph: {
    title: 'Applications — Microfiber Leather for Automotive, Furniture, Fashion & Construction',
    description:
      'Microfiber leather and furniture fabrics for car seats, sofas, shoes, bags, and construction projects. Serving 1500+ customers worldwide.',
    url: 'https://vietecotex.com/applications',
  },
  alternates: {
    canonical: '/applications',
  },
};

const applications = [
  {
    title: 'Automotive — Car Seats',
    description:
      'Premium microfiber leather for automotive interiors. Our materials are trusted by manufacturers worldwide for durability, comfort, and aesthetic appeal. Perfect for car seats, headrests, armrests, and interior panels.',
    features: [
      'Automotive-grade durability',
      'UV resistance',
      'Easy cleaning and maintenance',
      'Wide range of colors and textures',
      'US/EU compliance (REACH, RoHS)',
      'Custom specifications available',
    ],
    percentage: '70-80% of our customers',
    image: '/applications/automotive.jpg', // Placeholder - replace with actual image
  },
  {
    title: 'Furniture — Sofas & Upholstery',
    description:
      'High-quality microfiber leather and furniture fabrics for residential and commercial furniture. Ideal for sofas, chairs, ottomans, and other upholstered furniture pieces.',
    features: [
      'Soft and comfortable',
      'Scratch and stain resistant',
      'Fire retardant options (TB117, BS5852)',
      'Wide color palette',
      'Custom patterns and textures',
      'Small MOQs available',
    ],
    percentage: 'Major customer segment',
    image: '/applications/furniture.jpg', // Placeholder - replace with actual image
  },
  {
    title: 'Footwear — Shoes',
    description:
      'Durable and flexible microfiber leather for shoe manufacturing. Perfect for athletic shoes, casual footwear, boots, and fashion shoes. Customizable thickness and texture.',
    features: [
      'Flexible and durable',
      'Breathable options',
      'Water-resistant varieties',
      'Custom colors and grains',
      'OEKO-TEX certified options',
      'Competitive pricing',
    ],
    percentage: 'Growing customer base',
    image: '/applications/footwear.jpg', // Placeholder - replace with actual image
  },
  {
    title: 'Fashion — Bags & Accessories',
    description:
      'Premium microfiber leather for handbags, backpacks, wallets, and fashion accessories. High-quality materials that mimic genuine leather at a fraction of the cost.',
    features: [
      'Premium appearance',
      'Lightweight',
      'Durable construction',
      'Custom branding options',
      'Wide range of finishes',
      'Fashion-forward colors',
    ],
    percentage: 'Fashion industry customers',
    image: '/applications/fashion.jpg', // Placeholder - replace with actual image
  },
  {
    title: 'Construction — Hotels, Resorts & Apartments',
    description:
      'Specialized textiles and fabrics for construction tenders. We supply materials for hotel projects, resorts, civil housing construction, and apartment developments. Trusted supplier for construction sub-tenders.',
    features: [
      'Bulk order capability',
      'Project-specific specifications',
      'Timely delivery for construction schedules',
      'Certified materials (REACH, RoHS, TB117, BS5852)',
      'Custom solutions for large projects',
      'Tender documentation support',
    ],
    percentage: '20% of customers from tenders',
    image: '/applications/construction.jpg', // Placeholder - replace with actual image
  },
];

export default function ApplicationsPage() {
  // Explicit WebPage schema to prevent Google from inferring Product schemas
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Applications — Microfiber Leather for Automotive, Furniture, Fashion & Construction',
    description:
      'Viet Ecotex microfiber leather and furniture fabrics for car seats, sofas, shoes, bags, and construction projects. Serving 1500+ customers in automotive (70-80%), furniture, footwear, fashion, and construction tenders.',
    url: 'https://vietecotex.com/applications',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Viet Ecotex',
      url: 'https://vietecotex.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <section className="container-xl py-10 md:py-20">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">
          Applications & Industries
        </h1>
        <p className="text-neutral-700 max-w-3xl mx-auto text-lg">
          Serving <strong>1500+ customers</strong> across multiple industries. Our
          microfiber leather and furniture fabrics are trusted by manufacturers
          worldwide for automotive, furniture, footwear, fashion, and construction
          applications.
        </p>
      </div>

      <div className="space-y-16">
        {applications.map((app, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className={index % 2 === 1 ? 'md:order-2' : ''}>
              <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-neutral-400">
                  <span className="text-sm">Application Image: {app.title}</span>
                </div>
              </div>
            </div>
            <div className={index % 2 === 1 ? 'md:order-1' : ''}>
              <div className="mb-2">
                <span className="text-xs tracking-widest text-neutral-500 uppercase">
                  {app.percentage}
                </span>
              </div>
              <h2 className="text-3xl font-serif mb-4">{app.title}</h2>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                {app.description}
              </p>
              <ul className="space-y-2 mb-6">
                {app.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-block btn btn-primary"
              >
                Request Quote
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-neutral-50 rounded-2xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-serif mb-4">
            Custom Applications Welcome
          </h2>
          <p className="text-neutral-700 mb-6">
            Have a specific application not listed above? We specialize in
            customization and can tailor our materials to meet your exact
            requirements. Our team works closely with customers to develop
            solutions for unique applications.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Discuss Your Application
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}

