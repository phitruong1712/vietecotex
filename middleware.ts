import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const PRIMARY_APEX = 'vietecotex.com';

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

  // Redirect any *.vietecotex.com (including www.) to the apex
  if (host === `www.${PRIMARY_APEX}` || host.endsWith(`.${PRIMARY_APEX}`)) {
    url.hostname = PRIMARY_APEX;
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
