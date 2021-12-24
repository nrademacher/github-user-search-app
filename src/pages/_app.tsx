import type { AppProps } from "next/app"
import Head from "next/head"
import "../styles/globals.css"

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta lang="en" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <title>Frontend Mentor | GitHub user search app</title>
            </Head>
            <div className="subpixel-antialiased optimize-legibility">
                <Component {...pageProps} />
            </div>
        </>
    )
}

export default App
