import { Calculator } from "../../components/Calculator";
import { Section } from "../../components/Section";
import { Title } from "../../components/Text";

export const CalculatorWidget = ({ materials, prices, lightPrice, colorPrice, costBySquare, setOrder, order }) => {
    const onPriceChange = (calculations) => setOrder({ ...order, ...calculations });

    return (
            <Section id="calculator">
                <Title>Рассчитать стоимость:</Title>
                <Calculator
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
