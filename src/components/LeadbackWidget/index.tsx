import Script from "next/script";

export const LeadbackWidget = () => {
    const url = 'https://leadback.ru/js/leadback.js';
    
    globalThis._emv = globalThis._emv || [];
    globalThis._emv['campaign'] = 'leadback_campaign_id';
    
    return <Script src={url} async />;
}
