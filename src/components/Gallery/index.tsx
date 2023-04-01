import Image from 'next/image';
import { useState } from 'react';
import { Picture } from '../../types';
import { Button } from '../Buttons/Button';
import { Carousel } from '../Carousel';
import { Column } from '../Layout';
import { List } from '../List';
import { Modal } from '../Modal';
import styles from './styles.module.css';


interface Props {
    items: Picture[],
}


export const Gallery = ({ items }: Props) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [filter, setFilter] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredItems = filter === null
        ? items
        : items.filter(item => item.tags.includes(filter));

    const tags = items
        .map(item => item.tags)
        .flat()
        .filter((item, index, items) => items.indexOf(item) === index);

    const openModal = (index: number) => {
        setModalOpen(true);
        setCurrentIndex(index);
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
                    <div key={item.id} className={styles.previewContainer}>
                        <Image
                            className={styles.preview}
                            src={item.url}
                            sizes="30vw"
                            alt=""
                            onClick={() => openModal(index)}
                            fill
                        />
                    </div>
                ))}
            </List>

            <Modal size="medium" isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <Carousel startIndex={currentIndex}>
                    {filteredItems.map(item => (
                        <Column key={item.id}>
                            <div className={styles.imageContainer}>
                                <Image
                                    className={styles.image}
                                    src={item.url}
                                    sizes="100vw"
                                    fill
                                    alt=""
                                />
                            </div>
                            <p className={styles.text}>{item.tags}</p>
                        </Column>
                    ))}
                </Carousel>
            </Modal>
        </>
    )
};
