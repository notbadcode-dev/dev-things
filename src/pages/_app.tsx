import "../styles/globals.css";
import type { AppProps } from "next/app";

import Header from "../common/components/structure/header/header.component";
import Footer from "../common/components/structure/footer/footer.component";
import { createTheme, NextUIProvider } from "@nextui-org/react";

const theme = createTheme({
  type: "all",
  theme: {
    colors: {
      primary: "var(--primary-color)",
    },
    borderWidths: {
      ["border-radius"]: "2px",
      ["borderRadius"]: "2px",
    },
    space: {},
    fonts: {},
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextUIProvider theme={theme}>
        <header>
          <Header></Header>
        </header>
        <Component {...pageProps} />
        <Footer></Footer>
      </NextUIProvider>
    </>
  );
}

export default MyApp;
