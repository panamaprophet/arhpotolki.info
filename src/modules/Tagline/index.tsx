import React from "react";
import styles from "./styles.module.css";

function Tagline() {
  return (
    <section className={styles.slogan}>
      <div className="layout">
        <p className={styles.tagline__text}>
          Изготовление - от одного дня, монтаж - от двух часов.
        </p>
      </div>
    </section>
  );
}

export default Tagline;
