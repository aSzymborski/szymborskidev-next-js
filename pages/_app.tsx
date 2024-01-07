import Footer from '@/components/layout/Footer/Footer';
import Nav from '@/components/layout/Nav/Nav'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Script from 'next/script';
import AnimatedCursor from "react-animated-cursor"

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Script id="szymborskidev-gtm" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
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
    <Nav />
    <Component {...pageProps} />
    <AnimatedCursor
      innerSize={10}
      outerSize={10}
      color='0, 0, 0'
      outerAlpha={0.2}
      innerScale={0.9}
      outerScale={6}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    <Footer />
  </>
}
