import { Metadata } from 'next';
import ContactForm from './contact-form';

export const metadata: Metadata = {
  title:
    'Request Quote — Vietnam Microfiber Leather Supplier | Contact Us',
  description:
    'Request a quote or samples from Vietnam-based microfiber leather and furniture textile supplier — premium alternative to Chinese manufacturing. Custom colors, grains, and specifications. Small MOQs, US/EU compliant. Fast response for companies seeking non-China suppliers.',
  keywords: [
    'microfiber leather quote',
    'furniture fabric samples',
    'Vietnam supplier quote',
    'alternative to China quote',
    'microfiber leather RFQ',
    'furniture textile RFQ',
    'Vietnam manufacturer contact',
    'non-China supplier contact',
    'custom microfiber leather',
    'furniture textile samples',
    'sustainable material quote',
    'Vietnam microfiber leather supplier',
  ],
  openGraph: {
    title:
      'Request Quote — Vietnam Microfiber Leather Supplier | Contact Us',
    description:
      'Get a quote or request samples from Vietnam-based microfiber leather and furniture textile supplier. Premium alternative to Chinese manufacturing. Custom colors, grains, and specifications available.',
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
        Request Quote — Certified Vietnam Supplier
      </h1>
      <p className="text-neutral-700 max-w-3xl mt-2">
        Get a quote or request samples from our Vietnam-based microfiber leather and furniture textile supplier. Premium eco materials with US/EU compliance, small MOQs, and custom solutions. Fill the form below and we&apos;ll reply within 24 hours. Trusted by companies worldwide. You can also reach us at{' '}
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
