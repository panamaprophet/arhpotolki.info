import { FocusEventHandler, KeyboardEventHandler, useState } from 'react';
import styles from './styles.module.css';


type Props = {
    value: string,
    placeholder?: string,
    onChange?: (value: string) => void,
};


export const InputText = ({ value, placeholder, onChange }: Props) => {
    return (
        <input
            placeholder={placeholder}
            type="text"
            value={String(value)}
            readOnly={onChange ? false : true}
            className={styles.root}
            onChange={event => onChange(event.target.value)}
        />
    );
};

export const InputTextLazy = ({ value: initialValue, placeholder, onChange }: Props) => {
    const [value, setValue] = useState(initialValue);
    const isChanged = value !== initialValue;

    const onBlur: FocusEventHandler<HTMLInputElement> = () => {
        if (isChanged) {
            onChange(value);
        }
    };

    const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (isChanged && event.key === 'Enter') {
            onChange(value);
        }
    };

    return (
        <input
            placeholder={placeholder}
            type="text"
            defaultValue={String(value)}
            onChange={event => setValue(event.target.value)}
            onKeyDown={onKeyDown}
            className={styles.root}
            onBlur={onBlur}
        />
    );
};
