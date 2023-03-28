import { Feedback } from '../../types';
import Image from 'next/image';
import styles from './styles.module.css';
import { Column } from '../Layout';


const formatDate = (timestamp: number, locale = 'ru') => {
    const date = new Date(timestamp);

    return date.toLocaleDateString(locale);
};


export const FeedbackItem = ({ picture, author, date, text }: Omit<Feedback, 'id'>) => (
    <div className={styles.root}>
        <div className={styles.pictureContainer}>
            {picture && <Image
                className={styles.picture}
                src={picture}
                alt="author"
                sizes="33vw"
                fill
            />}
        </div>
        <Column>
            <div className={styles.author}>{author}</div>
            <div className={styles.date}>{formatDate(date)}</div>
            <div className={styles.text}>{text}</div>
        </Column>
    </div>
);
