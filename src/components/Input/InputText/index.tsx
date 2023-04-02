import { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler, useState } from 'react';
import styles from './styles.module.css';
import { withAnimation } from '../withAnimation';


type Props = {
    value: string,
    placeholder?: string,
    onChange?: (value: string) => void,
};


export const InputText = ({ value, placeholder, onChange }: Props) => {
    const _onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (onChange) {
            onChange(String(event.target.value));
        }
    }

    return (
        <input
            placeholder={placeholder}
            type="text"
            value={String(value)}
            readOnly={onChange ? false : true}
            className={styles.root}
            onChange={_onChange}
        />
    );
};

export const _InputTextLazy = ({ value: initialValue, placeholder, onChange }: Props) => {
    const [value, setValue] = useState(initialValue);
    const isValueChanged = value !== initialValue;

    const onBlur: FocusEventHandler<HTMLInputElement> = () => {
        if (isValueChanged && onChange) {
            onChange(value);
        }
    };

    const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (isValueChanged && onChange && event.key === 'Enter') {
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

export const InputTextLazy = withAnimation(_InputTextLazy);
