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
    '/((?!_next/|favicon|opengraph-image|twitter-image|.*\\.(png|jpg|jpeg|webp|svg|ico|css|js|woff2?)$).*)',
  ],
};
