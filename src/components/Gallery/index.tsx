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
                    <div key={item.url} className={styles.preview}>
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
                <Carousel startIndex={currentIndex}>
                    {filteredItems.map(item => (
                        <div key={item.url} className={styles.image}>
                            <Image key={item.id} src={item.url} fill alt="" />
                        </div>
                    ))}
                </Carousel>
            </Modal>
        </>
    )
};
