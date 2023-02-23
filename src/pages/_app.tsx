import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';

import '../styles/global.css';


const App = ({ Component, pageProps: { session, ...pageProps } }) => (
    <SessionProvider session={session}>
          <Head>
              <title>Архпотолки - натяжные потолки любой сложности!</title>
          </Head>
        <Component {...pageProps} />
    </SessionProvider>
);

export default App;
