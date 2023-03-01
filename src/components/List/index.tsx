import { Children, ReactNode } from 'react';
import { cx } from '../../helpers';
import styles from './index.module.css';


interface Props {
    nowrap?: boolean,
    align?: string,
    children: ReactNode,
}


export const List = ({ children, align = 'evenly', nowrap = false }: Props) => (
    <ul className={cx(styles.root, nowrap && styles.root_nowrap, styles[`align_${align}`])}>
        {Children.map(children, (child, index) => <li key={index} className={styles.listItem}>{child}</li>)}
    </ul>
);
