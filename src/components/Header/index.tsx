import { ReactNode } from 'react';
import styles from './index.module.css';


interface Props {
    children: ReactNode,
};


export const Header = ({ children }: Props) => (
    <div className={styles.root}>
        {children}
    </div>
);
