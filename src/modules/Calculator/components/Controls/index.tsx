import React from 'react';
import ControlItem from './components/ControlItem';
import styles from './styles.module.css';

function Controls() {
  return (
    <div>
      <ControlItem title="Цвет">
        <div className={styles.settings__buttons}>
          <div
            className={styles.settings__button}
            style={{ background: 'rgb(255, 255, 255);' }}
          >
            Потолок
          </div>{' '}
          <div
            className={styles.settings__button}
            style={{ background: 'rgb(165, 200, 219);' }}
          >
            Стены
          </div>{' '}
          <div
            className={styles.settings__button}
            style={{ background: 'rgb(98, 108, 110);' }}
          >
            Пол
          </div>
        </div>
      </ControlItem>
      <ControlItem title="Материал">
        <div className={styles.settings__buttons}>
          <div className={styles.settings__button}>Глянец</div>{' '}
          <div className={styles.settings__button}>Матовый</div>{' '}
          <div className={styles.settings__button}>Сатин</div>
          <div className={styles.settings__button}>Облака</div>
        </div>
      </ControlItem>
      <ControlItem title="Класс">
        <div className={styles.settings__buttons}>
          <div className={styles.settings__button}>Эконом (КНР)</div>{' '}
          <div className={styles.settings__button}>Премиум (Германия)</div>{' '}
        </div>
      </ControlItem>
      <ControlItem title="Площадь, м²">
        <input type="number" className={styles.input__field} />
      </ControlItem>
      <ControlItem title="Количество светильников">
        <input type="number" className={styles.input__field} />
      </ControlItem>
      <ControlItem title="Цена">
        <input
          type="text"
          placeholder="Цена в рублях"
          readOnly
          className={styles.input__field}
        />
      </ControlItem>
      <ControlItem title="Скидка">
        <input
          type="text"
          placeholder="Цена в рублях"
          readOnly
          className={styles.input__field}
        />
      </ControlItem>
      <ControlItem title="Цена со скидкой">
        <input
          type="text"
          placeholder="Цена в рублях"
          readOnly
          className={styles.input__field}
        />
      </ControlItem>
      <p className={styles.settings__notice}>
        Итоговая цена является достаточно точной, но все-таки приблизительной.
      </p>
      <p className={styles.settings__notice}>
        При оплате 50% стоимости заказа доступна рассрочка на три месяца с
        ежемесячным платежом 0.00 ₽
      </p>
    </div>
  );
}

export default Controls;
