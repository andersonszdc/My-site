import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document<DocumentContext> {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id='menu' />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument