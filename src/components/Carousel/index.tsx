import { Children, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
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
    const ref = useRef<HTMLDivElement>(null);

    const handleViewportWidth = (node: HTMLDivElement) => {
        const { width } = node.getBoundingClientRect();

        return setViewportWidth(width);
    };

    const onForward = useCallback(() => setIndex(index => lastIndex === index ? 0 : index + 1), [lastIndex]);

    const onBackward = useCallback(() => setIndex(index => index === 0 ? lastIndex : index - 1), [lastIndex]);

    const offset = (viewportWidth ?? 0) * currentIndex;

    useEffect(() => {
        const handleKeyboardClick = (event: KeyboardEvent) => {
            if (event.code === 'ArrowLeft') onBackward();
            if (event.code === 'ArrowRight') onForward();
        };

        const handleResize = () => {
            if (ref.current) {
                handleViewportWidth(ref.current);
            }
        };

        document.addEventListener('keydown', handleKeyboardClick);
        window.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener('keydown', handleKeyboardClick);
            window.removeEventListener('resize', handleResize);
        };
    }, [onForward, onBackward]);

    useEffect(() => {
        if (ref.current) {
            handleViewportWidth(ref.current);
        }
    }, []);

    return (
        <div className={styles.root}>
            <div className={styles.container} ref={ref}>
                <div className={styles.prev} onClick={onBackward}>
                    «
                </div>
                <div className={styles.viewport} style={{ width: viewportWidth }}>
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
