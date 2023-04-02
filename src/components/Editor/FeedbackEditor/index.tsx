import Image from 'next/image';
import { useState } from 'react';
import { Feedback } from '../../../types';
import { Button } from '../../Button';
import { InputDate, InputTextLazy } from '../../Input';
import { Column, Row } from '../../Layout';
import { Section } from '../../Section';
import styles from './index.module.css';


interface Props extends Feedback {
    onUpdate: (item: Feedback) => void,
    onRemove: (item: Feedback) => void,
};


export const FeedbackEditor = ({ onUpdate, onRemove, ...props }: Props) => {
    const [state, setState] = useState<Feedback>(props);
    const [isSaved, setSaved] = useState(true);

    const onChange = (changes: Partial<Feedback>) => {
        setState({ ...state, ...changes });
        setSaved(false);
    };

    if (!isSaved) {
        onUpdate(state);
        setSaved(true);
    }

    return (
        <Section>
            <Row>
                {props.picture && <Image width="160" height="160" src={props.picture} className={styles.image} alt="" />}
                <Column>
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
                </Column>
            </Row>
        </Section>
    );
};
