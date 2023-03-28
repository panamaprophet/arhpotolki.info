import { useEffect, useState } from 'react';
import Script from 'next/script';
import styles from './styles.module.css';


const url = 'https://vk.com/js/api/openapi.js?169';


export const Vk = ({ groupId }: { groupId: string }) => {
    const [ready, setReady] = useState(false);
    const id = 'vk_groups';

    const onReady = () => setReady(true);

    useEffect(() => {
        if (ready) {
            window.VK.Widgets.Group(id, {
                mode: 3,
                color3: 'F7A136',
            }, groupId);
        }
    }, [ready, groupId]);

    return (
        <div id={id} className={styles.root}>
            <Script src={url} onReady={onReady} />
        </div>
    )
}

