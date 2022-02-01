import "../styles/globals.css";
import type { AppProps } from "next/app";

import Header from "../common/components/structure/header/header.component";
import Footer from "../common/components/structure/footer/footer.component";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
