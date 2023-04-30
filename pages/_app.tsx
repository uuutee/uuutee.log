import { AppProps } from 'next/app'
import { FC } from 'react'
import GoogleAnalytics from '../components/GoogleAnalytics'
import '../styles/global.css'

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  )
}

export default App
