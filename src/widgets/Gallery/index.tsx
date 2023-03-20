import { Title } from '../../components/Text';
import { Section } from '../../components/Section';
import { Gallery as Images } from '../../components/Gallery';

export const Gallery = ({ gallery }) => {
    return (
        <Section id="examples">
            <Title>Наши работы</Title>
            <Images items={gallery} />
        </Section>
  );
};
