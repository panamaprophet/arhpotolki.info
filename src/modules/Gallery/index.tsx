import React, { useState } from 'react';
import { Title } from '../../components/Text';
import styles from './styles.module.css';
import FullGallery from './components/FullGallery';
import GalleryWithFilters from './components/GalleryWithFilters';

function Gallery() {
    const [filterType, setFilterType] = useState('all');

    const handleFilter = (filter) => setFilterType(filter);

    return (
        <section id="examples" className={`${styles.examples} layout`}>
            <Title>
                Наши работы (
                <span
                    className={styles.filter__type}
                    onClick={() => handleFilter('all')}
                >
                    все
                </span>{' '}
                или{' '}
                <span
                    className={styles.filter__type}
                    onClick={() => handleFilter('category')}
                >
                    по категориям
                </span>
                )
            </Title>
            {filterType === 'all' ? <FullGallery /> : <GalleryWithFilters />}
        </section>
    );
}

export default Gallery;
