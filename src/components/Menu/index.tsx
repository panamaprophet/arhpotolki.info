import styles from './styles.module.css';

function Menu({ onClick }) {
  return (
    <div className={styles.navigation}>
      <div className={styles.closeButton} onClick={onClick}>
        X
      </div>
      <ul className={styles.menu} onClick={onClick}>
        <li className={styles.item}>
          <a href="#advantages" className={styles.link}>
            Преимущества
          </a>
        </li>
        <li className={styles.item}>
          <a href="#examples" className={styles.link}>
            Наши работы
          </a>
        </li>
        <li className={styles.item}>
          <a href="#calculator" className={styles.link}>
            Расчёт стоимости
          </a>
        </li>
        <li className={styles.item}>
          <a href="#application" className={styles.link}>
            Оставить заявку
          </a>
        </li>
        <li className={styles.item}>
          <a href="#footer" className={styles.link}>
            Контакты
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
