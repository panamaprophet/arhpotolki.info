/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import { Feedback } from '../../../types';
import { InputDate, InputTextLazy } from '../../Input';


interface Props extends Feedback {
    onUpdate: (item: Feedback) => void,
    onRemove: (item: Pick<Feedback, 'id'>) => void,
};


export const FeedbackEditor = ({ onUpdate, onRemove, ...props }: Props) => {
    const [state, setState] = useState(props);
    const [isSaved, setSaved] = useState(true);

    const onChange = (changes) => {
        setState({ ...state, ...changes });
        setSaved(false);
    };

    useEffect(() => {
        if (!isSaved) {
            onUpdate(state);
            setSaved(true);
        }
    }, [isSaved]);

    return (
        <div>
            <InputTextLazy value={state.author} onChange={author => onChange({ author })} />
            <InputTextLazy value={state.text} onChange={text => onChange({ text })} />
            <InputDate value={state.date} onChange={date => onChange({ date })} />

            <button onClick={() => onRemove(state)}>Х</button>
        </div>
    );
};