import Image from 'next/image';
import { cx } from '../../helpers';
import styles from './styles.module.css';


interface Props {
    ceil: string,
    walls: string,
    floor: string,
    opacity: number,
};


export const Preview = ({ ceil, walls, floor, opacity }: Props) => (
    <div className={styles.root}>
        <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 842 574" version="1.1">
            <polygon points="730,95,766,0,0,0,0,20,282,134" fill={ceil} />
            <polygon points="0,16,284,124,726,90,762,0,842,0,842,432,722,380,276,350,0,424,0,246" fill={walls} />
            <polygon points="275,350,722,380,842,432,842,574,0,574,0,424" fill={floor} />
        </svg>
        <Image src="/visualizer/walls.png" className={styles.preview} alt="" fill={true} />
        <Image src="/visualizer/gloss.png" className={cx(styles.preview, styles.preview_type_gloss)} style={{ opacity }} alt="" fill={true} />
        {opacity === -1 && <Image src="/visualizer/sky-bg.png" className={cx(styles.preview, styles.preview_type_clouds)} alt="" fill={true} />}
    </div>
);
