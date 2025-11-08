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
  // Favicon config - iPhone Chrome prefers ICO format, order matters
  // Using absolute URLs from metadataBase for better iPhone Chrome compatibility
  icons: {
    icon: [
      // ICO first for Chrome compatibility - absolute URL helps iPhone Chrome
      { url: 'https://vietecotex.com/favicon.ico', sizes: 'any' },
      { url: 'https://vietecotex.com/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: 'https://vietecotex.com/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: 'https://vietecotex.com/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: 'https://vietecotex.com/favicon.ico',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Viet Ecotex',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon links - iPhone Chrome requires favicon.ico FIRST and prefers ICO format */}
        {/* Order matters: ICO must come before PNG for Chrome compatibility */}
        {/* iPhone Chrome is very picky - must be first, must be ICO, must have correct MIME type */}
        <link rel="icon" type="image/x-icon" href="https://vietecotex.com/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="https://vietecotex.com/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://vietecotex.com/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://vietecotex.com/favicon-16x16.png" />
        {/* Apple Touch Icon - critical for iOS Safari and Chrome - MUST be 180x180 */}
        <link rel="apple-touch-icon" sizes="180x180" href="https://vietecotex.com/apple-touch-icon.png" />
        <link rel="apple-touch-icon" href="https://vietecotex.com/apple-touch-icon.png" />
        {/* Precomposed version for older iOS devices */}
        <link rel="apple-touch-icon-precomposed" sizes="180x180" href="https://vietecotex.com/apple-touch-icon.png" />
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#1A6B6B" />
        <meta name="msapplication-TileColor" content="#1A6B6B" />
        <meta name="msapplication-TileImage" content="/icon-192x192.png" />
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
