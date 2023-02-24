import { useState } from "react";
import { InputFile, InputText } from "../Input";
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

            <button className={styles.submitButton} type="button" onClick={() => onSubmit({ name, city, text, picture })}>Отправить</button>
        </form>
    );
};
