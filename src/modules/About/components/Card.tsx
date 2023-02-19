import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

function Card({ path, text }) {
  return (
    <>
      <div className={styles.advantages__itemIcon}>
        <img className={styles.advantages__itemIcon__img} src={path} />
      </div>
      <div className={styles.advantages__itemTitle}>{text}</div>
    </>
  );
}

export default Card;