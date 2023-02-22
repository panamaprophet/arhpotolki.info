import React from 'react';
import styles from './styles.module.css';

export const Layout = ({ children }) => {
    return <div className={styles.layout}>{children}</div>;
};

export const Row = ({ children, style = {} }) => {
    return (
        <div className={styles.row} style={style}>
            {children}
        </div>
    );
};

export const Column = ({ children, style = {} }) => {
    return (
        <div className={styles.col} style={style}>
            {children}
        </div>
    );
};
