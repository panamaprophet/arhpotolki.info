import Script from "next/script";

export const LeadbackWidget = () => {
    const url = 'https://leadback.ru/js/leadback.js';
    
    if (!globalThis._emv) {
        globalThis._emv = [];
    }
    
    globalThis._emv['campaign'] = '0a656cc19f3f5b27324bfa32';
    
    return <Script src={url} async />;
}
