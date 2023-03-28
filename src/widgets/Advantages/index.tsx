import { ComponentProps } from 'react';
import Image from 'next/image';
import { Card } from '../../components/Card';
import { List } from '../../components/List';
import { Section } from '../../components/Section';
import { Title } from '../../components/Text';

import IconRegion from './images/1.png';
import IconPresent from './images/2.png';
import IconBuilding from './images/3.png';
import IconCurrency from './images/4.png';
import IconCheckList from './images/5.png';
import IconZeroProcent from './images/6.png';
import IconCamera from './images/7.png';
import IconHandshake from './images/8.png';
import IconTools from './images/9.png';
import IconFree from './images/10.png';
import IconThumbUp from './images/11.png';
import IconSandClock from './images/12.png';


const ListItem = (props: {
    icon: ComponentProps<typeof Image>['src'],
    text: string,
}) => (
    <Card>
        <Image src={props.icon} alt="" width={64} height={64} />
        <div>{props.text}</div>
    </Card>
);


export const Advantages = () => (
    <Section id="advantages" style={{ background: '#f7a136' }}>
        <Title>Только у нас:</Title>
        <List align="center">
            <ListItem icon={IconRegion} text="Работаем по всей Архангельской области" />
            <ListItem icon={IconCurrency} text="Лучшие цены на полотна Германии" />
            <ListItem icon={IconSandClock} text="Изготовление от одного дня" />
            <ListItem icon={IconFree} text="Бесплатный выезд замерщика" />
            <ListItem icon={IconPresent} text="Пенсионерам цены ещё лучше" />
            <ListItem icon={IconCheckList} text="Гарантия на потолок 15 лет" />
            <ListItem icon={IconThumbUp} text="Только качественные материалы" />
            <ListItem icon={IconTools} text="Опытные монтажники" />
            <ListItem icon={IconBuilding} text="Новоселам скидки" />
            <ListItem icon={IconZeroProcent} text="Рассрочка 0%" />
            <ListItem icon={IconCamera} text="Печать картин на ткани" />
            <ListItem icon={IconHandshake} text="Работаем с кор­по­ра­тив­ны­ми клиентами" />
        </List>
    </Section>
);
