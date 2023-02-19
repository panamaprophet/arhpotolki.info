import React, { useState } from "react";
import BlockTitle from "../../components/BlockTitle";
import buttons from "./buttons";
import Button from "./components/Button";
import Image from "./components/Image";
import styles from "./styles.module.css";
import gallery from "./gallery";

type Button = {
  category: string;
};

type FilterType = "all" | "category";

function Examples() {
  const [currentButton, setCurrentButton] = useState(buttons[0]);
  const [filterType, setFilterType] = useState("all");

  const filteredGallery = gallery.filter(
    (img) => img.category === currentButton.category
  );

  const handleFilter = (filter: FilterType) => setFilterType(filter);

  const handleClick = (button: Button) => setCurrentButton(button);

  const FullGallery = () => (
    <ul className={styles.gallery}>
      {gallery.map((img) => (
        <li className={styles.gallery__item}>
          <Image key={img.path} path={img.path} />
        </li>
      ))}
    </ul>
  );

  const GalleryWithFilters = () => (
    <>
      <ul className={styles.filter}>
        {buttons.map((button: Button) => (
          <Button
            key={button.category}
            button={button}
            onClick={handleClick}
            isActive={button === currentButton}
          />
        ))}
      </ul>
      <ul className={styles.gallery}>
        {filteredGallery.map((img) => (
          <li className={styles.gallery__item}>
            <Image key={img.path} path={img.path} />
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <section id="examples" className={`${styles.examples} layout`}>
      <BlockTitle>
        Наши работы (
        <span
          className={styles.filter__type}
          onClick={() => handleFilter("all")}
        >
          все
        </span>{" "}
        или{" "}
        <span
          className={styles.filter__type}
          onClick={() => handleFilter("category")}
        >
          по категориям
        </span>
        )
      </BlockTitle>
      {filterType === "all" && <FullGallery />}
      {filterType === "category" && <GalleryWithFilters />}
    </section>
  );
}

export default Examples;
