import { ComponentType, useState } from 'react'
import { cx } from '../../../helpers';
import styles from './index.module.css';

export const withAnimation = <P extends { onChange?: Function }>(Component: ComponentType<P>) => {
    const WrappedComponent = (props: P) => {
        const [isChanged, setChanged] = useState(false);

        const classes = cx(
            styles.root,
            isChanged && styles.root_animated
        );

        const onChange = (value: unknown) => {
            setChanged(true);

            if (props.onChange) {
                props.onChange(value);
            }
        };

        return (
            <div className={classes} onAnimationEnd={() => setChanged(false)}>
                <Component {...props} onChange={onChange} />
            </div>
        )
    }

    return WrappedComponent;
};
