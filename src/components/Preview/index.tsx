import React from 'react';
import styles from './styles.module.css';

function Preview({ colors, material, opacity }) {
    return (
        <>
            <div className={styles.visualizer__view__preview}>
                <div className={styles.visualizer__view__background}>
                    <img
                        src="/visualizer/walls.png"
                        className={styles.visualizer__view__preview__image}
                    />
                    <img
                        src="/visualizer/gloss.png"
                        className={
                            styles.visualizer__view__preview__image__head
                        }
                        style={{ opacity: opacity }}
                    />
                    {material === -1 && (
                        <img
                            src="/visualizer/sky-bg.png"
                            className={
                                styles.visualizer__view__preview_image__clouds
                            }
                        />
                    )}
                </div>

                <div className={styles.visualizer__view__preview__mask}>
                    <svg
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 842 574"
                        version="1.1"
                    >
                        <polygon
                            points="730,95,766,0,0,0,0,20,282,134"
                            fill={colors.roof}
                        ></polygon>
                        <polygon
                            points="0,16,284,124,726,90,762,0,842,0,842,432,722,380,276,350,0,424,0,246"
                            fill={colors.walls}
                        ></polygon>
                        <polygon
                            points="275,350,722,380,842,432,842,574,0,574,0,424"
                            fill={colors.floor}
                        ></polygon>
                    </svg>
                </div>
            </div>
        </>
    );
}

export default Preview;
