import { Title } from '../../components/Text';
import { Section } from '../../components/Section';
import { Gallery } from '../../components/Gallery';
import { useContext } from 'react';
import { Context } from '../../context';


export const GalleryWidget = () => {
    const { pictures: items } = useContext(Context);

    return (
        <Section id="examples">
            <Title>Наши работы</Title>
            <Gallery items={items} />
        </Section>
  );
};
