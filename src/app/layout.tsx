import type { Metadata } from 'next';
import './globals.css';
import Footer from '@components/Footer';

export const metadata: Metadata = {
  title: 'Manuel Esperon',
  description: 'Manuel Esperon personal website',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col ">
        {/* TODO: Add header once other pages have been implemented     */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
