import Image from 'next/image';
import { Card } from '../../components/Card';
import { List } from '../../components/List';
import { Section } from '../../components/Section';
import { Title } from '../../components/Text';
import { steps } from './data';


export const Steps = () => {
    return (
        <Section id="howto">
            <Title>Как это работает?</Title>
            <List align="center">
                {steps.map(item => (
                    <Card key={item.url}>
                        <Image src={item.url} alt="" width={64} height={64} style={{ background: '#f7a136', borderRadius: '50%' }} />
                        <div>{item.text}</div>
                    </Card>
                ))}
            </List>
        </Section>
    );
};
