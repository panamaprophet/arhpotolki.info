import React from 'react';
import styles from './styles.module.css';
import Title from '../../components/Title';
import mock from './mock';
import FeedbackItem from './components/FeedbackItem';
import Carousel from '../../components/Carousel';

function Feedbacks() {
    const persons = mock;

    return (
        <section id="feedbacks">
            <div className="layout">
                <Title>Отзывы:</Title>
                <div className={styles.responses}>
                    <Carousel items={persons}>
                        {persons.map(item => (
                            <FeedbackItem key={item.name} person={item} />
                        ))}
                    </Carousel>
                </div>
                <div className={styles.leave__response}>
                    <span className={styles.leave__response__title}>
                        Оставить отзыв
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Feedbacks;
