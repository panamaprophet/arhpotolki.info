import { ReactNode } from 'react';
import styles from './index.module.css';


export const Text = ({ children }: { children: ReactNode }) => (
    <div className={styles.root}>
        {children}
    </div>
);

export const Title = ({ children, condenced = false }: { children: ReactNode, condenced?: boolean }) => (
    <h2 className={[styles.title, condenced && styles.title_condensed].join(' ')}>
        {children}
    </h2>
);

export const Subtitle = ({ color, children }: { children: ReactNode, color?: string }) => (
    <h3 className={styles.subtitle} style={{ color }}>
        {children}
    </h3>
);
