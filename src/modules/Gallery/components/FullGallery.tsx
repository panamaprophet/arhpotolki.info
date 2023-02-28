import mockImages from './mocks/mockImages';
import Image from 'next/image';
import styles from './styles.module.css';
import { Modal } from '../../../components/Modal';
import { Carousel } from '../../../components/Carousel';
import { useState } from 'react';
import { List } from '../../../components/List';

function FullGallery() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <List>
            {mockImages.map(img => (
                <Image key={img.path} onClick={() => setIsModalOpen(true)} src={img.path} width={207} height={145} alt={img.path} />
            ))}
            </List>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Carousel>
                    {mockImages.map(img => (
                        <Image key={img.path} src={img.path} width={568} height={400} alt={img.path} />
                    ))}
                </Carousel>
            </Modal>
        </>
    );
}

export default FullGallery;
