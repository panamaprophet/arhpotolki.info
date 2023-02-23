import styles from './styles.module.css';
import Title from '../../components/Title';
import mock from './mock';
import Card from '../About/components/Card';

function HowItWorks() {
  return (
    <section id="howto" className="layout">
      <Title>Как это работает?</Title>
      <ul className={styles.howto}>
        {mock.map((item) => (
          <li className={styles.howto__item} key={item.text}>
            <div className={styles.howto__list__item__icon}>
              <img className={styles.howto__list__item__icon} src={item.svg} />
            </div>
            <div className={styles.howto__list__item__title}>{item.text}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HowItWorks;
