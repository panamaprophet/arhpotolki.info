import { useEffect, useState } from 'react';
import { InputFile } from '../Input';


interface SingleFileProps {
    multiple?: false,
    onUpload: (url: string) => void,
}
interface MultiFileProps {
    multiple: true,
    onUpload: (urls: string[]) => void,
}

type Props = SingleFileProps | MultiFileProps;


export const AwsFileUploader = ({ multiple = false, onUpload }: Props) => {
    const [files, setFiles] = useState<File[]>();

    const upload = async (file: File) => {
        try {
            const name = encodeURIComponent(file.name);
            const response = await fetch(`/api/upload/${name}`);
            const { url } = await response.json();

            await fetch(url, { method: 'PUT', body: file });

            return url.split('?')[0];
        } catch (error) {
            console.log('error during upload', error);

            return null;
        }
    };

    useEffect(() => {
        if (!files) return;

        (async () => {
            const fileList = Array.from(files);
            const promises = fileList.map(upload);
            const urls = await Promise.all(promises);

            onUpload(multiple ? urls : urls[0]);
        })();
    }, [files, multiple, onUpload]);

    return <InputFile multiple={multiple} onChange={setFiles} />
};
