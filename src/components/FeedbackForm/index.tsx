import { useState } from 'react';
import { Button } from '../Buttons/Button';
import { ButtonWithStatus } from '../Buttons/ButtonWithStatus';
import { InputFile, InputText } from '../Input';
import { Row } from '../Layout';
import styles from './index.module.css';


interface Props {
    onSubmit: (data: { author: string, city: string, text: string, picture?: File }) => void;
}


export const FeedbackForm = ({ onSubmit }: Props) => {
    const [author, setAuthor] = useState('');
    const [city, setCity] = useState('');
    const [text, setText] = useState('');
    const [picture, setPicture] = useState<File>();

    const isDisabled = !author.length || !city.length || !text.length;

    return (
        <form className={styles.root}>
            <InputText placeholder="Пожалуйста, представьтесь" value={author} onChange={setAuthor} />
            <InputText placeholder="Ваш город" value={city} onChange={setCity} />
            <InputText placeholder="Отзыв" value={text} onChange={setText} />

            {picture && (
                <Row>
                    <strong>{picture.name}</strong>
                    <Button size="small" onClick={() => setPicture(undefined)} theme="orange">
                        &#10539;
                    </Button>
                </Row>
            )}

            {!picture && (
                <InputFile multiple={false} onChange={files => setPicture(files[0])} />
            )}

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
