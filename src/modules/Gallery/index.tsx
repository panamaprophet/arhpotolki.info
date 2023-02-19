import React, { useState } from "react";
import Title from "../../components/Title";
import styles from "./styles.module.css";
import FullGallery from "./components/FullGallery";
import GalleryWithFilters from "./components/GalleryWithFilters";

type FilterType = "all" | "category";

function Gallery() {
  const [filterType, setFilterType] = useState("all");

  const handleFilter = (filter: FilterType) => setFilterType(filter);

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
      {filterType === "all" ? <FullGallery /> : <GalleryWithFilters />}
    </section>
  );
}

export default Gallery;
