import { cx } from "../../helpers";
import styles from './styles.module.css';

interface Props {
  state: 'Отправить' | 'Отправляется' | 'Отправлено';
}

export const AnimatedButton = ({ state }: Props) => {
    const style = {
        'Отправить': "start",
        'Отправляется': "loading",
        'Отправлено': "finish"
    }

    return (
        <div className={cx(styles.root, styles[style[state]])}>
            <div>{state}{state === 'Отправляется' && <span className={styles.dots} />}</div>
        </div>
    )
}
