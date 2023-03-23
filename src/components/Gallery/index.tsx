import Image from 'next/image';
import { useState } from 'react';
import { Picture } from '../../types';
import { Button } from '../Button';
import { Carousel } from '../Carousel';
import { List } from '../List';
import { Modal } from '../Modal';
import styles from './styles.module.css';


interface Props {
    items: Picture[],
}

const IMAGE_WIDTH = 568;
const IMAGE_HEIGHT = 400;

export const Gallery = ({ items }: Props) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [filter, setFilter] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredItems = filter === null
        ? items
        : items.filter(item => item.tags.includes(filter));

    const tags = items
        .map(item => item.tags)
        .flat()
        .filter((item, index, items) => items.indexOf(item) === index);

    const openModal = (index) => {
        setModalOpen(true)
        setCurrentIndex(index)
    }

    return (
        <>
            <List align="center">
                <Button onClick={() => setFilter(null)} theme={filter === null ? "orange" : "grey"}>
                    Все
                </Button>

                {tags.map(tag =>
                    <Button key={tag} onClick={() => setFilter(tag)} theme={filter === tag ? "orange" : "grey"}>
                        {tag}
                    </Button>
                )}
            </List>

            <List align='center'>
                {filteredItems.map((item, index) => (
                    <div key={item.url} className={styles.image}>
                        <Image
                            src={item.url}
                            alt=""
                            onClick={() => openModal(index)}
                            fill
                            />
                    </div>
                ))}
            </List>

            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <Carousel viewportWidth={IMAGE_WIDTH} startIndex={currentIndex}>
                    {filteredItems.map(item => (
                        <Image
                            className={styles.onLoad}
                            key={item.id}
                            src={item.url}
                            width={IMAGE_WIDTH}
                            height={IMAGE_HEIGHT}
                            alt=""
                        />
                    ))}
                </Carousel>
            </Modal>
        </>
    )
};
