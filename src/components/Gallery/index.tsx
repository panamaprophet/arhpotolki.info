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

            <List>
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
                <Carousel>
                    {filteredItems.map(item => (
                        <Image
                            key={item.url}
                            src={item.url}
                            width={568}
                            height={400}
                            alt=""
                        />
                    ))}
                </Carousel>
            </Modal>
        </>
    )
};
