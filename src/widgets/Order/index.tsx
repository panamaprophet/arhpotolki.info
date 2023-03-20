import { useState } from 'react';
import { Calculator as Calc } from '../../components/Calculator';
import { Gallery } from '../../components/Gallery';
import { OrderForm } from '../../components/OrderForm';
import { Section } from '../../components/Section';
import { Title } from '../../components/Text';


export const Order = ({ prices, materials, lightPrice, colorPrice, costBySquare }) => {
    const [calculation, setCalculation] = useState({});

    const onPriceChange = calculations => setCalculation({ ...calculation, ...calculations });

    const onOrderSubmit = (clientData) => {
        const orderData = {
            ...calculation,
            ...clientData,
        };

        setCalculation(orderData);

        return fetch('/api/order', {
            method: 'POST',
            body: JSON.stringify(orderData),
        });
    };

    if (!prices && !materials) {
        return null;
    }

    return (
        <>
            <Section id="calculator">
                <Title>Рассчитать стоимость:</Title>
                <Calc
                    onCalc={onPriceChange}
                    materials={materials}
                    prices={prices}
                    lightPrice={lightPrice}
                    colorPrice={colorPrice}
                    defaultMeterPrice={costBySquare}
                    />
            </Section>

            <Section id="application" style={{ background: '#f7a136' }}>
                <Title condenced={true}>Оставить заявку:</Title>
                <OrderForm onSubmit={onOrderSubmit} />
            </Section>
        </>
    );
};
