import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/global.css';


const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
    <SessionProvider session={session}>
          <Head>
              <title>Архпотолки - натяжные потолки любой сложности!</title>
          </Head>
        <Component {...pageProps} />
    </SessionProvider>
);

export default App;
