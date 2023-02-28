import { MouseEventHandler, ReactNode } from 'react';
import styles from './index.module.css';


interface Props {
    theme?: 'none' | 'green' | 'orange' | 'grey',
    className?: string,
    children: ReactNode,
    onClick: MouseEventHandler<HTMLButtonElement>,
};


export const Button = ({
    theme = 'none',
    className = '',
    children,
    onClick,
}: Props) => (
    <button type="button" onClick={onClick} className={[
        styles.root,
        styles[`theme_${theme}`],
        className
    ].join(' ')}>
        {children}
    </button>
);
