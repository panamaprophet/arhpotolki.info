import React from "react";
import styles from "./styles.module.css";
import BlockTitle from "../../components/BlockTitle";

function Application() {
  return (
    <section id="application" className={styles.application}>
      <div className="layout">
        <BlockTitle>Оставить заявку:</BlockTitle>
        <form
          action="/gate/"
          method="POST"
          className={styles.application__form}
        >
          <fieldset className={styles.application__form__container}>
            <input
              type="text"
              placeholder="Имя"
              minLength={2}
              className={styles.application__form__field}
            />
            <input
              type="text"
              placeholder="Телефон"
              minLength={16}
              className={styles.application__form__field}
            />
            <button disabled className={styles.application__form__button}>
              Отправить
            </button>
            <p className={styles.application__annotation}>
              Мы гарантируем конфиденциальность данных оставленных на сайте.
            </p>
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default Application;
