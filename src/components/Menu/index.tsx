import { Link } from '../Link';
import styles from './styles.module.css';


export const Menu = ({ links, onClick }) => (
    <nav className={styles.root} onClick={onClick}>
        {links.map(item => (
            <Link key={item.id} href={`#${item.id}`} classes={[styles.link]}>
                {item.title}
            </Link>
        ))}
    </nav>
);
