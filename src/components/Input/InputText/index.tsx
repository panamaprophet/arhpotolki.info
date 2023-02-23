import styles from './styles.module.css';

type InputProps = {
    value: string;
    onChange?: (event) => void;
};

export const InputText = ({ value, onChange, ...props }: InputProps) => {
    return (
        <input
            type="text"
            value={String(value)}
            readOnly={onChange ? false : true}
            className={styles.input__field}
            onChange={event => onChange(event.target.value)}
            {...props}
        />
    );
};
