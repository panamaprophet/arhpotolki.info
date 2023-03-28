import { cx } from '../../../helpers';
import styles from './styles.module.css';

interface Props {
    options: string[],
    currentItem: string,
    onClick: (selectedItem: string) => void,
}

export const InputRange = ({ options, currentItem, onClick }: Props) => {
    return (
        <div className={styles.settings__buttons}>
            {options.map(item => (
                <div
                    className={cx(
                        styles.button,
                        item === currentItem && styles.buttonActive
                    )}
                    key={item}
                    onClick={() => onClick(item)}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};
