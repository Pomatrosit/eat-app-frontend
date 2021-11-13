import "../styles/normalize.scss"
import "../styles/globals.scss"
import type { AppProps } from "next/app"
import DefaultLayout from "../components/DefaultLayout/DefaultLayout"
import Ctx from "../context"
import NextNprogress from "nextjs-progressbar"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNprogress color='#6d71f9' height={3} />
      <Ctx>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </Ctx>
    </>
  )
}
export default MyApp
