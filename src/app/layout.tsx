import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from '../components/Footer';
import { Header } from '@/components/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'BUY-BUY',
  description:
    'Buy Buy is your fun, fast, and easy online store — shop trendy products, add to cart in seconds, and enjoy a smooth, hassle-free shopping experience!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-dvh bg-light-text`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
