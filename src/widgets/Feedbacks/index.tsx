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


interface Props {
    feedbacks: Feedback[];
}


export const FeedbacksWidget = ({ feedbacks }: Props) => {
    const [isFeedbackFormVisible, setFeedbackFormVisible] = useState(false);
    const showFeedbackForm = () => setFeedbackFormVisible(true);
    const hideFeedbackForm = () => setFeedbackFormVisible(false);

    const onFeedbackSubmit = (feedback: { name: string, city: string, text: string, picture: string }) => 
        fetch('/api/feedback', {
            method: 'POST',
            body: JSON.stringify(feedback),
        });

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
                <Modal isOpen={isFeedbackFormVisible} onClose={hideFeedbackForm}>
                    <FeedbackForm onClose={hideFeedbackForm} onSubmit={onFeedbackSubmit} />
                </Modal>
            </Row>
        </Section>
    );
};
