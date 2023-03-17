import { Children, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './styles.module.css';

interface Props {
    children: ReactNode,
    viewportWidth?: number,
    startIndex?: number;
}

export const Carousel = ({ children, viewportWidth: initialViewportWidth, startIndex = 0 }: Props) => {
    const childrenCount = Children.count(children);
    const lastIndex = childrenCount - 1;
    const [currentIndex, setIndex] = useState(startIndex);
    const [viewportWidth, setViewportWidth] = useState(initialViewportWidth);

    const handleViewportWidth = useCallback((node) => {
        if (node && !initialViewportWidth) {
            const { width } = node.getBoundingClientRect();

            return setViewportWidth(width);
        }
    }, [initialViewportWidth]);

    const onForward = () => setIndex(lastIndex === currentIndex ? 0 : currentIndex + 1);
    const onBackward = () => setIndex(currentIndex === 0 ? lastIndex : currentIndex - 1);

    const offset = viewportWidth * currentIndex;

    const handleKeyboardClick = useCallback((event: KeyboardEvent) => {
        if (event.code === 'ArrowLeft') {
            onBackward();
        }

        if (event.code === 'ArrowRight') {
            onForward();
        }
    }, [currentIndex])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyboardClick);

        return () => document.removeEventListener('keydown', handleKeyboardClick);
    })

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.prev} onClick={onBackward}>
                    «
                </div>
                <div className={styles.viewport} ref={handleViewportWidth} style={{ width: viewportWidth }}>
                    <div className={styles.list} style={{ transform: `translateX(-${offset}px)` }}>
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
