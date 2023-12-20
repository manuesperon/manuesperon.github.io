import type { Metadata } from 'next';
import './globals.css';
import Header from '@components/Header';
import Footer from '@components/Footer';

export const metadata: Metadata = {
  title: 'Manuel Esperon',
  description: 'Manuel Esperon personal website',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col ">
        <Header />
        <main className="mx-auto mt-6 md:p-8 p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
