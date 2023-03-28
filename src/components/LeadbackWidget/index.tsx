import Script from 'next/script';
import { useEffect } from 'react';


const url = 'https://leadback.ru/js/leadback.js';

interface Props {
    campaign: string;
}

export const LeadbackWidget = ({ campaign }: Props) => {
    useEffect(() => {
        window._emv = { campaign };
    }, [campaign]);

    return <Script src={url} defer />;
}
