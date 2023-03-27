import { ReactNode, useEffect } from 'react';
import styles from './styles.module.css';
import { createPortal } from 'react-dom';
import { cx } from '../../helpers';

interface Props {
    children: ReactNode;
    isOpen: boolean;
    onClose?: () => void;
    size: 'small' | 'medium' | 'large';
}

export const Modal = ({ children, size, isOpen, onClose }: Props) => {
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
                <div className={cx(styles.modal, styles[`size_${size}`])}>{children}</div>
            </div>,
            document.body
        );
    }
};
