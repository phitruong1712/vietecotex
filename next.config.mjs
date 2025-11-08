/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: true },
  async headers() {
    return [
      // Favicon specific headers - MUST come FIRST for iPhone Chrome
      // Order matters: specific rules before general rules
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/x-icon',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      // Long cache for static assets (excluding favicons)
      {
        source: '/:all*(svg|png|jpg|jpeg|webp|css|js|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/favicon.png',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/png',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Favicon and icon headers - critical for iPhone Chrome
      // Shorter cache for favicons to help with updates
      {
        source: '/apple-touch-icon.png',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/png',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate',
          },
        ],
      },
      {
        source: '/favicon-16x16.png',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/png',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate',
          },
        ],
      },
      {
        source: '/favicon-32x32.png',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/png',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate',
          },
        ],
      },
      // Security headers
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // keep SAMEORIGIN unless you need to be embedded in iframes
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          // start with a relaxed CSP; tighten later as needed
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "img-src 'self' data: https:",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:",
              "style-src 'self' 'unsafe-inline' https:",
              "font-src 'self' data: https:",
              "connect-src 'self' https:",
              "frame-ancestors 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.vietecotex.com' }],
        destination: 'https://vietecotex.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
