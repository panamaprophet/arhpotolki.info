import React from 'react';
import styles from './styles.module.css';
import Title from '../../components/Title';
import mock from './mock';
import FeedbackItem from './components/FeedbackItem';
import Carousel from '../../components/Carousel';
import { Feedback } from '../../types';

function Feedbacks() {
    const persons: Feedback[] = mock;

    return (
        <section id="feedbacks">
            <Title>Отзывы:</Title>
            <Carousel>
                {persons.map(item => (
                    <FeedbackItem key={item.id} {...item} />
                ))}
            </Carousel>
            <button>Оставить отзыв</button>
        </section>
    );
}

export default Feedbacks;
