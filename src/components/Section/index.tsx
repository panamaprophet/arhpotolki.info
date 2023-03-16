import { CSSProperties, ReactNode } from 'react';
import styles from './styles.module.css';


interface Props {
    id?: string,
    style?: CSSProperties,
    children: ReactNode,
};


export const Section = ({ id, children, style }: Props) => (
    <section id={id} className={styles.root} style={style}>
        <div className={styles.wrapper}>
            {children}
        </div>
    </section>
);
