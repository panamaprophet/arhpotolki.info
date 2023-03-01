import styles from './styles.module.css';


export const Menu = ({ links, onClick }) => (
    <nav className={styles.root} onClick={onClick}>
        {links.map(item => (
            <a key={item.id} href={`#${item.id}`} className={styles.link}>
                {item.title}
            </a>
        ))}
    </nav>
);
