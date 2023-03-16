/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import { Feedback } from '../../../types';
import { Button } from '../../Button';
import { InputDate, InputTextLazy } from '../../Input';
import { Row } from '../../Layout';
import { Section } from '../../Section';


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
        <Section>
            <Row>
                <strong>Имя:</strong>
                <InputTextLazy value={state.author} onChange={author => onChange({ author })} />
            </Row>
            <Row>
                <strong>Текст:</strong>
                <InputTextLazy value={state.text} onChange={text => onChange({ text })} />
            </Row>
            <Row>
                <strong>Дата:</strong>
                <InputDate value={state.date} onChange={date => onChange({ date })} />
            </Row>

            <Button theme="orange" onClick={() => onRemove(state)}>Удалить</Button>
        </Section>
    );
};
