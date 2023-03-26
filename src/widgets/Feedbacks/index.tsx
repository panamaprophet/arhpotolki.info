import { useState } from 'react';
import { Button } from '../../components/Button';
import { Carousel } from '../../components/Carousel';
import { FeedbackForm } from '../../components/FeedbackForm';
import { FeedbackItem } from '../../components/FeedbackItem/FeedbackItem';
import { Row } from '../../components/Layout';
import { Modal } from '../../components/Modal';
import { Section } from '../../components/Section';
import { Title } from '../../components/Text';
import { Feedback } from '../../types';
import styles from './styles.module.css';


interface Props {
    feedbacks: Feedback[];
}

export type PrefetchFeedback = Omit<Feedback, 'id' | 'picture' | 'date'> & { picture: File }

const upload = async (file: File) => {
    try {
        const name = encodeURIComponent(file.name);
        const response = await fetch(`/api/upload/${name}`);
        const { url } = await response.json();

        await fetch(url, { method: 'PUT', body: file });

        return url.split('?')[0];
    } catch (error) {
        console.log('error during upload', error);

        return null;
    }
};


export const FeedbacksWidget = ({ feedbacks }: Props) => {
    const [isFeedbackFormVisible, setFeedbackFormVisible] = useState(false);
    const showFeedbackForm = () => setFeedbackFormVisible(true);
    const hideFeedbackForm = () => setFeedbackFormVisible(false);

    const onFeedbackSubmit = async (formData: PrefetchFeedback) => {
        const picture = await upload(formData.picture);
        const feedback = { ...formData, picture };


        return fetch('/api/feedback', {
            method: 'POST',
            body: JSON.stringify(feedback),
        });
    }

    return (
        <Section id="feedbacks">
            <Title>Отзывы:</Title>
            <Carousel>
                {feedbacks.map(item => (
                    <FeedbackItem key={item.id} {...item} />
                ))}
            </Carousel>
            <Row>
                <Button theme="orange" onClick={showFeedbackForm}>
                    Оставить отзыв
                </Button>
                <Modal size='small' isOpen={isFeedbackFormVisible} onClose={hideFeedbackForm}>
                    <div className={styles.closeButton} onClick={hideFeedbackForm}>
                        x
                    </div>
                    <FeedbackForm onSubmit={onFeedbackSubmit} />
                </Modal>
            </Row>
        </Section>
    );
};
