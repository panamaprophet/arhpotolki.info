import React from "react";
import styles from "./styles.module.css";
import BlockTitle from "../../components/BlockTitle";
import cards from "./cards";
import Card from "../About/components/Card";

function HowItWorks() {
  return (
    <section id="howto" className="layout">
      <BlockTitle>Как это работает?</BlockTitle>
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
