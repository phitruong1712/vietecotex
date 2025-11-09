import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const url = new URL(req.url);
  return NextResponse.json(
    { host: url.host, hostname: url.hostname, path: url.pathname, now: new Date().toISOString() },
    { headers: { 'Cache-Control': 'no-store' } }
  );
}

