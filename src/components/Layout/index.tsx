import { CSSProperties, ReactNode } from 'react';
import styles from './styles.module.css';

export const Layout = ({ children }: { children: ReactNode }) => {
    return <div className={styles.layout}>{children}</div>;
};

export const Row = ({ children, style = {} }: { children: ReactNode, style?: CSSProperties }) => {
    return (
        <div className={styles.row} style={style}>
            {children}
        </div>
    );
};

export const Column = ({ children, style = {} }: { children: ReactNode, style?: CSSProperties }) => {
    return (
        <div className={styles.col} style={style}>
            {children}
        </div>
    );
};
