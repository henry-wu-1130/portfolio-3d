import type { Metadata } from 'next';
import LanguageDetector from '@/components/LanguageDetector';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Hi, I am Henry',
  description:
    'Love the order that comes from coding logic, and passionate about badminton and travel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageDetector />
        <Header />
        <div className="mt-20">{children}</div>
      </body>
    </html>
  );
}
