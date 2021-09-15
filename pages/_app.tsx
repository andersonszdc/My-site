import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Global from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
export default MyApp
