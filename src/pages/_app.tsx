import type { AppProps } from "next/app";
import { ToastProvider } from "react-toast-notifications";

import Header from "../shared/components/structure/header/header.component";
import Footer from "../shared/components/structure/footer/footer.component";

import "../i18n/config";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastProvider autoDismiss={true}>
        <header>
          <Header></Header>
        </header>
        <Component {...pageProps} />
        <Footer></Footer>
      </ToastProvider>
    </>
  );
}

export default MyApp;
