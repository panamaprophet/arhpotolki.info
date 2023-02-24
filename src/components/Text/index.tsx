import { ReactNode } from 'react';
import styles from './index.module.css';


export const Text = ({ children }: { children: ReactNode }) => (
    <div className={styles.root}>
        {children}
    </div>
);
