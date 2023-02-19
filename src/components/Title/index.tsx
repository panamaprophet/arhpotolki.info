import React from 'react';
import styles from './style.module.css';

function Title({ children }) {
  return <h2 className={styles.title}>{children}</h2>;
}

export default Title;
