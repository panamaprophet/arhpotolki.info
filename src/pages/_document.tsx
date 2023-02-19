import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Архпотолки - натяжные потолки любой сложности!</title>
        <link rel="icon" href="/favicon.ico" key="favicon" />
        <meta
          property="og:description"
          content="Установка натяжных потолков любой сложности в Архангельске и области"
        />
        <link
          rel="stylesheet"
          href="//fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700|PT+Sans:400,700&amp;subset=cyrillic"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
