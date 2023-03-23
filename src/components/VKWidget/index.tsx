import { useEffect, useState } from 'react';
import Script from 'next/script';
import styles from './styles.module.css';


const url = 'https://vk.com/js/api/openapi.js?169';


export const VKWidget = () => {
    const [ready, setReady] = useState(false);

    const onReady = () => setReady(true);

    useEffect(() => {
        if (ready) {
            globalThis.VK.Widgets.Group("vk_groups", {
                mode: 3,
                color3: 'F7A136'
            }, 53659209)
        }
    }, [ready])

    return (
        <div id="vk_groups" className={styles.root}>
            <Script src={url} onReady={onReady} />
        </div>
    )
}

