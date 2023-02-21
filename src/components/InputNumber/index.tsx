import React from 'react';
import styles from './styles.module.css';

function InputNumber({
    value,
    type = '',
    onChange,
    readonly = false,
    ...props
}) {
    return (
        <input
            type={type}
            value={String(value)}
            readOnly={Boolean(readonly)}
            className={styles.input__field}
            onChange={event => onChange(event.target.value)}
            {...props}
        />
    );
}

export default InputNumber;
