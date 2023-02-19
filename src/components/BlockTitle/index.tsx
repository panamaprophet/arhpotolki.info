import React from "react";
import styles from "./style.module.css";

function BlockTitle({ children }) {
  return <h2 className={styles.title}>{children}</h2>;
}

export default BlockTitle;
