import React from 'react';
import styles from './styles.module.css';

type InputProps = {
    value: number;
    onChange?: (event) => void;
    readonly?: boolean;
};

export const InputNumber = ({
    value,
    onChange,
    readonly,
    ...props
}: InputProps) => {
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
};
