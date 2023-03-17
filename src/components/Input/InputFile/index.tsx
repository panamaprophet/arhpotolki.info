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


// interface Props {
//     multiple?: boolean,
//     onUpload: (url: string[]) => void,
// };


interface PropsForSingle {
    multiple: false,
    onUpload: (url: string) => void,
}

interface PropsForMultiple {
    multiple: true,
    onUpload: (urls: string[]) => void,
}

type Props = PropsForSingle | PropsForMultiple;


export const InputFile = ({ multiple = false, onUpload }: Props) => {
    const [files, setFiles] = useState(null);

    useEffect(() => {
        if (!files) {
            return;
        }

        (async () => {
            const urls = [];

            for (const file of files) {
                const url = await uploadFile(file);

                urls.push(url);
            }

            onUpload(multiple ? urls : urls[0]);
        })();
    }, [files]);

    return (
        <label className={styles.root}>
            <input
                multiple={multiple}
                className={styles.input}
                type="file"
                onChange={event => setFiles(event.target.files)}
            />
            <div className={styles.meta}>
                <div>Прикрепить файл</div>
                <div className={styles.text}>Перетащите сюда или нажмите для выбора</div>
            </div>
        </label>
    );
};
