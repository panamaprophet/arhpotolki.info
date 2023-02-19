import React from "react";
import styles from "./styles.module.css";

function ControlItem({ children, title }) {
  return (
    <label className={styles.control__item}>
      <span className={styles.control__item__title}>{title}:</span>
      {children}
    </label>
  );
}

export default ControlItem;
