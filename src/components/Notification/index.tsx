import { createPortal } from 'react-dom';
import { cx } from '../../helpers';
import { Row } from '../Layout';
import styles from './styles.module.css';

interface Notification {
    text: string;
    onClose: () => void;
    theme?: string;
}

export const Notification = ({ theme = 'success', text, onClose }: Notification) => 
  createPortal(
    <div className={styles.root}>
        <div className={cx(
            styles.notification,
            styles[`theme_${theme}`]
        )}>
            <Row style={{ gap: '16px', alignItems: 'center' }}>
                <p className={styles.text}><strong>{text}</strong></p>
                <p className={styles.closeButton} onClick={onClose}>X</p>
            </Row>
        </div>
    </div>, document.body
  );

