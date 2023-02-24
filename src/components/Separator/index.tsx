import styles from './styles.module.css';


export const Separator = ({ text }: { text?: string }) => (
    <div className={styles.root}>
        {text}
    </div>
);
