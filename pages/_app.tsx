import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import Global from "../styles/global";
import pattern from "../styles/themes/pattern";
import menu from "../styles/themes/menu";
import "../styles/mdx.css";
import { useRouter } from "next/dist/client/router";
import { getAnalytics, logEvent } from "firebase/analytics";
import app from "../firebase/config";

interface Itheme {
  title: string;

  colors: {
    text: string;
    background: string;
  };
}

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const [theme, setTheme] = useState<Itheme>(pattern);

  const toggleTheme = () => {
    setTheme(theme.title === "pattern" ? menu : pattern);
  };
  useEffect(() => {
    const analytics = getAnalytics(app);
    logEvent(analytics, `${route.asPath}`);
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global />
        <Layout toggleTheme={toggleTheme}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
