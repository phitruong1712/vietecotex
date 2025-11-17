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
      
      {/* Office Address and Map Section */}
      <div className="mt-16">
        <h2 className="font-serif text-2xl mb-8">Our Locations</h2>
        
        {/* Office */}
        <div className="mb-12 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-serif text-xl mb-4">Office</h3>
            <div className="space-y-3 text-neutral-700">
              <p>
                <strong>Viet Ecotex</strong><br />
                Midtown M7, Block A, Tan Phu, Phu My Hung<br />
                District 7, Ho Chi Minh City, Vietnam
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
                  href="https://www.google.com/maps/search/Midtown+M7+Block+A+Tan+Phu+Phu+My+Hung+District+7+Ho+Chi+Minh+City+Vietnam"
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
              src="https://www.google.com/maps?q=Midtown+M7+Block+A+Tan+Phu+Phu+My+Hung+District+7+Ho+Chi+Minh+City+Vietnam&output=embed"
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

        {/* Warehouse */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-serif text-xl mb-4">Warehouse</h3>
            <div className="space-y-3 text-neutral-700">
              <p>
                <strong>Viet Ecotex Warehouse</strong><br />
                533/8 Nguyen Tri Phuong Street<br />
                Dien Hong Ward, Ho Chi Minh City, Vietnam
              </p>
              <p className="mt-4">
                <a
                  className="text-blue-600 hover:underline"
                  href="https://www.google.com/maps/search/533/8+Nguyen+Tri+Phuong+Street+Dien+Hong+Ward+Ho+Chi+Minh+City+Vietnam"
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
              src="https://www.google.com/maps?q=533/8+Nguyen+Tri+Phuong+Street,+Dien+Hong+Ward,+Ho+Chi+Minh+City,+Vietnam&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Viet Ecotex Warehouse Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
