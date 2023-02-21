import { onEnter, mapTargetValue } from '../helpers';


export const InputText = ({ name, value, onChange }) => (
    <input
        type="text"
        defaultValue={String(value)}
        onKeyDown={onEnter(mapTargetValue(newValue => onChange({ [name]: newValue })))}
    />
);
