import Script from 'next/script';
import { useEffect } from 'react';


const url = 'https://leadback.ru/js/leadback.js';

interface Props {
    campaignKey: string;
}

export const LeadbackWidget = ({ campaignKey }: Props) => {
    useEffect(() => {
        globalThis._emv = { campaign: campaignKey };
    }, [])

    return <Script src={url} defer />;
}
