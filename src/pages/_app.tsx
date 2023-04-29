import '@/styles/globals.css'
import "aos/dist/aos.css";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const getLayout = Component?.getLayout || ((page) => page)
  return <>
    {getLayout(
      <Component {...pageProps} />
    )}
  </>
}
