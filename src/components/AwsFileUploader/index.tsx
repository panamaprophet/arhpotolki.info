import { InputFile } from '../Input';


type Props = Omit<React.ComponentProps<typeof InputFile>, 'uploaderFunction'>;


export const AwsFileUploader = ({ multiple, onUpload }: Props) => {
    const uploaderFunction = async (file: File) => {
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

    return <InputFile multiple={multiple} onUpload={onUpload} uploaderFunction={uploaderFunction} />
};
