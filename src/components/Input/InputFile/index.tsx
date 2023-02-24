/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import styles from './index.module.css';


const uploadFile = async (file) => {
    const name = encodeURIComponent(file.name);
    const response = await fetch(`/api/upload/${name}`);
    const { url } = await response.json();

    await fetch(url, { method: 'PUT', body: file });

    return url.split('?')[0];
};


export const InputFile = ({ onUpload }) => {
    const [file, setFile] = useState(null);

    useEffect(() => {
        if (file) {
            uploadFile(file).then(onUpload);
        }
    }, [file]);

    return (
        <label className={styles.root}>
            <input
                className={styles.input}
                type="file"
                onChange={event => setFile(event.target.files[0])}
            />
            <div className={styles.meta}>
                <div>Прикрепить файл</div>
                <div className={styles.text}>Перетащите его сюда или нажмите для выбора</div>
            </div>
        </label>
    );
};
