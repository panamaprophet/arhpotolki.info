import { useState } from 'react';
import Button from './Button';
import Image from 'next/image';
import { Modal } from '../../../components/Modal';
import { Carousel } from '../../../components/Carousel';
import { List } from '../../../components/List';

function GalleryWithFilters({ categories, images }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentButton, setCurrentButton] = useState(categories[0]);

    const filteredGallery = currentButton === categories[0] ? images : images.filter(
        (img) => img.category === currentButton.category
    );

    const handleClick = (button) => setCurrentButton(button);

    return (
        <>
            <List>
                {categories.map((button) => (
                    <Button
                        key={button.category}
                        button={button}
                        onClick={handleClick}
                        isActive={button === currentButton}
                    />
                ))}
            </List>
            <List>
                {filteredGallery.map(img => (
                    <Image key={img.path} onClick={() => setIsModalOpen(true)} src={img.path} width={207} height={145} alt={img.path} />
                ))}
            </List>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Carousel>
                    {filteredGallery.map(img => (
                        <Image key={img.path} src={img.path} width={568} height={400} alt={img.path} />
                    ))}
                </Carousel>
            </Modal>
        </>
    );
}

export default GalleryWithFilters;
