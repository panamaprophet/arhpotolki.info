import { FocusEventHandler, KeyboardEventHandler, useState } from 'react';


export const InputList = ({ value: initialValue, onChange }) => {
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
            type="text"
            defaultValue={value.join(' ')}
            onChange={event => setValue(event.target.value.split(' '))}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
        />
    );
};
