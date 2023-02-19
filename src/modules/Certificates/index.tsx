import React from "react";
import styles from "./styles.module.css";
import BlockTitle from "../../components/BlockTitle";
import certs from "./certs";

function Certificates() {
  return (
    <section id="certificates" className="layout">
      <BlockTitle>Сертификаты соответствия:</BlockTitle>
      <ul className={styles.certificates__list}>
        {certs.map((cert) => (
          <li key={cert.path} className={styles.certificates__list__item}>
            <img src={cert.path} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certificates;
