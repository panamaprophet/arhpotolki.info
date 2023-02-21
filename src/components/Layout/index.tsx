import React from 'react';
import styles from './styles.module.css';

export function Layout({ children }) {
    return <div className={styles.layout}>{children}</div>;
}

export function Row({ children, style = {} }) {
    return (
        <div className={styles.row} style={style}>
            {children}
        </div>
    );
}

export function Col({ children, style = {} }) {
    return (
        <div className={styles.col} style={style}>
            {children}
        </div>
    );
}
