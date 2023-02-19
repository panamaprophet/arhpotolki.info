import React from "react";
import { materials } from "../../..";
import ControlItem from "./ControlItem";
import styles from "./styles.module.css";

function MaterialControls({ material, onMaterialChange }) {
    const handleMaterialChange = (e) => onMaterialChange(e.target.id);

    return (
        <ControlItem title="Материал">
            <div className={styles.settings__buttons}>
                <div
                    className={`${styles.settings__button} ${
                        material === materials.gloss &&
                        styles.settings__button__active
                    }`}
                    id={materials.gloss}
                    onClick={handleMaterialChange}
                >
                    Глянец
                </div>
                <div
                    className={`${styles.settings__button} ${
                        material === materials.mate &&
                        styles.settings__button__active
                    }`}
                    id={materials.mate}
                    onClick={handleMaterialChange}
                >
                    Матовый
                </div>
                <div
                    className={`${styles.settings__button} ${
                        material === materials.satine &&
                        styles.settings__button__active
                    }`}
                    id={materials.satine}
                    onClick={handleMaterialChange}
                >
                    Сатин
                </div>
                <div
                    className={`${styles.settings__button} ${
                        material === materials.clouds &&
                        styles.settings__button__active
                    }`}
                    id={materials.clouds}
                    onClick={handleMaterialChange}
                >
                    Облака
                </div>
            </div>
        </ControlItem>
    );
}

export default MaterialControls;
