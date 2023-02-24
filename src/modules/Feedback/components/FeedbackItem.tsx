import { Feedback } from '../../../types';
import styles from './styles.module.css';

const FeedbackItem = ({ picture, author, date, text }: Feedback) => {
    return (
        <div className={styles.root}>
            <div
                className={styles.picture}
                style={{
                    backgroundImage: `url(${picture})`,
                }}
            />
            <div className={styles.author}>{author}</div>
            <div className={styles.date}>{date}</div>
            <div className={styles.text}>{text}</div>
        </div>
    );
};

export default FeedbackItem;
