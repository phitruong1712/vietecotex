/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: true },
  async headers() {
    return [
      // Long cache for static assets
      {
        source: '/:all*(svg|png|jpg|jpeg|webp|ico|css|js|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
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
