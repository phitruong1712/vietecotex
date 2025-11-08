import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Advantages — Customization, Quality, Reliability & Competitive Pricing',
  description:
    'Viet Ecotex advantages: customization, tailor-made solutions, timely delivery, reliability, high warranty, small MOQs, high quality, competitive pricing, and dual manufacturing in China and Vietnam. Serving 1500+ customers.',
  keywords: [
    'custom microfiber leather',
    'small MOQ leather supplier',
    'reliable leather manufacturer',
    'competitive pricing microfiber',
    'custom leather solutions',
    'timely delivery leather',
    'high warranty leather',
    'tailor-made leather',
  ],
  openGraph: {
    title: 'Our Advantages — Customization, Quality, Reliability & Competitive Pricing',
    description:
      'Customization, tailor-made solutions, timely delivery, reliability, high warranty, small MOQs, high quality, and competitive pricing.',
    url: 'https://vietecotex.com/advantages',
  },
  alternates: {
    canonical: '/advantages',
  },
};

const advantages = [
  {
    title: 'Customization & Tailor-Made',
    description:
      'We specialize in customizing our materials to meet your exact specifications. From colors and textures to thickness and backing, we can tailor our microfiber leather and fabrics to your unique requirements.',
    icon: '✂️',
  },
  {
    title: 'Timely Delivery',
    description:
      'Our efficient production processes and dual manufacturing capabilities ensure timely delivery. We understand the importance of meeting deadlines and work closely with customers to ensure on-time delivery.',
    icon: '⏱️',
  },
  {
    title: 'Reliability',
    description:
      'With 1500+ customers and years of experience, we have built a reputation for reliability. Our consistent quality and dependable service make us a trusted partner for businesses worldwide.',
    icon: '✓',
  },
  {
    title: 'High Warranty',
    description:
      'We stand behind our products with comprehensive warranties. Our high-quality materials are backed by strong warranty terms, giving you confidence in your purchase.',
    icon: '🛡️',
  },
  {
    title: 'Small MOQs Accepted',
    description:
      'Unlike many competitors, we welcome small orders. Whether you need a trial quantity or a small batch, we accommodate orders of all sizes to help you get started.',
    icon: '📦',
  },
  {
    title: 'High Quality Products',
    description:
      'Quality is at the core of everything we do. Our materials undergo rigorous testing and quality control to ensure they meet the highest standards for durability, appearance, and performance.',
    icon: '⭐',
  },
  {
    title: 'Competitive Pricing',
    description:
      'We offer better pricing compared to competitors without compromising on quality. Our efficient manufacturing processes and dual location strategy allow us to provide competitive rates.',
    icon: '💰',
  },
  {
    title: 'Dual Manufacturing',
    description:
      'Choose between 8 factories in China for cost competitiveness or 6 factories in Vietnam for enhanced compliance. This flexibility allows you to select the best option for your needs.',
    icon: '🌏',
  },
];

export default function AdvantagesPage() {
  return (
    <section className="container-xl py-10 md:py-20">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">
          Our Competitive Advantages
        </h1>
        <p className="text-neutral-700 max-w-3xl mx-auto text-lg">
          What sets Viet Ecotex apart? Our commitment to customization, quality,
          reliability, and customer satisfaction. With <strong>1500+ customers</strong>{' '}
          trusting us for their microfiber leather and furniture fabric needs, we
          have proven our ability to deliver excellence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {advantages.map((advantage, index) => (
          <div key={index} className="card p-6">
            <div className="text-4xl mb-4">{advantage.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
            <p className="text-neutral-700 text-sm leading-relaxed">
              {advantage.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-neutral-50 rounded-2xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif mb-4 text-center">
            Why Choose Viet Ecotex?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="font-semibold mb-3">Proven Track Record</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>• 1500+ customers in Vietnam</li>
                <li>• 70-80% customers in automotive (car seats)</li>
                <li>• 20% customers from construction tenders</li>
                <li>• Distributors and resellers worldwide</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Manufacturing Strength</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>• 8 factories in China</li>
                <li>• 6 factories in Vietnam</li>
                <li>• Flexible sourcing options</li>
                <li>• Dual location benefits</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href="/contact" className="btn btn-primary">
          Experience Our Advantages
        </Link>
      </div>
    </section>
  );
}

