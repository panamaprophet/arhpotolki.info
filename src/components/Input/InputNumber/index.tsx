import styles from './styles.module.css';


interface Props {
    value: string | number,
    min?: number,
    onChange?: (value: number) => void,
};


export const InputNumber = ({ value, min = 0, onChange }: Props) => {
    return (
        <input
            type="number"
            min={min}
            value={String(value)}
            readOnly={!onChange}
            className={styles.root}
            onChange={(event) => {
                if (onChange) {
                    onChange(Number(event.target.value));
                }
            }}
        />
    );
};
