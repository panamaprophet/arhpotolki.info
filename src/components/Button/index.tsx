import { MouseEventHandler, ReactNode } from 'react';
import styles from './index.module.css';


interface Props {
    type?: 'transparent' | 'classic',
    color?: 'green' | 'orange',
    size?: 'large' | 'medium' | 'small',
    wide?: boolean,
    className?: string,
    children: ReactNode,
    onClick: MouseEventHandler<HTMLButtonElement>,
};


export const Button = ({
    type = 'transparent',
    color = 'green',
    size = 'small',
    wide = false,
    className = '',
    children,
    onClick,
}: Props) => (
    <button type="button" onClick={onClick} className={[
        styles.root,
        styles[`type_${type}`],
        styles[`size_${size}`],
        type === 'classic' && styles[`color_${color}`],
        wide && styles.type_wide,
        className
    ].join(' ')}>
        {children}
    </button>
);
