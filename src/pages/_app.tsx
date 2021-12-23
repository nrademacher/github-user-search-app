import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>Next Starter Lite</title>
            </Head>
            <div className="subpixel-antialiased optimize-legibility">
                <Component {...pageProps} />
            </div>
        </>
    )
}

export default App
