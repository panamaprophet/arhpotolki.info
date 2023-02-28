import Image from 'next/image';
import { useState } from 'react';
import { Carousel } from '../../components/Carousel';
import { List } from '../../components/List';
import { Modal } from '../../components/Modal';
import Button from './components/Button';
import styles from './styles.module.css';

function Gallery({ categories, images }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentButton, setCurrentButton] = useState(categories[0]);

    const filteredGallery = currentButton === categories[0] ? images : images.filter(
        (img) => img.category === currentButton.category
    );

    const handleClick = (button) => setCurrentButton(button);

    return (
        <section id="examples" className={`${styles.examples} layout`}>
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
        </section>
    );
}

export default Gallery;
