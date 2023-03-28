import { useContext, useState } from 'react';
import { Calculator } from '../../components/Calculator';
import { OrderForm } from '../../components/OrderForm';
import { Section } from '../../components/Section';
import { Title } from '../../components/Text';
import { Context } from '../../context';


export const Order = () => {
    const { settings } = useContext(Context);
    const { prices, materials, lightPrice, colorPrice, costBySquare } = settings;

    const [calculation, setCalculation] = useState({});

    const onOrderSubmit = clientData => 
        fetch('/api/order', {
            method: 'POST',
            body: JSON.stringify({ 
                ...calculation, 
                ...clientData 
            }),
        });

    if (!prices && !materials) {
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
