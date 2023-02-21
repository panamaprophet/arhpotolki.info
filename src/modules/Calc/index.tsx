import Title from '../../components/Title';
import Calculator from '../../components/Calculator';
import { budgets, materials } from '../../constants';

function Calc() {
    return (
        <section id="calculator" className="layout">
            <Title>Рассчитать стоимость:</Title>
            <Calculator
                onCalc={() => {}}
                materials={materials}
                types={budgets}
            />
        </section>
    );
}

export default Calc;
