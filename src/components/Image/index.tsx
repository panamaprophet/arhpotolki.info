import Image from 'next/image';
import styles from './styles.module.css';


export const ImagePreview = ({ src, alt, onRemove }) => {
    return (
        <div className={styles.root}>
            <div className={styles.closeButton} onClick={onRemove}>x</div>
            <Image className={styles.image} src={window.URL.createObjectURL(src)} alt={alt} fill />
        </div>
    );
};
