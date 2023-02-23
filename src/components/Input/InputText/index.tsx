import { FocusEventHandler, KeyboardEventHandler, useState } from 'react';
import styles from './styles.module.css';


type Props = {
    value: string;
    onChange?: (event) => void;
};


export const InputTextLazy = ({ value, onChange }: Props) => {
    const [newValue, setValue] = useState(value);

    const onBlur: FocusEventHandler<HTMLInputElement> = () => onChange(newValue);

    const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.key === 'Enter') {
            onChange(newValue);
        }
    };

    return (
        <input
            placeholder={placeholder}
            type="text"
            defaultValue={String(value)}
            onChange={event => setValue(event.target.value)}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
        />
    );
};

export const InputText = ({ value, onChange }: Props) => {
    return (
        <input
            type="text"
            value={String(value)}
            readOnly={onChange ? false : true}
            className={styles.input__field}
            onChange={event => onChange(event.target.value)}
        />
    );
};
