import { Children, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './styles.module.css';

interface Props {
    children: ReactNode;
}

export const Carousel = ({ children }: Props) => {
    const lastIndex = Children.count(children) - 1;
    const [currentIndex, setIndex] = useState(0);
    const [elementRect, setElementRect] = useState(null);
    const handleRect = useCallback((node) => {
        setElementRect(node?.getBoundingClientRect());
    }, []);

    const offset = (elementRect?.width / Children.count(children)) * currentIndex;
    const viewport = elementRect?.width / Children.count(children);

    const onForward = () => setIndex(lastIndex === currentIndex ? 0 : currentIndex + 1);
    const onBackward = () => setIndex(currentIndex === 0 ? lastIndex : currentIndex - 1);

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.prev} onClick={onBackward}>
                    «
                </div>
                <div className={styles.viewport} style={{ width: viewport }}>
                    <div className={styles.list} ref={handleRect} style={{ transform: `translateX(-${offset}px)` }}>
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
