import { Feedback } from '../../types';
import Image from 'next/image';
import styles from './styles.module.css';

export const FeedbackItem = ({ picture, author, date, text }: Omit<Feedback, 'id'>) => (
    <div className={styles.root}>
        <div className={styles.picture}>
            <Image
                style={{ 
                    objectFit: 'contain', 
                    borderRadius: '6px' 
                }}
                src={picture}
                alt="author" 
                fill
            />
        </div>
        <div className={styles.author}>{author}</div>
        <div className={styles.date}>{date}</div>
        <div className={styles.text}>{text}</div>
    </div>
);
