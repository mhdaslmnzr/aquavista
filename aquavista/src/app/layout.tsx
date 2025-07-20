import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
});

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
  title: 'AquaVista | Discover Lakshadweep, Your Island Paradise',
  description:
    'Dive into an island paradise with AquaVista. We offer tailor-made tours, PADI-certified scuba diving, and unforgettable adventures in Lakshadweep. Enquire on WhatsApp for a personalized experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${poppins.variable} ${lato.variable} bg-background-soft-white text-gray-800 antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}