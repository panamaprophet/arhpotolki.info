import React, { useState } from "react";
import Title from "../../components/Title";
import mockButtons from "./mockButtons";
import Button from "./components/Button";
import Image from "./components/Image";
import styles from "./styles.module.css";
import mockImages from "./mockImages";

type Button = {
  category: string;
};

type FilterType = "all" | "category";

function Examples() {
  const [currentButton, setCurrentButton] = useState(mockButtons[0]);
  const [filterType, setFilterType] = useState("all");

  const filteredGallery = mockImages.filter(
    (img) => img.category === currentButton.category
  );

  const handleFilter = (filter: FilterType) => setFilterType(filter);

  const handleClick = (button: Button) => setCurrentButton(button);

  const FullGallery = () => (
    <ul className={styles.gallery}>
      {mockImages.map((img) => (
        <li key={img.path} className={styles.gallery__item}>
          <Image key={img.path} path={img.path} />
        </li>
      ))}
    </ul>
  );

  const GalleryWithFilters = () => (
    <>
      <ul className={styles.filter}>
        {mockButtons.map((button: Button) => (
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
          <li key={img.path} className={styles.gallery__item}>
            <Image path={img.path} />
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <section id="examples" className={`${styles.examples} layout`}>
      <Title>
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
      </Title>
      {filterType === "all" && <FullGallery />}
      {filterType === "category" && <GalleryWithFilters />}
    </section>
  );
}

export default Examples;
