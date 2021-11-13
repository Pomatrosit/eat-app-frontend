import "../styles/globals.scss"
import type { AppProps } from "next/app"
import DefaultLayout from "../components/DefaultLayout/DefaultLayout"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp
