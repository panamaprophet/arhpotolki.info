import { cx } from "../../helpers";
import { Text } from "../Text";
import styles from './styles.module.css';

interface Props {
  state: 'start' | 'loading' | 'finish';
  text: string;
}

export const AnimatedButton = ({ state }: Props) => {
    return (
        <div className={cx(styles.root, styles[state])}>
            <div>{state === 'start' && 'Отправить'}</div>
            <div>{state === 'loading' && 'Отправляется...'}</div>
            <div>{state === 'finish' && 'Отправлено'}</div>
        </div>
    )
}
