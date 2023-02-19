// import type { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

import "../styles/global.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Архпотолки - натяжные потолки любой сложности!</title>
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
