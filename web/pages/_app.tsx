import 'reflect-metadata'
import React from 'react'
import { Provider } from 'next-auth/client'
import '../styles/reset.css'
import '../styles/theme.css'
import '../styles/global.css'
import '../styles/home.css'
import '../styles/signin.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
