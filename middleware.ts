import { NextResponse, type NextRequest } from 'next/server';

/** Apex domains we own and force www -> apex */
const APEX = new Set(['vietecotex.com', 'vinaleather.com', 'vinafabrics.com']);

const PRIMARY = 'vietecotex.com';

/** Basic, safe security headers (no preload yet) */
function applySecurityHeaders(res: NextResponse) {
  // HSTS: Currently set to ~180 days (no preload)
  // TODO: Once all subdomains use HTTPS reliably, upgrade to:
  // res.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  res.headers.set('Strict-Transport-Security', 'max-age=15552000'); // ~180 days
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  res.headers.set('X-Frame-Options', 'SAMEORIGIN');
  // CSP tuned for Next.js defaults; adjust if you add external scripts.
  res.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; font-src 'self' data: https:; connect-src 'self' https:;"
  );
}

export function middleware(req: NextRequest) {
  const url = new URL(req.url);
  const host = url.hostname.toLowerCase();
  const pathname = url.pathname;

  // Skip static assets and Next.js internals
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon') ||
    pathname === '/opengraph-image' ||
    pathname === '/twitter-image' ||
    /\.(png|jpg|jpeg|webp|svg|ico|css|js|woff2?)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // 1) Redirect www -> apex for our domains
  if (host.startsWith('www.')) {
    const apex = host.slice(4);
    if (APEX.has(apex)) {
      url.hostname = apex;
      return NextResponse.redirect(url.toString(), 308);
    }
  }

  // 2) Redirect any subdomain of vietecotex.com -> apex
  if (host !== PRIMARY && host.endsWith(`.${PRIMARY}`)) {
    url.hostname = PRIMARY;
    return NextResponse.redirect(url.toString(), 308);
  }

  // 3) Pass through + add security headers
  const res = NextResponse.next();
  applySecurityHeaders(res);
  return res;
}

// Skip static assets/Next internals
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
