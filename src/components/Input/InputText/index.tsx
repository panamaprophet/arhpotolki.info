import React from 'react';
import styles from './styles.module.css';

type InputProps = {
    value: string;
    onChange?: (event) => void;
    readonly: boolean;
};

const InputText = ({
    value,
    onChange,
    readonly = false,
    ...props
}: InputProps) => {
    return (
        <input
            type="text"
            value={String(value)}
            readOnly={Boolean(readonly)}
            className={styles.input__field}
            onChange={event => onChange(event.target.value)}
            {...props}
        />
    );
};

export default InputText;
