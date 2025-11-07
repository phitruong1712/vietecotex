import './globals.css';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  metadataBase: new URL('https://vietecotex.com'),
  title: {
    default: 'Viet Ecotex — Eco Microfiber Leather',
    template: '%s | Viet Ecotex',
  },
  description:
    'Eco microfiber leather for automotive, fashion, and interiors. Lightweight, durable, and sustainable materials from Viet Ecotex.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://vietecotex.com',
    title: 'Viet Ecotex — Eco Microfiber Leather',
    description: 'Sustainable microfiber leather for modern applications.',
    images: ['/og-image.png'], // 1200x630 OG image
    siteName: 'Viet EcoTex',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vietecotex', // update if you have it
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.png',
        color: '#1A6B6B',
      },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Source+Sans+3:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Favicons for all platforms */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon.png" />
        <link rel="mask-icon" href="/favicon.png" color="#1A6B6B" />
        <meta name="msapplication-TileColor" content="#1A6B6B" />
        <meta name="msapplication-TileImage" content="/favicon.png" />
        <meta name="theme-color" content="#1A6B6B" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Viet Ecotex',
              url: 'https://vietecotex.com',
              logo: 'https://vietecotex.com/logo.png',
              email: 'contact@vietecotex.com',
              telephone: '+84 976 344 224',
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Viet Ecotex',
              url: 'https://vietecotex.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://vietecotex.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body>
        <div className="topbar" />
        <header className="container-xl py-5 flex items-center justify-between">
          <Link href="/" className="text-xl tracking-widest uppercase">
            <span className="font-serif">Viet EcoTex</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link className="nav-link" href="/our-commitment">
              Our Commitment
            </Link>
            <Link className="nav-link" href="/certifications">
              Certifications
            </Link>
            <Link className="nav-link" href="/contact">
              RFQ / Samples
            </Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mt-24 border-t">
          <div className="container-xl py-10 grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="font-serif text-lg mb-2">Viet EcoTex</div>
              <p>
                Microfiber (PU/PVC) leather & furniture fabrics. Vietnam + China
                manufacturing.
              </p>
              <p className="mt-2">
                Phone: <a href="tel:+84976344224">+84 976 344 224</a> ·
                WhatsApp/Viber
              </p>
              <p>
                Email:{' '}
                <a href="mailto:contact@vietecotex.com">
                  contact@vietecotex.com
                </a>
              </p>
            </div>
            <div>
              <div className="font-semibold mb-2">Explore</div>
              <ul className="space-y-1">
                <li>
                  <Link href="/our-commitment">Our Commitment</Link>
                </li>
                <li>
                  <Link href="/certifications">
                    Manufacturing Certifications
                  </Link>
                </li>
                <li>
                  <Link href="/contact">Request a Quote / Samples</Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">For Buyers</div>
              <p className="text-neutral-600">
                Small MOQs · Custom colors & grains · Fast lead times · US/EU
                compliance · Alternative to China · Reliable warranty.
              </p>
            </div>
          </div>
          <div className="text-center text-xs text-neutral-500 py-4">
            © {new Date().getFullYear()} Viet EcoTex. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
