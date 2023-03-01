/* eslint-disable react-hooks/exhaustive-deps */

import { ReactNode, useMemo, useState } from 'react';
import { ColorPicker } from '../ColorPicker';
import { InputNumber, InputRange, InputText } from '../Input';
import { Column, Layout, Row } from '../Layout';
import Preview from '../Preview';
import styles from './styles.module.css';


const Subtitle = ({ children }: { children: ReactNode }) => (
    <span className={styles.subtitle}>{children}</span>
);


const initialColors = {
    roof: '#ffffff',
    walls: '#a5c8db',
    floor: '#626c6e',
};

const MaterialToOpacityMap = {
    'Глянец': 1,
    'Матовый': 0,
    'Сатин': 0.4,
    'Облака': -1,
};

const getOpacity = (material: string) => MaterialToOpacityMap[material] || 1;


interface Props {
    prices: {
        [type: string]: { [k: number]: number },
    },
    materials: string[],
    lightPrice: number,
    colorPrice: number,
    defaultMeterPrice: number,
    onCalc: (price: number) => void,
};


// @todo:
// figure out the better way to calc the area price
// the result should lead to removal of defaultMeterPrice

export const Calculator = ({ prices, lightPrice, colorPrice, defaultMeterPrice, onCalc, materials }: Props) => {
    const types = Object.keys(prices);

    const [area, setArea] = useState(0);
    const [lights, setLights] = useState(0);
    const [colors, setColors] = useState(initialColors);
    const [type, setType] = useState(types[0]);
    const [material, setMaterial] = useState(materials[0]);

    const [price, discount] = useMemo(() => {
        const additionalColorPrice = colors.roof !== '#ffffff' ? colorPrice * area : 0;
        const additionalLightPrice = lights > 1 ? lights * lightPrice : 0;

        const [max] = Object.keys(prices[type]).map(Number).sort((a, b) => b - a);

        let price = 0;
        let discount = 0;

        if (area > max) {
            price = prices[type][max] + defaultMeterPrice * (area - max);
        } else {
            price = prices[type][area];
        }

        price =
            material === materials[3]
                ? (price * 1.5 + additionalLightPrice)
                : (price + additionalColorPrice + additionalLightPrice);

        onCalc(price);

        return [price, discount];
    }, [area, lights, material, type]);

    const installment = price / 3;

    return (
        <Layout>
            <Column>
                <Preview colors={colors} material={material} opacity={getOpacity(material)} />
                <Row style={{ height: 40 }}>
                    <Subtitle>Цвет:</Subtitle>

                    <ColorPicker
                        label="Потолок"
                        color={colors.roof}
                        onChange={color => setColors({ ...colors, roof: color })}
                    />
                    <ColorPicker
                        label="Стены"
                        color={colors.walls}
                        onChange={color => setColors({ ...colors, walls: color })}
                    />
                    <ColorPicker
                        label="Пол"
                        color={colors.floor}
                        onChange={color => setColors({ ...colors, floor: color })}
                    />
                </Row>
                <Row style={{ height: 40 }}>
                    <Subtitle>Материал:</Subtitle>
                    <InputRange options={materials} currentItem={material} onClick={setMaterial} />
                </Row>
                <Row style={{ height: 40 }}>
                    <Subtitle>Класс:</Subtitle>
                    <InputRange options={types} currentItem={type} onClick={setType} />
                </Row>
                <Row style={{ height: 40 }}>
                    <Subtitle>Площадь, м²:</Subtitle>
                    <InputNumber value={area} onChange={setArea} />
                </Row>
                <Row style={{ height: 40 }}>
                    <Subtitle>Количество светильников:</Subtitle>
                    <InputNumber value={lights} onChange={setLights} />
                </Row>
                <Row style={{ height: 40 }}>
                    <Subtitle>Цена:</Subtitle>
                    <InputText value={`${price}₽`} />
                </Row>
                <Row style={{ height: 40 }}>
                    <Subtitle>Скидка:</Subtitle>
                    <InputText value={`${discount}%`} />
                </Row>
                <Row>
                    <Subtitle>Цена со скидкой:</Subtitle>
                    <InputText value={`${price - discount}₽`} />
                </Row>
                <p className={styles.disclaimer}>
                    Итоговая цена является достаточно точной, но все-таки приблизительной.
                </p>
                <p className={styles.disclaimer}>
                    При оплате 50% стоимости заказа доступна рассрочка на три месяца с ежемесячным платежом {installment.toFixed(2)} ₽
                </p>
            </Column>
        </Layout>
    );
}
