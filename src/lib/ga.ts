declare global {
  interface Window {
    gtag: Gtag.Gtag;
  }
}

export const pageview = (url: string, gaID: string) => {
  if (window !== undefined) {
    window.gtag('config', gaID, {
      page_path: url,
    });
  }
};
