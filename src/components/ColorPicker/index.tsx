import React from 'react';
import styles from './styles.module.css';

function ColorPicker({ color, onChange, label }) {
    return (
        <div className={styles.settings__button} style={{ background: color }}>
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
}

export default ColorPicker;
