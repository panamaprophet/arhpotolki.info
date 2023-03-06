import { useState } from 'react';
import { Button } from '../Button';
import { InputFile, InputText } from '../Input';
import styles from './index.module.css';


interface Props {
    onSubmit: (data: { name: string, city: string, text: string, picture: string }) => void,
}


export const FeedbackForm = ({ onSubmit }: Props) => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [text, setText] = useState('');
    const [picture, setPicture] = useState('');

    let isDisabled = false;

    if (!name.length || !city.length || !text.length) {
        isDisabled = true;
    }

    return (
        <form className={styles.root}>
            <InputText placeholder="Пожалуйста, представьтесь" value={name} onChange={setName} />
            <InputText placeholder="Ваш город" value={city} onChange={setCity} />
            <InputText placeholder="Отзыв" value={text} onChange={setText} />

            <InputFile onUpload={setPicture} />

            <Button disabled={isDisabled} theme="green" className={styles.submitButton} onClick={() => onSubmit({ name, city, text, picture })}>
                Отправить
            </Button>
        </form>
    );
};
