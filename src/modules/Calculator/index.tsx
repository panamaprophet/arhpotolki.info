import React from "react";
import styles from "./styles.module.css";
import BlockTitle from "../../components/BlockTitle";
import Preview from "./components/Preview";
import Controls from "./components/Controls";

function Calculator() {
  return (
    <section id="calculator" className="layout">
      <BlockTitle>Рассчитать стоимость:</BlockTitle>
      <div className={styles.visualizer}>
        <div className={styles.visualizer__view}>
          <Preview />
          <Controls />
        </div>
      </div>
    </section>
  );
}

export default Calculator;
