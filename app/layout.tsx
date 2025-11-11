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
              alternateName: 'Viet EcoTex',
              url: 'https://vietecotex.com',
              logo: 'https://vietecotex.com/logo.png',
              email: 'contact@vietecotex.com',
              telephone: '+84 976 344 224',
              address: {
                '@type': 'PostalAddress',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Manufacturer',
              '@id': 'https://vietecotex.com',
              name: 'Viet Ecotex',
              image: 'https://vietecotex.com/logo.png',
              description:
                'Serving 1500+ customers worldwide. Manufacturer of microfiber leather (PU/PVC) and furniture fabrics. 80% microfiber leather, 20% furniture fabrics. Applications: car seats, sofas, shoes, bags, construction. Advantages: customization, small MOQs, timely delivery, reliability, high warranty, competitive pricing. 8 factories in China, 6 factories in Vietnam.',
              address: [
                {
                  '@type': 'PostalAddress',
                  addressCountry: 'VN',
                  name: 'Vietnam Manufacturing',
                },
                {
                  '@type': 'PostalAddress',
                  addressCountry: 'CN',
                  name: 'China Manufacturing',
                },
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+84-976-344-224',
                contactType: 'customer service',
                email: 'contact@vietecotex.com',
                availableLanguage: ['en'],
              },
              areaServed: 'Worldwide',
              makesOffer: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Product',
                    name: 'Eco Microfiber Leather',
                    description:
                      'Microfiber leather (PU/PVC) for car seats, sofas, shoes, bags, and construction. Available from 8 factories in China or 6 factories in Vietnam. Customization, small MOQs, competitive pricing.',
                    category: 'Textiles',
                    image: [
                      'https://vietecotex.com/logo.png', // TODO: Replace with actual product image URL
                    ],
                    brand: {
                      '@type': 'Brand',
                      name: 'Viet Ecotex',
                    },
                    offers: {
                      '@type': 'Offer',
                      price: 12.50, // Required field: Must be a number, not a string
                      priceCurrency: 'USD',
                      availability: 'https://schema.org/InStock',
                      url: 'https://vietecotex.com/contact',
                      priceValidUntil: '2026-12-31', // TODO: Update with actual price validity date
                      priceSpecification: {
                        '@type': 'UnitPriceSpecification',
                        priceCurrency: 'USD',
                        price: 12.50, // Representative price (average of $10-$15 range)
                        minPrice: 10.00, // Minimum price per meter
                        maxPrice: 15.00, // Maximum price per meter
                        unitText: 'meter',
                      },
                      hasMerchantReturnPolicy: {
                        '@type': 'MerchantReturnPolicy',
                        applicableCountry: 'Worldwide',
                        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
                        merchantReturnDays: 30, // TODO: Update with actual return policy days
                        returnMethod: 'https://schema.org/ReturnByMail',
                        returnFees: 'https://schema.org/FreeReturn',
                      },
                      shippingDetails: {
                        '@type': 'OfferShippingDetails',
                        shippingRate: {
                          '@type': 'MonetaryAmount',
                          value: '0', // TODO: Update with actual shipping cost or "Contact for shipping quote"
                          currency: 'USD',
                        },
                        shippingDestination: {
                          '@type': 'DefinedRegion',
                          addressCountry: 'Worldwide',
                        },
                        deliveryTime: {
                          '@type': 'ShippingDeliveryTime',
                          businessDays: {
                            '@type': 'OpeningHoursSpecification',
                            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                          },
                          cutoffTime: '14:00', // TODO: Update with actual cutoff time
                          handlingTime: {
                            '@type': 'QuantitativeValue',
                            minValue: 7, // TODO: Update with actual handling days
                            maxValue: 14,
                            unitCode: 'DAY',
                          },
                          transitTime: {
                            '@type': 'QuantitativeValue',
                            minValue: 14, // TODO: Update with actual transit days
                            maxValue: 30,
                            unitCode: 'DAY',
                          },
                        },
                      },
                    },
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Product',
                    name: 'Furniture Textiles',
                    description:
                      'Furniture fabrics for sofas, chairs, and upholstery. Available from 8 factories in China or 6 factories in Vietnam. Customization, small MOQs, competitive pricing.',
                    category: 'Textiles',
                    image: [
                      'https://vietecotex.com/logo.png', // TODO: Replace with actual product image URL
                    ],
                    brand: {
                      '@type': 'Brand',
                      name: 'Viet Ecotex',
                    },
                    offers: {
                      '@type': 'Offer',
                      price: 12.50, // Required field: Must be a number, not a string
                      priceCurrency: 'USD',
                      availability: 'https://schema.org/InStock',
                      url: 'https://vietecotex.com/contact',
                      priceValidUntil: '2026-12-31', // TODO: Update with actual price validity date
                      priceSpecification: {
                        '@type': 'UnitPriceSpecification',
                        priceCurrency: 'USD',
                        price: 12.50, // Representative price (average of $10-$15 range)
                        minPrice: 10.00, // Minimum price per meter
                        maxPrice: 15.00, // Maximum price per meter
                        unitText: 'meter',
                      },
                      hasMerchantReturnPolicy: {
                        '@type': 'MerchantReturnPolicy',
                        applicableCountry: 'Worldwide',
                        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
                        merchantReturnDays: 30, // TODO: Update with actual return policy days
                        returnMethod: 'https://schema.org/ReturnByMail',
                        returnFees: 'https://schema.org/FreeReturn',
                      },
                      shippingDetails: {
                        '@type': 'OfferShippingDetails',
                        shippingRate: {
                          '@type': 'MonetaryAmount',
                          value: '0', // TODO: Update with actual shipping cost or "Contact for shipping quote"
                          currency: 'USD',
                        },
                        shippingDestination: {
                          '@type': 'DefinedRegion',
                          addressCountry: 'Worldwide',
                        },
                        deliveryTime: {
                          '@type': 'ShippingDeliveryTime',
                          businessDays: {
                            '@type': 'OpeningHoursSpecification',
                            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                          },
                          cutoffTime: '14:00', // TODO: Update with actual cutoff time
                          handlingTime: {
                            '@type': 'QuantitativeValue',
                            minValue: 7, // TODO: Update with actual handling days
                            maxValue: 14,
                            unitCode: 'DAY',
                          },
                          transitTime: {
                            '@type': 'QuantitativeValue',
                            minValue: 14, // TODO: Update with actual transit days
                            maxValue: 30,
                            unitCode: 'DAY',
                          },
                        },
                      },
                    },
                  },
                },
              ],
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
            <Link className="nav-link" href="/applications">
              Applications
            </Link>
            <Link className="nav-link" href="/advantages">
              Advantages
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
                Dual manufacturing capabilities: 8 factories in China, 6 factories in Vietnam.
                Flexible sourcing for cost competitiveness or enhanced US/EU compliance.
                Premium eco materials, small MOQs, and custom solutions.
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
                  <Link href="/applications">Applications</Link>
                </li>
                <li>
                  <Link href="/advantages">Our Advantages</Link>
                </li>
                <li>
                  <Link href="/catalog">Product Catalog</Link>
                </li>
                <li>
                  <Link href="/certifications">Certifications</Link>
                </li>
                <li>
                  <Link href="/distributors">Distributors & Partners</Link>
                </li>
                <li>
                  <Link href="/contact">Request Quote / Samples</Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">For Buyers</div>
              <p className="text-neutral-600">
                Serving 1500+ customers worldwide · 80% microfiber leather, 20% furniture fabrics · 
                Applications: car seats, sofas, shoes, bags, construction · 
                Customization · Small MOQs · Timely delivery · Reliability · 
                High warranty · Competitive pricing · Dual manufacturing (China & Vietnam).
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
