import React, { Children, ReactNode, useMemo, useRef, useState } from 'react';
import styles from './styles.module.css';

interface Props {
    children: ReactNode;
}

const Carousel = ({ children }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const lastIndex = Children.count(children) - 1;
    const [currentIndex, setIndex] = useState(0);
    const offset = useMemo(() => {
        if (!ref.current) {
            return 0;
        }

        const containerWidth = ref.current.getBoundingClientRect().width;

        return containerWidth * currentIndex;
    }, [ref, currentIndex]);

    const onForward = () => {
        if (lastIndex === currentIndex) {
            setIndex(0);
        } else {
            setIndex(currentIndex + 1);
        }
    };

    const onBackward = () => {
        if (currentIndex === 0) {
            setIndex(lastIndex);
        } else {
            setIndex(currentIndex - 1);
        }
    };

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.prev} onClick={onBackward}>
                    «
                </div>
                <div className={styles.viewport} ref={ref}>
                    <div
                        className={styles.list}
                        style={{ transform: `translateX(-${offset}px)` }}
                    >
                        {children}
                    </div>
                </div>
                <div className={styles.next} onClick={onForward}>
                    »
                </div>
            </div>
        </div>
    );
};

export default Carousel;
