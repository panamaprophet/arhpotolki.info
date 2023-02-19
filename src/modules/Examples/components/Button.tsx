import React from "react";
import styles from "./styles.module.css";

function Button({ onClick, text, isActive }) {
  return (
    <li
      onClick={onClick}
      className={`${styles.filter__item} ${
        isActive && styles.filter__item__active
      }`}
    >
      {text}
    </li>
  );
}

export default Button;
