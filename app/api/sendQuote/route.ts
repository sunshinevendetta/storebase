import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { size, price, name, email } = await request.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.your-email-provider.com', // Replace with your SMTP provider
    port: 587, // Replace with your SMTP port
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // your email address
      pass: process.env.EMAIL_PASS, // your email password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Expo Floor Quote',
    text: `Hello ${name},\n\nHere is your quote:\n\nSelected Booth Size: ${size}\nPrice: ${price}\n\nThank you for your interest!`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Error sending email' });
  }
}
