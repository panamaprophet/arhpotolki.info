import { ChangeEventHandler, useEffect, useState } from 'react';
import { cx } from '../../../helpers';
import styles from './index.module.css';


interface Props {
    multiple?: boolean,
    maxSize?: number,
    onChange: (files: File[]) => void,
};

function formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) return 'n/a';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${(bytes / Math.pow(k, i)).toFixed(dm)} ${sizes[i]}`;
}

const MESSAGE_RESET_TIMEOUT = 4200;
const DEFAULT_MAX_SIZE = 1024 * 1024

export const InputFile = ({ multiple = false, onChange, maxSize = DEFAULT_MAX_SIZE }: Props) => {
    const [isError, setError] = useState(false);

    const _onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (!event.target.files) {
            console.warn('no files was selected');
            return;
        }

        if (event.target.files[0].size > maxSize) {
            setError(true);

            return;
        }

        onChange(Array.from(event.target.files));
    }

    useEffect(() => {
        if (!isError) { return };

        const id = setTimeout(() => setError(false), MESSAGE_RESET_TIMEOUT);

        return () => clearTimeout(id);
    }, [isError])

    const title = isError
        ? 'Ошибка при загрузке'
        : 'Прикрепить файл';

    const subtitle = isError
        ? `Выбранный файл превышает допустимый размер в ${formatBytes(maxSize)}`
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
                <div>{title}</div>
                <div className={styles.text}>{subtitle}</div>
            </div>
        </label>
    );
};
