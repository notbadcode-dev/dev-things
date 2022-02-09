import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ToastProvider } from "react-toast-notifications";

import Header from "../common/components/structure/header/header.component";
import Footer from "../common/components/structure/footer/footer.component";
import CustomToast from "../common/components/toast/toast.component";

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
        <ToastProvider autoDismiss={true}>
          <header>
            <Header></Header>
          </header>
          <Component {...pageProps} />
          <Footer></Footer>
        </ToastProvider>
      </NextUIProvider>
    </>
  );
}

export default MyApp;
