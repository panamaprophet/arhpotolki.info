import React from "react";
import styles from "./styles.module.css";
import mock from "./mock";
import Card from "./components/Card";
import Title from "../../components/Title";

function About() {
  return (
    <section id="advantages" className={styles.about}>
      <div className={`${styles.about__content} layout`}>
        <Title>Только у нас:</Title>
        <ul className={styles.advantagesList}>
          {mock.map((item) => (
            <li className={styles.advantages__item} key={item.text}>
              <Card path={item.svg} text={item.text} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
