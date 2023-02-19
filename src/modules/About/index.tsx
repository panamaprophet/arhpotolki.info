import React from "react";
import styles from "./styles.module.css";
import about from "./about";
import Card from "./components/Card";
import BlockTitle from "../../components/BlockTitle";

function About() {
  return (
    <section id="advantages" className={styles.about}>
      <div className={`${styles.about__content} layout`}>
        <BlockTitle>Только у нас:</BlockTitle>
        <ul className={styles.advantagesList}>
          {about.map((item) => (
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
