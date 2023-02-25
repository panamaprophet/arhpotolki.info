import { ReactNode } from 'react';
import styles from './index.module.css';


interface Props {
    children: ReactNode,
    position?: 'top' | 'bottom',
    align?: 'center' | 'space-between',
};


export const Sticky = ({ children, position = 'bottom', align = 'center' }: Props) => (
    <div className={[
        styles.root,
        styles[`position_${position}`],
        styles[`align_${align}`]
    ].join(' ')}>
        {children}
    </div>
);
