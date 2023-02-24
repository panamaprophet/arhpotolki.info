import styles from './styles.module.css';


export const Card = ({ children }) => (
    <div className={styles.root}>
        {children}
    </div>
);
