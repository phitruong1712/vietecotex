import { NextResponse } from 'next/server';

export async function GET() {
  const body = [
    'Contact: mailto:contact@vietecotex.com',
    'Contact: mailto:security@vietecotex.com',
    'Expires: 2026-12-31T23:59:59Z',
    'Preferred-Languages: en',
  ].join('\n');

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}








