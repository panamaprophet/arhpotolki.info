import React from "react";
import styles from "./styles.module.css";
import Title from "../../components/Title";
import mock from "./mock";

function Certificates() {
  return (
    <section id="certificates" className="layout">
      <Title>Сертификаты соответствия:</Title>
      <ul className={styles.certificates__list}>
        {mock.map((cert) => (
          <li key={cert.path} className={styles.certificates__list__item}>
            <img src={cert.path} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certificates;
