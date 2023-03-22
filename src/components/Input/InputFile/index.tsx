/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import styles from './index.module.css';


interface Props {
    multiple?: boolean,
    onUpload: (urls: string[]) => any,
    uploaderFunction: (file: File) => Promise<string>,
};


export const InputFile = ({
    multiple = false,
    uploaderFunction,
    onUpload,
}: Props) => {
    const [files, setFiles] = useState(null);

    useEffect(() => {
        if (!files) {
            return;
        }

        (async () => {
            const urls: string[] = [];

            for (const file of files) {
                urls.push(await uploaderFunction(file));
            }

            onUpload(urls);
        })();
    }, [files]);

    return (
        <label className={styles.root}>
            <input
                type="file"
                multiple={multiple}
                className={styles.input}
                onChange={event => setFiles(event.target.files)}
            />
            <div className={styles.meta}>
                <div>Прикрепить файл</div>
                <div className={styles.text}>Перетащите сюда или нажмите для выбора</div>
            </div>
        </label>
    );
};
