import Script from 'next/script';
import { useEffect } from 'react';


const url = 'https://leadback.ru/js/leadback.js';

export const LeadbackWidget = () => {
    useEffect(() => {
        globalThis._emv = { campaign: '0a656cc19f3f5b27324bfa32' };
    }, [])

    return <Script src={url} defer />;
}
