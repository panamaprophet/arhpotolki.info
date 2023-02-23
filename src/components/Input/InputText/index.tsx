import styles from './styles.module.css';

type InputProps = {
    value: string,
    placeholder?: string,
    onChange?: (event) => void,
};

export const InputText = ({ value, placeholder, onChange, ...props }: InputProps) => {
    return (
        <input
            placeholder={placeholder}
            type="text"
            value={String(value)}
            readOnly={onChange ? false : true}
            className={styles.input__field}
            onChange={event => onChange(event.target.value)}
            {...props}
        />
    );
};
