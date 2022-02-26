import type { AppProps } from "next/app";
import { ToastProvider } from "react-toast-notifications";

import Header from "../shared/components/structure/header/header.component";
import Footer from "../shared/components/structure/footer/footer.component";

import "../i18n/config";
import "../styles/globals.scss";
import { APP } from "../shared/constants/app.constant";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastProvider autoDismiss={true}>
        <header id={APP.ELEMENT.HEADER_ID}>
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
