import { useContext, useState } from 'react';
import { Calculator } from '../../components/Calculator';
import { OrderForm } from '../../components/OrderForm';
import { Section } from '../../components/Section';
import { Title } from '../../components/Text';
import { Context } from '../../context';


export const Order = () => {
    const { settings } = useContext(Context);
    const { prices, materials, lightPrice, colorPrice, defaultMeterPrice } = settings;

    const [calculation, setCalculation] = useState({});

    const onOrderSubmit = (clientData: { name: string, phone: string }) =>
        fetch('/api/order', {
            method: 'POST',
            body: JSON.stringify({
                ...calculation,
                ...clientData
            }),
        });

    if (!prices || !materials || !lightPrice || !colorPrice || !defaultMeterPrice) {
        return null;
    }

    return (
        <>
            <Section id="calculator">
                <Title>Рассчитать стоимость:</Title>
                <Calculator
                    onCalc={setCalculation}
                    materials={materials}
                    prices={prices}
                    lightPrice={lightPrice}
                    colorPrice={colorPrice}
                    defaultMeterPrice={defaultMeterPrice}
                />
            </Section>

            <Section id="order" style={{ background: '#f7a136' }}>
                <Title condenced={true}>Оставить заявку:</Title>
                <OrderForm onSubmit={onOrderSubmit} />
            </Section>
        </>
    );
};
