import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: {
    default: 'Store - сучасний інтерактив магазин',
    template: '%s Store',
  },
  description: 'Найкращы товари та низьки ціни',
  openGraph: {
    title: 'MyStore — Сучасний інтернет-магазин',
    description: 'Купуйте якісні товари онлайн.',
    url: 'https://mystore-example.com',
    siteName: 'MyStore',
    locale: 'uk_UA',
    type: 'website',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ru" className={`${geistSans.variable  } ${geistMono.variable} ${inter.variable} ${montserrat.variable} h-full antialiased`}>
      <body className={`min-h-full flex flex-col ${inter.className}`}><Providers>{children}</Providers></body>
    </html>
  );
}
