import styles from './index.module.css';


interface Props {
    multiple?: boolean,
    onChange: (files: FileList) => void,
};


export const InputFile = ({ multiple = false, onChange }: Props) => (
    <label className={styles.root}>
        <input
            type="file"
            multiple={multiple}
            className={styles.input}
            onChange={event => onChange(event.target.files)}
        />
        <div className={styles.meta}>
            <div>Прикрепить файл</div>
            <div className={styles.text}>Перетащите сюда или нажмите для выбора</div>
        </div>
    </label>
);
