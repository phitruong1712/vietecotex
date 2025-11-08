import { Metadata } from 'next';
import ContactForm from './contact-form';

export const metadata: Metadata = {
  title: 'Request Quote & Samples — Contact Viet Ecotex',
  description:
    'Request a quote or samples for eco microfiber leather and furniture fabrics. Contact Viet Ecotex for custom colors, grains, and specifications. Small MOQs available.',
  keywords: [
    'microfiber leather quote',
    'furniture fabric samples',
    'eco leather RFQ',
    'custom microfiber leather',
    'furniture textile samples',
    'sustainable material quote',
  ],
  openGraph: {
    title: 'Request Quote & Samples — Contact Viet Ecotex',
    description:
      'Get a quote or request samples for eco microfiber leather and furniture fabrics. Custom colors, grains, and specifications available.',
    url: 'https://vietecotex.com/contact',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <section className="container-xl py-10 md:py-14">
      <h1 className="font-serif text-3xl md:text-4xl">
        Request for Quote & Samples
      </h1>
      <p className="text-neutral-700 max-w-3xl mt-2">
        Fill the form below and we&apos;ll reply within 24 hours. You can also
        reach us at{' '}
        <a className="underline" href="mailto:contact@vietecotex.com">
          contact@vietecotex.com
        </a>{' '}
        or WhatsApp/Viber{' '}
        <a className="underline" href="tel:+84976344224">
          +84 976 344 224
        </a>
        .
      </p>
      <ContactForm />
    </section>
  );
}
