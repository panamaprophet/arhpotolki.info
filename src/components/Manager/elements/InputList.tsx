import { onEnter, mapTargetValue } from '../helpers';


export const InputList = ({ value, onChange }) => {
    const handler = mapTargetValue(newValue => onChange(newValue.split(' ')));

    return (<input
        type="text"
        defaultValue={value.join(' ')}
        onKeyDown={onEnter(handler)}
        onBlur={handler}
    />);
};
