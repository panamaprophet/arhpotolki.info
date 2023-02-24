import { Children, ReactNode } from 'react';
import styles from './index.module.css';


interface Props {
    nowrap?: boolean,
    children: ReactNode,
}


export const List = ({ children, nowrap = false }: Props) => (
    <ul className={[styles.root, nowrap && styles.root_nowrap].join(' ')}>
        {Children.map(children, (child, index) => <li key={index}>{child}</li>)}
    </ul>
);
