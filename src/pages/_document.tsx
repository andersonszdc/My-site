/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable react/display-name */
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ReactElement } from "react";
import { ServerStyleSheet } from "styled-components";

interface InitialProps extends DocumentInitialProps {
  styles: ReactElement;
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<InitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          {/* Primary Meta tags */}
          <meta name="title" content="Andersonszdc" />
          <meta
            name="description"
            content="Desenvolvedor Full Stack e UI/UX Designer, compartilho meus projetos e faço posts sobre partes interessantes da tecnologia."
          />
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.andersonszdc.com/" />
          <meta property="og:title" content="Andersonszdc" />
          <meta
            property="og:description"
            content="Desenvolvedor Full Stack e UI/UX Designer, compartilho meus projetos e faço posts sobre partes interessantes da tecnologia."
          />
          <meta
            property="og:image"
            content="https://firebasestorage.googleapis.com/v0/b/my-site-1aa62.appspot.com/o/metatag.png?alt=media&token=6a4efdd5-ba48-48c0-aeee-dacc7e263f30"
          />
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://www.andersonszdc.com/"
          />
          <meta property="twitter:title" content="Andersonszdc" />
          <meta
            property="twitter:description"
            content="Desenvolvedor Full Stack e UI/UX Designer, compartilho meus projetos e faço posts sobre partes interessantes da tecnologia."
          />
          <meta
            property="twitter:image"
            content="https://firebasestorage.googleapis.com/v0/b/my-site-1aa62.appspot.com/o/metatag.png?alt=media&token=6a4efdd5-ba48-48c0-aeee-dacc7e263f30"
          />
          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
