import React from 'react';
import styles from './styles.module.css';
import Title from '../../components/Title';
import Preview from './components/Preview';
import Controls from './components/Controls';

function Calculator() {
  return (
    <section id="calculator" className="layout">
      <Title>Рассчитать стоимость:</Title>
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
