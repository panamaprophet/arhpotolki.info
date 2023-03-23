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

    useEffect(() => {
        const handleKeyboardClick = (event: KeyboardEvent) => {
            if (event.code === 'Escape') onClose();
        };

        document.addEventListener('keydown', handleKeyboardClick);

        return () => document.removeEventListener('keydown', handleKeyboardClick);
    }, []);

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
