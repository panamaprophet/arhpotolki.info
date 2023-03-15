import { MouseEventHandler, ReactNode } from 'react';
import styles from './index.module.css';


interface Props {
    theme?: 'none' | 'green' | 'orange' | 'grey',
    className?: string,
    disabled?: boolean,
    children?: ReactNode,
    onClick: () => (Promise<void> | void) | MouseEventHandler<HTMLButtonElement>,
};


export const Button = ({
    theme = 'none',
    className = '',
    children,
    disabled = false,
    onClick,
}: Props) => (
    <button type="button" disabled={disabled} onClick={onClick} className={[
        styles.root,
        styles[`theme_${theme}`],
        className
    ].join(' ')}>
        {children}
    </button>
);
