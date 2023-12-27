'use client';

import Script from 'next/script';
import * as ga from '@lib/ga';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const GoogleAnalytics = ({ gaID }: { gaID: string }) => {
  const url = usePathname();

  useEffect(() => {
    ga.pageview('/', gaID);
  }, [url, gaID]);

  return (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${gaID}`} />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaID}');`}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
