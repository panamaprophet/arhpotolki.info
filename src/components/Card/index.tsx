import { ReactNode } from 'react';
import styles from './styles.module.css';


export const Card = ({ children }: { children: ReactNode }) => (
    <div className={styles.root}>
        {children}
    </div>
);
