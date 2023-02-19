import React from "react";
import styles from "./styles.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerText}>
        Скидки 20% до конца февраля! Звоните.
      </div>
      <a href="#description">
        <div className={styles.link}>
          <span className={`${styles.arrow} ${styles.leftArrow}`}></span>
          <span className={`${styles.arrow} ${styles.rightArrow}`}></span>
        </div>
      </a>
    </div>
  );
}

export default Footer;
