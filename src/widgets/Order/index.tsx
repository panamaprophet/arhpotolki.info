import { useState } from 'react';
import { Calculator as Calc } from '../../components/Calculator';
import { OrderForm } from '../../components/OrderForm';
import { Section } from '../../components/Section';
import { Title } from '../../components/Text';


interface Props {
    prices: { 
        [type: string]: { 
            [k: number]: number 
        } 
    };
    materials: string[];
    lightPrice: number;
    colorPrice: number;
    costBySquare: number;
}

export const Order = ({ prices, materials, lightPrice, colorPrice, costBySquare }: Props) => {
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
                <Calc
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
