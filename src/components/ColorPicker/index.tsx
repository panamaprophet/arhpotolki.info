import React from 'react';
import styles from './styles.module.css';

function ColorPicker({ colors, color, onChange, label }) {
    return (
        <div
            className={styles.settings__button}
            style={{ background: colors[color] }}
        >
            <label>
                {label}
                <input
                    type="color"
                    hidden
                    onChange={event => onChange(event.target.value)}
                />
            </label>
        </div>
    );
    return;
}

export default ColorPicker;
