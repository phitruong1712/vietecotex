import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Distributors & Partners — Become a Reseller or Agency Partner',
  description:
    'Join Viet Ecotex as a distributor, reseller, or agency partner. Expand your business with premium microfiber leather and furniture fabrics. Competitive pricing, marketing support, and exclusive partner benefits.',
  keywords: [
    'leather distributor',
    'fabric reseller',
    'leather agency partner',
    'become a distributor',
    'reseller program',
    'leather wholesale',
    'fabric wholesale',
  ],
  openGraph: {
    title: 'Distributors & Partners — Become a Reseller or Agency Partner',
    description:
      'Join Viet Ecotex as a distributor, reseller, or agency partner. Competitive pricing and marketing support.',
    url: 'https://vietecotex.com/distributors',
  },
  alternates: {
    canonical: '/distributors',
  },
};

export default function DistributorsPage() {
  // Explicit WebPage schema to prevent Google from inferring Product schemas
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Distributors & Partners — Vietnam Microfiber Leather Supplier',
    description:
      'Become an authorized distributor or partner with Viet Ecotex. Access our full product range, competitive pricing, and comprehensive support for microfiber leather and furniture fabrics.',
    url: 'https://vietecotex.com/distributors',
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
          Distributors & Partners
        </h1>
        <p className="text-neutral-700 max-w-3xl mx-auto text-lg">
          Expand your business with Viet Ecotex. We're looking for distributors,
          resellers, and agency partners to join our growing network. Benefit from
          competitive pricing, marketing support, and exclusive partner advantages.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="card p-8 text-center">
          <div className="text-4xl mb-4">📦</div>
          <h3 className="text-xl font-semibold mb-4">Distributors</h3>
          <p className="text-neutral-700 mb-6">
            Become an authorized distributor and access our full product range with
            competitive wholesale pricing. Serve your local market with premium
            microfiber leather and furniture fabrics.
          </p>
          <ul className="text-left text-sm text-neutral-600 space-y-2 mb-6">
            <li>• Wholesale pricing</li>
            <li>• Full product catalog access</li>
            <li>• Marketing materials</li>
            <li>• Technical support</li>
          </ul>
        </div>

        <div className="card p-8 text-center">
          <div className="text-4xl mb-4">🛒</div>
          <h3 className="text-xl font-semibold mb-4">Resellers</h3>
          <p className="text-neutral-700 mb-6">
            Resell our products through your channels. Whether you operate online
            stores (Amazon, Shopify) or physical retail locations, we provide the
            support you need to succeed.
          </p>
          <ul className="text-left text-sm text-neutral-600 space-y-2 mb-6">
            <li>• Flexible ordering</li>
            <li>• Small MOQs</li>
            <li>• Product documentation</li>
            <li>• Sales support</li>
          </ul>
        </div>

        <div className="card p-8 text-center">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-semibold mb-4">Agency Partners</h3>
          <p className="text-neutral-700 mb-6">
            Partner with us as an agency to represent Viet Ecotex in your region.
            Build relationships with customers and earn competitive commissions.
          </p>
          <ul className="text-left text-sm text-neutral-600 space-y-2 mb-6">
            <li>• Commission-based</li>
            <li>• Exclusive territories</li>
            <li>• Sales training</li>
            <li>• Ongoing support</li>
          </ul>
        </div>
      </div>

      <div className="bg-neutral-50 rounded-2xl p-8 md:p-12 mb-12">
        <h2 className="text-2xl font-serif mb-6 text-center">
          Partner Benefits
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="font-semibold mb-4">Business Support</h3>
            <ul className="space-y-2 text-neutral-700">
              <li>• Competitive pricing structures</li>
              <li>• Marketing materials and catalogs</li>
              <li>• Technical documentation</li>
              <li>• Product training</li>
              <li>• Sales support</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Operational Advantages</h3>
            <ul className="space-y-2 text-neutral-700">
              <li>• Flexible ordering (small MOQs)</li>
              <li>• Timely delivery</li>
              <li>• Customization support</li>
              <li>• Quality assurance</li>
              <li>• Warranty coverage</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-serif mb-4">Interested in Partnering?</h2>
        <p className="text-neutral-700 mb-8 max-w-2xl mx-auto">
          Contact us to discuss partnership opportunities. We're looking for
          committed partners who share our commitment to quality and customer
          satisfaction.
        </p>
        <Link href="/contact" className="btn btn-primary">
          Become a Partner
        </Link>
      </div>
    </section>
    </>
  );
}

