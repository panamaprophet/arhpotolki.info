import { ReactNode } from 'react';
import styles from './index.module.css';


export const Footer = ({ id, children }: { id?: string, children: ReactNode }) => (
    <div id={id} className={styles.root}>
        {children}
    </div>
);
