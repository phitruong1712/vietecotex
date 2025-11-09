import { NextResponse, type NextRequest } from 'next/server';

/** Hosts that should force www -> apex */
const APEX_HOSTS = new Set([
  'vietecotex.com',
  'vinaleather.com',
  'vinafabrics.com',
]);

export function middleware(req: NextRequest) {
  const url = new URL(req.url);
  const host = url.hostname;
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

  // Redirect www -> apex
  if (host.startsWith('www.')) {
    const apex = host.slice(4);
    if (APEX_HOSTS.has(apex)) {
      url.hostname = apex;
      return NextResponse.redirect(url.toString(), 308);
    }
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
