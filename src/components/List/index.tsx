import { Children, ReactNode } from 'react';
import { cx } from '../../helpers';
import styles from './index.module.css';

type list = 'default' | 'numeric' | 'bullet' | 'circle';

interface Props {
    children: ReactNode,
    nowrap?: boolean,
    align?: string,
    margin?: string | number,
    flexFlow?: string,
    listType?: list,
}


export const List = ({
    children, 
    align = 'evenly', 
    margin = 'auto',
    nowrap = false, 
    flexFlow = 'row',
    listType='default', 
}: Props) => (
    <ul 
        className={
            cx(
                styles.root, 
                nowrap && styles.root_nowrap,
                styles[`flexFlow_${flexFlow}`],
                styles[`align_${align}`],
            )}
        style={{ margin: margin }}
    >
        {Children.map(children, (child, index) => (
            <li 
                key={index} 
                className={
                    cx(
                        styles[`listType_${listType}`]
                    )}
            >
                {child}
            </li>
        ))}
    </ul>
);
