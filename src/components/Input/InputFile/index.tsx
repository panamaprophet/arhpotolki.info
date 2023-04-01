import { ChangeEventHandler, useState } from 'react';
import { cx } from '../../../helpers';
import styles from './index.module.css';


interface Props {
    multiple?: boolean,
    onChange: (files: File[]) => void,
};

const megabyteSize = 1049000;


export const InputFile = ({ multiple = false, onChange }: Props) => {
    const [isError, setIsError] = useState(false);

    const _onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (!event.target.files) {
            console.warn('no files was selected');
            return;
        }

        if (event.target.files[0].size > megabyteSize) {
            setIsError(true);

            setTimeout(() => setIsError(false), 4200);

            return;
        }

        onChange(Array.from(event.target.files));
    }

    return (
        <label className={cx(styles.root, isError && styles.error)}>
            <input
                type="file"
                multiple={multiple}
                className={styles.input}
                onChange={_onChange}
            />
            {isError && (
                <div className={styles.meta}>
                    <div>Ошибка при загрузке</div>
                    <div className={styles.text}>Выбранный файл превышает допустимый размер в 1 мегабайт</div>
                </div>
            )}
            {!isError && (
                <div className={styles.meta}>
                    <div>Прикрепить файл</div>
                    <div className={styles.text}>Перетащите сюда или нажмите для выбора</div>
                </div>
            )}
        </label>
    );
};
