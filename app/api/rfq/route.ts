import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(255),
  phone: z.string().max(50).optional(),
  company: z.string().max(100).optional(),
  country: z.string().max(100).optional(),
  productLine: z.string().max(100).optional(),
  application: z.string().max(200).optional(),
  moq: z.string().max(100).optional(),
  specs: z.string().max(500).optional(),
  message: z.string().max(2000).optional(),
});

// Simple rate limiting - store in memory (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // 5 requests
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(req: Request) {
  try {
    // Get client IP for rate limiting
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : req.headers.get('x-real-ip') || 'unknown';

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const payload = await req.json();
    const data = schema.parse(payload);

    const text = `New RFQ/Sample Request
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || ''}
Company: ${data.company || ''}
Country: ${data.country || ''}
Product Line: ${data.productLine || ''}
Application: ${data.application || ''}
MOQ: ${data.moq || ''}
Specs: ${data.specs || ''}

Message:
${data.message || ''}
`;

    const key = process.env.RESEND_API_KEY;
    const to = process.env.RFQ_EMAIL || 'phitruong1712@gmail.com';

    if (!key) {
      console.log('RFQ (no email provider configured):\n' + text);
      return NextResponse.json({
        ok: true,
        hint: 'Configure RESEND_API_KEY to send emails.',
      });
    }

    const resend = new Resend(key);
    await resend.emails.send({
      from: 'Viet EcoTex RFQ <noreply@vietecotex.com>',
      to,
      subject: `RFQ from ${data.name}`,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: err.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: err.message ?? 'Invalid request' },
      { status: 400 }
    );
  }
}
