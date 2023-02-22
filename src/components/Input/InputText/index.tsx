import { FocusEventHandler, KeyboardEventHandler, useState } from 'react';


export const InputText = ({ value, onChange }) => {
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
