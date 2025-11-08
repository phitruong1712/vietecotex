import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'Vietnam Manufacturing — Alternative to China Supplier | Our Commitment',
  description:
    'Dual manufacturing capabilities: 8 factories in China for cost competitiveness, 6 factories in Vietnam for non-China alternatives with enhanced US/EU compliance. Flexible manufacturing solutions with small MOQs, fast lead times, and custom solutions.',
  keywords: [
    'dual manufacturing China Vietnam',
    'China manufacturing microfiber leather',
    'Vietnam manufacturing microfiber leather',
    'Vietnam manufacturing',
    'China manufacturing',
    'alternative to China manufacturing',
    'Vietnam supplier',
    'China supplier',
    'non-China supplier',
    'microfiber leather supplier Vietnam',
    'microfiber leather supplier China',
    'furniture textile supplier Vietnam',
    'alternative to Chinese suppliers',
    'Vietnam manufacturing alternative',
    'flexible manufacturing supplier',
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
      'Dual manufacturing: 8 factories in China, 6 factories in Vietnam. Flexible sourcing for cost competitiveness or enhanced compliance. Small MOQs, fast lead times, US/EU compliant.',
    url: 'https://vietecotex.com/our-commitment',
  },
  alternates: {
    canonical: '/our-commitment',
  },
};

export default function OurCommitmentPage() {
  return (
    <section className="container-xl py-20">
      <div className="text-center mb-16">
        <h1 className="display">
          Dual Manufacturing Capabilities — China & Vietnam
        </h1>
        <p className="max-w-3xl mx-auto mt-5 text-neutral-700">
          We offer flexible manufacturing solutions across both China and Vietnam,
          giving you the choice between cost competitiveness and premium compliance.
          With 8 factories in China and 6 factories in Vietnam, we provide the
          flexibility to meet your specific needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* China Manufacturing */}
        <div className="card p-8">
          <h2 className="text-2xl font-serif mb-4">China Manufacturing</h2>
          <div className="mb-4">
            <span className="text-4xl font-bold text-neutral-900">8</span>
            <span className="text-neutral-600 ml-2">Factories</span>
          </div>
          <ul className="space-y-3 text-neutral-700">
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Cost-competitive production</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Large-scale manufacturing capacity</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Established supply chain networks</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Fast turnaround times</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Small MOQs available</span>
            </li>
          </ul>
        </div>

        {/* Vietnam Manufacturing */}
        <div className="card p-8">
          <h2 className="text-2xl font-serif mb-4">Vietnam Manufacturing</h2>
          <div className="mb-4">
            <span className="text-4xl font-bold text-neutral-900">6</span>
            <span className="text-neutral-600 ml-2">Factories</span>
          </div>
          <ul className="space-y-3 text-neutral-700">
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>US/EU certified compliance</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Non-China alternative for supply chain diversification</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Enhanced certification documentation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Premium quality standards</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Small MOQs and custom solutions</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 max-w-3xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-4">Why Choose Our Dual Manufacturing?</h3>
        <p className="text-neutral-700 mb-6">
          Our dual manufacturing capability gives you the flexibility to choose the
          best option for your business needs. Whether you prioritize cost
          competitiveness with China-based production or require enhanced compliance
          and certification with Vietnam-based manufacturing, we have the capacity and
          expertise to deliver.
        </p>
        <p className="text-neutral-700">
          Both manufacturing locations offer small MOQs, custom solutions, and fast
          lead times. We can also support mixed sourcing strategies, allowing you to
          leverage the strengths of both locations for different product lines or
          market requirements.
        </p>
      </div>

      <div className="mt-12 flex items-center justify-center gap-3">
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
