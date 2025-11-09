import { NextResponse, type NextRequest } from 'next/server';

// Edit this list if you add/remove secondary domains:
const SECONDARY_APEX = new Set([
  'vinaleather.com',
  'vinafabrics.com',
]);

export function middleware(req: NextRequest) {
  const url = new URL(req.url);
  const host = url.hostname;

  // 1) Redirect www.secondary -> apex.secondary (no path loss)
  if (host.startsWith('www.')) {
    const apex = host.slice(4);
    if (SECONDARY_APEX.has(apex)) {
      url.hostname = apex;
      return NextResponse.redirect(url.toString(), 308);
    }
  }

  // 2) Add X-Robots-Tag noindex for secondary hosts (apex or any subdomain)
  const apex = host.startsWith('www.') ? host.slice(4) : host;
  if (SECONDARY_APEX.has(apex)) {
    const res = NextResponse.next();
    res.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
    return res;
  }

  return NextResponse.next();
}

export const config = {
  // Skip Next internals and static assets
  matcher: [
    '/((?!_next/|favicon|opengraph-image|twitter-image|.*\\.(png|jpg|jpeg|webp|svg|ico|css|js|woff2?)$).*)',
  ],
};

