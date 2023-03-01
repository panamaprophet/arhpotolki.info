import styles from './styles.module.css';

type InputProps = {
    value: number;
    onChange?: (event) => void;
};

export const InputNumber = ({ value, onChange, ...props }: InputProps) => {
    return (
        <input
            type="number"
            value={String(value)}
            readOnly={onChange ? false : true}
            className={styles.root}
            onChange={event => onChange(event.target.value)}
            {...props}
        />
    );
};
