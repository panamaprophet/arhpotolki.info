import Image from 'next/image';
import { ComponentProps } from 'react';
import { Card } from '../../components/Card';
import { List } from '../../components/List';
import { Section } from '../../components/Section';
import { Title } from '../../components/Text';

import IconMustache from './images/1.png';
import IconDrill from './images/2.png';
import IconDiscount from './images/3.png';
import IconDocument from './images/4.png';
import IconCurrency from './images/5.png';
import IconPhone from './images/6.png';


const ListItem = (props: {
    icon: ComponentProps<typeof Image>['src'],
    text: string,
}) => (
    <Card>
        <Image src={props.icon} alt="" width={64} height={64} style={{ background: '#f7a136', borderRadius: '50%' }} />
        <div>{props.text}</div>
    </Card>
);


export const Steps = () => {
    return (
        <Section id="howto">
            <Title>Как это работает?</Title>
            <List align="center">
                <ListItem icon={IconPhone} text="Вы звоните или оставляете заявку" />
                <ListItem icon={IconMustache} text="Мы делаем замер потолка и расчет стоимости" />
                <ListItem icon={IconDocument} text="Подписываем все документы" />
                <ListItem icon={IconDiscount} text="Внесение аванса - 50% от общей суммы" />
                <ListItem icon={IconDrill} text="Установка потолка" />
                <ListItem icon={IconCurrency} text="Довольный клиент, оплата оставшихся 50%" />
            </List>
        </Section>
    );
};
