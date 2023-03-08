import '../styles/globals.css'
import Head from "next/head"
import Router from 'next/router';
import NProgress from 'nprogress';
import Layout from '../components/Layout'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext, ThemeContextProvider } from '../utils/contexts/ThemeContext'

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });
  return (
    <>
      <Head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
      </Head>
      <ThemeContextProvider>
        <ToastContainer
          autoClose={2000}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContextProvider>
    </>
  )
}

export default MyApp
