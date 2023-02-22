import { FocusEventHandler, KeyboardEventHandler, useState } from 'react';


export const InputList = ({ value, onChange }) => {
    const [newValue, setValue] = useState(value);

    const onBlur: FocusEventHandler<HTMLInputElement> = () => {
        if (value !== newValue) {
            onChange(newValue);
        }
    };

    const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.code === 'Enter' && value !== newValue) {
            onChange(newValue);
        }
    };

    return (
        <input
            type="text"
            defaultValue={newValue.join(' ')}
            onChange={event => setValue(event.target.value.split(' '))}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
        />
    );
};
