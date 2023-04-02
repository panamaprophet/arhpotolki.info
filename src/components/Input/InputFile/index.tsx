import { ChangeEventHandler, useState } from 'react';
import { cx } from '../../../helpers';
import styles from './index.module.css';


interface Props {
    multiple?: boolean,
    maxSize?: number,
    onChange: (files: File[]) => void,
};

const getSize = (maxSize: number) => {
    const isMegabyte = maxSize >= 1049000;

    if (isMegabyte) {
        const size = Math.round(maxSize / (1024 * 1024));

        return [size, 'MB'].join('');
    } else {
        const size = (maxSize / 1000).toFixed(2);

        return [size, 'kB'].join('');
    }
}

export const InputFile = ({ multiple = false, onChange, maxSize = 1049000 }: Props) => {
    const [isError, setError] = useState(false);

    const _onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (!event.target.files) {
            console.warn('no files was selected');
            return;
        }

        if (event.target.files[0].size > maxSize) {
            setError(true);

            setTimeout(() => setError(false), 4200);

            return;
        }

        onChange(Array.from(event.target.files));
    }

    const header = isError
        ? 'Ошибка при загрузке'
        : 'Прикрепить файл';

    const caption = isError
        ? `Выбранный файл превышает допустимый размер в ${getSize(maxSize)}`
        : 'Перетащите сюда или нажмите для выбора';

    return (
        <label className={cx(styles.root, isError && styles.error)}>
            <input
                type="file"
                multiple={multiple}
                className={styles.input}
                onChange={_onChange}
            />
            <div className={styles.meta}>
                <div>{header}</div>
                <div className={styles.text}>{caption}</div>
            </div>
        </label>
    );
};
