import Title from '../../components/Title';
import Calculator from '../../components/Calculator';
import { materials } from '../../constants';
import { colorPrice, prices } from './mock';

function Calc() {
    const initialPrices = {
        square: 700,
        light: 350,
    };
    return (
        <section id="calculator" className="layout">
            <Title>Рассчитать стоимость:</Title>
            <Calculator
                onCalc={() => {}}
                materials={materials}
                prices={prices}
                lightPrice={initialPrices.light}
                colorPrice={colorPrice}
            />
        </section>
    );
}

export default Calc;
