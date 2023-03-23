import Script from 'next/script';
import { useEffect } from 'react';


const url = 'https://leadback.ru/js/leadback.js';

export const LeadbackWidget = () => {
    useEffect(() => {
        globalThis._emv = { campaign: 'leadback_campaign_id' };
    }, [])

    return <Script src={url} defer />;
}
