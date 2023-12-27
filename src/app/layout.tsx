import type { Metadata } from 'next';
import './globals.css';
import Header from '@components/Header';
import Footer from '@components/Footer';
import GoogleAnalytics from '@components/GoogleAnalytics';

export const metadata: Metadata = {
  title: 'Manuel Esperon',
  description: 'Manuel Esperon personal website',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ID;
  const isProd = process.env.NODE_ENV === 'production';

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col ">
        {isProd && GA_TRACKING_ID && <GoogleAnalytics gaID={GA_TRACKING_ID} />}
        <Header />
        <main className="mx-auto mt-6 md:p-8 p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
