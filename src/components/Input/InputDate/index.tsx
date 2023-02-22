import { ChangeEventHandler } from 'react';


export const InputDate = ({ value, onChange }: { value: number, onChange: (value: number) => void }) => {
    const date = new Date(value);
    const initialValue = date.toISOString().split('T')[0]; // yyyy-mm-dd

    const _onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const newDate = new Date(event.target.value);
        const timestamp = newDate.getTime() / 1000;

        onChange(timestamp);
    };

    return (<input type="date" defaultValue={initialValue} onChange={_onChange} />);
};
