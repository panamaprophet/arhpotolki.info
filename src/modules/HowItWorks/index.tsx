import React from "react";
import styles from "./styles.module.css";
import Title from "../../components/Title";
import cards from "./cards";
import Card from "../About/components/Card";

function HowItWorks() {
  return (
    <section id="howto" className="layout">
      <Title>Как это работает?</Title>
      <ul className={styles.howto}>
        {cards.map((item) => (
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
