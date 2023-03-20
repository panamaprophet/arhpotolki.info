import { Title } from '../../components/Text';
import { Section } from '../../components/Section';
import { Gallery as Images } from '../../components/Gallery';
import { Picture } from '../../types';


interface Props {
    gallery: Picture[],
}


export const Gallery = ({ gallery }: Props) => {
    return (
        <Section id="examples">
            <Title>Наши работы</Title>
            <Images items={gallery} />
        </Section>
  );
};
