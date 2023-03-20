import { Calculator as Calc } from '../../components/Calculator';
import { Section } from '../../components/Section';
import { Title } from '../../components/Text';


export const Calculator = ({ materials, prices, lightPrice, colorPrice, costBySquare, setOrder, order }) => {
    const onPriceChange = calculations => setOrder({ ...order, ...calculations });

    if (!prices && !materials) {
        return null;
    }

    return (
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
    );
};
