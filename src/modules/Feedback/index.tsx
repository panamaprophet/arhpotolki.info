import React, { useState } from 'react';
import styles from './styles.module.css';
import Title from '../../components/Title';
import mock from './mock';
import FeedbackItem from './components/FeedbackItem';

function Feedbacks() {
  const [persons, setPersons] = useState(mock);
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);

  const handleNextPerson = () => {
    if (currentPersonIndex === persons.length - 1) {
      setCurrentPersonIndex(0);
    } else {
      setCurrentPersonIndex((prev) => prev + 1);
    }
  };
  const handlePrevPerson = () => {
    if (currentPersonIndex === 0) {
      setCurrentPersonIndex(persons.length - 1);
    } else {
      setCurrentPersonIndex((prev) => prev - 1);
    }
  };

  return (
    <section id="feedbacks">
      <div className="layout">
        <Title>Отзывы:</Title>
        <div className={styles.responses}>
          <div className={styles.responses__prev} onClick={handlePrevPerson}>
            «
          </div>
          <div className={styles.responses__list}>
            <FeedbackItem person={persons[currentPersonIndex]} />
          </div>
          <div className={styles.responses__next} onClick={handleNextPerson}>
            »
          </div>
        </div>
        <div className={styles.leave__response}>
          <span className={styles.leave__response__title}>Оставить отзыв</span>
        </div>
      </div>
    </section>
  );
}

export default Feedbacks;
