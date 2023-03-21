import { useState } from 'react';
import { ButtonWithStatus } from '../ButtonWithStatus';
import { InputFile, InputText } from '../Input';
import styles from './index.module.css';


interface Props {
    onSubmit: (data: { name: string, city: string, text: string, picture: string }) => void,
    onClose: () => void,
}


export const FeedbackForm = ({ onSubmit, onClose }: Props) => {
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
            <div className={styles.closeButton} onClick={onClose}>x</div>
            <InputText placeholder="Пожалуйста, представьтесь" value={name} onChange={setName} />
            <InputText placeholder="Ваш город" value={city} onChange={setCity} />
            <InputText placeholder="Отзыв" value={text} onChange={setText} />

            <InputFile onUpload={setPicture} />

            <ButtonWithStatus 
                theme="green"
                disabled={isDisabled}
                className={styles.submitButton}
                onClick={() => onSubmit({ name, city, text, picture })}
                status={['Отправить','Отправляется','Отправлено','Ошибка']}
            />
        </form>
    );
};
