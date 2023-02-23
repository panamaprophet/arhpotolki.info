import styles from './styles.module.css';

function FeedbackItem({ person }) {
    return (
        <div className={styles.response}>
            <div
                className={styles.response__photo}
                style={{
                    backgroundImage: `url(${person.img})`,
                }}
            />
            <div className={styles.response__name}>{person.name}</div>
            <div className={styles.response__date}>{person.date}</div>
            <div className={styles.response__message}>{person.description}</div>
        </div>
    );
}

export default FeedbackItem;
