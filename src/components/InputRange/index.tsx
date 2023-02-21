import React from 'react';
import styles from './styles.module.css';

function InputRange({ options, currentItem, onClick }) {
    return (
        <div className={styles.settings__buttons}>
            {options.map(item => (
                <div
                    className={`${styles.settings__button} ${
                        item === currentItem && styles.settings__button__active
                    }`}
                    key={item}
                    onClick={event => onClick(item)}
                >
                    {item}
                </div>
            ))}
        </div>
    );
}

export default InputRange;
