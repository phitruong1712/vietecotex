import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const APEXES = new Set(['vietecotex.com', 'vinaleather.com', 'vinafabrics.com']);
const PRIMARY = 'vietecotex.com';

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

  // www -> apex for all three brands
  if (host.startsWith('www.')) {
    const apex = host.slice(4);
    if (APEXES.has(apex)) {
      url.hostname = apex;
      return NextResponse.redirect(url.toString(), 308);
    }
  }

  // Any subdomain of vietecotex.com (that reaches Vercel) -> apex
  if (host !== PRIMARY && host.endsWith(`.${PRIMARY}`)) {
    url.hostname = PRIMARY;
    return NextResponse.redirect(url.toString(), 308);
  }

  return NextResponse.next();
}

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
