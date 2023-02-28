import { cx } from '../../../helpers';
import styles from './styles.module.css';

export const InputRange = ({ options, currentItem, onClick }) => {
    return (
        <div className={styles.settings__buttons}>
            {options.map(item => (
                <div
                    className={cx(
                        styles.button,
                        item === currentItem && styles.buttonActive
                    )}
                    key={item}
                    onClick={event => onClick(item)}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};
