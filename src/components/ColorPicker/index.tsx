import styles from './styles.module.css';


interface Props {
    color: string,
    label: string,
    onChange: (color: string) => void,
};


export const ColorPicker = ({ color, label, onChange }: Props) => (
    <div className={styles.root} style={{ background: color }}>
        <label>
            {label}
            <input type="color" hidden onChange={event => onChange(event.target.value)} />
        </label>
    </div>
);
