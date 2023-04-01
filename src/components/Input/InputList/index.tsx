import { FocusEventHandler, KeyboardEventHandler, useState } from 'react';
import styles from './index.module.css';
import { withAnimation } from '../withAnimation';


interface Props {
    value: string[],
    placeholder?: string,
    onChange: (value: string[]) => void,
}


export const InputList = withAnimation(({ value: initialValue, placeholder = '', onChange }: Props) => {
    const [value, setValue] = useState(initialValue);

    const onBlur: FocusEventHandler<HTMLInputElement> = () => {
        if (initialValue !== value) {
            onChange(value);
        }
    };

    const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.code === 'Enter' && initialValue !== value) {
            onChange(value);
        }
    };

    return (
        <input
            className={styles.root}
            placeholder={placeholder}
            type="text"
            defaultValue={value.join(', ')}
            onChange={event => setValue(event.target.value.split(',').map(v => v.trim()))}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
        />
    );
});
