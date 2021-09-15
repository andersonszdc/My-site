import type { AppProps } from 'next/app'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/Layout'
import Global from '../styles/global'
import pattern from '../styles/themes/pattern'
import menu from '../styles/themes/menu'

interface Itheme {
  title: string,

  colors: {
    text: string,
    background: string
  }
}

function MyApp({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState<Itheme>(pattern)

  const toggleTheme = () => {
    setTheme(theme.title === 'pattern' ? menu : pattern)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global />
        <Layout toggleTheme={toggleTheme} >
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
export default MyApp
