import Footer from "@/components/layout/Footer/Footer";
import Nav from "@/components/layout/Nav/Nav";
import { AppProvider } from "@/context/appContext";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="szymborskidev-gtm"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="szymborskidev-analytics" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <AppProvider>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </AppProvider>
    </>
  );
}
