import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Faux Leather vs Microfiber Leather - What's the Difference? | Viet Ecotex",
  description:
    'Learn what people mean by faux leather (vegan/synthetic/PU) and how microfiber leather compares on durability, feel, and sustainability. Premium eco microfiber leather for automotive, furniture, and fashion applications.',
  keywords: [
    'faux leather',
    'microfiber leather',
    'vegan leather',
    'synthetic leather',
    'PU leather',
    'PVC leather',
    'leatherette',
    'eco leather',
    'faux leather vs microfiber',
    'vegan leather alternative',
    'synthetic leather supplier',
    'microfiber leather manufacturer',
  ],
  openGraph: {
    title: "Faux Leather vs Microfiber Leather - What's the Difference?",
    description:
      'Learn what people mean by faux leather and how microfiber leather compares on durability, feel, and sustainability.',
    url: 'https://vietecotex.com/faux-leather',
  },
  alternates: { canonical: '/faux-leather' },
};

export default function FauxLeatherPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is faux leather the same as microfiber leather?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Faux leather is a broad term for non-animal leather alternatives (PU, PVC, microfiber). Microfiber leather is a premium type engineered with ultra-fine fibers for better feel and durability.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is microfiber leather vegan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Microfiber leather is animal-free and is often chosen as a vegan leather option.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is microfiber leather used?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Automotive interiors, furniture upholstery, and fashion accessories where consistent appearance, light weight, and durability are important.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you supply samples and color cards?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Contact Viet Ecotex for swatches, technical data, MOQ, and lead time. We serve 1500+ customers worldwide with small MOQs and custom solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between PU leather and microfiber leather?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PU leather is a basic synthetic leather made from polyurethane. Microfiber leather is a premium engineered material with ultra-fine fibers that creates a more natural leather-like feel, better durability, and superior consistency.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is microfiber leather suitable for automotive applications?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Microfiber leather is widely used in automotive interiors for seats, door panels, dashboards, and steering wheels due to its durability, consistent appearance, and premium feel. 70-80% of our customers use our materials for automotive applications.',
        },
      },
    ],
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Furniture Textiles',
    description:
      'Furniture fabrics for sofas, chairs, and upholstery. Available from 8 factories in China or 6 factories in Vietnam. Customization, small MOQs, competitive pricing.',
    category: 'Textiles',
    image: 'https://vietecotex.com/logo.png',
    brand: {
      '@type': 'Brand',
      name: 'Viet Ecotex',
    },
    offers: {
      '@type': 'Offer',
      price: 12.50,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://vietecotex.com/contact',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <section className="container-xl py-10 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl mb-4">
              Faux Leather vs Microfiber Leather: What's the Difference?
            </h1>
            <p className="text-neutral-700 max-w-3xl mx-auto text-lg">
              Many shoppers search for <strong>faux leather</strong> when they mean
              any <em>non-animal</em> leather alternative—often including{' '}
              <strong>vegan leather</strong>, <strong>synthetic leather</strong>,{' '}
              <strong>leatherette</strong>, <strong>PU leather</strong>, or{' '}
              <strong>microfiber leather</strong>. This guide explains the differences
              and why <strong>eco microfiber leather</strong> is a premium choice for
              automotive, furniture, and fashion.
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-serif mb-4">What people mean by &ldquo;faux leather&rdquo;</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                &ldquo;Faux leather&rdquo; is an umbrella term. It can refer to
                entry-level PU/PVC materials, or to advanced <strong>microfiber</strong>{' '}
                constructions that emulate the fiber structure of natural leather for
                better handfeel and performance.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif mb-4">Microfiber leather at a glance</h2>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span><strong>Premium handfeel</strong> (including microfiber suede).</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span><strong>Lightweight & durable</strong> with high abrasion resistance.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span><strong>Consistent color & texture</strong>—ideal for large panels.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span><strong>Animal-free</strong> and designed for modern manufacturing.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span>Options for <em>automotive interiors</em>, <em>furniture upholstery</em>,
                  and <em>bags & accessories</em>.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-serif mb-6">Faux leather vs. microfiber leather</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-neutral-300">
                  <thead>
                    <tr className="bg-neutral-50">
                      <th className="border border-neutral-300 px-4 py-3 text-left font-semibold">Criteria</th>
                      <th className="border border-neutral-300 px-4 py-3 text-left font-semibold">Generic &ldquo;Faux Leather&rdquo; (PU/PVC)</th>
                      <th className="border border-neutral-300 px-4 py-3 text-left font-semibold">Microfiber Leather (Eco)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-300 px-4 py-3 text-neutral-700">Touch & appearance</td>
                      <td className="border border-neutral-300 px-4 py-3 text-neutral-700">Can feel plasticky; gloss varies</td>
                      <td className="border border-neutral-300 px-4 py-3 text-neutral-700">Leather-like grain or suede-like nap; premium feel</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 px-4 py-3 text-neutral-700">Durability / abrasion</td>
                      <td className="border border-neutral-300 px-4 py-3 text-neutral-700">Entry-level to mid</td>
                      <td className="border border-neutral-300 px-4 py-3 text-neutral-700">High for seating & steering touch points</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 px-4 py-3 text-neutral-700">Weight</td>
                      <td className="border border-neutral-300 px-4 py-3 text-neutral-700">Moderate to heavy</td>
                      <td className="border border-neutral-300 px-4 py-3 text-neutral-700">Lightweight</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 px-4 py-3 text-neutral-700">Consistency</td>
                      <td className="border border-neutral-300 px-4 py-3 text-neutral-700">Batch variations possible</td>
                      <td className="border border-neutral-300 px-4 py-3 text-neutral-700">Excellent consistency across lots</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 px-4 py-3 text-neutral-700">Applications</td>
                      <td className="border border-neutral-300 px-4 py-3 text-neutral-700">Fashion, cost-sensitive items</td>
                      <td className="border border-neutral-300 px-4 py-3 text-neutral-700">Automotive, furniture, premium goods</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif mb-4">Use cases</h2>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">•</span>
                  <span><strong>Automotive:</strong> seats, door cards, dashboards, headliners, steering wraps</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">•</span>
                  <span><strong>Furniture:</strong> sofas, office chairs, hospitality seating</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">•</span>
                  <span><strong>Goods:</strong> bags, small leather goods, footwear panels</span>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl font-serif mb-4">Why choose Viet Ecotex microfiber leather?</h2>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span><strong>1500+ customers</strong> trust our materials for automotive,
                  furniture, footwear, and construction applications</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span><strong>80% microfiber leather focus</strong>—specialized expertise in
                  premium materials</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span><strong>Dual manufacturing</strong>—8 factories in China, 6 factories
                  in Vietnam for flexibility</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span><strong>Customization</strong>—tailor-made solutions for your specific
                  needs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span><strong>Small MOQs</strong>—we welcome trial orders and small batches</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span><strong>US/EU compliance</strong>—certified materials meeting global
                  standards</span>
                </li>
              </ul>
            </div>

            <div className="text-center pt-8">
              <h2 className="text-2xl font-serif mb-4">Next steps</h2>
              <p className="text-neutral-700 mb-6">
                Explore our <Link href="/catalog" className="underline hover:text-neutral-900">catalog</Link> or{' '}
                <Link href="/contact" className="underline hover:text-neutral-900">contact us</Link> for samples, MOQ, and color
                cards.
              </p>
              <Link href="/contact" className="inline-block btn btn-primary">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
