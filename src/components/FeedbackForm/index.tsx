import { useState } from 'react';
import { Feedback } from '../../types';
import { ButtonWithStatus } from '../ButtonWithStatus';
import { InputFile, InputText } from '../Input';
import styles from './index.module.css';

interface Props {
    onSubmit: (data: Omit<Feedback, 'id' | 'date'>) => void;
}

export const FeedbackForm = ({ onSubmit }: Props) => {
    const [author, setAuthor] = useState('');
    const [city, setCity] = useState('');
    const [text, setText] = useState('');
    const [picture, setPicture] = useState('');

    let isDisabled = false;

    if (!author.length || !city.length || !text.length) {
        isDisabled = true;
    }

    return (
        <form className={styles.root}>
            <InputText placeholder="Пожалуйста, представьтесь" value={author} onChange={setAuthor} />
            <InputText placeholder="Ваш город" value={city} onChange={setCity} />
            <InputText placeholder="Отзыв" value={text} onChange={setText} />

            <InputFile onUpload={setPicture} />

            <ButtonWithStatus
                theme="green"
                disabled={isDisabled}
                className={styles.submitButton}
                onClick={() => onSubmit({ author, city, text, picture })}
                status={['Отправить', 'Отправляется', 'Отправлено', 'Ошибка']}
            />
        </form>
    );
};
