import { ReactNode } from 'react';
import styles from './style.module.css';


interface Props {
    children: ReactNode,
    condenced?: boolean,
};


export const Title = ({ children, condenced = false }: Props) => (
    <h2 className={[styles.title, condenced && styles.title_condensed].join(' ')}>
        {children}
    </h2>
);
