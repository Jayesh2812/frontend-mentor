import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Bellefair&display=swap" rel="stylesheet" />
                <link rel="shortcut icon" href="/assets/shared/logo.svg" type="image/x-icon" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}