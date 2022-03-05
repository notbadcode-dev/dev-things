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
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <ToastProvider autoDismiss={true}>
        <header id={APP.ELEMENT.HEADER_ID} className="glassmorphism">
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
