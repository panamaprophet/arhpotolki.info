import { useState } from 'react';
import { PrefetchFeedback } from '../../widgets/Feedbacks';
import { Button } from '../Button';
import { ButtonWithStatus } from '../ButtonWithStatus';
import { InputFile, InputText } from '../Input';
import { Row } from '../Layout';
import styles from './index.module.css';


interface Props {
    onSubmit: (data: PrefetchFeedback) => void;
}


export const FeedbackForm = ({ onSubmit }: Props) => {
    const [author, setAuthor] = useState('');
    const [city, setCity] = useState('');
    const [text, setText] = useState('');
    const [picture, setPicture] = useState<File>(null);

    const isDisabled = !author.length || !city.length || !text.length;

    return (
        <form className={styles.root}>
            <InputText placeholder="Пожалуйста, представьтесь" value={author} onChange={setAuthor} />
            <InputText placeholder="Ваш город" value={city} onChange={setCity} />
            <InputText placeholder="Отзыв" value={text} onChange={setText} />

            {picture ? (
                <Row>
                    <strong className={styles.text}>{picture.name}</strong>
                    <Button size="small" onClick={() => setPicture(null)} theme="orange">
                        &#10539;
                    </Button>
                </Row>
            ) : (
                <InputFile multiple={false} onChange={files => setPicture(files[0])} />
            )
            }

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
