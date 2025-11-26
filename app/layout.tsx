import './globals.css';
import { Metadata } from 'next';
import Header from './components/header';
import Footer from './components/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://vietecotex.com'),
  title: {
    default: 'Viet Ecotex — Eco Microfiber Leather',
    template: '%s | Viet Ecotex',
  },
  description:
    'Vietnam-based microfiber leather and furniture textile supplier — premium alternative to Chinese manufacturing. Eco microfiber leather, sustainable furniture fabrics, PU/PVC leather. Small MOQs, custom colors, US/EU compliant. Ideal for companies seeking reliable non-China suppliers for automotive, fashion, and interior design applications.',
  keywords: [
    'microfiber leather supplier',
    'furniture textile supplier',
    'alternative to China manufacturing',
    'Vietnam microfiber leather supplier',
    'non-China supplier',
    'microfiber leather manufacturer',
    'furniture textile manufacturer',
    'Vietnam manufacturing alternative',
    'alternative to Chinese suppliers',
    'microfiber leather',
    'eco fabrics',
    'furniture textiles',
    'sustainable leather',
    'PU leather',
    'PVC leather',
    'automotive fabrics',
    'furniture fabrics',
    'eco-friendly materials',
    'sustainable microfiber',
    'furniture leather',
    'eco textiles',
    'green materials',
    'sustainable furniture fabrics',
    'microfiber fabric',
    'eco leather',
    'synthetic leather',
    'vegan leather',
    'sustainable materials',
    'Vietnam supplier',
    'alternative supplier',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://vietecotex.com',
    title: 'Viet Ecotex — Eco Microfiber Leather',
    description:
      'Vietnam-based microfiber leather and furniture textile supplier — premium alternative to Chinese manufacturing. Small MOQs, US/EU compliant, custom solutions.',
    images: [
      {
        url: 'https://vietecotex.com/opengraph-image', // Dynamic OG image route (1200x630)
        width: 1200,
        height: 630,
        alt: 'Viet Ecotex — Eco Microfiber Leather',
      },
    ],
    siteName: 'Viet EcoTex',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://vietecotex.com/twitter-image'], // Dynamic Twitter image route (1200x628)
    // site: '@vietecotex', // Add your Twitter/X handle here when available
    // creator: '@vietecotex', // Optional: Add your Twitter/X handle here
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
  // Facebook App ID - Optional: Set via environment variable NEXT_PUBLIC_FB_APP_ID
  // If not set, the warning will appear but sharing will still work perfectly
  const fbAppId = process.env.NEXT_PUBLIC_FB_APP_ID;

  return (
    <html lang="en">
      <head>
        {/* Favicon links - iPhone Chrome requires favicon.ico FIRST and prefers ICO format */}
        {/* Order matters: ICO must come before PNG for Chrome compatibility */}
        {/* iPhone Chrome is very picky - must be first, must be ICO, must have correct MIME type */}
        {/* Try multiple approaches for maximum compatibility */}
        <link rel="icon" href="https://vietecotex.com/favicon.ico" />
        <link rel="shortcut icon" href="https://vietecotex.com/favicon.ico" />
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
        {/* Facebook App ID - Optional but recommended for better analytics */}
        {/* This removes the Facebook warning when set via NEXT_PUBLIC_FB_APP_ID environment variable */}
        {fbAppId && <meta property="fb:app_id" content={fbAppId} />}
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
          href="https://fonts.googleapis.com/css2?family=Gilda+Display&family=Source+Sans+3:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Organization and WebSite schemas - SAFE, non-product structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'VIET KAI ECOTECH',
              alternateName: 'Viet Ecotex',
              legalName: 'VIET KAI ECOTECH',
              taxID: '0315588177',
              url: 'https://vietecotex.com',
              logo: 'https://vietecotex.com/logo.png',
              email: 'contact@vietecotex.com',
              telephone: '+84 976 344 224',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Midtown M7, Block A, Tan Phu, Phu My Hung',
                addressLocality: 'District 7',
                addressRegion: 'Ho Chi Minh City',
                postalCode: '700000',
                addressCountry: 'VN',
              },
              sameAs: [],
              description:
                'Vietnam-based supplier of eco microfiber leather and sustainable furniture fabrics. Premium alternative to Chinese manufacturing for automotive, fashion, and interior design industries.',
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html >
  );
}
