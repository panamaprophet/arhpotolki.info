import { ComponentProps } from 'react';
import Image from 'next/image';
import { Card } from '../../components/Card';
import { List } from '../../components/List';
import { Section } from '../../components/Section';
import { Title } from '../../components/Text';

import Image1 from './images/1.jpg';
import Image2 from './images/2.jpg';
import Image3 from './images/3.jpg';
import Image4 from './images/4.jpg';
import Image5 from './images/5.jpg';
import Image6 from './images/6.jpg';


const ListItem = (props: { image: ComponentProps<typeof Image>['src'] }) => (
    <Card>
        <Image src={props.image} alt="" width={123} height={177} />
    </Card>
);


export const Certificates = () => (
    <Section id="certificates">
        <Title>Сертификаты соответствия:</Title>
        <List align="center">
            <ListItem image={Image1} />
            <ListItem image={Image2} />
            <ListItem image={Image3} />
            <ListItem image={Image4} />
            <ListItem image={Image5} />
            <ListItem image={Image6} />
        </List>
    </Section>
);
