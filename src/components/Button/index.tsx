import { MouseEventHandler, ReactNode } from 'react';
import styles from './index.module.css';


interface Props {
    type?: 'button' | 'classic',
    className?: string,
    children: ReactNode,
    onClick: MouseEventHandler<HTMLButtonElement>,
};


export const Button = ({ type = 'button', className = '', children, onClick }: Props) => (
    <button type="button" onClick={onClick} className={[styles.root, styles[`type_${type}`], className].join(' ')}>
        {children}
    </button>
);
