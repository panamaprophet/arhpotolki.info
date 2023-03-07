import { Children, ReactNode } from 'react';
import { cx } from '../../helpers';
import styles from './index.module.css';

interface Props {
    children: ReactNode,
    type?: 'default' | 'numeric' | 'bullet',
    align?: string,
    wrap?: boolean,
}

export const List = ({ children, align = 'evenly', type = 'default', wrap = true }: Props) => (
    <ul
        className={cx(
            styles.root,
            styles[`wrap_${wrap}`],
            styles[`align_${align}`],
            styles[`type_${type}`],
        )}
    >
        {Children.map(children, (child, index) => (
            <li key={index}>{child}</li>
        ))}
    </ul>
);
