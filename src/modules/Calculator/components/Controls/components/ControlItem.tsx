import React from 'react';
import styles from './styles.module.css';

function ControlItem({ children, title }) {
    return (
        <div className={styles.control__item}>
            <span className={styles.control__item__title}>{title}:</span>
            {children}
        </div>
    );
}

export default ControlItem;
