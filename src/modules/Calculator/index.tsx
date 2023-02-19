import React, { useState } from 'react';
import styles from './styles.module.css';
import Title from '../../components/Title';
import Preview from './components/Preview';
import Controls from './components/Controls';

const initialColors = {
    roof: '#ffffff',
    walls: '#a5c8db',
    floor: '#626c6e',
};

export const materials = {
    gloss: 'Глянец',
    mate: 'Матовый',
    satine: 'Сатин',
    clouds: 'Облака',
};

function Calculator() {
    const [colors, setColors] = useState(initialColors);
    const [material, setMaterial] = useState(materials.gloss);

    const handleColors = (data) => setColors(data);
    const handleMaterialChange = (data) => setMaterial(data);

    return (
        <section id="calculator" className="layout">
            <Title>Рассчитать стоимость:</Title>
            <div className={styles.visualizer}>
                <div className={styles.visualizer__view}>
                    <Preview colors={colors} material={material} />
                    <Controls
                        colors={colors}
                        material={material}
                        onColorChange={handleColors}
                        onMaterialChange={handleMaterialChange}
                    />
                </div>
            </div>
        </section>
    );
}

export default Calculator;
