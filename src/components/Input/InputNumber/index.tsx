import React from 'react';
import styles from './styles.module.css';

type InputProps = {
    value: number;
    onChange?: (event) => void;
};

export const InputNumber = ({ value, onChange, ...props }: InputProps) => {
    return (
        <input
            type="number"
            value={String(value)}
            readOnly={onChange ? false : true}
            className={styles.input__field}
            onChange={event => onChange(event.target.value)}
            {...props}
        />
    );
};
