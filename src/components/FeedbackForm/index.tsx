import { useState } from 'react';
import { AwsFileUploader } from '../AwsFileUploader';
import { ButtonWithStatus } from '../ButtonWithStatus';
import { InputText } from '../Input';
import styles from './index.module.css';


interface Props {
    onSubmit: (data: { name: string, city: string, text: string, picture: string }) => void,
}


export const FeedbackForm = ({ onSubmit }: Props) => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [text, setText] = useState('');
    const [picture, setPicture] = useState('');

    const onUpload = ([url]: string[]) => setPicture(url);

    const isDisabled = !name.length || !city.length || !text.length;

    return (
        <form className={styles.root}>
            <InputText placeholder="Пожалуйста, представьтесь" value={name} onChange={setName} />
            <InputText placeholder="Ваш город" value={city} onChange={setCity} />
            <InputText placeholder="Отзыв" value={text} onChange={setText} />

            <AwsFileUploader onUpload={onUpload} />

            <ButtonWithStatus
                theme="green"
                disabled={isDisabled}
                className={styles.submitButton}
                onClick={() => onSubmit({ name, city, text, picture })}
                status={['Отправить', 'Отправляется', 'Отправлено', 'Ошибка']}
            />
        </form>
    );
};
