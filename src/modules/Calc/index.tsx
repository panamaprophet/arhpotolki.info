import Title from '../../components/Title';
import Calculator from '../../components/Calculator';
import { budgets, initialColors, materials } from '../../constants';
import styles from './styles.module.css';

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
