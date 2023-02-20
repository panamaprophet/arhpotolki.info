import React, { useState } from 'react';
import mockButtons from './mocks/mockButtons';
import mockImages from './mocks/mockImages';
import Button from './Button';
import Image from './Image';
import styles from './styles.module.css';

function GalleryWithFilters() {
    const [currentButton, setCurrentButton] = useState(mockButtons[0]);
    const filteredGallery = mockImages.filter(
        (img) => img.category === currentButton.category
    );

    const handleClick = (button) => setCurrentButton(button);

    return (
        <>
            <ul className={styles.filter}>
                {mockButtons.map((button) => (
                    <Button
                        key={button.category}
                        button={button}
                        onClick={handleClick}
                        isActive={button === currentButton}
                    />
                ))}
            </ul>
            <ul className={styles.gallery}>
                {filteredGallery.map((img) => (
                    <li key={img.path} className={styles.gallery__item}>
                        <Image path={img.path} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default GalleryWithFilters;
