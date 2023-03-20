import { OrderForm } from "../../components/OrderForm";
import { Section } from "../../components/Section";
import { Title } from "../../components/Text";

export const Application = ({ order, setOrder }) => {
    const onOrderSubmit = (clientData) => {
        const orderData = {
            ...order,
            ...clientData,
        };

        setOrder(orderData);

        fetch('/api/order', {
            method: 'POST',
            body: JSON.stringify(orderData),
        });
    };

    return (
        <Section id="application" style={{ background: '#f7a136' }}>
            <Title condenced={true}>Оставить заявку:</Title>
            <OrderForm onSubmit={onOrderSubmit} />
        </Section>  
    );
};
