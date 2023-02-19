import React from "react";
import mockImages from "./mocks/mockImages";
import Image from "./Image";
import styles from "./styles.module.css";

function FullGallery() {
  return (
    <ul className={styles.gallery}>
      {mockImages.map((img) => (
        <li key={img.path} className={styles.gallery__item}>
          <Image key={img.path} path={img.path} />
        </li>
      ))}
    </ul>
  );
}

export default FullGallery;
