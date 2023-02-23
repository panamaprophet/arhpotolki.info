import Title from '../../components/Title';
import Calculator from '../../components/Calculator';
import { colorPrice, lightPrice, prices, materials } from './mock';

function Calc() {
    return (
        <section id="calculator" className="layout">
            <Title>Рассчитать стоимость:</Title>
            <Calculator
                onCalc={() => {}}
                materials={materials}
                prices={prices}
                lightPrice={lightPrice}
                colorPrice={colorPrice}
            />
        </section>
    );
}

export default Calc;
