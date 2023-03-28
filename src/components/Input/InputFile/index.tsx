import { ChangeEventHandler } from 'react';
import styles from './index.module.css';


interface Props {
    multiple?: boolean,
    onChange: (files: File[]) => void,
};


export const InputFile = ({ multiple = false, onChange }: Props) => {

    const _onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (!event.target.files) {
            console.warn('no files was selected');
            return;
        }

        onChange(Array.from(event.target.files));
    }

    return (
        <label className={styles.root}>
            <input
                type="file"
                multiple={multiple}
                className={styles.input}
                onChange={_onChange}
            />
            <div className={styles.meta}>
                <div>Прикрепить файл</div>
                <div className={styles.text}>Перетащите сюда или нажмите для выбора</div>
            </div>
        </label>
    );
};
