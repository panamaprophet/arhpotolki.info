import React from 'react';
import { budgets } from '../';
import ControlItem from './ControlItem';
import styles from './styles.module.css';

function BudgetControls({ budget, handleBudgetChange }) {
    return (
        <ControlItem title="Класс">
            <div className={styles.settings__buttons}>
                <div
                    className={`${styles.settings__button} ${
                        budget === budgets.standart &&
                        styles.settings__button__active
                    }`}
                    id={budgets.standart}
                    onClick={handleBudgetChange}
                >
                    Эконом (КНР)
                </div>
                <div
                    className={`${styles.settings__button} ${
                        budget === budgets.premium &&
                        styles.settings__button__active
                    }`}
                    id={budgets.premium}
                    onClick={handleBudgetChange}
                >
                    Премиум (Германия)
                </div>
            </div>
        </ControlItem>
    );
}

export default BudgetControls;
