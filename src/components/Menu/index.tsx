import styles from './styles.module.css';

function Menu({ links, onClick }) {
  return (
    <div className={styles.navigation}>
      <ul className={styles.menu}>
        {links.map((item) => 
          <li key={item.id} className={styles.item} onClick={onClick}>
            <a href={item.link} className={styles.link}>
                {item.title}
            </a>
        </li>
        )}
      </ul>
    </div>
  );
}

export default Menu;
