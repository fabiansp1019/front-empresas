import { AuthProvider } from "../libs/auth.js";
import { ThemeProvider } from "@mui/material/styles";
import theme from '../libs/theme'
import Private from '../components/Layoutprivate'
import Public from '../components/LayoutPublic'
import Preload from '../components/Preload'
import { useEffect, useState } from 'react'

import Router from 'next/router'
import App from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Cookies from "js-cookie";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const authToken = Cookies.get('__session')

  useEffect(() => {

    const showLoader = () => {
      setIsLoading(true)
    }

    const removeLoader = () => {
      setIsLoading(false)
    }

    Router.events.on('routeChangeStart', showLoader)
    Router.events.on('routeChangeComplete', removeLoader)
    Router.events.on('routeChangeError', removeLoader)

    return () => {
      Router.events.off('routeChangeStart', showLoader)
      Router.events.off('routeChangeComplete', removeLoader)
      Router.events.off('routeChangeError', removeLoader)
    }
  }, [authToken, router])

  const pageLayout = authToken ? (
    <AuthProvider>
    <ThemeProvider theme={theme}>
      <Private>
          <Component {...pageProps} />
      </Private>
    </ThemeProvider>
    </AuthProvider>

  ) : (
    <AuthProvider>
    <ThemeProvider theme={theme}>
      <Public>
          <Component {...pageProps} />
      </Public>
    </ThemeProvider>
    </AuthProvider>
  )

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>
          Sample Landing Page with Components
        </title>
        <meta
          name="description"
          content="Sample Landing Page with Components - powered by ButterCMS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="https://buttercms.com/static/v2/images/favicon.png"
        />
      </Head>

      {isLoading && <Preload/>}

      {!isLoading && pageLayout}
    </>
  )
}

// return (
//   // <ApolloProvider client={client}>
//     <AuthProvider>
//       <ThemeProvider theme={theme}>
//       <Component {...pageProps} />
//       </ThemeProvider>
//     </AuthProvider>
//   // </ApolloProvider>
// );

export default MyApp;
