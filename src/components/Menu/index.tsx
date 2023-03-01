import styles from './styles.module.css';


export const Menu = ({ links, onClick }) => (
    <div className={styles.navigation} onClick={onClick}>
        <ul className={styles.menu}>
            {links.map((item) =>
                <li key={item.id} className={styles.item} >
                    <a href={`#${item.id}`} className={styles.link}>
                      {item.title}
                    </a>
                </li>
            )}
        </ul>
    </div>
);
