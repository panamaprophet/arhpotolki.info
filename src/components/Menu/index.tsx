import { Link } from '../Link';
import styles from './styles.module.css';

interface Props {
    links: { id: string, title: string }[],
    // @todo: fix it with click on menu item instead of nav and pass some params outside (like id?)
    onClick: () => void,
}

export const Menu = ({ links, onClick }: Props) => (
    <nav className={styles.root} onClick={onClick}>
        {links.map(item => (
            <Link key={item.id} href={`#${item.id}`} className={`${styles.link}`}>
                {item.title}
            </Link>
        ))}
    </nav>
);
