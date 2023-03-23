import { Children, ReactNode, useCallback, useEffect, useState } from 'react';
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

    const handleViewportWidth = useCallback((node: HTMLDivElement) => {
        if (node && !initialViewportWidth) {
            const { width } = node.getBoundingClientRect();

            return setViewportWidth(width / childrenCount);
        }
    }, [initialViewportWidth]);

    const onForward = useCallback(() => setIndex(index => lastIndex === index ? 0 : index + 1), [lastIndex]);

    const onBackward = useCallback(() => setIndex(index => index === 0 ? lastIndex : index - 1), [lastIndex]);

    const offset = viewportWidth * currentIndex;

    useEffect(() => {
        const handleKeyboardClick = (event: KeyboardEvent) => {
            if (event.code === 'ArrowLeft') onBackward();
            if (event.code === 'ArrowRight') onForward();
        };

        document.addEventListener('keydown', handleKeyboardClick);

        return () => document.removeEventListener('keydown', handleKeyboardClick);
    }, [onForward, onBackward]);

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
