import { useContext, useState } from 'react';
import { Button } from '../../components/Button';
import { Carousel } from '../../components/Carousel';
import { FeedbackForm } from '../../components/FeedbackForm';
import { FeedbackItem } from '../../components/FeedbackItem/FeedbackItem';
import { Cross } from '../../components/Icon';
import { Row } from '../../components/Layout';
import { Modal } from '../../components/Modal';
import { Section } from '../../components/Section';
import { Title } from '../../components/Text';
import { Context } from '../../context';
import { uploadFile } from '../../resolvers/storage';
import styles from './styles.module.css';


export const FeedbackWidget = () => {
    const { feedback: items } = useContext(Context);


    const [isFeedbackFormVisible, setFeedbackFormVisible] = useState(false);
    const showFeedbackForm = () => setFeedbackFormVisible(true);
    const hideFeedbackForm = () => setFeedbackFormVisible(false);

    const onFeedbackSubmit = async (formData: { author: string, city: string, text: string, picture?: File }) => {
        const picture = formData.picture
            ? await uploadFile(formData.picture)
            : null;

        const feedback = { ...formData, picture };

        return fetch('/api/feedback', {
            method: 'POST',
            body: JSON.stringify(feedback),
        });
    };

    return (
        <Section id="feedback">
            <Title>Отзывы:</Title>
            <Carousel>
                {items.map(item => (
                    <FeedbackItem key={item.id} {...item} />
                ))}
            </Carousel>
            <Row>
                <Button theme="orange" onClick={showFeedbackForm}>
                    Оставить отзыв
                </Button>
                <Modal size='medium' isOpen={isFeedbackFormVisible} onClose={hideFeedbackForm}>
                    <Button className={styles.button} onClick={hideFeedbackForm}>
                        <Cross />
                    </Button>
                    <FeedbackForm onSubmit={onFeedbackSubmit} />
                </Modal>
            </Row>
        </Section>
    );
};
