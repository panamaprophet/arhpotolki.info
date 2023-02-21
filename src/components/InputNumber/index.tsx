import React from 'react';
import styles from './styles.module.css';

function InputNumber({ value, onChange, readonly = false, ...props }) {
    return (
        <input
            type="number"
            value={String(value)}
            readOnly={Boolean(readonly)}
            className={styles.input__field}
            onChange={event => onChange(event.target.value)}
            {...props}
        />
    );
}

export default InputNumber;
