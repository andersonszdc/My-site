import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../HOC/Layout";
import Global from "../styles/global";
import pattern from "../styles/themes/light";
import menu from "../styles/themes/dark";
import "../styles/mdx.css";
import { useRouter } from "next/dist/client/router";
import { getAnalytics, logEvent } from "firebase/analytics";
import app from "../../firebase/config";

interface Itheme {
  title: string;

  colors: {
    text: string;
    background: string;
  };
}

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const [colors, setColors] = useState<Itheme>(pattern);

  const toggleColors = () => {
    setColors(colors.title === "pattern" ? menu : pattern);
  };
  useEffect(() => {
    const analytics = getAnalytics(app);
    logEvent(analytics, `${route.asPath}`);
  });

  return (
    <>
      <ThemeProvider theme={colors}>
        <Global />
        <Layout toggleColors={toggleColors}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
