import type { AppProps } from "next/app";
import { createTheme, NextUIProvider, useTheme } from "@nextui-org/react";
import { ToastProvider } from "react-toast-notifications";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import Header from "../shared/components/structure/header/header.component";
import Footer from "../shared/components/structure/footer/footer.component";

import "../i18n/config";
import "../styles/globals.css";

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      primary: "var(--primary-color)",
      background: "var(--background)",
    },
    borderWidths: {
      ["border-radius"]: "2px",
      ["borderRadius"]: "2px",
    },
    space: {},
    fonts: {},
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primary: "var(--primary-color-dark-mode)",
      background: "var(--background-dark-mode)",
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
  const { isDark } = useTheme();

  return (
    <>
      <NextThemesProvider
        defaultTheme={lightTheme}
        attribute="data-theme"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
          <ToastProvider autoDismiss={true}>
            <header>
              <Header></Header>
            </header>
            <Component {...pageProps} />
            <Footer></Footer>
          </ToastProvider>
        </NextUIProvider>
      </NextThemesProvider>
    </>
  );
}

export default MyApp;
