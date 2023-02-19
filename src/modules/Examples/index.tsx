import React from "react";
import BlockTitle from "../../components/BlockTitle";
import buttons from "./buttons";
import Button from "./components/Button";
import Image from "./components/Image";
import styles from "./styles.module.css";
import gallery from "./gallery";

function Examples() {
  const handleClick = () => {};

  return (
    <section id="examples" className={`${styles.examples} layout`}>
      <BlockTitle>
        Наши работы (<span>все</span> или <span>по категориям</span>)
      </BlockTitle>
      <ul className={styles.filter}>
        {buttons.map((button) => (
          <Button
            key={button.text}
            text={button.text}
            onClick={handleClick}
            isActive={true}
          />
        ))}
      </ul>
      <ul className={styles.gallery}>
        {gallery.map((img) => (
          <li className={styles.gallery__item}>
            <Image key={img.path} path={img.path} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Examples;
