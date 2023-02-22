/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEventHandler, useEffect, useState } from 'react';


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

    const onChange: ChangeEventHandler<HTMLInputElement> = event => setFile(event.target.files[0]);

    return (
        <form>
            <input type="file" onChange={onChange} />
        </form>
    );
};
