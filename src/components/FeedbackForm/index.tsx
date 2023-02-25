import { useState } from 'react';
import { Button } from '../Button';
import { InputFile, InputText } from '../Input';
import styles from './index.module.css';

export const FeedbackForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [text, setText] = useState('');
    const [picture, setPicture] = useState('');

    return (
        <form className={styles.root}>
            <InputText placeholder="Пожалуйста, представьтесь" value={name} onChange={setName} />
            <InputText placeholder="Ваш город" value={city} onChange={setCity} />
            <InputText placeholder="Отзыв" value={text} onChange={setText} />

            <InputFile onUpload={setPicture} />

            <Button type="classic" wide={true} size="large" onClick={() => onSubmit({ name, city, text, picture })}>
                Отправить
            </Button>
        </form>
    );
};
