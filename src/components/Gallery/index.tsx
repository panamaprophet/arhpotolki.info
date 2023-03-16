import Image from 'next/image';
import { useState } from 'react';
import { Picture } from '../../types';
import { Button } from '../Button';
import { Carousel } from '../Carousel';
import { List } from '../List';
import { Modal } from '../Modal';


interface Props {
    items: Picture[],
}

const IMAGE_WIDTH = 568;
const IMAGE_HEIGHT = 400;

export const Gallery = ({ items }: Props) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [filter, setFilter] = useState(null);

    const filteredItems = filter === null
        ? items
        : items.filter(item => item.tags.includes(filter));

    const tags = items
        .map(item => item.tags)
        .flat()
        .filter((item, index, items) => items.indexOf(item) === index);

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
                {filteredItems.map(item => (
                    <Image
                        key={item.url}
                        src={item.url}
                        width={207}
                        height={145}
                        alt=""
                        onClick={() => setModalOpen(true)}
                    />
                ))}
            </List>

            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <Carousel viewportWidth={IMAGE_WIDTH}>
                    {filteredItems.map(item => (
                        <Image
                            key={item.url}
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
