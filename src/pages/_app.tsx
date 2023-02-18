// import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { NextPage } from 'next/types';
import { ReactElement, ReactNode } from 'react';

import '../styles/global.css';


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout,
};

export default function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? (page => page);

    return (
        <SessionProvider session={session}>
            {getLayout(<Component {...pageProps} />)}
        </SessionProvider>
    );
};
