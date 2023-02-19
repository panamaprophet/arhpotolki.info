import React, { useState } from 'react';
import BudgetControls from './components/BudgetControls';
import ColorsControls from './components/ColorsControls';
import ControlItem from './components/ControlItem';
import MaterialControls from './components/MaterialControls';
import styles from './styles.module.css';

export const budgets = {
    standart: 'Эконом (КНР)',
    premium: 'Премиум (Германия)',
};

function Controls({ colors, material, onColorChange, onMaterialChange }) {
    const [budget, setBudget] = useState(budgets.standart);
    const [square, setSquare] = useState(0);
    const [lights, setLights] = useState(0);

    const handleBudgetChange = (e) => setBudget(e.target.id);
    const handlePriceChange = (e) => setSquare(e.target.value);
    const handleLightsChange = (e) => setLights(e.target.value);

    return (
        <div>
            <ColorsControls colors={colors} onColorChange={onColorChange} />
            <MaterialControls
                material={material}
                onMaterialChange={onMaterialChange}
            />
            <BudgetControls
                budget={budget}
                handleBudgetChange={handleBudgetChange}
            />
            <ControlItem title="Площадь, м²">
                <input
                    type="number"
                    value={square}
                    className={styles.input__field}
                    onChange={handlePriceChange}
                />
            </ControlItem>
            <ControlItem title="Количество светильников">
                <input
                    type="number"
                    value={lights}
                    className={styles.input__field}
                    onChange={handleLightsChange}
                />
            </ControlItem>
            <ControlItem title="Цена">
                <input
                    type="text"
                    placeholder="Цена в рублях"
                    readOnly
                    className={styles.input__field}
                />
            </ControlItem>
            <ControlItem title="Скидка">
                <input
                    type="text"
                    placeholder="Цена в рублях"
                    readOnly
                    className={styles.input__field}
                />
            </ControlItem>
            <ControlItem title="Цена со скидкой">
                <input
                    type="text"
                    placeholder="Цена в рублях"
                    readOnly
                    className={styles.input__field}
                />
            </ControlItem>
            <p className={styles.settings__notice}>
                Итоговая цена является достаточно точной, но все-таки
                приблизительной.
            </p>
            <p className={styles.settings__notice}>
                При оплате 50% стоимости заказа доступна рассрочка на три месяца
                с ежемесячным платежом 0.00 ₽
            </p>
        </div>
    );
}

export default Controls;
