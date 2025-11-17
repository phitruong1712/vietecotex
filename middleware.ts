import { NextResponse, type NextRequest } from 'next/server';

/** Apex domains we own and force www -> apex */
const APEX = new Set(['vietecotex.com', 'vinaleather.com', 'vinafabrics.com']);

const PRIMARY = 'vietecotex.com';

/** Security headers are configured in next.config.mjs to avoid duplicates */
/** This middleware focuses on redirects only */

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

  // 3) Pass through (security headers are handled by next.config.mjs)
  return NextResponse.next();
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
