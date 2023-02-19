import React from 'react';
import ControlItem from './ControlItem';
import styles from './styles.module.css';

function ColorsControls({ colors, onColorChange }) {
    const handleColorChange = (e) =>
        onColorChange({ ...colors, [e.target.id]: e.target.value });

    return (
        <ControlItem title="Цвет">
            <div className={styles.settings__buttons}>
                <div
                    className={styles.settings__button}
                    style={{ background: colors.roof }}
                >
                    <label htmlFor="roof">Потолок</label>
                    <input
                        id="roof"
                        type="color"
                        hidden
                        onChange={handleColorChange}
                    />
                </div>
                <div
                    className={styles.settings__button}
                    style={{ background: colors.walls }}
                >
                    <label htmlFor="walls">Стены</label>
                    <input
                        id="walls"
                        type="color"
                        hidden
                        onChange={handleColorChange}
                    />
                </div>
                <div
                    className={styles.settings__button}
                    style={{ background: colors.floor }}
                >
                    <label htmlFor="floor">Пол</label>
                    <input
                        id="floor"
                        type="color"
                        hidden
                        onChange={handleColorChange}
                    />
                </div>
            </div>
        </ControlItem>
    );
}

export default ColorsControls;
