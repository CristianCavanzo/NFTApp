import { Html, Head, Main, NextScript, Link } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel="preload"
                    href="/fonts/Roboto-Medium.ttf"
                    as="font"
                    crossOrigin=""
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
