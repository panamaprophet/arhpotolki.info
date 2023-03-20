import { useState } from "react";
import { Button } from "../../components/Button";
import { Carousel } from "../../components/Carousel";
import { FeedbackForm } from "../../components/FeedbackForm";
import { FeedbackItem } from "../../components/FeedbackItem/FeedbackItem";
import { Row } from "../../components/Layout";
import { Modal } from "../../components/Modal";
import { Section } from "../../components/Section";
import { Title } from "../../components/Text";

export const FeedbacksWidget = ({ feedbacks }) => {
    const [isFeedbackFormVisible, setFeedbackFormVisible] = useState(false);
    const showFeedbackForm = () => setFeedbackFormVisible(true);
    const hideFeedbackForm = () => setFeedbackFormVisible(false);

    const onFeedbackSubmit = (feedback) => {
        hideFeedbackForm();

        fetch('/api/feedback', {
            method: 'POST',
            body: JSON.stringify(feedback),
        });

        // @deprecated suggestion
        // @todo: show confirmation via Notification component
    };

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
                    <FeedbackForm onSubmit={onFeedbackSubmit} />
                </Modal>
            </Row>
        </Section>
    );
};
