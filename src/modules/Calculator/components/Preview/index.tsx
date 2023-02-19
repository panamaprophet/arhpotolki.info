import React from "react";
import styles from "./styles.module.css";

function Preview() {
  return (
    <>
      <div className={styles.visualizer__view__preview}>
        <div className={styles.visualizer__view__background}>
          <img
            src="/visualizer/walls.png"
            className={styles.visualizer__view__preview__image}
          />
          <img
            src="/visualizer/gloss.png"
            className={styles.visualizer__view__preview__image__head}
          />
        </div>

        <div className={styles.visualizer__view__preview__mask}>
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 842 574"
            version="1.1"
          >
            <polygon
              points="730,95,766,0,0,0,0,20,282,134"
              fill="#ffffff"
            ></polygon>
            <polygon
              points="0,16,284,124,726,90,762,0,842,0,842,432,722,380,276,350,0,424,0,246"
              fill="#a5c8db"
            ></polygon>
            <polygon
              points="275,350,722,380,842,432,842,574,0,574,0,424"
              fill="#626c6e"
            ></polygon>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Preview;
