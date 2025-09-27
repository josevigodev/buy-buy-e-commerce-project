import type { Metadata } from 'next';
import { Kantumruy_Pro } from 'next/font/google';
import './globals.css';
import Footer from '../components/Footer';
import { Header } from '@/components/Header';

const cantumruyPro = Kantumruy_Pro({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'BUY-BUY',
  description:
    'Buy Buy is your fun, fast, and easy online store — shop trendy products, add to cart in seconds, and enjoy a smooth, hassle-free shopping experience!',
  creator: 'Jose Vigo',
  keywords: ['buy', 'shop', 'electronics'],
  metadataBase: new URL('https://buy-buy-e-commerce-project.vercel.app/'),
  openGraph: {
    title: 'BUY-BUY',
    description:
      'Buy Buy is your fun, fast, and easy online store — shop trendy products, add to cart in seconds, and enjoy a smooth, hassle-free shopping experience!',
    url: 'https://buy-buy-e-commerce-project.vercel.app/',
    siteName: 'BUY-BUY',
    images: '/og.webp',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={` ${cantumruyPro.className} antialiased flex flex-col min-h-dvh bg-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
