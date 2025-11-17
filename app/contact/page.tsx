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
  // ALL STRUCTURED DATA REMOVED - This page is informational only, NOT a product page
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
      
      {/* Address and Map Section */}
      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-serif text-2xl mb-4">Visit Our Office</h2>
          <div className="space-y-3 text-neutral-700">
            <p>
              <strong>Viet Ecotex</strong><br />
              Khu, Lô M7, đường Nội/29 Phú Mỹ Hưng, Midtown<br />
              Quận 7, Thành phố Hồ Chí Minh 100000<br />
              Vietnam
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a className="underline" href="tel:+84976344224">
                +84 976 344 224
              </a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a className="underline" href="mailto:contact@vietecotex.com">
                contact@vietecotex.com
              </a>
            </p>
            <p className="mt-4">
              <a
                className="text-blue-600 hover:underline"
                href="https://www.google.com/maps/place/Viet+Kai+EcoTech+(Văn+Phòng)/@10.7243874,106.7249164,17z/data=!3m1!4b1!4m6!3m5!1s0x317525fb0a377acd:0xc34c17d371a1ebe1!8m2!3d10.7243874!4d106.7274913!16s%2Fg%2F11lynkq5tr?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps →
              </a>
            </p>
          </div>
        </div>
        <div className="w-full h-[450px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.1308782274778!2d106.72491637449482!3d10.724387389421226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317525fb0a377acd%3A0xc34c17d371a1ebe1!2sViet%20Kai%20EcoTech%20(V%C4%83n%20Ph%C3%B2ng)!5e0!3m2!1sen!2s!4v1763349488226!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Viet Ecotex Office Location"
          />
        </div>
      </div>
    </section>
  );
}
