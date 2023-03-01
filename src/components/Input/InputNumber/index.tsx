import styles from './styles.module.css';


interface Props {
    value: number,
    onChange?: (value: number) => void,
};


export const InputNumber = ({ value, onChange }: Props) => {
    return (
        <input
            type="number"
            value={String(value)}
            readOnly={onChange ? false : true}
            className={styles.root}
            onChange={event => onChange(Number(event.target.value))}
        />
    );
};
