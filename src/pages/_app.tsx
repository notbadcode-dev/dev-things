import type { AppProps } from "next/app";
import { ToastProvider } from "react-toast-notifications";

import Header from "../shared/components/structure/header/header.component";
import Footer from "../shared/components/structure/footer/footer.component";

import "../i18n/config";
import "../styles/globals.scss";

import { APP } from "../shared/constants/app.constant";
import { useRouter } from "next/router";
import { useEffect } from "react";

import * as ga from "../../lib/analytics";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };
    console.log("Change");

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      console.log("Change");
    };
  }, [router.events]);

  return (
    <>
      <ToastProvider autoDismiss={true}>
        <header id={APP.ELEMENT.HEADER_ID} className="glassmorphism">
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-CESBSK5K2T`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-CESBSK5K2T', {
                                page_path: window.location.pathname,
                                });
                            `,
            }}
          />

          <Header></Header>
        </header>
        <Component {...pageProps} />
        <footer id={APP.ELEMENT.FOOTER_ID}>
          <Footer></Footer>
        </footer>
      </ToastProvider>
    </>
  );
}

export default MyApp;
