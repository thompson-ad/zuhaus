import React from 'react'
import { AuthProvider } from '../lib/auth'
import '../styles/reset.css'
import '../styles/theme.css'
import '../styles/global.css'
import '../styles/home.css'
import '../styles/signin.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
