import { ReactNode, useEffect } from 'react';
import styles from './styles.module.css';
import { createPortal } from 'react-dom';

interface Props {
    children: ReactNode;
    isOpen: boolean;
    onClose?: () => void;
}

export const Modal = ({ children, isOpen, onClose }: Props) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'visible';
    }, [isOpen]);

    if (isOpen) {
        return createPortal(
            <div className={styles.root}>
                <div className={styles.overlay} onClick={onClose} />
                <div className={styles.modal}>{children}</div>
            </div>,
            document.body
        );
    }
};
