import Image from 'next/image';
import { Card } from '../../components/Card';
import { List } from '../../components/List';
import { Section } from '../../components/Section';
import { Title } from '../../components/Text';
import { features } from './data';


export const Advantages = () => {
    return (
        <Section id="advantages" style={{ background: '#f7a136' }}>
            <Title>Только у нас:</Title>
            <List align="center">
                {features.map(item => (
                    <Card key={item.url}>
                        <Image src={item.url} alt="" width={64} height={64} />
                        <div>{item.text}</div>
                    </Card>
                ))}
            </List>
        </Section>
    );
};
