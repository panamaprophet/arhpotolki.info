import { MouseEventHandler, ReactNode } from 'react';
import styles from './index.module.css';
import { withStatus } from './withStatus';


interface Props {
    theme?: 'none' | 'green' | 'orange' | 'grey',
    size?: 'auto' | 'small',
    className?: string,
    disabled?: boolean,
    children?: ReactNode,
    onClick: () => (Promise<void> | void) | MouseEventHandler<HTMLButtonElement>,
};


export const Button = ({
    theme = 'none',
    size = 'auto',
    className = '',
    children,
    disabled = false,
    onClick,
}: Props) => (
    <button type="button" disabled={disabled} onClick={onClick} className={[
        styles.root,
        styles[`theme_${theme}`],
        styles[`size_${size}`],
        className,
    ].join(' ')}>
        {children}
    </button>
);

export const ButtonWithStatus = withStatus(Button)
