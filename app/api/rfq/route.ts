import { NextResponse } from 'next/server';import { z } from 'zod';import { Resend } from 'resend';const schema=z.object({name:z.string().min(1),email:z.string().email(),phone:z.string().optional(),company:z.string().optional(),country:z.string().optional(),productLine:z.string().optional(),application:z.string().optional(),moq:z.string().optional(),specs:z.string().optional(),message:z.string().optional()});export async function POST(req:Request){try{const payload=await req.json();const data=schema.parse(payload);const text=`New RFQ/Sample Request
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
`;const key=process.env.RESEND_API_KEY;const to='phitruong1712@gmail.com';if(!key){console.log('RFQ (no email provider configured):\n'+text);return NextResponse.json({ok:true,hint:'Configure RESEND_API_KEY to send emails.'});}const resend=new Resend(key);await resend.emails.send({from:'Viet EcoTex RFQ <noreply@vietecotex.com>',to,subject:`RFQ from ${data.name}`,text});return NextResponse.json({ok:true});}catch(err:any){return NextResponse.json({error:err.message??'Invalid request'},{status:400});}}